import { NavItem, Doctor, ClinicItem, PriceItem, ReviewItem, FAQItem, EquipmentItem } from './types';

export const NAV_LINKS = [
  { id: 'about', label: '병원소개', href: '/about' },
  { id: 'clinics', label: '여성검진클리닉' },
  { id: 'abortion-clinic', label: '임신중절수술', href: '/abortion' },
  { id: 'abortion-surgery', label: '수술 전후 안내', href: '/abortion/recovery', highlight: true },
  { id: 'price', label: '낙태 비용 가격', href: '/blog/abortion-price', highlight: true },
  { id: 'faq', label: '여성건강 칼럼', href: '/health-magazine' },
  { id: 'health-hub', label: '건강정보 허브', href: '/health-hub' },
  { id: 'location', label: '상담예약', highlight: true },
]

export const DOCTORS = [
  {
    id: 1,
    name: '이진우',
    title: '대표원장',
    role: 'MEDICAL DIRECTOR',
    specialty: '산전관리 / 여성검진 / 난임클리닉',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop',
    greeting: '여성의 건강과 행복한 삶을 위해\n따뜻한 마음으로 함께하겠습니다.\n평안하고 프라이빗한 진료 공간에서\n여성 전문 외료진이 세심하게 케어드립니다.',
    history: [
      '연세대학교 의과대학 졸업',
      '신촌세브란스병원 인턴수료',
      '신촌세브란스병원 산부인과전문의 수료',
      '행복여성병원 원장',
      '센트럴병원 진료과장',
      '세종병원 진료과장',
      '강남차이병원 여성센터장',
      '연세미산부인과 대표원장',
      '건국대학교 의학전문 대학원 외래부교수',
      '이뻐지는산부인과 대표원장',
      '대한 산부인과학회 정회원',
      '대한 초음파학회 정회원',
      '대한 비노부인과학회 정회원'
    ]
  }
];

export const CLINICS: ClinicItem[] = [
  {
    id: 'prenatal', title: '산전 관리', icon: 'baby',
    description: '임신 초기부터 출산까지 체계적인 맞춤 케어',
    image: 'https://i.pinimg.com/736x/aa/af/36/aaaf36ea0723f19ed8cc1f674d051815.jpg',
    details: ['임신 주차별 정밀 관리', '산모 건강 집중 케어', '태아 성장 정기 체크', '안전한 출산 준비'],
  },
  {
    id: 'exam', title: '여성 검진', icon: 'activity',
    description: '연령과 라이프스타일별 맞춤 검진',
    image: 'https://i.pinimg.com/736x/24/b8/d0/24b8d0a0ccbdfa832c90d8fd649eb901.jpg',
    details: ['미혼 여성 기본 검진', '웨딩 전 정밀 검사', '갱년기 종합 검진', '정기 여성 건강 체크'],
  },
  {
    id: 'vaginoplasty', title: '여성 성형', icon: 'heart',
    description: '기능과 미용을 동시에 고려한 여성 성형',
    image: 'https://i.pinimg.com/736x/fa/65/74/fa65745aa71808c6ab6952e330165f9c.jpg',
    details: ['소음순 교정 수술', '질 성형 개선 시술', '기능·미용 동시 개선', '개인 맞춤 디자인'],
  },
  {
    id: 'infertility', title: '난임 클리닉', icon: 'users',
    description: '정확한 진단 기반의 단계별 난임 치료',
    image: 'https://i.pinimg.com/736x/24/85/6b/24856b4169d886d4abe4fbdc34d76efb.jpg',
    details: ['난임 원인 정밀 분석', '배란 유도 치료', '인공수정 프로그램', '임신 성공률 관리'],
  },
  {
    id: 'antiaging', title: '웰빙 / 수액', icon: 'sun',
    description: '몸 컨디션 회복을 위한 맞춤 케어',
    image: 'https://i.pinimg.com/1200x/96/38/8d/96388d7ce9e87100281592a167f4d7fe.jpg',
    details: ['피로 회복 수액', '면역력 강화 관리', '영양 밸런스 보충', '개인 컨디션 맞춤'],
  },
  {
    id: 'vaccine', title: '예방 접종', icon: 'shield',
    description: '연령별 필수 예방 접종 관리',
    image: 'https://i.pinimg.com/736x/54/4d/90/544d90da9345b5663c4c49d736861039.jpg',
    details: ['여성 필수 예방 접종', '임신 전 접종 관리', '계절성 감염 예방', '안전 접종 시스템'],
  },
  {
    id: 'menopause', title: '갱년기 / 폐경', icon: 'moon',
    description: '변화하는 몸을 위한 전문 관리',
    image: 'https://i.pinimg.com/736x/2c/04/7e/2c047e9ff6d7867fa401a5daa8e8539d.jpg',
    details: ['호르몬 변화 상담', '갱년기 증상 완화', '폐경 후 건강 관리', '삶의 질 개선 치료'],
  },
  {
    id: 'laser', title: '질 레이저', icon: 'zap',
    description: '비수술적 여성 질 건강 케어',
    image: 'https://i.pinimg.com/736x/5c/41/db/5c41db478dffb3be8fe39cc4f33ddeac.jpg',
    details: ['질 탄력 개선', '질 건조증 완화', '요실금 증상 개선', '회복 빠른 레이저'],
  },
];

