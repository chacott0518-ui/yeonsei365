import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '임신중절수술 금액·합법기간·방법 안내 | 연세365산부인과',
  description: '임신중절수술 금액 8주 미만 45만원. 합법 가능 기간, 흡입술·소파술 방법, 수술 후 관리, 부작용, 보험, 절차까지 투명하게 안내합니다. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '임신중절수술', '임신중절수술금액', '임신중절수술 금액',
    '임신중절수술합법기간', '임신중절수술 합법기간', '임신중절수술기간',
    '임신중절수술방법', '임신중절수술 방법', '임신중절수술뜻',
    '임신중절수술후관리', '임신중절수술 후 관리', '임신중절수술절차',
    '임신중절수술부작용', '임신중절수술 부작용', '임신중절수술후기',
    '임신중절수술보험', '임신중절수술후생리', '임신중절수술금식',
    '임신중절수술비용', '임신중절수술가격', '임신중절수술합법',
    '낙태수술', '낙태비용', '낙태금액', '낙태합법', '낙태방법',
    '낙태후관리', '낙태부작용', '낙태절차', '낙태후기',
    '흡입술', '소파술', '인공임신중절수술',
    '사당역산부인과', '관악구산부인과', '중절수술',
  ],
  openGraph: {
    title: '임신중절수술 금액·합법기간·방법 안내 | 연세365산부인과',
    description: '임신중절수술 금액 8주 미만 45만원. 합법기간·방법·후관리 투명 안내.',
    url: 'https://www.yeonsei365.com/abortion/surgery',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 금액 45만원 연세365산부인과' }],
  },
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/surgery' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '임신중절수술 금액이 얼마인가요?', acceptedAnswer: { '@type': 'Answer', text: '8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 영양제·마취·부가세 포함이며 카드·현금 동일가입니다.' } },
    { '@type': 'Question', name: '임신중절수술 합법 기간은?', acceptedAnswer: { '@type': 'Answer', text: '2021년 낙태죄 실효 이후 임신 14주 이내는 본인 동의만으로 가능합니다.' } },
    { '@type': 'Question', name: '임신중절수술 후 관리는 어떻게 하나요?', acceptedAnswer: { '@type': 'Answer', text: '2주간 성관계·격렬한 운동·음주·탕목욕을 삼가고 처방약을 복용하세요. 38도 이상 고열, 과다출혈 시 즉시 내원하세요.' } },
    { '@type': 'Question', name: '임신중절수술 부작용이 있나요?', acceptedAnswer: { '@type': 'Answer', text: '전문의가 안전하게 시행할 경우 부작용이 드뭅니다. 출혈, 감염, 자궁 손상 등의 위험이 있으나 적절한 사후관리로 예방 가능합니다.' } },
    { '@type': 'Question', name: '임신중절수술 전 금식이 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '수면마취를 위해 시술 최소 6시간 전부터 물 포함 아무것도 드시면 안 됩니다.' } },
    { '@type': 'Question', name: '임신중절수술 후 생리는 언제 시작되나요?', acceptedAnswer: { '@type': 'Answer', text: '보통 수술 후 4~6주 내에 첫 생리가 재개됩니다. 8주 이상 없다면 내원하여 확인하세요.' } },
  ],
}

const C = {
  p: '#CC2D5E', pd: '#8C1A4A', pp: '#4A0E2E',
  pb: '#FCE8EF', pt: '#B0456E', bd: '#FFE0E8',
  tm: '#1A0A10', ts: '#554455', tm2: '#999',
  lb: '#F0F4FF', lbd: '#B0BFEE', lt: '#3A4A7E',
  wb: '#FEF5E0', wt: '#7A5500',
}

function Divider() {
  return <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '32px 0' }} />
}

