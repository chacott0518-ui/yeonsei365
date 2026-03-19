import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '임신중절수술 비용 완벽 정리 2026 | 주수별 가격·과정·주의사항 | 연세365산부인과',
  description:
    '임신중절수술 비용을 주수별로 투명하게 안내합니다. 8주 미만 45만원부터 시작. 흡입식 소파술 과정, 수술 후 주의사항, 합법적 조건까지 전문의가 직접 설명합니다. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '임신중절수술비용', '낙태수술비용', '낙태비용', '중절수술비용',
    '임신중절비용', '낙태가격', '임신중절수술', '관악구낙태병원',
    '사당역산부인과', '임신초기낙태', '8주낙태비용', '임신중절가격',
    '낙태수술가격', '임신중절수술가격', '흡입식소파술비용',
  ],
  openGraph: {
    title: '임신중절수술 비용 완벽 정리 2026 | 연세365산부인과',
    description: '주수별 임신중절수술 비용 투명 공개. 8주 미만 45만원. 사당역 4번출구.',
    url: 'https://yeonsei365.vercel.app/blog/abortion-cost',
    images: [{ url: 'https://yeonsei365.vercel.app/og', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/blog/abortion-cost',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '임신중절수술 비용 완벽 정리 2026',
  description: '주수별 임신중절수술 비용 및 과정 안내',
  author: { '@type': 'Organization', name: '연세365산부인과' },
  publisher: { '@type': 'Organization', name: '연세365산부인과' },
  datePublished: '2026-03-01',
  dateModified: '2026-03-01',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '임신중절수술 비용이 얼마인가요?', acceptedAnswer: { '@type': 'Answer', text: '연세365산부인과의 임신중절수술 비용은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 영양제와 1인 회복실이 포함된 가격입니다.' } },
    { '@type': 'Question', name: '임신중절수술은 합법인가요?', acceptedAnswer: { '@type': 'Answer', text: '2021년 헌법재판소 결정 이후 임신 14주 이내 임신중절은 허용되며, 모자보건법에 따라 일정 조건 하에 합법적으로 시행 가능합니다.' } },
    { '@type': 'Question', name: '수술 당일 퇴원이 가능한가요?', acceptedAnswer: { '@type': 'Answer', text: '네, 당일 수술 후 회복실에서 충분히 안정을 취한 후 당일 퇴원이 가능합니다.' } },
    { '@type': 'Question', name: '수술 전 금식이 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '수면마취를 위해 수술 6시간 전부터 금식이 필요합니다.' } },
    { '@type': 'Question', name: '비밀 보장이 되나요?', acceptedAnswer: { '@type': 'Answer', text: '네, 모든 상담과 진료는 1:1 비밀 보장이 되며, 의료법에 따라 개인정보는 철저히 보호됩니다.' } },
  ],
}

// 이미지 컴포넌트 — SVG로 직접 생성 (이미지 파일 불필요)
function PriceImage45() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #FF6B00 0%, #FF1493 50%, #CC0066 100%)',
      borderRadius: '16px',
      padding: '32px',
      textAlign: 'center',
      margin: '0 auto',
      maxWidth: '340px',
    }}>
      <p style={{ color: '#fff', fontSize: '28px', fontWeight: 900, lineHeight: 1.3, marginBottom: '16px' }}>
        8주 미만 기준<br />영양제 포함
      </p>
      <p style={{ color: '#FFFF00', fontSize: '96px', fontWeight: 900, lineHeight: 1, margin: 0 }}>
        45
      </p>
      <p style={{ color: '#fff', fontSize: '20px', fontWeight: 700, marginTop: '8px' }}>만원</p>
    </div>
  )
}

