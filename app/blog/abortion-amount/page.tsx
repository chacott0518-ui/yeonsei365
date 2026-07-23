import type { Metadata } from 'next'
import Link from 'next/link'
import { clinicSchema } from '@/lib/schemas'
import ViewCounter from '@/components/ViewCounter'

export const metadata: Metadata = {
  title: '임신중절수술 금액과 낙태의 정의 뜻 비용 가격 안내 2026 | 연세365산부인과',
  description:
    '임신중절수술 금액 8주 미만 45만원부터 주수별 정리. 낙태 정의·뜻·합법 조건·비용 포함 항목까지 일반 건강정보 안내. 사당역 4번 출구 연세365산부인과의원.',
  keywords: [
    '임신중절수술금액', '임신중절수술 금액', '낙태금액', '낙태 금액',
    '중절수술금액', '임신중절금액', '낙태비용금액',
    '낙태뜻', '낙태정의', '낙태란', '인공임신중절뜻',
    '낙태합법화', '낙태합법', '낙태법', '낙태합법시기',
    '임신중절수술', '낙태수술', '낙태비용', '낙태가격',
    '임신중절수술비용', '임신중절수술가격',
    '중절수술비용', '중절수술가격', '중절수술병원',
    '임신초기낙태', '임신초기중절수술', '임신초기낙태비용',
    '임신초기낙태금액', '임신초기중절수술금액',
    '관악구낙태병원', '사당역산부인과',
    '인공임신중절수술', '인공임신중절비용', '인공임신중절금액',
  ],
  openGraph: {
    title: '임신중절수술 금액과 낙태의 정의 뜻 비용 가격 안내 2026 | 연세365산부인과',
    description: '임신중절수술 금액 주수별 정리. 8주 미만 45만원. 낙태 정의·뜻·합법조건 안내. 사당역 4번 출구.',
    url: 'https://www.yeonsei365.com/blog/abortion-amount',
    images: [{
      url: 'https://www.yeonsei365.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: '임신중절수술 금액 안내 연세365산부인과',
    }],
  },
  alternates: {
    canonical: 'https://www.yeonsei365.com/blog/abortion-amount',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 금액과 낙태의 정의 뜻 비용 가격 안내 2026 | 연세365산부인과',
    description:
      '임신중절수술 금액 8주 미만 45만원부터 주수별 정리. 낙태 정의·뜻·합법 조건·비용 포함 항목까지 일반 건강정보 안내. 사당역 4번 출구 연세365산부인과의원.',
  },
}

const PAGE_URL = 'https://www.yeonsei365.com/blog/abortion-amount'
const PAGE_DATE = '2026-04-01'

