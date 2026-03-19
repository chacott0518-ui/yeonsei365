import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '낙태 비용 가격 총정리 2026 | 주수별 가격 완벽 공개 | 연세365산부인과',
  description: '낙태 비용 가격을 주수별로 투명하게 공개합니다. 8주 미만 45만원부터 시작. 숨겨진 추가 비용 없이 영양제·회복실 포함. 사당역 4번출구 연세365산부인과.',
  keywords: ['낙태비용', '낙태가격', '낙태비용가격', '임신중절비용', '낙태수술비용', '중절수술가격', '임신중절가격', '8주낙태비용', '관악구낙태비용', '사당역낙태병원'],
  openGraph: {
    title: '낙태 비용 가격 총정리 2026 | 연세365산부인과',
    description: '낙태 비용 가격 주수별 투명 공개. 8주 미만 45만원. 사당역 4번출구.',
    url: 'https://yeonsei365.vercel.app/blog/abortion-price',
    images: [{ url: 'https://yeonsei365.vercel.app/og', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/blog/abortion-price',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '낙태 비용 가격 총정리 2026',
  description: '주수별 낙태 비용 가격 및 합법적 조건 안내',
  author: { '@type': 'Organization', name: '연세365산부인과' },
  publisher: { '@type': 'Organization', name: '연세365산부인과' },
  datePublished: '2026-03-16',
  dateModified: '2026-03-16',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '낙태 비용이 얼마인가요?', acceptedAnswer: { '@type': 'Answer', text: '연세365산부인과 낙태 비용은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 영양제와 1인 회복실이 포함된 가격입니다.' } },
    { '@type': 'Question', name: '낙태 수술이 합법인가요?', acceptedAnswer: { '@type': 'Answer', text: '모자보건법 제14조에 따라 일정 조건 하에 합법적으로 임신중절수술을 받을 수 있습니다. 2021년 헌법재판소 결정 이후 임신 14주 이내 임신중절은 처벌 공백 상태입니다.' } },
    { '@type': 'Question', name: '낙태 비용에 추가 비용이 있나요?', acceptedAnswer: { '@type': 'Answer', text: '처음 안내한 가격 외 추가 비용이 없습니다. 수술비, 영양제, 1인 회복실이 모두 포함되어 있습니다.' } },
    { '@type': 'Question', name: '낙태 수술 당일 퇴원이 가능한가요?', acceptedAnswer: { '@type': 'Answer', text: '네, 수술 후 1~2시간 회복실에서 안정을 취한 후 당일 퇴원이 가능합니다.' } },
    { '@type': 'Question', name: '혼자 내원해도 되나요?', acceptedAnswer: { '@type': 'Answer', text: '성인이라면 혼자 내원하셔도 됩니다. 다만 수술 후 운전은 불가능하므로 대중교통을 이용하시기 바랍니다.' } },
  ],
}

function PriceHero() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #6B35FF 0%, #B935FF 50%, #FF35C8 100%)',
      borderRadius: '20px', padding: '36px 24px', textAlign: 'center',
      margin: '0 auto 8px', maxWidth: '360px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
      <div style={{ position: 'absolute', bottom: '-30px', left: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '4px' }}>연세365 산부인과</p>
      <p style={{ color: '#fff', fontSize: '22px', fontWeight: 900, lineHeight: 1.3, marginBottom: '20px' }}>8주 미만 기준<br />영양제 포함</p>
      <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '16px', padding: '16px 24px', display: 'inline-block' }}>
        <span style={{ color: '#EEFF00', fontSize: '88px', fontWeight: 900, lineHeight: 1 }}>45</span>
        <span style={{ color: '#fff', fontSize: '24px', fontWeight: 700, marginLeft: '4px' }}>만원</span>
      </div>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginTop: '14px' }}>현금/카드 동일가 · 부가세 포함</p>
    </div>
  )
}

