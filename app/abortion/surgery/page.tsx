import type { Metadata } from 'next'
import SurgeryClient from './SurgeryClient'
import { clinicSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: '임신중절수술 절차·안전성 | 당일수술·수면마취 안내 | 연세365산부인과의원',
  description: '임신중절수술 절차가 궁금하신가요? 수술 전 준비부터 당일 절차, 수면마취 방법, 소요시간까지 단계별로 안내합니다. 당일 진행 가능 여부는 검사와 예약 상황에 따라 안내합니다. 사당역 연세365산부인과의원.',
  keywords: ['임신중절수술 절차', '임신중절수술 안전성', '임신중절수술 당일', '수면마취 임신중절', '사당역산부인과'],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/surgery' },
  openGraph: {
    title: '임신중절수술 절차·안전성 | 연세365산부인과의원',
    description: '임신중절수술 절차 단계별 안내. 수면마취·당일귀가·비밀보장.',
    url: 'https://www.yeonsei365.com/abortion/surgery',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 절차 안전성 연세365산부인과의원' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 절차·안전성 | 당일수술·수면마취 안내 | 연세365산부인과의원',
    description: '임신중절수술 절차가 궁금하신가요? 수술 전 준비부터 당일 절차, 수면마취 방법, 소요시간까지 단계별로 안내합니다. 당일 진행 가능 여부는 검사와 예약 상황에 따라 안내합니다. 사당역 연세365산부인과의원.',
  },
}
const PAGE_URL = 'https://www.yeonsei365.com/abortion/surgery'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 절차·안전성 | 수술 당일 전 과정 단계별 안내', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 당일 절차는 어떻게 진행되나요?',acceptedAnswer:{'@type':'Answer',text:'일반적으로 내원·접수와 동의서 작성, 초음파·필요 검사(15~20분), 전문의 상담과 방법·비용 확인, 수면마취 후 수술(10~15분 내외), 1인 회복실 안정 후 귀가 순서로 진행됩니다. 전체 소요 시간은 검사·상담·수술·회복 포함 약 2~3시간입니다. 개인 상태와 주수에 따라 소요 시간이 다를 수 있습니다.'}}, {'@type':'Question',name:'수술 당일 금식은 얼마나 해야 하나요?',acceptedAnswer:{'@type':'Answer',text:'수면마취를 위해 수술 6시간 전부터 완전 금식(물 포함)이 필요합니다. 금식 미준수 시 수술이 당일 연기될 수 있으므로 주의해야 합니다. 정확한 금식 시간과 주의사항은 예약 시 안내받으시기 바랍니다.'}}, {'@type':'Question',name:'수면마취는 어떻게 진행되나요?',acceptedAnswer:{'@type':'Answer',text:'수면마취는 정맥을 통해 마취제를 투여해 의식 없는 상태에서 수술이 진행됩니다. 수술 중 혈압·심박수·혈중 산소 포화도를 지속적으로 모니터링합니다. 수술 후 마취에서 깨어나는 과정에서 어지러움이 있을 수 있으며, 수면마취 후에는 자가 운전이 어렵습니다.'}}, {'@type':'Question',name:'수술 시간은 얼마나 걸리나요?',acceptedAnswer:{'@type':'Answer',text:'실제 수술 시간은 수술 방법과 임신 주수에 따라 다르며, 흡입술은 10~15분, 소파술은 20~30분 내외가 일반적입니다. 검사·상담·회복 시간을 포함한 전체 병원 체류 시간은 약 2~3시간입니다. 개인 상태에 따라 소요 시간이 달라질 수 있습니다.'}}, {'@type':'Question',name:'수술 후 당일 귀가가 가능한가요?',acceptedAnswer:{'@type':'Answer',text:'수면마취와 수술 후 1인 회복실에서 충분히 안정을 취한 뒤 당일 귀가가 가능한 경우가 많습니다. 수면마취 특성상 자가 운전은 어려우므로 귀가 방법을 미리 준비해 두시기 바랍니다. 귀가 가능 여부는 회복 상태에 따라 의료진이 판단합니다.'}}, {'@type':'Question',name:'수술 후 이상 증상이 생기면 어떻게 해야 하나요?',acceptedAnswer:{'@type':'Answer',text:'수술 후 38도 이상 고열, 과다출혈, 심한 복통이 지속되면 즉시 내원하거나 의료기관에 문의해야 합니다. 처방약과 안내받은 주의사항을 따르고, 2주간 격렬한 운동·음주·성관계·탕목욕은 삼가야 합니다. 퇴원 후 1주일 이내 사후 검진을 받는 것을 권장합니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 절차·안전성 수술 당일 전 과정', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신중절수술 절차'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 당일 절차 5단계', description:'내원부터 귀가까지 수술 당일 전 과정', step:[ {'@type':'HowToStep',position:1,name:'내원·접수',text:'신분증 지참 후 내원. 동의서 작성.'}, {'@type':'HowToStep',position:2,name:'초음파·혈액검사',text:'정확한 주수 확인. 자궁외 임신 여부 확인. 약 15~20분 소요.'}, {'@type':'HowToStep',position:3,name:'전문의 상담',text:'수술 방법·비용 최종 확인. 궁금한 점 질문.'}, {'@type':'HowToStep',position:4,name:'수면마취·수술',text:'마취 전문의 협진. 수면마취 후 10~15분 내외로 진행(개인차 있음).'}, {'@type':'HowToStep',position:5,name:'1인 회복실·귀가',text:'1~2시간 안정 후 처방약·주의사항 안내. 당일 귀가.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
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