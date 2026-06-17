import type { MetadataRoute } from 'next'
import { COLUMNS } from '@/lib/columns'
import { HEALTH_ARTICLES } from '@/lib/healthHub'

const BASE_URL = 'https://www.yeonsei365.com'

const staticPages: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/abortion`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
  { url: `${BASE_URL}/abortion/cost`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
  { url: `${BASE_URL}/abortion/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/surgery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/method`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/legal`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/hospital`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/recovery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/review`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/abortion/info`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/womens-clinic/first-visit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/womens-clinic/menstrual-pain`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/womens-clinic/sadang`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/health-magazine`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/health-magazine/column`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/health-magazine/quiz`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/health-hub`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/health-hub/ask`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/health-hub/pregnancy`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/health-hub/contraception`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/health-hub/gynecology`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/health-hub/surgery`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/health-hub/womens`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/pregnancy-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/ovulation-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/blog/abortion-price`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-cost`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-amount`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-info`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-surgery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-legal`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-period`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-after`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-fasting`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-side`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-menstruation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-process`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-insurance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-guardian`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/abortion-alone`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog/hospital-review`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
]

const columnPages: MetadataRoute.Sitemap = COLUMNS.map(col => ({
  url: `${BASE_URL}/health-magazine/column/${col.slug}`,
  lastModified: new Date(col.date.replace(/\./g, '-')),
  changeFrequency: 'monthly' as const,
  priority: 0.8,
}))

const healthHubPages: MetadataRoute.Sitemap = HEALTH_ARTICLES.map(a => ({
  url: `${BASE_URL}/health-hub/${a.category}/${a.slug}`,
  lastModified: a.lastModified && !isNaN(new Date(a.lastModified).getTime()) ? new Date(a.lastModified) : new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.75,
}))

import { ALL_FAQS } from '@/lib/faqData'

const faqDetailPages: MetadataRoute.Sitemap = ALL_FAQS.map(faq => ({
  url: `${BASE_URL}/abortion/faq/${faq.slug}`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.85,
}))

const allPages = [...staticPages, ...columnPages, ...healthHubPages, ...faqDetailPages]

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages
}