function PriceTableImage() {
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
      boxShadow: '0 8px 32px rgba(232,48,90,0.12)',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)',
        padding: '20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 4, left: 0, right: 0, fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 10, textAlign: 'center' }}>❀ ✿ ❀ ✿ ❀</div>
        <div style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.85)', marginBottom: '6px' }}>YEONSEI 365</div>
        <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff' }}>임신중절 비용안내</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>흡입식 소파술 · 자궁유착방지제 +5만원</div>
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
              <span style={{ fontSize: '28px', fontWeight: 900, color: '#E8305A' }}>{price}</span>
              <span style={{ fontSize: '13px', fontWeight: 500, color: '#CC3366', marginLeft: '2px' }}>만원</span>
            </div>
          </div>
        ))}
        <div style={{ background: '#FFF5F7', borderRadius: '8px', padding: '10px', textAlign: 'center', margin: '12px 0', fontSize: '11px', color: '#994466' }}>
          영양제 · 1인 회복실 · 현금/카드 동일 · 부가세 포함
        </div>
      </div>
      <div style={{ padding: '10px 20px 16px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #FFF0F4' }}>
        <span style={{ fontSize: '11px', color: '#BB7788' }}>📍 사당역 4번출구</span>
        <span style={{ fontSize: '11px', color: '#BB7788' }}>📞 02-585-3650</span>
      </div>
    </div>
  )
}

