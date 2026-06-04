import { clinicSchema } from '@/lib/schemas'
import type { Metadata } from 'next'
import ViewCounter from '@/components/ViewCounter'

export const metadata: Metadata = {
  title: '사당역 산부인과 연세365산부인과의원 | 위치·진료항목·비용 완전정리 2026',
  description: '사당역 4번출구 연세365산부인과의원. 여성검진, 생리불순, 피임상담, 자궁경부암 검진, 난임클리닉까지. 산부인과 전문의 직접 진료. 당일 예약 가능.',
  keywords: [
    '사당역산부인과', '사당산부인과', '동작구산부인과', '사당역여성병원',
    '연세365산부인과', '사당역산부인과추천', '사당역산부인과후기',
    '이수역산부인과', '방배동산부인과', '관악구산부인과',
    '사당역여성검진', '사당역자궁경부암검진', '사당역피임상담',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/womens-clinic/sadang' },
  openGraph: {
    title: '사당역 산부인과 연세365산부인과의원 | 2026',
    description: '사당역 4번출구 도보, 여성검진부터 난임까지. 당일 예약 가능.',
    url: 'https://www.yeonsei365.com/womens-clinic/sadang',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '사당역 산부인과 연세365산부인과의원 | 위치·진료항목·비용 완전정리 2026',
    description: '사당역 4번출구 연세365산부인과의원. 여성검진, 생리불순, 피임상담, 자궁경부암 검진, 난임클리닉까지. 산부인과 전문의 직접 진료. 당일 예약 가능.',
  },
}

const faqData = [
  {
    q: '사당역 연세365산부인과는 어디에 위치하나요?',
    a: '서울 지하철 4호선·2호선 사당역 4번 출구에서 도보로 이동 가능한 거리에 위치합니다. 별도의 주차 공간은 제한적이므로 대중교통 이용을 권장합니다. 사당역은 강남, 서초, 방배, 이수, 관악, 동작 등 다양한 지역에서 접근이 편리한 환승역으로 인근 지역 거주자뿐 아니라 멀리서 찾아오시는 분들도 많습니다. 정확한 위치는 네이버 지도에서 "연세365산부인과의원"으로 검색하시면 확인하실 수 있습니다. 방문 전 전화(02-585-3650)로 위치 안내를 받으시는 것도 가능합니다.',
  },
  {
    q: '사당역 연세365산부인과 진료시간은 어떻게 되나요?',
    a: '평일 오전 9시부터 오후 6시까지 진료합니다. 점심시간 운영 여부 및 토요일 진료 여부는 변동이 있을 수 있으므로 방문 전 전화(02-585-3650)로 확인하시기 바랍니다. 초진 환자의 경우 진료 마감 30분~1시간 전에 접수하시는 것을 권장합니다. 당일 예약도 가능하므로 급하게 방문이 필요한 경우 오전 일찍 전화로 당일 예약 가능 여부를 확인해보세요. 카카오톡 채널을 통한 비대면 상담도 가능합니다.',
  },
  {
    q: '사당역 산부인과에서 어떤 진료를 받을 수 있나요?',
    a: '연세365산부인과의원에서는 여성 건강과 관련된 폭넓은 진료를 받을 수 있습니다. 자궁경부암 검진, 골반 초음파, 질염 치료, 생리불순·생리통 상담, 피임 상담(미레나, 임플라논, 경구피임약), 난임 클리닉, 산전 관리, 웨딩 검진, 갱년기 관리, HPV 백신 접종, 여성 성형(소음순 성형) 등이 있습니다. 초음파부터 혈액 검사, 자궁경부 세포 검사까지 기본 검진 항목 대부분이 원내에서 당일 가능하며, 연세대학교 의과대학 출신 산부인과 전문의가 직접 진료합니다.',
  },
  {
    q: '사당역 연세365산부인과 진료비는 얼마인가요?',
    a: '기본 진찰료는 건강보험 적용 시 1~2만원 수준입니다. 국가건강검진 대상자(만 20세 이상, 2년 주기)라면 자궁경부암 검사는 무료로 받으실 수 있습니다. 초음파 검사, 질염 검사, 호르몬 검사 등 추가 항목은 건강보험 적용 여부에 따라 달라지며, 비급여 항목은 방문 전 전화로 미리 확인하시거나 접수 시 항목별로 문의하시면 투명하게 안내해드립니다. 미레나·임플라논 등 시술 비용도 방문 전 상담을 통해 확인 가능합니다. 현금과 카드 모두 동일가로 결제 가능합니다.',
  },
  {
    q: '처음 방문인데 예약 없이 바로 가도 되나요?',
    a: '예약 없이도 방문 가능하지만 대기 시간이 20~40분 이상 소요될 수 있습니다. 특히 오전 10~12시, 오후 2~4시는 가장 혼잡한 시간대이므로 이 시간대를 피해 방문하시거나 사전 예약을 권장합니다. 전화(02-585-3650) 또는 네이버에서 "연세365산부인과의원" 검색 후 예약 탭을 통해 간편하게 예약하실 수 있습니다. 카카오톡 채널을 통한 예약 문의도 가능합니다. 처음 방문이라면 예약 시 "초진이에요"라고 말씀해주시면 충분한 상담 시간을 확보해드립니다.',
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

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: '연세365산부인과의원',
  description: '사당역 4번출구 산부인과 전문의원. 여성검진, 피임상담, 난임클리닉, 자궁경부암 검진.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '관악구 과천대로 939 3층',
    addressLocality: '서울',
    addressCountry: 'KR',
  },
  telephone: '02-585-3650',
  url: 'https://www.yeonsei365.com',
  medicalSpecialty: 'Obstetrics and Gynecology',
}

const clinicItems = [
  {
    icon: '🔬',
    title: '여성 정기 검진',
    desc: '자궁경부암 검사, 골반 초음파, 유방 검진, 혈액 검사 등 연령과 상태에 맞는 맞춤 검진. 국가건강검진 항목(자궁경부암)은 만 20세 이상 무료.',
    badge: '국가검진 가능',
    badgeBg: '#e8f4e8',
    badgeColor: '#2d7a2d',
  },
  {
    icon: '💊',
    title: '피임 상담 및 시술',
    desc: '미레나, 임플라논, 카일리나 등 자궁내 장치 시술과 경구 피임약 처방. 본인 생활 패턴과 건강 상태에 맞는 최적의 피임 방법을 전문의와 상담.',
    badge: '당일 시술 가능',
    badgeBg: '#E6F1FB',
    badgeColor: '#185FA5',
  },
  {
    icon: '🌸',
    title: '생리 불순 · 생리통',
    desc: '다낭성 난소 증후군(PCOS), 자궁내막증, 자궁근종 등 생리 관련 질환 진단 및 치료. 호르몬 검사와 초음파를 통해 정확한 원인 파악 후 맞춤 치료.',
    badge: '초음파 당일',
    badgeBg: '#FBEAF0',
    badgeColor: '#993556',
  },
  {
    icon: '👶',
    title: '난임 클리닉',
    desc: '배란 유도, 인공수정 준비, 난소 기능 검사(AMH), 자궁 기형 검사 등 단계별 난임 원인 분석 및 치료. 임신 준비 중인 분들을 위한 산전 검진도 시행.',
    badge: 'AMH 검사',
    badgeBg: '#E1F5EE',
    badgeColor: '#0F6E56',
  },
  {
    icon: '💉',
    title: 'HPV 백신 (자궁경부암 예방)',
    desc: '가다실9가 백신 접종. 인유두종바이러스(HPV) 감염을 예방해 자궁경부암 위험을 크게 낮춥니다. 성인도 접종 가능하며 2~3회 접종으로 장기간 예방 효과.',
    badge: '당일 접종',
    badgeBg: '#FAEEDA',
    badgeColor: '#854F0B',
  },
  {
    icon: '🌙',
    title: '갱년기 · 폐경 관리',
    desc: '호르몬 변화로 인한 안면 홍조, 불면, 골다공증 등 갱년기 증상 관리. 호르몬 검사를 통한 정확한 진단 후 호르몬 치료 여부를 전문의와 상담.',
    badge: '호르몬 검사',
    badgeBg: '#EAF3DE',
    badgeColor: '#3B6D11',
  },
]

const accessInfo = [
  { icon: '🚇', label: '지하철', value: '4호선·2호선 사당역 4번 출구 도보 이용' },
  { icon: '🚌', label: '버스', value: '사당역 정류장 하차 후 도보 이용' },
  { icon: '📞', label: '전화', value: '02-585-3650' },
  { icon: '💬', label: '카카오톡', value: '연세365산부인과 채널 검색' },
  { icon: '🕐', label: '진료시간', value: '평일 09:00 ~ 18:00 (방문 전 전화 확인 권장)' },
]

const unsplashImages = {
    hero: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop',
    clinic: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1453&auto=format&fit=crop',
    waiting: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1528&auto=format&fit=crop',
  }
  const PAGE_URL = 'https://www.yeonsei365.com/womens-clinic/sadang'
  const PAGE_DATE = '2026-04-01'
  const PAGE_MODIFIED = '2026-05-22'
  const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'사당역 산부인과 연세365산부인과의원 | 위치·진료항목·비용 2026', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
  const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'사당역 산부인과 연세365산부인과의원 위치 진료항목 비용', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:PAGE_DATE, reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, about:{'@type':'MedicalCondition',name:'산부인과 진료'} }
  const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'사당역 연세365산부인과 예약 방법', description:'사당역 산부인과 예약 단계별 안내', step:[ {'@type':'HowToStep',position:1,name:'예약',text:'전화(02-585-3650) 또는 네이버·카카오톡으로 예약합니다.'}, {'@type':'HowToStep',position:2,name:'내원',text:'사당역 4번출구 도보 이동. 신분증 지참.'}, {'@type':'HowToStep',position:3,name:'진료',text:'초음파·혈액검사 등 필요한 항목 당일 진행. 결과 당일 확인.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과'} }
  const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'사당역 산부인과 연세365산부인과의원 위치 진료항목 비용', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
  const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'여성검진클리닉',item:'https://www.yeonsei365.com/womens-clinic'}, {'@type':'ListItem',position:3,name:'사당역 산부인과',item:PAGE_URL} ] }

