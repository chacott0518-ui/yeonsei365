import type { Metadata } from 'next';
import HospitalClient from './HospitalClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 병원 | 낙태병원·낙태수술병원 서울 | 연세365산부인과의원',
  description:
    '임신중절수술 병원을 찾고 계신가요? 서울 낙태병원·낙태수술병원 중 사당역 연세365산부인과의원은 전문의가 직접 시행하며 당일 진행 여부는 검사·예약 상황에 따라 안내합니다. 진료 환경과 예약 확인 방법도 안내합니다. 사당역 4번 출구.',
  keywords: [
    '임신중절수술병원', '낙태병원', '낙태수술병원', '서울낙태병원',
    '중절수술병원', '임신초기낙태병원', '낙태병원찾기',
    '낙태병원예약', '낙태병원후기', '사당역낙태병원',
    ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/hospital' },
  openGraph: {
    title: '임신중절수술 병원 | 낙태병원·낙태수술병원 서울 | 연세365산부인과의원',
    description: '서울 낙태병원·임신중절수술 병원. 전문의 직접 시행. 당일 진행은 검사·예약 상황에 따라 안내. 사당역.',
    url: 'https://www.yeonsei365.com/abortion/hospital',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 병원 낙태병원 연세365산부인과의원' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 병원 | 낙태병원·낙태수술병원 서울 | 연세365산부인과의원',
    description:
      '임신중절수술 병원을 찾고 계신가요? 서울 낙태병원·낙태수술병원 중 사당역 연세365산부인과의원은 전문의가 직접 시행하며 당일 진행 여부는 검사·예약 상황에 따라 안내합니다. 진료 환경과 예약 확인 방법도 안내합니다. 사당역 4번 출구.',
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '연세365산부인과의원',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '서울특별시 관악구 과천대로 939, 3층',
    addressCountry: 'KR',
  },
  telephone: '02-585-3650',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.4769,
    longitude: 126.9819,
  },
};
const PAGE_URL = 'https://www.yeonsei365.com/abortion/hospital'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 병원 | 낙태병원 서울 사당역 연세365산부인과의원', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 병원을 선택할 때 무엇을 확인해야 하나요?',acceptedAnswer:{'@type':'Answer',text:'산부인과 전문의의 직접 집도 여부, 1인 회복실 운영, 개인정보와 진료정보 보호, 수술 전 초음파 검사 실시 여부를 확인하는 것이 중요합니다. 가격이 낮더라도 위 기준을 충족하지 못하는 경우 불필요한 위험이 발생할 수 있습니다. 초기 상담 시 궁금한 점은 모두 질문하여 신뢰 여부를 직접 확인하세요.'}}, {'@type':'Question',name:'사당역에서 연세365산부인과의원까지 얼마나 걸리나요?',acceptedAnswer:{'@type':'Answer',text:'사당역 4번 출구 도보 3분 거리에 있습니다. 주소는 서울특별시 관악구 과천대로 939, 3층이며, 버스 이용 시에도 사당역 정류장에서 가깝습니다. 수면마취 후 자가 운전이 불가하므로 대중교통 이용을 권장합니다.'}}, {'@type':'Question',name:'예약 없이 방문해도 되나요?',acceptedAnswer:{'@type':'Answer',text:'방문 전 전화(02-585-3650)나 카카오톡 채널 상담을 통해 예약을 권장합니다. 예약 없이 방문하셔도 상담은 가능하지만, 검사 결과, 금식 상태, 건강 상태와 진료 일정에 따라 당일 진행 여부가 결정됩니다. 상담과 접수 과정은 의료법과 개인정보 보호 기준에 따라 진료정보를 보호합니다.'}}, {'@type':'Question',name:'진료시간은 어떻게 되나요?',acceptedAnswer:{'@type':'Answer',text:'평일 월~금 10:00~17:30, 토요일 09:00~16:30, 일요일·공휴일 10:00~14:00에 진료합니다. 공휴일 진료 여부는 사전에 전화로 확인하시기 바랍니다.'}}, {'@type':'Question',name:'처음 방문 시 어떤 서류나 준비물이 필요한가요?',acceptedAnswer:{'@type':'Answer',text:'신분증은 반드시 지참하셔야 합니다. 당일 수술을 계획하고 계신다면 수술 6시간 전 금식(물 포함)이 필요합니다. 복용 중인 약이 있다면 수술 전 반드시 알려주시기 바랍니다.'}}, {'@type':'Question',name:'가족이나 지인에게 알리지 않고 혼자 방문할 수 있나요?',acceptedAnswer:{'@type':'Answer',text:'성인은 본인 동의를 원칙으로 방문할 수 있으며, 수술 가능 여부와 동행·서류는 상담에서 확인합니다. 접수부터 상담, 수술, 귀가까지 독립된 동선으로 진행되어 다른 방문자와 마주치는 상황을 최소화합니다. 의료 기록은 의료법에 따라 본인 동의 없이는 외부에 공개되지 않습니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 병원 | 낙태병원 서울 사당역', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신중절수술'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 병원 예약 방법', description:'연세365산부인과의원 예약부터 수술까지 3단계', step:[ {'@type':'HowToStep',position:1,name:'예약',text:'전화(02-585-3650) 또는 카카오톡으로 예약합니다.'}, {'@type':'HowToStep',position:2,name:'내원',text:'사당역 4번 출구 도보 3분. 신분증 지참 후 내원.'}, {'@type':'HowToStep',position:3,name:'수술 및 귀가',text:'당일 초음파·상담·수술 후 귀가 가능합니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
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