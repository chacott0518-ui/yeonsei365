import type { Metadata } from 'next';
import MethodClient from './MethodClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 방법·종류 | 낙태 비용 가격·흡입술·소파술 | 연세365산부인과',
  description:
    '임신중절수술 방법이 궁금하신가요? 흡입술, 소파술, 약물중절 방법을 주수별로 비교 안내합니다. 낙태 비용 가격·임신중절수술 금액·비용까지 한눈에 확인하세요. 사당역 연세365산부인과.',
  keywords: [
    '낙태방법', '낙태수술방법', '임신중절흡입술', '소파술',
    '흡입술', '약물중절방법', '임신중절수술방법', '중절수술방법',
    '임신초기중절방법', '임신중절수술금액', '임신중절수술비용',
    '낙태비용가격', '중절수술금액',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/method' },
  openGraph: {
    title: '임신중절수술 방법·종류 | 낙태 비용 가격·흡입술·소파술 | 연세365산부인과',
    description: '임신중절수술 방법 흡입술·소파술·약물중절 비교. 낙태 비용 가격 안내. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/method',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 방법 낙태 비용 가격 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 방법·종류 | 낙태 비용 가격·흡입술·소파술 | 연세365산부인과',
    description:
      '임신중절수술 방법이 궁금하신가요? 흡입술, 소파술, 약물중절 방법을 주수별로 비교 안내합니다. 낙태 비용 가격·임신중절수술 금액·비용까지 한눈에 확인하세요. 사당역 연세365산부인과.',
  },
};
const PAGE_URL = 'https://www.yeonsei365.com/abortion/method'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 방법·종류 | 흡입술·소파술·약물중절 완전 비교', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 방법에는 어떤 것이 있나요?',acceptedAnswer:{'@type':'Answer',text:'흡입술(진공흡입법), 소파술(자궁소파술), 약물중절 세 가지가 있습니다. 8주 이내는 흡입술, 8~12주는 소파술이 권장되며 약물중절은 7주 이내만 가능합니다. 전문의가 주수와 상태에 맞는 최적 방법을 결정합니다.'}}, {'@type':'Question',name:'흡입술과 소파술 중 어느 방법이 더 안전한가요?',acceptedAnswer:{'@type':'Answer',text:'8주 이내라면 흡입술이 자궁 내막 손상이 적고 수술 시간이 짧아 더 권장됩니다. 소파술은 주수가 높을 때 적합하며 두 방법 모두 수면마취 하에 진행되어 통증이 없습니다.'}}, {'@type':'Question',name:'임신중절수술 후 다음 임신이 가능한가요?',acceptedAnswer:{'@type':'Answer',text:'전문의가 안전하게 시행한 경우 향후 임신에 영향을 주지 않는 것이 일반적입니다. 특히 8주 이내 흡입술은 자궁 내막 손상이 최소화되어 가임력 보존에 유리합니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 방법·종류 흡입술·소파술·약물중절', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:PAGE_DATE, reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, about:{'@type':'MedicalCondition',name:'임신중절수술 방법'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신 주수별 수술 방법 선택', description:'임신 주수에 따른 최적 수술 방법 안내', step:[ {'@type':'HowToStep',position:1,name:'초음파 주수 확인',text:'내원 후 초음파로 정확한 임신 주수를 확인합니다.'}, {'@type':'HowToStep',position:2,name:'수술 방법 결정',text:'8주 이내 흡입술, 8~12주 소파술을 전문의가 결정합니다.'}, {'@type':'HowToStep',position:3,name:'수면마취 후 시술',text:'수면마취 하에 10~30분 시술 후 당일 귀가합니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과'} }
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