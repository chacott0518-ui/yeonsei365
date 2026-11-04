import type { Metadata } from 'next';
import MethodClient from './MethodClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 방법·종류 | 흡입술·소파술 비교 | 연세365산부인과의원',
  description:
    '임신중절수술 방법이 궁금하신가요? 흡입술·소파술 등 수술적 방법을 주수·상태에 따라 비교 안내합니다. 본원은 약물중절을 시행하지 않습니다. 사당역 연세365산부인과의원.',
  keywords: [
    '낙태방법', '낙태수술방법', '임신중절흡입술', '소파술',
    '흡입술', '약물중절방법', '임신중절수술방법', '중절수술방법',
    '임신초기중절방법', ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/method' },
  openGraph: {
    title: '임신중절수술 방법·종류 | 흡입술·소파술 비교 | 연세365산부인과의원',
    description: '임신중절수술 방법 흡입술·소파술 비교 안내. 본원 약물중절 미시행. 사당역 연세365산부인과의원.',
    url: 'https://www.yeonsei365.com/abortion/method',
    images: [{ url: 'https://www.yeonsei365.com/images/hero-abortion-method.webp', width: 1920, height: 1080, alt: '임신중절수술 방법 흡입술 소파술 연세365산부인과의원' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 방법·종류 | 흡입술·소파술 비교 | 연세365산부인과의원',
    description:
      '임신중절수술 방법이 궁금하신가요? 흡입술·소파술 등 수술적 방법을 주수·상태에 따라 비교 안내합니다. 본원은 약물중절을 시행하지 않습니다. 사당역 연세365산부인과의원.',
  },
};
const PAGE_URL = 'https://www.yeonsei365.com/abortion/method'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 방법·종류 | 흡입술·소파술 비교', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/images/hero-abortion-method.webp', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 방법은 어떤 기준으로 결정하나요?',acceptedAnswer:{'@type':'Answer',text:'수술 방법은 임신 주수, 초음파 검사 결과, 자궁 상태, 과거 병력과 현재 건강 상태를 종합하여 의료진이 안내합니다. 연세365산부인과의원에서는 흡입술과 소파술을 시행하며, 약물중절은 시행하지 않습니다. 방법에 대한 자세한 안내는 초음파 확인과 상담 이후에 이루어집니다.'}}, {'@type':'Question',name:'흡입술과 소파술의 차이는 무엇인가요?',acceptedAnswer:{'@type':'Answer',text:'흡입술은 음압으로 임신 조직을 제거하며 8주 이내에 주로 적용되고, 시술 시간은 10~15분 내외입니다. 소파술은 기구로 자궁 내 조직을 제거하며 8~12주 사이에 주로 적용되고, 시술 시간은 20~30분 내외입니다. 두 방법 모두 수면마취 하에 진행되며, 시술 후 당일 귀가가 가능한 경우가 많습니다.'}}, {'@type':'Question',name:'약물중절도 선택할 수 있나요?',acceptedAnswer:{'@type':'Answer',text:'연세365산부인과의원은 약물중절을 시행하지 않으며 수술적 방법에 대해서만 상담합니다. 약물중절은 불완전 유산이나 후유증 위험이 있을 수 있어 의료진 관리가 중요합니다. 수술 방법에 대해 궁금한 점은 방문 전 전화나 카카오톡으로 문의하실 수 있습니다.'}}, {'@type':'Question',name:'어떤 방법이 회복이 빠른가요?',acceptedAnswer:{'@type':'Answer',text:'흡입술은 일반적으로 자궁 손상이 적고 시술 시간이 짧아 회복이 빠른 편입니다. 소파술은 흡입술보다 회복 기간이 약간 더 필요할 수 있습니다. 회복 속도는 임신 주수, 개인 건강 상태에 따라 달라지므로 처방약과 주의사항을 따르는 것이 중요합니다.'}}, {'@type':'Question',name:'수술 방법이 향후 임신에 영향을 주나요?',acceptedAnswer:{'@type':'Answer',text:'의료진이 안전하게 시행한 수술은 향후 임신에 직접적인 영향을 주지 않는 경우가 많습니다. 다만 반복 수술은 자궁 내막에 누적적 영향이 있을 수 있으므로 피임 상담을 함께 받는 것을 권장합니다. 수술 후 피임 상담도 내원 시 문의해 주시면 안내해 드립니다.'}}, {'@type':'Question',name:'주수별로 적용되는 수술 방법이 다른가요?',acceptedAnswer:{'@type':'Answer',text:'임신 주수에 따라 권장 수술 방법이 달라집니다. 8주 이내는 흡입술이, 8~12주는 소파술이 일반적으로 적용됩니다. 11주 이상이나 특수 상황에서는 전문의 심층 상담과 추가 검사가 필요하며, 정확한 방법은 초음파 검사 후 의료진이 안내합니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 방법·종류 흡입술·소파술·약물중절', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신중절수술 방법'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신 주수별 수술 방법 선택', description:'임신 주수에 따른 최적 수술 방법 안내', step:[ {'@type':'HowToStep',position:1,name:'초음파 주수 확인',text:'내원 후 초음파로 정확한 임신 주수를 확인합니다.'}, {'@type':'HowToStep',position:2,name:'수술 방법 결정',text:'8주 이내 흡입술, 8~12주 소파술을 전문의가 결정합니다.'}, {'@type':'HowToStep',position:3,name:'수면마취 후 시술',text:'수면마취 하에 10~30분 시술 후 당일 귀가합니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 방법·종류 흡입술·소파술·약물중절', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절클리닉',item:'https://www.yeonsei365.com/abortion'}, {'@type':'ListItem',position:3,name:'수술 방법·종류',item:PAGE_URL} ] }

export default function MethodPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <MethodClient />
    </>
  );
}