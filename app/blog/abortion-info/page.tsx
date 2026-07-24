import type { Metadata } from 'next'
import Link from 'next/link'
import { clinicSchema } from '@/lib/schemas'
import ViewCounter from '@/components/ViewCounter'

export const metadata: Metadata = {
  title: '인공임신중절수술 비용·시기·가격 완벽 안내 2026 | 연세365산부인과의원',
  description: '인공임신중절수술 비용, 시기, 가격을 주수별로 투명하게 안내합니다. 8주 미만 45만원. 합법적 조건 4가지, 수술 과정까지 전문의 직접 안내. 사당역 4번 출구 연세365산부인과의원.',
  keywords: [
    '인공임신중절', '인공임신중절수술', '인공임신중절비용', '인공임신중절금액',
    '인공임신중절가격', '인공임신중절수술비용', '인공임신중절수술금액',
    '인공임신중절수술가격', '인공임신중절수술시기', '인공임신중절수술방법',
    '인공임신중절수술후기', '인공임신중절수술합법', '인공임신중절수술병원',
    '인공임신중절합법', '인공임신중절시기', '인공임신중절방법',
    '낙태비용', '낙태금액', '낙태가격', '낙태수술', '낙태병원',
    '낙태합법화', '낙태합법', '낙태시기', '낙태비용가격',
    '임신중절수술', '임신중절수술비용', '임신중절수술금액', '임신중절수술가격',
    '임신중절수술병원', '임신중절합법', '임신중절비용', '임신중절금액',
    '임신초기중절수술', '임신초기중절수술비용', '임신초기중절수술가격',
    '임신초기낙태', '임신초기낙태비용', '임신초기낙태수술',
    '중절수술비용', '중절수술금액', '중절수술가격', '중절수술병원',
    '흡입식소파술', '흡입식소파술비용', '약물중절', '약물중절비용',
    '관악구낙태병원', '사당역산부인과', '서울중절수술병원',
    '여성검진클리닉', '난임클리닉', '산부인과',
  ],
  openGraph: {
    title: '인공임신중절수술 비용·시기·가격 완벽 안내 2026 | 연세365산부인과의원',
    description: '인공임신중절수술 비용 주수별 공개. 8주 미만 45만원. 사당역 4번 출구.',
    url: 'https://www.yeonsei365.com/blog/abortion-info',
    images: [{ url: 'https://www.yeonsei365.com/og', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.yeonsei365.com/blog/abortion-info',
  },
  twitter: {
    card: 'summary_large_image',
    title: '인공임신중절수술 비용·시기·가격 완벽 안내 2026 | 연세365산부인과의원',
    description: '인공임신중절수술 비용, 시기, 가격을 주수별로 투명하게 안내합니다. 8주 미만 45만원. 합법적 조건 4가지, 수술 과정까지 전문의 직접 안내. 사당역 4번 출구 연세365산부인과의원.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '인공임신중절수술 비용·시기·가격 완벽 안내 2026',
  description: '인공임신중절수술 비용, 시기, 가격 및 합법적 조건 안내',
  author: { '@type': 'Organization', name: '연세365산부인과의원' },
  publisher: { '@type': 'Organization', name: '연세365산부인과의원' },
  datePublished: '2026-03-30',
  dateModified: '2026-05-22',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '인공임신중절수술 비용이 얼마인가요?', acceptedAnswer: { '@type': 'Answer', text: '연세365산부인과의원 기준 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 영양제와 1인 회복실이 포함된 가격입니다.' } },
    { '@type': 'Question', name: '인공임신중절수술은 언제까지 가능한가요?', acceptedAnswer: { '@type': 'Answer', text: '임신 14주 이내가 권장되며, 주수가 늘어날수록 난이도가 높아집니다. 가능한 한 빠른 결정을 권장합니다.' } },
    { '@type': 'Question', name: '인공임신중절수술이 합법인가요?', acceptedAnswer: { '@type': 'Answer', text: '2021년 1월 1일부터 낙태죄 처벌 조항이 효력을 상실했습니다. 현재 임신 14주 이내는 사실상 처벌 공백 상태이며, 모자보건법 제14조에 따라 일정 조건 하에 합법적으로 시술 가능합니다.' } },
    { '@type': 'Question', name: '당일 수술이 가능한가요?', acceptedAnswer: { '@type': 'Answer', text: '네, 예약 당일 초음파 확인 후 수술 진행이 가능합니다. 수술 후 당일 퇴원도 가능합니다.' } },
    { '@type': 'Question', name: '혼자 내원해도 되나요?', acceptedAnswer: { '@type': 'Answer', text: '성인이라면 혼자 내원하셔도 됩니다. 다만 수술 후 운전은 불가능하므로 대중교통을 이용하시기 바랍니다.' } },
  ],
}

const PAGE_URL = 'https://www.yeonsei365.com/blog/abortion-info'
const PAGE_DATE = '2026-03-30'
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'인공임신중절수술 비용·시기·가격 완벽 안내 2026', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'인공임신중절수술'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'인공임신중절수술 예약 방법', description:'인공임신중절수술 예약부터 수술까지', step:[ {'@type':'HowToStep',position:1,name:'임신 확인',text:'초음파로 임신 여부와 주수를 확인합니다.'}, {'@type':'HowToStep',position:2,name:'비용 안내',text:'주수에 따른 비용을 안내받습니다. 8주 미만 45만원.'}, {'@type':'HowToStep',position:3,name:'수술 당일',text:'6시간 금식 후 내원하여 수술을 진행합니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'인공임신중절수술 비용·시기·가격 완벽 안내 2026', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절수술정보',item:'https://www.yeonsei365.com/blog'}, {'@type':'ListItem',position:3,name:'인공임신중절수술',item:PAGE_URL} ] }

