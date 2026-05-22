import { clinicSchema } from '@/lib/schemas'
import type { Metadata } from 'next'
import QuizClient from './QuizClient'

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: '산부인과 증상 자가진단 퀴즈 | 연세365산부인과',
  description: '생리불순, 임신, 통증, 검진 등 산부인과 증상을 3단계 자가진단으로 확인하고 전문의 가이드를 받아보세요.',
  url: 'https://www.yeonsei365.com/health-magazine/quiz',
  specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
  medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' },
  provider: {
    '@type': 'MedicalOrganization',
    name: '연세365산부인과',
    url: 'https://www.yeonsei365.com',
    telephone: '02-585-3650',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '과천대로 939 3층',
      addressLocality: '관악구',
      addressRegion: '서울',
      addressCountry: 'KR',
    },
  },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '산부인과 자가진단이란 무엇인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '생리불순, 임신, 통증, 검진 관련 증상을 3단계 질문으로 확인하고 전문의 기준의 가이드를 제공하는 서비스입니다. 의학적 진단을 대신하지 않으며 내원 여부 판단에 도움을 드립니다.' },
    },
    {
      '@type': 'Question',
      name: '생리가 3개월 이상 없으면 어떻게 해야 하나요?',
      acceptedAnswer: { '@type': 'Answer', text: '임신 가능성을 먼저 확인하고, 아니라면 조기 폐경, 시상하부-뇌하수체 이상, 극도의 체중 감소 등 다양한 원인을 검사해야 합니다. 사당역 연세365산부인과(02-585-3650)에 내원하여 정확한 진단을 받으세요.' },
    },
    {
      '@type': 'Question',
      name: '임신 테스트기 양성 후 언제 병원에 가야 하나요?',
      acceptedAnswer: { '@type': 'Answer', text: '임신 테스트기 양성 확인 후 가능한 한 빨리 초음파 검사를 받아야 합니다. 자궁외 임신은 생명을 위협할 수 있으므로 자궁 내 정상 착상 여부를 조기에 확인하는 것이 매우 중요합니다.' },
    },
    {
      '@type': 'Question',
      name: '심한 생리통이 자궁내막증 증상인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '심한 생리통은 자궁내막증, 자궁근종, 자궁선근증 등이 원인일 수 있습니다. 진통제로만 버티지 말고 산부인과 초음파 검사로 원인을 파악하는 것이 중요합니다.' },
    },
  ],
}

export const metadata: Metadata = {
  title: '산부인과 증상 자가진단 퀴즈 | 3단계 맞춤 진단 | 연세365산부인과',
  description: '생리불순·임신·통증·검진 등 산부인과 증상을 3단계 자가진단으로 확인하세요. 전문의 기준의 맞춤 가이드를 바로 확인할 수 있습니다. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '산부인과자가진단', '산부인과증상체크', '생리불순자가진단', '임신초기증상',
    '자궁근종증상', '산부인과퀴즈', '여성건강체크', '생리통원인',
    '임신테스트', '산부인과검진', '사당역산부인과', '연세365산부인과',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/health-magazine/quiz' },
  openGraph: {
    title: '산부인과 증상 자가진단 퀴즈 | 연세365산부인과',
    description: '3단계 자가진단으로 내 증상을 확인하고 전문의 맞춤 가이드를 받아보세요.',
    url: 'https://www.yeonsei365.com/health-magazine/quiz',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '연세365산부인과 산부인과 자가진단 퀴즈' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '산부인과 증상 자가진단 퀴즈 | 연세365산부인과',
    description: '3단계 자가진단으로 내 증상을 확인하고 전문의 맞춤 가이드를 받아보세요.',
  },
  verification: {
    other: {
      'msvalidate.01': 'BING_VERIFICATION_CODE',
    },
  },
}
const PAGE_URL = 'https://www.yeonsei365.com/health-magazine/quiz'
const PAGE_DATE = '2026-04-01'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'산부인과 증상 자가진단 퀴즈 | 3단계 맞춤 진단 | 연세365산부인과', datePublished:PAGE_DATE, dateModified:PAGE_DATE, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'건강매거진',item:'https://www.yeonsei365.com/health-magazine'}, {'@type':'ListItem',position:3,name:'자가진단 퀴즈',item:PAGE_URL} ] }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'산부인과 증상 자가진단 퀴즈 3단계 맞춤 진단 연세365산부인과', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '임신중절수술 진행 과정',
  description: '연세365산부인과 임신중절수술 단계별 안내',
  step: [
    { '@type': 'HowToStep', position: 1, name: '상담 예약', text: '전화(02-585-3650) 또는 카카오톡으로 상담 예약합니다.' },
    { '@type': 'HowToStep', position: 2, name: '초음파 검사', text: '내원 후 초음파로 임신 주수와 상태를 확인합니다.' },
    { '@type': 'HowToStep', position: 3, name: '수술 진행', text: '전문의 1:1 상담 후 당일 수술을 진행합니다.' },
    { '@type': 'HowToStep', position: 4, name: '회복 및 귀가', text: '수술 후 회복실에서 안정을 취한 뒤 당일 귀가합니다.' },
  ],
  tool: { '@type': 'HowToTool', name: '연세365산부인과' },
}

export default function QuizPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <QuizClient />
    </>
  )
}