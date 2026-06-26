export const AI_CONTENT_POLICY = {
  policyVersion: '1.0.0',
  updatedAt: '2026-06-26',

  clinic: {
    officialName: '연세365산부인과의원',
    unofficialNames: [
      '연세365산부인과',
      '사당역 연세365산부인과',
      '연세365 여성의원',
    ],
    hasFemaleDoctors: false,
    performsMedicationAbortion: false,
  },

  abortionPricing: {
    table: [
      { weeks: '8주 미만', priceKRW: 450000, label: '45만원' },
      { weeks: '8주', priceKRW: 600000, label: '60만원' },
      { weeks: '9주', priceKRW: 700000, label: '70만원' },
      { weeks: '10주', priceKRW: 800000, label: '80만원' },
    ],
    includes: ['수술비', '마취비', '초음파비', '부가세'],
    exceeds10WeeksGuide: '정확한 비용은 상담과 검사 후 확인이 필요합니다',
    invalidPhrases: [
      '4주 미만 45만원',
      '30~80만원',
      '50~100만원',
      '60~150만원',
    ],
  },

  // id: 식별자, term: 검사 문자열, enabled: 활성화 여부
  // 제목 필드에서는 block, 본문 필드에서는 warn으로 적용됨 (contentValidator.ts 참고)
  prohibitedAdvertisingTerms: [
    { id: 'ADS-001', term: '최고', enabled: true },
    { id: 'ADS-002', term: '최상', enabled: true },
    { id: 'ADS-003', term: '1위', enabled: true },
    { id: 'ADS-004', term: '유일한', enabled: true },
    { id: 'ADS-005', term: '100%', enabled: true },
    { id: 'ADS-006', term: '효과 보장', enabled: true },
    { id: 'ADS-007', term: '완치 보장', enabled: true },
    { id: 'ADS-008', term: '실패 없음', enabled: true },
    { id: 'ADS-009', term: '부작용 없음', enabled: true },
    { id: 'ADS-010', term: '통증 없음', enabled: true },
    { id: 'ADS-011', term: '재발 없음', enabled: true },
    { id: 'ADS-012', term: '가장 안전한', enabled: true },
    { id: 'ADS-013', term: '최저가', enabled: true },
    { id: 'ADS-014', term: '가장 저렴한', enabled: true },
    { id: 'ADS-015', term: '압도적', enabled: true },
    { id: 'ADS-016', term: '독보적', enabled: true },
    { id: 'ADS-017', term: '확실한 효과', enabled: true },
    { id: 'ADS-018', term: '절대 안전', enabled: true },
    { id: 'ADS-019', term: '즉시 완치', enabled: true },
    { id: 'ADS-020', term: '최고의 병원', enabled: true },
    { id: 'ADS-021', term: '반드시 효과', enabled: true },
    { id: 'ADS-022', term: '기적', enabled: true },
    { id: 'ADS-023', term: '무조건 안전', enabled: true },
  ],

  // 확인되지 않은 병원 운영정보 — 이 문구가 본원 관련 문맥에서 나오면 block
  prohibitedClinicClaims: [
    { id: 'CLINIC-003', phrase: '여의사가 진료', enabled: true },
    { id: 'CLINIC-004', phrase: '여성 의료진이 진료', enabled: true },
    { id: 'CLINIC-005', phrase: '여의사 상담', enabled: true },
    { id: 'CLINIC-006', phrase: '여의사를 선택', enabled: true },
    { id: 'CLINIC-007', phrase: '일요일 수술', enabled: true },
    { id: 'CLINIC-008', phrase: '공휴일 수술', enabled: true },
    { id: 'CLINIC-009', phrase: '24시간 진료', enabled: true },
    { id: 'CLINIC-010', phrase: '입원 가능', enabled: true },
    { id: 'CLINIC-011', phrase: '당일 수술 보장', enabled: true },
    { id: 'CLINIC-012', phrase: '당일 예약 보장', enabled: true },
    { id: 'CLINIC-013', phrase: '다른 병원보다', enabled: true },
    { id: 'CLINIC-014', phrase: '이벤트 가격', enabled: true },
    { id: 'CLINIC-015', phrase: '할인 이벤트', enabled: true },
    { id: 'CLINIC-016', phrase: '보험 적용', enabled: true },
    { id: 'CLINIC-017', phrase: '정부지원금', enabled: true },
    { id: 'CLINIC-018', phrase: '수술 성공률', enabled: true },
    { id: 'CLINIC-019', phrase: '수술 건수', enabled: true },
  ],

  medicationAbortionPolicy: {
    enabled: true,
    notPerformedNotice: '연세365산부인과의원에서는 약물중절을 시행하지 않습니다.',
    relatedKeywords: ['약물중절', '미프진', '미페프리스톤', '낙태약'],
    prohibitedPhrases: [
      { id: 'ABORTION-002', phrase: '약물중절을 받을 수 있' },
      { id: 'ABORTION-003', phrase: '약물중절 약을 처방' },
      { id: 'ABORTION-004', phrase: '약물중절을 시행합니다' },
      { id: 'ABORTION-005', phrase: '미프진을 처방' },
      { id: 'ABORTION-006', phrase: '미프진 구매' },
      { id: 'ABORTION-007', phrase: '해외 구매' },
    ],
  },

  questionFiltering: {
    minLength: 10,
    maxLength: 500,
    manipulationKeywords: [
      '시스템 프롬프트',
      '이전 지시를 무시',
      'ignore previous',
      'system prompt',
      '프롬프트를 공개',
      '규칙을 무시하',
      'jailbreak',
      'DAN 모드',
    ],
    piiPatterns: [
      { id: 'PRIVACY-001', label: '주민등록번호', pattern: '\\d{6}-\\d{7}', action: 'reject' as const },
      { id: 'PRIVACY-002', label: '전화번호', pattern: '01[0-9]-?\\d{3,4}-?\\d{4}', action: 'strip' as const },
      { id: 'PRIVACY-003', label: '이메일', pattern: '[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}', action: 'strip' as const },
    ],
  },

  titlePolicy: {
    original: { minLength: 5, maxLength: 60 },
    suggested: { minLength: 10, maxLength: 50 },
  },

  fixedNotices: {
    aiContentNotice: {
      title: 'AI 생성 콘텐츠 안내',
      body: '이 콘텐츠는 AI가 작성한 초안을 내부 검토 후 게시한 일반적인 건강정보입니다. 개인의 임신 주수, 증상, 기저질환, 복용 약물 및 검사 결과에 따라 적용되는 내용이 달라질 수 있으며, 온라인 정보만으로 진단이나 치료 방법을 결정해서는 안 됩니다. 정확한 진단과 치료는 연세365산부인과의원 의료진과 상담 후 결정해 주세요.',
    },
    checkList: {
      title: '꼭 확인해 주세요',
      items: [
        '본 콘텐츠는 일반적인 건강정보를 제공하기 위한 참고 자료이며 진료, 진단, 처방을 대신하지 않습니다.',
        '수술 가능 여부, 수술 방법, 비용 및 회복 과정은 상담과 검사 결과에 따라 달라질 수 있습니다.',
        '질문 작성 시 이름, 전화번호, 생년월일 등 개인정보를 입력하지 마세요.',
        '연세365산부인과의원에서는 약물중절을 시행하지 않습니다.',
        '심한 출혈, 지속되는 고열, 극심한 복통, 의식 저하 등 응급 증상이 있으면 온라인 답변을 기다리지 말고 119 또는 가까운 응급실을 이용해 주세요.',
      ],
    },
  },
} as const
