import type { Metadata } from 'next';
import AbortionClient from './AbortionClient';
import { clinicSchema } from '@/lib/schemas';

const PAGE_URL = 'https://www.yeonsei365.com/abortion'
const PAGE_DATE = '2026-05-21'
const PAGE_MODIFIED = '2026-11-04'
const PAGE_DESCRIPTION =
  '임신중절수술의 금액·절차·시기·병원·합법 안내를 한곳에서 확인하세요. 임신 주수와 건강 상태에 따라 검사·방법·회복 과정이 달라질 수 있어 진료를 통해 안내합니다.'

export const metadata: Metadata = {
  title: '임신중절수술 | 금액·절차·시기·병원·합법 안내 | 연세365산부인과의원',
  description:
    PAGE_DESCRIPTION,
  keywords: [
    '임신중절수술', '임신 중절 수술', '임신 중절수술', '임신중절 수술', '임신중절수술이란', '임신중절수술 안내',
    '인공임신중절수술', '임신초기중절수술', '임신중절클리닉', '중절수술', '낙태수술',
    '임신중절수술 금액', '임신중절수술 절차', '임신중절수술 시기', '임신중절수술 병원', '임신중절수술 합법', '임신중절수술 회복',
    '사당역 임신중절수술', '서울 임신중절수술', '연세365산부인과',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: '임신중절수술 | 금액·절차·시기·병원·합법 안내 | 연세365산부인과의원',
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: 'https://www.yeonsei365.com/images/hero-abortion-main.webp', width: 1920, height: 1080, alt: '임신중절수술 상담 안내 연세365산부인과의원' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 | 금액·절차·시기·병원·합법 안내 | 연세365산부인과의원',
    description: PAGE_DESCRIPTION,
    images: ['https://www.yeonsei365.com/images/hero-abortion-main.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '임신중절수술',
  description: PAGE_DESCRIPTION,
  datePublished: PAGE_DATE,
  dateModified: PAGE_MODIFIED,
  image: [
    {
      '@type': 'ImageObject',
      contentUrl: 'https://www.yeonsei365.com/images/hero-abortion-main.webp',
      url: 'https://www.yeonsei365.com/images/hero-abortion-main.webp',
      width: 1920,
      height: 1080,
      caption: '임신중절수술 상담 안내 연세365산부인과의원',
      name: '임신중절수술 상담 안내 연세365산부인과의원',
    },
    {
      '@type': 'ImageObject',
      contentUrl: 'https://www.yeonsei365.com/images/hero-abortion-surgery.webp',
      url: 'https://www.yeonsei365.com/images/hero-abortion-surgery.webp',
      width: 1920,
      height: 1080,
      caption: '수술 전 검사와 상담을 준비하는 진료 공간',
      name: '수술 전 검사와 상담을 준비하는 진료 공간',
    },
    {
      '@type': 'ImageObject',
      contentUrl: 'https://www.yeonsei365.com/images/hero-abortion-recovery.webp',
      url: 'https://www.yeonsei365.com/images/hero-abortion-recovery.webp',
      width: 1920,
      height: 1080,
      caption: '수술 후 안정을 위한 1인 회복 공간',
      name: '수술 후 안정을 위한 1인 회복 공간',
    },
    {
      '@type': 'ImageObject',
      contentUrl: 'https://www.yeonsei365.com/images/hero-abortion-hospital.webp',
      url: 'https://www.yeonsei365.com/images/hero-abortion-hospital.webp',
      width: 1920,
      height: 1080,
      caption: '사당역 연세365산부인과의원 내원 안내',
      name: '사당역 연세365산부인과의원 내원 안내',
    },
  ],
  author: { '@type': 'MedicalOrganization', '@id': 'https://www.yeonsei365.com/#organization', name: '연세365산부인과의원', url: 'https://www.yeonsei365.com' },
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
      acceptedAnswer: {
        '@type': 'Answer',
        text: '연세365산부인과의원은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원을 기준으로 안내합니다. 정확한 비용은 초음파로 임신 주수를 확인한 뒤 결정되며, 검사나 추가 처치가 필요한 경우 최종 비용은 진료 후 달라질 수 있습니다. 비용과 포함 항목에 대해 방문 전에 전화나 카카오톡으로 문의하시면 안내해 드립니다.',
      },
    },
    {
      '@type': 'Question',
      name: '상담한 날 바로 수술할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '당일 수술 진행 여부는 금식 상태, 초음파와 필요한 검사 결과, 예약 상황과 의료진 판단에 따라 달라집니다. 방문 당일 충분한 금식이 완료되어 있고 검사 결과에 이상이 없으면 당일 진행이 가능한 경우가 있습니다. 원활한 진행을 위해 방문 전에 예약 상황과 금식 방법을 미리 확인하시기 바랍니다. 당일 수술이 어려운 경우에는 다음 일정을 함께 안내해 드립니다.',
      },
    },
    {
      '@type': 'Question',
      name: '수술 방법은 어떻게 결정하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '수술 방법은 임신 주수, 초음파 검사 결과, 자궁 상태, 과거 병력과 현재 건강 상태를 종합하여 의료진이 안내합니다. 연세365산부인과의원에서는 주로 흡입술과 소파술을 시행하며, 개인 상태에 따라 적합한 방법이 다를 수 있습니다. 방법에 대한 자세한 안내는 초음파 확인과 상담 이후에 이루어집니다.',
      },
    },
    {
      '@type': 'Question',
      name: '약물중절도 시행하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '연세365산부인과의원은 약물중절을 시행하지 않으며 수술적 방법에 대해서만 상담합니다. 수술적 방법은 임신 주수와 상태를 확인한 뒤 흡입술 또는 소파술로 진행하며, 약물 복용으로 인한 불완전 유산이나 후유증 위험을 피하기 위해 이 원칙을 유지합니다. 수술 방법에 대해 궁금한 점은 방문 전 전화나 카카오톡으로 문의하실 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '수술 전에는 무엇을 준비해야 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '수술 전 준비사항은 예약 상황과 개인 상태에 따라 다를 수 있으므로 상담 시 안내받은 내용을 따르는 것이 중요합니다. 수면마취를 위한 금식이 필요하며, 금식 시간은 예약 시 안내받으시기 바랍니다. 신분증 지참과 동의서 작성이 필요하고, 수면마취 후 자가 운전은 어려우므로 귀가 방법을 미리 준비해 두시기 바랍니다. 복용 중인 약이나 기저질환이 있다면 방문 전에 반드시 알려주세요.',
      },
    },
    {
      '@type': 'Question',
      name: '수술 후 회복 기간은 얼마나 걸리나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '수술 후 출혈과 통증의 정도, 일상 복귀 시점은 개인의 건강 상태와 임신 주수에 따라 다를 수 있습니다. 가벼운 사무 업무는 2~3일 이후부터 가능한 경우가 많지만, 신체 상태에 따라 차이가 있습니다. 처방약과 주의사항을 따르고, 38도 이상 고열, 심한 복통, 과다출혈 등 이상 증상이 있으면 즉시 내원하거나 의료기관에 문의해야 합니다. 수술 후 1주일 이내 사후 검진을 권장합니다.',
      },
    },
  ],
}

const medicalWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: '임신중절수술',
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  image: [
    'https://www.yeonsei365.com/images/hero-abortion-main.webp',
    'https://www.yeonsei365.com/images/hero-abortion-surgery.webp',
    'https://www.yeonsei365.com/images/hero-abortion-recovery.webp',
    'https://www.yeonsei365.com/images/hero-abortion-hospital.webp',
  ],
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
    { '@type': 'HowToStep', position: 5, name: '회복실·귀가', text: '1인 회복실에서 안정을 확인한 뒤 처방약과 주의사항을 안내받고 귀가합니다. 당일 가능 여부는 검사·상태에 따라 달라질 수 있습니다.' },
  ],
  tool: { '@type': 'HowToTool', name: '연세365산부인과의원' },
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '임신중절수술 핵심 안내',
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-summary'] },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.yeonsei365.com' },
    { '@type': 'ListItem', position: 2, name: '임신중절수술', item: PAGE_URL },
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