import type { Metadata } from 'next';
import HospitalClient from './HospitalClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 병원 | 낙태병원·낙태수술병원 서울 | 연세365산부인과',
  description:
    '임신중절수술 병원을 찾고 계신가요? 서울 낙태병원·낙태수술병원 중 사당역 연세365산부인과는 전문의 직접 시행, 당일수술 가능, 비밀보장입니다. 임신중절수술 금액·비용·가격도 투명하게 안내합니다. 사당역 4번출구.',
  keywords: [
    '임신중절수술병원', '낙태병원', '낙태수술병원', '서울낙태병원',
    '중절수술병원', '임신초기낙태병원', '낙태병원찾기',
    '낙태병원예약', '낙태병원후기', '사당역낙태병원',
    '임신중절수술금액', '임신중절수술비용', '낙태비용가격',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/hospital' },
  openGraph: {
    title: '임신중절수술 병원 | 낙태병원·낙태수술병원 서울 | 연세365산부인과',
    description: '서울 낙태병원·임신중절수술 병원. 전문의 직접 시행. 당일수술 가능. 비밀보장. 사당역.',
    url: 'https://www.yeonsei365.com/abortion/hospital',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 병원 낙태병원 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 병원 | 낙태병원·낙태수술병원 서울 | 연세365산부인과',
    description:
      '임신중절수술 병원을 찾고 계신가요? 서울 낙태병원·낙태수술병원 중 사당역 연세365산부인과는 전문의 직접 시행, 당일수술 가능, 비밀보장입니다. 임신중절수술 금액·비용·가격도 투명하게 안내합니다. 사당역 4번출구.',
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '연세365산부인과',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '서울 관악구 과천대로 939 3층',
    addressCountry: 'KR',
  },
  telephone: '02-585-3650',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.4875,
    longitude: 126.9814,
  },
};
const PAGE_URL = 'https://www.yeonsei365.com/abortion/hospital'
const PAGE_DATE = '2026-04-01'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 병원 | 낙태병원 서울 사당역 연세365산부인과', datePublished:PAGE_DATE, dateModified:PAGE_DATE, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 병원은 어떻게 선택하나요?',acceptedAnswer:{'@type':'Answer',text:'산부인과 전문의 직접 집도 여부, 수면마취 전문의 상주 여부, 1인 회복실 운영 여부, 낙태 비용 투명 공개 여부를 확인하세요. 연세365산부인과는 이 모든 기준을 충족합니다.'}}, {'@type':'Question',name:'사당역에서 연세365산부인과까지 얼마나 걸리나요?',acceptedAnswer:{'@type':'Answer',text:'사당역 4번출구에서 도보 1분 이내입니다. 지하철 2호선·4호선 환승역이라 서울 전역에서 접근이 편리합니다.'}}, {'@type':'Question',name:'임신중절수술 병원 예약은 어떻게 하나요?',acceptedAnswer:{'@type':'Answer',text:'전화(02-585-3650) 또는 카카오톡으로 예약 가능합니다. 당일예약 당일수술도 가능하며 모든 상담은 비밀이 보장됩니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 병원 | 낙태병원 서울 사당역', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:PAGE_DATE, reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, about:{'@type':'MedicalCondition',name:'임신중절수술'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 병원 예약 방법', description:'연세365산부인과 예약부터 수술까지 3단계', step:[ {'@type':'HowToStep',position:1,name:'예약',text:'전화(02-585-3650) 또는 카카오톡으로 예약합니다.'}, {'@type':'HowToStep',position:2,name:'내원',text:'사당역 4번출구 도보 1분. 신분증 지참 후 내원.'}, {'@type':'HowToStep',position:3,name:'수술 및 귀가',text:'당일 초음파·상담·수술 후 귀가 가능합니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 병원 | 낙태병원 서울 사당역', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절클리닉',item:'https://www.yeonsei365.com/abortion'}, {'@type':'ListItem',position:3,name:'병원 안내',item:PAGE_URL} ] }

export default function HospitalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <HospitalClient />
    </>
  );
}