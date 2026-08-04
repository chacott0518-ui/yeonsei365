export type SearchPost = {
  title: string
  slug: string
  description: string
  date: string
  keywords?: string[]
  priority?: number
}

export const posts: SearchPost[] = [
  {
    title: '임신중절수술',
    slug: '/abortion',
    description: '임신중절수술의 뜻, 가능한 시기, 방법, 비용, 병원 선택과 회복 정보를 종합적으로 확인합니다.',
    date: '2026-08-04',
    keywords: [
      '임신중절수술',
      '낙태수술',
      '중절수술',
      '임신중절',
      '인공임신중절수술',
      '임신초기중절수술',
      'abortion',
    ],
    priority: 100,
  },
  // abortion 서비스 페이지
  {
    title: '임신중절수술 안내',
    slug: '/abortion/surgery',
    description: '임신중절수술 전문 안내. 사당역 연세365산부인과의원.',
    date: '2024-04-08',
    keywords: [
      '임신초기중절수술',
      '임신 초기 중절수술',
      '초기중절수술',
      '임신초기 수술',
      '임신초기중절',
    ],
    priority: 95,
  },
  {
    title: '임신중절수술 비용 안내',
    slug: '/abortion/cost',
    description: '임신중절수술 비용 상세 안내',
    date: '2024-04-07',
    keywords: ['비용', '가격', '금액', '수술비', '진료비', '임신중절수술 비용'],
    priority: 80,
  },
  { title: '임신중절수술 방법', slug: '/abortion/method', description: '임신중절수술 방법 안내', date: '2024-04-06' },
  { title: '임신중절수술 법적 안내', slug: '/abortion/legal', description: '임신중절수술 법적 안내', date: '2024-04-05' },
  {
    title: '임신중절수술 병원',
    slug: '/abortion/hospital',
    description: '임신중절수술 병원 안내',
    date: '2024-04-04',
    keywords: ['병원', '산부인과', '의료기관', '임신중절수술 병원'],
    priority: 80,
  },
  {
    title: '임신중절수술 회복',
    slug: '/abortion/recovery',
    description: '임신중절수술 회복 안내',
    date: '2024-04-03',
    keywords: ['회복', '회복기간', '일상복귀', '후관리'],
    priority: 80,
  },
  { title: '임신중절수술 후기', slug: '/abortion/review', description: '임신중절수술 후기', date: '2024-04-02' },
  { title: '임신중절수술 정보', slug: '/abortion/info', description: '임신중절수술 정보', date: '2024-04-01' },
  // blog - 낙태비용가격
  { title: '낙태 비용 가격 총정리', slug: '/blog/abortion-price', description: '낙태 비용 가격 총정리', date: '2024-03-25' },
  { title: '임신중절수술 비용', slug: '/blog/abortion-cost', description: '임신중절수술 비용 상세 안내', date: '2024-03-24' },
  { title: '임신중절수술 금액', slug: '/blog/abortion-amount', description: '임신중절수술 금액 안내', date: '2024-03-23' },
  { title: '인공임신중절수술 비용', slug: '/blog/abortion-info', description: '인공임신중절수술 비용 정보', date: '2024-03-22' },
  { title: '임신초기중절수술 안내', slug: '/blog/abortion-surgery', description: '임신초기중절수술 안내', date: '2024-03-21' },
  { title: '낙태합법화 뜻·시기', slug: '/blog/abortion-legal', description: '낙태 관련 법적 절차 안내', date: '2024-03-20' },
  // blog - 임신중절수술
  { title: '임신중절수술 기간', slug: '/blog/abortion-period', description: '임신중절수술 기간 안내', date: '2024-03-19' },
  { title: '임신중절수술 후 관리', slug: '/blog/abortion-after', description: '임신중절수술 후 관리 방법', date: '2024-03-18' },
  { title: '임신중절수술 금식', slug: '/blog/abortion-fasting', description: '임신중절수술 전 금식 안내', date: '2024-03-17' },
  { title: '임신중절수술 부작용', slug: '/blog/abortion-side', description: '임신중절수술 부작용 정보', date: '2024-03-16' },
  { title: '임신중절수술 후 생리', slug: '/blog/abortion-menstruation', description: '임신중절수술 후 생리 변화', date: '2024-03-15' },
  { title: '임신중절수술 절차', slug: '/blog/abortion-process', description: '임신중절수술 절차 안내', date: '2024-03-14' },
  { title: '임신중절수술 보험', slug: '/blog/abortion-insurance', description: '임신중절수술 보험 적용 여부', date: '2024-03-13' },
  { title: '임신중절수술 보호자', slug: '/blog/abortion-guardian', description: '보호자 동반 여부 안내', date: '2024-03-12' },
  // 수술후기
  { title: '병원 방문 후기', slug: '/blog/hospital-review', description: '연세365산부인과의원 방문 후기', date: '2024-03-11' },
  // womens-clinic
  { title: '사당역 산부인과 연세365', slug: '/womens-clinic/sadang', description: '사당역 산부인과 안내', date: '2024-03-10' },
  { title: '산부인과 처음 방문 안내', slug: '/womens-clinic/first-visit', description: '처음 방문 안내', date: '2024-03-09' },
  { title: '생리통 꼭 산부인과 가야 하는 이유', slug: '/womens-clinic/menstrual-pain', description: '생리통 산부인과 안내', date: '2024-03-08' },
  { title: '임신중절수술 혼자 가도 되나요?', slug: '/blog/abortion-alone', description: '보호자 없이 가능한지 총정리', date: '2026-04-14' },
]
