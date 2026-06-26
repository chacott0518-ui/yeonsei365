import { createHmac, timingSafeEqual } from 'crypto'
import { AI_CONTENT_POLICY } from '@/config/aiContentPolicy'
import {
  validateTitle,
  validateContent,
  isMedicationAbortionRelated,
  hasMedAbortionNotice,
  autoCorrectClinicName,
} from '@/lib/contentValidator'

const VALID_CATEGORIES = ['pregnancy', 'contraception', 'gynecology', 'surgery', 'womens']
const DEFAULT_CATEGORY = 'gynecology'

// 로컬 개발환경: VERCEL_ENV 없고 NODE_ENV가 production이 아닌 경우만
function isLocalDev(): boolean {
  return !process.env.VERCEL_ENV && process.env.NODE_ENV !== 'production'
}

// timingSafeEqual 래퍼 — 길이가 다르면 즉시 false (길이 노출 방지)
function safeHmacCompare(received: string, expected: string): boolean {
  if (received.length !== expected.length) return false
  try {
    return timingSafeEqual(Buffer.from(received), Buffer.from(expected))
  } catch {
    return false
  }
}

// 보안 정책:
// - APPROVE_SECRET 없음 + 로컬 개발 → 허용 (개발 편의)
// - APPROVE_SECRET 없음 + Vercel Preview/Production 또는 NODE_ENV=production → 즉시 차단
// - APPROVE_SECRET 있음 → slug:action:expiresAt HMAC 검증 + 만료 확인 (timingSafeEqual)
function verifyApproveToken(slug: string, action: string, token: string): boolean {
  const secret = process.env.APPROVE_SECRET
  if (!secret) return isLocalDev()

  // 토큰 형식: <32-char-hex-hmac>.<expiresAt-ms>
  const dotIdx = token.lastIndexOf('.')
  if (dotIdx === -1) return false
  const receivedHmac = token.slice(0, dotIdx)
  const expiresAt = parseInt(token.slice(dotIdx + 1), 10)
  if (!Number.isFinite(expiresAt)) return false

  // 만료 확인 (생성 시점 + 48시간)
  if (Date.now() > expiresAt) return false

  // HMAC 검증 — 타이밍 공격 방어
  const expected = createHmac('sha256', secret)
    .update(`${slug}:${action}:${expiresAt}`)
    .digest('hex')
    .slice(0, 32)
  return safeHmacCompare(receivedHmac, expected)
}

async function notifyIndexNow(urls: string[]) {
  const key = process.env.INDEXNOW_KEY
  if (!key) return
  try {
    await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'www.yeonsei365.com',
        key,
        keyLocation: `https://www.yeonsei365.com/${key}.txt`,
        urlList: urls,
      }),
    })
  } catch (e) { console.error('[IndexNow]', e) }
}