export default function SadangObgynPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />

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
          <span>사당역 산부인과</span>
        </nav>

        {/* 제목 */}
        <h1 style={{
          fontSize: 'clamp(22px,5vw,32px)',
          fontWeight: 900,
          lineHeight: 1.35,
          marginBottom: '10px',
          wordBreak: 'keep-all',
        }}>
          사당역 산부인과<br />
          <span style={{ color: '#E8305A' }}>연세365산부인과의원</span>
        </h1>
        <p style={{ fontSize: 'clamp(11px,2.5vw,13px)', color: '#999', marginBottom: '28px' }}>
          사당역 4번출구 · 산부인과 전문의 직접 진료 · 2026년 업데이트 · <ViewCounter slug="womens-clinic-sadang" />
        </p>

        {/* 히어로 이미지 */}
        <div style={{ marginBottom: '36px', borderRadius: '16px', overflow: 'hidden' }}>
          <img
            src={unsplashImages.hero}
            alt="사당역 산부인과 연세365산부인과의원 내부"
            width={780}
            height={440}
            style={{ width: '100%', height: 'clamp(200px,45vw,420px)', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* 핵심 정보 카드 */}
        <div style={{
          background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)',
          borderRadius: '16px',
          padding: 'clamp(16px,4vw,24px)',
          marginBottom: '44px',
          color: '#fff',
        }}>
          <p style={{ fontWeight: 900, fontSize: 'clamp(15px,3.5vw,18px)', marginBottom: '16px' }}>
            📍 연세365산부인과의원 핵심 정보
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '10px',
          }}>
            {[
              { label: '위치', value: '사당역 4번출구 도보' },
              { label: '전화', value: '02-585-3650' },
              { label: '진료', value: '평일 09:00~18:00' },
              { label: '예약', value: '전화·네이버·카카오톡' },
              { label: '전문의', value: '연세대 산부인과 전문의' },
              { label: '특징', value: '1:1 비밀보장 · 당일예약' },
            ].map(({ label, value }) => (
              <div key={label} style={{
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '10px',
                padding: 'clamp(10px,2.5vw,12px) clamp(12px,3vw,16px)',
              }}>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', marginBottom: '3px' }}>{label}</p>
                <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', fontWeight: 700, margin: 0 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 도입부 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          사당역 산부인과, 연세365산부인과의원을 소개합니다
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          연세365산부인과의원은 서울 동작구 사당역 4번 출구 인근에 위치한 여성 전문 의원입니다. 연세대학교 의과대학을 졸업하고 신촌세브란스병원에서 산부인과 전문의 과정을 수료한 이진우 대표원장이 직접 모든 진료를 담당합니다.
        </p>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          사당역은 지하철 2호선과 4호선이 교차하는 환승역으로, 강남·서초·방배·이수·관악·동작·과천 등 인근 지역 어디서든 접근이 편리합니다. 버스 환승도 용이해 대중교통으로 쉽게 방문하실 수 있습니다.
        </p>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '40px', wordBreak: 'keep-all' }}>
          여성 검진, 생리 관련 클리닉, 피임 상담, 난임 클리닉, 갱년기 관리까지 여성 건강의 전 주기를 한 곳에서 관리할 수 있으며, 모든 진료는 1:1 비밀이 철저히 보장됩니다.
        </p>

        {/* 병원 이미지 */}
        <div style={{ marginBottom: '44px', borderRadius: '14px', overflow: 'hidden' }}>
          <img
            src={unsplashImages.waiting}
            alt="사당역 연세365산부인과 대기실"
            width={780}
            height={400}
            style={{ width: '100%', height: 'clamp(180px,38vw,380px)', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* 진료 항목 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          진료 항목 안내
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '20px', wordBreak: 'keep-all' }}>
          연세365산부인과의원에서는 아래와 같은 다양한 여성 건강 진료를 받으실 수 있습니다. 모든 항목은 산부인과 전문의가 직접 진료하며, 필요한 검사 항목과 예상 비용을 진료 전에 투명하게 안내해드립니다.
        </p>
        <div style={{ marginBottom: '44px' }}>
          {clinicItems.map(({ icon, title, desc, badge, badgeBg, badgeColor }) => (
            <div key={title} style={{
              display: 'flex',
              gap: 'clamp(12px,3vw,16px)',
              marginBottom: '12px',
              padding: 'clamp(14px,3.5vw,18px)',
              background: '#FFFAFB',
              borderRadius: '12px',
              border: '1px solid #FFE0E8',
              alignItems: 'flex-start',
            }}>
              <span style={{ fontSize: 'clamp(20px,4.5vw,26px)', flexShrink: 0 }}>{icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
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
                <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', color: '#554455', margin: 0, wordBreak: 'keep-all', lineHeight: 1.75 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 의료진 섹션 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '20px',
          wordBreak: 'keep-all',
        }}>
          담당 의료진
        </h2>
        <div style={{
          marginBottom: '44px',
          padding: 'clamp(20px,5vw,32px)',
          background: '#FFF5F7',
          borderRadius: '16px',
          border: '1px solid #FFE0E8',
        }}>
          <p style={{ fontWeight: 900, fontSize: 'clamp(16px,3.5vw,20px)', color: '#E8305A', marginBottom: '4px' }}>
            이진우 대표원장
          </p>
          <p style={{ fontSize: 'clamp(11px,2.5vw,13px)', color: '#999', marginBottom: '20px' }}>
            산부인과 전문의 · MEDICAL DIRECTOR
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '8px',
          }}>
            {[
              '연세대학교 의과대학 졸업',
              '신촌세브란스병원 산부인과 전문의 수료',
              '강남차이병원 여성센터장',
              '건국대학교 의학전문 대학원 외래부교수',
              '대한산부인과학회 정회원',
              '대한초음파학회 정회원',
              '대한비뇨부인과학회 정회원',
            ].map((item) => (
              <div key={item} style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'flex-start',
                padding: 'clamp(10px,2.5vw,12px) clamp(12px,3vw,16px)',
                background: '#fff',
                borderRadius: '10px',
                border: '1px solid #FFE0E8',
                fontSize: 'clamp(12px,2.8vw,14px)',
                color: '#554455',
                wordBreak: 'keep-all',
              }}>
                <span style={{ color: '#E8305A', flexShrink: 0, fontWeight: 700 }}>·</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* 병원 특장점 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          연세365산부인과를 선택하는 이유
        </h2>

        <div style={{ marginBottom: '44px', borderRadius: '14px', overflow: 'hidden' }}>
          <img
            src={unsplashImages.clinic}
            alt="연세365산부인과 진료실"
            width={780}
            height={380}
            style={{ width: '100%', height: 'clamp(160px,35vw,360px)', objectFit: 'cover', display: 'block' }}
          />
        </div>

        <div style={{ marginBottom: '44px' }}>
          {[
            {
              icon: '👩‍⚕️',
              title: '산부인과 전문의 직접 진료',
              desc: '연세대학교 의과대학 졸업, 신촌세브란스병원 산부인과 전문의 출신 이진우 대표원장이 모든 진료를 직접 담당합니다. 초진부터 추적 관리까지 담당 의사가 바뀌지 않아 연속적인 진료가 가능합니다.',
            },
            {
              icon: '🔒',
              title: '1:1 완벽한 비밀 보장',
              desc: '모든 상담과 진료 내용은 철저히 비밀이 보장됩니다. 의료법과 개인정보보호법에 따라 진료 정보는 절대 외부에 유출되지 않으며, 다른 환자와 마주칠 가능성을 최소화한 동선 설계로 프라이버시를 보호합니다.',
            },
            {
              icon: '📋',
              title: '투명한 비용 안내',
              desc: '진료 전 필요한 검사 항목과 예상 비용을 사전에 상세히 안내해드립니다. 진료 후 예상치 못한 추가 비용이 발생하지 않으며, 현금과 카드 동일가로 운영됩니다. 궁금한 비용은 언제든 물어보실 수 있습니다.',
            },
            {
              icon: '📍',
              title: '우수한 접근성',
              desc: '지하철 2호선·4호선 사당역 4번 출구에서 도보로 이동 가능해 강남, 서초, 방배, 이수, 관악, 동작, 과천 등 다양한 지역에서 편리하게 방문하실 수 있습니다. 당일 예약도 가능해 급한 경우에도 빠르게 진료받을 수 있습니다.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{
              display: 'flex',
              gap: 'clamp(12px,3vw,16px)',
              marginBottom: '12px',
              padding: 'clamp(14px,3.5vw,18px)',
              background: '#FFFAFB',
              borderRadius: '12px',
              border: '1px solid #FFE0E8',
            }}>
              <span style={{ fontSize: 'clamp(20px,4.5vw,26px)', flexShrink: 0 }}>{icon}</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: 'clamp(13px,3vw,15px)', marginBottom: '6px', color: '#1A0A10' }}>{title}</p>
                <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', color: '#554455', margin: 0, wordBreak: 'keep-all', lineHeight: 1.75 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 오시는 길 */}
        <h2 style={{
          fontSize: 'clamp(18px,4vw,24px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          오시는 길 및 연락처
        </h2>
        <div style={{ marginBottom: '44px' }}>
          {accessInfo.map(({ icon, label, value }) => (
            <div key={label} style={{
              display: 'flex',
              gap: 'clamp(12px,3vw,16px)',
              alignItems: 'center',
              padding: 'clamp(12px,3vw,14px) clamp(14px,4vw,18px)',
              marginBottom: '8px',
              background: '#FFFAFB',
              borderRadius: '10px',
              border: '1px solid #FFE0E8',
            }}>
              <span style={{ fontSize: 'clamp(16px,3.5vw,20px)', flexShrink: 0 }}>{icon}</span>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: 'clamp(12px,2.8vw,13px)', color: '#E8305A', flexShrink: 0 }}>{label}</span>
                <span style={{ fontSize: 'clamp(12px,2.8vw,14px)', color: '#554455', wordBreak: 'keep-all' }}>{value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 주변 지역 SEO */}
        <div style={{
          background: '#FFF5F7',
          borderRadius: '14px',
          padding: 'clamp(16px,4vw,24px)',
          marginBottom: '44px',
          border: '1px solid #FFE0E8',
        }}>
          <p style={{ fontWeight: 800, color: '#E8305A', marginBottom: '12px', fontSize: 'clamp(13px,3vw,15px)' }}>
            📍 이런 지역에서 오시는 분들이 많아요
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            {[
              '사당동', '방배동', '이수역', '서초구', '강남구',
              '동작구', '관악구', '과천시', '남태령', '총신대입구',
            ].map((area) => (
              <span key={area} style={{
                background: '#fff',
                border: '1px solid #FFD6E4',
                color: '#994466',
                fontSize: 'clamp(11px,2.5vw,13px)',
                fontWeight: 600,
                padding: '5px 12px',
                borderRadius: '20px',
              }}>
                {area} 산부인과
              </span>
            ))}
          </div>
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
          <a href="/womens-clinic/first-visit" style={{ display: 'block', color: '#E8305A', fontSize: 'clamp(12px,2.8vw,14px)', textDecoration: 'none', marginBottom: '8px' }}>
            → 산부인과 처음 가는 법 완전 가이드
          </a>
          <a href="/womens-clinic/menstrual-pain" style={{ display: 'block', color: '#E8305A', fontSize: 'clamp(12px,2.8vw,14px)', textDecoration: 'none' }}>
            → 생리통 참으면 안 되는 이유 5가지
          </a>
        </div>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)',
          borderRadius: '20px',
          padding: 'clamp(20px,5vw,36px) clamp(16px,5vw,28px)',
          textAlign: 'center',
        }}>
          <p style={{ color: '#fff', fontSize: 'clamp(18px,4.5vw,24px)', fontWeight: 900, marginBottom: '6px', wordBreak: 'keep-all' }}>
            사당역 산부인과<br />연세365산부인과의원
          </p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(12px,2.8vw,14px)', marginBottom: '24px', wordBreak: 'keep-all' }}>
            📍 사당역 4번출구 도보 · 1:1 비밀보장 · 당일예약 가능
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            
              <a
              href="http://pf.kakao.com/_TpaBj/chat"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#FEE500',
                color: '#3B1B1B',
                padding: 'clamp(12px,3vw,15px) clamp(20px,5vw,30px)',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: 'clamp(13px,3vw,15px)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              💬 카카오톡 무료상담
            </a>
            
              <a
              href="tel:02-585-3650"
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: '#fff',
                padding: 'clamp(12px,3vw,15px) clamp(20px,5vw,30px)',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: 'clamp(13px,3vw,15px)',
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