import type { Metadata } from 'next'
import SurgeryClient from './SurgeryClient'
import { clinicSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: '임신중절수술 절차·안전성 | 당일수술·수면마취 안내 | 연세365산부인과',
  description: '임신중절수술 절차가 궁금하신가요? 수술 전 준비부터 당일 절차, 수면마취 방법, 소요시간까지 단계별로 안내합니다. 임신중절수술 금액·비용·가격, 당일예약·당일수술 가능. 사당역 연세365산부인과.',
  keywords: ['임신중절수술 절차', '임신중절수술 안전성', '임신중절수술 당일', '수면마취 임신중절', '임신중절수술금액', '낙태비용', '사당역산부인과'],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/surgery' },
  openGraph: {
    title: '임신중절수술 절차·안전성 | 연세365산부인과',
    description: '임신중절수술 절차 단계별 안내. 수면마취·당일귀가·비밀보장.',
    url: 'https://www.yeonsei365.com/abortion/surgery',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 절차 안전성 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 절차·안전성 | 당일수술·수면마취 안내 | 연세365산부인과',
    description: '임신중절수술 절차가 궁금하신가요? 수술 전 준비부터 당일 절차, 수면마취 방법, 소요시간까지 단계별로 안내합니다. 임신중절수술 금액·비용·가격, 당일예약·당일수술 가능. 사당역 연세365산부인과.',
  },
}
const PAGE_URL = 'https://www.yeonsei365.com/abortion/surgery'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 절차·안전성 | 수술 당일 전 과정 단계별 안내', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 전체 소요 시간이 얼마나 되나요?',acceptedAnswer:{'@type':'Answer',text:'실제 수술은 10~15분이지만 초음파·혈액검사·상담·회복을 포함하면 전체 2~3시간이 소요됩니다. 당일 귀가가 가능합니다.'}}, {'@type':'Question',name:'임신중절수술 전 금식이 필요한가요?',acceptedAnswer:{'@type':'Answer',text:'수면마취를 위해 수술 최소 6시간 전부터 물 포함 아무것도 드시면 안 됩니다. 금식 미준수 시 수술이 당일 연기됩니다.'}}, {'@type':'Question',name:'수면마취는 안전한가요?',acceptedAnswer:{'@type':'Answer',text:'마취 전문의 협진 하에 진행되며 수술 내내 혈압·심박수·혈중 산소를 모니터링합니다. 수면마취 후 약 4~6시간은 자가 운전이 불가합니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 절차·안전성 수술 당일 전 과정', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:PAGE_DATE, reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, about:{'@type':'MedicalCondition',name:'임신중절수술 절차'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 당일 절차 5단계', description:'내원부터 귀가까지 수술 당일 전 과정', step:[ {'@type':'HowToStep',position:1,name:'내원·접수',text:'신분증 지참 후 내원. 동의서 작성.'}, {'@type':'HowToStep',position:2,name:'초음파·혈액검사',text:'정확한 주수 확인. 자궁외 임신 여부 확인. 약 15~20분 소요.'}, {'@type':'HowToStep',position:3,name:'전문의 상담',text:'수술 방법·비용 최종 확인. 궁금한 점 질문.'}, {'@type':'HowToStep',position:4,name:'수면마취·수술',text:'마취 전문의 협진. 수면마취 후 10~15분 무통 수술.'}, {'@type':'HowToStep',position:5,name:'1인 회복실·귀가',text:'1~2시간 안정 후 처방약·주의사항 안내. 당일 귀가.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 절차·안전성 수술 당일 전 과정', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절클리닉',item:'https://www.yeonsei365.com/abortion'}, {'@type':'ListItem',position:3,name:'수술 절차·안전성',item:PAGE_URL} ] }

export default function SurgeryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <SurgeryClient />
    </>
  );
}