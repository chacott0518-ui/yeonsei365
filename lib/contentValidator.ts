import { AI_CONTENT_POLICY } from '@/config/aiContentPolicy'

export type ValidationViolation = {
  ruleId: string
  field: string
  matchedText: string
  message: string
  severity: 'block' | 'warn'
}

export type ValidationResult = {
  valid: boolean
  violations: ValidationViolation[]
  warnings: ValidationViolation[]
}

export type QuestionFilterResult = {
  allowed: boolean
  cleanedQuestion: string
  rejectionReason?: string
}

// 약물중절 관련 질문 여부 판별
export function isMedicationAbortionRelated(text: string): boolean {
  return AI_CONTENT_POLICY.medicationAbortionPolicy.relatedKeywords.some(
    (kw) => text.includes(kw)
  )
}

// 비공식 병원명을 공식명으로 자동 교정
export function autoCorrectClinicName(text: string): { corrected: string; wasChanged: boolean } {
  const officialName = AI_CONTENT_POLICY.clinic.officialName
  let corrected = text
  let wasChanged = false
  for (const unofficial of AI_CONTENT_POLICY.clinic.unofficialNames) {
    if (corrected.includes(unofficial)) {
      corrected = corrected.split(unofficial).join(officialName)
      wasChanged = true
    }
  }
  return { corrected, wasChanged }
}

// 질문 필터링: PII 제거, 조작 패턴 차단, 길이 검사
export function filterQuestion(question: string): QuestionFilterResult {
  const policy = AI_CONTENT_POLICY.questionFiltering
  const trimmed = (question || '').trim()

  if (trimmed.length < policy.minLength) {
    return { allowed: false, cleanedQuestion: '', rejectionReason: `질문이 너무 짧습니다 (최소 ${policy.minLength}자)` }
  }
  if (trimmed.length > policy.maxLength) {
    return { allowed: false, cleanedQuestion: '', rejectionReason: `질문이 너무 깁니다 (최대 ${policy.maxLength}자)` }
  }

  const lowerTrimmed = trimmed.toLowerCase()
  for (const keyword of policy.manipulationKeywords) {
    if (lowerTrimmed.includes(keyword.toLowerCase())) {
      return { allowed: false, cleanedQuestion: '', rejectionReason: '처리할 수 없는 요청입니다' }
    }
  }

  let cleaned = trimmed
  for (const pii of policy.piiPatterns) {
    const re = new RegExp(pii.pattern, 'g')
    if (re.test(cleaned)) {
      if (pii.action === 'reject') {
        return { allowed: false, cleanedQuestion: '', rejectionReason: `${pii.label}가 포함된 질문은 처리할 수 없습니다` }
      }
      cleaned = cleaned.replace(re, `[${pii.label} 삭제]`)
    }
  }

  return { allowed: true, cleanedQuestion: cleaned }
}