function htmlPage(body: string): Response {
  return new Response(
    `<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <title>헬스허브 관리</title>
    <style>
      body{font-family:sans-serif;padding:40px 20px;max-width:640px;margin:0 auto;background:#FFF5F7}
      .card{background:#fff;border-radius:16px;padding:32px;border:0.5px solid #f0d0dc}
      h1{font-size:22px;font-weight:900;color:#1a1a1a;margin:16px 0 8px}
      p{font-size:14px;color:#888;line-height:1.7;margin-bottom:6px}
      .url{background:#FFF5F7;border:0.5px solid #f0d0dc;border-radius:8px;padding:10px 14px;font-size:13px;color:#993556;word-break:break-all;margin:16px 0}
      .btn{display:inline-block;background:#D6336C;color:#fff;font-size:14px;font-weight:700;padding:12px 24px;border-radius:20px;text-decoration:none;margin-top:16px}
      pre{font-size:11px;background:#f8f8f8;padding:10px;border-radius:8px;overflow-x:auto;white-space:pre-wrap;word-break:break-all}
    </style>
    </head><body><div class="card">${body}</div></body></html>`,
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  )
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const action = searchParams.get('action') // 'original_title' | 'ai_title' | 'reject' | null(legacy)
  const rawCategory = searchParams.get('category') || DEFAULT_CATEGORY
  const category = VALID_CATEGORIES.includes(rawCategory) ? rawCategory : DEFAULT_CATEGORY
  const categoryWasInvalid = rawCategory !== category
  const slug = searchParams.get('slug') || `q-${Date.now()}`
  const question = searchParams.get('question') || ''
  const paramOriginalTitle = searchParams.get('originalTitle') || ''
  const paramSuggestedTitle = searchParams.get('suggestedTitle') || ''
  const token = searchParams.get('token') || ''
  const articleUrl = `https://www.yeonsei365.com/health-hub/${category}/${slug}`

  // ── 토큰 검증 ───────────────────────────────────────────────
  if (!verifyApproveToken(slug, action || '', token)) {
    const noSecret = !process.env.APPROVE_SECRET
    return htmlPage(`
      <div style="font-size:48px">🚫</div>
      <h1>인증 실패</h1>
      <p>${noSecret
        ? 'APPROVE_SECRET 환경변수가 설정되지 않았습니다. Vercel 대시보드에서 설정해 주세요.'
        : '유효하지 않은 승인 요청이거나 토큰이 만료되었습니다 (48시간). Slack에서 새 질문을 제출해 주세요.'
      }</p>`)
  }

  // ── 거절 처리 ──────────────────────────────────────────────
  if (action === 'reject') {
    return htmlPage(`
      <div style="font-size:48px">🚫</div>
      <h1>게시 거절</h1>
      <p>운영자가 이 질문의 게시를 거절했습니다.</p>
      <p style="font-size:12px">슬러그: <code>${slug}</code></p>
      <a href="/health-hub" class="btn">헬스허브로 이동</a>`)
  }

  // ── 선택 제목 결정 ─────────────────────────────────────────
  let selectedTitle = ''
  let titleSelection: 'original' | 'suggested' | 'legacy' = 'legacy'

  if (action === 'original_title' && paramOriginalTitle) {
    // 콜백에서 재검사: URL 조작 방어
    const { corrected } = autoCorrectClinicName(paramOriginalTitle)
    const check = validateTitle(corrected, 'originalTitle')
    if (!check.valid) {
      const reasons = check.violations.map((v) => `[${v.ruleId}] ${v.message}`).join('<br>')
      return htmlPage(`
        <div style="font-size:48px">🚫</div>
        <h1>원본 제목 정책 위반 — 게시 차단</h1>
        <p>승인 시점 재검사에서 다음 위반이 발견되어 게시할 수 없습니다:</p>
        <pre>${reasons}</pre>
        <a href="/health-hub" class="btn">헬스허브로 이동</a>`)
    }
    selectedTitle = corrected
    titleSelection = 'original'
  } else if (action === 'ai_title' && paramSuggestedTitle) {
    const { corrected } = autoCorrectClinicName(paramSuggestedTitle)
    const check = validateTitle(corrected, 'suggestedTitle')
    if (!check.valid) {
      const reasons = check.violations.map((v) => `[${v.ruleId}] ${v.message}`).join('<br>')
      return htmlPage(`
        <div style="font-size:48px">🚫</div>
        <h1>AI 추천 제목 정책 위반 — 게시 차단</h1>
        <p>승인 시점 재검사에서 다음 위반이 발견되어 게시할 수 없습니다:</p>
        <pre>${reasons}</pre>
        <a href="/health-hub" class="btn">헬스허브로 이동</a>`)
    }
    selectedTitle = corrected
    titleSelection = 'suggested'
  }
  // action이 없는 legacy 요청: selectedTitle은 빈 문자열 → AI가 제목 생성

  // ── AI 콘텐츠 생성 ─────────────────────────────────────────
  const lastModified = new Date().toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit',
  }).replace(/\. /g, '-').replace('.', '')

  let articleData: Record<string, unknown> | null = null
  let aiFailReason = ''

  try {
    const aiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 8000,
        system: buildSystemPrompt(selectedTitle),
        messages: [{ role: 'user', content: `카테고리: ${category}\n질문: ${question}` }],
      }),
    })

    if (!aiRes.ok) {
      aiFailReason = `Claude API 응답 실패 (HTTP ${aiRes.status})`
    } else {
      const data = await aiRes.json()
      const rawText: string = data.content?.[0]?.text || ''
      if (!rawText) {
        aiFailReason = 'Claude 응답에 텍스트 내용이 없음'
      } else {
        const cleaned = rawText
          .replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '').trim()
        try {
          const parsed = JSON.parse(cleaned)
          if (parsed.title && parsed.sections && parsed.faq) {
            parsed.slug = slug
            articleData = parsed
          } else {
            aiFailReason = 'title/sections/faq 중 일부 필드 누락'
          }
        } catch (e) {
          aiFailReason = `JSON 파싱 실패: ${String(e).slice(0, 100)}`
        }
      }
    }
  } catch (e) {
    aiFailReason = `네트워크/예외 오류: ${String(e).slice(0, 100)}`
    console.error('[AI 예외]', e)
  }

  if (!articleData) {
    articleData = {
      title: (selectedTitle || question.slice(0, 45).replace(/[?!]/g, '').trim()) + (selectedTitle ? '' : ' 안내'),
      slug,
      aiSummary: '정확한 진단을 위해 산부인과 전문의 상담이 필요합니다.',
      description: '산부인과 관련 질문에 대한 전문의 답변입니다. 정확한 진단과 치료는 직접 진료를 통해 받으시기 바랍니다.',
      heroAnswer: '해당 증상이나 상황에 대한 정확한 진단과 치료를 위해서는 산부인과 전문의의 직접 진료가 필요합니다.',
      keywords: [question.split(' ')[0], '산부인과'],
      sections: [{ type: 'text', title: '어떻게 진료를 받아야 하나요?', content: '해당 증상이나 상황에 대해 정확한 진단과 치료를 위해서는 산부인과 전문의의 직접 진료가 필요합니다.' }],
      faq: [{ q: question, a: '정확한 답변을 위해 산부인과 전문의의 직접 진료를 권장합니다.' }],
    }
  }

  // selectedTitle이 있으면 AI 생성 title을 덮어씀
  if (selectedTitle) {
    articleData.title = selectedTitle
  }

  // ── 자동 교정 ──────────────────────────────────────────────
  const { corrected: correctedTitle, wasChanged: titleCorrected } = autoCorrectClinicName(String(articleData.title || ''))
  if (titleCorrected) articleData.title = correctedTitle

  // ── 본문 검사 ──────────────────────────────────────────────
  const allText = [
    String(articleData.title || ''),
    String(articleData.description || ''),
    JSON.stringify(articleData.sections || []),
    JSON.stringify(articleData.faq || []),
  ].join(' ')

  const bodyCheck = validateContent({ body: allText }, 'body')

  // 약물중절 관련 글에 미시행 안내 누락 검사
  if (isMedicationAbortionRelated(question + ' ' + String(articleData.title || ''))) {
    if (!hasMedAbortionNotice(allText)) {
      bodyCheck.violations.push({
        ruleId: 'ABORTION-MED-NOTICE',
        field: 'body',
        matchedText: '',
        message: '약물중절 관련 글에 미시행 안내 누락: "연세365산부인과의원에서는 약물중절을 시행하지 않습니다."',
        severity: 'block',
      })
    }
  }

  // block 위반이 있으면 게시 차단
  if (!bodyCheck.valid) {
    const reasons = bodyCheck.violations.map((v) => `[${v.ruleId}] ${v.field}: ${v.message}`).join('<br>')
    return htmlPage(`
      <div style="font-size:48px">🚫</div>
      <h1>본문 정책 위반 — 게시 차단</h1>
      <p>최종 게시 검사에서 위반이 발견되었습니다:</p>
      <pre>${reasons}</pre>
      <p style="font-size:12px">슬러그: <code>${slug}</code></p>
      <a href="/health-hub" class="btn">헬스허브로 이동</a>`)
  }

  // ── 카테고리 이미지 ────────────────────────────────────────
  const CATEGORY_IMAGES: Record<string, string> = {
    pregnancy: 'https://www.yeonsei365.com/images/hero-pregnancy-pc.svg',
    contraception: 'https://www.yeonsei365.com/images/hero-contraception-pc.svg',
    gynecology: 'https://www.yeonsei365.com/images/hero-gynecology-pc.svg',
    surgery: 'https://www.yeonsei365.com/images/hero-surgery-pc.svg',
    womens: 'https://www.yeonsei365.com/images/hero-womens-pc.svg',
  }
  const CATEGORY_MOBILE_IMAGES: Record<string, string> = {
    pregnancy: 'https://www.yeonsei365.com/images/hero-pregnancy-mobile.svg',
    contraception: 'https://www.yeonsei365.com/images/hero-contraception-mobile.svg',
    gynecology: 'https://www.yeonsei365.com/images/hero-gynecology-mobile.svg',
    surgery: 'https://www.yeonsei365.com/images/hero-surgery-mobile.svg',
    womens: 'https://www.yeonsei365.com/images/hero-womens-mobile.svg',
  }
  const heroImage = CATEGORY_IMAGES[category] || CATEGORY_IMAGES.gynecology
  const heroMobileImage = CATEGORY_MOBILE_IMAGES[category] || CATEGORY_MOBILE_IMAGES.gynecology

  const title = String(articleData.title || question.slice(0, 45))
  const description = String(articleData.description || '')
  const keywords = Array.isArray(articleData.keywords) ? articleData.keywords : [question.split(' ')[0], '산부인과']
  const sections = articleData.sections || []
  const faq = articleData.faq || []

  const s = (v: string) => v
    .replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/`/g, '\\`').replace(/\n/g, ' ')

  const sectionsCode = JSON.stringify(sections)
    .replace(/"type":\s*"(text|infobox|warnbox|checklist|table|steps)"/g,
      (_, t) => `"type": "${t}" as const`)

  const approvedAt = new Date().toISOString().slice(0, 10)
  const newEntry = `
  {
    slug: '${slug}',
    category: '${category}' as CategoryKey,
    title: '${s(title)}',
    description: '${s(description)}',
    keywords: ${JSON.stringify(keywords)},
    lastModified: '${lastModified}',
    heroImage: ${JSON.stringify(heroImage)},
    heroMobileImage: ${JSON.stringify(heroMobileImage)},
    originalTitle: '${s(paramOriginalTitle || title)}',
    suggestedTitle: '${s(paramSuggestedTitle || title)}',
    titleSelection: '${titleSelection}' as 'original' | 'suggested' | 'legacy',
    policyVersion: '${AI_CONTENT_POLICY.policyVersion}',
    approvedAt: '${approvedAt}',
    faq: ${JSON.stringify(faq)},
    sections: ${sectionsCode},
  },`

  // ── GitHub push ────────────────────────────────────────────
  let githubResult = '⚠️ GITHUB_TOKEN 미설정'
  try {
    const TOKEN = process.env.GITHUB_TOKEN
    const REPO = process.env.GITHUB_REPO
    if (TOKEN && REPO) {
      const fileRes = await fetch(
        `https://api.github.com/repos/${REPO}/contents/lib/healthHub.ts`,
        { headers: { Authorization: `Bearer ${TOKEN}`, Accept: 'application/vnd.github.v3+json' } }
      )
      if (fileRes.ok) {
        const fileData = await fileRes.json()
        const current: string = Buffer.from(fileData.content, 'base64').toString('utf-8')

        if (current.includes(`slug: '${slug}'`)) {
          return htmlPage(`
            <div style="font-size:48px">⚠️</div>
            <h1>이미 등록된 질문입니다</h1>
            <p>슬러그 <code>${slug}</code>는 이미 등록되어 있습니다.</p>
            <a href="/health-hub" class="btn">헬스허브로 이동</a>`)
        }

        const markerIdx = current.indexOf('export function getArticleBySlug')
        const insertIdx = current.lastIndexOf(']', markerIdx)
        if (markerIdx === -1 || insertIdx === -1) {
          githubResult = '❌ healthHub.ts 파일 구조 확인 필요'
        } else {
          const updated = current.slice(0, insertIdx) + newEntry + '\n  ' + current.slice(insertIdx)
          const pushRes = await fetch(
            `https://api.github.com/repos/${REPO}/contents/lib/healthHub.ts`,
            {
              method: 'PUT',
              headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
              body: JSON.stringify({
                message: `feat: ${title} Q&A 자동 추가`,
                content: Buffer.from(updated).toString('base64'),
                sha: fileData.sha,
              }),
            }
          )
          githubResult = pushRes.ok
            ? '✅ GitHub push 완료 → Vercel 자동 빌드 시작'
            : `❌ GitHub push 실패 (${pushRes.status})`
        }
      } else {
        githubResult = `❌ 파일 읽기 실패 (${fileRes.status})`
      }
    }
  } catch (e) { githubResult = `❌ 오류: ${String(e)}` }

  await notifyIndexNow([articleUrl])

  const warnBlock = bodyCheck.warnings.length > 0
    ? `<div style="background:#FFFBEB;border:1px solid #fde68a;border-radius:10px;padding:14px;margin-bottom:14px">
         <p style="color:#92400e;font-weight:700;font-size:13px;margin:0 0 6px">⚠️ 본문 경고 (게시는 됐습니다)</p>
         <pre style="font-size:11px;color:#78350f;margin:0">${bodyCheck.warnings.map((w) => `[${w.ruleId}] ${w.message}`).join('\n')}</pre>
       </div>`
    : ''

  const aiFailBlock = aiFailReason
    ? `<div style="background:#FFF0F0;border:1px solid #ffb3b3;border-radius:10px;padding:14px;margin-bottom:14px">
         <p style="color:#D6336C;font-weight:700;font-size:13px;margin:0 0 4px">⚠️ AI 생성 실패 — 기본 문구로 등록</p>
         <p style="color:#a33;font-size:11px;margin:0">${aiFailReason}</p>
       </div>`
    : ''

  const categoryWarnBlock = categoryWasInvalid
    ? `<div style="background:#FFFBEB;border:1px solid #fde68a;border-radius:10px;padding:14px;margin-bottom:14px">
         <p style="color:#92400e;font-weight:700;font-size:13px;margin:0 0 4px">⚠️ 잘못된 카테고리 → "${DEFAULT_CATEGORY}"로 자동 수정</p>
       </div>`
    : ''

  const titleSelectionLabel = {
    original: '📋 원본 제목으로 게시',
    suggested: '✨ AI 추천 제목으로 게시',
    legacy: '(구 방식 — 제목 선택 없음)',
  }[titleSelection]

  return htmlPage(`
    ${categoryWarnBlock}${aiFailBlock}${warnBlock}
    <div style="font-size:48px">✅</div>
    <h1>승인 완료</h1>
    <p><strong>제목 선택:</strong> ${titleSelectionLabel}</p>
    <p><strong>최종 제목:</strong> ${title}</p>
    <div class="url">${articleUrl}</div>
    <p>${githubResult}</p>
    <p>✅ IndexNow 제출 완료 → Bing 색인 요청됨</p>
    <p>⏳ Vercel 빌드 완료까지 약 1~2분 소요</p>
    <a href="/health-hub" class="btn">헬스허브로 이동</a>`)
}