function SH({ n, title }: { n: string; title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
      <span style={{ background: C.p, color: '#fff', fontSize: '12px', fontWeight: 700, width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span>
      <h2 style={{ fontSize: '20px', fontWeight: 700, color: C.tm, margin: 0 }}>{title}</h2>
    </div>
  )
}

function IBox({ children }: { children: React.ReactNode }) {
  return <div style={{ borderLeft: `3px solid ${C.p}`, background: C.pb, borderRadius: '0 12px 12px 0', padding: '14px 18px', margin: '14px 0' }}><p style={{ fontSize: '14px', color: '#7A2040', lineHeight: 1.8, margin: 0 }}>{children}</p></div>
}

function WBox({ children }: { children: React.ReactNode }) {
  return <div style={{ borderLeft: `3px solid ${C.wt}`, background: C.wb, borderRadius: '0 12px 12px 0', padding: '14px 18px', margin: '14px 0' }}><p style={{ fontSize: '14px', color: C.wt, lineHeight: 1.8, margin: 0 }}>{children}</p></div>
}

function LBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: C.lb, border: `1px solid ${C.lbd}`, borderRadius: '12px', padding: '16px 20px', margin: '14px 0' }}>
      <div style={{ fontSize: '13px', fontWeight: 700, color: '#3A4A9E', marginBottom: '10px' }}>⚖ 현행 법적 기준 (2026년 기준)</div>
      <div style={{ fontSize: '14px', color: C.lt, lineHeight: 1.85 }}>{children}</div>
    </div>
  )
}

