/**
 * Health Search Intent/Entity 사전 — 단일 관리 지점.
 * 여기 정의된 표현/우선순위만으로 검색 의도를 판별한다 (AI 호출 없음, deterministic).
 * FAQ가 1,000개로 늘어나도 이 파일은 그대로 두고 새 문서만 추가하면 되도록 설계한다.
 */

export type IntentTag =
  | 'timing'
  | 'cost'
  | 'method'
  | 'procedure_time'
  | 'exam'
  | 'anesthesia'
  | 'pain'
  | 'guardian'
  | 'privacy'
  | 'visit_alone'
  | 'visit_prep'
  | 'fasting'
  | 'recovery'
  | 'bleeding'
  | 'menstruation'
  | 'work_return'
  | 'daily_life'
  | 'exercise'
  | 'hygiene'
  | 'sex'
  | 'contraception'
  | 'hospital_choice'
  | 'safety_symptom'
  | 'appointment'
  | 'travel'
  | 'diet_lifestyle'
  | 'psych_support'
  | 'scar_stitches'
  | 'pregnancy_test'
  | 'early_symptom'
  | 'miscarriage'
  | 'procedure_definition'
  | 'schedule_hours'
  | 'discharge_symptom'
  | 'menopause_info'
  | 'period_pain'

export type IntentMeta = {
  /** UI에 노출되는 짧은 라벨 */
  label: string
  /** 이 intent를 대표하는 자연어 검색 문구 (기존 searchSite에 재사용) */
  phrase: string
  /** 사용자가 실제로 입력할 법한 구어체 표현 (포함 여부로 판별) */
  lexicon: string[]
}

