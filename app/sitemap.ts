import type { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'
import { COLUMNS } from '@/lib/columns'
import { notifyIndexNow } from '@/lib/indexnow'

const BASE_URL = 'https://www.yeonsei365.com'

const staticPages: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/abortion`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
  { url: `${BASE_URL}/abortion/cost`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
  { url: `${BASE_URL}/abortion/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/health-magazine`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/health-magazine/column`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/health-magazine/quiz`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/pregnancy-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/ovulation-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
]

const columnPages: MetadataRoute.Sitemap = COLUMNS.map(col => ({
  url: `${BASE_URL}/health-magazine/column/${col.slug}`,
  lastModified: new Date(col.date.replace(/\./g, '-')),
  changeFrequency: 'monthly' as const,
  priority: 0.8,
}))

const postPages: MetadataRoute.Sitemap = posts.map(post => ({
  url: `${BASE_URL}${post.slug}`,
  lastModified: new Date(post.date),
  changeFrequency: 'monthly' as const,
  priority: 0.8,
}))

const allPages = [...staticPages, ...columnPages, ...postPages]

// 빌드 시 Bing IndexNow 자동 호출
// git push → Vercel 배포 → IndexNow 자동 신호 → Bing 즉시 크롤링
const allUrls = allPages.map(p => p.url)
notifyIndexNow(allUrls).catch(() => {})

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages
}