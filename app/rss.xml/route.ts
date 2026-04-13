const BASE_URL = 'https://www.yeonsei365.com';

const allPages = [
  // abortion 서비스
  { title: '임신중절수술 안내', slug: '/abortion/surgery', description: '임신중절수술 전문 안내', date: '2024-04-08' },
  { title: '임신중절수술 비용', slug: '/abortion/cost', description: '임신중절수술 비용 안내', date: '2024-04-07' },
  { title: '임신중절수술 방법', slug: '/abortion/method', description: '임신중절수술 방법 안내', date: '2024-04-06' },
  { title: '임신중절수술 법적 안내', slug: '/abortion/legal', description: '임신중절수술 법적 안내', date: '2024-04-05' },
  { title: '임신중절수술 병원', slug: '/abortion/hospital', description: '임신중절수술 병원 안내', date: '2024-04-04' },
  { title: '임신중절수술 회복', slug: '/abortion/recovery', description: '임신중절수술 회복 안내', date: '2024-04-03' },
  { title: '임신중절수술 후기', slug: '/abortion/review', description: '임신중절수술 후기', date: '2024-04-02' },
  { title: '임신중절수술 정보', slug: '/abortion/info', description: '임신중절수술 정보', date: '2024-04-01' },
  // blog - 낙태비용가격 메뉴
  { title: '낙태 비용 가격 총정리', slug: '/blog/abortion-price', description: '낙태 비용 가격 총정리', date: '2024-03-25' },
  { title: '임신중절수술 비용', slug: '/blog/abortion-cost', description: '임신중절수술 비용 상세 안내', date: '2024-03-24' },
  { title: '임신중절수술 금액', slug: '/blog/abortion-amount', description: '임신중절수술 금액 안내', date: '2024-03-23' },
  { title: '인공임신중절수술 비용', slug: '/blog/abortion-info', description: '인공임신중절수술 비용 정보', date: '2024-03-22' },
  { title: '임신초기중절수술 안내', slug: '/blog/abortion-surgery', description: '임신초기중절수술 안내', date: '2024-03-21' },
  { title: '낙태합법화 뜻·시기', slug: '/blog/abortion-legal', description: '낙태 관련 법적 절차 안내', date: '2024-03-20' },
  // blog - 임신중절수술 메뉴
  { title: '임신중절수술 기간', slug: '/blog/abortion-period', description: '임신중절수술 기간 안내', date: '2024-03-19' },
  { title: '임신중절수술 후 관리', slug: '/blog/abortion-after', description: '임신중절수술 후 관리 방법', date: '2024-03-18' },
  { title: '임신중절수술 금식', slug: '/blog/abortion-fasting', description: '임신중절수술 전 금식 안내', date: '2024-03-17' },
  { title: '임신중절수술 부작용', slug: '/blog/abortion-side', description: '임신중절수술 부작용 정보', date: '2024-03-16' },
  { title: '임신중절수술 후 생리', slug: '/blog/abortion-menstruation', description: '임신중절수술 후 생리 변화', date: '2024-03-15' },
  { title: '임신중절수술 절차', slug: '/blog/abortion-process', description: '임신중절수술 절차 안내', date: '2024-03-14' },
  { title: '임신중절수술 보험', slug: '/blog/abortion-insurance', description: '임신중절수술 보험 적용 여부', date: '2024-03-13' },
  { title: '임신중절수술 보호자', slug: '/blog/abortion-guardian', description: '보호자 동반 여부 안내', date: '2024-03-12' },
  // 수술후기
  { title: '병원 방문 후기', slug: '/blog/hospital-review', description: '연세365산부인과 방문 후기', date: '2024-03-11' },
  // womens-clinic
  { title: '사당역 산부인과 연세365', slug: '/womens-clinic/sadang', description: '사당역 산부인과 안내', date: '2024-03-10' },
  { title: '산부인과 처음 방문 안내', slug: '/womens-clinic/first-visit', description: '처음 방문 안내', date: '2024-03-09' },
  { title: '생리통 꼭 산부인과 가야 하는 이유', slug: '/womens-clinic/menstrual-pain', description: '생리통 산부인과 안내', date: '2024-03-08' },
];

export async function GET() {
  const rssItems = allPages
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => {
      const link = `${BASE_URL}${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      return `<item>
<title><![CDATA[${post.title}]]></title>
<link>${link}</link>
<guid isPermaLink="true">${link}</guid>
<description><![CDATA[${post.description}]]></description>
<pubDate>${pubDate}</pubDate>
</item>`;
    })
    .join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>연세365산부인과 | 임신중절수술·낙태비용 안내</title>
<link>${BASE_URL}</link>
<description>연세365산부인과 - 임신중절수술, 낙태비용, 여성건강 정보. 사당역 4번출구.</description>
<language>ko</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
<atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${rssItems}
</channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}