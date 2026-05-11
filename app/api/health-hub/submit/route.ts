import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { category, question, contact } = await req.json()
    if (!question || question.trim().length < 10) return NextResponse.json({ error: '질문이 너무 짧습니다' }, { status: 400 })

    let aiAnswer = '전문의 답변을 준비 중입니다. 연세365산부인과(02-585-3650)로 문의하시면 더 빠른 답변을 받으실 수 있습니다.'
    let suggestedTitle = question.slice(0, 40)
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
          max_tokens: 1000,
          system: `당신은 사당역 연세365산부인과의 산부인과 전문의입니다.
환자의 질문에 아래 규칙으로 답변하세요:
- 답변 길이: 400~900자
- 첫 문장에 핵심 정보 직접 포함 (AI 스니펫 최적화)
- 병원명 또는 전화번호 02-585-3650 1회 포함
- 의학 용어는 괄호로 설명 추가
반드시 아래 JSON 형식으로만 답변:
{"answer":"...","title":"SEO 최적화 제목(50자 이내)","slug":"english-lowercase-slug"}`,
          messages: [{ role: 'user', content: `카테고리: ${category}\n질문: ${question}` }],
        }),
      })
      if (aiRes.ok) {
        const data = await aiRes.json()
        const parsed = JSON.parse(data.content?.[0]?.text?.replace(/```json|```/g, '').trim() || '{}')
        if (parsed.answer) aiAnswer = parsed.answer
        if (parsed.title) suggestedTitle = parsed.title
        if (parsed.slug) suggestedSlug = parsed.slug
      }
    } catch (e) { console.warn('[AI 실패]', e) }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.yeonsei365.com'
    const approveUrl = `${baseUrl}/api/health-hub/approve?` + new URLSearchParams({ category, title: suggestedTitle, answer: aiAnswer, question, slug: suggestedSlug }).toString()

    const slackWebhook = process.env.SLACK_WEBHOOK_URL
    if (slackWebhook) {
      await fetch(slackWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocks: [
            { type: 'header', text: { type: 'plain_text', text: '🏥 연세365 헬스허브 — 새 질문 접수' } },
            { type: 'section', fields: [{ type: 'mrkdwn', text: `*카테고리:* ${category}` }, { type: 'mrkdwn', text: `*연락처:* ${contact || '없음'}` }] },
            { type: 'section', text: { type: 'mrkdwn', text: `*질문:*\n> ${question}` } },
            { type: 'section', text: { type: 'mrkdwn', text: `*AI 답변 초안:*\n${aiAnswer}` } },
            { type: 'section', text: { type: 'mrkdwn', text: `*제목:* ${suggestedTitle}\n*슬러그:* \`${suggestedSlug}\`\n*예상 URL:* ${baseUrl}/health-hub/${category}/${suggestedSlug}` } },
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