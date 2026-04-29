// lib/indexnow.ts
// 새 칼럼 발행할 때마다 이 함수를 호출하면
// 빙에 즉시 신호를 보내서 Copilot·ChatGPT에 빠르게 반영됩니다

export async function notifyIndexNow(urls: string[]) {
    const key = process.env.INDEXNOW_KEY
    if (!key) {
      console.warn('[IndexNow] INDEXNOW_KEY 환경변수가 없습니다.')
      return
    }
  
    try {
      const res = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          host: 'www.yeonsei365.com',
          key,
          keyLocation: `https://www.yeonsei365.com/${key}.txt`,
          urlList: urls,
        }),
      })
      console.log('[IndexNow] 제출 완료 — 상태코드:', res.status)
    } catch (e) {
      console.error('[IndexNow] 제출 실패:', e)
    }
  }