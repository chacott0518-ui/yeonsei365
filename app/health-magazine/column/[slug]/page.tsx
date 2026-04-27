import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getColumnBySlug, getAllColumnSlugs } from '@/lib/columns'
import ColumnDetailClient from './ColumnDetailClient'

export async function generateStaticParams() {
  return getAllColumnSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const col = getColumnBySlug(params.slug)
  if (!col) return {}
  return {
    title: `${col.title} | 연세365산부인과 건강 칼럼`,
    description: col.description,
    keywords: col.keywords,
    alternates: { canonical: `https://www.yeonsei365.com/health-magazine/column/${col.slug}` },
    openGraph: {
      title: `${col.title} | 연세365산부인과`,
      description: col.description,
      url: `https://www.yeonsei365.com/health-magazine/column/${col.slug}`,
      images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: col.title }],
      locale: 'ko_KR', type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${col.title} | 연세365산부인과`,
      description: col.description,
    },
  }
}

export default function ColumnDetailPage({ params }: { params: { slug: string } }) {
  const col = getColumnBySlug(params.slug)
  if (!col) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: col.title,
    description: col.description,
    datePublished: col.date,
    dateModified: col.date,
    author: {
      '@type': 'Organization',
      name: '연세365산부인과',
      url: 'https://www.yeonsei365.com',
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: '연세365산부인과',
      logo: { '@type': 'ImageObject', url: 'https://i.imgur.com/f7h5DY0.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.yeonsei365.com/health-magazine/column/${col.slug}` },
    keywords: col.keywords.join(', '),
    about: { '@type': 'MedicalCondition', name: col.title },
  }

  const faqSchema = col.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: col.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  const medicalSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: col.title,
    description: col.description,
    url: `https://www.yeonsei365.com/health-magazine/column/${col.slug}`,
    specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
    medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' },
    lastReviewed: col.date,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <ColumnDetailClient column={col} />
    </>
  )
}