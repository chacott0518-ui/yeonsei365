import type { MetadataRoute } from 'next'
import { COLUMNS } from '@/lib/columns'
import { HEALTH_ARTICLES } from '@/lib/healthHub'

const BASE_URL = 'https://www.yeonsei365.com'

const staticPages: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}`, changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/abortion`, changeFrequency: 'weekly', priority: 0.95 },
  { url: `${BASE_URL}/abortion/cost`, changeFrequency: 'weekly', priority: 0.95 },
  { url: `${BASE_URL}/abortion/faq`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/surgery`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/method`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/legal`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/hospital`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/recovery`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/review`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/info`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/womens-clinic/first-visit`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/womens-clinic/menstrual-pain`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/womens-clinic/sadang`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/health-magazine`, changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/health-magazine/column`, changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/health-magazine/quiz`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/health-hub`, changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/health-hub/ask`, changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/health-hub/pregnancy`, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/health-hub/contraception`, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/health-hub/gynecology`, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/health-hub/surgery`, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/health-hub/womens`, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/pregnancy-calculator`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/ovulation-calculator`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/blog/abortion-price`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-cost`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-amount`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-info`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-surgery`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-legal`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-period`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-after`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-fasting`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-side`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-menstruation`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-process`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-insurance`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-guardian`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-alone`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/hospital-review`, changeFrequency: 'monthly', priority: 0.8 },
]

const columnPages: MetadataRoute.Sitemap = COLUMNS.map(col => ({
  url: `${BASE_URL}/health-magazine/column/${col.slug}`,
  lastModified: new Date(col.date.replace(/\./g, '-')),
  changeFrequency: 'monthly' as const,
  priority: 0.8,
}))

const healthHubPages: MetadataRoute.Sitemap = HEALTH_ARTICLES.map(a => ({
  url: `${BASE_URL}/health-hub/${a.category}/${a.slug}`,
  ...(a.lastModified && !isNaN(new Date(a.lastModified).getTime()) ? { lastModified: new Date(a.lastModified) } : {}),
  changeFrequency: 'monthly' as const,
  priority: 0.75,
}))

import { ALL_FAQS } from '@/lib/faqData'

const faqDetailPages: MetadataRoute.Sitemap = ALL_FAQS.map(faq => ({
  url: `${BASE_URL}/abortion/faq/${faq.slug}`,
  changeFrequency: 'monthly' as const,
  priority: 0.85,
}))

const allPages = [...staticPages, ...columnPages, ...healthHubPages, ...faqDetailPages]

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages
}