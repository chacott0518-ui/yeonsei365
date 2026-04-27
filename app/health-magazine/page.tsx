import type { Metadata } from 'next'
import HealthMagazineClient from './HealthMagazineClient'

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '생리가 불규칙한데 어떤 검사를 받아야 하나요?',
      acceptedAnswer: { '@type': 'Answer', text: '생리 불순은 호르몬 이상, 갑상선 질환, 다낭성 난소증후군 등 다양한 원인이 있습니다. 사당역 연세365산부인과에서 초음파 및 혈액 호르몬 검사를 통해 원인을 정확히 파악하고 맞춤 치료를 받으실 수 있습니다.' }
    },
    {
      '@type': 'Question',
      name: '임신 테스트기 두 줄인데 병원에 언제 가야 하나요?',
      acceptedAnswer: { '@type': 'Answer', text: '임신 테스트기 양성이 확인되면 최대한 빨리 내원하여 초음파로 자궁 내 정상 착상 여부를 확인해야 합니다. 자궁외 임신은 생명을 위협할 수 있어 조기 확인이 매우 중요합니다.' }
    },
    {
      '@type': 'Question',
      name: '산부인과 처음 방문이 두려운데 어떻게 준비해야 하나요?',
      acceptedAnswer: { '@type': 'Answer', text: '처음 방문 시 편한 복장을 입고 생리 주기, 증상 시작일 등을 메모해 오시면 좋습니다. 연세365산부인과는 비밀이 보장되는 1인 상담실을 운영하며 어떤 질문이든 편하게 하실 수 있습니다.' }
    },
  ],
}

export const metadata: Metadata = {
  title: '건강매거진 | 산부인과 자가진단·FAQ·건강칼럼 | 연세365산부인과',
  description: '산부인과 증상 자가진단 퀴즈, 임신중절수술 FAQ 70가지, 여성 건강 칼럼까지 한곳에서 확인하세요. 사당역 4번출구 연세365산부인과 건강매거진.',
  keywords: [
    '산부인과 자가진단', '여성 건강 매거진', '임신중절수술 FAQ',
    '산부인과 FAQ', '여성 건강 칼럼', '사당역 산부인과',
    '생리불순', '임신 초기 증상', '산부인과 처음 방문',
    '낙태 비용', '임신중절수술 금액', '연세365산부인과',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/health-magazine' },
  openGraph: {
    title: '건강매거진 | 산부인과 자가진단·FAQ·건강칼럼 | 연세365산부인과',
    description: '산부인과 증상 자가진단 퀴즈, 임신중절수술 FAQ 70가지, 여성 건강 칼럼. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/health-magazine',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '연세365산부인과 건강매거진' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '건강매거진 | 산부인과 자가진단·FAQ·건강칼럼 | 연세365산부인과',
    description: '산부인과 증상 자가진단 퀴즈, 임신중절수술 FAQ 70가지, 여성 건강 칼럼. 사당역 연세365산부인과.',
  },
}

export default function HealthMagazinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <HealthMagazineClient />
    </>
  )
}