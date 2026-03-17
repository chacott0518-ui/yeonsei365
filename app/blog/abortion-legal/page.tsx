import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '낙태수술 합법화 뜻 시기와 비용 | 임신초기중절수술 병원 | 연세365산부인과',
  description: '낙태수술 합법화 뜻과 시기, 합법적 조건 4가지, 임신초기중절수술 비용까지 완벽 정리. 8주 미만 45만원. 사당역 4번출구 연세365산부인과 전문의 직접 시행.',
  keywords: [
    '낙태수술합법화', '낙태합법화', '낙태합법화시기', '낙태합법화뜻',
    '임신초기중절수술', '임신초기중절수술비용', '임신초기중절수술병원',
    '낙태수술비용', '낙태병원', '임신중절합법', '모자보건법낙태',
    '관악구낙태병원', '사당역산부인과', '임신중절수술병원'
  ],
  openGraph: {
    title: '낙태수술 합법화 뜻 시기와 비용 | 연세365산부인과',
    description: '낙태수술 합법화 뜻과 시기, 합법적 조건 4가지 완벽 정리. 8주 미만 45만원.',
    url: 'https://yeonsei365.vercel.app/blog/abortion-legal',
    images: [{ url: 'https://yeonsei365.vercel.app/og' }],
  },
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/blog/abortion-legal',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '낙태수술 합법화 뜻 시기와 비용 | 임신초기중절수술 병원',
  description: '낙태수술 합법화 뜻과 시기, 합법적 조건, 임신초기중절수술 비용 안내',
  author: { '@type': 'Organization', name: '연세365산부인과' },
  publisher: { '@type': 'Organization', name: '연세365산부인과' },
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '낙태수술 합법화는 언제부터인가요?', acceptedAnswer: { '@type': 'Answer', text: '2021년 1월 1일부터 낙태죄 처벌 조항이 효력을 상실했습니다. 헌법재판소의 2019년 헌법불합치 결정에 따른 것으로, 현재 임신 14주 이내 임신중절은 사실상 처벌 공백 상태입니다.' } },
    { '@type': 'Question', name: '합법적으로 낙태수술을 받을 수 있는 조건은?', acceptedAnswer: { '@type': 'Answer', text: '모자보건법 제14조에 따라 ①유전학적·우생학적 질환 ②강간 또는 준강간에 의한 임신 ③혈족·인척 간 임신 ④모체 건강상의 이유 4가지 조건에 해당하면 합법적으로 시술 가능합니다.' } },
    { '@type': 'Question', name: '임신초기중절수술 비용은 얼마인가요?', acceptedAnswer: { '@type': 'Answer', text: '연세365산부인과 기준 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 영양제와 1인 회복실이 포함된 가격입니다.' } },
    { '@type': 'Question', name: '임신초기중절수술 당일 퇴원이 가능한가요?', acceptedAnswer: { '@type': 'Answer', text: '네, 수술 후 회복실에서 안정을 취한 후 당일 퇴원이 가능합니다.' } },
    { '@type': 'Question', name: '혼자 내원해도 되나요?', acceptedAnswer: { '@type': 'Answer', text: '성인이라면 혼자 내원하셔도 됩니다. 다만 수술 후 운전은 불가능하므로 대중교통을 이용하시기 바랍니다.' } },
  ],
}

