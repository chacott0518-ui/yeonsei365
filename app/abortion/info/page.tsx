import type { Metadata } from 'next';
import InfoClient from './InfoClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 보호자·보험 안내 | 낙태 비용 가격 보험적용 | 연세365산부인과',
  description:
    '임신중절수술 보호자 동반이 필요한지 궁금하신가요? 성인은 혼자 가능하며 미성년자는 법정대리인 동의가 필요합니다. 낙태 비용 가격 보험 적용 여부, 임신중절수술 금액·비용도 함께 안내합니다. 사당역 연세365산부인과.',
  keywords: [
    '임신중절수술보호자', '중절수술보호자', '낙태보호자',
    '임신초기낙태보호자', '중절수술보험', '낙태비용보험',
    '낙태보험적용', '임신중절수술혼자', '낙태혼자가능',
    '임신중절수술금액', '임신중절수술비용', '낙태비용가격',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/info' },
  openGraph: {
    title: '임신중절수술 보호자·보험 안내 | 낙태 비용 가격 보험적용 | 연세365산부인과',
    description: '임신중절수술 보호자 여부, 낙태 비용 가격 보험 적용 안내. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/info',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 보호자 보험 안내 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 보호자·보험 안내 | 낙태 비용 가격 보험적용 | 연세365산부인과',
    description:
      '임신중절수술 보호자 동반이 필요한지 궁금하신가요? 성인은 혼자 가능하며 미성년자는 법정대리인 동의가 필요합니다. 낙태 비용 가격 보험 적용 여부, 임신중절수술 금액·비용도 함께 안내합니다. 사당역 연세365산부인과.',
  },
};
const PAGE_URL = 'https://www.yeonsei365.com/abortion/info'
const PAGE_DATE = '2026-04-01'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 보호자·보험 안내 | 혼자 가능 여부 완벽 정리', datePublished:PAGE_DATE, dateModified:PAGE_DATE, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 혼자 가도 되나요?',acceptedAnswer:{'@type':'Answer',text:'성인(만 19세 이상)은 보호자 없이 혼자 내원하여 수술이 가능합니다. 신분증만 지참하시면 됩니다. 수면마취 후에는 자가 운전이 불가하므로 귀가 시 대중교통을 이용하세요.'}}, {'@type':'Question',name:'임신중절수술 보험 적용이 되나요?',acceptedAnswer:{'@type':'Answer',text:'임신중절수술은 건강보험 비급여 항목으로 건강보험 및 실손보험 적용이 대부분 불가합니다. 모자보건법상 특수 사유에 해당하는 경우 일부 급여 적용이 가능할 수 있으니 가입 보험사에 문의하세요.'}}, {'@type':'Question',name:'임신중절수술 비밀이 보장되나요?',acceptedAnswer:{'@type':'Answer',text:'의료법 제19조에 따라 모든 진료 내용은 본인 동의 없이 외부에 공개되지 않습니다. 1인 상담실·1인 회복실·독립 동선 운영으로 완전한 프라이버시가 보장됩니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 보호자·보험 안내', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:PAGE_DATE, reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, about:{'@type':'MedicalCondition',name:'임신중절수술'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 당일 준비 방법', description:'수술 당일 준비사항 단계별 안내', step:[ {'@type':'HowToStep',position:1,name:'금식',text:'수술 6시간 전부터 물 포함 완전 금식합니다.'}, {'@type':'HowToStep',position:2,name:'신분증 지참',text:'주민등록증 또는 운전면허증을 반드시 지참합니다.'}, {'@type':'HowToStep',position:3,name:'귀가 방법 확인',text:'수면마취 후 자가 운전 불가. 대중교통 이용 또는 보호자 동반.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과'} }
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