export const INTENT_META: Record<IntentTag, IntentMeta> = {
  timing: {
    label: '가능 시기',
    phrase: '가능한 시기',
    lexicon: ['가능한 시기', '수술 가능', '언제까지 가능', '몇주까지', '시기가 언제'],
  },
  cost: {
    label: '비용',
    phrase: '수술 비용',
    lexicon: ['비용', '가격', '금액', '수술비', '진료비', '얼마예요', '얼마나 들어요', '얼마인가요', '얼마 들어요', '현금영수증', '카드 되나요', '분할결제'],
  },
  method: {
    label: '방법·과정',
    phrase: '수술 방법',
    lexicon: ['방법', '수술 과정', '어떻게 진행', '어떤 방식', '수술방식'],
  },
  procedure_time: {
    label: '소요시간·당일과정',
    phrase: '수술 시간',
    lexicon: ['소요시간', '얼마나 걸려', '수술 시간', '당일 끝나', '몇 시간', '몇분', '오래 걸려'],
  },
  exam: {
    label: '검사',
    phrase: '검사',
    lexicon: ['검사', '초음파', '사전검사', '피검사'],
  },
  anesthesia: {
    label: '마취',
    phrase: '마취',
    lexicon: ['마취', '수면마취', '전신마취', '무슨 마취'],
  },
  pain: {
    label: '통증',
    phrase: '많이 아픈가요',
    lexicon: ['아파요', '아픈가요', '많이 아픈가요', '통증', '아프나요', '진통제', '아파', '아픈거 무서워요'],
  },
  guardian: {
    label: '보호자 동의',
    phrase: '보호자 동의 여부',
    lexicon: ['보호자', '보호자 동의', '법정대리인', '부모님 동의', '동의서', '동행자', '남자친구랑'],
  },
  privacy: {
    label: '개인정보',
    phrase: '개인정보 보호',
    lexicon: ['개인정보', '기록 남아요', '부모님한테 연락', '부모님 연락', '부모한테', '비밀 보장', '기록이 남나요', '부모님 알게', '회사에 알려', '보험 처리하면'],
  },
  visit_alone: {
    label: '혼자 방문',
    phrase: '혼자 방문 가능 여부',
    lexicon: ['혼자 가도', '혼자 방문', '동행 없이', '혼자 내원', '남자친구 없이', '혼자 가도 됨'],
  },
  visit_prep: {
    label: '방문 준비',
    phrase: '준비물',
    lexicon: ['방문 준비', '뭐 챙겨', '준비물', '예약 방법', '초진 준비'],
  },
  fasting: {
    label: '금식',
    phrase: '수술 전 금식',
    lexicon: ['금식', '공복', '물도 못 마셔요', '식사 언제까지'],
  },
  recovery: {
    label: '회복',
    phrase: '수술 후 회복',
    lexicon: ['회복', '며칠 걸려요', '낫는데', '회복기간', '언제 나아요', '다시 임신', '몸조리'],
  },
  bleeding: {
    label: '출혈',
    phrase: '수술 후 출혈',
    lexicon: ['출혈', '피가 많이', '하혈', '피가 나요', '생리대 몇장', '패드 얼마나', '생리대 갈아요', '생리대 얼마나', '안나오는데', '피가 안'],
  },
  menstruation: {
    label: '생리',
    phrase: '수술 후 생리',
    lexicon: ['생리 언제', '생리 재개', '다음 생리', '생리가 없어요'],
  },
  work_return: {
    label: '출근·직장복귀',
    phrase: '출근',
    lexicon: ['출근', '회사 가도', '직장 복귀', '다음날 일해도', '일 나가도', '학교 가도'],
  },
  daily_life: {
    label: '일상생활',
    phrase: '일상생활',
    lexicon: ['일상생활', '평소처럼', '일상 복귀'],
  },
  exercise: {
    label: '운동',
    phrase: '수술 후 운동',
    lexicon: ['운동', '헬스', '헬스장', '운동 언제', '요가', '필라테스'],
  },
  hygiene: {
    label: '샤워·목욕',
    phrase: '수술 후 샤워',
    lexicon: ['샤워', '목욕', '씻어도', '언제 씻어요', '사우나', '찜질', '머리 감아도'],
  },
  sex: {
    label: '성관계',
    phrase: '성관계',
    lexicon: ['성관계', '부부관계', '관계는 언제'],
  },
  contraception: {
    label: '피임',
    phrase: '수술 후 피임',
    lexicon: ['피임', '피임약', '콘돔', '피임 방법'],
  },
  hospital_choice: {
    label: '병원 선택',
    phrase: '병원 선택 기준',
    lexicon: ['병원 어디', '병원 선택', '가까운 병원', '병원 고를', '병원 기준', '먼 병원', '가까운데가'],
  },
  safety_symptom: {
    label: '이상 증상',
    phrase: '이상 증상',
    lexicon: ['열이 나요', '너무 아파요', '이상 증상', '부작용', '배가 너무', '열나요', '어지러워요', '실신할것같아요', '숨쉬기 힘들어요'],
  },
  appointment: {
    label: '예약·귀가',
    phrase: '예약',
    lexicon: ['예약', '재방문', '다시 방문', '귀가', '당일 귀가', '당일 집', '예약 취소'],
  },
  travel: {
    label: '이동·장거리',
    phrase: '비행기',
    lexicon: ['운전', '지하철', '비행기', '기차', '장거리 이동', '지방에서', '지방인데', '멀리서', '해외여행', '차 운전'],
  },
  diet_lifestyle: {
    label: '식사·음주·흡연',
    phrase: '음주',
    lexicon: ['밥 언제', '음주', '술 마셔도', '담배', '카페인', '다이어트 해도', '식사 언제'],
  },
  psych_support: {
    label: '심리 상담',
    phrase: '후회할까 봐 걱정',
    lexicon: ['우울해요', '죄책감', '마음이 힘들', '후회할까', '망설여', '결정 못했', '상담만 받아도', '상담만 하고', '고민중인데'],
  },
  scar_stitches: {
    label: '흉터·실밥',
    phrase: '수술 흉터와 실밥 여부',
    lexicon: ['흉터', '실밥'],
  },
  pregnancy_test: {
    label: '임신 확인',
    phrase: '임신테스트기 결과 확인',
    lexicon: ['두줄', '테스트기', '임신테스트', '생리 안하는데', '희미해요', '한줄인데', '임신 확인', '언제 병원가요'],
  },
  early_symptom: {
    label: '임신 초기 증상',
    phrase: '임신 초기 증상',
    lexicon: ['초기 증상', '복통 정상', '피곤함 너무', '초기 몸살', '입덧', '갈색 분비물'],
  },
  miscarriage: {
    label: '유산 확인',
    phrase: '유산 의심',
    lexicon: ['유산 의심', '유산인가요', '계류유산', '자연유산'],
  },
  procedure_definition: {
    label: '수술 방식 설명',
    phrase: '약물중절',
    lexicon: ['소파술', '흡입술', '약물중절', '무슨 수술', '먹는약도', '약 먹고 하는'],
  },
  schedule_hours: {
    label: '진료시간',
    phrase: '진료시간',
    lexicon: ['야간에도', '주말에도', '진료시간', '몇시까지'],
  },
  discharge_symptom: {
    label: '냉·분비물',
    phrase: '냉 색깔',
    lexicon: ['냉 색깔', '냉이 노란', '냉이 이상', '냉대하', '분비물 색깔', '분비물 냄새'],
  },
  menopause_info: {
    label: '갱년기·완경',
    phrase: '갱년기 시작',
    lexicon: ['갱년기 언제', '갱년기 시작', '완경 언제'],
  },
  period_pain: {
    label: '생리통',
    phrase: '생리통',
    lexicon: ['생리통 심해요', '생리통 너무', '생리통'],
  },
}