// 핵심 검사 함수
// context 'title': 광고 위험표현 → block / context 'body': → warn
export function validateContent(
  fields: Record<string, string>,
  context: 'title' | 'body' = 'body'
): ValidationResult {
  const violations: ValidationViolation[] = []
  const warnings: ValidationViolation[] = []
  const policy = AI_CONTENT_POLICY

  for (const [field, text] of Object.entries(fields)) {
    if (!text) continue

    // 비공식 병원명: 공식명 부분에 포함된 것은 제외하고 검사
    const textWithoutOfficial = text.split(policy.clinic.officialName).join('\x00OFFICIAL\x00')
    for (const name of policy.clinic.unofficialNames) {
      if (textWithoutOfficial.includes(name)) {
        violations.push({
          ruleId: 'CLINIC-001',
          field,
          matchedText: name,
          message: `비공식 병원명 "${name}" — 공식명 "${policy.clinic.officialName}"으로 교정 필요`,
          severity: 'block',
        })
      }
    }

    // 의료광고 위험표현 (제목: block, 본문: warn)
    for (const rule of policy.prohibitedAdvertisingTerms) {
      if (!rule.enabled) continue
      if (text.includes(rule.term)) {
        const severity: 'block' | 'warn' = context === 'title' ? 'block' : 'warn'
        const item: ValidationViolation = {
          ruleId: rule.id,
          field,
          matchedText: rule.term,
          message: `의료광고 위험표현 검토 필요: "${rule.term}"`,
          severity,
        }
        if (severity === 'block') violations.push(item)
        else warnings.push(item)
      }
    }

    // 확인되지 않은 병원 운영정보
    for (const rule of policy.prohibitedClinicClaims) {
      if (!rule.enabled) continue
      if (text.includes(rule.phrase)) {
        violations.push({
          ruleId: rule.id,
          field,
          matchedText: rule.phrase,
          message: `확인되지 않은 병원 운영정보: "${rule.phrase}"`,
          severity: 'block',
        })
      }
    }

    // 비승인 가격 표현
    for (const phrase of policy.abortionPricing.invalidPhrases) {
      if (text.includes(phrase)) {
        violations.push({
          ruleId: 'ABORTION-001',
          field,
          matchedText: phrase,
          message: `비승인 가격 표현: "${phrase}"`,
          severity: 'block',
        })
      }
    }

    // 약물중절 금지 표현
    for (const rule of policy.medicationAbortionPolicy.prohibitedPhrases) {
      if (text.includes(rule.phrase)) {
        violations.push({
          ruleId: rule.id,
          field,
          matchedText: rule.phrase,
          message: `약물중절 서비스 오인 표현: "${rule.phrase}"`,
          severity: 'block',
        })
      }
    }
  }

  return { valid: violations.length === 0, violations, warnings }
}

// 제목 전용 검사 (길이 + 내용 정책)
export function validateTitle(
  title: string,
  field: 'originalTitle' | 'suggestedTitle'
): ValidationResult {
  const config = field === 'originalTitle'
    ? AI_CONTENT_POLICY.titlePolicy.original
    : AI_CONTENT_POLICY.titlePolicy.suggested
  const result = validateContent({ [field]: title }, 'title')

  if (!title || title.trim().length === 0) {
    result.violations.push({ ruleId: 'TITLE-001', field, matchedText: '', message: '제목이 비어 있습니다', severity: 'block' })
  } else if (title.length < config.minLength) {
    result.violations.push({ ruleId: 'TITLE-002', field, matchedText: title, message: `제목이 너무 짧습니다 (${title.length}자 < ${config.minLength}자)`, severity: 'block' })
  } else if (title.length > config.maxLength) {
    result.warnings.push({ ruleId: 'TITLE-003', field, matchedText: title, message: `제목이 다소 깁니다 (${title.length}자 > ${config.maxLength}자)`, severity: 'warn' })
  }

  result.valid = result.violations.length === 0
  return result
}

// 약물중절 관련 글에 미시행 안내 포함 여부 확인
export function hasMedAbortionNotice(body: string): boolean {
  return body.includes(AI_CONTENT_POLICY.medicationAbortionPolicy.notPerformedNotice)
}

// Slack 표시용 검사 결과 포맷
export function formatValidationForSlack(result: ValidationResult, label: string): string {
  if (result.violations.length === 0 && result.warnings.length === 0) {
    return `✅ ${label} 정책 검사 통과`
  }
  const lines: string[] = []
  if (result.violations.length > 0) {
    lines.push(`🚫 ${label} 차단 (${result.violations.length}건):`)
    for (const v of result.violations) lines.push(`  · [${v.ruleId}] ${v.message}`)
  }
  if (result.warnings.length > 0) {
    lines.push(`⚠️ ${label} 경고 (${result.warnings.length}건):`)
    for (const w of result.warnings) lines.push(`  · [${w.ruleId}] ${w.message}`)
  }
  return lines.join('\n')
}
