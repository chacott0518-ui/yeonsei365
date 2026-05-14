import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getColumnBySlug, getAllColumnSlugs } from '@/lib/columns'
import ColumnDetailClient from './ColumnDetailClient'

const BASE = 'https://www.yeonsei365.com'

export async function generateStaticParams() {
  return getAllColumnSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const col = getColumnBySlug(params.slug)
  if (!col) return {}
  const url = `${BASE}/health-magazine/column/${col.slug}`
  return {
    title: `${col.title} | 연세365산부인과 건강 칼럼`,
    description: col.description,
    keywords: col.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${col.title} | 연세365산부인과`,
      description: col.description,
      url,
      images: [{
        url: col.heroImage || col.thumbnail || `${BASE}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: col.title,
      }],
      locale: 'ko_KR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${col.title} | 연세365산부인과`,
      description: col.description,
      images: [col.heroImage || col.thumbnail || `${BASE}/og-image.jpg`],
    },
  }
}

export default function ColumnDetailPage({ params }: { params: { slug: string } }) {
  const col = getColumnBySlug(params.slug)
  if (!col) notFound()

  const url = `${BASE}/health-magazine/column/${col.slug}`

  // ── 1. Article 스키마 ──────────────────────────────────────────
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: col.title,
    description: col.description,
    datePublished: col.date,
    dateModified: col.date,
    image: col.heroImage || col.thumbnail || `${BASE}/og-image.jpg`,
    author: {
      '@type': 'Organization',
      name: '연세365산부인과',
      url: BASE,
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: '연세365산부인과',
      logo: { '@type': 'ImageObject', url: 'https://i.imgur.com/f7h5DY0.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: col.keywords.join(', '),
    about: { '@type': 'MedicalCondition', name: col.category },
    url,
  }

  // ── 2. FAQPage 스키마 — 구글 FAQ 리치스니펫 + 네이버 AI 브리핑 ──
  const faqSchema = col.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: col.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  } : null

  // ── 3. MedicalWebPage 스키마 — E-E-A-T 신뢰도 강화 ──────────────
  const medicalSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: col.title,
    description: col.description,
    url,
    specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
    medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' },
    lastReviewed: col.date,
    reviewedBy: {
      '@type': 'MedicalOrganization',
      name: '연세365산부인과',
      url: BASE,
    },
    about: {
      '@type': 'MedicalCondition',
      name: col.category,
    },
  }

  // ── 4. HowTo 스키마 — steps 섹션 자동 추출 ──────────────────────
  const stepsSection = col.sections.find(s => s.type === 'steps' && s.steps && s.steps.length > 0)
  const howToSchema = stepsSection?.steps ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: stepsSection.title || col.title,
    description: col.description,
    step: stepsSection.steps.map(step => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.desc,
      position: parseInt(step.n),
    })),
    tool: {
      '@type': 'HowToTool',
      name: '연세365산부인과',
    },
  } : null

  // ── 5. Speakable 스키마 — 네이버 AI 브리핑 + 구글 어시스턴트 음성 읽기 ──
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: col.title,
    url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        '.article-hero-answer',
        '.article-first-section',
        '.article-infobox',
      ],
    },
  }

  // ── 6. BreadcrumbList 스키마 — 네이버·구글 경로 표시 ──────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: BASE },
      { '@type': 'ListItem', position: 2, name: '건강 매거진', item: `${BASE}/health-magazine` },
      { '@type': 'ListItem', position: 3, name: '건강 칼럼', item: `${BASE}/health-magazine/column` },
      { '@type': 'ListItem', position: 4, name: col.title, item: url },
    ],
  }

  // ── 7. MedicalClinic 스키마 — 병원 정보 신뢰도 ───────────────────
  const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: '연세365산부인과',
    url: BASE,
    telephone: '02-585-3650',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '과천대로 939 3층',
      addressLocality: '관악구',
      addressRegion: '서울',
      addressCountry: 'KR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.4875,
      longitude: 126.9822,
    },
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-13:00'],
    medicalSpecialty: '산부인과',
    sameAs: [
      'http://pf.kakao.com/_TpaBj',
      'https://map.naver.com/v5/search/연세365산부인과',
    ],
  }

  return (
    <>
      {/* 스키마 1: Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* 스키마 2: FAQPage — 구글 FAQ 리치스니펫 + 네이버 AI 브리핑 */}
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* 스키마 3: MedicalWebPage — E-E-A-T */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />

      {/* 스키마 4: HowTo — steps 섹션 자동 추출 */}
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}

      {/* 스키마 5: Speakable — 네이버 AI 브리핑 + 구글 어시스턴트 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* 스키마 6: BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 스키마 7: MedicalClinic */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />

      <ColumnDetailClient column={col} />
    </>
  )
}