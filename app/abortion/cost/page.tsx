import type { Metadata } from 'next';
import CostClient from './CostClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 금액·비용·가격 | 낙태 비용 가격 주수별 안내 | 연세365산부인과의원',
  description:
    '임신중절수술 금액·비용·가격이 궁금하신가요? 낙태 비용 가격, 중절수술 금액·비용을 주수별로 투명하게 공개합니다. 8주 미만 45만원~. 임신초기낙태 비용까지 한눈에 확인하세요. 사당역 4번출구 연세365산부인과의원.',
  keywords: [
    '임신중절수술금액', '임신중절수술비용', '임신중절수술가격',
    '임신중절금액', '임신중절비용', '임신중절가격',
    '중절수술금액', '중절수술비용', '중절수술가격',
    '낙태비용', '낙태비용가격', '낙태금액', '낙태가격',
    '임신초기낙태비용', '약물중절비용', '8주낙태비용',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/cost' },
  openGraph: {
    title: '임신중절수술 금액·비용·가격 | 낙태 비용 가격 주수별 안내 | 연세365산부인과의원',
    description: '임신중절수술 금액·비용·가격 주수별 투명 공개. 낙태 비용 가격 8주 미만 45만원~. 사당역 연세365산부인과의원.',
    url: 'https://www.yeonsei365.com/abortion/cost',
    images: [{ url: 'https://www.yeonsei365.com/images/hero-abortion-cost.webp', width: 1920, height: 1080, alt: '임신중절수술 금액 비용 가격 주수별 연세365산부인과의원' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 금액·비용·가격 | 낙태 비용 가격 주수별 안내 | 연세365산부인과의원',
    description:
      '임신중절수술 금액·비용·가격이 궁금하신가요? 낙태 비용 가격, 중절수술 금액·비용을 주수별로 투명하게 공개합니다. 8주 미만 45만원~. 임신초기낙태 비용까지 한눈에 확인하세요. 사당역 4번출구 연세365산부인과의원.',
  },
};

const priceSpecificationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'PriceSpecification', name: '임신중절수술 8주 미만', priceCurrency: 'KRW', price: 450000 },
    { '@type': 'PriceSpecification', name: '임신중절수술 8주', priceCurrency: 'KRW', price: 600000 },
    { '@type': 'PriceSpecification', name: '임신중절수술 9주', priceCurrency: 'KRW', price: 700000 },
    { '@type': 'PriceSpecification', name: '임신중절수술 10주', priceCurrency: 'KRW', price: 800000 },
  ],
};
const PAGE_URL = 'https://www.yeonsei365.com/abortion/cost'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 금액·비용·가격 주수별 안내 | 연세365산부인과의원', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/images/hero-abortion-cost.webp', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 비용은 임신 주수에 따라 어떻게 달라지나요?',acceptedAnswer:{'@type':'Answer',text:'연세365산부인과의원의 임신중절수술 비용은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 주수가 높아질수록 수술 방법이 복잡해지고 소요 시간이 길어지므로 비용도 높아집니다. 정확한 주수는 초음파 검사로 확인하며, 11주 이상은 별도 상담이 필요합니다.'}}, {'@type':'Question',name:'안내된 주수별 비용에 포함된 항목은 무엇인가요?',acceptedAnswer:{'@type':'Answer',text:'안내된 주수별 비용은 수술비 기준이며, 초음파 검사·처방약·마취비 등의 포함 여부는 진료 상담 시 확인하시기 바랍니다. 검사나 추가 처치가 필요한 경우 최종 비용은 진료 후 달라질 수 있습니다. 정확한 비용과 포함 항목은 예약 상담 시 사전에 안내받으시기 바랍니다.'}}, {'@type':'Question',name:'카드 또는 현금 모두 결제가 가능한가요?',acceptedAnswer:{'@type':'Answer',text:'카드와 현금 모두 동일한 금액으로 결제 가능하며, 현금영수증 발급도 가능합니다. 당일 수술 진행 여부는 초음파 검사 결과, 금식 상태, 예약 상황에 따라 결정되므로 방문 전 사전 문의를 권장합니다.'}}, {'@type':'Question',name:'임신중절수술에 건강보험이나 실손보험이 적용되나요?',acceptedAnswer:{'@type':'Answer',text:'임신중절수술은 건강보험 비급여 항목으로 건강보험 및 실손보험 적용이 대부분 불가합니다. 모자보건법상 특수 사유(강간, 근친 임신, 유전적 질환, 모체 건강 위협)에 해당하는 경우 일부 급여 적용이 가능할 수 있으므로 가입 보험사에 직접 문의하시기 바랍니다.'}}, {'@type':'Question',name:'방문 당일에 정확한 비용을 알 수 있나요?',acceptedAnswer:{'@type':'Answer',text:'네, 가능합니다. 초음파로 확인된 정확한 주수에 따라 수술 방법과 비용이 결정됩니다. 예를 들어 방문 시 7주로 생각했지만 실제로 8주 이상으로 확인되면 해당 주수에 맞는 비용이 적용됩니다. 비용 확인을 위해 초음파 검사를 먼저 진행합니다.'}}, {'@type':'Question',name:'11주 이상이면 비용이 어떻게 되나요?',acceptedAnswer:{'@type':'Answer',text:'11주 이상은 수술 난이도와 방법이 달라지므로 별도 상담이 필요합니다. 연세365산부인과의원에서 진료 상담을 통해 수술 가능 여부와 비용을 확인하시기 바랍니다. 주수가 높을수록 의료진 판단에 따라 결정되며, 방문 전 전화 문의를 권장합니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 금액·비용·가격 주수별 안내', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신중절수술 비용'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 금액·비용·가격 주수별 안내', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 진행 과정', description:'연세365산부인과의원 임신중절수술 단계별 안내', step:[ {'@type':'HowToStep',position:1,name:'상담 예약',text:'전화(02-585-3650) 또는 카카오톡으로 상담 예약합니다.'}, {'@type':'HowToStep',position:2,name:'초음파 검사',text:'내원 후 초음파로 임신 주수와 상태를 확인합니다.'}, {'@type':'HowToStep',position:3,name:'수술 진행',text:'전문의 1:1 상담 후 당일 수술을 진행합니다.'}, {'@type':'HowToStep',position:4,name:'회복 및 귀가',text:'수술 후 회복실에서 안정을 취한 뒤 당일 귀가합니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절클리닉',item:'https://www.yeonsei365.com/abortion'}, {'@type':'ListItem',position:3,name:'비용 안내',item:PAGE_URL} ] }

export default function CostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSpecificationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <CostClient />
    </>
  );
}