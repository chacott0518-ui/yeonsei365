import type { Metadata } from 'next'
import Link from 'next/link'
import ViewCounter from '@/components/ViewCounter'

export const metadata: Metadata = {
  title: '여성건강·산부인과 진료정보 | 연세365산부인과의원',
  description: '여성건강과 산부인과 진료 관련 칼럼·안내를 모은 정보 페이지입니다. 주제별 글을 통해 필요한 내용을 확인할 수 있습니다.',
  keywords: [
    '여성건강', '산부인과', '여성검진클리닉', '난임클리닉', '소음순성형', '질레이저',
    '갱년기', '자궁근종', '피임상담', '미레나', '산부인과',
    '관악구산부인과', '사당역산부인과',
    '임신중절수술금액', '임신중절수술 금액', '낙태금액', '낙태 금액',
    '중절수술금액', '임신중절금액', '낙태비용금액',
    '낙태뜻', '낙태정의', '낙태란', '인공임신중절뜻',
    '낙태합법화', '낙태합법', '낙태법', '낙태합법시기',
    '낙태방법', '낙태시기', '낙태기간', '낙태병원', '낙태후기',
    '낙태수술', '낙태수술방법', '낙태수술회복기간',
    '낙태비용', '낙태가격', '낙태비용가격',
    '임신중절수술', '임신중절합법', '임신중절수술비용',
    '임신초기중절수술', '인공임신중절수술',
    '약물중절금액', '약물중절비용',
    '관악구낙태병원', '서울중절수술병원',
  ],
  openGraph: {
    title: '여성건강·산부인과 진료정보 | 연세365산부인과의원',
    description: '여성건강과 산부인과 진료 관련 칼럼·안내를 모은 정보 페이지입니다.',
    url: 'https://www.yeonsei365.com/blog',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.yeonsei365.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: '여성건강·산부인과 진료정보 | 연세365산부인과의원',
    description: '여성건강과 산부인과 진료 관련 칼럼·안내를 모은 정보 페이지입니다. 주제별 글을 통해 필요한 내용을 확인할 수 있습니다.',
  },
}
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '여성건강·산부인과 진료정보',
  description: '여성건강과 산부인과 진료 관련 칼럼·안내를 모은 정보 페이지입니다.',
  datePublished: '2026-05-22',
  dateModified: '2026-11-02',
  author: { '@type': 'Organization', name: '연세365산부인과의원', url: 'https://www.yeonsei365.com' },
  publisher: {
    '@type': 'MedicalOrganization',
    name: '연세365산부인과의원',
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
      name: '이 페이지에서는 어떤 정보를 볼 수 있나요?',
      acceptedAnswer: { '@type': 'Answer', text: '여성건강과 산부인과 진료와 관련된 주제별 칼럼·안내 글을 확인할 수 있습니다. 필요한 주제를 선택해 세부 내용을 읽어보시면 됩니다.' },
    },
    {
      '@type': 'Question',
      name: '임신중절수술 종합 안내는 어디서 보나요?',
      acceptedAnswer: { '@type': 'Answer', text: '임신중절수술의 정의·검사·절차 요약 등 종합 안내는 https://www.yeonsei365.com/abortion 에서 확인할 수 있습니다. 비용·방법·회복 등 세부 주제는 해당 안내 페이지를 참고하세요.' },
    },
    {
      '@type': 'Question',
      name: '글에 나온 금액이나 일정이 확정인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '글의 내용은 일반 건강정보이며 개인의 진단과 치료를 대신하지 않습니다. 정확한 비용·가능 여부와 일정은 검사와 의료진 상담을 통해 확인해야 합니다.' },
    },
    {
      '@type': 'Question',
      name: '상담은 어떻게 하나요?',
      acceptedAnswer: { '@type': 'Answer', text: '연세365산부인과의원(02-585-3650) 또는 카카오톡 상담으로 문의할 수 있습니다. 개인 상태에 맞는 안내는 진료 과정에서 받으실 수 있습니다.' },
    },
    {
      '@type': 'Question',
      name: '병원 위치는 어디인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '서울특별시 관악구 과천대로 939, 3층이며 사당역 4번 출구 인근입니다.' },
    },
  ],
}

const medicalWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: '여성건강·산부인과 진료정보',
  description: '여성건강과 산부인과 진료 관련 칼럼·안내를 모은 정보 페이지입니다.',
  url: 'https://www.yeonsei365.com/blog',
  specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
  medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' },
  about: { '@type': 'MedicalSpecialty', name: '산부인과' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '여성건강 정보 글 찾는 방법',
  description: '연세365산부인과의원 블로그에서 주제별 진료정보를 확인하는 방법',
  step: [
    { '@type': 'HowToStep', position: 1, name: '주제 확인', text: '필요한 진료·건강 주제를 정합니다.' },
    { '@type': 'HowToStep', position: 2, name: '글 선택', text: '목록에서 해당 주제의 글을 선택합니다.' },
    { '@type': 'HowToStep', position: 3, name: '세부 안내 확인', text: '글에서 설명하는 고유 질문과 주의사항을 확인합니다.' },
    { '@type': 'HowToStep', position: 4, name: '필요 시 상담', text: '개인 상태에 맞는 안내는 전화·카카오톡 또는 내원 상담으로 확인합니다.' },
  ],
  tool: { '@type': 'HowToTool', name: '연세365산부인과의원' },
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '여성건강·산부인과 진료정보',
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
    { '@type': 'ListItem', position: 2, name: '여성건강 진료정보', item: 'https://www.yeonsei365.com/blog' },
  ],
}

const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': 'https://www.yeonsei365.com/#organization',
  name: '연세365산부인과의원',
  url: 'https://www.yeonsei365.com',
  telephone: '02-585-3650',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '과천대로 939 3층',
    addressLocality: '관악구',
    addressRegion: '서울',
    addressCountry: 'KR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 37.4769, longitude: 126.9819 },
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
      title: '임신초기 주수 확인과 수술 방법 선택 포인트',
      desc: '초음파로 초기 주수를 확인하고 흡입술·소파술 등 방법을 결정할 때 확인할 내용을 안내합니다.',
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
      desc: '주수별 비용, 수술 과정, 주의사항까지 일반 건강정보 안내합니다.',
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
      title: '인공임신중절수술이란? 뜻·용어와 수술적 방법 안내',
      desc: '인공임신중절수술의 뜻·용어와 수술적 방법(흡입·소파)을 알기 쉽게 안내합니다. 금액·합법·시기는 각 안내 페이지에서 확인하세요.',
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
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'Pretendard, sans-serif' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#1A0A10', marginBottom: '8px' }}>여성건강·산부인과 진료정보</h1>
        <p className="speakable-summary" style={{ color: '#AA5566', marginBottom: '32px', fontSize: '15px', lineHeight: 1.7 }}>
          여성건강·산부인과 관련 칼럼과 주제별 안내를 모았습니다. 임신중절수술의 종합 안내는{' '}
          <Link href="/abortion" style={{ color: '#D6336C', fontWeight: 700, textDecoration: 'underline' }}>임신중절수술 전체 안내</Link>
          에서 확인하세요. · <ViewCounter slug="blog" />
        </p>
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