const medicalWebPageSchema = {
  '@context': 'https://schema.org', '@type': 'MedicalWebPage',
  name: '임신중절수술 금액과 낙태의 정의 뜻 비용 가격 안내 2026',
  url: PAGE_URL,
  specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
  medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' },
  about: { '@type': 'MedicalCondition', name: '임신중절수술 금액' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: '임신중절수술 금액 확인 및 예약 방법',
  description: '임신중절수술 금액 확인부터 예약까지 단계별 안내',
  step: [
    { '@type': 'HowToStep', position: 1, name: '임신 확인', text: '임신 테스트기 또는 산부인과 초음파로 임신 여부를 확인합니다.' },
    { '@type': 'HowToStep', position: 2, name: '주수 확인', text: '산부인과 내원 후 초음파로 정확한 임신 주수를 확인합니다.' },
    { '@type': 'HowToStep', position: 3, name: '금액 안내', text: '주수에 따른 임신중절수술 금액을 안내받습니다. 8주 미만 45만원.' },
    { '@type': 'HowToStep', position: 4, name: '수술 당일', text: '6시간 금식 후 내원하여 수술을 진행합니다.' },
  ],
  tool: { '@type': 'HowToTool', name: '연세365산부인과의원' },
}
const speakableSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: '임신중절수술 금액과 낙태의 정의 뜻 비용 가격 안내 2026',
  url: PAGE_URL,
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.speakable-summary'] },
}
const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.yeonsei365.com' },
    { '@type': 'ListItem', position: 2, name: '임신중절수술정보', item: 'https://www.yeonsei365.com/blog' },
    { '@type': 'ListItem', position: 3, name: '임신중절수술 금액', item: PAGE_URL },
  ],
}
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '임신중절수술 금액과 낙태의 정의 뜻 비용 가격 안내 2026',
  description: '임신중절수술 금액 주수별 정리 및 낙태 정의·뜻·합법 조건 안내',
  author: { '@type': 'Organization', name: '연세365산부인과의원' },
  publisher: { '@type': 'Organization', name: '연세365산부인과의원' },
  datePublished: '2026-04-01',
  dateModified: '2026-05-22',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '임신중절수술 금액이 얼마인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '임신중절수술 금액은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 임신중절수술 금액에는 수술비·마취비·영양수액이 포함되며 현금과 카드 금액이 동일합니다.' }
    },
    {
      '@type': 'Question',
      name: '낙태란 무엇인가요? 낙태의 정의와 뜻은?',
      acceptedAnswer: { '@type': 'Answer', text: '낙태(인공임신중절)란 태아가 모체 밖에서 생존할 수 없는 시기에 인위적으로 임신을 종료하는 의료 행위입니다. 2021년 1월 1일부로 형법상 낙태죄 조항이 효력을 상실하여 낙태합법화가 이루어졌습니다.' }
    },
    {
      '@type': 'Question',
      name: '임신중절수술 금액에 포함된 항목은 무엇인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '연세365산부인과의원의 임신중절수술 금액에는 수술비, 마취비, 영양수액이 모두 포함됩니다. 현금과 카드 금액이 동일하며 숨겨진 추가 비용은 없습니다. 선택 항목으로 유착방지제 5만원이 있습니다.' }
    },
    {
      '@type': 'Question',
      name: '합법적 낙태 조건은 무엇인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '모자보건법 제14조에 따라 유전성 질환, 전염성 질환, 강간·준강간에 의한 임신, 근친 간 임신, 모체 건강 위협의 4가지 조건에 해당하는 경우 합법적으로 시행 가능합니다. 또한 임신 14주 이내는 본인 결정으로 가능합니다.' }
    },
    {
      '@type': 'Question',
      name: '임신중절수술 금액은 왜 주수마다 다른가요?',
      acceptedAnswer: { '@type': 'Answer', text: '임신 주수가 증가할수록 태아 크기가 커지고 수술 난이도와 마취 시간이 늘어나기 때문에 임신중절수술 금액이 높아집니다. 주수가 적을수록 금액 부담이 낮고 회복도 빠릅니다.' }
    },
  ],
}

function PriceImage() {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <img
        src="/price-main.png"
        alt="임신중절수술 금액 낙태금액 낙태비용 임신중절수술비용 당일예약 당일퇴원 연세365산부인과"
        width="400"
        height="400"
        style={{ width: '100%', borderRadius: '16px', display: 'block' }}
      />
    </div>
  )
}

function PriceTable() {
  const prices = [
    { week: '8주 미만', price: '45' },
    { week: '8주', price: '60' },
    { week: '9주', price: '70' },
    { week: '10주', price: '80' },
  ]
  return (
    <div style={{
      background: '#fff',
      borderRadius: '20px',
      border: '1px solid #FFD6E4',
      overflow: 'hidden',
      maxWidth: '400px',
      margin: '0 auto',
      boxShadow: '0 8px 32px rgba(180,20,60,0.12)',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #C2185B 0%, #880E4F 100%)',
        padding: '20px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.85)', marginBottom: '6px' }}>YEONSEI 365</div>
        <div style={{ fontSize: '20px', fontWeight: 900, color: '#fff' }}>임신중절수술 금액 안내</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>흡입식 소파술 · 유착방지제 +5만원(선택)</div>
      </div>
      <div style={{ padding: '16px 20px 0' }}>
        {prices.map(({ week, price }, i) => (
          <div key={week} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 0',
            borderBottom: i < prices.length - 1 ? '1px dashed #FFE0E8' : 'none',
          }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#1A0A10' }}>{week}</span>
            <div>
              <span style={{ fontSize: '28px', fontWeight: 900, color: '#C2185B' }}>{price}</span>
              <span style={{ fontSize: '13px', fontWeight: 500, color: '#880E4F', marginLeft: '2px' }}>만원</span>
            </div>
          </div>
        ))}
        <div style={{ background: '#FFF5F7', borderRadius: '8px', padding: '10px', textAlign: 'center', margin: '12px 0', fontSize: '11px', color: '#880E4F' }}>
          영양수액 · 현금/카드 동일 · 부가세 포함
        </div>
      </div>
      <div style={{ padding: '10px 20px 16px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #FFF0F4' }}>
        <span style={{ fontSize: '11px', color: '#BB7788' }}>📍 사당역 4번 출구</span>
        <span style={{ fontSize: '11px', color: '#BB7788' }}>📞 02-585-3650</span>
      </div>
    </div>
  )
}