export default function AbortionCostPage() {
  return (
    <>
    {/* 헤더 */}
    <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #FFE0E8', padding: '14px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src="https://i.imgur.com/f7h5DY0.png" alt="연세365 로고" style={{ height: '36px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a href="/blog" style={{ fontSize: '13px', color: '#994466', textDecoration: 'none', fontWeight: 600 }}>공지사항</a>
          <a href="/" style={{ fontSize: '13px', color: '#666', textDecoration: 'none' }}>홈으로</a>
          <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
            style={{ background: '#FEE500', color: '#3B1B1B', padding: '8px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>
            💬 카톡상담
          </a>
        </div>
      </header>
      <div style={{ height: '64px' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'Pretendard, sans-serif', color: '#1A0A10', lineHeight: 1.8 }}>

        {/* 상단 네비 */}
        <div style={{ marginBottom: '24px', fontSize: '13px', color: '#AA5566' }}>
          <Link href="/" style={{ color: '#AA5566', textDecoration: 'none' }}>홈</Link>
          {' > '}
          <Link href="/blog" style={{ color: '#AA5566', textDecoration: 'none' }}>블로그</Link>
          {' > '}
          <span>임신중절수술 비용</span>
        </div>

        {/* 제목 */}
        <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#1A0A10', lineHeight: 1.3, marginBottom: '12px' }}>
          임신중절수술 비용 완벽 정리 2026<br />
          <span style={{ color: '#E8305A' }}>주수별 가격 · 과정 · 주의사항</span>
        </h1>
        <div style={{ fontSize: '13px', color: '#999', marginBottom: '32px' }}>
          연세365산부인과 · 2026년 3월 업데이트
        </div>

        {/* 대표 이미지 */}
        <div style={{ marginBottom: '40px' }}>
          <PriceImage45 />
        </div>

        {/* 목차 */}
        <div style={{ background: '#FFF5F7', borderRadius: '12px', padding: '20px 24px', marginBottom: '40px', border: '1px solid #FFE0E8' }}>
          <p style={{ fontWeight: 700, color: '#E8305A', marginBottom: '12px', fontSize: '15px' }}>📋 목차</p>
          {[
            '1. 임신중절수술이란? 합법적 조건',
            '2. 주수별 비용 안내',
            '3. 비용에 포함된 항목',
            '4. 흡입식 소파술 과정',
            '5. 약물중절 vs 수술중절 비교',
            '6. 수술 후 회복 및 주의사항',
            '7. 연세365산부인과 선택 이유',
            '8. 자주 묻는 질문 FAQ',
          ].map((item) => (
            <p key={item} style={{ margin: '6px 0', fontSize: '14px', color: '#554455' }}>· {item}</p>
          ))}
        </div>

        {/* 섹션 1 */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          1. 임신중절수술이란? 합법적 조건
        </h2>
        <p style={{ marginBottom: '16px', fontSize: '16px' }}>
          임신중절수술(낙태수술)은 임신된 태아를 자궁 밖으로 제거하는 의료 시술입니다. 2021년 1월 1일부로 헌법재판소의 낙태죄 헌법불합치 결정에 따라 기존 형법상 낙태죄 조항의 효력이 상실되었으며, 현재는 <strong>임신 14주 이내</strong>의 임신중절이 사실상 허용되고 있습니다.
        </p>
        <p style={{ marginBottom: '16px', fontSize: '16px' }}>
          모자보건법 제14조에 따르면 다음 조건에 해당하는 경우 합법적으로 임신중절수술을 받을 수 있습니다.
        </p>
        <div style={{ background: '#FFF5F7', borderRadius: '12px', padding: '20px 24px', marginBottom: '24px', border: '1px solid #FFE0E8' }}>
          {[
            '본인 또는 배우자가 대통령령으로 정하는 우생학적 또는 유전학적 정신장애나 신체질환이 있는 경우',
            '본인 또는 배우자가 대통령령으로 정하는 전염성 질환이 있는 경우',
            '강간 또는 준강간에 의하여 임신된 경우',
            '법률상 혼인할 수 없는 혈족 또는 인척 간에 임신된 경우',
            '임신의 지속이 보건의학적 이유로 모체의 건강을 심각하게 해치고 있거나 해칠 우려가 있는 경우',
          ].map((item, i) => (
            <p key={i} style={{ margin: '8px 0', fontSize: '14px', color: '#554455' }}>✔ {item}</p>
          ))}
        </div>
        <p style={{ marginBottom: '32px', fontSize: '16px' }}>
          2021년 이후 실질적으로 임신 초기(14주 이내)의 임신중절은 처벌 공백 상태에 놓여 있으며, 많은 산부인과에서 안전하게 시술을 제공하고 있습니다. 연세365산부인과는 산부인과 전문의가 직접 시행하며 안전하고 위생적인 환경에서 수술을 진행합니다.
        </p>

        {/* 섹션 2 */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          2. 주수별 비용 안내
        </h2>
        <p style={{ marginBottom: '20px', fontSize: '16px' }}>
          임신중절수술 비용은 임신 주수에 따라 달라집니다. 주수가 늘어날수록 태아의 크기가 커지고 수술 난이도와 시간이 증가하기 때문입니다. 연세365산부인과는 <strong>투명한 가격 정책</strong>으로 모든 비용을 사전에 안내합니다.
        </p>
        <div style={{ marginBottom: '32px' }}>
          <PriceTableImage />
        </div>
        <div style={{ background: '#FFF0F4', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px', border: '1px solid #FFD6E4' }}>
          <p style={{ fontSize: '14px', color: '#994466', margin: 0, lineHeight: 1.8 }}>
            💡 <strong>비용 안내 (2026년 기준)</strong><br />
            · 8주 미만: 45만원 (영양제 포함)<br />
            · 8주: 60만원 (영양제 포함)<br />
            · 9주: 70만원 (영양제 포함)<br />
            · 10주: 80만원 (영양제 포함)<br />
            · 선택사항: 자궁유착방지제 +5만원<br />
            · 현금/카드 동일가 · 부가세 포함
          </p>
        </div>

        {/* 섹션 3 */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          3. 비용에 포함된 항목
        </h2>
        <p style={{ marginBottom: '16px', fontSize: '16px' }}>
          연세365산부인과의 임신중절수술 비용에는 다음 항목이 모두 포함되어 있습니다. 추가 비용 없이 안심하고 수술을 받으실 수 있습니다.
        </p>
        {[
          { title: '수술비', desc: '산부인과 전문의 직접 시행, 흡입식 소파술 수술비 전액 포함' },
          { title: '마취비', desc: '수면마취(정맥마취) 비용 포함, 편안하고 안전한 수술 진행' },
          { title: '영양제', desc: '수술 후 빠른 회복을 위한 영양제 투여 포함' },
          { title: '1인 회복실', desc: '수술 후 프라이빗한 1인 회복실 이용 포함' },
          { title: '사후 상담', desc: '수술 후 주의사항 및 회복 관련 전문의 상담 포함' },
        ].map(({ title, desc }) => (
          <div key={title} style={{ display: 'flex', gap: '16px', marginBottom: '12px', padding: '14px 16px', background: '#FFFAFB', borderRadius: '10px', border: '1px solid #FFE0E8' }}>
            <span style={{ color: '#E8305A', fontWeight: 700, minWidth: '80px', fontSize: '14px' }}>✔ {title}</span>
            <span style={{ fontSize: '14px', color: '#554455' }}>{desc}</span>
          </div>
        ))}
        <p style={{ marginBottom: '32px', marginTop: '16px', fontSize: '16px' }}>
          단, 자궁유착방지제(+5만원)는 선택사항으로 원하시는 경우 추가 시술이 가능합니다. 자궁유착방지제는 수술 후 자궁 내 유착을 예방하여 향후 임신 가능성을 높이는 데 도움을 줍니다.
        </p>

        {/* 섹션 4 */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          4. 흡입식 소파술 과정
        </h2>
        <p style={{ marginBottom: '20px', fontSize: '16px' }}>
          연세365산부인과에서 시행하는 임신중절수술은 <strong>흡입식 소파술(MVA, Manual Vacuum Aspiration)</strong> 방식입니다. 이 방법은 자궁경부를 통해 흡입 기구를 삽입하여 임신 조직을 제거하는 방식으로, 출혈이 적고 회복이 빠른 것이 특징입니다.
        </p>
        {[
          { step: '01', title: '초진 및 초음파 검사', desc: '내원 후 초음파 검사를 통해 정확한 임신 주수를 확인하고 수술 가능 여부를 판단합니다.' },
          { step: '02', title: '수술 전 준비', desc: '혈액 검사, 혈압 측정 등 기본 검사를 진행합니다. 수술 6시간 전부터 금식이 필요합니다.' },
          { step: '03', title: '수면마취', desc: '정맥마취(수면마취)를 통해 통증 없이 편안한 상태에서 수술이 진행됩니다.' },
          { step: '04', title: '흡입식 소파술 시행', desc: '산부인과 전문의가 직접 흡입식 소파술을 시행합니다. 수술 시간은 10~15분 내외입니다.' },
          { step: '05', title: '회복실 안정', desc: '수술 후 1인 프라이빗 회복실에서 1~2시간 안정을 취합니다.' },
          { step: '06', title: '상담 후 퇴원', desc: '전문의와 사후 주의사항 상담 후 당일 퇴원합니다.' },
        ].map(({ step, title, desc }) => (
          <div key={step} style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF8FAB, #E8305A)', color: '#fff', fontWeight: 900, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step}</div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px', color: '#1A0A10' }}>{title}</p>
              <p style={{ fontSize: '14px', color: '#554455', margin: 0 }}>{desc}</p>
            </div>
          </div>
        ))}
        <p style={{ marginBottom: '32px', marginTop: '16px', fontSize: '16px' }}>
          전체 내원 시간은 약 2~3시간 내외이며, 당일 수술 후 당일 퇴원이 가능합니다. 혼자 내원하시는 경우에도 안전하게 수술을 받으실 수 있으나, 마취 후 운전은 불가하오니 대중교통을 이용하시거나 동행인과 함께 오시는 것을 권장합니다.
        </p>

        {/* 섹션 5 */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          5. 약물중절 vs 수술중절 비교
        </h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: 'linear-gradient(135deg, #FF8FAB, #E8305A)' }}>
                {['구분', '약물중절', '흡입식 소파술'].map((h) => (
                  <th key={h} style={{ padding: '12px 16px', color: '#fff', fontWeight: 700, textAlign: 'left', border: '1px solid #FFD6E4' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['가능 주수', '임신 7주 이내', '임신 10주 이내'],
                ['방법', '미프진 등 약물 복용', '흡입 기구로 제거'],
                ['통증', '생리통 수준~중등도', '수면마취로 통증 없음'],
                ['소요 시간', '수일~수 주', '당일 완료'],
                ['완전 배출률', '약 95% (불완전 가능)', '99% 이상'],
                ['회복 기간', '1~2주', '3~7일'],
                ['비용', '병원마다 상이', '연세365 45만원~'],
                ['장점', '수술 불필요', '당일 완료, 확실한 효과'],
                ['단점', '출혈·통증 지속 가능', '마취 필요'],
              ].map(([label, drug, surgery], i) => (
                <tr key={label} style={{ background: i % 2 === 0 ? '#FFFAFB' : '#fff' }}>
                  <td style={{ padding: '10px 16px', fontWeight: 700, color: '#E8305A', border: '1px solid #FFE0E8' }}>{label}</td>
                  <td style={{ padding: '10px 16px', color: '#554455', border: '1px solid #FFE0E8' }}>{drug}</td>
                  <td style={{ padding: '10px 16px', color: '#554455', border: '1px solid #FFE0E8' }}>{surgery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 섹션 6 */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          6. 수술 후 회복 및 주의사항
        </h2>
        <p style={{ marginBottom: '16px', fontSize: '16px' }}>
          임신중절수술 후 빠른 회복을 위해 다음 사항을 반드시 지켜주세요.
        </p>
        {[
          { title: '수술 당일', items: ['심한 활동 및 운전 금지', '충분한 휴식 취하기', '처방된 약물 복용', '음주 및 흡연 금지'] },
          { title: '수술 후 1주일', items: ['무거운 물건 들기 금지', '욕조 목욕 금지 (샤워만 가능)', '성관계 금지', '수영, 사우나 등 금지'] },
          { title: '수술 후 2~4주', items: ['다음 생리까지 피임 필요', '이상 증상 시 즉시 내원', '과도한 운동 자제', '정기 검진 받기'] },
        ].map(({ title, items }) => (
          <div key={title} style={{ marginBottom: '16px', padding: '16px 20px', background: '#FFFAFB', borderRadius: '12px', border: '1px solid #FFE0E8' }}>
            <p style={{ fontWeight: 700, color: '#E8305A', marginBottom: '10px', fontSize: '15px' }}>📌 {title}</p>
            {items.map((item) => (
              <p key={item} style={{ margin: '4px 0', fontSize: '14px', color: '#554455' }}>· {item}</p>
            ))}
          </div>
        ))}
        <div style={{ background: '#FFF0F4', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px', border: '1px solid #FFD6E4' }}>
          <p style={{ fontSize: '14px', color: '#994466', margin: 0, lineHeight: 1.8 }}>
            ⚠️ <strong>즉시 내원이 필요한 증상</strong><br />
            · 38도 이상의 고열이 지속되는 경우<br />
            · 심한 복통이 계속되는 경우<br />
            · 생리대를 1시간에 2개 이상 사용할 정도의 과다출혈<br />
            · 악취가 나는 분비물이 나오는 경우
          </p>
        </div>

        {/* 섹션 7 */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          7. 연세365산부인과 선택 이유
        </h2>
        {[
          { icon: '👩‍⚕️', title: '산부인과 전문의 직접 시행', desc: '연세대학교 의과대학 졸업, 신촌세브란스병원 전공의 출신 전문의가 직접 수술을 시행합니다.' },
          { icon: '🔒', title: '1:1 완벽한 비밀 보장', desc: '모든 상담과 진료는 철저한 비밀이 보장됩니다. 의료법에 따라 개인정보는 절대 외부에 유출되지 않습니다.' },
          { icon: '💰', title: '투명한 가격 정책', desc: '사전에 모든 비용을 안내하며 추가 비용이 발생하지 않습니다. 현금과 카드 동일가로 운영됩니다.' },
          { icon: '🏥', title: '당일 수술 및 퇴원', desc: '예약 후 당일 수술이 가능하며, 수술 후 당일 퇴원이 가능합니다. 불필요한 입원 없이 일상으로 빠르게 복귀할 수 있습니다.' },
          { icon: '📍', title: '편리한 접근성', desc: '지하철 4호선/2호선 사당역 4번 출구에서 도보 2분 거리에 위치합니다. 관악구, 동작구, 서초구, 과천 등 다양한 지역에서 접근이 편리합니다.' },
        ].map(({ icon, title, desc }) => (
          <div key={title} style={{ display: 'flex', gap: '16px', marginBottom: '14px', padding: '16px', background: '#FFFAFB', borderRadius: '12px', border: '1px solid #FFE0E8' }}>
            <span style={{ fontSize: '24px', flexShrink: 0 }}>{icon}</span>
            <div>
              <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px', color: '#1A0A10' }}>{title}</p>
              <p style={{ fontSize: '14px', color: '#554455', margin: 0 }}>{desc}</p>
            </div>
          </div>
        ))}
        <p style={{ marginBottom: '32px', marginTop: '16px', fontSize: '16px' }}>
          연세365산부인과는 관악구 과천대로 939 3층에 위치하며, 사당역 4번 출구에서 도보로 이동 가능합니다. 진료 시간은 평일 오전 9시부터 오후 6시까지이며, 전화(02-585-3650) 또는 카카오톡으로 상담 예약이 가능합니다.
        </p>

        {/* 섹션 8 - FAQ */}
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1A0A10', borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          8. 자주 묻는 질문 FAQ
        </h2>
        {[
          { q: '임신중절수술 비용이 정확히 얼마인가요?', a: '연세365산부인과의 임신중절수술 비용은 임신 주수에 따라 다릅니다. 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원이며, 영양제와 1인 회복실이 포함된 가격입니다. 선택사항으로 자궁유착방지제(+5만원)가 있습니다.' },
          { q: '혼자 내원해도 되나요?', a: '네, 혼자 내원하셔도 수술을 받으실 수 있습니다. 다만 수면마취 후에는 운전이 불가능하므로 대중교통을 이용하시거나 동행인과 함께 오시는 것을 권장합니다.' },
          { q: '수술 전 준비사항이 있나요?', a: '수술 6시간 전부터 금식이 필요합니다. 내원 전 편안한 복장을 착용하시고, 렌즈 대신 안경을 착용하시는 것이 좋습니다.' },
          { q: '수술 후 다음날 출근이 가능한가요?', a: '개인차가 있지만 대부분의 경우 수술 다음날 일상 복귀가 가능합니다. 단, 무거운 물건을 들거나 심한 육체 노동은 1주일 정도 피하시는 것이 좋습니다.' },
          { q: '임신중절수술 후 언제부터 임신이 가능한가요?', a: '수술 후 첫 생리가 시작되면 임신 가능 상태로 회복됩니다. 보통 수술 후 4~6주 내에 첫 생리가 시작됩니다. 수술 후 한 달 이내의 성관계 시 피임을 철저히 하셔야 합니다.' },
          { q: '수술 예약은 어떻게 하나요?', a: '전화(02-585-3650) 또는 카카오톡 채널(연세365산부인과)로 상담 및 예약이 가능합니다. 당일 예약 및 당일 수술도 가능하니 편하게 연락 주세요.' },
          { q: '10주 이후에도 수술이 가능한가요?', a: '10주 이후의 임신중절수술은 난이도가 높아지며 별도 상담이 필요합니다. 정확한 상담을 위해 내원 또는 전화 상담을 권장합니다.' },
          { q: '수술 비용을 카드로 결제할 수 있나요?', a: '네, 현금과 카드 모두 동일한 가격으로 결제 가능합니다. 분할 납부도 상담 가능합니다.' },
        ].map(({ q, a }, i) => (
          <div key={i} style={{ marginBottom: '12px', border: '1px solid #FFE0E8', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ background: '#FFF5F7', padding: '14px 18px', fontWeight: 700, fontSize: '15px', color: '#E8305A' }}>
              Q. {q}
            </div>
            <div style={{ padding: '14px 18px', fontSize: '14px', color: '#554455', lineHeight: 1.7 }}>
              A. {a}
            </div>
          </div>
        ))}

        {/* 상담 CTA */}
        <div style={{ marginTop: '48px', background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>
            지금 바로 무료 상담 받으세요
          </p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginBottom: '24px' }}>
            1:1 비밀 보장 · 당일 수술 가능 · 사당역 4번출구
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
              style={{ background: '#FEE500', color: '#3B1B1B', padding: '14px 28px', borderRadius: '50px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              💬 카카오톡 무료상담
            </a>
            <a href="tel:02-585-3650"
              style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '14px 28px', borderRadius: '50px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              📞 02-585-3650
            </a>
          </div>
        </div>

        {/* 하단 링크 */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link href="/abortion" style={{ color: '#E8305A', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
            → 임신중절클리닉 자세히 보기
          </Link>
        </div>

      </div>
    </>
  )
}