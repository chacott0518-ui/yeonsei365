import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '산부인과 처음 가는 법 완전 가이드 2026 | 예약·준비물·진료순서 | 연세365산부인과',
  description: '산부인과 처음 방문이 두려운 분들을 위한 완전 가이드. 예약 방법, 준비물, 진료 순서, 비용, 자주 묻는 질문까지 사당역 연세365산부인과가 정리했습니다.',
  keywords: ['산부인과처음', '산부인과가는법', '미혼산부인과', '산부인과준비물', '사당역산부인과', '산부인과진료순서'],
  alternates: { canonical: 'https://www.yeonsei365.com/womens-clinic/first-visit' },
  openGraph: {
    title: '산부인과 처음 가는 법 완전 가이드 2026 | 연세365산부인과',
    description: '예약부터 진료까지 처음 방문자를 위한 완전 가이드',
    url: 'https://www.yeonsei365.com/womens-clinic/first-visit',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '산부인과 처음 가는 법 완전 가이드 2026 | 예약·준비물·진료순서 | 연세365산부인과',
    description: '산부인과 처음 방문이 두려운 분들을 위한 완전 가이드. 예약 방법, 준비물, 진료 순서, 비용, 자주 묻는 질문까지 사당역 연세365산부인과가 정리했습니다.',
  },
}