export default function AbortionAmountPage() {
  return (
    <>
      <div style={{ height: '64px' }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'Pretendard, sans-serif', color: '#1A0A10', lineHeight: 1.8 }}>

        {/* 브레드크럼 */}
        <div style={{ marginBottom: '24px', fontSize: '13px', color: '#880E4F' }}>
          <Link href="/" style={{ color: '#880E4F', textDecoration: 'none' }}>홈</Link>
          {' > '}
          <Link href="/blog" style={{ color: '#880E4F', textDecoration: 'none' }}>임신중절수술정보</Link>
          {' > '}
          <span>임신중절수술 금액과 낙태의 정의와 뜻</span>
        </div>

        {/* H1 제목 */}
        <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#1A0A10', lineHeight: 1.3, marginBottom: '12px' }}>
          임신중절수술 금액과 낙태의 정의와 뜻<br />
          <span style={{ color: '#C2185B' }}>비용·가격 안내 2026</span>
        </h1>
        <div style={{ fontSize: '13px', color: '#999', marginBottom: '20px' }}>
          연세365산부인과의원 · 2026년 4월 업데이트 · <ViewCounter slug="blog-abortion-amount" />
        </div>

        {/* 도입부 — 첫 200자에 "금액" 2회 이상 */}
        <p style={{ fontSize: '16px', marginBottom: '32px', background: '#FFF5F7', borderRadius: '12px', padding: '20px', border: '1px solid #FFE0E8' }}>
          <strong>임신중절수술 금액</strong>은 임신 주수에 따라 45만원~80만원입니다. 정확한 <strong>임신중절수술 금액</strong>은 초음파 검사로 주수 확인 후 안내드리며, 연세365산부인과의원은 현금·카드 동일 금액, 추가 비용 없는 투명한 가격 정책을 시행합니다.
        </p>

        {/* 대표 이미지 */}
        <div style={{ marginBottom: '40px' }}>
          <PriceImage />
        </div>

        {/* 목차 */}
        <div style={{ background: '#FFF5F7', borderRadius: '12px', padding: '20px 24px', marginBottom: '40px', border: '1px solid #FFE0E8' }}>
          <p style={{ fontWeight: 700, color: '#C2185B', marginBottom: '12px', fontSize: '15px' }}>📋 목차</p>
          {[
            '1. 낙태란? 정의와 뜻 정리',
            '2. 임신중절수술 금액 주수별 정리',
            '3. 임신중절수술 금액에 포함된 항목',
            '4. 임신중절수술 금액이 주수마다 다른 이유',
            '5. 합법적 낙태 4가지 조건',
            '6. 수술 후 회복 및 주의사항',
            '7. FAQ — 임신중절수술 금액 자주 묻는 질문',
          ].map((item) => (
            <p key={item} style={{ margin: '6px 0', fontSize: '14px', color: '#554455' }}>· {item}</p>
          ))}
        </div>

        {/* H2 — 섹션 1 */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #C2185B', paddingLeft: '14px', marginBottom: '16px' }}>
          1. 낙태란? 정의와 뜻 정리
        </h2>
        <p style={{ marginBottom: '16px', fontSize: '16px' }}>
          <strong>낙태뜻</strong>은 태아가 모체 밖에서 생존할 수 없는 시기에 인위적으로 임신을 종료하는 의료 행위를 말합니다. 의학적 공식 용어로는 <strong>인공임신중절</strong>이라고 하며, 일상에서는 낙태 또는 임신중절수술이라고 부릅니다.
        </p>
        <p style={{ marginBottom: '16px', fontSize: '16px' }}>
          <strong>낙태합법화</strong>는 2021년 1월 1일부로 형법상 낙태죄 조항이 효력을 상실하면서 이루어졌습니다. 이에 따라 임신 14주 이내의 임신중절수술은 임신부 본인의 자기결정권에 의해 합법적으로 시행할 수 있게 되었습니다.
        </p>
        <div style={{ background: '#FFF5F7', borderRadius: '12px', padding: '20px', marginBottom: '32px', border: '1px solid #FFE0E8' }}>
          <p style={{ fontWeight: 700, color: '#C2185B', marginBottom: '10px' }}>낙태 관련 주요 용어 정리</p>
          {[
            { term: '낙태 뜻', def: '태아를 인위적으로 임신 종료하는 의료 행위. 공식 용어는 인공임신중절' },
            { term: '낙태합법화', def: '2021년 1월 1일부로 형법상 낙태죄 조항 효력 상실. 임신 14주 이내 허용' },
            { term: '낙태시기', def: '임신 주수가 적을수록 안전. 임신초기낙태가 가장 권장됨' },
            { term: '낙태방법', def: '흡입식소파술(임신초기), 임신중절소파술(그 이후) 2가지 방법' },
          ].map(({ term, def }) => (
            <div key={term} style={{ display: 'flex', gap: '12px', marginBottom: '8px', fontSize: '14px' }}>
              <span style={{ color: '#C2185B', fontWeight: 700, minWidth: '90px' }}>{term}</span>
              <span style={{ color: '#554455' }}>{def}</span>
            </div>
          ))}
        </div>

        {/* H2 — 섹션 2 */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #C2185B', paddingLeft: '14px', marginBottom: '16px' }}>
          2. 임신중절수술 금액 주수별 정리
        </h2>
        <p style={{ marginBottom: '16px', fontSize: '16px' }}>
          <strong>임신중절수술 금액</strong>은 임신 주수에 따라 달라집니다. 연세365산부인과의원의 주수별 <strong>임신중절수술 금액</strong>은 아래와 같습니다.
        </p>
        <div style={{ marginBottom: '24px' }}>
          <PriceTable />
        </div>
        <div style={{ background: '#FFF0F4', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px', border: '1px solid #FFD6E4' }}>
          <p style={{ fontSize: '14px', color: '#880E4F', margin: 0, lineHeight: 1.9 }}>
            💡 <strong>임신중절수술 금액 요약 (2026년 기준)</strong><br />
            · 8주 미만: <strong>45만원</strong> (수술비+영양수액 포함)<br />
            · 8주: <strong>60만원</strong> (수술비+영양수액 포함)<br />
            · 9주: <strong>70만원</strong> (수술비+영양수액 포함)<br />
            · 10주: <strong>80만원</strong> (수술비+영양수액 포함)<br />
            · 선택: 자궁유착방지제 +5만원<br />
            · 현금/카드 동일 금액 · 부가세 포함
          </p>
        </div>

        {/* H2 — 섹션 3 */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #C2185B', paddingLeft: '14px', marginBottom: '16px' }}>
          3. 임신중절수술 금액에 포함된 항목
        </h2>
        <p style={{ marginBottom: '16px', fontSize: '16px' }}>
          연세365산부인과의원의 <strong>임신중절수술 금액</strong>에는 아래 항목이 모두 포함되어 있어 추가 비용 없이 안심하고 수술받으실 수 있습니다.
        </p>
        {[
          { title: '수술비', desc: '산부인과 전문의 직접 시행 수술비 전액 포함' },
          { title: '마취비', desc: '수면마취(정맥마취) 비용 포함, 통증 없는 수술' },
          { title: '영양수액', desc: '수술 후 빠른 회복을 위한 영양수액 처치 포함' },
          { title: '회복실', desc: '수술 후 프라이빗 회복실 이용 포함' },
          { title: '사후 상담', desc: '수술 후 회복 관련 전문의 1:1 상담 포함' },
        ].map(({ title, desc }) => (
          <div key={title} style={{ display: 'flex', gap: '16px', marginBottom: '10px', padding: '14px 16px', background: '#FFFAFB', borderRadius: '10px', border: '1px solid #FFE0E8' }}>
            <span style={{ color: '#C2185B', fontWeight: 700, minWidth: '70px', fontSize: '14px' }}>✔ {title}</span>
            <span style={{ fontSize: '14px', color: '#554455' }}>{desc}</span>
          </div>
        ))}
        <p style={{ marginBottom: '32px', marginTop: '16px', fontSize: '16px' }}>
          <strong>임신중절수술 금액</strong> 외 별도 청구되는 숨겨진 비용은 일절 없습니다. 상담 시 안내받은 금액 그대로 진행됩니다.
        </p>

        {/* H2 — 섹션 4 */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #C2185B', paddingLeft: '14px', marginBottom: '16px' }}>
          4. 임신중절수술 금액이 주수마다 다른 이유
        </h2>
        <p style={{ marginBottom: '16px', fontSize: '16px' }}>
          <strong>임신중절수술 금액</strong>이 주수마다 다른 이유는 임신 주수가 증가할수록 태아의 크기가 커지고, 수술 난이도와 마취 시간이 늘어나기 때문입니다.
        </p>
        {[
          { week: '8주 미만', reason: '태아 크기가 작아 수술 시간이 짧고 난이도가 낮아 임신중절수술 금액이 가장 낮습니다.' },
          { week: '8주', reason: '태낭이 커지기 시작하며 수술 시간이 다소 늘어나 임신중절수술 금액이 상승합니다.' },
          { week: '9주', reason: '태아 형태가 뚜렷해지며 수술 정밀도가 필요해 임신중절수술 금액이 높아집니다.' },
          { week: '10주', reason: '수술 난이도가 높아지고 마취 시간이 늘어나 임신중절수술 금액이 가장 높습니다.' },
        ].map(({ week, reason }) => (
          <div key={week} style={{ display: 'flex', gap: '16px', marginBottom: '12px', padding: '14px 16px', background: '#FFFAFB', borderRadius: '10px', border: '1px solid #FFE0E8' }}>
            <span style={{ color: '#C2185B', fontWeight: 900, minWidth: '70px', fontSize: '14px' }}>{week}</span>
            <span style={{ fontSize: '14px', color: '#554455' }}>{reason}</span>
          </div>
        ))}
        <p style={{ marginBottom: '32px', marginTop: '16px', fontSize: '16px' }}>
          따라서 <strong>임신중절수술 금액</strong>과 안전 모두를 위해 임신이 확인되면 빠른 시일 내에 산부인과를 방문하시는 것이 중요합니다.
        </p>

        {/* H2 — 섹션 5 */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #C2185B', paddingLeft: '14px', marginBottom: '16px' }}>
          5. 합법적 낙태 4가지 조건
        </h2>
        <p style={{ marginBottom: '16px', fontSize: '16px' }}>
          모자보건법 제14조에 따라 아래 조건에 해당하는 경우 합법적으로 임신중절수술을 받을 수 있습니다. 또한 임신 14주 이내는 본인의 자기결정권으로 가능합니다.
        </p>
        <div style={{ background: '#FFF5F7', borderRadius: '12px', padding: '20px 24px', marginBottom: '32px', border: '1px solid #FFE0E8' }}>
          {[
            { num: '1', text: '본인 또는 배우자가 우생학적·유전학적 정신장애나 신체질환이 있는 경우' },
            { num: '2', text: '본인 또는 배우자가 전염성 질환(풍진, HIV 등)이 있는 경우' },
            { num: '3', text: '강간 또는 준강간에 의하여 임신된 경우' },
            { num: '4', text: '법률상 혼인할 수 없는 혈족 또는 인척 간에 임신된 경우' },
            { num: '+', text: '임신 14주 이내: 임신부 본인의 자기결정권으로 가능 (2021년 낙태합법화 이후)' },
          ].map(({ num, text }) => (
            <div key={num} style={{ display: 'flex', gap: '12px', marginBottom: '10px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ background: '#C2185B', color: '#fff', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', flexShrink: 0 }}>{num}</span>
              <span style={{ color: '#554455' }}>{text}</span>
            </div>
          ))}
        </div>

        {/* H2 — 섹션 6 */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #C2185B', paddingLeft: '14px', marginBottom: '16px' }}>
          6. 수술 후 회복 및 주의사항
        </h2>
        <p style={{ marginBottom: '16px', fontSize: '16px' }}>
          임신중절수술 후 빠른 회복을 위해 아래 사항을 꼭 지켜주세요.
        </p>
        {[
          { title: '수술 당일', items: ['심한 활동 및 운전 금지', '충분한 휴식', '처방 약물 복용', '음주·흡연 금지'] },
          { title: '수술 후 1주일', items: ['무거운 물건 들기 금지', '욕조 목욕 금지 (샤워만)', '성관계 금지', '사우나·수영 금지'] },
          { title: '수술 후 2~4주', items: ['다음 생리까지 피임 필요', '이상 증상 시 즉시 내원', '정기 검진 권장'] },
        ].map(({ title, items }) => (
          <div key={title} style={{ marginBottom: '12px', padding: '16px 20px', background: '#FFFAFB', borderRadius: '12px', border: '1px solid #FFE0E8' }}>
            <p style={{ fontWeight: 700, color: '#C2185B', marginBottom: '8px', fontSize: '15px' }}>📌 {title}</p>
            {items.map((item) => (
              <p key={item} style={{ margin: '4px 0', fontSize: '14px', color: '#554455' }}>· {item}</p>
            ))}
          </div>
        ))}
        <div style={{ background: '#FFF0F4', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px', border: '1px solid #FFD6E4' }}>
          <p style={{ fontSize: '14px', color: '#880E4F', margin: 0, lineHeight: 1.8 }}>
            ⚠️ <strong>즉시 내원이 필요한 증상</strong><br />
            · 38도 이상 고열 지속<br />
            · 심한 복통 지속<br />
            · 생리대를 1시간에 2개 이상 사용할 과다출혈<br />
            · 악취 나는 분비물
          </p>
        </div>

        {/* H2 — FAQ */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #C2185B', paddingLeft: '14px', marginBottom: '16px' }}>
          7. FAQ — 임신중절수술 금액 자주 묻는 질문
        </h2>
        {[
          { q: '임신중절수술 금액이 얼마인가요?', a: '임신중절수술 금액은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 임신중절수술 금액에는 수술비·마취비·영양수액이 포함되며 현금과 카드 금액이 동일합니다. 선택 항목으로 유착방지제 5만원이 있습니다.' },
          { q: '낙태란 무엇인가요? 낙태의 정의와 뜻은?', a: '낙태(인공임신중절)란 태아가 모체 밖에서 생존할 수 없는 시기에 인위적으로 임신을 종료하는 의료 행위입니다. 2021년 낙태합법화 이후 임신 14주 이내는 본인 결정으로 가능합니다.' },
          { q: '임신중절수술 금액 외 추가 비용이 있나요?', a: '연세365산부인과의원은 상담 시 안내한 임신중절수술 금액 외 추가 비용이 일절 없습니다. 현금과 카드 금액이 동일합니다.' },
          { q: '임신중절수술 금액은 왜 주수마다 다른가요?', a: '주수가 늘수록 태아 크기가 커지고 수술 난이도와 마취 시간이 늘어나 임신중절수술 금액이 높아집니다. 주수가 적을수록 금액이 낮고 회복도 빠릅니다.' },
          { q: '합법적 낙태 조건은 무엇인가요?', a: '모자보건법 제14조에 따라 유전성 질환, 전염성 질환, 강간·준강간에 의한 임신, 근친 간 임신 4가지 조건과 임신 14주 이내 본인 결정으로 가능합니다.' },
          { q: '당일 수술이 가능한가요?', a: '네, 당일 예약·검사·수술이 가능합니다. 단, 수술 6시간 전 금식이 필요합니다.' },
          { q: '비밀 보장이 되나요?', a: '의료법에 따라 모든 상담과 진료 기록은 철저히 비밀 보장됩니다. 본인 동의 없이 외부에 절대 유출되지 않습니다.' },
        ].map(({ q, a }, i) => (
          <div key={i} style={{ marginBottom: '12px', border: '1px solid #FFE0E8', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ background: '#FFF5F7', padding: '14px 18px', fontWeight: 700, fontSize: '15px', color: '#C2185B' }}>
              Q. {q}
            </div>
            <div style={{ padding: '14px 18px', fontSize: '14px', color: '#554455', lineHeight: 1.7 }}>
              A. {a}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ marginTop: '48px', background: 'linear-gradient(135deg, #C2185B 0%, #880E4F 100%)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>
            임신중절수술 금액 · 지금 바로 상담받으세요
          </p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginBottom: '24px' }}>
            1:1 비밀 보장 · 당일 수술 가능 · 사당역 4번 출구
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
              style={{ background: '#FEE500', color: '#3B1B1B', padding: '14px 28px', borderRadius: '50px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
              💬 카카오톡 무료상담
            </a>
            <a href="tel:02-585-3650"
              style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '14px 28px', borderRadius: '50px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' }}>
              📞 02-585-3650
            </a>
          </div>
        </div>

        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link href="/abortion" style={{ color: '#C2185B', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
            → 임신중절클리닉 자세히 보기
          </Link>
        </div>

      </div>
    </>
  )
}