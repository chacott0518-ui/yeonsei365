import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '생리통 참으면 안 되는 이유 5가지 2026 | 자궁내막증·근종 신호 | 연세365산부인과',
  description: '매달 진통제로 버티고 계신가요? 생리통을 방치하면 안 되는 의학적 이유 5가지와 산부인과를 가야 할 신호를 사당역 연세365산부인과가 정리했습니다.',
  keywords: ['생리통심할때', '생리통산부인과', '자궁내막증증상', '생리불순', '사당역산부인과', '생리통원인', '자궁근종증상', '생리통치료'],
  alternates: { canonical: 'https://yeonsei365.vercel.app/womens-clinic/menstrual-pain' },
  openGraph: {
    title: '생리통 참으면 안 되는 이유 5가지 2026 | 연세365산부인과',
    description: '매달 진통제로 버티고 있다면 읽어보세요. 생리통 방치가 위험한 이유.',
    url: 'https://yeonsei365.vercel.app/womens-clinic/menstrual-pain',
    images: [{ url: 'https://yeonsei365.vercel.app/og-image.jpg', width: 1200, height: 630 }],
  },
}

const faqData = [
  {
    q: '생리통이 심하면 무조건 산부인과에 가야 하나요?',
    a: '진통제를 복용해도 통증이 잘 조절되지 않거나, 진통제 용량을 점점 늘려야 하는 상황이라면 반드시 산부인과를 방문하는 것이 좋습니다. 일상생활이나 직장·학교 생활에 지장을 줄 정도의 통증이 매달 반복된다면 이는 단순한 불편함이 아니라 의학적 치료가 필요한 상태일 수 있습니다. 특히 생리 기간 외에도 하복부 통증이 지속되거나, 성관계 시 통증이 동반된다면 자궁내막증 등의 질환을 의심해봐야 합니다. 산부인과에서는 초음파 검사를 통해 자궁과 난소 상태를 확인하고 통증의 원인을 파악합니다. 적절한 치료를 받으면 생리통은 충분히 완화될 수 있으니 혼자 참지 마세요.',
  },
  {
    q: '자궁내막증이 있으면 임신이 어렵나요?',
    a: '자궁내막증은 난소와 나팔관 주변에 염증과 유착을 일으켜 난임의 원인이 될 수 있습니다. 자궁내막증 환자의 약 30~40%에서 난임이 동반되는 것으로 알려져 있습니다. 하지만 모든 자궁내막증 환자가 임신이 어려운 것은 아니며, 진행 단계와 위치에 따라 자연 임신이 가능한 경우도 많습니다. 중요한 것은 조기에 발견해 적절히 치료하고 관리하는 것입니다. 임신 계획이 있다면 전문의와 충분히 상담해 치료 방향과 임신 시기를 계획하는 것이 좋으며, 지금 임신 계획이 없더라도 미래를 위해 조기 진단과 관리가 꼭 필요합니다.',
  },
  {
    q: '생리통에 진통제를 매달 먹어도 괜찮나요?',
    a: '이부프로펜 계열의 진통제는 의료진의 지시에 따라 적절히 사용하면 비교적 안전한 약물입니다. 하지만 매달 생리 때마다 고용량을 반복 복용하는 습관은 위장 점막 손상, 속 쓰림, 소화 장애, 신장 기능에 부담을 줄 수 있습니다. 더 중요한 것은 진통제가 통증의 원인을 치료하는 것이 아니라 일시적으로 억제할 뿐이라는 점입니다. 만약 진통제 없이는 생리를 버티기 어렵다면 이는 이차성 생리통의 가능성을 시사합니다. 산부인과 상담을 통해 원인을 파악하면 호르몬 치료, 미레나 시술 등 근본적인 방법으로 통증 자체를 줄일 수 있습니다.',
  },
  {
    q: '자궁근종이 있으면 수술을 꼭 해야 하나요?',
    a: '자궁근종이 있다고 해서 무조건 수술이 필요한 것은 아닙니다. 근종의 크기, 위치, 개수, 증상의 심각도에 따라 치료 방법이 달라집니다. 증상이 없고 크기가 작은 근종은 정기적인 초음파 추적 관찰만으로도 충분한 경우가 많습니다. 반면 생리 과다 출혈, 심한 골반 통증, 방광이나 장을 압박할 정도의 크기, 난임에 영향을 주는 위치 등의 경우에는 치료가 필요합니다. 치료 방법도 수술 외에 하이푸(HIFU), 자궁동맥색전술, 호르몬 치료 등 다양한 선택지가 있으므로 전문의와 충분히 상담 후 결정하는 것이 중요합니다.',
  },
  {
    q: '생리 주기가 갑자기 불규칙해졌어요. 어떻게 해야 하나요?',
    a: '생리 주기가 갑자기 변했다면 가능한 빨리 산부인과를 방문하는 것이 좋습니다. 생리 주기 변화는 다낭성 난소 증후군(PCOS), 갑상선 기능 이상, 호르몬 불균형, 과도한 스트레스, 급격한 체중 변화 등 다양한 원인으로 발생할 수 있습니다. 21일 이하로 주기가 짧아지거나 35일 이상으로 길어진 경우, 또는 3개월 이상 생리가 없는 경우는 반드시 검진이 필요합니다. 혈액 검사와 초음파 검사를 통해 원인을 파악하면 적절한 치료로 주기를 정상화할 수 있습니다. 방치하면 난임이나 다른 건강 문제로 이어질 수 있으니 증상이 지속된다면 빠른 내원을 권장합니다.',
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

const reasons = [
  {
    num: '01',
    title: '자궁내막증을 놓칠 수 있습니다',
    body: `자궁내막증은 자궁 안에 있어야 할 내막 조직이 자궁 바깥 — 난소, 나팔관, 복막 등 — 에 퍼지는 질환으로, 극심한 생리통의 가장 흔한 원인 중 하나입니다. 문제는 외관상 아무런 이상이 없어 보여도 내부적으로 염증과 유착이 진행되고 있다는 것입니다. 초음파 검사나 복강경 검사 없이는 스스로 확인할 방법이 없습니다.

자궁내막증이 심해지면 난소에 혹(자궁내막종, 일명 초콜릿 낭종)이 생기거나, 나팔관과 난소가 유착되어 난임으로 이어질 수 있습니다. 실제로 난임 환자의 약 30~40%에서 자궁내막증이 발견됩니다. 생리 때만 아픈 것이 아니라 생리 전후로도 통증이 지속되거나, 성관계 시 통증이 동반되거나, 배변 시 골반 통증이 느껴진다면 자궁내막증을 강하게 의심해봐야 합니다.

조기에 발견할수록 치료가 쉽고 난임 예방에도 훨씬 유리합니다. 지금 임신 계획이 없더라도 미래를 위해 반드시 확인이 필요합니다.`,
    warn: '⚠️ 이런 증상이라면 의심 — 생리 전후 통증 지속 · 성관계 시 통증 · 배변 시 골반 통증',
  },
  {
    num: '02',
    title: '진통제는 원인을 치료하지 않습니다',
    body: `생리통 때마다 진통제를 복용하는 것은 통증을 일시적으로 억제할 뿐, 원인 질환을 전혀 치료하지 못합니다. 이부프로펜 계열 진통제는 적절히 사용하면 비교적 안전하지만 매달 고용량을 반복 복용하는 경우 위장 점막 자극, 속 쓰림, 소화 장애, 신장 기능 부담 등 부작용이 생길 수 있습니다.

더 큰 문제는 진통제로 증상을 억제하다 보면 원인 질환이 계속 진행된다는 점입니다. 자궁내막증, 자궁근종, 자궁선근증 같은 질환은 시간이 지날수록 악화되는 경향이 있습니다. "지금은 진통제로 버틸 수 있으니까"라는 생각으로 방치하다 몇 년 후에야 진단받으면 치료가 훨씬 복잡해집니다.

산부인과에서는 원인에 따라 호르몬 치료, 자궁내 장치(미레나) 시술, 생활습관 교정 등 통증 자체를 줄이는 근본적인 방법을 제안할 수 있습니다. 진통제 없이도 생리를 보낼 수 있도록 원인부터 찾는 것이 중요합니다.`,
    warn: null,
  },
  {
    num: '03',
    title: '생리 주기 변화는 건강 이상 신호일 수 있습니다',
    body: `생리통이 심해지면서 동시에 주기가 불규칙해졌다면 단순한 스트레스나 피로 때문만은 아닐 수 있습니다. 생리 주기는 여성 호르몬의 균형이 정상적으로 유지될 때 규칙적으로 반복됩니다. 주기가 갑자기 변했다면 그 균형이 깨졌다는 신호입니다.

다낭성 난소 증후군(PCOS)은 가임기 여성의 약 10%에서 나타나는 흔한 내분비 질환으로, 생리 불순과 함께 여드름, 다모증, 체중 증가 등이 동반되기도 합니다. 갑상선 기능 저하 또는 항진도 생리 주기에 영향을 줍니다. 이 외에도 고프로락틴혈증, 조기 난소 부전 등 다양한 원인이 있습니다.

생리 주기가 21일 이하이거나 35일 이상인 경우, 또는 최근 3개월 이상 생리가 없는 경우(임신 제외)라면 반드시 산부인과에서 혈액 검사와 초음파 검사를 받아 원인을 확인해야 합니다. 방치하면 난임으로 이어질 수 있습니다.`,
    warn: null,
  },
  {
    num: '04',
    title: '난임과 직접적으로 연결될 수 있습니다',
    body: `생리통의 주요 원인 질환인 자궁내막증, 자궁근종, 자궁선근증은 모두 임신 능력에 영향을 줄 수 있는 질환들입니다. 자궁내막증은 나팔관과 난소 주변에 유착을 일으켜 배란과 수정을 방해합니다. 자궁 점막 아래에 생기는 점막하 근종은 수정란 착상을 어렵게 만들 수 있습니다.

지금 당장 임신 계획이 없더라도 5년 후, 10년 후를 생각한다면 지금 상태를 파악하는 것이 매우 중요합니다. 20대에 자궁내막증을 발견하고 적절히 관리한 환자와 30대 후반에 처음 발견한 환자의 임신 예후는 크게 다릅니다. 난소 나이를 나타내는 AMH(항뮬러관호르몬) 수치 검사를 통해 현재 난소 기능도 확인할 수 있습니다.

생리통이 심하다면 지금 바로 산부인과에서 자궁과 난소 상태를 한 번 확인해두세요. 아무 이상이 없다는 결과도 중요한 정보입니다.`,
    warn: null,
  },
  {
    num: '05',
    title: '삶의 질 저하는 반드시 치료받아야 할 문제입니다',
    body: `매달 이틀 이상 학교나 직장을 쉬어야 할 정도의 통증, 외출이 불가능할 만큼 심한 복통, 구토나 설사까지 동반되는 생리 증상은 결코 "원래 다 이런 것"이 아닙니다. 의학적으로 이 정도의 생리통은 일상생활 기능 장애를 일으키는 수준으로 치료 대상입니다.

"나만 유난스러운 건 아닐까"라는 생각에 혼자 참는 분들이 많은데, 실제로 이 정도 통증을 경험하는 여성 중 상당수에서 이차성 생리통의 원인 질환이 발견됩니다. 통증을 참는 것은 해결책이 아니고 질환을 키우는 것입니다.

적절한 진단과 치료를 받으면 생리통은 충분히 개선될 수 있습니다. 호르몬 요법, 미레나 시술 등 효과적인 방법들이 있으며, 치료 후 "이렇게 편한 생리가 가능한 줄 몰랐다"는 분들이 많습니다. 더 이상 매달 고통스러운 며칠을 당연하게 받아들이지 마세요.`,
    warn: null,
  },
]

const warningSigns = [
  '진통제를 복용해도 통증이 조절되지 않거나, 용량을 점점 늘려야 할 때',
  '생리 기간이 7일 이상으로 길어졌을 때',
  '생리량이 이전보다 갑자기 많아지거나 혈덩어리가 자주 나올 때',
  '생리 기간이 아닌데도 하복부 통증이나 묵직한 느낌이 반복될 때',
  '성관계 시 통증이 동반될 때',
  '배변 시 골반 통증이 느껴질 때',
  '생리 주기가 3개월 이상 불규칙하거나 생리가 없을 때',
  '아랫배가 점점 딱딱하게 만져지거나 복부 팽만감이 느껴질 때',
]

export default function MenstrualPainPage() {
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
          <span>생리통 방치하면 안 되는 이유</span>
        </nav>

        {/* 제목 */}
        <h1 style={{
          fontSize: 'clamp(22px,5vw,30px)',
          fontWeight: 900,
          lineHeight: 1.35,
          marginBottom: '10px',
          wordBreak: 'keep-all',
        }}>
          생리통, 그냥 참으면 안 되는 이유 5가지<br />
          <span style={{ color: '#E8305A' }}>자궁내막증 · 근종 · 난임 신호일 수 있어요</span>
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
          "매달 이틀은 진통제 없이는 못 버텨요." "생리 때만 되면 회사를 쉬어야 해요." "원래 다들 이렇게 아프지 않나요?" 이런 말을 하면서도 산부인과 방문을 계속 미루고 있는 분들이 많습니다. 생리통을 '당연히 겪어야 하는 것'으로 여기며 해마다 참아온 경우도 흔합니다.
        </p>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          하지만 의학적으로 생리통은 그 정도와 양상에 따라 반드시 확인해야 하는 신호일 수 있습니다. 특히 진통제로 잘 조절되지 않는 생리통, 해마다 점점 심해지는 생리통, 생리 기간 외에도 지속되는 통증은 단순한 생리통이 아닐 가능성이 높습니다.
        </p>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '40px', wordBreak: 'keep-all' }}>
          이 글에서는 생리통을 절대 혼자 참아서는 안 되는 이유 5가지와 함께, 산부인과를 방문해야 할 신호, 생리통의 원인과 치료 방법까지 자세히 안내해드립니다.
        </p>

        {/* 생리통 종류 */}
        <div style={{
          background: '#FFF5F7',
          borderRadius: '14px',
          padding: 'clamp(16px,4vw,24px)',
          marginBottom: '44px',
          border: '1px solid #FFE0E8',
        }}>
          <p style={{ fontWeight: 800, color: '#E8305A', marginBottom: '16px', fontSize: 'clamp(14px,3vw,16px)' }}>
            📌 생리통의 두 가지 종류 — 어느 쪽인지가 중요합니다
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '12px',
          }}>
            <div style={{
              background: '#fff',
              borderRadius: '10px',
              padding: 'clamp(12px,3vw,16px)',
              border: '1px solid #FFE0E8',
            }}>
              <p style={{ fontWeight: 700, color: '#1A0A10', fontSize: 'clamp(13px,3vw,15px)', marginBottom: '8px' }}>
                일차성 생리통
              </p>
              <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', color: '#554455', margin: 0, wordBreak: 'keep-all' }}>
                특별한 질환 없이 자궁 수축으로 발생. 생리 시작 전후 1~2일에 집중되고 2~3일 내 자연히 호전. 진통제로 비교적 잘 조절됨. 나이가 들수록 완화되는 경향.
              </p>
            </div>
            <div style={{
              background: '#fff',
              borderRadius: '10px',
              padding: 'clamp(12px,3vw,16px)',
              border: '2px solid #E8305A',
            }}>
              <p style={{ fontWeight: 700, color: '#E8305A', fontSize: 'clamp(13px,3vw,15px)', marginBottom: '8px' }}>
                이차성 생리통 ⚠️
              </p>
              <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', color: '#554455', margin: 0, wordBreak: 'keep-all' }}>
                자궁내막증, 자궁근종, 자궁선근증 등 질환이 원인. 진통제로 잘 조절되지 않고 시간이 지날수록 심해지는 경향. 생리 외 시기에도 통증이 지속될 수 있음. 반드시 진단과 치료 필요.
              </p>
            </div>
          </div>
          <p style={{ fontSize: 'clamp(12px,2.8vw,13px)', color: '#994466', marginTop: '14px', marginBottom: 0, wordBreak: 'keep-all' }}>
            많은 분들이 이차성 생리통을 일차성으로 오해하고 수년간 진통제로만 버팁니다. 그 사이 원인 질환은 계속 진행됩니다.
          </p>
        </div>

        {/* 이유 5가지 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '20px',
          wordBreak: 'keep-all',
        }}>
          생리통을 참으면 안 되는 이유 5가지
        </h2>

        {reasons.map(({ num, title, body, warn }) => (
          <div key={num} style={{ marginBottom: '32px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '14px',
            }}>
              <div style={{
                width: 'clamp(32px,7vw,40px)',
                height: 'clamp(32px,7vw,40px)',
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
              <h3 style={{
                fontSize: 'clamp(15px,3.5vw,19px)',
                fontWeight: 800,
                color: '#1A0A10',
                margin: 0,
                wordBreak: 'keep-all',
              }}>
                {title}
              </h3>
            </div>
            <div style={{
              padding: 'clamp(14px,3.5vw,20px)',
              background: '#FFFAFB',
              borderRadius: '12px',
              border: '1px solid #FFE0E8',
              marginBottom: warn ? '10px' : '0',
            }}>
              {body.split('\n\n').map((para, i) => (
                <p key={i} style={{
                  fontSize: 'clamp(13px,2.8vw,15px)',
                  color: '#554455',
                  marginBottom: i < body.split('\n\n').length - 1 ? '14px' : '0',
                  wordBreak: 'keep-all',
                  lineHeight: 1.85,
                }}>
                  {para}
                </p>
              ))}
            </div>
            {warn && (
              <div style={{
                background: '#FFF0F4',
                borderRadius: '10px',
                padding: 'clamp(10px,2.5vw,14px) clamp(12px,3vw,16px)',
                border: '1px solid #FFD6E4',
                fontSize: 'clamp(12px,2.8vw,13px)',
                color: '#994466',
                wordBreak: 'keep-all',
                lineHeight: 1.75,
              }}>
                {warn}
              </div>
            )}
          </div>
        ))}

        {/* 산부인과 가야 할 신호 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          지금 바로 산부인과를 가야 할 신호
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '16px', wordBreak: 'keep-all' }}>
          아래 항목 중 하나라도 해당된다면 가까운 시일 내에 산부인과를 방문하시기 바랍니다. 증상이 있을 때 빠르게 발견할수록 치료가 간단하고 예후가 좋습니다.
        </p>
        <div style={{ marginBottom: '44px' }}>
          {warningSigns.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start',
              marginBottom: '8px',
              padding: 'clamp(10px,2.5vw,13px) clamp(12px,3vw,16px)',
              background: i % 2 === 0 ? '#FFF5F7' : '#FFFAFB',
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

        {/* 치료 방법 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          생리통 치료 방법
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '16px', wordBreak: 'keep-all' }}>
          생리통 치료는 원인에 따라 매우 다양합니다. 전문의 상담을 통해 원인을 파악한 후 본인에게 맞는 치료 방법을 선택하는 것이 중요합니다.
        </p>
        <div style={{ marginBottom: '44px' }}>
          {[
            {
              title: '호르몬 치료',
              desc: '경구 피임약이나 프로게스틴 계열 약물을 통해 자궁내막 성장을 억제하고 생리량과 생리통을 줄입니다. 자궁내막증, 자궁선근증에 효과적이며 부작용은 전문의 상담을 통해 관리합니다.',
            },
            {
              title: '자궁내 장치 — 미레나',
              desc: '자궁 안에 삽입하는 소형 장치로 프로게스틴을 국소 방출해 생리량을 크게 줄이고 생리통을 완화합니다. 한 번 삽입으로 5년간 효과가 지속되며 원하면 언제든 제거 가능합니다.',
            },
            {
              title: '비수술적 치료 — 하이푸(HIFU)',
              desc: '고강도 집속 초음파를 이용해 절개 없이 자궁근종이나 선근증 병변을 치료하는 방법입니다. 입원 없이 당일 시술 가능하며 회복 기간이 짧습니다.',
            },
            {
              title: '수술적 치료',
              desc: '근종절제술, 복강경 자궁내막증 제거술 등 외과적 방법입니다. 크기가 크거나 다른 치료에 반응하지 않는 경우, 또는 난임이 동반된 경우에 고려합니다.',
            },
          ].map(({ title, desc }) => (
            <div key={title} style={{
              display: 'flex',
              gap: 'clamp(12px,3vw,16px)',
              marginBottom: '10px',
              padding: 'clamp(12px,3vw,16px)',
              background: '#FFFAFB',
              borderRadius: '12px',
              border: '1px solid #FFE0E8',
            }}>
              <span style={{ color: '#E8305A', fontWeight: 700, flexShrink: 0, marginTop: '2px', fontSize: '16px' }}>✔</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: 'clamp(13px,3vw,15px)', marginBottom: '5px', color: '#1A0A10' }}>{title}</p>
                <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', color: '#554455', margin: 0, wordBreak: 'keep-all' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          자주 묻는 질문 FAQ
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
          <a href="/womens-clinic/first-visit" style={{ display: 'block', color: '#E8305A', fontSize: 'clamp(12px,2.8vw,14px)', textDecoration: 'none' }}>
            → 산부인과 처음 가는 법 완전 가이드
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
            생리통, 더 이상 혼자 참지 마세요
          </p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(11px,2.5vw,13px)', marginBottom: '20px' }}>
            📍 사당역 4번출구 연세365산부인과 · 1:1 비밀보장
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