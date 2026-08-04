export type FeaturedQuestion = {
  question: string
  href: string
}

/** 화면·서버 HTML에 노출되는 주요 질문 링크 */
export const FEATURED_QUESTIONS: FeaturedQuestion[] = [
  {
    question: '임신중절수술은 무엇인가요?',
    href: '/abortion',
  },
  {
    question: '임신초기중절수술 가능한 시기는 언제인가요?',
    href: '/abortion/surgery',
  },
  {
    question: '임신중절수술 비용은 어떻게 확인하나요?',
    href: '/abortion/cost',
  },
  {
    question: '임신중절수술 병원은 어떤 기준으로 선택할까요?',
    href: '/abortion/hospital',
  },
  {
    question: '임신중절수술 후 회복은 어떻게 관리하나요?',
    href: '/abortion/recovery',
  },
  {
    question: '임신중절수술 혼자 방문해도 되나요?',
    href: '/blog/abortion-alone',
  },
]

/**
 * 정확한 핵심 탐색어에만 소폭 가산점.
 * 부분 포함으로 다른 검색 결과를 덮어쓰지 않는다.
 */
export const EXACT_INTENT_PAGES: { exactQueries: string[]; url: string }[] = [
  {
    exactQueries: [
      '임신중절수술',
      '낙태수술',
      '중절수술',
      '임신중절',
      '인공임신중절수술',
      '인공임신중절',
      'abortion',
    ],
    url: '/abortion',
  },
  {
    exactQueries: [
      '임신초기중절수술',
      '임신초기중절',
      '임신 초기 중절수술',
      '초기중절수술',
      '임신초기 수술',
    ],
    url: '/abortion/surgery',
  },
  {
    exactQueries: [
      '병원',
      '산부인과',
      '의료기관',
      '임신중절수술 병원',
      '임신중절수술병원',
      '낙태병원',
      '낙태수술병원',
      '중절수술병원',
    ],
    url: '/abortion/hospital',
  },
  {
    exactQueries: [
      '비용',
      '가격',
      '금액',
      '수술비',
      '진료비',
      '낙태비용',
      '낙태가격',
      '낙태금액',
      '임신중절수술 비용',
      '임신중절수술비용',
    ],
    url: '/abortion/cost',
  },
  {
    exactQueries: [
      '회복',
      '회복기간',
      '회복 기간',
      '후관리',
      '후 관리',
      '일상복귀',
      '일상 복귀',
      '임신중절수술 회복',
    ],
    url: '/abortion/recovery',
  },
  {
    exactQueries: ['후기', '리뷰', '방문 후기', '임신중절수술 후기'],
    url: '/abortion/review',
  },
  {
    exactQueries: ['자주 묻는 질문', 'faq'],
    url: '/abortion/faq',
  },
  {
    exactQueries: [
      '혼자',
      '혼자방문',
      '혼자 방문',
      '단독방문',
      '단독 방문',
      '혼자 내원',
      '혼자 가도',
    ],
    url: '/blog/abortion-alone',
  },
  {
    exactQueries: [
      '보호자',
      '보호자동반',
      '보호자 동반',
      '보호자동의',
      '보호자 동의',
      '보호자 없이',
    ],
    url: '/abortion/faq/guardian-required',
  },
]

/** 동의어 사전 — 검색 범위 보완용. 본문 stuffing 금지 */
export const SYNONYM_GROUPS: string[][] = [
  [
    '보호자',
    '보호자동반',
    '보호자 동반',
    '보호자동의',
    '보호자 동의',
    '동반자',
    '보호자 없이',
  ],
  ['혼자', '혼자방문', '혼자 방문', '단독방문', '단독 방문', '혼자 내원'],
  ['비용', '가격', '금액', '수술비', '진료비'],
  ['회복', '회복기간', '회복 기간', '일상복귀', '일상 복귀'],
  [
    '임신중절수술',
    '임신중절',
    '인공임신중절',
    '중절수술',
    '낙태수술',
    'abortion',
  ],
  ['병원', '산부인과', '의료기관'],
]
