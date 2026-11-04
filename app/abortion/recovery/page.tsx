import type { Metadata } from 'next';
import RecoveryClient from './RecoveryClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 후 관리 | 회복기간·주의사항 | 연세365산부인과의원',
  description:
    '임신중절수술 후 관리가 궁금하신가요? 회복기간, 수술 후 음식·음주·출혈·생리 재개 시기를 안내합니다. 사당역 연세365산부인과의원.',
  keywords: [
    '낙태수술후관리', '낙태수술회복기간', '낙태수술후출혈',
    '낙태수술후음식', '낙태수술후음주', '낙태후유증',
    '중절수술후관리', '중절수술후생리', '임신중절수술후관리',
    ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/recovery' },
  openGraph: {
    title: '임신중절수술 후 관리 | 회복기간·주의사항 | 연세365산부인과의원',
    description: '임신중절수술 후 회복기간, 주의사항, 생리 재개 시기 안내. 사당역 연세365산부인과의원.',
    url: 'https://www.yeonsei365.com/abortion/recovery',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 후 관리 회복 안내 연세365산부인과의원' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 후 관리 | 회복기간·주의사항 | 연세365산부인과의원',
    description:
      '임신중절수술 후 관리가 궁금하신가요? 낙태 수술 회복기간, 수술 후 음식·음주·출혈·생리 재개 시기를 안내합니다. 사당역 연세365산부인과의원.',
  },
};

const PAGE_URL = 'https://www.yeonsei365.com/abortion/recovery'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 후 관리 | 회복기간·주의사항·생리 재개', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 후에는 어떻게 관리해야 하나요?',acceptedAnswer:{'@type':'Answer',text:'수술 당일에는 회복실에서 1~2시간 안정을 취한 뒤 귀가합니다. 가벼운 식사는 당일부터 가능하지만 격렬한 운동, 음주, 성관계는 2주 이상 피하셔야 합니다. 수술 후 1주 이내에 사후 검진을 받는 것을 권장합니다.'}}, {'@type':'Question',name:'수술 후 출혈은 언제까지 지속되나요?',acceptedAnswer:{'@type':'Answer',text:'수술 후 소량의 출혈이 수일에서 수 주 정도 지속될 수 있으며, 개인 상태에 따라 차이가 있습니다. 월경 수준을 초과하는 과다출혈이나 혈전 덩어리가 반복적으로 발생하면 즉시 내원하시기 바랍니다. 이상 증상 여부는 의료진이 판단합니다.'}}, {'@type':'Question',name:'수술 후 생리는 언제 다시 시작되나요?',acceptedAnswer:{'@type':'Answer',text:'수술 후 첫 생리는 일반적으로 4~6주 이내에 재개됩니다. 다만 개인의 호르몬 상태, 수술 주수, 건강 상태에 따라 시기가 달라질 수 있습니다. 8주 이상 생리가 없다면 산부인과 진료를 받으시기 바랍니다.'}}, {'@type':'Question',name:'수술 후 언제부터 일상생활이 가능한가요?',acceptedAnswer:{'@type':'Answer',text:'가벼운 일상 활동과 사무직 업무는 수술 다음 날부터 가능한 경우가 많습니다. 격렬한 신체 활동이나 현장 근무는 의료진 안내에 따라 재개 시기를 결정하시기 바랍니다. 개인 회복 속도에 따라 차이가 있으므로 무리하지 않는 것이 중요합니다.'}}, {'@type':'Question',name:'수술 후 샤워와 목욕은 언제 가능한가요?',acceptedAnswer:{'@type':'Answer',text:'샤워는 수술 다음 날부터 가능합니다. 욕조 목욕이나 수영장 이용은 감염 위험으로 인해 2주 이상 피하셔야 합니다. 정확한 가능 시기는 상태에 따라 다를 수 있으므로 사후 검진 시 의료진에게 확인하세요.'}}, {'@type':'Question',name:'수술 후 즉시 병원에 연락해야 하는 증상은 무엇인가요?',acceptedAnswer:{'@type':'Answer',text:'38도 이상 고열, 월경 수준 이상의 과다출혈, 지속되는 심한 복통, 악취 분비물, 어지럼증이나 실신 증세가 나타나면 즉시 의료기관에 연락하거나 내원하세요. 이러한 증상은 감염이나 불완전 수술의 신호일 수 있으며 지체 없는 처치가 필요합니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 후 관리 회복기간 주의사항', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신중절수술 후 관리'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 후 회복 단계별 관리', description:'수술 당일부터 4주까지 단계별 회복 안내', step:[ {'@type':'HowToStep',position:1,name:'수술 당일',text:'회복실 1~2시간 안정 후 대중교통으로 귀가. 처방약 복용 시작.'}, {'@type':'HowToStep',position:2,name:'1~3일',text:'가벼운 샤워·산책 가능. 출혈·복통 관찰. 사무직 업무 복귀 가능.'}, {'@type':'HowToStep',position:3,name:'1~2주',text:'성관계·격렬한 운동·음주·탕목욕 금지. 사후 검진 내원.'}, {'@type':'HowToStep',position:4,name:'4~6주',text:'첫 생리 재개. 정상 활동 가능. 피임 상담 권장.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 후 관리 회복기간 주의사항', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절클리닉',item:'https://www.yeonsei365.com/abortion'}, {'@type':'ListItem',position:3,name:'수술 후 관리',item:PAGE_URL} ] }
export default function RecoveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <RecoveryClient />
    </>
  );
}