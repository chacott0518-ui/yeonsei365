import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { category, question } = await req.json()
    if (!question || question.trim().length < 10) return NextResponse.json({ error: '질문이 너무 짧습니다' }, { status: 400 })

    let articleData: any = null
    let suggestedSlug = `q-${Date.now()}`

    try {
      const aiRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY || '',
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 3000,
          system: `질문이 불완전하거나 비속어, 지역명만 있어도 산부인과 관련 질문으로 최대한 해석해서 완전한 의료 정보로 재구성하세요.

당신은 사당역 연세365산부인과의 산부인과 전문의입니다.
닥터나우 스타일의 구조화된 의료 정보를 아래 JSON 형식으로만 답변하세요.

규칙:
- heroAnswer: 핵심 정보 2~3문장 (100~150자, 검색 스니펫용)
- sections 전체 합산 800~1500자
- 병원명 또는 02-585-3650 1회 포함
- 의학 용어는 괄호로 설명
- FAQ는 실제 환자들이 자주 묻는 질문 3~5개

반드시 아래 JSON만 출력 (마크다운 코드블록 금지):
{
  "title": "SEO 최적화 제목 50자 이내",
  "slug": "english-lowercase-hyphen-slug",
  "heroAnswer": "핵심 답변 100~150자",
  "keywords": ["키워드1", "키워드2", "키워드3", "사당역산부인과"],
  "sections": [
    {
      "type": "text",
      "title": "소제목",
      "content": "본문 내용 200자 이상"
    },
    {
      "type": "infobox",
      "content": "핵심 요약 정보"
    },
    {
      "type": "checklist",
      "title": "체크리스트 제목",
      "items": ["항목1", "항목2", "항목3"]
    },
    {
      "type": "warnbox",
      "content": "주의사항 또는 즉시 내원 필요 증상"
    }
  ],
  "faq": [
    { "q": "자주 묻는 질문1", "a": "답변1 (100자 이상)" },
    { "q": "자주 묻는 질문2", "a": "답변2 (100자 이상)" },
    { "q": "자주 묻는 질문3", "a": "답변3 (100자 이상)" }
  ]
}`,
          messages: [{ role: 'user', content: `카테고리: ${category}\n질문: ${question}` }],
        }),
      })

      if (aiRes.ok) {
        const data = await aiRes.json()
        const raw = data.content?.[0]?.text?.replace(/```json|```/g, '').trim() || '{}'
        const parsed = JSON.parse(raw)
        if (parsed.title) {
          articleData = parsed
          suggestedSlug = parsed.slug || suggestedSlug
        }
      }
    } catch (e) { console.warn('[AI 실패]', e) }

    const title = articleData?.title || question.slice(0, 40)
    const heroAnswer = articleData?.heroAnswer || '전문의 답변을 준비 중입니다. 연세365산부인과(02-585-3650)로 문의하시면 더 빠른 답변을 받으실 수 있습니다.'

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.yeonsei365.com'
    const approveUrl = `${baseUrl}/api/health-hub/approve?` + new URLSearchParams({
      category,
      title,
      answer: heroAnswer,
      question,
      slug: suggestedSlug,
      articleData: JSON.stringify(articleData),
    }).toString()

    const slackWebhook = process.env.SLACK_WEBHOOK_URL
    if (slackWebhook) {
      await fetch(slackWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocks: [
            { type: 'header', text: { type: 'plain_text', text: '🏥 연세365 헬스허브 — 새 질문 접수' } },
            { type: 'section', fields: [{ type: 'mrkdwn', text: `*카테고리:* ${category}` }] },
            { type: 'section', text: { type: 'mrkdwn', text: `*질문:*\n> ${question}` } },
            { type: 'section', text: { type: 'mrkdwn', text: `*AI 답변 초안:*\n${heroAnswer}` } },
            { type: 'section', text: { type: 'mrkdwn', text: `*제목:* ${title}\n*슬러그:* \`${suggestedSlug}\`\n*예상 URL:* ${baseUrl}/health-hub/${category}/${suggestedSlug}` } },
            { type: 'actions', elements: [{ type: 'button', text: { type: 'plain_text', text: '✅ 승인 → 자동 배포' }, style: 'primary', url: approveUrl }] },
          ],
        }),
      })
    }
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}