function PriceTable() {
  const prices = [
    { week: '8주 미만', price: '45', sub: '가장 빠른 결정이 유리' },
    { week: '8주', price: '60', sub: '수술 가능 시기' },
    { week: '9주', price: '70', sub: '수술 가능 시기' },
    { week: '10주', price: '80', sub: '수술 가능 시기' },
  ]
  return (
    <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #C8B0FF', overflow: 'hidden', maxWidth: '400px', margin: '0 auto', boxShadow: '0 8px 32px rgba(107,53,255,0.12)' }}>
      <div style={{ background: 'linear-gradient(135deg, #7B52FF 0%, #B935FF 100%)', padding: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 4, left: 0, right: 0, fontSize: 10, color: 'rgba(255,255,255,0.2)', letterSpacing: 10, textAlign: 'center' }}>✦ ✧ ✦ ✧ ✦</div>
        <div style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.85)', marginBottom: '6px' }}>YEONSEI 365</div>
        <div style={{ fontSize: '20px', fontWeight: 900, color: '#fff' }}>낙태 비용 가격 안내</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>흡입식 소파술 · 자궁유착방지제 +5만원</div>
      </div>
      <div style={{ padding: '16px 20px 0' }}>
        {prices.map(({ week, price, sub }, i) => (
          <div key={week} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: i < prices.length - 1 ? '1px dashed #E0D0FF' : 'none' }}>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#2A1050' }}>{week}</div>
              <div style={{ fontSize: '10px', color: '#9980CC', marginTop: '2px' }}>{sub}</div>
            </div>
            <div>
              <span style={{ fontSize: '28px', fontWeight: 900, color: '#7B35E8' }}>{price}</span>
              <span style={{ fontSize: '13px', fontWeight: 500, color: '#9B55CC', marginLeft: '2px' }}>만원</span>
            </div>
          </div>
        ))}
        <div style={{ background: '#F5F0FF', borderRadius: '8px', padding: '10px', textAlign: 'center', margin: '12px 0', fontSize: '11px', color: '#6B35AA' }}>
          영양제 · 1인 회복실 · 현금/카드 동일 · 부가세 포함
        </div>
      </div>
      <div style={{ padding: '10px 20px 16px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #F0E8FF' }}>
        <span style={{ fontSize: '11px', color: '#9980CC' }}>📍 사당역 4번출구</span>
        <span style={{ fontSize: '11px', color: '#9980CC' }}>📞 02-585-3650</span>
      </div>
    </div>
  )
}

