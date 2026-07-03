import type { Metadata } from 'next'
import Link from 'next/link'
import ViewCounter from '@/components/ViewCounter'

export const metadata: Metadata = {
  title: '임신중절수술 정보·후기 | 합법화·방법·비용 총정리 | 연세365산부인과',
  description: '임신중절수술 합법 조건·방법·비용·후기를 전문의가 직접 안내합니다. 흡입술·소파술 방법 비교, 주수별 금액, 수술 후 관리까지. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '임신중절수술금액', '임신중절수술 금액', '낙태금액', '낙태 금액',
    '중절수술금액', '임신중절금액', '낙태비용금액', '임신중절수술금액얼마',
    '낙태뜻', '낙태정의', '낙태란', '인공임신중절뜻', '낙태의뜻',
    '낙태합법화', '낙태합법', '낙태법', '낙태합법시기', '낙태수술합법',
    '낙태수술합법시기', '낙태합법화시기', '모자보건법낙태',
    '낙태방법', '낙태시기', '낙태기간', '낙태병원', '낙태후기',
    '낙태수술', '낙태수술방법', '낙태수술회복기간', '낙태후유증',
    '낙태수술후기', '낙태수술후출혈', '낙태수술통증',
    '낙태수술후음식', '낙태수술후회복', '낙태비용', '낙태가격',
    '낙태비용가격', '낙태수술가격', '낙태비용얼마',
    '임신중절수술', '임신중절합법', '임신중절수술합법', '임신중절수술합법기간',
    '임신중절수술뜻', '임신중절수술후기', '임신중절수술후관리',
    '임신중절수술후생리', '임신중절수술기간', '임신중절흡입술',
    '임신중절수술비용', '임신중절수술가격', '임신중절수술병원',
    '임신중절비용', '임신중절가격', '임신중절수술금액',
    '임신초기중절수술', '임신초기중절수술후', '임신초기중절수술후관리',
    '임신초기중절수술후기', '임신초기중절수술부작용',
    '임신초기중절수술비용', '임신초기중절수술금액', '임신초기중절수술가격',
    '임신초기낙태', '임신초기낙태수술', '임신초기낙태시기',
    '임신초기낙태비용', '임신초기낙태금액', '임신초기낙태가격',
    '임신초기낙태후유증', '임신초기낙태부작용', '임신초기낙태보호자',
    '중절수술합법', '중절수술뜻', '중절수술후관리', '중절수술후기',
    '중절수술후생리', '중절수술보험', '중절수술보호자',
    '중절수술후음식', '중절수술후출혈', '중절수술후통증',
    '중절수술비용', '중절수술금액', '중절수술가격', '중절수술병원',
    '약물중절금액', '약물중절비용', '약물중절후기', '약물중절가격',
    '약물중절방법', '약물중절MTX',
    '인공임신중절수술', '인공임신중절비용', '인공임신중절금액',
    '인공임신중절가격', '인공임신중절수술비용', '인공임신중절수술금액',
    '관악구낙태병원', '사당역산부인과', '서울중절수술병원',
    '중절수술병원금액', '중절수술병원비용', '중절수술병원가격',
    '흡입식소파술비용', '흡입식소파술금액',
    '여성검진클리닉', '난임클리닉', '소음순성형', '질레이저',
    '갱년기', '자궁근종', '피임상담', '미레나', '산부인과',
    '관악구산부인과', '낙태수술후임신', '중절수술후임신',
    '임신중절수술후임신', '낙태수술보호자', '낙태비용보험',
  ],
  openGraph: {
    title: '임신중절수술 정보·후기 | 합법화·방법·비용 총정리 | 연세365산부인과',
    description: '임신중절수술 합법 조건·방법·비용·후기를 전문의가 직접 안내합니다. 사당역 4번출구 연세365산부인과.',
    url: 'https://www.yeonsei365.com/blog',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.yeonsei365.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 정보·후기 | 합법화·방법·비용 총정리 | 연세365산부인과',
    description: '임신중절수술 합법 조건·방법·비용·후기를 전문의가 직접 안내합니다. 흡입술·소파술 비교, 주수별 금액, 수술 후 관리까지. 사당역 4번출구 연세365산부인과.',
  },
}
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '임신중절수술 정보 | 연세365산부인과',
  description: '임신중절수술 비용, 과정, 후기 등 정확한 정보를 제공합니다.',
  datePublished: '2026-05-22',
  dateModified: '2026-05-22',
  author: { '@type': 'Organization', name: '연세365산부인과', url: 'https://www.yeonsei365.com' },
  publisher: {
    '@type': 'MedicalOrganization',
    name: '연세365산부인과',
    logo: { '@type': 'ImageObject', url: 'https://i.imgur.com/f7h5DY0.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.yeonsei365.com/blog' },
  url: 'https://www.yeonsei365.com/blog',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '임신중절수술 비용이 얼마인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '임신중절수술 비용은 임신 주수에 따라 다르며 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 연세365산부인과(02-585-3650)에서 정확한 비용을 안내드립니다.' },
    },
    {
      '@type': 'Question',
      name: '임신중절수술 당일 수술이 가능한가요?',
      acceptedAnswer: { '@type': 'Answer', text: '네, 연세365산부인과는 당일 검사·상담·수술이 가능한 원스톱 시스템을 운영하고 있습니다. 사당역 4번출구 도보 3분 거리입니다.' },
    },
    {
      '@type': 'Question',
      name: '임신중절수술 후 회복 기간은 얼마나 걸리나요?',
      acceptedAnswer: { '@type': 'Answer', text: '대부분 당일 귀가가 가능하며 다음 날부터 가벼운 일상생활이 가능합니다. 수술 후 1~2주 소량의 출혈이 있을 수 있습니다.' },
    },
    {
      '@type': 'Question',
      name: '임신중절수술 비밀보장이 되나요?',
      acceptedAnswer: { '@type': 'Answer', text: '네, 연세365산부인과는 모든 상담과 진료 기록을 철저히 비밀보장하며 1:1 독립 상담실에서 진행합니다.' },
    },
    {
      '@type': 'Question',
      name: '임신중절수술 가능한 임신 주수는 어디까지인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '초음파 확인 후 임신 주수에 따라 수술 방법이 결정됩니다. 정확한 가능 주수는 연세365산부인과(02-585-3650)에 문의해 주세요.' },
    },
  ],
}

const medicalWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: '임신중절수술 정보 | 연세365산부인과',
  description: '임신중절수술 비용, 과정, 후기 등 정확한 정보를 제공합니다.',
  url: 'https://www.yeonsei365.com/blog',
  specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
  medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' },
  lastReviewed: '2026-05-22',
  reviewedBy: { '@type': 'MedicalOrganization', name: '연세365산부인과', url: 'https://www.yeonsei365.com' },
  about: { '@type': 'MedicalCondition', name: '임신중절수술' },
}

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

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '임신중절수술 정보 | 연세365산부인과',
  url: 'https://www.yeonsei365.com/blog',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.speakable-summary'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.yeonsei365.com' },
    { '@type': 'ListItem', position: 2, name: '임신중절수술정보', item: 'https://www.yeonsei365.com/blog' },
  ],
}

const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
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
  geo: { '@type': 'GeoCoordinates', latitude: 37.4875, longitude: 126.9822 },
  openingHours: ['Mo-Fr 10:00-17:30', 'Sa 09:00-16:30', 'Su,PH 10:00-14:00'],
  medicalSpecialty: '산부인과',
  sameAs: [
    'http://pf.kakao.com/_TpaBj',
    'https://map.naver.com/v5/search/연세365산부인과',
  ],
}

export default function BlogPage() {
  const posts = [
    {
      slug: 'abortion-surgery',
      tag: '수술정보',
      title: '임신초기중절수술 가능 기간·방법·금액·비용·후기',
      desc: '임신초기중절수술 가능 기간, 흡입술·소파술 방법 비교, 주수별 금액·비용, 합법 기준까지 투명하게 안내합니다. 8주 미만 45만원.',
      date: '2026.04.06',
    },
    {
      slug: 'abortion-amount',
      tag: '금액안내',
      title: '임신중절수술 금액과 낙태의 정의와 뜻 비용 가격 안내 2026',
      desc: '임신중절수술 금액 8주 미만 45만원부터 주수별 정리. 낙태 정의·뜻·합법조건까지 전문의 직접 안내.',
      date: '2026.04.01',
    },
    {
      slug: 'abortion-cost',
      tag: '비용안내',
      title: '임신중절수술 비용 정리 2026',
      desc: '주수별 비용, 수술 과정, 주의사항까지 전문의가 직접 안내합니다.',
      date: '2026.03.16',
    },
    {
      slug: 'abortion-price',
      tag: '비용안내',
      title: '낙태 비용 가격 총정리 2026',
      desc: '주수별 낙태 비용 가격 공개, 합법적 조건, 포함 항목까지 정리.',
      date: '2026.03.16',
    },
    {
      slug: 'abortion-legal',
      tag: '합법화안내',
      title: '낙태수술 합법화 뜻 시기와 비용 | 임신초기중절수술 병원',
      desc: '낙태수술 합법화 뜻과 시기, 합법적 조건 4가지, 임신초기중절수술 비용까지 정리.',
      date: '2026.03.17',
    },
    {
      slug: 'abortion-info',
      tag: '수술정보',
      title: '인공임신중절수술 비용·시기·가격 안내 2026',
      desc: '인공임신중절수술 비용, 합법적 시기, 주수별 가격까지 전문의가 직접 안내합니다.',
      date: '2026.03.30',
    },
  ]

  const tagColors: Record<string, { bg: string; color: string }> = {
    '금액안내': { bg: '#FCE4EC', color: '#C2185B' },
    '비용안내': { bg: '#FFF0F4', color: '#E8305A' },
    '합법화안내': { bg: '#E8F5E9', color: '#2E7D32' },
    '수술정보': { bg: '#FFF3E0', color: '#E65100' },
  }

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #FFE0E8', padding: '14px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" aria-label="홈으로" style={{ textDecoration: 'none' }}>
          <img src="https://i.imgur.com/f7h5DY0.png" alt="연세365 로고" style={{ height: '36px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a href="/blog" style={{ fontSize: '13px', color: '#994466', textDecoration: 'none', fontWeight: 600 }}>임신중절수술정보</a>
          <a href="/" style={{ fontSize: '13px', color: '#666', textDecoration: 'none' }}>홈으로</a>
          <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
            style={{ background: '#FEE500', color: '#3B1B1B', padding: '8px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>
            💬 카톡상담
          </a>
        </div>
      </header>
      <div style={{ height: '64px' }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'Pretendard, sans-serif' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#1A0A10', marginBottom: '8px' }}>임신중절수술정보</h1>
        <p style={{ color: '#AA5566', marginBottom: '32px', fontSize: '15px' }}>임신중절수술 비용·합법적 조건 전문의 직접 안내 · <ViewCounter slug="blog" /></p>
        {posts.map(({ slug, title, desc, date, tag }) => {
          const tagStyle = tagColors[tag] ?? { bg: '#FFF0F4', color: '#E8305A' }
          return (
            <Link key={slug} href={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ border: '1px solid #FFE0E8', borderRadius: '16px', padding: '24px', marginBottom: '16px', background: '#FFFAFB', cursor: 'pointer' }}>
                <span style={{ background: tagStyle.bg, color: tagStyle.color, fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '20px' }}>
                  {tag}
                </span>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1A0A10', margin: '12px 0 8px' }}>{title}</h2>
                <p style={{ fontSize: '14px', color: '#554455', margin: '0 0 12px' }}>{desc}</p>
                <span style={{ fontSize: '12px', color: '#999' }}>{date}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}