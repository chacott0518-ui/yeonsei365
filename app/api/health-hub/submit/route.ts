import { NextResponse } from 'next/server'
import { createHmac } from 'crypto'
import { AI_CONTENT_POLICY } from '@/config/aiContentPolicy'
import {
  filterQuestion,
  validateTitle,
  formatValidationForSlack,
  autoCorrectClinicName,
} from '@/lib/contentValidator'

const TOKEN_LIFETIME_MS = 48 * 60 * 60 * 1000 // 생성 시점부터 정확히 48시간

// 토큰 형식: <32-char-hex-hmac>.<expiresAt-ms>
// 서명 입력: slug:action:expiresAt → 다른 action 재사용 불가 + 48시간 후 정확히 만료
// APPROVE_SECRET 미설정 시 빈 문자열 반환 (approve에서 환경별 분기 처리)
function generateApproveToken(slug: string, action: string): string {
  const secret = process.env.APPROVE_SECRET
  if (!secret) return ''
  const expiresAt = Date.now() + TOKEN_LIFETIME_MS
  const hmac = createHmac('sha256', secret)
    .update(`${slug}:${action}:${expiresAt}`)
    .digest('hex')
    .slice(0, 32)
  return `${hmac}.${expiresAt}`
}

const VALID_CATEGORIES = ['pregnancy', 'contraception', 'gynecology', 'surgery', 'womens']
const CATEGORY_LABELS: Record<string, string> = {
  pregnancy: '임신·출산', contraception: '피임',
  gynecology: '산부인과 질환', surgery: '수술·시술', womens: '여성건강',
}

export async function POST(req: Request) {
  try {
    const { category: rawCat, question } = await req.json()
    const category = VALID_CATEGORIES.includes(rawCat) ? rawCat : 'gynecology'

    // 1. 질문 필터링
    const filterResult = filterQuestion(question)
    if (!filterResult.allowed) {
      return NextResponse.json({ error: filterResult.rejectionReason }, { status: 400 })
    }
    const cleanedQuestion = filterResult.cleanedQuestion

    // 2. 제목 제안 생성 (Claude Haiku 소형 호출)
    const { originalTitle, suggestedTitle } = await generateTitleSuggestions(cleanedQuestion, category)

    // 3. 비공식 병원명 자동 교정
    const { corrected: corrOriginal, wasChanged: origChanged } = autoCorrectClinicName(originalTitle)
    const { corrected: corrSuggested } = autoCorrectClinicName(suggestedTitle)

    // 4. 제목 정책 검사
    const origResult = validateTitle(corrOriginal, 'originalTitle')
    const suggResult = validateTitle(corrSuggested, 'suggestedTitle')

    // 5. Slack 메시지 구성
    const slug = `q-${Date.now()}`
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.yeonsei365.com'
    const catLabel = CATEGORY_LABELS[category] || category

    // 각 action별 토큰 생성 — action이 다르면 토큰 재사용 불가
    const sharedParams = {
      category,
      question: cleanedQuestion.slice(0, 150),
      slug,
      originalTitle: corrOriginal,
      suggestedTitle: corrSuggested,
    }

    const makeApproveUrl = (action: string) => {
      const token = generateApproveToken(slug, action)
      const p = new URLSearchParams({ ...sharedParams, action, ...(token ? { token } : {}) })
      return `${baseUrl}/api/health-hub/approve?${p}`
    }

    const originalUrl = makeApproveUrl('original_title')
    const aiUrl = makeApproveUrl('ai_title')
    const rejectUrl = makeApproveUrl('reject')

    const origStatus = formatValidationForSlack(origResult, '원본 제목')
    const suggStatus = formatValidationForSlack(suggResult, 'AI 추천 제목')
    const correctionNote = origChanged ? '\n⚙️ 비공식 병원명 → 공식명으로 자동 교정됨' : ''

    const blocks: object[] = [
      { type: 'header', text: { type: 'plain_text', text: '🏥 연세365 헬스허브 — 새 질문 접수' } },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*카테고리:* ${catLabel}` },
          { type: 'mrkdwn', text: `*슬러그:* \`${slug}\`` },
          { type: 'mrkdwn', text: `*정책 버전:* ${AI_CONTENT_POLICY.policyVersion}` },
        ],
      },
      { type: 'section', text: { type: 'mrkdwn', text: `*질문 원문:*\n> ${cleanedQuestion}` } },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*원본 제목:* ${corrOriginal}${correctionNote}\n${origStatus}`,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*AI 추천 제목:* ${corrSuggested}\n${suggStatus}`,
        },
      },
      { type: 'divider' },
    ]

    // 버튼: 정책 위반 제목의 버튼은 표시하지 않음
    const actionElements: object[] = []
    if (origResult.valid) {
      actionElements.push({
        type: 'button',
        text: { type: 'plain_text', text: '📋 개인정보 제거 원본 제목으로 게시' },
        style: 'primary',
        url: originalUrl,
      })
    }
    if (suggResult.valid) {
      actionElements.push({
        type: 'button',
        text: { type: 'plain_text', text: '✨ AI 추천 제목으로 게시' },
        style: origResult.valid ? undefined : 'primary',
        url: aiUrl,
      })
    }
    actionElements.push({
      type: 'button',
      text: { type: 'plain_text', text: '❌ 게시 거절' },
      style: 'danger',
      url: rejectUrl,
    })
    blocks.push({ type: 'actions', elements: actionElements })

    const slackWebhook = process.env.SLACK_WEBHOOK_URL
    if (slackWebhook) {
      await fetch(slackWebhook, {
        method: 'POST',
        signal: AbortSignal.timeout(5000),
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blocks }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('[submit 오류]', e)
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}

async function generateTitleSuggestions(
  question: string,
  category: string
): Promise<{ originalTitle: string; suggestedTitle: string }> {
  const policy = AI_CONTENT_POLICY
  const pricingText = policy.abortionPricing.table.map((p) => `${p.weeks} ${p.label}`).join(', ')
  const fallback = {
    originalTitle: question.replace(/[?!]/g, '').trim().slice(0, 60) || '산부인과 질문',
    suggestedTitle: (question.replace(/[?!]/g, '').trim().slice(0, 40) || '산부인과') + ' 안내',
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return fallback

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 200,
        system: `산부인과 콘텐츠 제목 생성기. JSON만 출력하고 마크다운이나 설명을 절대 포함하지 마세요.

규칙:
- originalTitle: 개인정보만 제거하고 질문 의미를 보존한 정리 버전. 최대 58자.
- suggestedTitle: 명사형 SEO 제목. 물음표·느낌표·구어체 금지. 최대 45자.
- 병원명·전화번호 포함 금지
- 임신중절 가격: ${pricingText} (이 외 가격 언급 금지)

JSON 형식: {"originalTitle":"...","suggestedTitle":"..."}`,
        messages: [{ role: 'user', content: `카테고리: ${category}\n질문: ${question}` }],
      }),
    })

    if (!res.ok) return fallback
    const data = await res.json()
    const raw = data.content?.[0]?.text || ''
    const cleaned = raw.replace(/^```[a-z]*\s*/i, '').replace(/\s*```$/i, '').trim()
    const parsed = JSON.parse(cleaned)
    return {
      originalTitle: (String(parsed.originalTitle || '')).slice(0, 60) || fallback.originalTitle,
      suggestedTitle: (String(parsed.suggestedTitle || '')).slice(0, 50) || fallback.suggestedTitle,
    }
  } catch {
    return fallback
  }
}
