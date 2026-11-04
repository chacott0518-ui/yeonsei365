import type { Metadata } from 'next';
import LegalClient from './LegalClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '낙태 합법화 | 임신중절수술 합법 여부·법률 기준 | 연세365산부인과의원',
  description:
    '낙태 합법화가 궁금하신가요? 2021년 낙태죄 폐지 이후 임신중절수술 합법 시기와 기간을 정확히 안내합니다. 법률 기준과 확인 방법을 한눈에 확인하세요. 사당역 연세365산부인과의원.',
  keywords: [
    '낙태합법화', '낙태시기', '낙태기간', '낙태법',
    '낙태수술합법', '낙태수술합법시기', '임신중절수술합법',
    '임신중절수술합법기간', '중절수술합법', '낙태죄폐지',
    ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/legal' },
  openGraph: {
    title: '낙태 합법화 | 임신중절수술 합법 여부·법률 기준 | 연세365산부인과의원',
    description: '낙태 합법화, 낙태죄 폐지 후 임신중절 합법 기준 안내. 사당역 연세365산부인과의원.',
    url: 'https://www.yeonsei365.com/abortion/legal',
    images: [{ url: 'https://www.yeonsei365.com/images/hero-abortion-legal.webp', width: 1920, height: 1080, alt: '낙태 합법화 임신중절수술 금액 연세365산부인과의원' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '낙태 합법화 | 임신중절수술 합법 여부·법률 기준 | 연세365산부인과의원',
    description:
      '낙태 합법화가 궁금하신가요? 2021년 낙태죄 폐지 이후 임신중절수술 합법 시기와 기간을 정확히 안내합니다. 법률 기준과 확인 방법을 한눈에 확인하세요. 사당역 연세365산부인과의원.',
  },
};
const PAGE_URL = 'https://www.yeonsei365.com/abortion/legal'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'낙태 합법화 안내 | 임신중절수술 합법 시기·기준 완벽 정리', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/images/hero-abortion-legal.webp', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술의 법률 기준은 어떻게 확인해야 하나요?',acceptedAnswer:{'@type':'Answer',text:'2021년 1월 형법상 낙태죄 처벌 조항이 효력을 상실했습니다. 모자보건법 제14조 열거 사유와 의료기관 정책, 초음파로 확인된 주수·건강 상태에 따라 진료 가능 범위가 달라질 수 있으므로 최신 적용 여부는 진료 상담으로 확인하시기 바랍니다. (확인일 2026.11)'}}, {'@type':'Question',name:'임신 14주 이내면 누구나 수술이 가능한가요?',acceptedAnswer:{'@type':'Answer',text:'임신 14주 이내이더라도 본인의 건강 상태, 초음파로 확인된 정확한 주수, 금식 여부 등에 따라 당일 수술 가능 여부가 달라질 수 있습니다. 수술 전 초음파 검사와 의료진 상담이 반드시 필요하며, 최종 판단은 진료 후 결정됩니다.'}}, {'@type':'Question',name:'14~24주 사이에도 수술이 가능한 경우가 있나요?',acceptedAnswer:{'@type':'Answer',text:'모자보건법 제14조에서 정한 사유(강간·준강간에 의한 임신, 유전적 질환, 전염성 질환, 근친 임신, 모체 건강 위협)에 해당하는 경우 14~24주에도 수술이 가능할 수 있습니다. 해당 사유를 입증하는 서류가 필요할 수 있으며, 전문의와의 심층 상담이 필수입니다. 연세365산부인과의원에서 해당 조건 충족 여부를 상담받을 수 있습니다.'}}, {'@type':'Question',name:'임신중절수술은 어느 병원에서나 받을 수 있나요?',acceptedAnswer:{'@type':'Answer',text:'현행법상 임신중절수술은 의사 면허를 가진 의료인이 의료기관에서 시행해야 합니다. 불법 시술이나 무면허 시술은 여전히 처벌 대상입니다. 합법적인 수술을 위해서는 산부인과 전문의가 있는 의료기관에서 진료를 받으시기 바랍니다.'}}, {'@type':'Question',name:'수술 동의서는 누가 작성하나요? 보호자 동의가 필요한가요?',acceptedAnswer:{'@type':'Answer',text:'성인의 경우 본인 동의서만으로 수술 진행이 가능합니다. 보호자 동의가 법적으로 필요한지 여부는 개인 상황과 법 해석에 따라 달라질 수 있으므로, 구체적인 조건은 예약 상담 시 안내받으시기 바랍니다.'}}, {'@type':'Question',name:'합법 수술 후 법적으로 문제가 생길 수 있나요?',acceptedAnswer:{'@type':'Answer',text:'의료기관에서 현행법 기준에 따라 적법하게 진행된 수술은 법적 문제가 없습니다. 연세365산부인과의원은 관련 법규를 준수하여 임신중절수술을 시행하며, 의무기록 보호는 의료법에 따라 보장됩니다. 구체적인 법적 사항에 대한 판단은 법률 전문가 상담을 병행하시기 바랍니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'낙태 합법화 안내 | 임신중절수술 합법 시기·기준', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신중절수술 합법 기준'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'합법적 임신중절수술 진행 방법', description:'합법적으로 임신중절수술을 받는 4단계', step:[ {'@type':'HowToStep',position:1,name:'신분 확인',text:'신분증 지참 필수. 본인 확인 후 진행합니다.'}, {'@type':'HowToStep',position:2,name:'동의서 작성',text:'충분한 설명 후 서면 동의를 구합니다.'}, {'@type':'HowToStep',position:3,name:'초음파 진단',text:'정확한 주수 확인 후 방법을 결정합니다.'}, {'@type':'HowToStep',position:4,name:'합법 시술',text:'산부인과 전문의가 안전하게 집도합니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'낙태 합법화 안내 | 임신중절수술 합법 시기·기준', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절클리닉',item:'https://www.yeonsei365.com/abortion'}, {'@type':'ListItem',position:3,name:'합법화 안내',item:PAGE_URL} ] }

export default function LegalPage() {
  return (
    <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <LegalClient />
    </>
  );
}