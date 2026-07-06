import { clinicSchema } from '@/lib/schemas'
import type { Metadata } from 'next'
import ColumnClient from './ColumnClient'
import { COLUMNS } from '@/lib/columns'

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: '연세365산부인과의원 건강 칼럼',
  description: '사당역 연세365산부인과의원 여성 건강 칼럼',
  url: 'https://www.yeonsei365.com/health-magazine/column',
  publisher: {
    '@type': 'MedicalOrganization',
    name: '연세365산부인과의원',
    url: 'https://www.yeonsei365.com',
    address: { '@type': 'PostalAddress', streetAddress: '과천대로 939, 3층', addressLocality: '관악구', addressRegion: '서울특별시', addressCountry: 'KR' },
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
  title: '여성 건강 칼럼 | 자궁근종·임신·산부인과 | 연세365산부인과의원',
  description: '사당역 연세365산부인과의원 여성 건강 칼럼입니다. 자궁근종, 임신중절수술, 생리불순, 난임 등 여성 건강의 모든 것을 안내합니다.',
  keywords: ['여성건강칼럼', '자궁근종칼럼', '산부인과칼럼', '임신중절수술정보', '사당역산부인과', '연세365산부인과의원', '여성건강정보'],
  alternates: { canonical: 'https://www.yeonsei365.com/health-magazine/column' },
  openGraph: {
    title: '여성 건강 칼럼 | 연세365산부인과의원',
    description: '자궁근종, 임신중절수술, 생리불순 등 여성 건강 칼럼. 사당역 연세365산부인과의원.',
    url: 'https://www.yeonsei365.com/health-magazine/column',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '연세365산부인과 여성 건강 칼럼' }],
    locale: 'ko_KR', type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '여성 건강 칼럼 | 연세365산부인과의원',
    description: '자궁근종, 임신중절수술, 생리불순 등 여성 건강 칼럼.',
  },
}
const PAGE_URL = 'https://www.yeonsei365.com/health-magazine/column'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'여성 건강 칼럼 | 자궁근종·임신·산부인과 | 연세365산부인과의원', datePublished:PAGE_DATE,dateModified: PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'건강매거진',item:'https://www.yeonsei365.com/health-magazine'}, {'@type':'ListItem',position:3,name:'칼럼',item:PAGE_URL} ] }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'여성 건강 칼럼 자궁근종 임신 산부인과 전문의 칼럼 연세365산부인과', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '임신중절수술 칼럼은 어떤 내용을 다루나요?',
      acceptedAnswer: { '@type': 'Answer', text: '연세365산부인과 헬스매거진 칼럼은 임신중절수술 비용·방법·후기, 피임, 여성 건강 등 산부인과 전문 정보를 다룹니다. 02-585-3650으로 직접 상담도 가능합니다.' },
    },
    {
      '@type': 'Question',
      name: '임신중절수술 비용이 얼마인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '임신중절수술 비용은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 연세365산부인과(02-585-3650)에서 정확한 비용을 안내드립니다.' },
    },
    {
      '@type': 'Question',
      name: '당일 임신중절수술이 가능한가요?',
      acceptedAnswer: { '@type': 'Answer', text: '네, 연세365산부인과는 당일 검사·상담·수술이 가능한 원스톱 시스템을 운영합니다. 사당역 4번출구 도보 3분입니다.' },
    },
    {
      '@type': 'Question',
      name: '임신중절수술 후 회복 기간은 얼마나 되나요?',
      acceptedAnswer: { '@type': 'Answer', text: '대부분 당일 귀가가 가능하며 다음 날부터 가벼운 일상생활이 가능합니다. 수술 후 1~2주 소량의 출혈이 있을 수 있습니다.' },
    },
    {
      '@type': 'Question',
      name: '임신중절수술 비밀보장이 되나요?',
      acceptedAnswer: { '@type': 'Answer', text: '네, 연세365산부인과는 모든 상담과 진료 기록을 철저히 비밀보장하며 1:1 독립 상담실에서 진행합니다.' },
    },
  ],
}

const medicalWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: '헬스매거진 칼럼 | 연세365산부인과',
  description: '임신중절수술·여성건강·피임 등 산부인과 전문 칼럼을 제공합니다.',
  url: 'https://www.yeonsei365.com/health-magazine/column',
  specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
  medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' },
  about: { '@type': 'MedicalCondition', name: '임신중절수술' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '임신중절수술 진행 과정',
  description: '연세365산부인과 임신중절수술 단계별 안내',
  step: [
    { '@type': 'HowToStep', position: 1, name: '상담 예약', text: '전화(02-585-3650) 또는 카카오톡으로 상담 예약합니다.' },
    { '@type': 'HowToStep', position: 2, name: '초음파 검사', text: '내원 후 초음파로 임신 주수와 상태를 확인합니다.' },
    { '@type': 'HowToStep', position: 3, name: '수술 진행', text: '전문의 1:1 상담 후 당일 수술을 진행합니다.' },
    { '@type': 'HowToStep', position: 4, name: '회복 및 귀가', text: '수술 후 회복실에서 안정을 취한 뒤 당일 귀가합니다.' },
  ],
  tool: { '@type': 'HowToTool', name: '연세365산부인과' },
}

export default function ColumnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <ColumnClient />
    </>
  )
}