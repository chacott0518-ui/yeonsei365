import type { Metadata } from 'next'
import { clinicSchema } from '@/lib/schemas'
import HealthHubClient from './HealthHubClient'

export const metadata: Metadata = {
  title: '산부인과 AI 건강 Q&A | 임신·피임·수술 | 연세365산부인과의원',
  description: '임신·피임·산부인과 질환·수술·여성건강 일반 건강정보 Q&A. 사당역 4번 출구 연세365산부인과의원 02-585-3650.',
  keywords: ['산부인과Q&A','산부인과건강허브','임신중절수술Q&A','사당역산부인과','연세365산부인과의원'],
  alternates: { canonical: 'https://www.yeonsei365.com/health-hub' },
  openGraph: {
    title: '산부인과 AI 건강 Q&A | 연세365산부인과의원',
    description: '임신·피임·산부인과 질환·수술·여성건강 일반 건강정보 Q&A',
    url: 'https://www.yeonsei365.com/health-hub',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR', type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '산부인과 AI 건강 Q&A | 연세365산부인과의원', description: '임신·피임·수술 일반 건강정보 Q&A' },
}

const PAGE_URL = 'https://www.yeonsei365.com/health-hub'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'산부인과 건강 정보 허브 AI 건강 Q&A | 연세365산부인과의원', datePublished:'2026-04-01', dateModified:'2026-05-22', image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':'https://www.yeonsei365.com/health-hub'}, url:'https://www.yeonsei365.com/health-hub' }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'산부인과 건강 정보 허브 AI 건강 Q&A', url:'https://www.yeonsei365.com/health-hub', specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'여성건강'} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'AI 건강 Q&A',item:PAGE_URL} ] }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'산부인과 건강 정보 허브 AI 건강 Q&A 연세365산부인과의원', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <HealthHubClient />
    </>
  )
}