function HeroImage() {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <img
        src="/price-main.png"
        alt="인공임신중절수술 비용 인공임신중절금액 인공임신중절가격 8주미만 45만원 당일예약 당일퇴원 연세365산부인과의원"
        width="400"
        height="400"
        style={{ width: '100%', borderRadius: '20px', display: 'block' }}
      />
    </div>
  )
}

function PriceTable() {
  const prices = [
    { week: '8주 미만', price: '45', sub: '가장 안전한 시기' },
    { week: '8주', price: '60', sub: '수술 가능' },
    { week: '9주', price: '70', sub: '수술 가능' },
    { week: '10주', price: '80', sub: '수술 가능' },
  ]
  return (
    <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #FFD0A0', overflow: 'hidden', maxWidth: '420px', margin: '0 auto', boxShadow: '0 8px 32px rgba(255,120,0,0.12)' }}>
      <div style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)', padding: '22px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 4, left: 0, right: 0, fontSize: 10, color: 'rgba(255,255,255,0.2)', letterSpacing: 12, textAlign: 'center' }}>✦ ✧ ✦ ✧ ✦</div>
        <div style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.9)', marginBottom: '6px' }}>YEONSEI 365</div>
        <div style={{ fontSize: '20px', fontWeight: 900, color: '#fff' }}>인공임신중절수술 비용</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', marginTop: '4px' }}>흡입식 소파술 · 자궁유착방지제 +5만원</div>
      </div>
      <div style={{ padding: '16px 20px 0' }}>
        {prices.map(({ week, price, sub }, i) => (
          <div key={week} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: i < prices.length - 1 ? '1px dashed #FFD0A0' : 'none' }}>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#3D1A00' }}>{week}</div>
              <div style={{ fontSize: '10px', color: '#CC7722', marginTop: '2px' }}>{sub}</div>
            </div>
            <div>
              <span style={{ fontSize: '28px', fontWeight: 900, color: '#FF6600' }}>{price}</span>
              <span style={{ fontSize: '13px', fontWeight: 500, color: '#FF8C00', marginLeft: '2px' }}>만원</span>
            </div>
          </div>
        ))}
        <div style={{ background: '#FFF5E0', borderRadius: '8px', padding: '10px', textAlign: 'center', margin: '12px 0', fontSize: '11px', color: '#884400' }}>
          영양제 · 1인 회복실 · 현금/카드 동일 · 부가세 포함
        </div>
      </div>
      <div style={{ padding: '10px 20px 16px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #FFE8C0' }}>
        <span style={{ fontSize: '11px', color: '#CC8833' }}>📍 사당역 4번 출구</span>
        <span style={{ fontSize: '11px', color: '#CC8833' }}>📞 02-585-3650</span>
      </div>
    </div>
  )
}