/** 여러 intent가 동시에 매칭될 때 우선순위 (안전/응급 관련을 최우선으로) */
export const INTENT_PRIORITY: IntentTag[] = [
  'safety_symptom',
  'bleeding',
  'miscarriage',
  'discharge_symptom',
  'period_pain',
  'guardian',
  'visit_alone',
  'privacy',
  'anesthesia',
  'pain',
  'work_return',
  'hygiene',
  'exercise',
  'sex',
  'contraception',
  'menstruation',
  'recovery',
  'scar_stitches',
  'psych_support',
  'pregnancy_test',
  'early_symptom',
  'menopause_info',
  'travel',
  'diet_lifestyle',
  'procedure_definition',
  'schedule_hours',
  'hospital_choice',
  'cost',
  'method',
  'procedure_time',
  'exam',
  'fasting',
  'visit_prep',
  'appointment',
  'daily_life',
  'timing',
]

/** intent별 "지금 같이 확인하세요" 인접 정보 (최대 4개, 우선순위 순) */
export const INTENT_ADJACENCY: Record<IntentTag, IntentTag[]> = {
  timing: ['cost', 'method', 'visit_prep', 'procedure_time'],
  cost: ['timing', 'method', 'visit_prep', 'hospital_choice'],
  method: ['timing', 'procedure_time', 'anesthesia', 'recovery'],
  procedure_time: ['method', 'anesthesia', 'appointment', 'recovery'],
  exam: ['visit_prep', 'timing', 'method', 'appointment'],
  anesthesia: ['pain', 'procedure_time', 'recovery', 'fasting'],
  pain: ['anesthesia', 'recovery', 'safety_symptom', 'procedure_time'],
  guardian: ['visit_alone', 'privacy', 'appointment', 'recovery'],
  visit_alone: ['guardian', 'privacy', 'appointment', 'recovery'],
  privacy: ['guardian', 'visit_alone', 'appointment', 'recovery'],
  visit_prep: ['fasting', 'exam', 'appointment', 'cost'],
  fasting: ['visit_prep', 'anesthesia', 'exam', 'appointment'],
  recovery: ['bleeding', 'work_return', 'safety_symptom', 'hygiene'],
  bleeding: ['recovery', 'safety_symptom', 'menstruation', 'appointment'],
  menstruation: ['recovery', 'contraception', 'bleeding', 'sex'],
  work_return: ['daily_life', 'pain', 'recovery', 'exercise'],
  daily_life: ['work_return', 'exercise', 'hygiene', 'recovery'],
  exercise: ['daily_life', 'recovery', 'hygiene', 'work_return'],
  hygiene: ['daily_life', 'recovery', 'exercise', 'bleeding'],
  sex: ['contraception', 'menstruation', 'recovery', 'daily_life'],
  contraception: ['sex', 'menstruation', 'recovery', 'daily_life'],
  hospital_choice: ['appointment', 'recovery', 'cost', 'travel'],
  safety_symptom: ['bleeding', 'recovery', 'pain', 'appointment'],
  appointment: ['hospital_choice', 'recovery', 'visit_prep', 'exam'],
  travel: ['hospital_choice', 'recovery', 'appointment', 'daily_life'],
  diet_lifestyle: ['daily_life', 'recovery', 'exercise', 'hygiene'],
  psych_support: ['recovery', 'guardian', 'privacy', 'appointment'],
  scar_stitches: ['recovery', 'hygiene', 'safety_symptom', 'appointment'],
  pregnancy_test: ['early_symptom', 'timing', 'miscarriage', 'appointment'],
  early_symptom: ['pregnancy_test', 'miscarriage', 'timing', 'appointment'],
  miscarriage: ['early_symptom', 'bleeding', 'appointment', 'recovery'],
  procedure_definition: ['method', 'timing', 'anesthesia', 'cost'],
  schedule_hours: ['appointment', 'hospital_choice', 'visit_prep', 'cost'],
  discharge_symptom: ['recovery', 'safety_symptom', 'appointment', 'exam'],
  menopause_info: ['exam', 'appointment', 'daily_life', 'psych_support'],
  period_pain: ['exam', 'recovery', 'appointment', 'safety_symptom'],
}

