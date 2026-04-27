import type { Metadata } from 'next'
import ColumnClient from './ColumnClient'
import { COLUMNS } from '@/lib/columns'

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: '연세365산부인과 건강 칼럼',
  description: '사당역 연세365산부인과 전문의가 직접 작성한 여성 건강 칼럼',
  url: 'https://www.yeonsei365.com/health-magazine/column',
  publisher: {
    '@type': 'MedicalOrganization',
    name: '연세365산부인과',
    url: 'https://www.yeonsei365.com',
    address: { '@type': 'PostalAddress', streetAddress: '과천대로 939 3층', addressLocality: '관악구', addressRegion: '서울', addressCountry: 'KR' },
    telephone: '02-585-3650',
  },
  hasPart: COLUMNS.map(col => ({
    '@type': 'Article',
    headline: col.title,
    description: col.description,
    url: `https://www.yeonsei365.com/health-magazine/column/${col.slug}`,
    datePublished: col.date,
    keywords: col.keywords.join(', '),
  })),
}

export const metadata: Metadata = {
  title: '여성 건강 칼럼 | 자궁근종·임신·산부인과 전문의 칼럼 | 연세365산부인과',
  description: '사당역 연세365산부인과 전문의가 직접 작성한 여성 건강 칼럼입니다. 자궁근종, 임신중절수술, 생리불순, 난임 등 여성 건강의 모든 것을 안내합니다.',
  keywords: ['여성건강칼럼', '자궁근종칼럼', '산부인과칼럼', '임신중절수술정보', '사당역산부인과', '연세365산부인과', '여성건강정보'],
  alternates: { canonical: 'https://www.yeonsei365.com/health-magazine/column' },
  openGraph: {
    title: '여성 건강 칼럼 | 연세365산부인과 전문의 직접 작성',
    description: '자궁근종, 임신중절수술, 생리불순 등 여성 건강 전문 칼럼. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/health-magazine/column',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '연세365산부인과 여성 건강 칼럼' }],
    locale: 'ko_KR', type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '여성 건강 칼럼 | 연세365산부인과 전문의 직접 작성',
    description: '자궁근종, 임신중절수술, 생리불순 등 여성 건강 전문 칼럼.',
  },
}

export default function ColumnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <ColumnClient />
    </>
  )
}