const faqData = [
  {
    q: '산부인과 처음 방문할 때 무엇을 준비해야 하나요?',
    a: '신분증(모바일 신분증 가능)과 마지막 생리 시작일, 생리 주기, 기간을 미리 메모해두시면 충분합니다. 복용 중인 약이 있다면 약 이름도 간단히 적어오시면 좋아요. 특별히 복잡한 준비물은 없습니다. 굳이 공복으로 올 필요도 없고, 편안한 복장으로 오시면 됩니다. 가장 중요한 것은 현재 불편한 증상을 솔직하게 말할 준비를 하고 오시는 것입니다. 진료실에서 부끄럽거나 말하기 어려운 증상도 의료진은 매일 듣는 내용이라 전혀 눈치 보지 않으셔도 됩니다.',
  },
  {
    q: '미혼 여성도 산부인과에 가도 되나요?',
    a: '당연히 됩니다. 산부인과는 결혼 여부, 나이, 성 경험 여부와 완전히 무관하게 모든 여성이 이용할 수 있는 곳입니다. 자궁경부암 검진은 만 20세 이상 여성이라면 2년마다 국가건강검진 항목으로 무료 수검이 가능합니다. 오히려 젊은 나이부터 정기적으로 방문해 기저 상태를 파악해두는 것이 향후 건강 관리에 훨씬 유리합니다. 처음 방문할 때 "처음 왔어요"라고 말씀해주시면 의료진이 더 세심하게 안내해드립니다. 혼자 오시는 분들도 많으니 전혀 걱정하지 않으셔도 됩니다.',
  },
  {
    q: '생리 중에도 산부인과에 갈 수 있나요?',
    a: '응급 상황이나 급한 증상이 있다면 생리 중에도 방문 가능합니다. 다만 자궁경부암 검사(PAP smear)나 초음파 검사는 생리가 끝난 후 3~5일 이후에 받으시면 더 정확한 결과를 얻을 수 있습니다. 생리 중 과다출혈, 심한 복통, 발열 등 이상 증상이 동반된다면 생리 중이더라도 반드시 방문하는 것이 좋습니다. 일반 상담이나 피임 상담은 생리 기간과 무관하게 언제든 가능합니다. 방문 전 전화로 증상을 말씀하시면 적절한 방문 시기를 안내받으실 수 있습니다.',
  },
  {
    q: '자궁경부암 검사는 아프고 시간이 오래 걸리나요?',
    a: '자궁경부암 검사(PAP smear)는 자궁경부 세포를 면봉 모양의 기구로 살짝 채취하는 검사로, 대부분 2~3분 이내에 끝납니다. 통증보다는 약간의 불쾌감이나 이물감을 느끼는 분들이 있지만 심한 통증을 느끼는 경우는 드뭅니다. 검사 후 소량의 출혈이 있을 수 있으나 하루 이틀 내에 자연적으로 사라집니다. 산부인과 초음파 검사 역시 통증 없이 10분 내외로 진행됩니다. 처음이라 긴장될 수 있는데, 의료진에게 처음이라고 미리 말씀해주시면 더 천천히, 편안하게 진행해드립니다.',
  },
  {
    q: '사당역 연세365산부인과 진료비는 어느 정도인가요?',
    a: '기본 진찰료는 건강보험이 적용되어 1~2만원 수준입니다. 국가건강검진 대상자(만 20세 이상, 2년 주기)라면 자궁경부암 검사는 무료로 받으실 수 있습니다. 초음파 검사나 질염 검사 등 추가 항목은 건강보험 적용 여부에 따라 달라지며, 비급여 항목은 방문 전 전화로 미리 확인하시면 됩니다. 연세365산부인과는 진료 전에 예상 비용을 투명하게 안내해드리며, 현금과 카드 모두 동일가로 결제 가능합니다. 비용이 걱정된다면 접수 시 항목별로 여쭤보시면 친절하게 안내해드립니다.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const checkList = [
  '생리 주기가 불규칙하거나 갑자기 바뀐 경우',
  '생리통이 심해서 진통제 없이는 버티기 어려운 경우',
  '자궁경부암 검진을 한 번도 받지 않은 경우 (만 20세 이상)',
  '냉·분비물 이상, 가려움, 이상한 냄새 등 질염 증상이 의심될 때',
  '피임 방법에 대해 전문가와 제대로 상담받고 싶을 때',
  '임신 계획이 있거나 임신 여부가 걱정될 때',
  '마지막 산부인과 검진으로부터 1년 이상 지난 경우',
  '하복부 통증이나 묵직한 느낌이 반복될 때',
  '성관계 후 출혈이 있거나 통증이 동반될 때',
  '호르몬 피임약, 미레나, 임플라논 등 피임 시술을 고려 중인 경우',
]

const steps = [
  {
    num: '01',
    title: '예약',
    desc: '전화(02-585-3650) 또는 네이버 예약으로 사전 예약. 처음 방문이라면 "초진"으로 선택하세요. 예약 없이도 방문 가능하지만 대기 시간이 길어질 수 있으니 가급적 예약을 권장합니다.',
  },
  {
    num: '02',
    title: '내원 및 접수',
    desc: '신분증을 지참하고 내원합니다. 접수 창구에서 방문 목적을 간단히 말씀하시면 안내해드립니다. 처음 방문이라면 "초진이에요"라고 말씀해주시면 됩니다.',
  },
  {
    num: '03',
    title: '문진표 작성',
    desc: '마지막 생리 시작일, 주기, 기간, 현재 증상 등을 간단히 적습니다. 어렵게 생각하지 않으셔도 돼요. 모르는 항목은 빈칸으로 두셔도 됩니다.',
  },
  {
    num: '04',
    title: '대기',
    desc: '예약자 우선으로 진료가 진행됩니다. 예약 시 평균 5~15분, 예약 없이 방문 시 20~40분 내외 대기할 수 있습니다.',
  },
  {
    num: '05',
    title: '의사 상담',
    desc: '진료실에 들어가면 "어떻게 오셨나요?"로 시작합니다. 현재 불편한 증상, 생리 주기 변화, 피임 상담 등 본인이 궁금한 내용을 편하게 말씀하시면 됩니다. 의료진은 모든 증상을 비밀로 보호하며 판단 없이 들어드립니다.',
  },
  {
    num: '06',
    title: '검사',
    desc: '상담 결과에 따라 필요한 검사가 진행됩니다. 자궁경부암 검사, 초음파 검사, 질염 검사 등이 있으며 필요한 항목만 선택적으로 받을 수 있습니다.',
  },
  {
    num: '07',
    title: '결과 안내',
    desc: '대부분의 기본 검사는 당일 결과를 바로 안내해드립니다. 세포 검사 등 일부 항목은 결과가 나오는 데 수일이 소요될 수 있으며, 이 경우 전화 또는 재방문으로 확인합니다.',
  },
  {
    num: '08',
    title: '수납 후 귀가',
    desc: '처방전이 있는 경우 약국에서 수령합니다. 궁금한 점은 수납 전에 언제든 다시 질문할 수 있습니다.',
  },
]

const examItems = [
  {
    title: '자궁경부암 검사 (PAP smear)',
    badge: '국가검진 무료',
    badgeColor: '#2d7a2d',
    badgeBg: '#e8f4e8',
    desc: '자궁경부 세포를 면봉 모양 기구로 살짝 채취해 이상 세포 여부를 확인합니다. 검사 시간은 2~3분 내외로 짧고, 통증보다는 약간의 불쾌감 정도입니다. 만 20세 이상이라면 국가건강검진 대상으로 2년마다 무료로 받을 수 있습니다.',
  },
  {
    title: '골반 초음파 검사',
    badge: '당일 결과',
    badgeColor: '#185FA5',
    badgeBg: '#E6F1FB',
    desc: '자궁과 난소의 크기, 모양, 위치를 확인합니다. 자궁근종, 난소 낭종, 자궁내막증 등 여성 질환을 조기에 발견하는 데 중요한 검사입니다. 통증 없이 10분 내외로 진행되며 결과를 당일 바로 확인할 수 있습니다.',
  },
  {
    title: '질염 및 성병 검사',
    badge: '결과 2~3일',
    badgeColor: '#854F0B',
    badgeBg: '#FAEEDA',
    desc: '분비물 이상, 가려움, 냄새 등 증상이 있을 때 시행합니다. 세균성 질염, 칸디다 질염, 트리코모나스 등 원인균을 정확히 파악해 맞춤형 치료를 받을 수 있습니다. 결과는 2~3일 내 확인 가능하며 전화로도 안내받을 수 있습니다.',
  },
  {
    title: '호르몬 검사',
    badge: '혈액 채취',
    badgeColor: '#993556',
    badgeBg: '#FBEAF0',
    desc: '생리 불순, 다낭성 난소 증후군(PCOS) 의심, 갱년기 증상 확인 등에 활용됩니다. 혈액 검사를 통해 여성 호르몬(에스트로겐, 프로게스테론), 갑상선 호르몬, AMH(난소 나이) 등을 확인합니다. 결과에 따라 적절한 치료 방향을 안내받을 수 있습니다.',
  },
  {
    title: '자궁경부암 예방백신 (HPV 백신)',
    badge: '예방 접종',
    badgeColor: '#0F6E56',
    badgeBg: '#E1F5EE',
    desc: '자궁경부암의 주요 원인인 인유두종바이러스(HPV) 감염을 예방하는 백신입니다. 가다실9가 기준으로 총 2~3회 접종이 필요하며, 만 12세는 국가 무료 접종 대상입니다. 성인도 접종 가능하며, 이미 감염된 타입 외의 다른 타입에 대한 예방 효과가 있습니다.',
  },
]

export default function FirstVisitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: 'clamp(80px,12vw,110px) clamp(16px,5vw,24px) 80px',
        fontFamily: 'Pretendard, -apple-system, sans-serif',
        color: '#1A0A10',
        lineHeight: 1.85,
      }}>

        {/* 브레드크럼 */}
        <nav style={{ fontSize: 'clamp(11px,2.5vw,13px)', color: '#AA5566', marginBottom: '20px' }}>
          <a href="/" style={{ color: '#AA5566', textDecoration: 'none' }}>홈</a>
          {' > '}
          <a href="/#clinics" style={{ color: '#AA5566', textDecoration: 'none' }}>여성검진클리닉</a>
          {' > '}
          <span>처음 방문 안내</span>
        </nav>

        {/* 제목 */}
        <h1 style={{
          fontSize: 'clamp(22px,5vw,30px)',
          fontWeight: 900,
          lineHeight: 1.35,
          marginBottom: '10px',
          wordBreak: 'keep-all',
        }}>
          산부인과 처음 가는 법 완전 가이드 2026<br />
          <span style={{ color: '#E8305A' }}>예약 · 준비물 · 진료순서 · 비용 총정리</span>
        </h1>
        <p style={{ fontSize: 'clamp(11px,2.5vw,13px)', color: '#999', marginBottom: '28px' }}>
          연세365산부인과 · 2026년 최신 업데이트
        </p>

        {/* 대표 이미지 자리 */}
        <div style={{
          marginBottom: '36px',
          borderRadius: '14px',
          overflow: 'hidden',
          background: '#FFF5F7',
          height: 'clamp(160px,35vw,260px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #FFE0E8',
        }}>
          <p style={{ color: '#E8305A', fontWeight: 700, fontSize: 'clamp(13px,3vw,15px)' }}>
            🏥 사당역 연세365산부인과의원
          </p>
        </div>

        {/* 도입부 */}
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          "산부인과는 결혼한 분들만 가는 곳 아닌가요?" "처음인데 무슨 말을 해야 할지 모르겠어요." "혼자 가도 괜찮을까요?" 이런 걱정 때문에 산부인과 방문을 미루고 또 미루는 분들이 정말 많습니다. 하지만 산부인과는 모든 연령대의 여성이 정기적으로 방문해야 하는 여성 건강의 가장 기본적인 공간입니다.
        </p>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          증상이 없어도, 미혼이어도, 나이가 어려도 산부인과는 언제든 방문할 수 있습니다. 많은 분들이 첫 방문 후 "생각보다 훨씬 편안하고 아무렇지 않았어요"라고 말씀하십니다. 이 글에서는 처음 방문하는 분들이 가장 궁금해하는 것들, 예약 방법부터 진료실 안에서 일어나는 일까지 하나하나 안내해드릴게요.
        </p>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '40px', wordBreak: 'keep-all' }}>
          사당역 연세365산부인과의원은 처음 방문하시는 분들이 편안하게 첫 방문의 문턱을 낮출 수 있도록 세심한 환경을 갖추고 있습니다. 이 가이드를 읽고 나시면 오늘 바로 예약하실 수 있을 거예요.
        </p>

        {/* 목차 */}
        <div style={{
          background: '#FFF5F7',
          borderRadius: '14px',
          padding: 'clamp(16px,4vw,24px)',
          marginBottom: '44px',
          border: '1px solid #FFE0E8',
        }}>
          <p style={{ fontWeight: 800, color: '#E8305A', marginBottom: '12px', fontSize: 'clamp(13px,3vw,15px)' }}>
            📋 목차
          </p>
          {[
            '1. 이런 분들은 꼭 산부인과에 가세요',
            '2. 예약 방법',
            '3. 방문 전 준비물',
            '4. 진료 순서 8단계',
            '5. 진료실에서 받는 검사 종류',
            '6. 미혼 여성도 산부인과 괜찮나요?',
            '7. 비용 안내',
            '8. 자주 묻는 질문 FAQ',
          ].map((item) => (
            <p key={item} style={{ margin: '5px 0', fontSize: 'clamp(12px,2.8vw,14px)', color: '#554455' }}>
              · {item}
            </p>
          ))}
        </div>

        {/* 섹션1 — 가야 하는 경우 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          1. 이런 분들은 꼭 산부인과에 가세요
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '16px', wordBreak: 'keep-all' }}>
          많은 분들이 "아프면 가야지"라고 생각하지만 산부인과는 증상이 없어도 정기적으로 방문해야 하는 곳입니다. 여성 질환은 초기에는 무증상인 경우가 많아 정기 검진을 통한 조기 발견이 매우 중요합니다. 아래 항목 중 하나라도 해당된다면 가까운 시일 내에 방문을 권장합니다.
        </p>
        <div style={{ marginBottom: '40px' }}>
          {checkList.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start',
              marginBottom: '8px',
              padding: 'clamp(10px,2.5vw,12px) clamp(12px,3vw,16px)',
              background: '#FFFAFB',
              borderRadius: '10px',
              border: '1px solid #FFE0E8',
              fontSize: 'clamp(13px,2.8vw,15px)',
              color: '#554455',
              wordBreak: 'keep-all',
            }}>
              <span style={{ color: '#E8305A', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✔</span>
              {item}
            </div>
          ))}
        </div>

        {/* 섹션2 — 예약 방법 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          2. 예약 방법
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          연세365산부인과의원은 전화 예약과 온라인 예약이 모두 가능합니다. 처음 방문이라면 예약 시 "초진이에요" 또는 "처음 방문이에요"라고 말씀해주시면 충분한 상담 시간을 확보해드립니다. 예약 없이 방문하셔도 진료는 가능하지만, 대기 시간이 길어질 수 있어 가급적 사전 예약을 권장합니다.
        </p>
        <div style={{
          background: '#FFF0F4',
          borderRadius: '12px',
          padding: 'clamp(14px,3.5vw,20px)',
          marginBottom: '40px',
          border: '1px solid #FFD6E4',
          fontSize: 'clamp(13px,2.8vw,14px)',
          color: '#994466',
          lineHeight: 1.9,
          wordBreak: 'keep-all',
        }}>
          📞 전화 예약: <strong>02-585-3650</strong><br />
          💬 카카오톡: 연세365산부인과 채널 검색 후 상담<br />
          🗺 네이버: "연세365산부인과의원" 검색 → 예약 탭 클릭<br />
          📍 위치: 서울 동작구 사당역 4번 출구 도보 이용 가능<br />
          🕐 진료시간: 평일 오전 9시 ~ 오후 6시 (내원 전 전화 확인 권장)
        </div>

        {/* 섹션3 — 준비물 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          3. 방문 전 준비물
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          처음 방문이라고 해서 특별히 복잡한 준비물이 있는 것은 아닙니다. 아래 항목만 챙겨오시면 충분합니다. 렌즈를 착용하고 계신다면 안경으로 바꿔 오시는 것이 좋고, 편한 복장으로 오시면 됩니다.
        </p>
        {[
          { icon: '🪪', title: '신분증', desc: '주민등록증, 운전면허증, 모바일 신분증 모두 가능합니다. 건강보험증이 있으면 함께 지참하시면 좋아요.' },
          { icon: '📅', title: '마지막 생리 시작일', desc: '마지막 생리가 시작된 날짜와 평소 생리 주기(며칠 간격), 생리 기간(며칠 동안)을 미리 메모해두세요. 정확한 진단에 중요한 정보입니다.' },
          { icon: '💊', title: '복용 중인 약 (있는 경우)', desc: '현재 복용 중인 약이 있다면 약 이름을 메모하거나 약 봉투를 가져오세요. 피임약, 항생제, 영양제도 포함됩니다.' },
          { icon: '📝', title: '증상 메모 (있는 경우)', desc: '증상이 언제부터 시작됐는지, 어떤 상황에서 심해지는지, 얼마나 자주 있는지 간단히 메모해오시면 더 정확한 진료에 도움이 됩니다.' },
        ].map(({ icon, title, desc }) => (
          <div key={title} style={{
            display: 'flex',
            gap: 'clamp(12px,3vw,16px)',
            marginBottom: '10px',
            padding: 'clamp(12px,3vw,16px)',
            background: '#FFFAFB',
            borderRadius: '12px',
            border: '1px solid #FFE0E8',
          }}>
            <span style={{ fontSize: 'clamp(18px,4vw,22px)', flexShrink: 0 }}>{icon}</span>
            <div>
              <p style={{ fontWeight: 700, fontSize: 'clamp(13px,3vw,15px)', marginBottom: '4px', color: '#1A0A10' }}>{title}</p>
              <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', color: '#554455', margin: 0, wordBreak: 'keep-all' }}>{desc}</p>
            </div>
          </div>
        ))}
        <div style={{ height: '24px' }} />

        {/* 섹션4 — 진료 순서 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          4. 진료 순서 8단계
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '20px', wordBreak: 'keep-all' }}>
          처음 방문하면 어떤 순서로 진행되는지 미리 알고 가면 훨씬 편안합니다. 전체 소요 시간은 예약 여부와 검사 항목에 따라 다르지만 보통 1~1.5시간 내외입니다.
        </p>
        <div style={{ marginBottom: '40px' }}>
          {steps.map(({ num, title, desc }) => (
            <div key={num} style={{
              display: 'flex',
              gap: 'clamp(12px,3vw,16px)',
              marginBottom: '14px',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: 'clamp(34px,7vw,42px)',
                height: 'clamp(34px,7vw,42px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg,#FF8FAB,#E8305A)',
                color: '#fff',
                fontWeight: 900,
                fontSize: 'clamp(11px,2.5vw,13px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                {num}
              </div>
              <div style={{
                flex: 1,
                padding: 'clamp(10px,2.5vw,14px) clamp(12px,3vw,16px)',
                background: '#FFFAFB',
                borderRadius: '10px',
                border: '1px solid #FFE0E8',
              }}>
                <p style={{ fontWeight: 700, fontSize: 'clamp(13px,3vw,15px)', marginBottom: '5px', color: '#1A0A10' }}>
                  {title}
                </p>
                <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', color: '#554455', margin: 0, wordBreak: 'keep-all' }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 섹션5 — 검사 종류 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          5. 진료실에서 받는 검사 종류
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '20px', wordBreak: 'keep-all' }}>
          모든 검사를 한 번에 다 받을 필요는 없습니다. 증상과 상담 결과에 따라 필요한 검사만 선택적으로 받을 수 있습니다. 검사 전에 항목별 목적과 비용을 미리 안내해드리므로 원치 않는 검사는 거부하셔도 됩니다.
        </p>
        <div style={{ marginBottom: '40px' }}>
          {examItems.map(({ title, badge, badgeColor, badgeBg, desc }) => (
            <div key={title} style={{
              marginBottom: '12px',
              padding: 'clamp(14px,3.5vw,18px) clamp(14px,4vw,20px)',
              background: '#FFFAFB',
              borderRadius: '12px',
              border: '1px solid #FFE0E8',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <p style={{ fontWeight: 700, fontSize: 'clamp(13px,3vw,15px)', color: '#1A0A10', margin: 0 }}>{title}</p>
                <span style={{
                  background: badgeBg,
                  color: badgeColor,
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '20px',
                  whiteSpace: 'nowrap',
                }}>
                  {badge}
                </span>
              </div>
              <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', color: '#554455', margin: 0, wordBreak: 'keep-all' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* 섹션6 — 미혼 여성 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          6. 미혼 여성도 산부인과 괜찮나요?
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          네, 당연합니다. 산부인과는 결혼 여부, 나이, 성 경험 유무와 완전히 무관하게 모든 여성이 이용할 수 있는 의료 기관입니다. "나는 아직 이른 것 같아서"라는 생각으로 방문을 미루다가 이미 진행된 상태에서 발견되는 경우가 많습니다.
        </p>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          자궁경부암 검진은 만 20세 이상 여성이라면 2년마다 국가건강검진 항목으로 무료로 받을 수 있습니다. 생리 불순, 생리통, 질염 등은 나이와 무관하게 발생하므로 증상이 있다면 빠른 방문이 중요합니다.
        </p>
        <div style={{
          background: '#FFF5F7',
          borderRadius: '12px',
          padding: 'clamp(14px,3.5vw,20px)',
          marginBottom: '40px',
          border: '1px solid #FFE0E8',
          fontSize: 'clamp(13px,2.8vw,15px)',
          color: '#554455',
          wordBreak: 'keep-all',
          lineHeight: 1.85,
        }}>
          💡 처음 방문할 때 <strong>"처음 왔어요, 많이 긴장돼요"</strong>라고 말씀해주시면 의료진이 더 천천히, 더 세심하게 안내해드립니다.
        </div>

        {/* 섹션7 — 비용 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          7. 비용 안내
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          산부인과 비용은 항목에 따라 다르지만 생각보다 부담스럽지 않습니다. 건강보험이 적용되는 항목이 많고, 국가건강검진 대상자라면 기본 검사는 무료입니다. 비용이 걱정된다면 방문 전 전화로 미리 확인하시거나, 접수 시 항목별 비용을 물어보시면 됩니다.
        </p>
        <div style={{ marginBottom: '40px' }}>
          {[
            { label: '기본 진찰료', value: '건강보험 적용 시 1~2만원 수준', note: '' },
            { label: '자궁경부암 검사', value: '국가검진 대상자 무료', note: '만 20세 이상, 2년 주기' },
            { label: '골반 초음파', value: '건강보험 적용 여부에 따라 상이', note: '비급여 시 5~10만원 수준' },
            { label: '질염 검사', value: '항목에 따라 1~5만원', note: '균 종류에 따라 다름' },
            { label: '호르몬 검사', value: '항목에 따라 3~8만원', note: '혈액 채취 검사' },
          ].map(({ label, value, note }, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              padding: 'clamp(10px,2.5vw,14px) clamp(14px,4vw,18px)',
              background: i % 2 === 0 ? '#FFFAFB' : '#fff',
              borderRadius: '8px',
              border: '1px solid #FFE0E8',
              marginBottom: '6px',
              gap: '12px',
              flexWrap: 'wrap',
            }}>
              <span style={{ fontWeight: 700, fontSize: 'clamp(12px,2.8vw,14px)', color: '#1A0A10', flexShrink: 0 }}>{label}</span>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', color: '#E8305A', fontWeight: 700, margin: 0 }}>{value}</p>
                {note && <p style={{ fontSize: '11px', color: '#999', margin: '2px 0 0' }}>{note}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* 섹션8 — FAQ */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          8. 자주 묻는 질문 FAQ
        </h2>
        <div style={{ marginBottom: '40px' }}>
          {faqData.map((item, i) => (
            <div key={i} style={{
              marginBottom: '12px',
              border: '1px solid #FFE0E8',
              borderRadius: '12px',
              overflow: 'hidden',
            }}>
              <div style={{
                background: '#FFF5F7',
                padding: 'clamp(12px,3vw,16px) clamp(14px,4vw,18px)',
                fontWeight: 700,
                fontSize: 'clamp(12px,2.8vw,14px)',
                color: '#E8305A',
                wordBreak: 'keep-all',
              }}>
                Q. {item.q}
              </div>
              <div style={{
                padding: 'clamp(12px,3vw,16px) clamp(14px,4vw,18px)',
                fontSize: 'clamp(12px,2.8vw,14px)',
                color: '#554455',
                lineHeight: 1.85,
                wordBreak: 'keep-all',
              }}>
                A. {item.a}
              </div>
            </div>
          ))}
        </div>

        {/* 관련 글 */}
        <div style={{
          padding: 'clamp(14px,4vw,20px)',
          background: '#FFFAFB',
          borderRadius: '12px',
          border: '1px solid #FFE0E8',
          marginBottom: '36px',
        }}>
          <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', fontWeight: 700, color: '#994466', marginBottom: '10px' }}>
            함께 읽으면 좋은 글
          </p>
          <a href="/blog/hospital-review" style={{ display: 'block', color: '#E8305A', fontSize: 'clamp(12px,2.8vw,14px)', textDecoration: 'none', marginBottom: '8px' }}>
            → 사당역 산부인과 직접 다녀온 솔직 후기
          </a>
          <a href="/womens-clinic/menstrual-pain" style={{ display: 'block', color: '#E8305A', fontSize: 'clamp(12px,2.8vw,14px)', textDecoration: 'none' }}>
            → 생리통 참으면 안 되는 이유 5가지
          </a>
        </div>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)',
          borderRadius: '20px',
          padding: 'clamp(20px,5vw,32px) clamp(16px,5vw,28px)',
          textAlign: 'center',
        }}>
          <p style={{ color: '#fff', fontSize: 'clamp(16px,4vw,20px)', fontWeight: 900, marginBottom: '6px', wordBreak: 'keep-all' }}>
            첫 방문도 편안하게 — 연세365산부인과
          </p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(11px,2.5vw,13px)', marginBottom: '20px' }}>
            📍 사당역 4번출구 · 1:1 비밀보장 · 당일 예약 가능
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            
              <a href="http://pf.kakao.com/_TpaBj/chat"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#FEE500',
                color: '#3B1B1B',
                padding: 'clamp(10px,2.5vw,13px) clamp(18px,5vw,26px)',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: 'clamp(12px,3vw,14px)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              💬 카카오톡 상담
            </a>
            
              <a href="tel:02-585-3650"
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: '#fff',
                padding: 'clamp(10px,2.5vw,13px) clamp(18px,5vw,26px)',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: 'clamp(12px,3vw,14px)',
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.4)',
                whiteSpace: 'nowrap',
              }}
            >
              📞 02-585-3650
            </a>
          </div>
        </div>

      </div>
    </>
  )
}