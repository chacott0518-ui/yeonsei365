import type { Metadata } from 'next';
import InfoClient from './InfoClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 보호자·보험 안내 | 준비사항 | 연세365산부인과의원',
  description:
    '임신중절수술 보호자 동반이 필요한지 궁금하신가요? 동행·동의 기준은 연령, 마취 방식, 귀가 상황에 따라 달라질 수 있어 방문 전 확인이 필요합니다. 보험 적용 여부와 준비사항을 안내합니다. 사당역 연세365산부인과의원.',
  keywords: [
    '임신중절수술보호자', '중절수술보호자', '낙태보호자',
    '임신초기낙태보호자', '중절수술보험', '낙태비용보험',
    '낙태보험적용', '임신중절수술혼자', '낙태혼자가능',
    ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/info' },
  openGraph: {
    title: '임신중절수술 보호자·보험 안내 | 준비사항 | 연세365산부인과의원',
    description: '임신중절수술 보호자 여부, 보험 적용 안내. 사당역 연세365산부인과의원.',
    url: 'https://www.yeonsei365.com/abortion/info',
    images: [{ url: 'https://www.yeonsei365.com/images/hero-abortion-info.webp', width: 1920, height: 1080, alt: '임신중절수술 보호자 보험 안내 연세365산부인과의원' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 보호자·보험 안내 | 준비사항 | 연세365산부인과의원',
    description:
      '임신중절수술 보호자 동반이 필요한지 궁금하신가요? 동행·동의 기준은 연령, 마취 방식, 귀가 상황에 따라 달라질 수 있어 방문 전 확인이 필요합니다. 보험 적용 여부와 준비사항을 안내합니다. 사당역 연세365산부인과의원.',
  },
};
const PAGE_URL = 'https://www.yeonsei365.com/abortion/info'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 보호자·보험 안내 | 혼자 내원·보험 확인', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/images/hero-abortion-info.webp', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 전에는 무엇을 준비해야 하나요?',acceptedAnswer:{'@type':'Answer',text:'수술 전 준비사항으로는 신분증, 수면마취를 위한 6시간 이상 완전 금식(물 포함), 복용 중인 약 목록 고지, 네일아트 제거가 일반적으로 필요합니다. 귀가 시 수면마취 후 자가 운전이 어려우므로 귀가 방법을 미리 준비해 두세요. 구체적인 준비사항은 예약 시 안내받으시기 바랍니다.'}}, {'@type':'Question',name:'혼자 수술받을 수 있나요?',acceptedAnswer:{'@type':'Answer',text:'성인은 본인 동의가 원칙이며, 보호자 동행 여부는 마취 방식·건강 상태·병원 안내에 따라 달라질 수 있습니다. 다만 수면마취 후에는 자가 운전이 어려우므로 귀가 시 동행자가 있으면 더 안전합니다. 정확한 조건은 예약 시 확인해 주시기 바랍니다.'}}, {'@type':'Question',name:'비밀이 보장되나요?',acceptedAnswer:{'@type':'Answer',text:'의료 기록은 의료법에 따라 철저히 보호되며 본인 동의 없이는 누구에게도 공개되지 않습니다. 연세365산부인과의원은 1인 상담실과 1인 회복실, 독립 동선을 운영하여 다른 환자와의 접촉을 최소화합니다. 카드 결제 내역에는 병원명만 표시됩니다.'}}, {'@type':'Question',name:'보험 적용이 가능한가요?',acceptedAnswer:{'@type':'Answer',text:'임신중절수술은 건강보험 비급여 항목으로 건강보험과 실손보험 적용이 대부분 불가합니다. 모자보건법상 특수 사유에 해당하는 경우 일부 적용 가능성이 있을 수 있으니 가입 보험사에 직접 문의하세요. 영수증과 진단서 등 서류는 요청 시 발급 협조해 드립니다.'}}, {'@type':'Question',name:'수술 당일 금식은 얼마나 해야 하나요?',acceptedAnswer:{'@type':'Answer',text:'수면마취를 위해 수술 6시간 전부터 완전 금식(물 포함)이 필요합니다. 금식 미준수 시 수술이 당일 연기될 수 있으므로 반드시 지켜야 합니다. 정확한 금식 시간은 예약 시 안내받으시기 바랍니다.'}}, {'@type':'Question',name:'수술 후 언제부터 일상 복귀가 가능한가요?',acceptedAnswer:{'@type':'Answer',text:'수술 후 일상 복귀 시점은 개인의 건강 상태와 수술 방법에 따라 다릅니다. 가벼운 사무 업무는 2~3일 이후부터 가능한 경우가 많지만, 무거운 활동이나 격렬한 운동은 2주 이상 자제해야 합니다. 처방약과 주의사항을 따르고, 이상 증상이 있으면 즉시 내원해야 합니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 보호자·보험 안내', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신중절수술'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 당일 준비 방법', description:'수술 당일 준비사항 단계별 안내', step:[ {'@type':'HowToStep',position:1,name:'금식',text:'수술 6시간 전부터 물 포함 완전 금식합니다.'}, {'@type':'HowToStep',position:2,name:'신분증 지참',text:'주민등록증 또는 운전면허증을 반드시 지참합니다.'}, {'@type':'HowToStep',position:3,name:'귀가 방법 확인',text:'수면마취 후 자가 운전 불가. 대중교통 이용 또는 보호자 동반.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 보호자·보험 안내', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절클리닉',item:'https://www.yeonsei365.com/abortion'}, {'@type':'ListItem',position:3,name:'수술 정보·보호자',item:PAGE_URL} ] }
export default function InfoPage() {
  return (
    <>
       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <InfoClient />
    </>
  );
}