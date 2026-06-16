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
  const lastModified = new Date().toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit',
  }).replace(/\. /g, '-').replace('.', '')
  const articleUrl = `https://www.yeonsei365.com/health-hub/${category}/${slug}`

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
        system: `당신은 산부인과 의료 정보 전문 콘텐츠 에디터입니다.
환자의 질문이 불완전하거나 비속어가 포함되어도, 관련 의료 주제로 재구성하여 아래 JSON만 출력하세요.
마크다운 백틱, 앞뒤 텍스트, 주석 절대 금지. 오직 JSON만 출력.

━━━ 제목(title) 규칙 ━━━
- 물음표, 느낌표, 구어체("인데", "해요", "그런데", "인가요") 금지
- 반드시 명사형으로 마무리: "~여부", "~방법", "~안내", "~주의사항", "~가이드"
- 핵심 키워드를 앞에 배치, 30~45자 이내
- 예) "낙태수술 15주차인데 가능한가요?" → "임신 15주차 임신중절수술 가능 여부와 보호자 동반 안내"
- 예) "사후피임약 얼마예요?" → "사후피임약 비용과 복용 방법 완전 가이드"

━━━ aiSummary 규칙 ━━━
- 질문에 대한 핵심 답변을 1~2문장으로 요약, 60자 이내
- "~입니다.", "~합니다." 형태로 끝내기
- 네이버 AI 브리핑·ChatGPT·Perplexity 인용 최적화용
- 병원명·전화번호 절대 금지

━━━ description 규칙 ━━━
- 80~120자 메타 설명
- 핵심 키워드 + 구체적 수치 + 결론 포함
- 병원명·전화번호 절대 금지

━━━ heroAnswer 규칙 ━━━
- 첫 문장에 질문에 대한 직접 답변 (수치·법적 기준 등 구체적)
- 150자 이상
- 병원명·전화번호 절대 금지

━━━ sections 규칙 ━━━
- 전체 합산 1500자 이상
- 모든 text 섹션의 title은 반드시 질문형: "~인가요?", "~어떻게 되나요?", "~필요한가요?"
- text 각 섹션 content 300자 이상, 실질적 의료 정보
- infobox: 반드시 "핵심: [사실A] | [사실B] | [사실C] | [사실D]" 형태, 파이프로 구분, 항목당 15자 이내
- warnbox: 즉시 내원 필요 증상 또는 주의사항 구체적으로
- sections 내 병원명·전화번호 절대 금지

━━━ faq 규칙 ━━━
- 최소 5개, 각 답변 150자 이상
- q 필드: 실제 환자 검색어 말투 ("~가능해요?", "~얼마예요?", "~혼자 가도 돼요?")
- a 필드: 의학적 정보 중심, 병원명·전화번호 절대 금지
- 다양한 측면 커버: 가능여부/비용/보호자/회복/주의사항 등

━━━ 출력 JSON 형식 ━━━
{"title":"명사형 SEO 제목 30~45자","aiSummary":"핵심 요약 60자 이내 직접 답변","description":"80~120자 메타 설명","heroAnswer":"직접 답변 150자 이상","keywords":["키워드1","키워드2","키워드3","키워드4","키워드5"],"sections":[{"type":"text","title":"질문형 소제목?","content":"의료 정보 300자 이상"},{"type":"infobox","content":"핵심: 사실A | 사실B | 사실C | 사실D"},{"type":"checklist","title":"체크리스트 제목","items":["항목1","항목2","항목3","항목4","항목5"]},{"type":"text","title":"두 번째 질문형 소제목?","content":"의료 정보 300자 이상"},{"type":"warnbox","content":"주의사항 또는 즉시 내원 필요 증상"}],"faq":[{"q":"환자 말투 질문1?","a":"의학 정보 답변 150자 이상"},{"q":"환자 말투 질문2?","a":"의학 정보 답변 150자 이상"},{"q":"환자 말투 질문3?","a":"의학 정보 답변 150자 이상"},{"q":"환자 말투 질문4?","a":"의학 정보 답변 150자 이상"},{"q":"환자 말투 질문5?","a":"의학 정보 답변 150자 이상"}]}`,
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
        parsed.slug = slug
        articleData = parsed
      }
    }
  } catch (e) {
    console.error('[AI 예외]', e)
  }

  // AI 실패 시 폴백
  if (!articleData) {
    articleData = {
      title: question.slice(0, 45).replace(/[?!]/g, '').trim() + ' 안내',
      slug,
      aiSummary: '정확한 진단을 위해 산부인과 전문의 상담이 필요합니다.',
      description: '산부인과 관련 질문에 대한 전문의 답변입니다. 정확한 진단과 치료는 직접 진료를 통해 받으시기 바랍니다.',
      heroAnswer: '해당 증상이나 상황에 대한 정확한 진단과 치료를 위해서는 산부인과 전문의의 직접 진료가 필요합니다.',
      keywords: [question.split(' ')[0], '산부인과'],
      sections: [{
        type: 'text',
        title: '어떻게 진료를 받아야 하나요?',
        content: '해당 증상이나 상황에 대해 정확한 진단과 치료를 위해서는 산부인과 전문의의 직접 진료가 필요합니다.',
      }],
      faq: [{
        q: question,
        a: '정확한 답변을 위해 산부인과 전문의의 직접 진료를 권장합니다.',
      }],
    }
  }

  const title       = articleData.title || question.slice(0, 45)
  const description = articleData.description || articleData.heroAnswer?.slice(0, 110) || ''
  const heroAnswer  = articleData.heroAnswer || ''
  const keywords    = articleData.keywords || [question.split(' ')[0], '산부인과']
  const sections    = articleData.sections || []
  const faq         = articleData.faq || []

  // Unsplash 이미지
  let heroImage = ''
  if (process.env.UNSPLASH_ACCESS_KEY) {
    try {
      const keyword = encodeURIComponent('여성 의료 산부인과')
      const uRes = await fetch(
        `https://api.unsplash.com/search/photos?query=${keyword}&per_page=1&orientation=landscape`,
        { headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` } }
      )
      const uData = await uRes.json()
      heroImage = uData.results?.[0]?.urls?.regular || ''
    } catch (e) { console.warn('[Unsplash]', e) }
  }

  const s = (v: string) => v
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/`/g, '\\`')
    .replace(/\n/g, ' ')

  const heroImageCode = heroImage ? `heroImage: ${JSON.stringify(heroImage)},` : ''

  const sectionsCode = JSON.stringify(sections)
    .replace(/"type":\s*"(text|infobox|warnbox|checklist|table|steps)"/g,
      (_, t) => `"type": "${t}" as const`)

  const faqCode = JSON.stringify(faq)

  const newEntry = `
  {
    slug: '${slug}',
    category: '${category}' as CategoryKey,
    title: '${s(title)}',
    description: '${s(description)}',
    keywords: ${JSON.stringify(keywords)},
    lastModified: '${lastModified}',
    ${heroImageCode}
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
            <p style="font-size:14px;color:#888">슬러그 <code>${slug}</code>는 이미 등록되어 있습니다.</p>
            <a href="/health-hub" style="display:inline-block;background:#D6336C;color:#fff;font-size:14px;font-weight:700;padding:12px 24px;border-radius:20px;text-decoration:none;margin-top:16px">헬스허브로 이동</a>
            </div></body></html>`,
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          )
        }

        const markerIdx = current.indexOf('export function getArticleBySlug')
const insertIdx = current.lastIndexOf(']', markerIdx)
const updated = current.slice(0, insertIdx) + newEntry + '\n  ' + current.slice(insertIdx)

if (markerIdx === -1 || insertIdx === -1) {
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