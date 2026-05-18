import type { Metadata } from 'next';
import CostClient from './CostClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 금액·비용·가격 | 낙태 비용 가격 주수별 안내 | 연세365산부인과',
  description:
    '임신중절수술 금액·비용·가격이 궁금하신가요? 낙태 비용 가격, 중절수술 금액·비용을 주수별로 투명하게 공개합니다. 8주 미만 45만원~. 임신초기낙태 비용까지 한눈에 확인하세요. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '임신중절수술금액', '임신중절수술비용', '임신중절수술가격',
    '임신중절금액', '임신중절비용', '임신중절가격',
    '중절수술금액', '중절수술비용', '중절수술가격',
    '낙태비용', '낙태비용가격', '낙태금액', '낙태가격',
    '임신초기낙태비용', '약물중절비용', '8주낙태비용',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/cost' },
  openGraph: {
    title: '임신중절수술 금액·비용·가격 | 낙태 비용 가격 주수별 안내 | 연세365산부인과',
    description: '임신중절수술 금액·비용·가격 주수별 투명 공개. 낙태 비용 가격 8주 미만 45만원~. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/cost',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 금액 비용 가격 주수별 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 금액·비용·가격 | 낙태 비용 가격 주수별 안내 | 연세365산부인과',
    description:
      '임신중절수술 금액·비용·가격이 궁금하신가요? 낙태 비용 가격, 중절수술 금액·비용을 주수별로 투명하게 공개합니다. 8주 미만 45만원~. 임신초기낙태 비용까지 한눈에 확인하세요. 사당역 4번출구 연세365산부인과.',
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
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 금액·비용·가격 주수별 안내 | 연세365산부인과', datePublished:PAGE_DATE, dateModified:PAGE_DATE, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 금액이 얼마인가요?',acceptedAnswer:{'@type':'Answer',text:'8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 수술비·마취비·영양제·부가세 포함이며 카드·현금 동일가입니다.'}}, {'@type':'Question',name:'임신중절수술 비용에 추가 금액이 있나요?',acceptedAnswer:{'@type':'Answer',text:'자궁유착방지제(+5만원)가 선택 사항으로 있으며, 11주 이상은 별도 상담 후 안내드립니다. 상담 후 추가 비용은 없습니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 금액·비용·가격 주수별 안내', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:PAGE_DATE, reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, about:{'@type':'MedicalCondition',name:'임신중절수술 비용'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 금액·비용·가격 주수별 안내', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <CostClient />
    </>
  );
}