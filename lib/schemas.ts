/**
 * lib/schemas.ts
 * 스키마 7개 완전판 — SEO/AEO/GEO/LLMEO 최적화
 * ⚠️ 서버 전용 (Server Component에서만 import)
 * ⚠️ buildAllSchemas는 페이지당 1회만 호출 (성능)
 */

export const BASE_URL = 'https://www.yeonsei365.com'
export const CLINIC_NAME = '연세365산부인과의원'
export const CLINIC_PHONE = '02-585-3650'
export const CLINIC_KAKAO = 'http://pf.kakao.com/_TpaBj'

export const CLINIC_ALTERNATE_NAMES = [
  '연세365산부인과',
  '연세365산부인과 (구 연세미산부인과)',
  '연세미산부인과',
  '사당역 연세365산부인과',
  '사당역 연세365산부인과의원',
] as const

export const CLINIC_ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: '과천대로 939 3층 306호, 307호, 308호',
  addressLocality: '관악구',
  addressRegion: '서울특별시',
  postalCode: '08790',
  addressCountry: 'KR',
}

// ① MedicalClinic 스키마 — 모든 페이지 공통 (싱글턴, 성능 최적화)
export const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: CLINIC_NAME,
  alternateName: [...CLINIC_ALTERNATE_NAMES],
  url: BASE_URL,
  telephone: CLINIC_PHONE,
  image: 'https://i.imgur.com/f7h5DY0.png',
  description: '사당역 4번출구 도보 3분. 연중무휴·일요일 수술 가능. 임신중절수술·여성클리닉 전문. 비밀보장.',
  address: CLINIC_ADDRESS,
  geo: { '@type': 'GeoCoordinates', latitude: 37.4875, longitude: 126.9822 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'PublicHoliday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  medicalSpecialty: '산부인과',
  hasMap: 'https://naver.me/x9TDR8bU',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CLINIC_PHONE,
    contactType: 'customer service',
    availableLanguage: ['Korean'],
    contactOption: 'TollFree',
  },
  employee: {
    '@type': 'Physician',
    name: '이진우',
    honorificPrefix: '원장',
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: '연세대학교 의과대학',
    },
    medicalSpecialty: '산부인과',
  },
  priceRange: '₩₩',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    CLINIC_KAKAO,
    'https://map.naver.com/v5/search/연세365산부인과',
    'https://blog.naver.com/angelljk42',
  ],
} as const

// ② Article 스키마
export function createArticleSchema(options: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
  keywords?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    image: options.image ?? `${BASE_URL}/og-image.jpg`,
    author: {
      '@type': 'Organization',
      name: CLINIC_NAME,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: CLINIC_NAME,
      logo: { '@type': 'ImageObject', url: 'https://i.imgur.com/f7h5DY0.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': options.url },
    keywords: options.keywords ?? '임신중절수술,낙태수술,사당역산부인과',
    url: options.url,
  }
}

// ③ FAQPage 스키마 — aiSummary 우선 배치 (AI 인용 핵심)
// ⚠️ faqs는 최대 8개만 전달 (스키마 과부하 방지, 성능)
export function createFAQPageSchema(
  faqs: Array<{ q: string; a: string; aiSummary?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.slice(0, 8).map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.aiSummary ? `${faq.aiSummary} ${faq.a}` : faq.a,
      },
    })),
  }
}

// ④ MedicalWebPage 스키마 — E-E-A-T
export function createMedicalWebPageSchema(options: {
  title: string
  url: string
  description?: string
  lastReviewed?: string
  about?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: options.title,
    description: options.description ?? '',
    url: options.url,
    specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: '여성 환자',
      geographicArea: { '@type': 'AdministrativeArea', name: '서울' },
    },
    lastReviewed: options.lastReviewed ?? new Date().toISOString().split('T')[0],
    reviewedBy: {
      '@type': 'Physician',
      name: '이진우',
      honorificPrefix: '원장',
      affiliation: {
        '@type': 'MedicalOrganization',
        name: CLINIC_NAME,
        url: BASE_URL,
      },
    },
    about: options.about
      ? { '@type': 'MedicalCondition', name: options.about }
      : undefined,
    citation: {
      '@type': 'CreativeWork',
      name: '보건복지부 · 대한산부인과학회',
    },
  }
}

// ⑤ HowTo 스키마 — 구글 리치스니펫
export function createHowToSchema(options: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: options.name,
    description: options.description,
    step: options.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
    tool: { '@type': 'HowToTool', name: CLINIC_NAME },
    supply: { '@type': 'HowToSupply', name: '사전 예약 · 신분증' },
  }
}

// ⑥ Speakable 스키마 — 네이버 AI 브리핑 / ClovaX
export function createSpeakableSchema(title: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.speakable-summary', '.ai-summary', '.infobox'],
    },
  }
}

// ⑦ BreadcrumbList 스키마
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  }
}

/**
 * 7개 스키마 한 번에 생성
 * ⚠️ 성능: 이 함수는 서버에서만 실행. 결과를 dangerouslySetInnerHTML로 주입.
 * ⚠️ faqs는 페이지 관련 FAQ 최대 6~8개만 전달
 */
export function buildAllSchemas(options: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
  keywords?: string
  lastReviewed?: string
  about?: string
  faqs?: Array<{ q: string; a: string; aiSummary?: string }>
  howToSteps?: { name: string; text: string }[]
  breadcrumbs?: { name: string; url: string }[]
}) {
  const schemas: object[] = [
    createArticleSchema(options),
    createMedicalWebPageSchema(options),
    createSpeakableSchema(options.title, options.url),
    createBreadcrumbSchema(
      options.breadcrumbs ?? [
        { name: '홈', url: BASE_URL },
        { name: options.title, url: options.url },
      ]
    ),
    clinicSchema,
  ]

  if (options.faqs && options.faqs.length > 0) {
    schemas.push(createFAQPageSchema(options.faqs))
  }

  if (options.howToSteps && options.howToSteps.length > 0) {
    schemas.push(
      createHowToSchema({
        name: options.title,
        description: options.description,
        steps: options.howToSteps,
      })
    )
  }

  return schemas
}