export const PRICES: PriceItem[] = [
  // 제증명 수수료
  { category: "제증명 수수료", name: "일반진단서", price: "20,000", note: "" },
  { category: "제증명 수수료", name: "영문 일반진단서", price: "20,000", note: "" },
  { category: "제증명 수수료", name: "입퇴원확인서", price: "3,000", note: "" },
  { category: "제증명 수수료", name: "통원확인서", price: "3,000", note: "" },
  { category: "제증명 수수료", name: "진료확인서", price: "3,000", note: "" },
  { category: "제증명 수수료", name: "진료기록사본 (1~5매)", price: "1,000", note: "" },
  { category: "제증명 수수료", name: "진료기록사본 (6매이상/1매당)", price: "100", note: "" },
  { category: "제증명 수수료", name: "제증명서 사본", price: "1,000", note: "" },
  { category: "제증명 수수료", name: "진료기록영상 (CD)", price: "10,000", note: "" },
  { category: "제증명 수수료", name: "슬라이드/블록 (대출)", price: "10,000", note: "" },
  { category: "제증명 수수료", name: "출생증명서", price: "3,000", note: "" },
  { category: "제증명 수수료", name: "영문출생증명서 (영문)", price: "20,000", note: "" },
  { category: "제증명 수수료", name: "CCTV 영상 수수료(열람,시청)", price: "1,500", note: "1편 기준 30분 초과시 10분마다 500원" },
  { category: "제증명 수수료", name: "CCTV 영상 수수료 사본(종이출력물),인화물,복제물", price: "800", note: "1GB 마다 ※ 매체비용은 별도" },

  // 처치 및 수술
  { category: "처치 및 수술", name: "하이푸(HIFU)", price: "3,000,000 ~ 12,000,000", note: "자궁근종, 선근종 사이즈, 위치, 개수에 따라 상이함" },
  { category: "처치 및 수술", name: "간암의 초음파유도 고강도초음파집속술", price: "~10,000,000", note: "사이즈, 위치, 개수따라 상이" },
  { category: "처치 및 수술", name: "고주파자궁근종용해술", price: "1,000,000 ~ 15,000,000", note: "사이즈, 위치, 개수따라 상이" },
  { category: "처치 및 수술", name: "트위스트 듀얼 웨이브", price: "3,100,000", note: "-" },
  { category: "처치 및 수술", name: "소음순성형술 (양쪽)", price: "1,500,000", note: "-" },
  { category: "처치 및 수술", name: "소음순 성형술 (한쪽)", price: "1,100,000", note: "-" },
  { category: "처치 및 수술", name: "음핵수술", price: "1,100,000", note: "-" },
  { category: "처치 및 수술", name: "지방흡입", price: "1,800,000 ~ 4,000,000", note: "사이즈, 위치, 개수따라 상이" },
  { category: "처치 및 수술", name: "성형 실밥 제거", price: "20,000", note: "" },
  { category: "처치 및 수술", name: "줄기세포", price: "1,000,000 ~ 8,800,000", note: "1회당, 부위별 상이" },
  { category: "처치 및 수술", name: "무릎 골관절염에 대한 골수 흡인 농축물 관절강내 주사", price: "3,500,000 ~ 11,000,000", note: "시술난이도 및 소요시간에 따라상이" },
  { category: "처치 및 수술", name: "난관결찰 (불임수술)", price: "700,000", note: "-" },
  { category: "처치 및 수술", name: "일반루프 (피임)", price: "120,000", note: "-" },
  { category: "처치 및 수술", name: "미레나, 임플라논 (피임)", price: "350,000", note: "카일리나 : 380,000" },
  { category: "처치 및 수술", name: "레이저를 이용한 진균증치료", price: "30,000 ~ 200,000", note: "부위별 상이" },
  { category: "처치 및 수술", name: "VABE 유방양성병변절제술", price: "550,000", note: "맘모톰(절제) / 종양 1개당" },
  { category: "처치 및 수술", name: "Adm 갑상선 고주파 2cm 미만", price: "680,000", note: "고주파 열치료" },
  { category: "처치 및 수술", name: "Adm 갑상선 고주파 2cm이상", price: "980,000", note: "고주파 열치료" },
  { category: "처치 및 수술", name: "Adm 갑상선 고주파 3cm이상", price: "1,680,000", note: "고주파 열치료" },
  { category: "처치 및 수술", name: "방사선 온열치료 및 온열치료계획", price: "100,000 ~ 500,000", note: "시간별 상이" },
  { category: "처치 및 수술", name: "고압산소요법", price: "20,000 ~ 150,000", note: "대상자는 급여" },
  { category: "처치 및 수술", name: "포토맥스", price: "100,000", note: "" },
  { category: "처치 및 수술", name: "우먼케어(평가유예플라즈마 CHD-5000)", price: "150,000", note: "tip 별도" },
  { category: "처치 및 수술", name: "보톡스", price: "70,000(사각턱)\n50,000(주름)", note: "VAT 10% 별도" },
  { category: "처치 및 수술", name: "필러", price: "150,000", note: "VAT 10% 별도" },
  { category: "처치 및 수술", name: "두피성장인자(8회)", price: "640,000", note: "VAT 10% 별도" },
  { category: "처치 및 수술", name: "삭센다펜주(비만주사)", price: "120,000", note: "개당" },
  { category: "처치 및 수술", name: "위고비프리필드펜", price: "280,000 ~ 500,000", note: "용량별 상이" },
  { category: "처치 및 수술", name: "마운자로프리필드펜주", price: "385,000 ~ 600,000", note: "용량별 상이" },
  { category: "처치 및 수술", name: "하이알라제주", price: "100,000", note: "1500 IU" },
  { category: "처치 및 수술", name: "토닝레이저", price: "100,000", note: "VAT 10% 별도" },
  { category: "처치 및 수술", name: "슈링크 100샷 (리프팅)", price: "70,000", note: "VAT 10% 별도" },

  // 검사료
  { category: "검사료", name: "수술중 초음파(비급여)", price: "50,000 ~ 5,000,000", note: "자궁근종/선근종/난소종양 수술시 사이즈 수술시간 등에 따라 상이" },
  { category: "검사료", name: "산과초음파(제1삼분기~ 일반)", price: "33,000", note: "급여횟수 이상 실시시" },
  { category: "검사료", name: "산과 초음파 (제2,3삼분기~ 일반)", price: "50,000", note: "급여횟수 이상 실시시" },
  { category: "검사료", name: "유도초음파(I)", price: "83,920", note: "대상자는 급여" },
  { category: "검사료", name: "유도초음파(II)", price: "70,000 ~ 167,840", note: "대상자는 급여" },
  { category: "검사료", name: "유방초음파 (액와부 포함)", price: "100,000", note: "대상자는 급여" },
  { category: "검사료", name: "탄성초음파", price: "60,000", note: "유방조직의 단단함 확인" },
  { category: "검사료", name: "갑상선 초음파(경부 림프절 포함)", price: "90,000", note: "Thyroid US" },
  { category: "검사료", name: "하지정맥초음파", price: "140,000", note: "양측" },
  { category: "검사료", name: "경동맥초음파", price: "50,000", note: "-" },
  { category: "검사료", name: "VABE sono guide", price: "100,000 ~ 2,100,000", note: "사이즈, 개수 따라 상이" },
  { category: "검사료", name: "위치 결정술 후 VABE Sono - guide", price: "500,000", note: "-" },
  { category: "검사료", name: "진공보조장치 이용 유방양성종양절제술-스테레오탁틱", price: "1,450,000~1,650,000", note: "MARKER 포함 유무에 따라 상이" },
  { category: "검사료", name: "기타 부위 초음파", price: "40,000", note: "-" },
  { category: "검사료", name: "초음파 조영제", price: "100,000 ~ 200,000", note: "-" },
  { category: "검사료", name: "미네랄 검사", price: "250,000", note: "모발검사" },
  { category: "검사료", name: "골밀도검사", price: "70,000 ~", note: "골다공증검사 / 대상자는 급여" },
  { category: "검사료", name: "질압질용적측정", price: "30,000 ~ 50,000", note: "-" },
  { category: "검사료", name: "임신확인을 위한 혈액검사", price: "25,000", note: "B-HCG" },
  { category: "검사료", name: "LH SURGE (URINE)", price: "15,000", note: "-" },
  { category: "검사료", name: "정액검사", price: "50,000", note: "-" },
  { category: "검사료", name: "기형아검사(1차)", price: "60,000", note: "-" },
  { category: "검사료", name: "G-NIPT (지-니프트)", price: "650,000", note: "-" },
  { category: "검사료", name: "SHBG검사", price: "80,000", note: "성호르몬결합글로블린검사" },
  { category: "검사료", name: "양수검사", price: "650,000 ~ 1,300,000", note: "단태아/다태아" },
  { category: "검사료", name: "AMH 항물러관호르몬", price: "50,000", note: "대상자는 급여" },
  { category: "검사료", name: "나이테", price: "170,000", note: "-" },
  { category: "검사료", name: "면역검사(NK CELL)", price: "70,000", note: "활성도" },
  { category: "검사료", name: "ROMA (HE4+CA-125)", price: "60,000", note: "대상자는 급여" },
  { category: "검사료", name: "HPV 인유두종바이러스 검사", price: "70,000", note: "대상자는 급여" },
  { category: "검사료", name: "써비코", price: "30,000", note: "자궁경확대촬영검사" },
  { category: "검사료", name: "독감키트검사", price: "30,000", note: "-" },
  { category: "검사료", name: "코로나검사(간이검사)", price: "20,000", note: "-" },
  { category: "검사료", name: "미혼여성 검진", price: "200,000", note: "-" },
  { category: "검사료", name: "임신준비 검진", price: "300,000", note: "-" },
  { category: "검사료", name: "여성맞춤 검진", price: "300,000", note: "-" },
  { category: "검사료", name: "갱년기여성 검진", price: "390,000", note: "-" },
  { category: "검사료", name: "캔서 리스크 스크린 검사", price: "120,000", note: "" },
  { category: "검사료", name: "면역검사 5종", price: "270,000", note: "Lymphocyte subset" },
  { category: "검사료", name: "알러지검사", price: "150,000", note: "대상자는 급여" },
  { category: "검사료", name: "자율신경계이상검사(심박변이도검사)", price: "50,000", note: "" },
];

