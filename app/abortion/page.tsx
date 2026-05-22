import type { Metadata } from 'next';
import AbortionClient from './AbortionClient';
import { clinicSchema } from '@/lib/schemas';

const PAGE_URL = 'https://www.yeonsei365.com/abortion'
const PAGE_DATE = '2026-05-21'
const PAGE_MODIFIED = '2026-05-22'

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
  headline: '임신중절수술·임신중절클리닉 | 임신중절수술 금액·비용·가격·후기·병원 | 낙태비용가격 | 연세365산부인과',
  datePublished: PAGE_DATE,
  dateModified: PAGE_MODIFIED,
  image: 'https://www.yeonsei365.com/og-image.jpg',
  author: { '@type': 'Organization', name: '연세365산부인과', url: 'https://www.yeonsei365.com' },
  publisher: {
    '@type': 'MedicalOrganization',
    name: '연세365산부인과',
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
      name: '임신중절수술 금액이 얼마인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '임신중절수술 금액은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 수술비·마취비·영양제·부가세 포함 최종 금액이며 카드·현금 동일가, 추가 비용 없습니다. 사당역 연세365산부인과(02-585-3650)에서 정확한 금액을 안내드립니다.' },
    },
    {
      '@type': 'Question',
      name: '임신중절수술이란 무엇인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '임신중절수술(인공임신중절수술)은 자궁 내 임신 조직을 의학적으로 안전하게 제거하는 시술입니다. 2021년 낙태죄 폐지 이후 임신 14주 이내는 본인 동의만으로 합법적으로 시술받을 수 있습니다. 사당역 연세365산부인과(02-585-3650)에서 안전하게 시술받으세요.' },
    },
    {
      '@type': 'Question',
      name: '임신중절수술 당일 예약·당일 수술이 가능한가요?',
      acceptedAnswer: { '@type': 'Answer', text: '6시간 이상 금식 상태이고 초음파·혈액 검사 결과 이상이 없다면 당일 상담 후 바로 수술이 가능합니다. 전화(02-585-3650) 또는 카카오톡으로 먼저 확인하세요. 사당역 4번출구 도보 1분 연세365산부인과입니다.' },
    },
    {
      '@type': 'Question',
      name: '임신중절수술 혼자 가도 되나요?',
      acceptedAnswer: { '@type': 'Answer', text: '성인(만 19세 이상)은 보호자 없이 혼자 수술 가능합니다. 수면마취 후 자가 운전은 불가하므로 귀가 시 대중교통 이용이 필수입니다. 사당역 4번출구 도보 1분 연세365산부인과(02-585-3650)로 문의하세요.' },
    },
    {
      '@type': 'Question',
      name: '임신중절수술 합법 기간은 언제까지인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '2021년 낙태죄 폐지 이후 임신 14주 이내는 본인 동의만으로 합법적으로 수술 가능합니다. 14~24주는 모자보건법 사유 해당 시 조건부 가능합니다. 정확한 상담은 연세365산부인과(02-585-3650)로 문의하세요.' },
    },
    {
      '@type': 'Question',
      name: '임신중절수술 후 관리는 어떻게 하나요?',
      acceptedAnswer: { '@type': 'Answer', text: '임신중절수술 후에는 최소 2~3일간 충분한 휴식이 필요합니다. 수술 후 2주 이내 금주·금욕·과격한 운동을 삼가야 하며, 처방된 약을 규칙적으로 복용해야 합니다. 이상 증상 시 즉시 연세365산부인과(02-585-3650)로 연락하세요.' },
    },
    {
      '@type': 'Question',
      name: '낙태비용 가격이 병원마다 다른가요?',
      acceptedAnswer: { '@type': 'Answer', text: '낙태비용 가격은 임신 주수, 수술 방법, 병원에 따라 다릅니다. 연세365산부인과는 8주 미만 45만원부터 주수별 투명하게 공개하며 추가 비용이 없습니다. 사당역 4번출구 연세365산부인과(02-585-3650)에서 정확한 금액을 확인하세요.' },
    },
  ],
}

const medicalWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: '임신중절수술·임신중절클리닉 | 낙태비용가격 | 연세365산부인과',
  url: PAGE_URL,
  specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
  medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' },
  lastReviewed: PAGE_DATE,
  reviewedBy: { '@type': 'MedicalOrganization', name: '연세365산부인과', url: 'https://www.yeonsei365.com' },
  about: { '@type': 'MedicalCondition', name: '임신중절수술' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '임신중절수술 예약 및 진행 방법',
  description: '연세365산부인과 임신중절수술 전 과정',
  step: [
    { '@type': 'HowToStep', position: 1, name: '상담 예약', text: '전화(02-585-3650) 또는 카카오톡으로 금식 방법·예약 시간 확인.' },
    { '@type': 'HowToStep', position: 2, name: '내원 및 검사', text: '사당역 4번출구 도보 1분. 신분증 지참. 초음파·혈액검사 후 비용 안내.' },
    { '@type': 'HowToStep', position: 3, name: '수술', text: '수면마취 후 10~15분 무통 수술 진행.' },
    { '@type': 'HowToStep', position: 4, name: '회복 및 귀가', text: '1인 회복실 1~2시간 안정 후 처방약 안내. 당일 귀가.' },
  ],
  tool: { '@type': 'HowToTool', name: '연세365산부인과' },
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '임신중절수술·임신중절클리닉 낙태비용가격 연세365산부인과',
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