function LegalCard() {
  const conditions = [
    { num: '01', title: '유전학적·우생학적 질환', desc: '본인 또는 배우자가 대통령령으로 정하는 우생학적 또는 유전학적 정신장애나 신체질환이 있는 경우' },
    { num: '02', title: '강간 또는 준강간', desc: '강간 또는 준강간에 의하여 임신된 경우' },
    { num: '03', title: '혈족 또는 인척 간 임신', desc: '법률상 혼인할 수 없는 혈족 또는 인척 간에 임신된 경우' },
    { num: '04', title: '모체 건강상의 이유', desc: '임신의 지속이 보건의학적 이유로 모체의 건강을 심각하게 해치고 있거나 해칠 우려가 있는 경우' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '0 0 8px' }}>
      {conditions.map(({ num, title, desc }) => (
        <div key={num} style={{ display: 'flex', gap: '14px', background: '#F0F8FF', border: '1px solid #C8E0FF', borderRadius: '14px', padding: '16px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0, background: 'linear-gradient(135deg, #4488FF, #2255CC)', color: '#fff', fontWeight: 900, fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{num}</div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1133AA', marginBottom: '4px' }}>{title}</div>
            <div style={{ fontSize: '13px', color: '#334466', lineHeight: 1.7 }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function CompareCard() {
  const items = [
    { label: '가능 주수', drug: '7주 이내', surgery: '10주 이내' },
    { label: '방법', drug: '약물 복용', surgery: '흡입 기구' },
    { label: '통증', drug: '중등도 복통', surgery: '마취로 없음' },
    { label: '소요 시간', drug: '수일~수 주', surgery: '당일 완료' },
    { label: '완전 배출률', drug: '약 95%', surgery: '99% 이상' },
    { label: '비용', drug: '병원마다 상이', surgery: '45만원~' },
  ]
  return (
    <div style={{ overflowX: 'auto', margin: '0 0 8px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '280px' }}>
        <thead>
          <tr style={{ background: 'linear-gradient(135deg, #FF7B52, #FF35A0)' }}>
            {['구분', '약물중절', '흡입식 소파술'].map((h) => (
              <th key={h} style={{ padding: '12px 10px', color: '#fff', fontWeight: 700, textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)', fontSize: '13px' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map(({ label, drug, surgery }, i) => (
            <tr key={label} style={{ background: i % 2 === 0 ? '#FFF8F5' : '#fff' }}>
              <td style={{ padding: '10px', fontWeight: 700, color: '#FF5533', border: '1px solid #FFE0D8', textAlign: 'center', fontSize: '12px' }}>{label}</td>
              <td style={{ padding: '10px', color: '#554455', border: '1px solid #FFE0D8', textAlign: 'center', fontSize: '12px' }}>{drug}</td>
              <td style={{ padding: '10px', color: '#554455', border: '1px solid #FFE0D8', textAlign: 'center', fontSize: '12px', fontWeight: label === '비용' ? 700 : 400 }}>{surgery}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ProcessCard() {
  const steps = [
    { num: '01', title: '초음파 검사', desc: '정확한 주수 확인' },
    { num: '02', title: '수술 전 검사', desc: '혈압·혈액 검사' },
    { num: '03', title: '마취', desc: '통증 없이 편안하게' },
    { num: '04', title: '흡입식 소파술', desc: '약 10~15분 소요' },
    { num: '05', title: '1인 회복실', desc: '1~2시간 안정' },
    { num: '06', title: '상담 후 퇴원', desc: '당일 퇴원 가능' },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '0 0 8px' }}>
      {steps.map(({ num, title, desc }) => (
        <div key={num} style={{ background: '#FFF5FB', border: '1px solid #FFD6EE', borderRadius: '14px', padding: '16px 14px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0, background: 'linear-gradient(135deg, #FF8FAB, #E8305A)', color: '#fff', fontWeight: 900, fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{num}</div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1A0A10', marginBottom: '3px' }}>{title}</div>
            <div style={{ fontSize: '11px', color: '#AA5566' }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ReasonCard() {
  const reasons = [
    { icon: '👩‍⚕️', title: '전문의 직접 시행', desc: '연세대 졸업 산부인과 전문의가 직접 수술합니다.' },
    { icon: '🔒', title: '1:1 비밀 보장', desc: '모든 상담과 진료는 철저한 비밀이 보장됩니다.' },
    { icon: '💰', title: '투명한 낙태 비용', desc: '처음 안내한 가격 외 추가 비용이 없습니다.' },
    { icon: '🏥', title: '당일 수술 가능', desc: '예약 당일 수술 후 당일 퇴원이 가능합니다.' },
    { icon: '📍', title: '사당역 4번출구', desc: '관악구·동작구·서초구·강남·과천에서 편리하게 오실 수 있습니다.' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '0 0 8px' }}>
      {reasons.map(({ icon, title, desc }) => (
        <div key={title} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: 'linear-gradient(135deg, #F8F0FF 0%, #FFF0F8 100%)', border: '1px solid #E8D0FF', borderRadius: '14px', padding: '16px' }}>
          <span style={{ fontSize: '28px', flexShrink: 0 }}>{icon}</span>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#2A1050', marginBottom: '4px' }}>{title}</div>
            <div style={{ fontSize: '13px', color: '#664488', lineHeight: 1.6 }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AbortionPricePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* 헤더 */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #E8D0FF', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src="https://i.imgur.com/f7h5DY0.png" alt="연세365 로고" style={{ height: '36px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a href="/blog" style={{ fontSize: '13px', color: '#7B35E8', textDecoration: 'none', fontWeight: 600 }}>공지사항</a>
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
        color: '#1A0A10', lineHeight: 1.85, fontSize: '16px',
        wordBreak: 'keep-all', overflowWrap: 'break-word',
      }}>

        {/* 브레드크럼 */}
        <div style={{ marginBottom: '20px', fontSize: '12px', color: '#AA5566' }}>
          <Link href="/" style={{ color: '#AA5566', textDecoration: 'none' }}>홈</Link>
          {' > '}
          <Link href="/blog" style={{ color: '#AA5566', textDecoration: 'none' }}>공지사항</Link>
          {' > '}
          <span>낙태 비용 가격</span>
        </div>

        {/* 태그 */}
        <div style={{ marginBottom: '14px' }}>
          <span style={{ background: '#F0E8FF', color: '#7B35E8', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px' }}>비용안내</span>
        </div>

        {/* H1 */}
        <h1 style={{ fontSize: '26px', fontWeight: 900, color: '#1A0A10', lineHeight: 1.35, marginBottom: '10px' }}>
          낙태 비용 가격 총정리 2026<br />
          <span style={{ color: '#7B35E8' }}>주수별 가격 · 합법 조건 · 포함 항목</span>
        </h1>
        <div style={{ fontSize: '12px', color: '#999', marginBottom: '28px' }}>
          연세365산부인과 · 2026년 3월 업데이트
        </div>

        {/* 대표 이미지 */}
        <div style={{ marginBottom: '32px' }}>
          <PriceHero />
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#9980CC', marginTop: '8px' }}>
            8주 미만 기준 · 영양제+1인 회복실 포함
          </p>
        </div>

        {/* 목차 */}
        <div style={{ background: '#F5F0FF', borderRadius: '14px', padding: '18px 20px', marginBottom: '36px', border: '1px solid #E0D0FF' }}>
          <p style={{ fontWeight: 700, color: '#7B35E8', marginBottom: '10px', fontSize: '14px' }}>📋 목차</p>
          {[
            '1. 낙태 비용 가격, 왜 병원마다 다를까?',
            '2. 낙태 수술의 합법적 조건 (모자보건법)',
            '3. 주수별 낙태 비용 가격 공개',
            '4. 비용에 포함된 항목 상세',
            '5. 흡입식 소파술 vs 약물중절 비교',
            '6. 수술 당일 과정',
            '7. 수술 후 주의사항',
            '8. 연세365산부인과 선택 이유',
            '9. 자주 묻는 질문',
          ].map((item) => (
            <p key={item} style={{ margin: '5px 0', fontSize: '13px', color: '#554466' }}>· {item}</p>
          ))}
        </div>

        {/* 섹션 1 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #7B35E8', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          1. 낙태 비용 가격, 왜 병원마다 다를까?
        </h2>
        <p style={{ marginBottom: '14px' }}>
          인터넷에서 낙태 비용을 검색하면 병원마다 가격이 천차만별이라 어디를 믿어야 할지 막막하신 분들이 많습니다. 어떤 병원은 30만원이라고 하고 어떤 병원은 100만원이 넘기도 합니다.
        </p>
        <p style={{ marginBottom: '14px' }}>
          낙태 비용 가격이 병원마다 다른 가장 큰 이유는 <strong>포함 항목이 다르기 때문</strong>입니다. 수술비만 표기하고 영양제, 회복실 비용을 별도로 청구하는 병원이 있는 반면 연세365산부인과는 이 모든 항목을 포함한 가격을 처음부터 안내합니다.
        </p>
        <p style={{ marginBottom: '14px' }}>
          또한 임신 주수에 따라 수술 난이도가 달라지므로 가격도 차이가 납니다. 임신 초기일수록 수술이 간단하고 회복이 빠르며 비용도 저렴합니다. 낙태 비용을 비교할 때는 단순히 숫자만 볼 것이 아니라 <strong>어떤 항목이 포함되어 있는지 반드시 확인</strong>하셔야 합니다.
        </p>
        <div style={{ background: '#F5F0FF', borderRadius: '12px', padding: '16px 18px', marginBottom: '32px', border: '1px solid #E0D0FF' }}>
          <p style={{ fontSize: '13px', color: '#6635AA', margin: 0, lineHeight: 1.8 }}>
            💜 <strong>연세365산부인과 낙태 비용 원칙</strong><br />
            · 처음 안내한 가격 = 최종 가격<br />
            · 수술비 + 영양제 + 1인 회복실 포함<br />
            · 현금/카드 동일가 · 부가세 포함
          </p>
        </div>

        {/* 섹션 2 — 합법적 조건 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #4488FF', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          2. 낙태 수술의 합법적 조건 (모자보건법)
        </h2>
        <p style={{ marginBottom: '14px' }}>
          2021년 1월 1일부로 헌법재판소의 낙태죄 헌법불합치 결정에 따라 기존 형법상 낙태죄 조항의 효력이 상실되었습니다. 현재는 <strong>임신 14주 이내</strong>의 임신중절이 사실상 처벌 공백 상태에 놓여 있습니다.
        </p>
        <p style={{ marginBottom: '16px' }}>
          모자보건법 제14조에 따르면 다음 4가지 조건에 해당하는 경우 합법적으로 낙태 수술을 받을 수 있습니다.
        </p>
        <LegalCard />
        <p style={{ marginBottom: '14px', marginTop: '16px' }}>
          연세365산부인과는 관련 법규를 준수하며 산부인과 전문의가 직접 시술합니다. 안전한 수술 환경과 최신 의료 장비를 갖추고 있으며 수술 전후 충분한 상담과 관리를 제공합니다.
        </p>
        <div style={{ background: '#F0F8FF', borderRadius: '12px', padding: '16px 18px', marginBottom: '32px', border: '1px solid #C8E0FF' }}>
          <p style={{ fontSize: '13px', color: '#224488', margin: 0, lineHeight: 1.8 }}>
            ⚖️ <strong>2021년 이후 낙태죄 변화</strong><br />
            · 2021년 1월 1일부터 낙태죄 처벌 조항 효력 상실<br />
            · 임신 14주 이내는 사실상 처벌 공백 상태<br />
            · 반드시 합법적 의료기관에서 시술받을 것을 권장
          </p>
        </div>

        {/* 섹션 3 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #7B35E8', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          3. 주수별 낙태 비용 가격 공개
        </h2>
        <p style={{ marginBottom: '20px' }}>
          연세365산부인과의 낙태 비용 가격은 임신 주수를 기준으로 아래와 같이 책정됩니다. 주수가 늘어날수록 수술 난이도가 높아지므로 <strong>가능한 한 빠르게 결정</strong>하시는 것이 몸에도 비용 면에서도 유리합니다.
        </p>
        <div style={{ marginBottom: '20px' }}>
          <PriceTable />
        </div>
        <p style={{ marginBottom: '14px' }}>
          선택사항으로 자궁유착방지제 시술이 있으며 원하시는 경우 5만원이 추가됩니다. 자궁유착방지제는 수술 후 자궁 내 유착을 예방해 향후 임신 가능성을 높이는 데 도움이 됩니다.
        </p>
        <div style={{ background: '#FFF8F5', borderRadius: '12px', padding: '16px 18px', marginBottom: '32px', border: '1px solid #FFE0D0' }}>
          <p style={{ fontSize: '13px', color: '#AA4422', margin: 0, lineHeight: 1.8 }}>
            ⏰ <strong>임신 주수별 수술 가능 시기</strong><br />
            · 7주 이내: 약물중절 또는 수술중절 선택 가능<br />
            · 8~10주: 흡입식 소파술 시행<br />
            · 10주 초과: 별도 상담 필요
          </p>
        </div>

        {/* 섹션 4 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #7B35E8', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          4. 낙태 비용에 포함된 항목 상세
        </h2>
        <p style={{ marginBottom: '16px' }}>
          연세365산부인과의 낙태 비용에는 아래 모든 항목이 포함되어 있습니다. 수술 후 추가 청구 없이 안심하고 진료받으실 수 있습니다.
        </p>
        {[
          { title: '수술비', desc: '산부인과 전문의가 직접 시행하는 흡입식 소파술 수술비 전액이 포함되어 있습니다. 원장이 처음부터 끝까지 직접 집도합니다.' },
          { title: '마취비', desc: '수술 중 통증을 느끼지 않도록 마취를 시행합니다. 마취비가 별도로 청구되지 않습니다.' },
          { title: '영양제 투여', desc: '수술 후 빠른 회복을 위해 영양제를 투여합니다. 수술로 인한 체력 저하를 최소화하고 회복 시간을 단축하는 데 도움이 됩니다.' },
          { title: '1인 프라이빗 회복실', desc: '수술 후 다른 환자와 분리된 1인 회복실에서 안정을 취하실 수 있습니다. 민감한 상황에서 프라이버시를 최대한 보호합니다.' },
          { title: '수술 전후 상담', desc: '수술 전 초음파 검사와 건강 상태 확인, 수술 후 주의사항 상담이 모두 포함됩니다.' },
        ].map(({ title, desc }) => (
          <div key={title} style={{ display: 'flex', gap: '14px', marginBottom: '10px', padding: '14px 16px', background: '#FAFAFF', borderRadius: '12px', border: '1px solid #E8D8FF' }}>
            <span style={{ color: '#7B35E8', fontWeight: 700, minWidth: '72px', fontSize: '13px', flexShrink: 0 }}>✔ {title}</span>
            <span style={{ fontSize: '13px', color: '#554455', lineHeight: 1.7 }}>{desc}</span>
          </div>
        ))}
        <p style={{ marginBottom: '32px', marginTop: '16px', fontSize: '14px', color: '#666' }}>
          단, 자궁유착방지제(+5만원)는 선택사항입니다. 원하시는 경우 추가 시술이 가능합니다.
        </p>

        {/* 섹션 5 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #7B35E8', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          5. 흡입식 소파술 vs 약물중절 비교
        </h2>
        <p style={{ marginBottom: '16px' }}>
          낙태 방법은 크게 약물중절과 수술중절로 나뉩니다. 각각의 낙태 비용 가격과 특징을 비교해보겠습니다.
        </p>
        <CompareCard />
        <p style={{ marginBottom: '14px', marginTop: '16px' }}>
          임신 7주 이내라면 두 방법 모두 선택할 수 있지만 <strong>확실한 효과와 당일 완료</strong>를 원하신다면 흡입식 소파술이 더 적합합니다. 임신 7주를 초과했다면 흡입식 소파술이 유일한 선택지입니다.
        </p>
        <p style={{ marginBottom: '32px' }}>
          약물중절은 수술이 필요 없다는 장점이 있지만 수일간 출혈과 복통이 지속되며 약 5%에서 불완전 유산이 발생해 추가 수술이 필요할 수 있습니다. 낙태 비용 면에서도 추가 경과 확인 비용이 발생할 수 있습니다.
        </p>

        {/* 섹션 6 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #7B35E8', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          6. 수술 당일 과정
        </h2>
        <p style={{ marginBottom: '16px' }}>
          수술 당일 어떻게 진행되는지 미리 알아두시면 마음의 준비를 하는 데 도움이 됩니다. 전체 내원 시간은 약 2~3시간 내외입니다.
        </p>
        <ProcessCard />
        <p style={{ marginBottom: '14px', marginTop: '8px' }}>
          수술 후 운전은 불가능하므로 대중교통이나 택시를 이용하시거나 동행인과 함께 오시는 것을 권장합니다. 수술 6시간 전부터 금식이 필요하며 렌즈 대신 안경을 착용하시는 것이 좋습니다.
        </p>
        <div style={{ background: '#FFF8F5', borderRadius: '12px', padding: '16px 18px', marginBottom: '32px', border: '1px solid #FFE0D0' }}>
          <p style={{ fontSize: '13px', color: '#AA4422', margin: 0, lineHeight: 1.8 }}>
            📋 <strong>수술 당일 준비사항</strong><br />
            · 수술 6시간 전부터 금식<br />
            · 렌즈 대신 안경 착용<br />
            · 편안한 복장으로 내원<br />
            · 대중교통 또는 동행인 준비
          </p>
        </div>

        {/* 섹션 7 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #7B35E8', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          7. 수술 후 주의사항
        </h2>
        <p style={{ marginBottom: '16px' }}>
          낙태 수술 후 빠르게 일상으로 복귀하기 위해서는 올바른 회복 관리가 중요합니다.
        </p>
        {[
          { title: '수술 당일', color: '#FFF0F8', border: '#FFD6EE', titleColor: '#E8305A', items: ['무리한 활동 및 운전 금지', '처방된 약물 복용', '음주 및 흡연 금지', '충분한 휴식'] },
          { title: '수술 후 1주일', color: '#F5F0FF', border: '#E0D0FF', titleColor: '#7B35E8', items: ['무거운 물건 들기 금지', '욕조 목욕 금지 (샤워만 가능)', '성관계 금지', '수영·사우나 금지'] },
          { title: '수술 후 2~4주', color: '#FFF8F0', border: '#FFE8CC', titleColor: '#CC6611', items: ['다음 생리까지 피임 필요', '이상 증상 시 즉시 내원', '과도한 운동 자제', '정기 검진 권장'] },
        ].map(({ title, color, border, titleColor, items }) => (
          <div key={title} style={{ marginBottom: '12px', padding: '16px 18px', background: color, borderRadius: '12px', border: `1px solid ${border}` }}>
            <p style={{ fontWeight: 700, color: titleColor, marginBottom: '10px', fontSize: '14px' }}>📌 {title}</p>
            {items.map((item) => (
              <p key={item} style={{ margin: '5px 0', fontSize: '13px', color: '#554455' }}>· {item}</p>
            ))}
          </div>
        ))}
        <div style={{ background: '#FFF0F0', borderRadius: '12px', padding: '16px 18px', marginBottom: '32px', border: '1px solid #FFD0D0' }}>
          <p style={{ fontSize: '13px', color: '#AA2222', margin: 0, lineHeight: 1.8 }}>
            ⚠️ <strong>즉시 내원이 필요한 증상</strong><br />
            · 38도 이상의 고열이 지속되는 경우<br />
            · 생리대를 1시간에 2개 이상 사용할 정도의 과다출혈<br />
            · 심한 복통이 계속되는 경우<br />
            · 악취가 나는 분비물이 나오는 경우
          </p>
        </div>

        {/* 섹션 8 */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #7B35E8', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          8. 연세365산부인과 선택 이유
        </h2>
        <p style={{ marginBottom: '16px' }}>
          낙태 수술을 결정했다면 어느 병원을 선택하느냐가 매우 중요합니다. 합법적이고 안전한 환경에서 수술받으시기 바랍니다.
        </p>
        <ReasonCard />
        <p style={{ marginBottom: '32px', marginTop: '16px', fontSize: '14px' }}>
          연세365산부인과는 서울 관악구 과천대로 939 3층에 위치하며 사당역 4번 출구에서 도보 2분 거리입니다. 진료 시간은 평일 오전 9시부터 오후 6시까지이며 전화 또는 카카오톡으로 상담 예약이 가능합니다.
        </p>

        {/* 섹션 9 - FAQ */}
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #7B35E8', paddingLeft: '12px', marginBottom: '14px', lineHeight: 1.4 }}>
          9. 자주 묻는 질문
        </h2>
        {[
          { q: '낙태 비용 가격이 정확히 얼마인가요?', a: '8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 영양제와 1인 회복실이 포함된 가격이며 추가 비용이 없습니다.' },
          { q: '낙태 비용을 나눠서 낼 수 있나요?', a: '현재 분할 납부는 어렵습니다. 현금과 카드 결제 모두 가능하며 가격은 동일합니다.' },
          { q: '혼자 내원해도 되나요?', a: '성인이라면 혼자 내원하셔도 됩니다. 단 수술 후 운전은 불가능하므로 대중교통을 이용하시거나 귀가 시 동행인이 있으면 더 안전합니다.' },
          { q: '낙태 수술 후 언제부터 임신이 가능한가요?', a: '수술 후 첫 생리가 돌아오면 임신 가능 상태로 회복됩니다. 보통 수술 후 4~6주 내에 첫 생리가 시작됩니다.' },
          { q: '예약 없이 당일 방문해도 되나요?', a: '가능하면 전화나 카카오톡으로 사전 예약을 권장합니다. 대기 시간을 줄이고 더 빠르게 진행할 수 있습니다.' },
          { q: '낙태 수술 후 생리는 언제 시작되나요?', a: '대부분 수술 후 4~6주 내에 첫 생리가 시작됩니다. 3개월 이상 생리가 없다면 내원하시기 바랍니다.' },
          { q: '미성년자도 수술이 가능한가요?', a: '미성년자는 법정대리인의 동의가 필요합니다. 보호자와 함께 내원하셔야 합니다.' },
          { q: '수술 비용 영수증을 받을 수 있나요?', a: '네, 요청하시면 영수증을 발급해드립니다. 비급여 항목으로 처리됩니다.' },
        ].map(({ q, a }, i) => (
          <div key={i} style={{ marginBottom: '10px', border: '1px solid #E8D8FF', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ background: '#F5F0FF', padding: '13px 16px', fontWeight: 700, fontSize: '14px', color: '#7B35E8' }}>Q. {q}</div>
            <div style={{ padding: '13px 16px', fontSize: '13px', color: '#554455', lineHeight: 1.7 }}>A. {a}</div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ marginTop: '48px', background: 'linear-gradient(135deg, #7B35FF 0%, #FF35C8 100%)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '22px', fontWeight: 900, marginBottom: '8px', lineHeight: 1.3 }}>
            지금 바로 무료 상담 받으세요
          </p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginBottom: '24px' }}>
            1:1 비밀 보장 · 당일 수술 가능 · 사당역 4번출구
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
              style={{ background: '#FEE500', color: '#3B1B1B', padding: '14px 24px', borderRadius: '50px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              💬 카카오톡 무료상담
            </a>
            <a href="tel:02-585-3650"
              style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '14px 24px', borderRadius: '50px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              📞 02-585-3650
            </a>
          </div>
        </div>

        {/* 하단 링크 */}
        <div style={{ marginTop: '28px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/abortion" style={{ color: '#7B35E8', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
            → 임신중절클리닉 자세히 보기
          </Link>
          <Link href="/blog/abortion-cost" style={{ color: '#7B35E8', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
            → 임신중절수술 비용 정보 보기
          </Link>
        </div>

      </div>
    </>
  )
}