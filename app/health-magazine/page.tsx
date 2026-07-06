import { clinicSchema } from '@/lib/schemas'
import type { Metadata } from 'next'
import HealthMagazineClient from './HealthMagazineClient'
import { FAQ_COUNT } from '@/app/abortion/faq/FAQClient'

export const metadata: Metadata = {
  title: '건강매거진 | 산부인과 자가진단·FAQ·건강칼럼 | 연세365산부인과',
  description: `산부인과 증상 자가진단 퀴즈, 임신중절수술 FAQ ${FAQ_COUNT}개, 여성 건강 칼럼까지 한곳에서 확인하세요. 사당역 4번출구 연세365산부인과 건강매거진.`,
  keywords: [
    '산부인과 자가진단', '여성 건강 매거진', '임신중절수술 FAQ',
    '산부인과 FAQ', '여성 건강 칼럼', '사당역 산부인과',
    '생리불순', '임신 초기 증상', '산부인과 처음 방문',
    '낙태 비용', '임신중절수술 금액', '연세365산부인과',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/health-magazine' },
  openGraph: {
    title: '건강매거진 | 산부인과 자가진단·FAQ·건강칼럼 | 연세365산부인과',
    description: `산부인과 증상 자가진단 퀴즈, 임신중절수술 FAQ ${FAQ_COUNT}개, 여성 건강 칼럼. 사당역 연세365산부인과.`,
    url: 'https://www.yeonsei365.com/health-magazine',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '연세365산부인과 건강매거진' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '건강매거진 | 산부인과 자가진단·FAQ·건강칼럼 | 연세365산부인과',
    description: `산부인과 증상 자가진단 퀴즈, 임신중절수술 FAQ ${FAQ_COUNT}개, 여성 건강 칼럼. 사당역 연세365산부인과.`,
  },
}
const PAGE_URL = 'https://www.yeonsei365.com/health-magazine'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'건강매거진 | 산부인과 자가진단·FAQ·건강칼럼 | 연세365산부인과', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'건강매거진 산부인과 자가진단 FAQ 건강칼럼 연세365산부인과', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'여성 건강'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'산부인과 증상 자가진단 방법', description:'연세365산부인과 건강매거진 자가진단 활용법', step:[ {'@type':'HowToStep',position:1,name:'증상 선택',text:'생리불순, 임신, 통증, 검진 등 해당 카테고리 선택.'}, {'@type':'HowToStep',position:2,name:'자가진단 퀴즈',text:'3단계 질문에 답해 증상 확인.'}, {'@type':'HowToStep',position:3,name:'전문의 상담',text:'필요 시 연세365산부인과(02-585-3650) 내원.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'건강매거진 산부인과 자가진단 FAQ 건강칼럼 연세365산부인과', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'건강매거진',item:PAGE_URL} ] }

export default function HealthMagazinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <HealthMagazineClient />
    </>
  )
}