/** 임신 주수 검색 시 2x2 핵심 그리드 (섹션6 사양) */
export const WEEK_PRIMARY_GRID: IntentTag[] = ['timing', 'cost', 'method', 'visit_prep']
/** 임신 주수 검색 시 "함께 확인하면 좋은 정보" 그리드 */
export const WEEK_COMPANION_GRID: IntentTag[] = ['anesthesia', 'procedure_time', 'recovery', 'safety_symptom']

/** 임신 주수 entity 추출 정규식 — "임신9주", "9주차", "임신 15주" 등 처리 */
export const WEEK_ENTITY_REGEX = /(?:임신\s*)?(\d{1,2})\s*주(?:차)?/

/** 사람이 실제로 입력할 법한 범위로 제한 (오탐 방지) */
export const MIN_PREGNANCY_WEEK = 4
export const MAX_PREGNANCY_WEEK = 24

/** 기존 /abortion/* 대표 페이지 — "관련 의료정보" 영역 전용. FEATURED_QUESTIONS와 동일한 승인된 문구만 재사용한다. */
export const REPRESENTATIVE_PAGE_URLS = [
  '/abortion',
  '/abortion/surgery',
  '/abortion/hospital',
  '/abortion/cost',
  '/abortion/recovery',
  '/abortion/review',
  '/abortion/faq',
  '/blog/abortion-alone',
  '/abortion/faq/guardian-required',
]

/** intent별 기본 대표 페이지 (검색 결과에 대표 페이지가 전혀 없을 때만 사용하는 최후 폴백) */
export const INTENT_FALLBACK_PAGE: Partial<Record<IntentTag, string>> = {
  cost: '/abortion/cost',
  hospital_choice: '/abortion/hospital',
  recovery: '/abortion/recovery',
  guardian: '/abortion/faq/guardian-required',
  visit_alone: '/blog/abortion-alone',
  method: '/abortion/surgery',
  timing: '/abortion/surgery',
}
