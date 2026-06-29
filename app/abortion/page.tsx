import type { Metadata } from 'next';
import AbortionClient from './AbortionClient';
import { clinicSchema } from '@/lib/schemas';

const PAGE_URL = 'https://www.yeonsei365.com/abortion'
const PAGE_DATE = '2026-05-21'
const PAGE_MODIFIED = '2026-06-29'

export const metadata: Metadata = {
  title: '임신중절수술·임신중절클리닉 | 임신중절수술 금액·비용·가격·후기·병원·방법·합법·혼자·당일 | 낙태비용가격·낙태수술·낙태합법화·낙태금액·낙태가격 | 임신초기중절수술·약물중절·인공임신중절 | 연세365산부인과',
  description:
    '임신중절수술·임신중절클리닉 전문. 임신중절수술 금액·비용·가격 주수별 투명 공개(8주 미만 45만원~). 임신중절수술 후기·병원·방법·합법 안내. 낙태비용가격·낙태수술·낙태합법화·낙태금액 총정리. 임신초기중절수술·약물중절·인공임신중절 안내. 당일 예약·수술 가능. 비밀보장. 사당역 4번출구 연세365산부인과 02-585-3650.',
  keywords: [
    '임신중절수술', '임신중절수술이란', '임신중절클리닉', '임신중절수술금액',
    '임신중절수술 금액', '임신중절수술비용', '임신중절수술가격', '임신중절수술후기',
    '임신중절수술병원', '임신중절수술방법', '임신중절수술절차', '임신중절수술합법',
    '임신중절수술합법기간', '임신중절수술혼자', '임신중절수술당일', '임신중절수술비밀',
    '임신중절수술회복', '임신중절수술부작용', '임신중절수술후관리', '임신중절수술후생리',
    '임신중절수술기간', '임신중절수술뜻', '임신중절흡입술',
    '임신중절금액', '임신중절비용', '임신중절가격', '임신중절병원', '임신중절후기',
    '임신중절합법',
    '중절수술금액', '중절수술비용', '중절수술가격', '중절수술병원', '중절수술후기',
    '중절수술합법', '중절수술뜻', '중절수술후관리', '중절수술후생리', '중절수술보험',
    '중절수술보호자', '중절수술후음식', '중절수술후음주', '중절수술후임신',
    '중절수술후출혈', '중절수술후통증', '중절수술병원금액', '중절수술병원비용',
    '중절수술병원가격', '중절수술병원예약', '중절수술병원찾기', '중절수술병원후기',
    '낙태비용', '낙태비용가격', '낙태금액', '낙태 금액', '낙태가격', '낙태수술비용',
    '낙태수술금액', '낙태수술가격', '낙태수술병원', '낙태수술후기', '낙태수술방법',
    '낙태수술합법', '낙태수술합법시기', '낙태수술회복기간', '낙태수술후출혈',
    '낙태수술통증', '낙태수술후음식', '낙태수술후회복',
    '낙태합법화', '낙태합법', '낙태법', '낙태합법시기', '낙태합법화시기',
    '낙태방법', '낙태시기', '낙태기간', '낙태병원', '낙태후기', '낙태후유증',
    '낙태뜻', '낙태정의', '낙태란', '낙태의뜻', '낙태비용얼마', '낙태비용금액',
    '낙태비용계산', '낙태비용병원', '낙태비용시기', '낙태비용후기', '낙태비용보험',
    '낙태수술', '모자보건법낙태',
    '임신초기중절수술', '임신초기중절수술비용', '임신초기중절수술금액',
    '임신초기중절수술가격', '임신초기중절수술병원', '임신초기중절수술약물',
    '임신초기중절수술부작용', '임신초기중절수술후', '임신초기중절수술후관리',
    '임신초기중절수술후기',
    '임신초기낙태', '임신초기낙태수술', '임신초기낙태시기', '임신초기낙태비용',
    '임신초기낙태금액', '임신초기낙태가격', '임신초기낙태후유증', '임신초기낙태부작용',
    '임신초기낙태보호자', '임신초기낙태불법', '임신초기낙태병원', '임신초기낙태후기',
    '임신초기낙태후임신',
    '인공임신중절수술', '인공임신중절비용', '인공임신중절금액', '인공임신중절가격',
    '인공임신중절수술비용', '인공임신중절수술금액', '인공임신중절뜻',
    '약물중절금액', '약물중절비용', '약물중절후기', '약물중절가격',
    '약물중절방법', '약물중절MTX',
    '흡입식소파술비용', '흡입식소파술금액',
    '사당역산부인과', '사당역임신중절', '사당역낙태', '관악구산부인과',
    '관악구낙태병원', '서울중절수술병원', '서울임신중절수술', '연세365산부인과',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: '임신중절수술·임신중절클리닉 | 임신중절수술 금액·비용·가격·후기·병원·방법·합법·혼자·당일 | 낙태비용가격·낙태수술·낙태합법화·낙태금액·낙태가격 | 연세365산부인과',
    description: '임신중절수술·임신중절클리닉 전문. 임신중절수술 금액·비용·가격 주수별 투명 공개(8주 미만 45만원~). 임신중절수술 후기·병원·방법·합법 안내. 낙태비용가격·낙태금액 총정리. 당일 예약·수술 가능. 사당역 연세365산부인과 02-585-3650.',
    url: PAGE_URL,
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 임신중절클리닉 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술·임신중절클리닉 | 임신중절수술 금액·비용·가격·후기·병원·방법·합법·혼자·당일 | 낙태비용가격·낙태수술·낙태합법화·낙태금액·낙태가격 | 연세365산부인과',
    description: '임신중절수술·임신중절클리닉 전문. 임신중절수술 금액·비용·가격 주수별 투명 공개(8주 미만 45만원~). 임신중절수술 후기·병원·방법·합법 안내. 낙태비용가격·낙태금액 총정리. 당일 예약·수술 가능. 사당역 연세365산부인과 02-585-3650.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '임신중절수술·임신중절클리닉 | 임신중절수술 금액·비용·가격·후기·병원 | 낙태비용가격 | 연세365산부인과의원',
  datePublished: PAGE_DATE,
  dateModified: PAGE_MODIFIED,
  image: 'https://www.yeonsei365.com/og-image.jpg',
  author: { '@type': 'Organization', '@id': 'https://www.yeonsei365.com/#organization', name: '연세365산부인과의원', url: 'https://www.yeonsei365.com' },
  publisher: {
    '@type': 'MedicalOrganization',
    '@id': 'https://www.yeonsei365.com/#organization',
    name: '연세365산부인과의원',
    logo: { '@type': 'ImageObject', url: 'https://i.imgur.com/f7h5DY0.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  url: PAGE_URL,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '임신중절수술 비용은 얼마인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '연세365산부인과의원은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원으로 안내합니다. 정확한 비용은 초음파로 임신 주수를 확인한 뒤 결정됩니다.' },
    },
    {
      '@type': 'Question',
      name: '상담한 날 바로 수술할 수 있나요?',
      acceptedAnswer: { '@type': 'Answer', text: '당일 진행 가능 여부는 금식 상태, 초음파와 필요한 검사 결과, 예약 상황 및 의료진 판단에 따라 달라질 수 있으므로 방문 전에 확인이 필요합니다.' },
    },
    {
      '@type': 'Question',
      name: '수술 방법은 어떻게 결정하나요?',
      acceptedAnswer: { '@type': 'Answer', text: '임신 주수와 초음파 검사 결과, 자궁 상태, 과거 병력과 현재 건강 상태를 확인한 뒤 의료진이 적절한 방법을 안내합니다.' },
    },
    {
      '@type': 'Question',
      name: '약물중절도 시행하나요?',
      acceptedAnswer: { '@type': 'Answer', text: '연세365산부인과의원은 약물중절을 시행하지 않으며 수술적 방법에 대해서만 상담합니다.' },
    },
    {
      '@type': 'Question',
      name: '수술 전에는 무엇을 준비해야 하나요?',
      acceptedAnswer: { '@type': 'Answer', text: '금식 시간과 필요한 준비사항은 예약 시간과 개인 상태에 따라 달라질 수 있으므로 상담 시 안내받은 내용을 따라야 합니다.' },
    },
    {
      '@type': 'Question',
      name: '수술 후 회복 기간은 얼마나 걸리나요?',
      acceptedAnswer: { '@type': 'Answer', text: '출혈과 통증, 일상 복귀 시점은 개인마다 다를 수 있습니다. 처방과 주의사항을 따르고 고열, 심한 복통, 과다출혈 등 이상 증상이 있으면 의료기관에 문의해야 합니다.' },
    },
  ],
}

const medicalWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: '임신중절수술·임신중절클리닉 | 낙태비용가격 | 연세365산부인과의원',
  url: PAGE_URL,
  specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
  medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' },
  lastReviewed: PAGE_MODIFIED,
  provider: { '@id': 'https://www.yeonsei365.com/#organization' },
  about: { '@type': 'MedicalCondition', name: '임신중절수술' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '임신중절수술 예약 및 진행 방법',
  description: '연세365산부인과의원 임신중절수술 당일 절차',
  step: [
    { '@type': 'HowToStep', position: 1, name: '내원·접수', text: '신분증을 지참하여 내원하고 동의서를 작성합니다.' },
    { '@type': 'HowToStep', position: 2, name: '초음파·혈액검사', text: '초음파로 임신 주수와 자궁 내 임신 위치를 확인하고 혈액 검사를 시행합니다.' },
    { '@type': 'HowToStep', position: 3, name: '전문의 상담', text: '검사 결과와 건강 상태를 바탕으로 수술 방법과 비용을 안내받습니다.' },
    { '@type': 'HowToStep', position: 4, name: '수면마취·수술', text: '수면마취 후 수술적 방법으로 수술을 진행합니다.' },
    { '@type': 'HowToStep', position: 5, name: '회복실·귀가', text: '1인 회복실에서 안정을 취한 후 처방약 안내와 함께 당일 귀가합니다.' },
  ],
  tool: { '@type': 'HowToTool', name: '연세365산부인과의원' },
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '임신중절수술·임신중절클리닉 낙태비용가격 연세365산부인과의원',
  url: PAGE_URL,
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.speakable-summary'] },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.yeonsei365.com' },
    { '@type': 'ListItem', position: 2, name: '임신중절클리닉', item: PAGE_URL },
  ],
}

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
  )
}