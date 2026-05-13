import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { category, question } = await req.json()
    if (!question || question.trim().length < 10) {
      return NextResponse.json({ error: '질문이 너무 짧습니다' }, { status: 400 })
    }

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
          max_tokens: 4000,
          system: `질문이 불완전하거나 비속어, 지역명만 있거나 의도가 불명확해도 산부인과 관련 질문으로 최대한 해석해서 완전한 의료 정보로 재구성하세요. 예: "과천에서 낙태 어디서 해" → "과천 근처 임신중절수술 안전하게 받을 수 있는 곳은?"

당신은 사당역 연세365산부인과의 산부인과 전문의입니다.
하이닥, 닥터나우 스타일의 구조화된 의료 정보를 아래 JSON 형식으로만 답변하세요.

규칙:
- heroAnswer: 핵심 정보 3~4문장 (150~200자, 검색 스니펫용, 첫 문장에 핵심 직접 포함)
- sections 전체 합산 반드시 1500자 이상 2000자 이하
- text 섹션은 각각 300자 이상
- 병원명 또는 02-585-3650 자연스럽게 1~2회 포함
- 의학 용어는 반드시 괄호로 설명 추가
- FAQ는 실제 환자들이 자주 묻는 질문 5개, 각 답변 150자 이상
- sections는 반드시 5개 이상: text, infobox, checklist, table 또는 steps, warnbox 순서로 구성

반드시 아래 JSON만 출력 (마크다운 코드블록, 백틱 절대 금지, 앞뒤 텍스트 절대 금지):
{"title":"SEO 최적화 제목 50자 이내","slug":"english-lowercase-hyphen-slug","heroAnswer":"핵심 답변 150~200자","keywords":["키워드1","키워드2","키워드3","사당역산부인과"],"sections":[{"type":"text","title":"소제목","content":"본문 300자 이상"},{"type":"infobox","content":"핵심 요약 정보 100자 이상"},{"type":"checklist","title":"체크리스트 제목","items":["항목1 (설명 포함)","항목2 (설명 포함)","항목3 (설명 포함)","항목4 (설명 포함)","항목5 (설명 포함)"]},{"type":"text","title":"두번째 소제목","content":"본문 300자 이상"},{"type":"warnbox","content":"주의사항 또는 즉시 내원 필요 증상 100자 이상"}],"faq":[{"q":"자주 묻는 질문1","a":"답변1 150자 이상"},{"q":"자주 묻는 질문2","a":"답변2 150자 이상"},{"q":"자주 묻는 질문3","a":"답변3 150자 이상"},{"q":"자주 묻는 질문4","a":"답변4 150자 이상"},{"q":"자주 묻는 질문5","a":"답변5 150자 이상"}]}`,
          messages: [{ role: 'user', content: `카테고리: ${category}\n질문: ${question}` }],
        }),
      })

      if (aiRes.ok) {
        const data = await aiRes.json()
        const rawText = data.content?.[0]?.text || ''
        console.log('[AI 원본 응답]', rawText.slice(0, 200))
        
        const cleaned = rawText
          .replace(/^```json\s*/i, '')
          .replace(/^```\s*/i, '')
          .replace(/\s*```$/i, '')
          .trim()

        const parsed = JSON.parse(cleaned)
        
        if (parsed.title && parsed.sections && parsed.faq) {
          articleData = parsed
          suggestedSlug = parsed.slug || suggestedSlug
          console.log('[AI 성공] title:', parsed.title)
        } else {
          console.warn('[AI 파싱 실패] 필드 누락:', Object.keys(parsed))
        }
      } else {
        const errText = await aiRes.text()
        console.error('[AI HTTP 오류]', aiRes.status, errText)
      }
    } catch (e) {
      console.error('[AI 예외]', e)
    }

    // AI 실패시 기본 구조 생성
    if (!articleData) {
      console.warn('[폴백] articleData null — 기본 구조 사용')
      articleData = {
        title: question.slice(0, 50),
        slug: suggestedSlug,
        heroAnswer: '연세365산부인과(02-585-3650)에 문의하시면 전문의가 직접 답변해 드립니다.',
        keywords: [question.split(' ')[0], '산부인과', '사당역산부인과'],
        sections: [{
          type: 'text',
          title: question.slice(0, 50),
          content: '연세365산부인과(02-585-3650)에 문의하시면 전문의가 직접 답변해 드립니다. 사당역 4번출구에서 도보 1분 거리에 위치해 있으며, 당일 예약 및 당일 진료가 가능합니다.'
        }],
        faq: [{ q: question, a: '연세365산부인과(02-585-3650)에 문의하시면 전문의가 직접 답변해 드립니다.' }]
      }
    }

    const title = articleData.title
    const heroAnswer = articleData.heroAnswer

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
            { type: 'section', text: { type: 'mrkdwn', text: `*제목:* ${title}\n*슬러그:* \`${suggestedSlug}\`\n*섹션 수:* ${articleData.sections?.length || 0}개\n*예상 URL:* ${baseUrl}/health-hub/${category}/${suggestedSlug}` } },
            { type: 'actions', elements: [{ type: 'button', text: { type: 'plain_text', text: '✅ 승인 → 자동 배포' }, style: 'primary', url: approveUrl }] },
          ],
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('[submit 전체 오류]', e)
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}