import { posts } from '@/lib/posts';

const BASE_URL = 'https://www.yeonsei365.com';

export async function GET() {
  const rssItems = posts
    .slice()
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