export const FAQS = [
  {
    question: '임신중절수술 금액이 얼마인가요? 낙태 비용 가격이 궁금합니다.',
    answer: '연세365산부인과의원의 임신중절수술 안내 금액은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 낙태 비용 가격은 초음파로 확인한 주수와 필요한 검사·마취·처치에 따라 달라질 수 있습니다. 카드와 현금의 기본 안내 금액은 동일하며, 최종 비용과 포함 항목은 진료 전 상담에서 확인하시기 바랍니다.',
  },
  {
    question: '임신중절수술 비용은 전화로 정확히 알 수 있나요?',
    answer: '전화나 카카오톡에서는 마지막 생리일과 현재 상황을 바탕으로 임신중절수술 비용의 예상 범위와 기본 포함 항목을 안내할 수 있습니다. 정확한 낙태비용과 최종 금액은 초음파로 임신 주수와 위치를 확인하고 필요한 검사·마취·처치 범위를 결정한 뒤 안내합니다. 전화 안내 금액만으로 수술 가능 여부나 최종 비용을 확정하지 말고, 내원 전 변동 가능한 항목을 함께 확인하시기 바랍니다.',
  },
  {
    question: '임신중절수술의 법률 기준은 어떻게 확인하나요?',
    answer: '2019년 헌법재판소의 헌법불합치 결정에 따라 형법상 자기낙태죄와 의사낙태죄 조항은 2021년 1월 1일부터 효력을 상실했습니다. 다만 모자보건법 제14조와 시행령의 규정은 남아 있으며, 임신중절수술의 진료 가능 범위는 초음파로 확인한 주수·건강 상태·개별 사정과 최신 법률에 따라 달라질 수 있습니다. 14주를 일률적인 합법 기준으로 단정하지 않고 진료 상담과 필요한 경우 법률 전문가의 확인을 권합니다.',
  },
  {
    question: '흡입술과 소파술 중 어떤 방법이 더 안전한가요?',
    answer: '흡입술과 소파술 등 임신중절수술 방법은 초음파로 확인한 임신 주수, 자궁 상태, 기저질환과 검사 결과를 종합해 의료진이 결정합니다. 특정 방법이 모든 사람에게 더 안전하다고 단정할 수 없으며, 마취와 시술 후 통증·출혈·회복 정도에도 개인차가 있습니다. 상담 시 예상 과정, 대안, 부작용과 주의사항을 함께 확인하시기 바랍니다.',
  },
  {
    question: '임신중절수술 절차가 어떻게 되나요? 당일수술이 가능한가요?',
    answer: '일반적인 임신중절수술 절차는 접수, 초음파와 필요한 검사, 전문의 상담, 시술, 회복 상태 확인 순서로 진행합니다. 검사 종류, 소요 시간과 당일 수술·귀가 가능 여부는 주수, 건강 상태, 금식 여부와 예약 상황에 따라 달라질 수 있습니다. 금식 시간과 준비물은 임의로 판단하지 말고 예약 상담에서 안내받아야 하며, 수면마취 후에는 자가 운전을 하지 않아야 합니다.',
  },
  {
    question: '임신중절수술 후 관리는 어떻게 해야 하나요? 회복 기간이 얼마나 되나요?',
    answer: '임신중절수술 후 회복 속도, 출혈과 통증은 개인의 건강 상태와 주수에 따라 다릅니다. 활동·성관계·목욕·음주 제한과 약 복용 기간은 진료 후 받은 안내를 따르시기 바랍니다. 고열, 심한 복통, 어지럼증이나 과다출혈 등 이상 증상이 있으면 즉시 의료기관에 연락하거나 진료를 받아야 하며, 권고된 사후 검진 일정도 확인해야 합니다.',
  },
  {
    question: '임신중절수술 혼자 가도 되나요? 보호자 동반이 필요한가요?',
    answer: '성인은 혼자 상담받을 수 있습니다. 실제 수술 가능 여부와 동의 절차, 준비물은 연령·건강 상태와 개별 상황을 확인한 뒤 안내합니다. 수면마취 후에는 자가 운전을 하지 말고 보호자 동행 또는 대중교통 이용 등 안전한 귀가 방법을 준비하시기 바랍니다. 미성년자의 동의 절차는 일률적으로 단정하지 않고 예약 상담에서 구체적인 상황을 확인합니다.',
  },
  {
    question: '낙태수술 기록이 남거나 타인에게 알려질 수 있나요?',
    answer: '진료 기록과 개인정보는 의료법 등 관계 법령과 의료기관의 개인정보 처리 기준에 따라 보호됩니다. 다만 환자 동의, 법령상 제출 의무 등 예외가 있을 수 있으므로 누구에게도 절대 공개되지 않는다고 단정할 수는 없습니다. 기록 열람·발급, 결제 내역과 온라인 상담의 개인정보 처리 방법이 궁금하면 상담 전에 의료기관에 확인하시기 바랍니다.',
  },
  {
    question: '미성년자도 낙태수술이 가능한가요?',
    answer: '미성년자는 본인만으로도 상담을 요청할 수 있습니다. 실제 진료·수술에 필요한 동의와 서류는 연령, 의료행위와 개별 상황에 따라 달라질 수 있으므로 보호자 동의가 항상 필요하거나 항상 불필요하다고 단정하지 않습니다. 성폭력·가정폭력 등 안전 문제가 있다면 의료기관과 관계 전문기관에 상황을 알리고 필요한 보호와 절차를 안내받으시기 바랍니다.',
  },
  {
    question: '임신중절수술 전 금식은 얼마나 해야 하나요? 준비물이 무엇인가요?',
    answer: '금식 시간과 준비물은 예정된 마취 방법, 건강 상태와 복용 약물에 따라 달라질 수 있으므로 예약 시 받은 안내를 우선 따르시기 바랍니다. 복용 중인 약, 알레르기와 기저질환을 의료진에게 알리고, 수면마취가 예정된 경우 귀가 방법도 미리 준비해야 합니다. 임의로 약을 중단하지 말고 담당 의료진에게 확인하시기 바랍니다.',
  },
  {
    question: '임신중절수술 후 생리는 언제 다시 시작되나요?',
    answer: '첫 생리가 다시 시작되는 시점과 양상에는 개인차가 있습니다. 예상보다 생리가 오래 지연되거나 과다출혈, 심한 통증, 고열 등 이상 증상이 있으면 의료기관에 문의하시기 바랍니다. 배란은 생리 전에 먼저 재개될 수 있으므로 피임 계획은 사후 진료에서 의료진과 상담하는 것이 좋습니다.',
  },
  {
    question: '낙태 합법화 이후 현재 법적 기준은 어떻게 되나요?',
    answer: '형법상 자기낙태죄와 의사낙태죄 조항은 2021년 1월 1일부터 효력을 상실했습니다. 그러나 이를 임신 14주 이내의 모든 수술이 별도 조건 없이 합법이라는 뜻으로 단정해서는 안 됩니다. 모자보건법 제14조와 시행령의 규정, 개별 주수와 건강 상태를 함께 확인해야 하며 법률 판단이 필요한 경우 전문가 상담을 병행하시기 바랍니다. 의료기관은 진료 시점의 법령과 의료 기준에 따라 가능 여부를 안내해야 합니다.',
  },
  {
    question: '예약 없이 당일 방문해도 상담과 수술이 가능한가요?',
    answer: '당일 상담은 예약 상황에 따라 가능할 수 있으나 당일 수술 가능 여부는 초음파와 필요한 검사, 건강 상태, 금식 여부와 의료진 판단에 따라 결정됩니다. 방문 전 전화나 카카오톡으로 진료시간, 예약 가능 여부와 준비사항을 확인하시기 바랍니다. 온라인 상담 내용과 진료 기록은 관계 법령과 개인정보 처리 기준에 따라 보호됩니다.',
  },
]

