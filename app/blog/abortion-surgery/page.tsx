import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '임신초기중절수술 가능 기간·방법·금액·비용·후기 | 연세365산부인과',
  description: '임신초기중절수술 가능 기간, 흡입술·소파술 방법 비교, 주수별 금액·비용, 합법 기준까지 투명하게 안내합니다. 8주 미만 45만원. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '임신초기중절수술', '임신초기중절수술비용', '임신초기중절수술금액',
    '임신초기중절수술가격', '임신초기중절수술가능기간', '임신초기중절수술방법',
    '임신초기중절수술후기', '임신초기중절수술합법', '임신초기중절수술병원',
    '임신초기낙태', '임신초기낙태비용', '임신초기낙태금액', '임신초기낙태방법',
    '임신중절수술', '임신중절수술금액', '임신중절수술비용', '임신중절수술가격',
    '임신중절수술합법기간', '임신중절수술방법', '임신중절수술후기',
    '낙태비용', '낙태금액', '낙태가격', '낙태합법기간', '낙태합법',
    '낙태방법', '낙태수술', '낙태수술비용', '낙태수술금액', '낙태수술가격',
    '흡입술', '소파술', '흡입술비용', '소파술비용', '흡입식소파술',
    '인공임신중절수술', '인공임신중절비용', '인공임신중절금액',
    '중절수술', '중절수술비용', '중절수술금액', '중절수술가격', '중절수술합법',
    '사당역산부인과', '관악구산부인과', '서울낙태병원', '낙태병원',
    '임신중절합법', '낙태수술합법', '낙태합법화', '모자보건법낙태',
    '낙태수술후기', '중절수술후기', '임신중절후기',
    '낙태수술회복기간', '임신중절수술회복', '낙태수술후관리',
    '당일낙태수술', '당일임신중절수술', '수면마취낙태',
  ],
  openGraph: {
    title: '임신초기중절수술 가능 기간·방법·금액·비용·후기 | 연세365산부인과',
    description: '임신초기중절수술 가능 기간, 방법, 주수별 금액·비용까지 투명하게 안내. 8주 미만 45만원. 사당역 4번출구.',
    url: 'https://www.yeonsei365.com/blog/abortion-surgery',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.yeonsei365.com/blog/abortion-surgery',
  },
}

const COLOR = {
  primary: '#CC2D5E',
  primaryDark: '#8C1A4A',
  primaryDeep: '#4A0E2E',
  primaryBg: '#FCE8EF',
  primaryText: '#B0456E',
  border: '#FFE0E8',
  textMain: '#1A0A10',
  textSub: '#554455',
  textMuted: '#999',
  legalBg: '#F0F4FF',
  legalBorder: '#B0BFEE',
  legalText: '#3A4A7E',
  warnBg: '#FEF5E0',
  warnBorder: '#E29000',
  warnText: '#7A5500',
}

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
      <span style={{
        background: COLOR.primary, color: '#fff',
        fontSize: '12px', fontWeight: 700,
        width: '26px', height: '26px', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>{num}</span>
      <h2 style={{ fontSize: '20px', fontWeight: 700, color: COLOR.textMain, margin: 0 }}>{title}</h2>
    </div>
  )
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      borderLeft: `3px solid ${COLOR.primary}`,
      background: COLOR.primaryBg,
      borderRadius: '0 12px 12px 0',
      padding: '14px 18px', margin: '14px 0',
    }}>
      <p style={{ fontSize: '14px', color: '#7A2040', lineHeight: 1.8, margin: 0 }}>{children}</p>
    </div>
  )
}

function WarnBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      borderLeft: `3px solid ${COLOR.warnBorder}`,
      background: COLOR.warnBg,
      borderRadius: '0 12px 12px 0',
      padding: '14px 18px', margin: '14px 0',
    }}>
      <p style={{ fontSize: '14px', color: COLOR.warnText, lineHeight: 1.8, margin: 0 }}>{children}</p>
    </div>
  )
}

function LegalBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: COLOR.legalBg,
      border: `1px solid ${COLOR.legalBorder}`,
      borderRadius: '12px', padding: '16px 20px', margin: '14px 0',
    }}>
      <div style={{ fontSize: '13px', fontWeight: 700, color: '#3A4A9E', marginBottom: '10px' }}>⚖ 현행 법적 기준 (2026년 기준)</div>
      <div style={{ fontSize: '14px', color: COLOR.legalText, lineHeight: 1.85 }}>{children}</div>
    </div>
  )
}

function Divider() {
  return <hr style={{ border: 'none', borderTop: `1px solid ${COLOR.border}`, margin: '32px 0' }} />
}

function Tag({ label, bg, color }: { label: string; bg: string; color: string }) {
  return (
    <span style={{
      background: bg, color, fontSize: '12px', fontWeight: 700,
      padding: '4px 12px', borderRadius: '20px', display: 'inline-block',
    }}>{label}</span>
  )
}

export default function AbortionSurgeryPage() {
  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${COLOR.border}`,
        padding: '14px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src="https://i.imgur.com/f7h5DY0.png" alt="연세365 로고" style={{ height: '36px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a href="/blog" style={{ fontSize: '13px', color: COLOR.primaryText, textDecoration: 'none', fontWeight: 600 }}>임신중절수술정보</a>
          <a href="/" style={{ fontSize: '13px', color: '#666', textDecoration: 'none' }}>홈으로</a>
          <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
            style={{ background: '#FEE500', color: '#3B1B1B', padding: '8px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>
            💬 카톡상담
          </a>
        </div>
      </header>
      <div style={{ height: '64px' }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 20px 100px', fontFamily: 'Pretendard, sans-serif' }}>

        {/* 히어로 */}
        <div style={{
          background: `linear-gradient(160deg, ${COLOR.primaryDeep} 0%, ${COLOR.primaryDark} 40%, ${COLOR.primary} 100%)`,
          borderRadius: '20px', padding: '40px 36px', margin: '32px 0 28px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', width: '220px', height: '220px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)', top: '-70px', left: '-50px' }} />
          <div style={{ position: 'absolute', width: '160px', height: '160px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)', bottom: '-50px', left: '130px' }} />
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {['수술정보', '법적기준', '금액 비용 안내'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h1 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.45, margin: '0 0 14px' }}>
                임신초기중절수술<br />가능 기간·방법·금액·비용·후기
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.75, margin: '0 0 20px' }}>
                임신초기중절수술을 고려 중이라면 가장 먼저 확인해야 할 것은 합법 가능 기간, 시술 방법, 그리고 실제 비용입니다. 연세365산부인과가 법적 기준부터 수술 후 회복까지 투명하게 안내합니다.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['당일예약 가능', '여의사 상담', '1인실 운영', '카드·현금 동일'].map(b => (
                  <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: '12px', padding: '5px 14px', borderRadius: '20px' }}>{b}</span>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '16px', padding: '20px 28px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginBottom: '4px' }}>8주 미만 기준</div>
              <div style={{ color: '#FFD700', fontSize: '52px', fontWeight: 900, lineHeight: 1 }}>45</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', marginTop: '4px' }}>만원 (영양제 포함)</div>
            </div>
          </div>
        </div>

        {/* 메타 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: COLOR.textMuted, marginBottom: '28px', flexWrap: 'wrap' }}>
          <Tag label="수술정보" bg={COLOR.primaryBg} color={COLOR.primaryText} />
          <span>2026.04.06</span>
          <span>·</span>
          <span>연세365산부인과 직접 작성</span>
          <span>·</span>
          <span>사당역 4번출구</span>
        </div>

        {/* 목차 */}
        <div style={{ background: '#FFF8FA', border: `1px solid ${COLOR.border}`, borderRadius: '16px', padding: '20px 24px', marginBottom: '36px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: COLOR.textMuted, marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>목차</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              ['1', '임신초기중절수술이란?'],
              ['2', '합법 기준과 법적 근거'],
              ['3', '흡입술 vs 소파술 완전 비교'],
              ['4', '주수별 비용·금액 투명 공개'],
              ['5', '시술 당일 흐름과 준비사항'],
              ['6', '수술 후 회복과 주의사항'],
              ['7', '병원 선택 시 확인할 것'],
              ['8', '자주 묻는 질문 FAQ'],
            ].map(([n, t]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: COLOR.primary }}>
                <span style={{ background: COLOR.primaryBg, color: COLOR.primaryText, fontSize: '10px', fontWeight: 700, width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* 섹션 1 */}
        <section style={{ marginBottom: '36px' }}>
          <SectionHeader num="1" title="임신초기중절수술이란?" />
          <p style={{ fontSize: '15px', color: COLOR.textSub, lineHeight: 1.9, marginBottom: '16px' }}>
            임신초기중절수술은 임신 초기(주로 10주 이내)에 자궁 내 임신 조직을 제거하는 의료 시술입니다. 의학 용어로는 <strong>인공임신중절수술(人工姙娠中絶手術)</strong>이라고 하며, 흡입술(진공흡입법)과 소파술(자궁소파술) 두 가지 방법이 대표적으로 사용됩니다.
          </p>
          <p style={{ fontSize: '15px', color: COLOR.textSub, lineHeight: 1.9, marginBottom: '16px' }}>
            임신 주수가 짧을수록 시술이 간단하고 회복이 빠르기 때문에, 시술을 결정했다면 가능한 빨리 산부인과 전문의와 상담하는 것이 중요합니다. 임신 8주 미만의 경우 15분 내외의 짧은 시술로 당일 귀가가 가능하며, 출혈·통증도 상대적으로 적습니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '16px' }}>
            {[
              { title: '당일 시술 가능', body: '8주 이내 기준 15분 내외 시술. 1~2시간 안정 후 당일 귀가 가능합니다.' },
              { title: '수면마취 진행', body: '통증 없이 수면마취 상태에서 진행하며, 시술 중 의식이 없어 공포감이 없습니다.' },
              { title: '빠른 회복', body: '일반적으로 2~3일 내 일상 복귀 가능하며, 생리는 4~6주 내 재개됩니다.' },
            ].map(c => (
              <div key={c.title} style={{ background: '#fff', border: `1px solid ${COLOR.border}`, borderRadius: '14px', padding: '18px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: COLOR.textMain, marginBottom: '8px' }}>{c.title}</div>
                <div style={{ fontSize: '13px', color: COLOR.textSub, lineHeight: 1.7 }}>{c.body}</div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* 섹션 2 */}
        <section style={{ marginBottom: '36px' }}>
          <SectionHeader num="2" title="합법 기준과 법적 근거 — 반드시 확인하세요" />
          <p style={{ fontSize: '15px', color: COLOR.textSub, lineHeight: 1.9, marginBottom: '16px' }}>
            2021년 1월 1일부터 낙태죄(형법 제269조, 제270조)가 효력을 잃었습니다. 헌법재판소는 2019년 낙태죄에 대해 헌법불합치 결정을 내렸고, 국회가 법을 개정하지 않은 채 시한이 지나 해당 조항이 실효되었습니다. 이에 따라 현재 대한민국에서는 <strong>임신 14주 이내 인공임신중절수술은 법적으로 처벌받지 않습니다.</strong>
          </p>
          <LegalBox>
            <p style={{ margin: '0 0 8px' }}><strong>14주 이내</strong>: 자유롭게 시술 가능 — 본인 동의만으로 가능</p>
            <p style={{ margin: '0 0 8px' }}><strong>14주~24주</strong>: 사회·경제적 사유, 강간·준강간에 의한 임신, 근친 간 임신, 모체 건강상 이유 등 특정 조건 충족 시 가능</p>
            <p style={{ margin: 0 }}><strong>24주 이후</strong>: 모체 생명이 위험한 경우 등 극히 제한적 상황에서만 가능</p>
          </LegalBox>
          <WarnBox>
            ⚠ <strong>의료법 주의사항</strong>: 의료기관은 시술 전 반드시 본인 확인 및 동의서를 받아야 합니다. 미성년자(만 19세 미만)의 경우 법정대리인(부모 등)의 동의가 필요할 수 있습니다. 다만 미성년자 본인이 원하지 않는 경우 상담을 통해 개별 판단합니다. 모든 상담 내용은 철저히 비밀이 보장됩니다.
          </WarnBox>
          <div style={{ border: `1px solid ${COLOR.border}`, borderRadius: '12px', overflow: 'hidden', marginTop: '16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#F8E8EF' }}>
                  {['임신 주수', '법적 가능 여부', '필요 조건', '비고'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', color: COLOR.primaryDark, fontWeight: 700, textAlign: 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['~14주', '자유 시술 가능', '본인 동의서', '가장 안전한 시기'],
                  ['14주~24주', '조건부 가능', '사유 확인 필요', '전문의 상담 필수'],
                  ['24주 이후', '극히 제한적', '모체 생명 위협 등', '상급병원 의뢰'],
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: `1px solid ${COLOR.border}` }}>
                    <td style={{ padding: '12px 16px', color: COLOR.textMain, fontWeight: 600 }}>{row[0]}</td>
                    <td style={{ padding: '12px 16px', color: i === 0 ? COLOR.primary : i === 1 ? '#E29000' : '#C0392B', fontWeight: 700 }}>{row[1]}</td>
                    <td style={{ padding: '12px 16px', color: COLOR.textSub }}>{row[2]}</td>
                    <td style={{ padding: '12px 16px', color: COLOR.textSub }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: '#F8F8F8', borderRadius: '10px', padding: '12px 16px', marginTop: '12px', fontSize: '12px', color: COLOR.textMuted, lineHeight: 1.7 }}>
            ※ 위 내용은 2026년 4월 기준 법적 해석을 안내한 것입니다. 법령은 변경될 수 있으며, 정확한 상담은 반드시 의료 전문가와 진행하시기 바랍니다.
          </div>
        </section>

        <Divider />

        {/* 섹션 3 */}
        <section style={{ marginBottom: '36px' }}>
          <SectionHeader num="3" title="흡입술 vs 소파술 — 완전 비교" />
          <p style={{ fontSize: '15px', color: COLOR.textSub, lineHeight: 1.9, marginBottom: '16px' }}>
            임신초기중절수술의 방법은 크게 두 가지입니다. 임신 주수와 환자 상태에 따라 가장 적합한 방법으로 진행됩니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
            {[
              { name: '흡입술 (진공흡입법)', bg: COLOR.primary, rows: [['적용 주수', '8주 이내 권장'], ['시술 시간', '10~15분'], ['마취 방법', '수면마취'], ['통증 정도', '매우 적음'], ['출혈량', '적음'], ['회복 기간', '1~2일'], ['합병증 위험', '낮음']] },
              { name: '소파술 (자궁소파술)', bg: COLOR.primaryDark, rows: [['적용 주수', '8~12주'], ['시술 시간', '20~30분'], ['마취 방법', '수면마취'], ['통증 정도', '보통'], ['출혈량', '보통'], ['회복 기간', '2~3일'], ['합병증 위험', '보통']] },
            ].map(m => (
              <div key={m.name} style={{ border: `1px solid ${COLOR.border}`, borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ background: m.bg, padding: '14px 18px', fontSize: '15px', fontWeight: 700, color: '#fff' }}>{m.name}</div>
                <div style={{ padding: '0 18px', background: '#fff' }}>
                  {m.rows.map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${COLOR.border}`, fontSize: '13px' }}>
                      <span style={{ color: COLOR.textMuted }}>{k}</span>
                      <span style={{ color: COLOR.textMain, fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <InfoBox>
            <strong>안내</strong>: 임신 8주 이내라면 흡입술이 훨씬 안전하고 회복이 빠릅니다. 임신 사실을 인지한 즉시 내원하시면 가장 간단한 방법으로 시술이 가능합니다. 주수가 늘어날수록 시술 난이도와 비용이 높아집니다.
          </InfoBox>
        </section>

        <Divider />

        {/* 섹션 4 */}
        <section style={{ marginBottom: '36px' }}>
          <SectionHeader num="4" title="주수별 비용·금액 투명 공개" />
          <p style={{ fontSize: '15px', color: COLOR.textSub, lineHeight: 1.9, marginBottom: '16px' }}>
            연세365산부인과는 임신중절수술 비용을 투명하게 공개합니다. 카드·현금 동일 금액이며 숨겨진 추가 비용이 없습니다. 아래 금액에는 <strong>수술비·마취비·영양제·부가세가 모두 포함</strong>되어 있습니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '20px' }}>
            {[
              { week: '8주 미만', price: '45', bar: 56 },
              { week: '8주', price: '60', bar: 75 },
              { week: '9주', price: '70', bar: 87 },
              { week: '10주', price: '80', bar: 100 },
            ].map(p => (
              <div key={p.week} style={{ background: '#fff', border: `1px solid ${COLOR.border}`, borderRadius: '14px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: COLOR.textMuted, marginBottom: '8px' }}>{p.week}</div>
                <div style={{ fontSize: '28px', fontWeight: 900, color: COLOR.primary, lineHeight: 1 }}>{p.price}</div>
                <div style={{ fontSize: '12px', color: COLOR.textSub, marginTop: '4px' }}>만원</div>
                <div style={{ height: '4px', borderRadius: '2px', background: COLOR.primaryBg, marginTop: '12px' }}>
                  <div style={{ height: '4px', borderRadius: '2px', background: COLOR.primary, width: `${p.bar}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ border: `1px solid ${COLOR.border}`, borderRadius: '12px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#F8E8EF' }}>
                  {['임신 주수', '시술 방법', '비용', '포함 항목', '소요 시간'].map(h => (
                    <th key={h} style={{ padding: '12px 14px', color: COLOR.primaryDark, fontWeight: 700, textAlign: 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['8주 미만', '흡입술', '45만원', '수술비·마취·영양제·약제 포함', '당일 1~2시간'],
                  ['8주', '흡입술/소파술', '60만원', '1인 회복실·당일퇴원', '당일 2~3시간'],
                  ['9주', '소파술', '70만원', '카드·현금 동일', '당일 2~3시간'],
                  ['10주', '소파술', '80만원', '부가세 포함 최종 금액', '당일 3시간'],
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: `1px solid ${COLOR.border}` }}>
                    <td style={{ padding: '12px 14px', fontWeight: 700, color: COLOR.textMain }}>{row[0]}</td>
                    <td style={{ padding: '12px 14px', color: COLOR.textSub }}>{row[1]}</td>
                    <td style={{ padding: '12px 14px', color: COLOR.primary, fontWeight: 900 }}>{row[2]}</td>
                    <td style={{ padding: '12px 14px', color: COLOR.textSub }}>{row[3]}</td>
                    <td style={{ padding: '12px 14px', color: COLOR.textSub }}>{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <WarnBox>
            ⚠ 임신 주수 확인은 초음파 검사로 정확히 측정합니다. 마지막 생리일 기준 계산과 실제 주수가 다를 수 있어 내원 전 전화 상담을 권장합니다. 11주 이상의 경우 별도 상담을 통해 비용을 안내드립니다.
          </WarnBox>
        </section>

        <Divider />

        {/* 섹션 5 */}
        <section style={{ marginBottom: '36px' }}>
          <SectionHeader num="5" title="시술 당일 흐름과 준비사항" />
          <p style={{ fontSize: '15px', color: COLOR.textSub, lineHeight: 1.9, marginBottom: '16px' }}>
            수면마취를 위해 시술 당일 <strong>최소 6시간 금식</strong>이 필요합니다. 물 포함 아무것도 드시면 안 됩니다. 대부분 3시간 이내에 모든 과정이 완료됩니다.
          </p>
          <div style={{ margin: '16px 0' }}>
            {[
              { n: '1', t: '내원 및 접수', d: '신분증 지참 필수. 동의서 작성. 예약 당일 내원 시 대기 최소화됩니다.' },
              { n: '2', t: '초음파 검사 및 혈액검사', d: '정확한 임신 주수 확인. 마취 전 기본 혈액검사 진행 (약 15~20분 소요).' },
              { n: '3', t: '전문의 상담', d: '시술 방법, 주의사항, 비용 최종 확인. 모든 내용은 비밀이 보장됩니다.' },
              { n: '4', t: '수면마취 후 시술', d: '마취 후 10~30분 내 시술 완료. 시술 중 통증이나 의식 없습니다.' },
              { n: '5', t: '회복실 안정 및 귀가', d: '1인 회복실에서 1~2시간 안정 후 귀가. 당일 운전은 금지이며 보호자 동반을 권장합니다.' },
            ].map((step, i, arr) => (
              <div key={step.n}>
                <div style={{ display: 'flex', gap: '14px', marginBottom: '4px' }}>
                  <div style={{ flexShrink: 0, width: '30px', height: '30px', borderRadius: '50%', background: COLOR.primary, color: '#fff', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{step.n}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: COLOR.textMain, marginBottom: '3px' }}>{step.t}</div>
                    <div style={{ fontSize: '13px', color: COLOR.textSub, lineHeight: 1.7 }}>{step.d}</div>
                  </div>
                </div>
                {i < arr.length - 1 && <div style={{ width: '1px', height: '14px', background: COLOR.border, marginLeft: '15px', marginBottom: '4px' }} />}
              </div>
            ))}
          </div>
          <InfoBox>
            <strong>당일 금식 기준</strong>: 시술 최소 6시간 전부터 물 포함 아무것도 드시면 안 됩니다. 금식을 지키지 않으면 마취 시 위험할 수 있어 시술이 연기될 수 있습니다.
          </InfoBox>
        </section>

        <Divider />

        {/* 섹션 6 */}
        <section style={{ marginBottom: '36px' }}>
          <SectionHeader num="6" title="수술 후 회복과 주의사항" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: COLOR.textMain, marginBottom: '10px' }}>✅ 해도 되는 것</div>
              {['가벼운 산책 (시술 다음날부터)', '일반 식사 (귀가 후 소화 잘 되는 음식부터)', '샤워 (시술 다음날부터 가능)', '가벼운 사무직 업무 복귀 (2~3일 후)', '피임약 복용 (전문의 처방 후)'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '7px 0', borderBottom: `1px solid ${COLOR.border}`, fontSize: '13px', color: COLOR.textSub, lineHeight: 1.6 }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ae60', flexShrink: 0, marginTop: '3px' }} />
                  {item}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: COLOR.primary, marginBottom: '10px' }}>⛔ 하면 안 되는 것</div>
              {['성관계 (최소 2주~1개월 금지)', '격렬한 운동·무거운 짐 들기 (2주 금지)', '음주·흡연 (회복에 악영향)', '탕 목욕·수영·사우나 (2주 금지)', '임의로 처방약 중단'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '7px 0', borderBottom: `1px solid ${COLOR.border}`, fontSize: '13px', color: COLOR.textSub, lineHeight: 1.6 }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: COLOR.primary, flexShrink: 0, marginTop: '3px' }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <WarnBox>
            ⚠ <strong>즉시 내원해야 하는 증상</strong>: 38도 이상 고열, 7일 이상 지속되는 출혈, 심한 복통이나 악취가 나는 분비물이 있다면 즉시 내원하거나 연락 주세요.
          </WarnBox>
        </section>

        <Divider />

        {/* 섹션 7 */}
        <section style={{ marginBottom: '36px' }}>
          <SectionHeader num="7" title="병원 선택 시 반드시 확인할 것" />
          <div style={{ border: `1px solid ${COLOR.border}`, borderRadius: '12px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#F8E8EF' }}>
                  {['확인 항목', '좋은 병원', '주의해야 할 병원'].map(h => (
                    <th key={h} style={{ padding: '12px 14px', color: COLOR.primaryDark, fontWeight: 700, textAlign: 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['비용 공개', '홈페이지에 투명하게 공개', '전화해야만 알려줌·내원 후 추가 청구'],
                  ['마취 방법', '수면마취 (통증 없음)', '국소마취만 진행'],
                  ['의료진', '산부인과 전문의 직접 시술', '전공의·간호사 시술'],
                  ['사후 관리', '처방약·추적 검사 안내', '시술 후 바로 귀가 조치'],
                  ['비밀 보장', '개인정보 보호 철저', '보호자 동반 강제'],
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: `1px solid ${COLOR.border}` }}>
                    <td style={{ padding: '12px 14px', fontWeight: 700, color: COLOR.textMain }}>{row[0]}</td>
                    <td style={{ padding: '12px 14px', color: '#27ae60', fontWeight: 600 }}>{row[1]}</td>
                    <td style={{ padding: '12px 14px', color: '#C0392B' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Divider />

        {/* 섹션 8 FAQ */}
        <section style={{ marginBottom: '36px' }}>
          <SectionHeader num="8" title="자주 묻는 질문 (FAQ)" />
          {[
            { q: '혼자 내원해도 되나요?', a: '수면마취 후 혼자 운전은 위험합니다. 귀가 시 보호자 동반을 강력히 권장하며, 대중교통 이용도 가능합니다.' },
            { q: '다음 임신에 영향이 있나요?', a: '안전한 시술 환경에서 전문의가 시행할 경우 다음 임신에 영향을 미치는 경우는 드뭅니다. 반복 시술은 자궁 내막에 영향을 줄 수 있어 피임 상담을 권장합니다.' },
            { q: '미성년자도 가능한가요?', a: '미성년자의 경우 원칙적으로 법정대리인 동의가 필요합니다. 당사자가 원치 않는 경우 개별 상담으로 판단합니다. 전화로 먼저 문의 주세요.' },
            { q: '시술 후 언제부터 일상 복귀가 가능한가요?', a: '사무직의 경우 2~3일, 육체적 노동이 많은 직업은 1주일 정도 휴식을 권장합니다.' },
            { q: '시술 비용은 보험이 적용되나요?', a: '인공임신중절수술은 건강보험 비급여 항목입니다. 실손보험도 대부분 적용되지 않으므로 자부담으로 진행됩니다.' },
            { q: '수술 후 생리는 언제 다시 시작되나요?', a: '대부분 시술 후 4~6주 내에 생리가 재개됩니다. 8주 이상 없다면 내원하여 확인해 보시기 바랍니다.' },
          ].map((faq, i) => (
            <div key={i} style={{ border: `1px solid ${COLOR.border}`, borderRadius: '14px', padding: '18px 20px', marginBottom: '10px', background: '#fff' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: COLOR.textMain, marginBottom: '8px' }}>Q. {faq.q}</div>
              <div style={{ fontSize: '14px', color: COLOR.textSub, lineHeight: 1.8 }}>{faq.a}</div>
            </div>
          ))}
        </section>

        <Divider />

        {/* 키워드 */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '12px', color: COLOR.textMuted, marginBottom: '10px' }}>관련 검색 키워드</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {['임신초기중절수술', '임신중절수술 금액', '낙태비용', '흡입술', '소파술', '낙태합법기간', '임신중절합법', '중절수술비용', '사당역산부인과', '인공임신중절', '낙태금액', '임신초기낙태', '당일낙태수술', '수면마취낙태'].map(kw => (
              <span key={kw} style={{ background: '#F8F8F8', border: `1px solid ${COLOR.border}`, color: COLOR.textMuted, fontSize: '11px', padding: '3px 10px', borderRadius: '12px' }}>{kw}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${COLOR.primaryDeep}, ${COLOR.primary})`, borderRadius: '20px', padding: '36px', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>연세365산부인과</div>
          <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '6px' }}>사당역 4번출구</div>
          <div style={{ fontSize: '14px', opacity: 0.85, marginBottom: '24px', lineHeight: 1.7 }}>
            당일예약 · 당일시술 · 여의사 상담 가능 · 1인 회복실 운영<br />
            모든 상담 내용은 철저히 비밀이 보장됩니다
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
              style={{ background: '#fff', color: COLOR.primary, fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>
              지금 바로 상담 문의
            </a>
            <a href="/" style={{ background: 'transparent', color: '#fff', fontSize: '15px', border: '1px solid rgba(255,255,255,0.5)', padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>
              병원 정보 보기
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '16px', fontSize: '13px', opacity: 0.8 }}>
            <span>월~금 09:00~18:00</span>
            <span>토 09:00~13:00</span>
            <span>카드·현금 동일</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link href="/blog" style={{ fontSize: '14px', color: COLOR.primaryText, textDecoration: 'none' }}>
            ← 임신중절수술정보 목록으로
          </Link>
        </div>
      </div>
    </>
  )
}