export default function AbortionSurgeryClinicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 헤더 */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)', borderBottom: `2px solid ${C.p}`, padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src="https://i.imgur.com/f7h5DY0.png" alt="연세365 로고" style={{ height: '36px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="/abortion" style={{ fontSize: '13px', color: '#333', textDecoration: 'none', fontWeight: 700 }}>임신중절클리닉</a>
          <a href="/abortion/surgery" style={{ fontSize: '13px', color: '#fff', textDecoration: 'none', fontWeight: 700, background: C.p, padding: '5px 12px', borderRadius: '20px' }}>임신중절수술</a>
          <a href="/blog" style={{ fontSize: '13px', color: '#333', textDecoration: 'none', fontWeight: 700 }}>수술정보</a>
          <a href="/" style={{ fontSize: '13px', color: '#666', textDecoration: 'none' }}>홈으로</a>
          <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', padding: '8px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>💬 카톡상담</a>
        </div>
      </header>
      <div style={{ height: '64px' }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 20px 100px', fontFamily: 'Pretendard, sans-serif' }}>

        {/* 대표 이미지 — 네이버 썸네일용 */}
        <div style={{ margin: '24px 0 0' }}>
          <img
            src="/og-image.jpg"
            alt="임신중절수술 금액 45만원 연세365산부인과 낙태비용 임신중절비용"
            width="780"
            height="410"
            style={{ width: '100%', borderRadius: '16px', display: 'block' }}
          />
        </div>

        {/* 히어로 */}
        <div style={{ background: `linear-gradient(160deg, ${C.pp} 0%, ${C.pd} 40%, ${C.p} 100%)`, borderRadius: '20px', padding: '36px', margin: '20px 0 24px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)', top: '-60px', left: '-40px' }} />
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {['수술정보', '금액안내', '법적기준', '후관리'].map(t => <span key={t} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>{t}</span>)}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h1 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.45, margin: '0 0 12px' }}>임신중절수술<br />금액·합법기간·방법 안내</h1>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.75, margin: '0 0 16px' }}>
                임신중절수술 금액, 합법 가능 기간, 흡입술·소파술 방법, 수술 후 관리까지 연세365산부인과가 투명하게 안내합니다.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['당일예약 가능', '여의사 상담', '1인실 운영', '카드·현금 동일', '비밀보장'].map(b => <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: '12px', padding: '5px 14px', borderRadius: '20px' }}>{b}</span>)}
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '16px', padding: '20px 24px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginBottom: '4px' }}>8주 미만 기준</div>
              <div style={{ color: '#FFD700', fontSize: '52px', fontWeight: 900, lineHeight: 1 }}>45</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', marginTop: '4px' }}>만원 (영양제 포함)</div>
            </div>
          </div>
        </div>

        {/* 메타 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: C.tm2, marginBottom: '24px', flexWrap: 'wrap' }}>
          <span style={{ background: C.pb, color: C.pt, fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>수술정보</span>
          <span>2026.04</span><span>·</span><span>연세365산부인과</span><span>·</span><span>사당역 4번출구</span>
        </div>

        {/* 목차 */}
        <div style={{ background: '#FFF8FA', border: `1px solid ${C.bd}`, borderRadius: '16px', padding: '20px 24px', marginBottom: '32px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: C.tm2, marginBottom: '14px' }}>목차</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              ['1', '임신중절수술 뜻과 정의'],
              ['2', '주수별 금액 투명 공개'],
              ['3', '합법 기간과 법적 근거'],
              ['4', '흡입술 vs 소파술 방법'],
              ['5', '시술 절차와 준비사항'],
              ['6', '수술 후 관리와 부작용'],
              ['7', '보험·생리·금식 안내'],
              ['8', '자주 묻는 질문 FAQ'],
            ].map(([n, t]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: C.p }}>
                <span style={{ background: C.pb, color: C.pt, fontSize: '10px', fontWeight: 700, width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* 섹션 1 — 뜻과 정의 */}
        <section style={{ marginBottom: '32px' }}>
          <SH n="1" title="임신중절수술이란? 뜻과 정의" />
          <p style={{ fontSize: '15px', color: C.ts, lineHeight: 1.9, marginBottom: '14px' }}>
            임신중절수술이란 임신된 태아를 자궁 밖으로 제거하는 의료 시술로, 정식 의학 명칭은 <strong>인공임신중절수술(人工姙娠中絶手術)</strong>입니다. 흔히 낙태수술이라고도 불리며, 약물 또는 수술적 방법으로 자궁 내 임신 조직을 제거합니다.
          </p>
          <p style={{ fontSize: '15px', color: C.ts, lineHeight: 1.9, marginBottom: '14px' }}>
            연세365산부인과에서는 임신 주수와 환자 상태에 따라 <strong>흡입술(진공흡입법)</strong> 또는 <strong>소파술(자궁소파술)</strong> 방식으로 수면마취 하에 안전하게 시행합니다. 임신 주수가 짧을수록 시술이 간단하고 회복이 빠릅니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
            {[
              { t: '당일 시술 가능', b: '8주 이내 기준 15분 내외, 1~2시간 안정 후 당일 귀가 가능.' },
              { t: '수면마취 진행', b: '통증 없이 수면마취 상태에서 진행. 시술 중 의식이 없어 공포감 없음.' },
              { t: '빠른 회복', b: '2~3일 내 일상 복귀 가능. 생리는 4~6주 내 재개.' },
            ].map(c => (
              <div key={c.t} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '6px' }}>{c.t}</div>
                <div style={{ fontSize: '13px', color: C.ts, lineHeight: 1.7 }}>{c.b}</div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* 섹션 2 — 금액 */}
        <section style={{ marginBottom: '32px' }}>
          <SH n="2" title="임신중절수술 금액 — 주수별 투명 공개" />
          <p style={{ fontSize: '15px', color: C.ts, lineHeight: 1.9, marginBottom: '16px' }}>
            연세365산부인과는 임신중절수술 금액을 투명하게 공개합니다. <strong>카드·현금 동일가</strong>이며 추가 비용 없습니다. 수술비·마취비·영양제·부가세가 모두 포함된 최종 금액입니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', marginBottom: '20px' }}>
            {[
              { w: '8주 미만', p: '45', bar: 56 },
              { w: '8주', p: '60', bar: 75 },
              { w: '9주', p: '70', bar: 87 },
              { w: '10주', p: '80', bar: 100 },
            ].map(p => (
              <div key={p.w} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: C.tm2, marginBottom: '6px' }}>{p.w}</div>
                <div style={{ fontSize: '28px', fontWeight: 900, color: C.p, lineHeight: 1 }}>{p.p}</div>
                <div style={{ fontSize: '12px', color: C.ts, marginTop: '4px' }}>만원</div>
                <div style={{ height: '4px', borderRadius: '2px', background: C.pb, marginTop: '10px' }}>
                  <div style={{ height: '4px', borderRadius: '2px', background: C.p, width: `${p.bar}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ overflowX: 'auto' }}>
            <div style={{ border: `1px solid ${C.bd}`, borderRadius: '12px', overflow: 'hidden', minWidth: '400px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: '#F8E8EF' }}>
                    {['임신 주수', '시술 방법', '금액', '포함 항목', '소요 시간'].map(h => <th key={h} style={{ padding: '12px 14px', color: C.pd, fontWeight: 700, textAlign: 'left' }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['8주 미만', '흡입술', '45만원', '수술·마취·영양제·부가세', '당일 1~2시간'],
                    ['8주', '흡입/소파술', '60만원', '1인 회복실·당일퇴원', '당일 2~3시간'],
                    ['9주', '소파술', '70만원', '카드·현금 동일', '당일 2~3시간'],
                    ['10주', '소파술', '80만원', '부가세 포함 최종', '당일 3시간'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: `1px solid ${C.bd}` }}>
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: C.tm }}>{row[0]}</td>
                      <td style={{ padding: '12px 14px', color: C.ts }}>{row[1]}</td>
                      <td style={{ padding: '12px 14px', color: C.p, fontWeight: 900 }}>{row[2]}</td>
                      <td style={{ padding: '12px 14px', color: C.ts }}>{row[3]}</td>
                      <td style={{ padding: '12px 14px', color: C.ts }}>{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <WBox>⚠ 임신 주수는 초음파 검사로 정확히 확인합니다. 11주 이상은 별도 상담을 통해 안내드립니다.</WBox>
        </section>

        <Divider />

        {/* 섹션 3 — 합법 기간 */}
        <section style={{ marginBottom: '32px' }}>
          <SH n="3" title="임신중절수술 합법 기간과 법적 근거" />
          <p style={{ fontSize: '15px', color: C.ts, lineHeight: 1.9, marginBottom: '14px' }}>
            2021년 1월 1일부터 낙태죄(형법 제269조·제270조)가 효력을 잃었습니다. 헌법재판소 2019년 헌법불합치 결정 이후 국회가 법을 개정하지 않아 해당 조항이 실효되었습니다. 현재 <strong>임신 14주 이내는 법적으로 처벌받지 않습니다.</strong>
          </p>
          <LBox>
            <p style={{ margin: '0 0 8px' }}><strong>14주 이내</strong>: 자유 시술 가능 — 본인 동의만으로 가능</p>
            <p style={{ margin: '0 0 8px' }}><strong>14주~24주</strong>: 사회·경제적 사유, 강간·준강간, 근친 임신, 모체 건강 등 조건부 가능</p>
            <p style={{ margin: 0 }}><strong>24주 이후</strong>: 모체 생명 위협 등 극히 제한적</p>
          </LBox>
          <WBox>⚠ 시술 전 본인 확인 및 동의서 필수. 미성년자는 법정대리인 동의 필요 (당사자가 원치 않을 시 개별 상담). 모든 상담 내용은 비밀 보장됩니다.</WBox>
          <div style={{ overflowX: 'auto' }}>
            <div style={{ border: `1px solid ${C.bd}`, borderRadius: '12px', overflow: 'hidden', minWidth: '360px', marginTop: '12px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead><tr style={{ background: '#F8E8EF' }}>{['임신 주수', '법적 가능 여부', '필요 조건', '비고'].map(h => <th key={h} style={{ padding: '12px 14px', color: C.pd, fontWeight: 700, textAlign: 'left' }}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['~14주', '자유 시술 가능', '본인 동의서', '가장 안전한 시기'],
                    ['14~24주', '조건부 가능', '사유 확인 필요', '전문의 상담 필수'],
                    ['24주 이후', '극히 제한적', '모체 생명 위협 등', '상급병원 의뢰'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: `1px solid ${C.bd}` }}>
                      <td style={{ padding: '12px 14px', color: C.tm, fontWeight: 600 }}>{row[0]}</td>
                      <td style={{ padding: '12px 14px', color: i === 0 ? C.p : i === 1 ? '#E29000' : '#C0392B', fontWeight: 700 }}>{row[1]}</td>
                      <td style={{ padding: '12px 14px', color: C.ts }}>{row[2]}</td>
                      <td style={{ padding: '12px 14px', color: C.ts }}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Divider />

        {/* 섹션 4 — 방법 */}
        <section style={{ marginBottom: '32px' }}>
          <SH n="4" title="흡입술 vs 소파술 — 방법 완전 비교" />
          <p style={{ fontSize: '15px', color: C.ts, lineHeight: 1.9, marginBottom: '16px' }}>임신 주수와 환자 상태에 따라 가장 적합한 방법으로 진행됩니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '16px' }}>
            {[
              { name: '흡입술 (진공흡입법)', bg: C.p, rows: [['적용 주수', '8주 이내 권장'], ['시술 시간', '10~15분'], ['마취 방법', '수면마취'], ['통증', '매우 적음'], ['출혈량', '적음'], ['회복 기간', '1~2일'], ['합병증 위험', '낮음']] },
              { name: '소파술 (자궁소파술)', bg: C.pd, rows: [['적용 주수', '8~12주'], ['시술 시간', '20~30분'], ['마취 방법', '수면마취'], ['통증', '보통'], ['출혈량', '보통'], ['회복 기간', '2~3일'], ['합병증 위험', '보통']] },
            ].map(m => (
              <div key={m.name} style={{ border: `1px solid ${C.bd}`, borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ background: m.bg, padding: '14px 18px', fontSize: '15px', fontWeight: 700, color: '#fff' }}>{m.name}</div>
                <div style={{ padding: '0 18px', background: '#fff' }}>
                  {m.rows.map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${C.bd}`, fontSize: '13px' }}>
                      <span style={{ color: C.tm2 }}>{k}</span>
                      <span style={{ color: C.tm, fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <IBox>임신 8주 이내라면 흡입술이 안전하고 회복이 빠릅니다. 주수가 늘어날수록 시술 난이도와 비용이 높아지므로 빠른 결정이 중요합니다.</IBox>
        </section>

        <Divider />

        {/* 섹션 5 — 절차 */}
        <section style={{ marginBottom: '32px' }}>
          <SH n="5" title="임신중절수술 절차와 준비사항" />
          <p style={{ fontSize: '15px', color: C.ts, lineHeight: 1.9, marginBottom: '14px' }}>수면마취를 위해 시술 당일 <strong>최소 6시간 금식</strong>(물 포함)이 필요합니다. 전체 소요 시간은 3시간 이내입니다.</p>
          <div style={{ margin: '16px 0' }}>
            {[
              { n: '1', t: '내원 및 접수', d: '신분증 지참 필수. 동의서 작성. 예약 당일 대기 최소화.' },
              { n: '2', t: '초음파·혈액검사', d: '정확한 임신 주수 확인. 마취 전 기본 검사 (15~20분 소요).' },
              { n: '3', t: '전문의 상담', d: '시술 방법·비용 최종 확인. 모든 내용 비밀 보장.' },
              { n: '4', t: '수면마취 후 시술', d: '마취 후 10~30분 내 완료. 시술 중 통증·의식 없음.' },
              { n: '5', t: '1인 회복실 안정 후 귀가', d: '1~2시간 안정 후 당일 귀가. 당일 운전 금지.' },
            ].map((s, i, arr) => (
              <div key={s.n}>
                <div style={{ display: 'flex', gap: '14px', marginBottom: '4px' }}>
                  <div style={{ flexShrink: 0, width: '30px', height: '30px', borderRadius: '50%', background: C.p, color: '#fff', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.n}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '3px' }}>{s.t}</div>
                    <div style={{ fontSize: '13px', color: C.ts, lineHeight: 1.7 }}>{s.d}</div>
                  </div>
                </div>
                {i < arr.length - 1 && <div style={{ width: '1px', height: '14px', background: C.bd, marginLeft: '15px', marginBottom: '4px' }} />}
              </div>
            ))}
          </div>
          <IBox><strong>금식 기준</strong>: 시술 6시간 전부터 물 포함 금식. 지키지 않으면 마취 위험으로 시술이 연기될 수 있습니다.</IBox>
        </section>

        <Divider />

        {/* 섹션 6 — 수술 후 관리·부작용 */}
        <section style={{ marginBottom: '32px' }}>
          <SH n="6" title="임신중절수술 후 관리와 부작용" />
          <p style={{ fontSize: '15px', color: C.ts, lineHeight: 1.9, marginBottom: '16px' }}>
            수술 후 빠른 회복을 위해 아래 사항을 반드시 지켜주세요. 부작용은 전문의가 안전하게 시행할 경우 드물지만, 증상 발생 시 즉시 내원하세요.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '10px' }}>✅ 해도 되는 것</div>
              {['가벼운 산책 (다음날부터)', '일반 식사 (귀가 후)', '샤워 (다음날부터)', '사무직 업무 복귀 (2~3일 후)', '피임약 복용 (처방 후)'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '7px 0', borderBottom: `1px solid ${C.bd}`, fontSize: '13px', color: C.ts, lineHeight: 1.6 }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27ae60', flexShrink: 0, marginTop: '3px' }} />{item}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: C.p, marginBottom: '10px' }}>⛔ 하면 안 되는 것</div>
              {['성관계 (최소 2주~1개월)', '격렬한 운동 (2주 금지)', '음주·흡연 (회복에 악영향)', '탕목욕·수영·사우나 (2주 금지)', '처방약 임의 중단'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '7px 0', borderBottom: `1px solid ${C.bd}`, fontSize: '13px', color: C.ts, lineHeight: 1.6 }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: C.p, flexShrink: 0, marginTop: '3px' }} />{item}
                </div>
              ))}
            </div>
          </div>
          <WBox>⚠ <strong>즉시 내원 증상</strong>: 38도 이상 고열 · 7일 이상 지속 출혈 · 심한 복통 · 악취 분비물 → 즉시 내원 또는 연락하세요.</WBox>
        </section>

        <Divider />

        {/* 섹션 7 — 보험·생리·금식 */}
        <section style={{ marginBottom: '32px' }}>
          <SH n="7" title="보험·수술 후 생리·금식 안내" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {[
              { t: '보험 적용 여부', b: '인공임신중절수술은 건강보험 비급여 항목입니다. 실손보험도 대부분 적용되지 않아 자부담으로 진행됩니다.' },
              { t: '수술 후 생리', b: '수술 후 4~6주 내에 첫 생리가 재개됩니다. 8주 이상 없다면 내원하여 확인하세요.' },
              { t: '금식 기준', b: '수면마취를 위해 시술 최소 6시간 전부터 물 포함 아무것도 드시면 안 됩니다.' },
              { t: '다음 임신', b: '전문의가 안전하게 시행할 경우 다음 임신에 영향이 드뭅니다. 반복 시술은 자궁 내막에 영향을 줄 수 있어 피임 상담을 권장합니다.' },
            ].map(c => (
              <div key={c.t} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>{c.t}</div>
                <div style={{ fontSize: '13px', color: C.ts, lineHeight: 1.7 }}>{c.b}</div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* 섹션 8 — FAQ */}
        <section style={{ marginBottom: '32px' }}>
          <SH n="8" title="자주 묻는 질문 (FAQ)" />
          {[
            { q: '임신중절수술 금액이 얼마인가요?', a: '8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 수술비·마취비·영양제·부가세 포함이며 카드·현금 동일가입니다.' },
            { q: '임신중절수술 합법 기간은 언제까지인가요?', a: '2021년부터 낙태죄가 실효되어 임신 14주 이내는 본인 동의만으로 가능합니다. 14~24주는 조건부로 가능합니다.' },
            { q: '임신중절수술 후 관리는 어떻게 하나요?', a: '2주간 성관계·격렬한 운동·음주·탕목욕을 삼가고 처방약을 복용하세요. 고열·과다출혈 시 즉시 내원하세요.' },
            { q: '임신중절수술 부작용이 있나요?', a: '전문의가 안전하게 시행할 경우 부작용이 드뭅니다. 출혈·감염·자궁 손상 위험이 있으나 적절한 관리로 예방 가능합니다.' },
            { q: '임신중절수술 절차가 어떻게 되나요?', a: '내원 → 초음파·혈액검사 → 상담 → 수면마취 후 시술 → 회복실 안정 → 당일 귀가 순서로 진행됩니다. 총 2~3시간 소요됩니다.' },
            { q: '임신중절수술 전 금식이 필요한가요?', a: '수면마취를 위해 시술 6시간 전부터 물 포함 금식이 필요합니다. 금식 미준수 시 시술이 연기될 수 있습니다.' },
            { q: '임신중절수술 후 생리는 언제 시작되나요?', a: '보통 4~6주 내에 첫 생리가 재개됩니다. 8주 이상 없다면 내원하여 확인하세요.' },
            { q: '임신중절수술 보험이 적용되나요?', a: '건강보험 비급여 항목으로 실손보험도 대부분 적용되지 않습니다. 자부담으로 진행됩니다.' },
            { q: '혼자 내원해도 되나요?', a: '가능하나 수면마취 후 운전이 불가합니다. 대중교통 이용 또는 동행인과 함께 오시길 권장합니다.' },
            { q: '비밀이 보장되나요?', a: '모든 상담과 진료는 1:1 비밀이 철저히 보장됩니다. 의료법에 따라 개인정보는 외부에 절대 유출되지 않습니다.' },
          ].map((f, i) => (
            <div key={i} style={{ border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px 20px', marginBottom: '10px', background: '#fff' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>Q. {f.q}</div>
              <div style={{ fontSize: '14px', color: C.ts, lineHeight: 1.8 }}>{f.a}</div>
            </div>
          ))}
        </section>

        <Divider />

        {/* 관련 페이지 링크 */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '12px' }}>관련 정보 더 보기</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
            {[
              { href: '/blog/abortion-cost', label: '임신중절수술 비용 정리' },
              { href: '/blog/abortion-legal', label: '낙태합법화 뜻·시기·조건' },
              { href: '/blog/abortion-surgery', label: '임신초기중절수술 안내' },
              { href: '/abortion/cost', label: '임신중절클리닉 비용' },
              { href: '/abortion/recovery', label: '수술 후 회복 안내' },
              { href: '/blog/abortion-info', label: '인공임신중절수술 정보' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', background: C.pb, border: `1px solid ${C.bd}`, borderRadius: '10px', padding: '12px 16px', textDecoration: 'none', fontSize: '13px', color: C.p, fontWeight: 700 }}>
                → {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* 키워드 */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ fontSize: '12px', color: C.tm2, marginBottom: '8px' }}>관련 검색 키워드</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {['임신중절수술', '임신중절수술금액', '임신중절수술합법기간', '임신중절수술방법', '임신중절수술뜻', '임신중절수술후관리', '임신중절수술부작용', '임신중절수술절차', '낙태비용', '낙태금액', '흡입술', '소파술', '사당역산부인과', '인공임신중절수술'].map(kw => (
              <span key={kw} style={{ background: '#F8F8F8', border: `1px solid ${C.bd}`, color: C.tm2, fontSize: '11px', padding: '3px 10px', borderRadius: '12px' }}>{kw}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: '36px', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>연세365산부인과</div>
          <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '6px' }}>사당역 4번출구</div>
          <div style={{ fontSize: '14px', opacity: 0.85, marginBottom: '24px', lineHeight: 1.7 }}>
            당일예약 · 당일시술 · 여의사 상담 가능 · 1인 회복실 운영<br />모든 상담 내용은 철저히 비밀이 보장됩니다
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: C.p, fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>지금 바로 상담 문의</a>
            <a href="tel:02-585-3650" style={{ background: 'transparent', color: '#fff', fontSize: '15px', border: '1px solid rgba(255,255,255,0.5)', padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '16px', fontSize: '13px', opacity: 0.8 }}>
            <span>월~금 09:00~18:00</span><span>토 09:00~13:00</span><span>카드·현금 동일</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '28px' }}>
          <Link href="/abortion" style={{ fontSize: '14px', color: C.pt, textDecoration: 'none' }}>← 임신중절클리닉으로</Link>
        </div>
      </div>
    </>
  )
}