export const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    name: "김OO",
    treatment: "여성성형",
    content: "처음에는 많이 망설였는데 원장님께서 너무 친절하게 상담해주셔서 마음이 놓였습니다. 수술 결과도 너무 만족스럽고 회복도 빨랐어요. 간호사 선생님들도 다들 친절하셔서 편안하게 진료받았습니다.",
    image: ""
  },
  {
    id: 2,
    name: "이OO",
    treatment: "질염치료",
    content: "만성 질염으로 오랫동안 고생했는데, 꼼꼼하게 원인 파악해주시고 치료해주셔서 지금은 재발 없이 잘 지내고 있습니다. 연중무휴 진료라 일정 맞추기 편해서 너무 좋아요.",
    image: ""
  },
  {
    id: 3,
    name: "박OO",
    treatment: "웨딩검진",
    content: "결혼 앞두고 웨딩검진 받았는데 항목별로 자세하게 설명해주셔서 좋았습니다. 필요한 검사만 쏙쏙 골라서 합리적으로 진행해주시는 점이 마음에 들었어요.",
    image: ""
  },
  {
    id: 4,
    name: "최OO",
    treatment: "피임상담",
    content: "미레나 시술 받았는데 생각보다 통증도 없고 시술 시간도 짧았어요. 생리통이 심해서 고민이었는데 진작 할 걸 그랬네요. 원장님 실력이 정말 좋으신 것 같아요.",
    image: ""
  },
  {
    id: 5,
    name: "정OO",
    treatment: "임신초기",
    content: "첫 임신이라 모르는 게 많아서 걱정이 많았는데, 하나하나 세심하게 알려주셔서 안심이 됐습니다. 초음파도 꼼꼼히 봐주시고 갈 때마다 따뜻하게 맞아주셔서 감사해요.",
    image: ""
  }
];