function HeroImage() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)',
      borderRadius: '20px',
      padding: '40px 32px',
      textAlign: 'center',
      maxWidth: '480px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255,215,0,0.06)' }} />
      <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(255,215,0,0.04)' }} />
      <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(255,215,0,0.8)', marginBottom: '16px', fontWeight: 600 }}>
        LEGAL NOTICE · 2026
      </div>
      <div style={{ fontSize: '32px', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
        낙태수술<br />
        <span style={{ color: '#FFD700' }}>합법화</span> 완벽 가이드
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {['2019 헌법불합치', '2021 처벌공백', '14주 이내 허용'].map((t) => (
          <span key={t} style={{ background: 'rgba(255,215,0,0.15)', border: '1px solid rgba(255,215,0,0.3)', borderRadius: '100px', padding: '6px 14px', fontSize: '11px', color: '#FFD700', fontWeight: 600 }}>{t}</span>
        ))}
      </div>
      <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '14px 20px' }}>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginBottom: '6px' }}>연세365산부인과 · 사당역 4번출구</div>
        <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>전문의 직접 시행 · 1:1 비밀보장</div>
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
        <div key={num} style={{
          display: 'flex', gap: '16px',
          background: 'linear-gradient(135deg, #0F2027 0%, #1a3a4a 100%)',
          border: '1px solid rgba(255,215,0,0.2)',
          borderRadius: '16px', padding: '18px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,215,0,0.15)', border: '1px solid rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>{icon}</div>
            <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,215,0,0.7)' }}>{num}</div>
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFD700', marginBottom: '6px' }}>{title}</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>{desc}</div>
          </div>
        </div>
      ))}
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
    <div style={{
      background: '#fff',
      borderRadius: '20px',
      border: '1px solid #B2EBE0',
      overflow: 'hidden',
      maxWidth: '420px',
      margin: '0 auto',
      boxShadow: '0 8px 32px rgba(0,150,120,0.12)',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #00897B 0%, #00BCD4 100%)',
        padding: '22px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 4, left: 0, right: 0, fontSize: 10, color: 'rgba(255,255,255,0.2)', letterSpacing: 12, textAlign: 'center' }}>✦ ✧ ✦ ✧ ✦</div>
        <div style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.85)', marginBottom: '6px' }}>YEONSEI 365</div>
        <div style={{ fontSize: '20px', fontWeight: 900, color: '#fff' }}>임신초기중절수술 비용</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>흡입식 소파술 · 자궁유착방지제 +5만원</div>
      </div>
      <div style={{ padding: '16px 20px 0' }}>
        {prices.map(({ week, price, sub }, i) => (
          <div key={week} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 0',
            borderBottom: i < prices.length - 1 ? '1px dashed #B2EBE0' : 'none',
          }}>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#004D40' }}>{week}</div>
              <div style={{ fontSize: '10px', color: '#80CBC4', marginTop: '2px' }}>{sub}</div>
            </div>
            <div>
              <span style={{ fontSize: '28px', fontWeight: 900, color: '#00897B' }}>{price}</span>
              <span style={{ fontSize: '13px', fontWeight: 500, color: '#00BCD4', marginLeft: '2px' }}>만원</span>
            </div>
          </div>
        ))}
        <div style={{ background: '#E0F7FA', borderRadius: '8px', padding: '10px', textAlign: 'center', margin: '12px 0', fontSize: '11px', color: '#00695C' }}>
          영양제 · 1인 회복실 · 현금/카드 동일 · 부가세 포함
        </div>
      </div>
      <div style={{ padding: '10px 20px 16px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #E0F7FA' }}>
        <span style={{ fontSize: '11px', color: '#80CBC4' }}>📍 사당역 4번출구</span>
        <span style={{ fontSize: '11px', color: '#80CBC4' }}>📞 02-585-3650</span>
      </div>
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
        <div key={num} style={{
          background: 'linear-gradient(135deg, #FFF8F0, #FFF0E8)',
          border: '1px solid #FFCCBC',
          borderRadius: '14px', padding: '16px 14px',
          display: 'flex', gap: '12px', alignItems: 'flex-start',
        }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, #FF7043, #E64A19)',
            color: '#fff', fontWeight: 900, fontSize: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{num}</div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#BF360C', marginBottom: '3px' }}>{title}</div>
            <div style={{ fontSize: '11px', color: '#E64A19' }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function CriteriaCard() {
  const items = [
    { icon: '👩‍⚕️', title: '산부인과 전문의 직접 시행', desc: '경험 풍부한 전문의가 처음부터 끝까지 직접 집도합니다. 대리 수술 없음.' },
    { icon: '🔒', title: '완벽한 비밀 보장', desc: '1:1 개인 상담실 운영. 의료법에 따라 개인정보 철저 보호.' },
    { icon: '💰', title: '투명한 비용 공개', desc: '처음 안내한 가격이 최종 가격. 숨겨진 추가 비용 없음.' },
    { icon: '🏥', title: '당일 수술·당일 퇴원', desc: '예약 당일 초음파 확인 후 수술 진행. 불필요한 입원 없음.' },
    { icon: '📍', title: '사당역 4번출구 도보 2분', desc: '관악구·동작구·서초구·강남·과천 어디서든 접근 편리.' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {items.map(({ icon, title, desc }) => (
        <div key={title} style={{
          display: 'flex', gap: '14px', alignItems: 'flex-start',
          background: 'linear-gradient(135deg, #F1F8E9, #E8F5E9)',
          border: '1px solid #C8E6C9',
          borderRadius: '14px', padding: '16px',
        }}>
          <span style={{ fontSize: '26px', flexShrink: 0 }}>{icon}</span>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1B5E20', marginBottom: '4px' }}>{title}</div>
            <div style={{ fontSize: '13px', color: '#388E3C', lineHeight: 1.6 }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AbortionLegalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* 헤더 */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #E0E0E0', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src="https://i.imgur.com/f7h5DY0.png" alt="연세365 로고" style={{ height: '36px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a href="/blog" style={{ fontSize: '13px', color: '#00897B', textDecoration: 'none', fontWeight: 600 }}>공지사항</a>
          <a href="/" style={{ fontSize: '13px', color: '#666', textDecoration: 'none' }}>홈으로</a>
          <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
            style={{ background: '#FEE500', color: '#3B1B1B', padding: '8px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>
            💬 카톡상담
          </a>
        </div>
      </header>
      <div style={{ height: '64px' }} />

      <div style={{
        maxWidth: '680px', margin: '0 auto',
        padding: '32px 18px 100px',
        fontFamily: "'Pretendard', 'Apple SD Gothic Neo', sans-serif",
        color: '#1A1A2E', lineHeight: 1.85, fontSize: '16px',
        wordBreak: 'keep-all', overflowWrap: 'break-word',
      }}>

        {/* 브레드크럼 */}
        <div style={{ marginBottom: '20px', fontSize: '12px', color: '#999' }}>
          <Link href="/" style={{ color: '#999', textDecoration: 'none' }}>홈</Link>
          {' > '}
          <Link href="/blog" style={{ color: '#999', textDecoration: 'none' }}>공지사항</Link>
          {' > '}
          <span style={{ color: '#00897B' }}>낙태수술 합법화</span>
        </div>

        {/* 태그 */}
        <div style={{ marginBottom: '14px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ background: '#E0F7FA', color: '#00897B', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px' }}>합법화안내</span>
          <span style={{ background: '#F1F8E9', color: '#388E3C', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px' }}>비용안내</span>
          <span style={{ background: '#FFF8E1', color: '#F57F17', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px' }}>임신초기</span>
        </div>

        {/* H1 */}
        <h1 style={{ fontSize: '26px', fontWeight: 900, color: '#1A1A2E', lineHeight: 1.35, marginBottom: '10px' }}>
          낙태수술 합법화 뜻 시기와 비용<br />
          <span style={{ color: '#00897B' }}>임신초기중절수술 병원 완벽 가이드</span>
        </h1>
        <div style={{ fontSize: '12px', color: '#999', marginBottom: '28px' }}>
          연세365산부인과 · 2026년 3월 업데이트
        </div>

        {/* 대표 이미지 */}
        <div style={{ marginBottom: '32px' }}>
          <HeroImage />
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#999', marginTop: '8px' }}>
            2021년 낙태죄 처벌 조항 효력 상실 · 임신 14주 이내 사실상 허용
          </p>
        </div>

        {/* 목차 */}
        <div style={{ background: 'linear-gradient(135deg, #E0F7FA, #E8F5E9)', borderRadius: '14px', padding: '18px 20px', marginBottom: '36px', border: '1px solid #B2EBE0' }}>
          <p style={{ fontWeight: 700, color: '#00695C', marginBottom: '10px', fontSize: '14px' }}>📋 목차</p>
          {[
            '1. 낙태수술 합법화란? 뜻과 배경',
            '2. 합법화 시기 — 언제부터 바뀌었나?',
            '3. 합법적 낙태수술 4가지 조건 (모자보건법)',
            '4. 임신초기중절수술 비용 공개',
            '5. 흡입식 소파술 과정',
            '6. 임신초기중절수술 병원 선택 기준',
            '7. 수술 후 주의사항',
            '8. 연세365산부인과 선택 이유',
            '9. 자주 묻는 질문',
          ].map((item) => (
            <p key={item} style={{ margin: '5px 0', fontSize: '13px', color: '#004D40' }}>· {item}</p>
          ))}
        </div>

        {/* 섹션 1 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A1A2E', borderLeft: '4px solid #00897B', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          1. 낙태수술 합법화란? 뜻과 배경
        </h2>
        <p style={{ marginBottom: '14px' }}>
          낙태수술 합법화란 기존에 형법으로 처벌받던 임신중절수술이 더 이상 처벌 대상이 되지 않게 된 법적 변화를 의미합니다. 대한민국은 오랫동안 낙태를 형사처벌 대상으로 규정해왔으나 2019년 헌법재판소의 역사적인 결정으로 큰 변화를 맞이했습니다.
        </p>
        <p style={{ marginBottom: '14px' }}>
          헌법재판소는 2019년 4월 11일 낙태를 처벌하는 형법 조항이 <strong>여성의 자기결정권을 침해한다</strong>며 헌법불합치 결정을 내렸습니다. 이는 여성이 자신의 몸과 임신에 관한 결정을 스스로 내릴 권리가 있음을 헌법적으로 인정한 것입니다.
        </p>
        <p style={{ marginBottom: '14px' }}>
          이 결정 이후 국회에서 2020년 12월 31일까지 관련 법률을 개정하도록 했으나 개정이 이루어지지 않아, 2021년 1월 1일부터 해당 형법 조항은 자동으로 효력을 상실했습니다. 이로써 낙태수술은 사실상 처벌 공백 상태에 놓이게 되었습니다.
        </p>
        <div style={{ background: 'linear-gradient(135deg, #0F2027, #203A43)', borderRadius: '14px', padding: '18px 20px', marginBottom: '32px', border: '1px solid rgba(255,215,0,0.2)' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.9 }}>
            ⚖️ <span style={{ color: '#FFD700', fontWeight: 700 }}>낙태수술 합법화 핵심 정리</span><br />
            · 2019년 4월: 헌법재판소 낙태죄 헌법불합치 결정<br />
            · 2021년 1월 1일: 형법 낙태죄 처벌 조항 효력 상실<br />
            · 현재: 임신 14주 이내 사실상 처벌 공백 상태<br />
            · 모자보건법 제14조: 일정 조건 하 합법적 시술 가능
          </p>
        </div>

        {/* 섹션 2 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A1A2E', borderLeft: '4px solid #00897B', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          2. 합법화 시기 — 언제부터 바뀌었나?
        </h2>
        <p style={{ marginBottom: '14px' }}>
          낙태수술 합법화는 하루아침에 이루어진 것이 아닙니다. 수십 년간의 사회적 논의와 여성 인권 운동, 그리고 헌법재판소의 역사적 판단이 쌓인 결과입니다. 시기별로 어떤 변화가 있었는지 살펴보겠습니다.
        </p>
        {[
          { year: '1953년', title: '형법 제정', desc: '낙태를 형사처벌 대상으로 규정. 임부와 시술 의사 모두 처벌 대상.' },
          { year: '1973년', title: '모자보건법 제정', desc: '일정 조건 하 임신중절 허용. 제한적이지만 합법적 시술 근거 마련.' },
          { year: '2019년', title: '헌법불합치 결정', desc: '헌법재판소가 낙태죄 처벌 조항에 헌법불합치 결정. 2020년 12월 31일까지 법률 개정 촉구.' },
          { year: '2021년', title: '처벌 공백 시작', desc: '국회 법률 미개정으로 2021년 1월 1일부터 낙태죄 처벌 조항 효력 상실. 현재까지 지속.' },
        ].map(({ year, title, desc }) => (
          <div key={year} style={{ display: 'flex', gap: '16px', marginBottom: '12px', padding: '14px 16px', background: '#FAFFFE', borderRadius: '12px', border: '1px solid #B2EBE0' }}>
            <div style={{ minWidth: '60px', flexShrink: 0 }}>
              <div style={{ fontSize: '13px', fontWeight: 900, color: '#00897B' }}>{year}</div>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#004D40', marginBottom: '4px' }}>{title}</div>
              <div style={{ fontSize: '13px', color: '#546E7A', lineHeight: 1.6 }}>{desc}</div>
            </div>
          </div>
        ))}
        <p style={{ marginBottom: '32px', marginTop: '16px' }}>
          현재 대한민국에서는 임신 14주 이내의 임신중절이 사실상 처벌 공백 상태에 있습니다. 다만 완전한 법제화가 이루어진 것은 아니므로 <strong>반드시 합법적인 의료기관에서 안전하게 시술받으시길 권장</strong>합니다.
        </p>

        {/* 섹션 3 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A1A2E', borderLeft: '4px solid #FFD700', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          3. 합법적 낙태수술 4가지 조건 (모자보건법)
        </h2>
        <p style={{ marginBottom: '16px' }}>
          2021년 이후 처벌 공백이 생겼지만, 모자보건법 제14조는 여전히 유효합니다. 다음 4가지 조건에 해당하는 경우 명확히 합법적으로 임신중절수술을 받을 수 있습니다.
        </p>
        <LegalCard />
        <div style={{ background: 'linear-gradient(135deg, #0F2027, #203A43)', borderRadius: '12px', padding: '16px 18px', marginBottom: '32px', border: '1px solid rgba(255,215,0,0.15)', marginTop: '16px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.9 }}>
            📌 <span style={{ color: '#FFD700', fontWeight: 700 }}>중요 안내</span><br />
            · 위 4가지 조건 외에도 임신 14주 이내는 사실상 처벌 공백 상태<br />
            · 모든 시술은 반드시 합법적 의료기관에서 받으실 것을 권장<br />
            · 불법 시술은 생명을 위협할 수 있으므로 절대 금지
          </p>
        </div>

        {/* 섹션 4 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A1A2E', borderLeft: '4px solid #00897B', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          4. 임신초기중절수술 비용 공개
        </h2>
        <p style={{ marginBottom: '20px' }}>
          임신초기중절수술 비용은 임신 주수에 따라 달라집니다. 연세365산부인과는 수술비, 영양제, 1인 회복실이 모두 포함된 투명한 가격을 안내드립니다. 주수가 늘어날수록 수술 난이도가 높아지므로 <strong>가능한 한 빠른 결정</strong>을 권장합니다.
        </p>
        <div style={{ marginBottom: '20px' }}>
          <PriceTable />
        </div>
        <div style={{ background: '#E0F7FA', borderRadius: '12px', padding: '16px 18px', marginBottom: '32px', border: '1px solid #B2EBE0' }}>
          <p style={{ fontSize: '13px', color: '#00695C', margin: 0, lineHeight: 1.9 }}>
            💡 <strong>비용 안내 (2026년 기준)</strong><br />
            · 8주 미만: 45만원 (영양제 포함)<br />
            · 8주: 60만원 (영양제 포함)<br />
            · 9주: 70만원 (영양제 포함)<br />
            · 10주: 80만원 (영양제 포함)<br />
            · 선택사항: 자궁유착방지제 +5만원<br />
            · 현금/카드 동일가 · 부가세 포함
          </p>
        </div>

        {/* 섹션 5 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A1A2E', borderLeft: '4px solid #00897B', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          5. 흡입식 소파술 과정
        </h2>
        <p style={{ marginBottom: '16px' }}>
          연세365산부인과에서 시행하는 임신초기중절수술은 흡입식 소파술 방식입니다. 자궁경부를 통해 흡입 기구를 삽입하여 임신 조직을 제거하는 방식으로 출혈이 적고 회복이 빠릅니다. 전체 내원 시간은 약 2~3시간 내외입니다.
        </p>
        <ProcessCard />
        <p style={{ marginBottom: '14px', marginTop: '16px' }}>
          수술 후 운전은 불가능하므로 대중교통이나 택시를 이용하시거나 동행인과 함께 오시는 것을 권장합니다.
        </p>
        <div style={{ background: '#FFF8E1', borderRadius: '12px', padding: '16px 18px', marginBottom: '32px', border: '1px solid #FFE082' }}>
          <p style={{ fontSize: '13px', color: '#E65100', margin: 0, lineHeight: 1.9 }}>
            📋 <strong>수술 당일 준비사항</strong><br />
            · 수술 6시간 전부터 금식<br />
            · 렌즈 대신 안경 착용<br />
            · 편안한 복장으로 내원<br />
            · 대중교통 또는 동행인 준비
          </p>
        </div>

        {/* 섹션 6 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A1A2E', borderLeft: '4px solid #00897B', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          6. 임신초기중절수술 병원 선택 기준
        </h2>
        <p style={{ marginBottom: '16px' }}>
          임신초기중절수술을 결정했다면 올바른 병원 선택이 매우 중요합니다. 다음 기준을 반드시 확인하세요.
        </p>
        {[
          { title: '산부인과 전문의 직접 시행 여부', desc: '전문의 자격증이 있는 의사가 직접 수술하는지 확인하세요. 경험이 부족한 의사나 대리 수술은 합병증 위험이 높아집니다.' },
          { title: '투명한 비용 공개', desc: '처음 안내한 비용이 최종 비용인지 확인하세요. 수술비, 영양제, 회복실 비용이 별도로 청구되는지 꼭 물어보세요.' },
          { title: '비밀 보장 시스템', desc: '1:1 상담실 운영 여부와 개인정보 보호 정책을 확인하세요. 의료법에 따라 개인정보는 철저히 보호되어야 합니다.' },
          { title: '위생적인 수술 환경', desc: '멸균 처리된 수술 도구와 위생적인 환경에서 수술이 이루어지는지 확인하세요. 감염 예방이 핵심입니다.' },
          { title: '수술 후 관리 시스템', desc: '수술 후 이상 증상 발생 시 즉시 연락할 수 있는 시스템이 있는지 확인하세요.' },
        ].map(({ title, desc }) => (
          <div key={title} style={{ marginBottom: '10px', padding: '14px 16px', background: '#FAFFFE', borderRadius: '12px', border: '1px solid #B2EBE0' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#004D40', marginBottom: '6px' }}>✔ {title}</div>
            <div style={{ fontSize: '13px', color: '#546E7A', lineHeight: 1.7 }}>{desc}</div>
          </div>
        ))}
        <p style={{ marginBottom: '32px', marginTop: '16px' }}>
          절대 비용만 보고 병원을 선택하지 마세요. 저렴한 비용을 내세우는 곳이 모든 항목을 포함한 것인지 반드시 확인해야 합니다. 안전하고 합법적인 의료기관에서 전문의에게 시술받는 것이 가장 중요합니다.
        </p>

        {/* 섹션 7 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A1A2E', borderLeft: '4px solid #00897B', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          7. 수술 후 주의사항
        </h2>
        <p style={{ marginBottom: '16px' }}>
          임신초기중절수술 후 빠른 회복을 위해 다음 사항을 반드시 지켜주세요.
        </p>
        {[
          { title: '수술 당일', color: '#E8F5E9', border: '#C8E6C9', titleColor: '#2E7D32', items: ['무리한 활동 및 운전 금지', '처방된 약물 복용', '음주 및 흡연 금지', '충분한 휴식'] },
          { title: '수술 후 1주일', color: '#E0F7FA', border: '#B2EBE0', titleColor: '#00695C', items: ['무거운 물건 들기 금지', '욕조 목욕 금지 (샤워만 가능)', '성관계 금지', '수영·사우나 금지'] },
          { title: '수술 후 2~4주', color: '#FFF8E1', border: '#FFE082', titleColor: '#E65100', items: ['다음 생리까지 피임 필요', '이상 증상 시 즉시 내원', '과도한 운동 자제', '정기 검진 권장'] },
        ].map(({ title, color, border, titleColor, items }) => (
          <div key={title} style={{ marginBottom: '10px', padding: '16px 18px', background: color, borderRadius: '12px', border: `1px solid ${border}` }}>
            <p style={{ fontWeight: 700, color: titleColor, marginBottom: '10px', fontSize: '14px' }}>📌 {title}</p>
            {items.map((item) => (
              <p key={item} style={{ margin: '5px 0', fontSize: '13px', color: '#37474F' }}>· {item}</p>
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
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A1A2E', borderLeft: '4px solid #00897B', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          8. 연세365산부인과 선택 이유
        </h2>
        <p style={{ marginBottom: '16px' }}>
          임신초기중절수술을 결정하셨다면 안전하고 합법적인 환경에서 시술받는 것이 가장 중요합니다. 연세365산부인과를 선택하셔야 하는 이유를 솔직하게 말씀드립니다.
        </p>
        <CriteriaCard />
        <p style={{ marginBottom: '32px', marginTop: '16px', fontSize: '14px', color: '#546E7A' }}>
          연세365산부인과는 서울 관악구 과천대로 939 3층에 위치합니다. 사당역 4번 출구에서 도보 2분 거리이며 진료 시간은 평일 오전 9시부터 오후 6시까지입니다. 전화 또는 카카오톡으로 편하게 상담 예약하실 수 있습니다.
        </p>

        {/* 섹션 9 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A1A2E', borderLeft: '4px solid #00897B', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          9. 자주 묻는 질문
        </h2>
        {[
          { q: '낙태수술 합법화는 언제부터인가요?', a: '2021년 1월 1일부터 낙태죄 처벌 조항이 효력을 상실했습니다. 헌법재판소의 2019년 헌법불합치 결정에 따른 것으로, 현재 임신 14주 이내는 사실상 처벌 공백 상태입니다.' },
          { q: '임신초기중절수술 비용이 얼마인가요?', a: '연세365산부인과 기준 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 영양제와 1인 회복실이 포함된 가격이며 추가 비용이 없습니다.' },
          { q: '혼자 내원해도 되나요?', a: '성인이라면 혼자 내원하셔도 됩니다. 단 수술 후 운전은 불가능하므로 대중교통을 이용하시거나 귀가 시 동행인이 있으면 더 안전합니다.' },
          { q: '수술 당일 퇴원이 가능한가요?', a: '네, 수술 후 회복실에서 1~2시간 안정을 취한 후 당일 퇴원이 가능합니다.' },
          { q: '미성년자도 수술이 가능한가요?', a: '미성년자는 법정대리인의 동의가 필요합니다. 보호자와 함께 내원하셔야 합니다.' },
          { q: '수술 후 언제부터 일상생활이 가능한가요?', a: '대부분 수술 다음날부터 가벼운 일상생활이 가능합니다. 무거운 물건을 들거나 격렬한 운동은 1주일 정도 피하시는 것이 좋습니다.' },
          { q: '비밀이 보장되나요?', a: '네, 모든 상담과 진료는 1:1로 진행되며 의료법에 따라 개인정보는 절대 외부에 유출되지 않습니다.' },
          { q: '예약은 어떻게 하나요?', a: '전화(02-585-3650) 또는 카카오톡 채널로 상담 및 예약이 가능합니다. 당일 예약 및 당일 수술도 가능합니다.' },
        ].map(({ q, a }, i) => (
          <div key={i} style={{ marginBottom: '10px', border: '1px solid #B2EBE0', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ background: '#E0F7FA', padding: '13px 16px', fontWeight: 700, fontSize: '14px', color: '#00695C' }}>Q. {q}</div>
            <div style={{ padding: '13px 16px', fontSize: '13px', color: '#37474F', lineHeight: 1.7 }}>A. {a}</div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ marginTop: '48px', background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#FFD700', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '10px' }}>
            YEONSEI 365 산부인과
          </p>
          <p style={{ color: '#fff', fontSize: '22px', fontWeight: 900, marginBottom: '8px', lineHeight: 1.3 }}>
            지금 바로 무료 상담 받으세요
          </p>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', marginBottom: '24px' }}>
            1:1 비밀 보장 · 당일 수술 가능 · 사당역 4번출구
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
              style={{ background: '#FEE500', color: '#3B1B1B', padding: '14px 24px', borderRadius: '50px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              💬 카카오톡 무료상담
            </a>
            <a href="tel:02-585-3650"
              style={{ background: 'rgba(255,215,0,0.15)', color: '#FFD700', padding: '14px 24px', borderRadius: '50px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', border: '1px solid rgba(255,215,0,0.3)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              📞 02-585-3650
            </a>
          </div>
        </div>

        {/* 하단 링크 */}
        <div style={{ marginTop: '28px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/blog/abortion-cost" style={{ color: '#00897B', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>→ 임신중절수술 비용 정보</Link>
          <Link href="/blog/abortion-price" style={{ color: '#00897B', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>→ 낙태 비용 가격 정보</Link>
          <Link href="/abortion" style={{ color: '#00897B', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>→ 임신중절클리닉 보기</Link>
        </div>

      </div>
    </>
  )
}