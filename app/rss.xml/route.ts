// app/rss.xml/route.ts
import { NextResponse } from "next/server";

const SITE_URL = "https://www.yeonsei365.com";
const SITE_NAME = "연세365산부인과";
const SITE_DESCRIPTION = "연세365산부인과 블로그 - 낙태, 임신, 여성건강 정보";

// 블로그 포스트 목록 (실제 데이터로 교체하세요)
const blogPosts = [
  {
    title: "낙태 비용 안내",
    url: `${SITE_URL}/blog/abortion-cost`,
    description: "낙태 비용에 대한 상세 안내",
    pubDate: new Date("2024-01-01").toUTCString(),
  },
  {
    title: "낙태 방법 안내",
    url: `${SITE_URL}/blog/abortion-info`,
    description: "안전한 낙태 방법에 대한 정보",
    pubDate: new Date("2024-01-05").toUTCString(),
  },
  {
    title: "낙태 법적 절차",
    url: `${SITE_URL}/blog/abortion-legal`,
    description: "낙태 관련 법적 절차 안내",
    pubDate: new Date("2024-01-10").toUTCString(),
  },
  {
    title: "낙태 가격 정보",
    url: `${SITE_URL}/blog/abortion-price`,
    description: "낙태 가격 상세 정보",
    pubDate: new Date("2024-01-15").toUTCString(),
  },
  // 필요 시 포스트 추가
];

export async function GET() {
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${blogPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${post.url}</link>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${post.pubDate}</pubDate>
      <guid isPermaLink="true">${post.url}</guid>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}