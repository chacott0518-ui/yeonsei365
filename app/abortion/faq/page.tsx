import type { Metadata } from 'next';
import FAQClient from './FAQClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 FAQ | 낙태 비용 가격 자주 묻는 질문 70가지 | 연세365산부인과',
  description:
    '임신중절수술 비용·금액·가격, 수술 방법, 주수별 기간, 수술 전 준비, 수술 후 관리, 법적 기준까지 자주 묻는 질문 70가지를 전문의가 직접 답변합니다. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '임신중절수술FAQ', '낙태FAQ', '임신중절수술자주묻는질문',
    '임신중절수술금액', '임신중절수술비용', '낙태비용가격',
    '임신중절수술방법', '임신중절수술후관리', '낙태합법화',
    '임신중절수술병원', '사당역산부인과',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/faq' },
  openGraph: {
    title: '임신중절수술 FAQ | 낙태 비용 가격 자주 묻는 질문 70가지 | 연세365산부인과',
    description: '임신중절수술 비용·방법·후관리 자주 묻는 질문 70가지. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/faq',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 FAQ 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 FAQ | 낙태 비용 가격 자주 묻는 질문 70가지 | 연세365산부인과',
    description:
      '임신중절수술 비용·금액·가격, 수술 방법, 주수별 기간, 수술 전 준비, 수술 후 관리, 법적 기준까지 자주 묻는 질문 70가지를 전문의가 직접 답변합니다. 사당역 4번출구 연세365산부인과.',
  },
};
const PAGE_URL = 'https://www.yeonsei365.com/abortion/faq'
const PAGE_DATE = '2026-04-01'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 FAQ | 낙태 비용 가격 자주 묻는 질문 70가지', datePublished:PAGE_DATE, dateModified:PAGE_DATE, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 FAQ 자주 묻는 질문 70가지', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:PAGE_DATE, reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, about:{'@type':'MedicalCondition',name:'임신중절수술'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 예약 방법', description:'연세365산부인과 임신중절수술 예약부터 수술까지', step:[ {'@type':'HowToStep',position:1,name:'상담 예약',text:'전화(02-585-3650) 또는 카카오톡으로 예약합니다.'}, {'@type':'HowToStep',position:2,name:'내원 및 검사',text:'신분증 지참 후 내원. 초음파로 주수 확인 후 비용 안내.'}, {'@type':'HowToStep',position:3,name:'수술 및 귀가',text:'수면마취 후 10~30분 수술. 당일 귀가 가능.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 FAQ 자주 묻는 질문 70가지', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절클리닉',item:'https://www.yeonsei365.com/abortion'}, {'@type':'ListItem',position:3,name:'FAQ',item:PAGE_URL} ] }

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <FAQClient />
    </>
  );
}