function LegalCard() {
  const conditions = [
    { num: '01', icon: '🧬', title: '유전학적·우생학적 질환', desc: '본인 또는 배우자가 대통령령으로 정하는 우생학적 또는 유전학적 정신장애나 신체질환이 있는 경우' },
    { num: '02', icon: '⚖️', title: '강간 또는 준강간', desc: '강간 또는 준강간에 의하여 임신된 경우. 피해 사실 확인 서류가 필요할 수 있습니다.' },
    { num: '03', icon: '👨‍👩‍👧', title: '혈족 또는 인척 간 임신', desc: '법률상 혼인할 수 없는 혈족 또는 인척 간에 임신된 경우' },
    { num: '04', icon: '🏥', title: '모체 건강상의 이유', desc: '임신의 지속이 보건의학적 이유로 모체의 건강을 심각하게 해치고 있거나 해칠 우려가 있는 경우' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {conditions.map(({ num, icon, title, desc }) => (
        <div key={num} style={{ display: 'flex', gap: '16px', background: 'linear-gradient(135deg, #FFF8F0, #FFF0E0)', border: '1px solid #FFD0A0', borderRadius: '16px', padding: '18px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,140,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>{icon}</div>
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#FF6600' }}>{num}</div>
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#FF6600', marginBottom: '6px' }}>{title}</div>
            <div style={{ fontSize: '13px', color: '#664422', lineHeight: 1.7 }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ProcessCard() {
  const steps = [
    { num: '01', title: '초음파 검사', desc: '정확한 주수 확인' },
    { num: '02', title: '수술 전 검사', desc: '혈압·혈액 검사' },
    { num: '03', title: '마취', desc: '통증 없이 편안하게' },
    { num: '04', title: '흡입식 소파술', desc: '10~15분 소요' },
    { num: '05', title: '1인 회복실', desc: '1~2시간 안정' },
    { num: '06', title: '상담 후 퇴원', desc: '당일 퇴원 가능' },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
      {steps.map(({ num, title, desc }) => (
        <div key={num} style={{ background: 'linear-gradient(135deg, #FFF8F0, #FFF0E0)', border: '1px solid #FFD0A0', borderRadius: '14px', padding: '16px 14px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0, background: 'linear-gradient(135deg, #FF8C00, #FF5500)', color: '#fff', fontWeight: 900, fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{num}</div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#AA3300', marginBottom: '3px' }}>{title}</div>
            <div style={{ fontSize: '11px', color: '#CC5500' }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ReasonCard() {
  const items = [
    { icon: '👩‍⚕️', title: '산부인과 전문의 직접 시행', desc: '경험 풍부한 전문의가 처음부터 끝까지 직접 집도합니다. 대리 수술 없음.' },
    { icon: '🔒', title: '완벽한 비밀 보장', desc: '1:1 개인 상담실 운영. 의료법에 따라 개인정보 철저 보호.' },
    { icon: '💰', title: '투명한 비용 공개', desc: '처음 안내한 가격이 최종 가격. 숨겨진 추가 비용 없음.' },
    { icon: '🏥', title: '당일 수술·당일 퇴원', desc: '예약 당일 초음파 확인 후 수술 진행. 불필요한 입원 없음.' },
    { icon: '📍', title: '사당역 4번 출구 도보 3분', desc: '관악구·동작구·서초구·강남·과천 어디서든 접근 편리.' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {items.map(({ icon, title, desc }) => (
        <div key={title} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: 'linear-gradient(135deg, #FFF8F0, #FFF0E0)', border: '1px solid #FFD0A0', borderRadius: '14px', padding: '16px' }}>
          <span style={{ fontSize: '26px', flexShrink: 0 }}>{icon}</span>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#AA3300', marginBottom: '4px' }}>{title}</div>
            <div style={{ fontSize: '13px', color: '#884422', lineHeight: 1.6 }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AbortionInfoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <div style={{ height: '64px' }} />

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '32px 18px 100px', fontFamily: "'Pretendard', 'Apple SD Gothic Neo', sans-serif", color: '#1A0A10', lineHeight: 1.85, fontSize: '16px', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>

        {/* 브레드크럼 */}
        <div style={{ marginBottom: '20px', fontSize: '12px', color: '#999' }}>
          <Link href="/" style={{ color: '#999', textDecoration: 'none' }}>홈</Link>
          {' > '}
          <Link href="/blog" style={{ color: '#999', textDecoration: 'none' }}>임신중절수술정보</Link>
          {' > '}
          <span style={{ color: '#FF6600' }}>인공임신중절수술</span>
        </div>

        {/* 태그 */}
        <div style={{ marginBottom: '14px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ background: '#FFF0E0', color: '#FF6600', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px' }}>수술정보</span>
          <span style={{ background: '#FFF5E0', color: '#CC7700', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px' }}>비용안내</span>
          <span style={{ background: '#FFF8F0', color: '#AA5500', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px' }}>합법안내</span>
        </div>

        {/* H1 */}
        <h1 style={{ fontSize: '26px', fontWeight: 900, color: '#1A0A10', lineHeight: 1.35, marginBottom: '10px' }}>
          인공임신중절수술 비용·시기·가격<br />
          <span style={{ color: '#FF6600' }}>2026 완벽 안내</span>
        </h1>
        <div style={{ fontSize: '12px', color: '#999', marginBottom: '28px' }}>
          연세365산부인과의원 · 2026년 3월 업데이트 · <ViewCounter slug="blog-abortion-info" />
        </div>

        {/* 대표 이미지 */}
        <div style={{ marginBottom: '32px' }}>
          <HeroImage />
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#CC7722', marginTop: '8px' }}>
            8주 미만 기준 · 당일예약 당일퇴원 · 영양제 포함
          </p>
        </div>

        {/* 목차 */}
        <div style={{ background: 'linear-gradient(135deg, #FFF8F0, #FFF0E0)', borderRadius: '14px', padding: '18px 20px', marginBottom: '36px', border: '1px solid #FFD0A0' }}>
          <p style={{ fontWeight: 700, color: '#FF6600', marginBottom: '10px', fontSize: '14px' }}>📋 목차</p>
          {[
            '1. 인공임신중절수술이란? 뜻과 정의',
            '2. 인공임신중절수술 합법 시기',
            '3. 합법적 조건 4가지 (모자보건법)',
            '4. 주수별 비용·가격 공개',
            '5. 수술 방법 — 흡입식 소파술',
            '6. 수술 당일 과정',
            '7. 수술 후 주의사항',
            '8. 연세365산부인과의원 선택 이유',
            '9. 자주 묻는 질문',
          ].map((item) => (
            <p key={item} style={{ margin: '5px 0', fontSize: '13px', color: '#884422' }}>· {item}</p>
          ))}
        </div>

        {/* 섹션 1 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #FF6600', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          1. 인공임신중절수술이란? 뜻과 정의
        </h2>
        <p style={{ marginBottom: '14px' }}>
          인공임신중절수술이란 자연적인 분만 전에 인위적으로 임신을 종결하는 의료 시술을 말합니다. 흔히 낙태수술이라고도 불리며, 약물 또는 수술적 방법으로 자궁 내 임신 조직을 제거합니다.
        </p>
        <p style={{ marginBottom: '14px' }}>
          인공임신중절수술은 의학적으로 <strong>임신 초기일수록 안전하고 회복이 빠릅니다.</strong> 임신 주수가 늘어날수록 수술 난이도가 높아지고 회복 기간도 길어지므로, 결정하셨다면 가능한 한 빠르게 전문의와 상담하시는 것을 권장합니다.
        </p>
        <p style={{ marginBottom: '14px' }}>
          연세365산부인과의원은 산부인과 전문의가 직접 인공임신중절수술을 시행하며, 안전하고 위생적인 환경에서 수술을 진행합니다. 모든 상담과 진료는 1:1 비밀이 보장됩니다.
        </p>
        <div style={{ background: 'linear-gradient(135deg, #FF8C00, #FF5500)', borderRadius: '14px', padding: '18px 20px', marginBottom: '32px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.9 }}>
            🏥 <span style={{ fontWeight: 700 }}>인공임신중절수술 핵심 정리</span><br />
            · 의학 용어: 인공임신중절 (人工姙娠中絶)<br />
            · 일반 용어: 낙태수술, 임신중절수술<br />
            · 권장 시기: 임신 14주 이내<br />
            · 수술 방법: 흡입식 소파술 (10~15분)
          </p>
        </div>

        {/* 섹션 2 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #FF6600', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          2. 인공임신중절수술 합법 시기
        </h2>
        <p style={{ marginBottom: '14px' }}>
          2019년 헌법재판소는 낙태를 처벌하는 형법 조항이 여성의 자기결정권을 침해한다며 헌법불합치 결정을 내렸습니다. 이후 2021년 1월 1일부터 해당 조항의 효력이 상실되어 현재는 <strong>임신 14주 이내의 인공임신중절이 사실상 처벌 공백 상태</strong>에 있습니다.
        </p>
        {[
          { year: '2019년', title: '헌법불합치 결정', desc: '헌법재판소가 낙태죄 처벌 조항에 헌법불합치 결정. 여성의 자기결정권 인정.' },
          { year: '2021년', title: '처벌 공백 시작', desc: '2021년 1월 1일부터 낙태죄 처벌 조항 효력 상실. 현재까지 지속.' },
          { year: '현재', title: '14주 이내 사실상 허용', desc: '임신 14주 이내 인공임신중절은 처벌 공백 상태. 단 합법적 의료기관 이용 권장.' },
        ].map(({ year, title, desc }) => (
          <div key={year} style={{ display: 'flex', gap: '16px', marginBottom: '12px', padding: '14px 16px', background: '#FFF8F0', borderRadius: '12px', border: '1px solid #FFD0A0' }}>
            <div style={{ minWidth: '60px', flexShrink: 0 }}>
              <div style={{ fontSize: '13px', fontWeight: 900, color: '#FF6600' }}>{year}</div>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#AA3300', marginBottom: '4px' }}>{title}</div>
              <div style={{ fontSize: '13px', color: '#664422', lineHeight: 1.6 }}>{desc}</div>
            </div>
          </div>
        ))}
        <p style={{ marginBottom: '32px', marginTop: '16px' }}>
          완전한 법제화가 이루어진 것은 아니므로 <strong>반드시 합법적인 의료기관에서 안전하게 시술받으시길 권장</strong>합니다.
        </p>

        {/* 섹션 3 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #FF6600', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          3. 합법적 조건 4가지 (모자보건법)
        </h2>
        <p style={{ marginBottom: '16px' }}>
          모자보건법 제14조에 따라 다음 4가지 조건에 해당하는 경우 명확히 합법적으로 인공임신중절수술을 받을 수 있습니다.
        </p>
        <LegalCard />
        <div style={{ background: 'linear-gradient(135deg, #FF8C00, #FF5500)', borderRadius: '12px', padding: '16px 18px', marginBottom: '32px', marginTop: '16px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.9 }}>
            📌 <span style={{ fontWeight: 700 }}>중요 안내</span><br />
            · 위 4가지 외에도 임신 14주 이내는 사실상 처벌 공백 상태<br />
            · 모든 시술은 반드시 합법적 의료기관에서 받을 것을 권장<br />
            · 불법 시술은 생명을 위협할 수 있으므로 절대 금지
          </p>
        </div>

        {/* 섹션 4 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #FF6600', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          4. 주수별 비용·가격 공개
        </h2>
        <p style={{ marginBottom: '20px' }}>
          인공임신중절수술 비용은 임신 주수에 따라 달라집니다. 연세365산부인과의원은 수술비, 영양제, 1인 회복실이 모두 포함된 투명한 가격을 안내드립니다.
        </p>
        <div style={{ marginBottom: '20px' }}>
          <PriceTable />
        </div>
        <div style={{ background: '#FFF5E0', borderRadius: '12px', padding: '16px 18px', marginBottom: '32px', border: '1px solid #FFD0A0' }}>
          <p style={{ fontSize: '13px', color: '#884400', margin: 0, lineHeight: 1.9 }}>
            💡 <strong>비용 안내 (2026년 기준)</strong><br />
            · 8주 미만: 45만원 (영양제 포함)<br />
            · 8주: 60만원 (영양제 포함)<br />
            · 9주: 70만원 (영양제 포함)<br />
            · 10주: 80만원 (영양제 포함)<br />
            · 선택: 자궁유착방지제 +5만원<br />
            · 현금/카드 동일가 · 부가세 포함
          </p>
        </div>

        {/* 섹션 5 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #FF6600', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          5. 수술 방법 — 흡입식 소파술
        </h2>
        <p style={{ marginBottom: '16px' }}>
          연세365산부인과의원에서 시행하는 인공임신중절수술은 <strong>흡입식 소파술</strong> 방식입니다. 자궁경부를 통해 흡입 기구를 삽입하여 임신 조직을 제거하는 방식으로 출혈이 적고 회복이 빠릅니다.
        </p>
        {[
          { title: '흡입식 소파술 (MVA)', desc: '임신 초기에 가장 많이 사용되는 방법으로 자궁경부를 통해 흡입 기구를 삽입하여 임신 조직을 제거합니다. 수술 시간은 10~15분 내외이며 출혈이 적고 회복이 빠릅니다.' },
          { title: '약물중절', desc: '임신 7주 이내에 약물을 복용하여 임신을 종결하는 방법입니다. 수술이 필요 없지만 수일간 출혈과 복통이 지속되며 약 5%에서 불완전 배출이 발생할 수 있습니다.' },
        ].map(({ title, desc }) => (
          <div key={title} style={{ marginBottom: '10px', padding: '16px', background: '#FFF8F0', borderRadius: '12px', border: '1px solid #FFD0A0' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#AA3300', marginBottom: '6px' }}>✔ {title}</div>
            <div style={{ fontSize: '13px', color: '#664422', lineHeight: 1.7 }}>{desc}</div>
          </div>
        ))}
        <p style={{ marginBottom: '32px', marginTop: '16px' }}>
          임신 7주 이내라면 두 방법 모두 선택할 수 있지만, 확실한 효과와 당일 완료를 원하신다면 흡입식 소파술이 더 적합합니다.
        </p>

        {/* 섹션 6 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #FF6600', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          6. 수술 당일 과정
        </h2>
        <p style={{ marginBottom: '16px' }}>
          전체 내원 시간은 약 2~3시간 내외입니다. 수술 당일 어떻게 진행되는지 미리 알아두시면 마음의 준비를 하는 데 도움이 됩니다.
        </p>
        <ProcessCard />
        <div style={{ background: '#FFF5E0', borderRadius: '12px', padding: '16px 18px', marginBottom: '32px', border: '1px solid #FFD0A0', marginTop: '16px' }}>
          <p style={{ fontSize: '13px', color: '#884400', margin: 0, lineHeight: 1.9 }}>
            📋 <strong>수술 당일 준비사항</strong><br />
            · 수술 6시간 전부터 금식<br />
            · 렌즈 대신 안경 착용<br />
            · 편안한 복장으로 내원<br />
            · 대중교통 또는 동행인 준비
          </p>
        </div>

        {/* 섹션 7 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #FF6600', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          7. 수술 후 주의사항
        </h2>
        <p style={{ marginBottom: '16px' }}>
          인공임신중절수술 후 빠른 회복을 위해 다음 사항을 반드시 지켜주세요.
        </p>
        {[
          { title: '수술 당일', color: '#FFF8F0', border: '#FFD0A0', titleColor: '#AA3300', items: ['무리한 활동 및 운전 금지', '처방된 약물 복용', '음주 및 흡연 금지', '충분한 휴식'] },
          { title: '수술 후 1주일', color: '#FFF5E0', border: '#FFCC88', titleColor: '#884400', items: ['무거운 물건 들기 금지', '욕조 목욕 금지 (샤워만 가능)', '성관계 금지', '수영·사우나 금지'] },
          { title: '수술 후 2~4주', color: '#FFFAF0', border: '#FFE0A0', titleColor: '#664400', items: ['다음 생리까지 피임 필요', '이상 증상 시 즉시 내원', '과도한 운동 자제', '정기 검진 권장'] },
        ].map(({ title, color, border, titleColor, items }) => (
          <div key={title} style={{ marginBottom: '10px', padding: '16px 18px', background: color, borderRadius: '12px', border: `1px solid ${border}` }}>
            <p style={{ fontWeight: 700, color: titleColor, marginBottom: '10px', fontSize: '14px' }}>📌 {title}</p>
            {items.map((item) => (
              <p key={item} style={{ margin: '5px 0', fontSize: '13px', color: '#664422' }}>· {item}</p>
            ))}
          </div>
        ))}
        <div style={{ background: '#FFEBEE', borderRadius: '12px', padding: '16px 18px', marginBottom: '32px', border: '1px solid #FFCDD2' }}>
          <p style={{ fontSize: '13px', color: '#B71C1C', margin: 0, lineHeight: 1.9 }}>
            ⚠️ <strong>즉시 내원이 필요한 증상</strong><br />
            · 38도 이상의 고열이 지속되는 경우<br />
            · 생리대를 1시간에 2개 이상 사용할 정도의 과다출혈<br />
            · 심한 복통이 계속되는 경우<br />
            · 악취가 나는 분비물이 나오는 경우
          </p>
        </div>

        {/* 섹션 8 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #FF6600', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          8. 연세365산부인과의원 선택 이유
        </h2>
        <p style={{ marginBottom: '16px' }}>
          인공임신중절수술을 결정하셨다면 안전하고 합법적인 환경에서 시술받는 것이 가장 중요합니다.
        </p>
        <ReasonCard />
        <p style={{ marginBottom: '32px', marginTop: '16px', fontSize: '14px', color: '#664422' }}>
          연세365산부인과의원은 서울특별시 관악구 과천대로 939, 3층에 위치합니다. 사당역 4번 출구에서 도보 3분 거리이며 진료 시간은 월~금 10:00~17:30, 토요일 09:00~16:30, 일·공휴일 10:00~14:00(연중무휴)입니다.
        </p>

        {/* 섹션 9 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #FF6600', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          9. 자주 묻는 질문
        </h2>
        {[
          { q: '인공임신중절수술 비용이 얼마인가요?', a: '8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 영양제와 1인 회복실이 포함된 가격이며 추가 비용이 없습니다.' },
          { q: '인공임신중절수술은 언제까지 가능한가요?', a: '임신 14주 이내가 권장됩니다. 주수가 늘어날수록 수술 난이도가 높아지고 비용도 올라가므로 가능한 한 빠른 결정을 권장합니다.' },
          { q: '수술이 합법인가요?', a: '2021년 1월 1일부터 낙태죄 처벌 조항이 효력을 상실했습니다. 현재 임신 14주 이내는 사실상 처벌 공백 상태입니다.' },
          { q: '혼자 내원해도 되나요?', a: '성인이라면 혼자 내원하셔도 됩니다. 수술 후 운전은 불가능하므로 대중교통을 이용하시거나 동행인과 함께 오시는 것을 권장합니다.' },
          { q: '당일 수술이 가능한가요?', a: '네, 예약 당일 초음파 확인 후 수술 진행이 가능합니다. 수술 후 당일 퇴원도 가능합니다.' },
          { q: '미성년자도 수술이 가능한가요?', a: '미성년자는 법정대리인의 동의가 필요합니다. 보호자와 함께 내원하셔야 합니다.' },
          { q: '비밀이 보장되나요?', a: '네, 모든 상담과 진료는 1:1로 진행되며 의료법에 따라 개인정보는 절대 외부에 유출되지 않습니다.' },
          { q: '예약은 어떻게 하나요?', a: '전화(02-585-3650) 또는 카카오톡 채널로 상담 및 예약이 가능합니다. 당일 예약 및 당일 수술도 가능합니다.' },
        ].map(({ q, a }, i) => (
          <div key={i} style={{ marginBottom: '10px', border: '1px solid #FFD0A0', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ background: '#FFF5E0', padding: '13px 16px', fontWeight: 700, fontSize: '14px', color: '#FF6600' }}>Q. {q}</div>
            <div style={{ padding: '13px 16px', fontSize: '13px', color: '#664422', lineHeight: 1.7 }}>A. {a}</div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ marginTop: '48px', background: 'linear-gradient(135deg, #FF8C00 0%, #FF4500 100%)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '10px' }}>YEONSEI 365 산부인과</p>
          <p style={{ color: '#fff', fontSize: '22px', fontWeight: 900, marginBottom: '8px', lineHeight: 1.3 }}>지금 바로 무료 상담 받으세요</p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginBottom: '24px' }}>1:1 비밀 보장 · 당일 수술 가능 · 사당역 4번 출구</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
              style={{ background: '#FEE500', color: '#3B1B1B', padding: '14px 24px', borderRadius: '50px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              💬 카카오톡 무료상담
            </a>
            <a href="tel:02-585-3650"
              style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '14px 24px', borderRadius: '50px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              📞 02-585-3650
            </a>
          </div>
        </div>

        {/* 하단 링크 */}
        <div style={{ marginTop: '28px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/blog/abortion-cost" style={{ color: '#FF6600', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>→ 임신중절수술 비용 정보</Link>
          <Link href="/blog/abortion-price" style={{ color: '#FF6600', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>→ 낙태 비용 가격 정보</Link>
          <Link href="/blog/abortion-legal" style={{ color: '#FF6600', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>→ 낙태수술 합법화 안내</Link>
        </div>

      </div>
    </>
  )
}