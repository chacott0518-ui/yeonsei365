export const CATEGORIES = {
    pregnancy:     { label: '임신·출산',    color: '#D6336C', icon: '🤰' },
    contraception: { label: '피임',          color: '#2e86ab', icon: '💊' },
    gynecology:    { label: '산부인과 질환', color: '#5c0e20', icon: '🏥' },
    surgery:       { label: '수술·시술',     color: '#BA7517', icon: '🩺' },
    womens:        { label: '여성건강',       color: '#0f6e56', icon: '💚' },
  } as const
  
  export type CategoryKey = keyof typeof CATEGORIES
  
  export type ArticleSection = {
    type: 'text' | 'infobox' | 'warnbox' | 'table' | 'steps' | 'checklist'
    title?: string
    content?: string
    items?: string[]
    headers?: string[]
    rows?: string[][]
    steps?: { n: string; title: string; desc: string }[]
  }
  
  export type HealthArticle = {
    slug: string
    category: CategoryKey
    title: string
    description: string
    keywords: string[]
    lastModified: string
    heroImage?: string
    stats?: { num: string; label: string }[]
    faq: { q: string; a: string }[]
    sections: ArticleSection[]
    relatedSlugs?: string[]
  }
  
  export const HEALTH_ARTICLES: HealthArticle[] = [
    {
      slug: '4weeks-symptoms',
      category: 'pregnancy',
      title: '임신 4주차 증상은 언제부터 나타나나요? — 초기 변화 완전 정리',
      description: '임신 4주차 증상이 궁금하신가요? 착상혈, 입덧, 가슴 변화 등 임신 초기 증상을 사당역 연세365산부인과 전문의가 상세히 안내합니다. 02-585-3650.',
      keywords: ['임신4주차증상', '임신초기증상', '착상혈', '임신증상언제부터', '사당역산부인과'],
      lastModified: '2025-05-08',
      faq: [
        {
          q: '임신 4주차 증상은 언제부터 나타나나요?',
          a: '임신 4주차는 마지막 생리 후 약 4주째로, 이 시기부터 입덧, 가슴 압통, 피로감, 빈뇨 등의 증상이 나타날 수 있습니다. 개인차가 크며 증상이 없어도 정상 임신인 경우가 많습니다. 연세365산부인과(02-585-3650)에서 초음파로 확인하실 수 있습니다.',
        },
        {
          q: '착상혈은 어떻게 생겼나요? 생리혈과 구분법은?',
          a: '착상혈은 소량의 핑크~갈색 분비물로, 생리 예정일 1~2주 전 1~3일간 나타납니다. 생리혈보다 양이 훨씬 적고 지속 기간이 짧습니다.',
        },
        {
          q: '임신 테스트기는 몇 주차에 해야 정확한가요?',
          a: '생리 예정일 1~2일 후, 또는 관계 후 최소 2주 이후 아침 첫 소변으로 검사하면 정확도가 높습니다.',
        },
        {
          q: '임신 4주차 초음파에서 아무것도 안 보이는 게 정상인가요?',
          a: '네, 정상입니다. 임신낭은 보통 임신 5~6주부터 초음파로 확인 가능합니다. 4주차에는 혈액 검사(베타-HCG)로 임신 여부를 확인합니다.',
        },
        {
          q: '임신 4주차에 산부인과에 꼭 가야 하나요?',
          a: '자궁외임신 등 위험 상황을 조기에 배제하기 위해 임신 확인 즉시 방문을 권장합니다. 사당역 연세365산부인과(02-585-3650)에서 당일 초음파 검사가 가능합니다.',
        },
      ],
      sections: [
        {
          type: 'text',
          title: '임신 4주차란 어떤 시기인가요?',
          content: '임신 4주차는 마지막 생리 시작일 기준 약 28일째에 해당합니다. 수정란이 자궁 내막에 착상을 완료하고 배아가 형성되기 시작하는 단계입니다. 사당역 연세365산부인과에서는 초음파로 자궁내임신 여부와 주수를 정확히 확인해 드립니다.',
        },
        {
          type: 'infobox',
          content: '핵심 요약: 임신 4주차 증상 — 입덧·가슴 압통·피로감·빈뇨·착상혈 | 개인차 큼 (무증상도 정상) | 테스트기 양성 후 즉시 산부인과 방문 권장 | 02-585-3650',
        },
        {
          type: 'checklist',
          title: '임신 4주차 주요 증상 체크리스트',
          items: [
            '생리 예정일이 지나도 생리가 없어요',
            '가슴이 평소보다 더 예민하거나 통증이 있어요',
            '이유 없이 피로하고 졸려요',
            '소변이 자주 마렵거나 잔뇨감이 있어요',
            '메스꺼움 또는 특정 냄새에 민감해졌어요',
            '소량의 핑크·갈색 분비물이 있었어요 (착상혈)',
          ],
        },
        {
          type: 'table',
          title: '임신 초기 증상 시작 시기',
          headers: ['증상', '보통 시작 시기', '지속 기간'],
          rows: [
            ['착상혈', '임신 3~4주', '1~3일'],
            ['가슴 압통', '임신 4~5주', '1기 내내'],
            ['입덧·메스꺼움', '임신 5~6주', '12~14주까지'],
            ['피로감', '임신 4주~', '임신 중 지속'],
            ['빈뇨', '임신 6~8주~', '임신 중 지속'],
          ],
        },
        {
          type: 'steps',
          title: '임신 확인 후 해야 할 것',
          steps: [
            { n: '1', title: '산부인과 방문', desc: '임신 테스트기 양성 즉시 산부인과 방문. 자궁외임신 배제를 위한 초음파 검사 필수.' },
            { n: '2', title: '엽산 복용 시작', desc: '엽산 400~800mcg 즉시 복용 시작. 임신 12주까지 복용 권장.' },
            { n: '3', title: '생활습관 교정', desc: '음주·흡연 즉시 중단, 카페인 하루 200mg 이하 제한.' },
            { n: '4', title: '정기 검진 일정 확정', desc: '임신 초기 검진 일정(8주, 12주) 예약. 연세365산부인과 02-585-3650.' },
          ],
        },
        {
          type: 'warnbox',
          content: '즉시 내원 필요 증상: 심한 하복부 통증(자궁외임신 의심), 선홍색 출혈, 극심한 구토, 38도 이상 발열. 사당역 연세365산부인과 02-585-3650.',
        },
      ],
      relatedSlugs: ['morning-after-pill-guide'],
    },
    {
      slug: 'morning-after-pill-guide',
      category: 'contraception',
      title: '사후피임약 복용법·효과·부작용 완전 정리 [2025년]',
      description: '사후피임약 복용 시간, 가격, 효과, 부작용을 2025년 기준으로 정리했습니다. 관계 후 72시간 내 복용 방법을 사당역 연세365산부인과 전문의가 안내합니다.',
      keywords: ['사후피임약', '사후피임약복용법', '사후피임약효과', '사후피임약부작용', '사후피임약가격', '사당역산부인과피임'],
      lastModified: '2025-05-08',
      faq: [
        {
          q: '사후피임약은 관계 후 몇 시간 안에 먹어야 하나요?',
          a: '사후피임약은 관계 후 72시간(3일) 이내에 복용해야 합니다. 24시간 이내 복용 시 약 95%, 48시간 이내 약 85%, 72시간 이내 약 58~75%의 피임 효과를 보입니다.',
        },
        {
          q: '사후피임약 가격이 얼마인가요?',
          a: '진료비 포함 보통 3~6만 원 수준이며, 건강보험이 적용되지 않는 비급여 항목입니다. 산부인과에서 처방받아야 합니다.',
        },
        {
          q: '사후피임약을 먹으면 생리가 늦어지나요?',
          a: '네, 고용량 호르몬으로 인해 생리 주기가 빨라지거나 늦어질 수 있습니다. 복용 후 3~4주 내에 생리가 없으면 임신 여부를 확인하는 것이 좋습니다.',
        },
        {
          q: '사후피임약을 자주 먹어도 되나요?',
          a: '사후피임약은 응급 상황에서만 사용해야 합니다. 일반 경구피임약보다 호르몬 용량이 10~20배 높아 자주 사용하면 생리불순, 구역감, 두통 등 부작용이 심해집니다.',
        },
      ],
      sections: [
        {
          type: 'text',
          title: '사후피임약이란 무엇인가요?',
          content: '사후피임약은 피임에 실패했거나 피임을 하지 않은 성관계 후 임신을 예방하기 위해 복용하는 응급 피임약입니다. 레보노르게스트렐 성분이 배란을 억제하거나 지연시키는 방식으로 작용합니다. 국내에서는 의사 처방이 필요한 전문의약품으로 사당역 연세365산부인과에서 당일 처방받을 수 있습니다.',
        },
        {
          type: 'table',
          title: '복용 시간별 사후피임약 효과',
          headers: ['복용 시간', '피임 효과', '권장 여부'],
          rows: [
            ['24시간 이내', '약 95%', '가장 권장'],
            ['24~48시간', '약 85%', '권장'],
            ['48~72시간', '약 58~75%', '가능한 빨리'],
            ['72시간 초과', '효과 급격히 감소', '비권장'],
          ],
        },
        {
          type: 'warnbox',
          content: '사후피임약은 일상적인 피임 수단이 아닙니다. 이미 착상이 완료된 임신에는 효과가 없으며, 성병을 예방하지 않습니다. 월 2회 이상 복용 시 반드시 전문의 상담을 받으세요.',
        },
      ],
      relatedSlugs: ['4weeks-symptoms'],
    },
    {
      slug: 'uterine-fibroid-symptoms',
      category: 'gynecology',
      title: '자궁근종 초기 증상 7가지 — 수술 없이 치료 가능한가요?',
      description: '자궁근종 초기 증상이 궁금하신가요? 생리과다·생리통·빈뇨 등 주요 증상과 비수술 치료(하이푸) 가능 여부를 사당역 연세365산부인과 전문의가 안내합니다.',
      keywords: ['자궁근종초기증상', '자궁근종증상', '자궁근종치료', '자궁근종하이푸', '자궁근종비수술', '사당역자궁근종'],
      lastModified: '2025-05-08',
      faq: [
        {
          q: '자궁근종 초기 증상은 어떤 것들이 있나요?',
          a: '자궁근종 초기에는 생리량 증가, 생리통 심화, 생리 기간 연장(7일 이상), 아랫배 압박감, 빈뇨 등이 나타날 수 있습니다. 정기 초음파 검진이 중요합니다.',
        },
        {
          q: '자궁근종은 수술 없이 치료할 수 있나요?',
          a: '3cm 미만의 소형 근종은 경과 관찰만으로 관리 가능합니다. 5~10cm 크기는 하이푸(HIFU) 비수술 치료가 가능합니다. 연세365산부인과(02-585-3650)에서 가능 여부를 확인해 드립니다.',
        },
        {
          q: '자궁근종이 있으면 임신이 안 되나요?',
          a: '자궁근종이 있어도 대부분 자연임신이 가능합니다. 다만 점막하근종이나 자궁강 변형을 유발하는 근종은 착상을 방해할 수 있으므로 임신 계획이 있다면 전문의 상담을 권장합니다.',
        },
      ],
      sections: [
        {
          type: 'checklist',
          title: '자궁근종 의심 증상 체크리스트',
          items: [
            '생리량이 갑자기 많아졌어요',
            '생리통이 이전보다 심해졌어요',
            '생리 기간이 7일 이상으로 길어졌어요',
            '아랫배나 허리에 묵직한 통증이 있어요',
            '소변이 자주 마렵거나 잔뇨감이 있어요',
            '빈혈 증상(어지러움, 피로)이 생겼어요',
          ],
        },
        {
          type: 'infobox',
          content: '핵심 요약: 자궁근종은 가임기 여성 20~30%에서 발견 | 3cm 미만은 경과 관찰 | 5~10cm는 하이푸 비수술 가능 | 정기 초음파 검진 필수 | 사당역 연세365산부인과 02-585-3650',
        },
        {
          type: 'table',
          title: '자궁근종 크기별 치료 방법',
          headers: ['크기', '주요 치료', '비고'],
          rows: [
            ['3cm 미만', '경과 관찰', '증상 없으면 치료 불필요'],
            ['3~5cm', '약물 또는 경과 관찰', '증상에 따라 결정'],
            ['5~10cm', '하이푸(HIFU) 가능', '비절개 비수술'],
            ['10cm 이상', '수술 검토', '복강경 또는 개복'],
          ],
        },
      ],
      relatedSlugs: ['4weeks-symptoms'],
    },
  ]
  
  export function getArticleBySlug(category: string, slug: string): HealthArticle | undefined {
    return HEALTH_ARTICLES.find(a => a.category === category && a.slug === slug)
  }
  
  export function getArticlesByCategory(category: CategoryKey): HealthArticle[] {
    return HEALTH_ARTICLES.filter(a => a.category === category)
  }
  
  export function getAllArticlePaths() {
    return HEALTH_ARTICLES.map(a => ({ category: a.category, slug: a.slug }))
  }