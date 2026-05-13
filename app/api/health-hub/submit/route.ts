import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { category, question } = await req.json()
    if (!question || question.trim().length < 10) {
      return NextResponse.json({ error: '질문이 너무 짧습니다' }, { status: 400 })
    }

    const suggestedSlug = `q-${Date.now()}`
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.yeonsei365.com'

    // AI 생성은 승인 시점으로 이동 — 여기서는 Slack만 즉시 발송
    const approveUrl = `${baseUrl}/api/health-hub/approve?` + new URLSearchParams({
      category,
      question,
      slug: suggestedSlug,
    }).toString()

    const slackWebhook = process.env.SLACK_WEBHOOK_URL
    if (slackWebhook) {
      await fetch(slackWebhook, {
        method: 'POST',
        signal: AbortSignal.timeout(5000),
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocks: [
            { type: 'header', text: { type: 'plain_text', text: '🏥 연세365 헬스허브 — 새 질문 접수' } },
            { type: 'section', fields: [{ type: 'mrkdwn', text: `*카테고리:* ${category}` }] },
            { type: 'section', text: { type: 'mrkdwn', text: `*질문:*\n> ${question}` } },
            { type: 'section', text: { type: 'mrkdwn', text: `*슬러그:* \`${suggestedSlug}\`\n*예상 URL:* ${baseUrl}/health-hub/${category}/${suggestedSlug}` } },
            { type: 'actions', elements: [{ type: 'button', text: { type: 'plain_text', text: '✅ 승인 → AI 생성 + 자동 배포' }, style: 'primary', url: approveUrl }] },
          ],
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('[submit 오류]', e)
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}