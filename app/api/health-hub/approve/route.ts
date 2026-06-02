import { NextResponse } from 'next/server'

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

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const category     = searchParams.get('category') || 'gynecology'
  const slug         = searchParams.get('slug') || `q-${Date.now()}`
  const question     = searchParams.get('question') || ''
  const lastModified = new Date().toISOString().split('T')[0]
  const articleUrl   = `https://www.yeonsei365.com/health-hub/${category}/${slug}`

  let articleData: any = null

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
        system: `질문이 불완전하거나 비속어가 포함되어 있어도 산부인과 관련 질문으로 해석하여 완전한 의료 정보로 재구성하세요.

당신은 산부인과 전문의입니다. 하이닥, 닥터나우 수준의 구조화된 의료 정보를 JSON 형식으로만 출력하세요.

핵심 규칙:
- 병원명(연세365산부인과)과 전화번호(02-585-3650)는 전체 답변에서 합쳐서 최대 1회만 사용. 자연스럽지 않으면 아예 생략
- 병원 홍보 문구 절대 금지. "내원하세요", "문의하세요" 반복 금지
- 실제 의학 정보 위주로 작성. 환자가 실질적으로 도움받을 수 있는 내용
- heroAnswer: 질문에 대한 직접 답변 2~3문장 (150자 이상, 핵심 수치·정보 포함)
- sections 전체 합산 1500자 이상
- text 섹션 각각 300자 이상, 실질적 의료 정보로 채울 것
- FAQ 5개, 각 답변 150자 이상, 실제 환자 궁금증 기반
- sections 구성: text → infobox → checklist → text → warnbox (5개 이상)
- 의학 용어는 괄호로 설명 추가
- 첫 문장은 반드시 질문에 대한 직접 답변으로 시작

반드시 아래 JSON만 출력 (마크다운 백틱 절대 금지, 앞뒤 텍스트 절대 금지):
{"title":"SEO 최적화 제목 50자 이내","slug":"english-lowercase-hyphen-slug","heroAnswer":"질문에 대한 직접 답변 150자 이상","keywords":["키워드1","키워드2","키워드3"],"sections":[{"type":"text","title":"소제목","content":"실질적 의료 정보 300자 이상"},{"type":"infobox","content":"핵심 요약 100자 이상"},{"type":"checklist","title":"체크리스트 제목","items":["항목1","항목2","항목3","항목4","항목5"]},{"type":"text","title":"두번째 소제목","content":"실질적 의료 정보 300자 이상"},{"type":"warnbox","content":"즉시 내원 필요 증상 또는 주의사항 100자 이상"}],"faq":[{"q":"질문1","a":"답변1 150자 이상"},{"q":"질문2","a":"답변2 150자 이상"},{"q":"질문3","a":"답변3 150자 이상"},{"q":"질문4","a":"답변4 150자 이상"},{"q":"질문5","a":"답변5 150자 이상"}]}`,
        messages: [{ role: 'user', content: `카테고리: ${category}\n질문: ${question}` }],
      }),
    })

    if (aiRes.ok) {
      const data = await aiRes.json()
      const rawText = data.content?.[0]?.text || ''
      const cleaned = rawText
        .replace(/^```json\s*/i, '')
        .replace(/^```\s*/i, '')
        .replace(/\s*```$/i, '')
        .trim()
      const parsed = JSON.parse(cleaned)
      if (parsed.title && parsed.sections && parsed.faq) {
        articleData = parsed
      }
    }
  } catch (e) {
    console.error('[AI 예외]', e)
  }

  // AI 실패시 폴백
  if (!articleData) {
    articleData = {
      title: question.slice(0, 50),
      slug,
      heroAnswer: '정확한 답변을 위해 산부인과 전문의 진료를 권장합니다.',
      keywords: [question.split(' ')[0], '산부인과'],
      sections: [{
        type: 'text',
        title: question.slice(0, 50),
        content: '해당 증상이나 상황에 대해 정확한 진단과 치료를 위해서는 산부인과 전문의의 직접 진료가 필요합니다. 사당역 4번출구 도보 1분 거리에서 당일 진료가 가능합니다.',
      }],
      faq: [{ q: question, a: '정확한 답변을 위해 산부인과 전문의 진료를 권장합니다.' }],
    }
  }

  const title    = articleData.title || question.slice(0, 50)
  const answer   = articleData.heroAnswer || ''
  const keywords = articleData.keywords || [question.split(' ')[0], '산부인과']
  const stats    = articleData.stats || []
  const sections = articleData.sections || []
  const faq      = articleData.faq || []

  // Unsplash 이미지
  let heroImage = ''
  if (process.env.UNSPLASH_ACCESS_KEY) {
    try {
      const keyword = encodeURIComponent(title.split(' ')[0] + ' 여성 의료 산부인과')
      const uRes = await fetch(
        `https://api.unsplash.com/search/photos?query=${keyword}&per_page=1&orientation=landscape`,
        { headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` } }
      )
      const uData = await uRes.json()
      heroImage = uData.results?.[0]?.urls?.regular || ''
    } catch (e) { console.warn('[Unsplash]', e) }
  }

  const s = (v: string) => v.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/`/g, '\\`').replace(/\n/g, ' ')
  const sq = (v: string) => JSON.stringify(v)

  const heroImageCode = heroImage ? `heroImage: ${sq(heroImage)},` : ''
  const statsCode     = stats.length > 0 ? `stats: ${JSON.stringify(stats)},` : ''
  const sectionsCode  = JSON.stringify(sections)
    .replace(/("type":\s*"(text|infobox|warnbox|checklist|table|steps)")/g, (m, p1, p2) => `"type": "${p2}" as const`)
  const faqCode = JSON.stringify(faq)

  const newEntry = `
  {
    slug: '${slug}',
    category: '${category}' as CategoryKey,
    title: '${s(title)}',
    description: '${s(answer.slice(0, 110))}.',
    keywords: ${JSON.stringify(keywords)},
    lastModified: '${lastModified}',
    ${heroImageCode}
    ${statsCode}
    faq: ${faqCode},
    sections: ${sectionsCode},
  },`

  let githubResult = '⚠️ GITHUB_TOKEN 미설정'
  try {
    const TOKEN = process.env.GITHUB_TOKEN
    const REPO  = process.env.GITHUB_REPO
    if (TOKEN && REPO) {
      const fileRes = await fetch(
        `https://api.github.com/repos/${REPO}/contents/lib/healthHub.ts`,
        { headers: { Authorization: `Bearer ${TOKEN}`, Accept: 'application/vnd.github.v3+json' } }
      )
      if (fileRes.ok) {
        const fileData = await fileRes.json()
        const current = Buffer.from(fileData.content, 'base64').toString('utf-8')

        if (current.includes(`slug: '${slug}'`)) {
          return new Response(
            `<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"><title>중복 방지</title>
            <style>body{font-family:sans-serif;padding:40px 20px;max-width:600px;margin:0 auto;background:#FFF5F7}
            .card{background:#fff;border-radius:16px;padding:32px;border:0.5px solid #f0d0dc}</style>
            </head><body><div class="card">
            <div style="font-size:48px">⚠️</div>
            <h1 style="font-size:22px;font-weight:900">이미 등록된 질문입니다</h1>
            <p style="font-size:14px;color:#888">슬러그 <code>${slug}</code> 는 이미 등록되어 있습니다.</p>
            <a href="/health-hub" style="display:inline-block;background:#D6336C;color:#fff;font-size:14px;font-weight:700;padding:12px 24px;border-radius:20px;text-decoration:none;margin-top:16px">헬스허브로 이동</a>
            </div></body></html>`,
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          )
        }

        const updated = current.replace(
          /\]\s+export function getArticleBySlug/,
          () => `${newEntry}\n  ]\n\n  export function getArticleBySlug`
        )

        if (updated === current) {
          githubResult = '❌ 정규식 매칭 실패 — healthHub.ts 파일 구조 확인 필요'
        } else {
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

  return new Response(
    `<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"><title>승인 완료</title>
    <style>body{font-family:sans-serif;padding:40px 20px;max-width:600px;margin:0 auto;background:#FFF5F7}
    .card{background:#fff;border-radius:16px;padding:32px;border:0.5px solid #f0d0dc}
    h1{font-size:22px;font-weight:900;color:#1a1a1a;margin:16px 0 8px}
    p{font-size:14px;color:#888;line-height:1.7;margin-bottom:6px}
    .url{background:#FFF5F7;border:0.5px solid #f0d0dc;border-radius:8px;padding:10px 14px;font-size:13px;color:#993556;word-break:break-all;margin:16px 0}
    .btn{display:inline-block;background:#D6336C;color:#fff;font-size:14px;font-weight:700;padding:12px 24px;border-radius:20px;text-decoration:none;margin-top:16px}</style>
    </head><body><div class="card">
    <div style="font-size:48px">✅</div>
    <h1>승인 완료</h1>
    <div class="url">${articleUrl}</div>
    <p>${githubResult}</p>
    <p>✅ IndexNow 제출 완료 → Bing 색인 요청됨</p>
    <p>⏳ Vercel 빌드 완료까지 약 1~2분 소요</p>
    <a href="/health-hub" class="btn">헬스허브로 이동</a>
    </div></body></html>`,
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  )
}
