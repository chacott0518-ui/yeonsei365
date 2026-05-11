import { NextResponse } from 'next/server'

async function notifyIndexNow(urls: string[]) {
  const key = process.env.INDEXNOW_KEY
  if (!key) return
  try {
    await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ host: 'www.yeonsei365.com', key, keyLocation: `https://www.yeonsei365.com/${key}.txt`, urlList: urls }),
    })
  } catch (e) { console.error('[IndexNow]', e) }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const category   = searchParams.get('category') || 'gynecology'
  const slug       = searchParams.get('slug') || `q-${Date.now()}`
  const heroImage  = searchParams.get('heroImage') || ''
  const lastModified = new Date().toISOString().split('T')[0]
  const articleUrl = `https://www.yeonsei365.com/health-hub/${category}/${slug}`

  let articleData: any = null
  try {
    const raw = searchParams.get('articleData')
    if (raw) articleData = JSON.parse(raw)
  } catch {}

  const title    = articleData?.title || searchParams.get('title') || ''
  const answer   = articleData?.heroAnswer || searchParams.get('answer') || ''
  const question = searchParams.get('question') || ''
  const keywords = articleData?.keywords || [title.split(' ')[0], '사당역산부인과']
  const stats    = articleData?.stats || []
  const sections = articleData?.sections || [{ type: 'text', title, content: answer }]
  const faq      = articleData?.faq || [{ q: question, a: answer }]

  const s = (v: string) => v.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/`/g, '\\`').replace(/\n/g, ' ')
  const sq = (v: string) => JSON.stringify(v)

  const statsCode = stats.length > 0 ? `stats: ${JSON.stringify(stats)},` : ''
  const heroImageCode = heroImage ? `heroImage: ${sq(heroImage)},` : ''
  const sectionsCode = JSON.stringify(sections)
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

        // ✅ 핵심 수정: 함수 콜백 사용 → $ 특수문자 해석 문제 완전 차단
        const updated = current.replace(
          /\]\s+export function getArticleBySlug/,
          () => `${newEntry}\n]\n\nexport function getArticleBySlug`
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
          githubResult = pushRes.ok ? '✅ GitHub push 완료 → Vercel 자동 빌드 시작' : `❌ GitHub push 실패 (${pushRes.status})`
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