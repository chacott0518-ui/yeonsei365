import type { Metadata } from 'next'
import { clinicSchema } from '@/lib/schemas'
import AskClient from './AskClient'

export const metadata: Metadata = {
  title: '산부인과 질문 남기기 | AI 건강 Q&A | 연세365산부인과의원',
  description: '산부인과 궁금한 점을 남기면 AI 일반 건강정보 답변이 게시됩니다. 사당역 4번 출구 연세365산부인과의원 02-585-3650.',
  keywords: ['산부인과질문','산부인과상담','임신중절수술질문','사당역산부인과','연세365산부인과의원'],
  alternates: { canonical: 'https://www.yeonsei365.com/health-hub/ask' },
  openGraph: {
    title: '산부인과 질문 남기기 | 연세365산부인과의원',
    description: '산부인과 궁금한 점을 남기면 AI 일반 건강정보 답변이 게시됩니다.',
    url: 'https://www.yeonsei365.com/health-hub/ask',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR', type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '산부인과 질문 남기기 | 연세365산부인과의원', description: 'AI 일반 건강정보 답변 게시' },
}

const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'산부인과 질문 남기기 | AI 건강 Q&A | 연세365산부인과의원', datePublished:'2026-04-01', dateModified:'2026-05-22', image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':'https://www.yeonsei365.com/health-hub/ask'}, url:'https://www.yeonsei365.com/health-hub/ask' }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'산부인과 질문 남기기 | AI 건강 Q&A', url:'https://www.yeonsei365.com/health-hub/ask', specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'여성건강'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'산부인과 질문 남기는 방법', description:'연세365산부인과의원 AI 건강허브 질문 제출 방법', step:[ {'@type':'HowToStep',position:1,name:'카테고리 선택',text:'임신·피임·수술 등 카테고리를 선택합니다.'}, {'@type':'HowToStep',position:2,name:'질문 입력',text:'궁금한 내용을 10자 이상 입력합니다.'}, {'@type':'HowToStep',position:3,name:'제출',text:'질문 제출 버튼을 누르면 AI 답변이 게시됩니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'산부인과 질문 남기기 AI 건강 Q&A 연세365산부인과의원', url:'https://www.yeonsei365.com/health-hub/ask', speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'AI 건강 Q&A',item:'https://www.yeonsei365.com/health-hub'}, {'@type':'ListItem',position:3,name:'질문 남기기',item:'https://www.yeonsei365.com/health-hub/ask'} ] }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <AskClient />
    </>
  )
}
