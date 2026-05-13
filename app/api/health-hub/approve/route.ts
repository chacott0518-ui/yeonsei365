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

  // ── 1. AI 답변 생성 (승인 시점) ──────────────────────────────
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
- sections는 반드시 5개 이상: text, infobox, checklist, text, warnbox 순서로 구성

반드시 아래 JSON만 출력 (마크다운 코드블록, 백틱 절대 금지, 앞뒤 텍스트 절대 금지):
{"title":"SEO 최적화 제목 50자 이내","slug":"english-lowercase-hyphen-slug","heroAnswer":"핵심 답변 150~200자","keywords":["키워드1","키워드2","키워드3","사당역산부인과"],"sections":[{"type":"text","title":"소제목","content":"본문 300자 이상"},{"type":"infobox","content":"핵심 요약 정보 100자 이상"},{"type":"checklist","title":"체크리스트 제목","items":["항목1 (설명 포함)","항목2 (설명 포함)","항목3 (설명 포함)","항목4 (설명 포함)","항목5 (설명 포함)"]},{"type":"text","title":"두번째 소제목","content":"본문 300자 이상"},{"type":"warnbox","content":"주의사항 또는 즉시 내원 필요 증상 100자 이상"}],"faq":[{"q":"자주 묻는 질문1","a":"답변1 150자 이상"},{"q":"자주 묻는 질문2","a":"답변2 150자 이상"},{"q":"자주 묻는 질문3","a":"답변3 150자 이상"},{"q":"자주 묻는 질문4","a":"답변4 150자 이상"},{"q":"자주 묻는 질문5","a":"답변5 150자 이상"}]}`,
        messages: [{ role: 'user', content: `카테고리: ${category}\n질문: ${question}` }],
      }),
    })

    if (aiRes.ok) {
      const data = await aiRes.json()
      const rawText = data.content?.[0]?.text || ''
      console.log('[AI 원본]', rawText.slice(0, 300))
      const cleaned = rawText
        .replace(/^```json\s*/i, '')
        .replace(/^```\s*/i, '')
        .replace(/\s*```$/i, '')
        .trim()
      const parsed = JSON.parse(cleaned)
      if (parsed.title && parsed.sections && parsed.faq) {
        articleData = parsed
        console.log('[AI 성공] 섹션수:', parsed.sections.length, '제목:', parsed.title)
      } else {
        console.warn('[AI 파싱 실패] 필드 누락')
      }
    } else {
      console.error('[AI HTTP 오류]', aiRes.status)
    }
  } catch (e) {
    console.error('[AI 예외]', e)
  }

  // AI 실패시 폴백
  if (!articleData) {
    articleData = {
      title: question.slice(0, 50),
      slug,
      heroAnswer: '연세365산부인과(02-585-3650)에 문의하시면 전문의가 직접 답변해 드립니다.',
      keywords: [question.split(' ')[0], '산부인과', '사당역산부인과'],
      sections: [{
        type: 'text',
        title: question.slice(0, 50),
        content: '연세365산부인과(02-585-3650)에 문의하시면 전문의가 직접 답변해 드립니다. 사당역 4번출구에서 도보 1분 거리에 위치해 있으며, 당일 예약 및 당일 진료가 가능합니다.',
      }],
      faq: [{ q: question, a: '연세365산부인과(02-585-3650)에 문의하시면 전문의가 직접 답변해 드립니다.' }],
    }
  }

  const title  = articleData.title || question.slice(0, 50)
  const answer = articleData.heroAnswer || ''
  const keywords = articleData.keywords || [question.split(' ')[0], '사당역산부인과']
  const stats    = articleData.stats || []
  const sections = articleData.sections || []
  const faq      = articleData.faq || []

  // ── 2. Unsplash 자동 이미지 ───────────────────────────────────
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

  // ── 3. healthHub.ts 코드 생성 ────────────────────────────────
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
    description: '${s(answer.slice(0, 110))}. 사당역 연세365산부인과 02-585-3650.',
    keywords: ${JSON.stringify(keywords)},
    lastModified: '${lastModified}',
    ${heroImageCode}
    ${statsCode}
    faq: ${faqCode},
    sections: ${sectionsCode},
  },`

  // ── 4. GitHub push ────────────────────────────────────────────
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

        // 중복 slug 방지
        if (current.includes(`slug: '${slug}'`)) {
          return new Response(
            `<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"><title>중복 방지</title>
            <style>body{font-family:sans-serif;padding:40px 20px;max-width:600px;margin:0 auto;background:#FFF5F7}
            .card{background:#fff;border-radius:16px;padding:32px;border:0.5px solid #f0d0dc}</style>
            </head><body><div class="card">
            <div style="font-size:48px">⚠️</div>
            <h1 style="font-size:22px;font-weight:900">이미 등록된 질문입니다</h1>
            <p style="font-size:14px;color:#888">슬러그 <code>${slug}</code> 는 이미 헬스허브에 등록되어 있습니다.<br/>중복 등록을 방지했습니다.</p>
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