import type { Metadata } from 'next';
import AbortionClient from './AbortionClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 금액·비용·가격 | 낙태 비용 가격 주수별 안내 | 연세365산부인과',
  description:
    '임신중절수술 금액과 비용이 궁금하신가요? 낙태 비용 가격, 중절수술 금액을 주수별로 투명하게 공개합니다. 8주 미만 45만원~. 임신초기낙태 비용까지 한눈에 확인하세요. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '임신중절수술', '임신중절수술이란', '임신중절수술금액', '임신중절수술비용',
    '임신중절수술가격', '임신중절금액', '임신중절비용', '임신중절가격',
    '중절수술금액', '중절수술비용', '낙태비용', '낙태비용가격',
    '낙태금액', '인공임신중절', '사당역산부인과', '관악구산부인과',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion' },
  openGraph: {
    title: '임신중절수술 금액·비용·가격 | 낙태 비용 주수별 안내 | 연세365산부인과',
    description: '임신중절수술 금액·비용·가격 주수별 투명 공개. 낙태 비용 가격 8주 미만 45만원~. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 금액 비용 가격 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 금액·비용·가격 | 낙태 비용 가격 주수별 안내 | 연세365산부인과',
    description:
      '임신중절수술 금액과 비용이 궁금하신가요? 낙태 비용 가격, 중절수술 금액을 주수별로 투명하게 공개합니다. 8주 미만 45만원~. 임신초기낙태 비용까지 한눈에 확인하세요. 사당역 4번출구 연세365산부인과.',
  },
};
const PAGE_URL = 'https://www.yeonsei365.com/abortion'
const PAGE_DATE = '2026-04-01'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 금액·비용·가격 | 낙태 비용 주수별 안내 연세365산부인과', datePublished:PAGE_DATE, dateModified:PAGE_DATE, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 금액이 얼마인가요?',acceptedAnswer:{'@type':'Answer',text:'8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 수술비·마취비·영양제·부가세 포함 최종 금액이며 카드·현금 동일가입니다.'}}, {'@type':'Question',name:'임신중절수술이란 무엇인가요?',acceptedAnswer:{'@type':'Answer',text:'임신중절수술(인공임신중절수술)은 자궁 내 임신 조직을 의학적으로 안전하게 제거하는 시술입니다. 2021년 낙태죄 폐지 이후 임신 14주 이내는 본인 동의만으로 합법적으로 시술받을 수 있습니다.'}}, {'@type':'Question',name:'당일 예약 당일 수술이 가능한가요?',acceptedAnswer:{'@type':'Answer',text:'6시간 이상 금식 상태이고 초음파·혈액 검사 결과 이상이 없다면 당일 상담 후 바로 수술이 가능합니다. 전화(02-585-3650) 또는 카카오톡으로 먼저 확인하세요.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 금액·비용·가격 낙태 비용 연세365산부인과', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:PAGE_DATE, reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, about:{'@type':'MedicalCondition',name:'임신중절수술'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 예약 및 진행 방법', description:'연세365산부인과 임신중절수술 전 과정', step:[ {'@type':'HowToStep',position:1,name:'상담 예약',text:'전화(02-585-3650) 또는 카카오톡으로 금식 방법·예약 시간 확인.'}, {'@type':'HowToStep',position:2,name:'내원 및 검사',text:'사당역 4번출구 도보 1분. 신분증 지참. 초음파·혈액검사 후 비용 안내.'}, {'@type':'HowToStep',position:3,name:'수술',text:'수면마취 후 10~15분 무통 수술 진행.'}, {'@type':'HowToStep',position:4,name:'회복 및 귀가',text:'1인 회복실 1~2시간 안정 후 처방약 안내. 당일 귀가.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 금액·비용·가격 낙태 비용 연세365산부인과', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절클리닉',item:PAGE_URL} ] }

export default function AbortionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <AbortionClient />
    </>
  );
}