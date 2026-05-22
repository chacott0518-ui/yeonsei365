import type { Metadata } from 'next'
import { clinicSchema } from '@/lib/schemas'
import HealthHubClient from './HealthHubClient'

export const metadata: Metadata = {
  title: '산부인과 AI 건강 Q&A | 임신·피임·수술 전문의 답변 | 연세365산부인과',
  description: '임신·피임·산부인과 질환·수술·여성건강 전문의가 직접 답변한 Q&A. 사당역 4번출구 연세365산부인과 02-585-3650.',
  keywords: ['산부인과Q&A','산부인과건강허브','임신중절수술Q&A','사당역산부인과','연세365산부인과'],
  alternates: { canonical: 'https://www.yeonsei365.com/health-hub' },
  openGraph: {
    title: '산부인과 AI 건강 Q&A | 연세365산부인과',
    description: '임신·피임·산부인과 질환·수술·여성건강 전문의 Q&A',
    url: 'https://www.yeonsei365.com/health-hub',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR', type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '산부인과 AI 건강 Q&A | 연세365산부인과', description: '임신·피임·수술 전문의 Q&A' },
}

const PAGE_URL = 'https://www.yeonsei365.com/health-hub'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'산부인과 건강 정보 허브 AI 건강 Q&A | 연세365산부인과', datePublished:'2026-04-01', dateModified:'2026-05-22', image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':'https://www.yeonsei365.com/health-hub'}, url:'https://www.yeonsei365.com/health-hub' }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'산부인과 건강 정보 허브 AI 건강 Q&A', url:'https://www.yeonsei365.com/health-hub', specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:'2026-05-22', reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, about:{'@type':'MedicalCondition',name:'여성건강'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 진행 과정', description:'연세365산부인과 임신중절수술 단계별 안내', step:[ {'@type':'HowToStep',position:1,name:'상담 예약',text:'전화(02-585-3650) 또는 카카오톡으로 상담 예약합니다.'}, {'@type':'HowToStep',position:2,name:'초음파 검사',text:'내원 후 초음파로 임신 주수와 상태를 확인합니다.'}, {'@type':'HowToStep',position:3,name:'수술 진행',text:'전문의 1:1 상담 후 당일 수술을 진행합니다.'}, {'@type':'HowToStep',position:4,name:'회복 및 귀가',text:'수술 후 회복실에서 안정을 취한 뒤 당일 귀가합니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과'} }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'산부인과 건강 Q&A는 어디서 확인하나요?',acceptedAnswer:{'@type':'Answer',text:'사당역 연세365산부인과 AI 건강허브에서 임신·피임·산부인과 질환·수술·여성건강 관련 전문의 Q&A를 확인하실 수 있습니다.'}}, {'@type':'Question',name:'직접 질문을 남길 수 있나요?',acceptedAnswer:{'@type':'Answer',text:'네, 질문을 남기시면 전문의가 검토 후 Q&A 페이지에 답변을 게시합니다. 연세365산부인과(02-585-3650)로 직접 문의도 가능합니다.'}} ] }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'AI 건강 Q&A',item:PAGE_URL} ] }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'산부인과 건강 정보 허브 AI 건강 Q&A 연세365산부인과', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <HealthHubClient />
    </>
  )
}