function buildSystemPrompt(titleHint: string): string {
  const policy = AI_CONTENT_POLICY
  const officialName = policy.clinic.officialName
  const pricing = policy.abortionPricing.table.map((p) => `${p.weeks}: ${p.label}`).join(', ')
  const pricingIncludes = policy.abortionPricing.includes.join(', ')
  const titleInstruction = titleHint
    ? `제목은 반드시 다음 문자열을 그대로 사용하세요 (변경 금지): "${titleHint}"`
    : `━━━ 제목(title) 규칙 ━━━
- 물음표, 느낌표, 구어체("인데", "해요", "그런데", "인가요") 금지
- 반드시 명사형으로 마무리: "~여부", "~방법", "~안내", "~주의사항", "~가이드"
- 핵심 키워드를 앞에 배치, 30~45자 이내`

  return `당신은 산부인과 의료 정보 전문 콘텐츠 에디터입니다.
환자의 질문이 불완전하거나 비속어가 포함되어도 관련 의료 주제로 재구성하여 아래 JSON만 출력하세요.
마크다운 백틱, 앞뒤 텍스트, 주석 절대 금지. 오직 JSON만 출력.

━━━ 병원 정책 (반드시 준수) ━━━
- 공식 병원명: ${officialName} (다른 이름 사용 금지)
- 임신중절 공식 가격: ${pricing} (포함: ${pricingIncludes})
- 10주 초과 가격: "${policy.abortionPricing.exceeds10WeeksGuide}"라고만 안내
- 승인되지 않은 가격 범위(예: 30~80만원) 금지
- 여의사 없음 — "여의사", "여성 의료진" 진료 표현 금지
- 약물중절 미시행 — 약물중절 관련 글에는 "${policy.medicationAbortionPolicy.notPerformedNotice}" 포함 필수
- 약물 복용법·구매처·해외구매 안내 금지
- 병원 전화번호 절대 금지 (sections, faq, description 어디에도)
- 다음 표현 금지: ${policy.prohibitedAdvertisingTerms.filter((r) => r.enabled).map((r) => r.term).join(', ')}

${titleInstruction}

━━━ aiSummary 규칙 ━━━
- 질문에 대한 핵심 답변을 1~2문장으로 요약, 60자 이내
- "~입니다.", "~합니다." 형태

━━━ description 규칙 ━━━
- 80~120자 메타 설명, 병원명·전화번호 절대 금지

━━━ heroAnswer 규칙 ━━━
- 첫 문장에 직접 답변 (수치·법적 기준 등 구체적), 150자 이상, 병원명·전화번호 절대 금지

━━━ sections 규칙 ━━━
- 전체 합산 1500자 이상
- text 섹션 title은 질문형: "~인가요?", "~어떻게 되나요?"
- text 각 섹션 content 300자 이상
- infobox: "핵심: [사실A] | [사실B] | [사실C] | [사실D]" 형태
- warnbox: 즉시 내원 필요 증상 또는 주의사항

━━━ faq 규칙 ━━━
- 최소 5개, 각 답변 150자 이상
- q 필드: 실제 환자 검색어 말투
- a 필드: 의학 정보 중심, 병원명·전화번호 절대 금지

━━━ 출력 JSON 형식 ━━━
{"title":"명사형 SEO 제목","aiSummary":"핵심 요약 60자 이내","description":"80~120자 메타 설명","heroAnswer":"직접 답변 150자 이상","keywords":["키워드1","키워드2","키워드3","키워드4","키워드5"],"sections":[{"type":"text","title":"질문형 소제목?","content":"의료 정보 300자 이상"},{"type":"infobox","content":"핵심: 사실A | 사실B | 사실C | 사실D"},{"type":"checklist","title":"체크리스트","items":["항목1","항목2","항목3","항목4","항목5"]},{"type":"text","title":"두 번째 질문형 소제목?","content":"의료 정보 300자 이상"},{"type":"warnbox","content":"주의사항 또는 즉시 내원 필요 증상"}],"faq":[{"q":"환자 말투 질문1?","a":"의학 정보 답변 150자 이상"},{"q":"환자 말투 질문2?","a":"의학 정보 답변 150자 이상"},{"q":"환자 말투 질문3?","a":"의학 정보 답변 150자 이상"},{"q":"환자 말투 질문4?","a":"의학 정보 답변 150자 이상"},{"q":"환자 말투 질문5?","a":"의학 정보 답변 150자 이상"}]}`
}
