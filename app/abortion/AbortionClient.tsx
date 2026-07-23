'use client'
import Link from 'next/link'
import { useState } from 'react'
import ViewCounter from '@/components/ViewCounter'
import { FAQ_COUNT } from '@/app/abortion/faq/FAQClient'

const C = {
  p: '#D6336C', pd: '#993556', pp: '#5c0e20',
  pb: '#FFF5F7', pbd: '#f0d0dc',
  ts: '#444', tm: '#1a1a1a', tg: '#888',
  amber: '#BA7517', amberDark: '#633806', amberBg: '#fff8e8',
  green: '#0f6e56', greenBg: '#f0faf5', greenBorder: '#5dcaa5',
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ display: 'inline-block', background: C.pb, color: C.pd, fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', letterSpacing: '.05em', marginBottom: '10px' }}>
      {children}
    </span>
  )
}

function Divider() {
  return <hr style={{ border: 'none', borderTop: `1px solid ${C.pbd}`, margin: '44px 0' }} />
}

function InfoBox({ children, type = 'pink' }: { children: React.ReactNode; type?: 'pink' | 'amber' | 'green' }) {
  const styles = {
    pink: { bg: C.pb, border: C.p, text: '#7A2040' },
    amber: { bg: C.amberBg, border: C.amber, text: C.amberDark },
    green: { bg: C.greenBg, border: C.green, text: C.green },
  }
  const s = styles[type]
  return (
    <div style={{ background: s.bg, borderLeft: `3px solid ${s.border}`, borderRadius: '0 10px 10px 0', padding: '14px 18px', margin: '16px 0' }}>
      <p style={{ fontSize: '13px', color: s.text, lineHeight: 1.85, margin: 0, fontWeight: 600 }}>{children}</p>
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
      <div style={{ fontSize: '24px', fontWeight: 900, color: C.p, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '10px', color: C.tg, marginTop: '4px', fontWeight: 600 }}>{label}</div>
    </div>
  )
}

function MobileAccordion({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `0.5px solid ${C.pbd}` }}>
      <button
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        style={{ width: '100%', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: C.pb, border: 'none', cursor: 'pointer' }}
      >
        <span style={{ fontSize: '13px', fontWeight: 700, color: C.p }}>{icon} {title}</span>
        <span style={{ color: C.p, fontSize: '12px', transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .2s', display: 'inline-block' }}>▼</span>
      </button>
      {open && <div style={{ padding: '12px 16px 16px' }}>{children}</div>}
    </div>
  )
}

const RELATED = [
  { href: '/abortion/cost', label: '임신중절수술 금액·비용·가격' },
  { href: '/abortion/method', label: '흡입술·소파술 방법 종류' },
  { href: '/abortion/recovery', label: '수술 후 관리 완벽 안내' },
  { href: '/abortion/legal', label: '낙태 합법화·법적 기준' },
  { href: '/abortion/faq', label: `전체 ${FAQ_COUNT}개 FAQ 보기` },
  { href: '/abortion/hospital', label: '임신중절수술 병원 안내' },
  { href: '/abortion/surgery', label: '수술 방법·절차·당일 진행 안내' },
]

const FEATURED_FAQS = [
  {
    q: '임신중절수술 비용은 얼마인가요?',
    a: '연세365산부인과의원은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원을 기준으로 안내합니다. 정확한 비용은 초음파로 임신 주수를 확인한 뒤 결정되며, 검사나 추가 처치가 필요한 경우 최종 비용은 진료 후 달라질 수 있습니다. 비용과 포함 항목에 대해 방문 전에 전화나 카카오톡으로 문의하시면 안내해 드립니다.',
  },
  {
    q: '상담한 날 바로 수술할 수 있나요?',
    a: '당일 수술 진행 여부는 금식 상태, 초음파와 필요한 검사 결과, 예약 상황과 의료진 판단에 따라 달라집니다. 방문 당일 충분한 금식이 완료되어 있고 검사 결과에 이상이 없으면 당일 진행이 가능한 경우가 있습니다. 원활한 진행을 위해 방문 전에 예약 상황과 금식 방법을 미리 확인하시기 바랍니다. 당일 수술이 어려운 경우에는 다음 일정을 함께 안내해 드립니다.',
  },
  {
    q: '수술 방법은 어떻게 결정하나요?',
    a: '수술 방법은 임신 주수, 초음파 검사 결과, 자궁 상태, 과거 병력과 현재 건강 상태를 종합하여 의료진이 안내합니다. 연세365산부인과의원에서는 주로 흡입술과 소파술을 시행하며, 개인 상태에 따라 적합한 방법이 다를 수 있습니다. 방법에 대한 자세한 안내는 초음파 확인과 상담 이후에 이루어집니다.',
  },
  {
    q: '약물중절도 시행하나요?',
    a: '연세365산부인과의원은 약물중절을 시행하지 않으며 수술적 방법에 대해서만 상담합니다. 수술적 방법은 임신 주수와 상태를 확인한 뒤 흡입술 또는 소파술로 진행하며, 약물 복용으로 인한 불완전 유산이나 후유증 위험을 피하기 위해 이 원칙을 유지합니다. 수술 방법에 대해 궁금한 점은 방문 전 전화나 카카오톡으로 문의하실 수 있습니다.',
  },
  {
    q: '수술 전에는 무엇을 준비해야 하나요?',
    a: '수술 전 준비사항은 예약 상황과 개인 상태에 따라 다를 수 있으므로 상담 시 안내받은 내용을 따르는 것이 중요합니다. 수면마취를 위한 금식이 필요하며, 금식 시간은 예약 시 안내받으시기 바랍니다. 신분증 지참과 동의서 작성이 필요하고, 수면마취 후 자가 운전은 어려우므로 귀가 방법을 미리 준비해 두시기 바랍니다. 복용 중인 약이나 기저질환이 있다면 방문 전에 반드시 알려주세요.',
  },
  {
    q: '수술 후 회복 기간은 얼마나 걸리나요?',
    a: '수술 후 출혈과 통증의 정도, 일상 복귀 시점은 개인의 건강 상태와 임신 주수에 따라 다를 수 있습니다. 가벼운 사무 업무는 2~3일 이후부터 가능한 경우가 많지만, 신체 상태에 따라 차이가 있습니다. 처방약과 주의사항을 따르고, 38도 이상 고열, 심한 복통, 과다출혈 등 이상 증상이 있으면 즉시 내원하거나 의료기관에 문의해야 합니다. 수술 후 1주일 이내 사후 검진을 권장합니다.',
  },
]

function FeaturedFAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', overflow: 'hidden' }}>
      <summary style={{ padding: '16px 20px', cursor: 'pointer', fontSize: '14px', fontWeight: 700, color: C.tm, listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: C.pb }}>
        <span>{question}</span>
        <span style={{ color: C.p, fontSize: '18px', flexShrink: 0, marginLeft: '12px' }}>＋</span>
      </summary>
      <div style={{ padding: '16px 20px', fontSize: '13px', color: C.ts, lineHeight: 1.9, background: '#fff' }}>
        {answer}
      </div>
    </details>
  )
}

export default function AbortionClient() {
  return (
    <>
      {/* ── PC 레이아웃 ── */}
      <div className="hidden lg:block">

        {/* 히어로 */}
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-main.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '440px',
          padding: '52px 80px',
          display: 'flex',
          gap: '48px',
          alignItems: 'center',
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {['임신중절클리닉', '당일수술', '비밀보장', '사당역 4번출구'].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ color: '#fff', fontSize: '40px', fontWeight: 900, lineHeight: 1.2, letterSpacing: '-.03em', marginBottom: '16px' }}>
              임신중절수술<br />
              <span style={{ fontSize: '26px', fontWeight: 700, opacity: .88 }}>주수 확인부터 수술 방법·비용·회복까지</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              초음파로 임신 주수와 상태를 확인한 뒤 산부인과 전문의가 상담과 수술 방법을 안내합니다.<br />
              수술 전 준비부터 당일 절차와 회복 관리까지 필요한 내용을 확인할 수 있습니다. · <ViewCounter slug="abortion" />
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {['당일예약 가능', '1인 회복실 운영', '산부인과 전문의 상담', '카드·현금 동일가'].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '12px', fontWeight: 700, padding: '7px 16px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>📞 02-585-3650</a>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ background: 'rgba(255,255,255,.12)', border: '0.5px solid rgba(255,255,255,.25)', borderRadius: '16px', padding: '20px 28px', textAlign: 'center' }}>
              <div style={{ color: 'rgba(255,255,255,.75)', fontSize: '11px', marginBottom: '4px' }}>8주 미만 기준</div>
              <div style={{ color: '#FFD700', fontSize: '60px', fontWeight: 900, lineHeight: 1 }}>45</div>
              <div style={{ color: 'rgba(255,255,255,.9)', fontSize: '13px', marginTop: '4px' }}>만원 (영양제 포함)</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[['15분', '수술시간'], ['당일', '귀가가능'], ['의료법', '비밀보장'], ['1인실', '회복실']].map(([v, l]) => (
                <div key={l} style={{ background: 'rgba(255,255,255,.12)', border: '0.5px solid rgba(255,255,255,.2)', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                  <div style={{ color: '#FFD700', fontSize: '18px', fontWeight: 900 }}>{v}</div>
                  <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '10px', marginTop: '3px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 100px' }}>

          {/* 브레드크럼 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: C.tg, padding: '20px 0 32px' }}>
            <Link href="/" style={{ color: C.tg, textDecoration: 'none' }}>홈</Link><span>›</span>
            <span style={{ color: C.p, fontWeight: 700 }}>임신중절수술</span>
          </div>

          {/* 목차 */}
          <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px 28px', marginBottom: '44px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#bbb', marginBottom: '14px', letterSpacing: '.06em' }}>목차</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px 24px' }}>
              {['먼저 확인할 내용', '임신중절수술이란', '주수별 금액·비용', '합법 기준 안내', '흡입술 vs 소파술', '수술 당일 절차', '수술 후 관리'].map((t, i) => (
                <div key={t} style={{ fontSize: '13px', color: C.p, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ width: '18px', height: '18px', background: C.p, color: '#fff', borderRadius: '50%', fontSize: '9px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* 먼저 확인할 내용 */}
          <section style={{ marginBottom: '0' }}>
            <SectionTag>01 먼저 확인할 내용</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em', lineHeight: 1.4 }}>
              임신중절수술 전, 먼저 확인해야 할 사항은 무엇인가요?
            </h2>
            <p className="speakable-summary" style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '16px' }}>
              임신중절수술 전에는 초음파로 자궁 내 임신 여부와 정확한 임신 주수를 확인해야 합니다. 이후 현재 건강 상태, 과거 병력, 복용 중인 약과 검사 결과를 바탕으로 수술 가능 여부와 적절한 방법을 의료진이 안내합니다. 연세365산부인과의원은 약물중절을 시행하지 않으며 수술적 방법에 대해서만 상담합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              비용은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원을 기준으로 안내합니다. 정확한 비용과 당일 진행 가능 여부는 초음파 검사 결과, 금식 상태, 예약 상황과 추가 처치 필요 여부에 따라 달라질 수 있습니다.
            </p>
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '14px 18px', marginBottom: '20px', fontSize: '12px', fontWeight: 700, color: C.pd }}>
              핵심: 초음파로 임신 주수·위치 확인 | 수술적 방법만 상담 | 8주 미만 45만원부터 | 당일 진행은 검사 후 결정 | 2026.06
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '10px', marginBottom: '14px' }}>
              {[
                { title: '주수 확인', desc: '초음파로 자궁 내 임신 여부와 정확한 임신 주수를 확인합니다.' },
                { title: '수술 방법', desc: '검사 결과와 건강 상태를 바탕으로 의료진이 적절한 수술 방법을 안내합니다.' },
                { title: '주수별 비용', desc: '8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다.' },
                { title: '당일 진행', desc: '금식 상태, 검사 결과와 예약 상황을 확인한 뒤 가능 여부를 안내합니다.' },
                { title: '본원 진료 정책', desc: '연세365산부인과의원은 약물중절을 시행하지 않고 수술적 방법만 상담합니다.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{ background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 900, color: C.p }}>{title}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: C.tg, lineHeight: 1.7, marginBottom: '0' }}>※ 수술 가능 여부, 방법과 회복 과정은 개인의 건강 상태와 검사 결과에 따라 달라질 수 있습니다.</p>
          </section>

          <Divider />

          {/* 섹션 1 */}
          <section style={{ marginBottom: '0' }}>
            <SectionTag>02 임신중절수술이란</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em', lineHeight: 1.4 }}>
              임신중절수술이란 무엇인가요?
            </h2>
            <p style={{ fontSize: '13px', color: C.tg, marginBottom: '20px' }}>인공임신중절수술의 정확한 의미와 종류 안내</p>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '32px', alignItems: 'start' }}>
              <div>
                <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '16px' }}>
                  임신중절수술은 자궁 내 임신을 의료적으로 종료하는 수술로, 초음파와 진료를 통해 임신 주수와 건강 상태를 확인한 뒤 진행 여부와 방법을 결정합니다.
                </p>
                <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '16px' }}>
                  <strong style={{ color: C.p }}>임신중절수술(인공임신중절수술)</strong>은 자궁 내 임신 조직을 의학적으로 안전하게 제거하는 시술입니다. 일반적으로 '낙태수술' 또는 '중절수술'이라고도 불립니다. 2021년 1월 낙태죄 처벌 조항이 효력을 상실한 이후, 임신 14주 이내에는 본인 동의만으로 합법적으로 시술받으실 수 있습니다.
                </p>
                <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '16px' }}>
                  연세365산부인과에서는 산부인과 전문의가 직접 집도하며, 임신 주수와 자궁 상태를 확인하여 <strong style={{ color: C.p }}>흡입술(진공흡입법)</strong> 또는 <strong style={{ color: C.p }}>소파술(자궁소파술)</strong> 중 적합한 방법을 안내합니다. 수면마취 하에 진행되며, 일반적으로 10~15분 내외 소요됩니다.
                </p>
                <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '16px' }}>
                  <strong>임신중절수술 금액</strong>과 낙태 비용 가격은 임신 주수가 짧을수록 낮으며 회복도 빠릅니다. <strong>임신초기낙태</strong> 또는 <strong>임신초기중절수술</strong>은 보통 임신 8주 이내를 의미하며, 이 시기에 시술받는 것이 신체적 부담을 최소화할 수 있습니다.
                </p>
                <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '16px' }}>
                  모든 상담과 진료는 의료법에 따라 철저히 비밀이 보장됩니다. 사당역 4번출구에 위치한 연세365산부인과는 독립된 1인 상담실과 1인 회복실을 운영하여 타인에게 노출될 걱정 없이 진료받으실 수 있습니다.
                </p>
                <InfoBox>임신 4~5주는 태낭이 작아 초음파 확인이 어려울 수 있습니다. 6~7주 내원 시 정확한 진단에 유리합니다.</InfoBox>
              </div>
              <div>
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', marginBottom: '14px', height: '200px' }}>
                  <img
                    src="/images/hero-abortion-surgery.webp"
                    alt="임신중절수술 전문의 연세365산부인과 사당역"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.50)', display: 'flex', alignItems: 'flex-end', padding: '16px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', width: '100%' }}>
                      {[['15분', '수술시간'], ['당일', '귀가가능'], ['의료법', '비밀보장'], ['1인실', '회복실']].map(([v, l]) => (
                        <div key={l} style={{ background: 'rgba(255,255,255,.15)', borderRadius: '8px', padding: '8px', textAlign: 'center' }}>
                          <div style={{ color: '#FFD700', fontSize: '16px', fontWeight: 900, lineHeight: 1 }}>{v}</div>
                          <div style={{ color: 'rgba(255,255,255,.8)', fontSize: '9px', marginTop: '3px' }}>{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <StatCard value="15분" label="수술 시간" />
                  <StatCard value="당일" label="귀가 가능" />
                  <StatCard value="의료법" label="비밀 보장" />
                  <StatCard value="1인실" label="회복실" />
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* 섹션 2: 비용 */}
          <section>
            <SectionTag>03 임신중절수술 금액·비용·가격</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>낙태 비용 가격 — 주수별 투명 공개</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '16px' }}>
              연세365산부인과의원의 비용은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원이며 정확한 금액은 초음파로 주수를 확인한 뒤 안내합니다. 임신중절수술 비용은 임신 주수와 수술 방법에 따라 결정되며, 모든 낙태 비용 가격을 사전에 투명하게 공개합니다. 수술비·마취비·영양제·부가세가 포함된 금액이며 카드·현금 동일가입니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px', marginBottom: '16px' }}>
              {[
                { w: '8주 미만', p: '45', bar: 56, method: '흡입술', color: C.p },
                { w: '8주', p: '60', bar: 75, method: '흡입/소파', color: '#C02860' },
                { w: '9주', p: '70', bar: 87, method: '소파술', color: '#A01E4E' },
                { w: '10주', p: '80', bar: 100, method: '소파술', color: '#7A1438' },
              ].map(({ w, p, bar, method, color }) => (
                <div key={w} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden', background: '#fff' }}>
                  <div style={{ background: color, height: '5px' }} />
                  <div style={{ padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', color: C.tg, marginBottom: '8px', fontWeight: 600 }}>{w}</div>
                    <div style={{ fontSize: '36px', fontWeight: 900, color, lineHeight: 1 }}>{p}</div>
                    <div style={{ fontSize: '12px', color: C.ts, marginTop: '4px' }}>만원</div>
                    <div style={{ marginTop: '10px', height: '4px', background: C.pbd, borderRadius: '2px' }}>
                      <div style={{ height: '4px', width: `${bar}%`, background: color, borderRadius: '2px' }} />
                    </div>
                    <div style={{ fontSize: '10px', color, marginTop: '6px', fontWeight: 700 }}>{method}</div>
                  </div>
                </div>
              ))}
            </div>
            <InfoBox type="amber">⚠ 안내된 주수별 수술 비용을 기준으로 상담하며, 검사나 추가 처치가 필요한 경우 최종 비용은 진료 후 달라질 수 있습니다. 11주 이상은 별도 상담 필요. 카드·현금 동일가</InfoBox>
          </section>

          <Divider />

          {/* 섹션 3: 합법 기준 + 벤다이어그램 */}
          <section>
            <SectionTag>04 임신중절수술 합법 기준</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '18px', letterSpacing: '-.02em' }}>낙태 합법화 — 현재 법적 기준</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', alignItems: 'start' }}>
              <div>
                <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, marginBottom: '16px', letterSpacing: '-.01em' }}>
                  2021년 1월 낙태죄 처벌 조항이 효력을 상실했습니다. 현재 임신 14주 이내는 본인 동의만으로 가능하며, 14~24주는 사회·경제적 사유 등 조건부로 시술이 가능합니다.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: '14주 이내 — 본인 동의로 가능', sub: '본인 동의서만으로 진행 가능한 기간입니다. 주수가 짧을수록 수술이 간단하고 회복에 유리합니다.', color: C.p, icon: '✓' },
                    { label: '14~24주 — 조건부 가능', sub: '사유 확인 필요. 전문의 상담이 필수입니다.', color: '#E29000', icon: '!' },
                    { label: '24주 이후 — 극히 제한', sub: '모체 생명 위협 등 예외적인 경우만 해당됩니다.', color: '#aaa', icon: '×' },
                  ].map(({ label, sub, color, icon }) => (
                    <div key={label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '32px', height: '32px', background: color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 700, flexShrink: 0 }}>{icon}</div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color, marginBottom: '3px' }}>{label}</div>
                        <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '24px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#bbb', textAlign: 'center', marginBottom: '16px' }}>수술적 방법 vs 약물적 방법 — 관계도</div>
                <div style={{ position: 'relative', height: '200px' }}>
                  <div style={{ position: 'absolute', top: '10px', left: '10px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(214,51,108,.1)', border: `2px solid ${C.p}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: C.p }}>수술적 방법</div>
                    <div style={{ fontSize: '10px', color: C.pd, textAlign: 'center', lineHeight: 1.5 }}>흡입술<br />소파술<br />8주 이상도 가능</div>
                  </div>
                  <div style={{ position: 'absolute', top: '10px', right: '10px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(186,117,23,.08)', border: `2px solid ${C.amber}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: C.amber }}>약물적 방법</div>
                    <div style={{ fontSize: '10px', color: C.amberDark, textAlign: 'center', lineHeight: 1.5 }}>미페프리스톤<br />7주 이내만 가능<br />불완전 유산 위험</div>
                  </div>
                  <div style={{ position: 'absolute', top: '44px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '70px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: C.pd, lineHeight: 1.6 }}>수면마취<br />비밀보장<br />전문의</div>
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: C.p }}>공통 프로세스: 초음파 진단 → 상담 → 시술 → 1인 회복실</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* 섹션 4: 흡입술 vs 소파술 */}
          <section>
            <SectionTag>05 수술 방법 비교</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>흡입술 vs 소파술 — 완전 비교</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, marginBottom: '20px', letterSpacing: '-.01em' }}>
              임신 주수와 자궁 상태에 따라 전문의가 가장 적합한 방법을 결정합니다. 두 방법 모두 수면마취 하에 진행되며, 시술 후 당일 귀가가 가능합니다.
            </p>
            <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                {[
                  { name: '흡입술 (진공흡입법)', color: C.p, rows: [['적용 주수', '8주 이내 권장'], ['시술 시간', '10~15분'], ['출혈량', '적음'], ['회복 기간', '1~2일'], ['자궁 손상', '최소화'], ['낙태 비용', '45만원~']] },
                  { name: '소파술 (자궁소파술)', color: C.pd, rows: [['적용 주수', '8~12주'], ['시술 시간', '20~30분'], ['출혈량', '보통'], ['회복 기간', '2~3일'], ['자궁 손상', '최소화'], ['낙태 비용', '60만원~']] },
                ].map(({ name, color, rows }, i) => (
                  <div key={name} style={{ padding: '24px', borderRight: i === 0 ? `0.5px solid ${C.pbd}` : 'none' }}>
                    <div style={{ fontSize: '15px', fontWeight: 900, color, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '28px', height: '28px', background: color, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px', fontWeight: 700 }}>{i === 0 ? '흡' : '소'}</span>
                      {name}
                    </div>
                    {rows.map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px' }}>
                        <span style={{ color: C.tg, fontWeight: 600 }}>{k}</span>
                        <span style={{ fontWeight: 700, color: k === '낙태 비용' ? color : C.tm }}>{v}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div style={{ background: C.pb, padding: '14px 24px', borderTop: `0.5px solid ${C.pbd}`, textAlign: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: C.p }}>공통 사항 — 수면마취 · 당일귀가 · 비밀보장 · 전문의 직접 집도 · 1인 회복실</span>
              </div>
            </div>
          </section>

          <Divider />

          {/* 섹션 5: 절차 */}
          <section>
            <SectionTag>06 수술 당일 절차</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '20px', letterSpacing: '-.02em' }}>임신중절수술 당일 진행 순서</h2>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', left: '20px', right: '20px', height: '2px', background: `linear-gradient(90deg, ${C.p}, ${C.pp})`, zIndex: 0 }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '16px', position: 'relative', zIndex: 1 }}>
                {[
                  { n: '1', t: '내원·접수', s: '신분증·동의서', color: C.p },
                  { n: '2', t: '초음파·혈액검사', s: '주수 확인 15~20분', color: '#C02860' },
                  { n: '3', t: '전문의 상담', s: '방법·비용 확인', color: '#A01E4E' },
                  { n: '4', t: '수면마취·수술', s: '10~15분 내외', color: '#831638' },
                  { n: '5', t: '회복실·귀가', s: '1인실 1~2시간', color: C.pp },
                ].map(({ n, t, s, color }) => (
                  <div key={n} style={{ textAlign: 'center' }}>
                    <div style={{ width: '40px', height: '40px', background: color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', fontWeight: 900, margin: '0 auto 10px', border: '3px solid #fff' }}>{n}</div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color, marginBottom: '4px' }}>{t}</div>
                    <div style={{ fontSize: '11px', color: C.tg, lineHeight: 1.5 }}>{s}</div>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, marginTop: '24px', letterSpacing: '-.01em' }}>
              전체 소요 시간은 검사·상담·회복 포함 약 2~3시간입니다. 수술 당일 6시간 이상 금식이 필요하며, 귀가 시 수면마취 특성상 자가 운전은 불가합니다.
            </p>
          </section>

          <Divider />

          {/* 섹션 6: 수술 후 관리 */}
          <section style={{ marginBottom: '44px' }}>
            <SectionTag>07 수술 후 관리</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신중절수술 후 회복 가이드</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, marginBottom: '20px', letterSpacing: '-.01em' }}>
              수술 후 빠른 회복을 위해 아래 사항을 지켜주세요. 수술 후 1주일 이내에 사후 검진을 받으시는 것을 권장합니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '24px' }}>
              <div style={{ height: '160px', borderRadius: '12px', overflow: 'hidden', border: `0.5px solid ${C.pbd}` }}>
                <img src="/images/hero-abortion-main.webp" alt="임신중절수술 상담 공간 연세365산부인과" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ height: '160px', borderRadius: '12px', overflow: 'hidden', border: `0.5px solid ${C.pbd}` }}>
                <img src="/images/hero-abortion-recovery.webp" alt="임신중절수술 후 회복실 연세365산부인과" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ height: '160px', borderRadius: '12px', overflow: 'hidden', border: `0.5px solid ${C.pbd}` }}>
                <img src="/images/hero-abortion-hospital.webp" alt="임신중절수술 병원 사당역 연세365산부인과" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div style={{ border: `0.5px solid ${C.greenBorder}`, borderRadius: '12px', padding: '18px', background: C.greenBg }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C.green, marginBottom: '12px' }}>✅ 가능한 것</div>
                <div style={{ fontSize: '12px', color: C.green, lineHeight: 2 }}>
                  {['가벼운 산책 (다음 날부터)', '일반 식사 (귀가 후 바로)', '샤워 (다음 날부터)', '사무직 업무 복귀 (2~3일 후)', '처방약 복용 (지시대로)'].map(t => <div key={t}>• {t}</div>)}
                </div>
              </div>
              <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '18px', background: C.pb }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C.p, marginBottom: '12px' }}>⛔ 삼가야 할 것</div>
                <div style={{ fontSize: '12px', color: C.pd, lineHeight: 2 }}>
                  {['성관계 (최소 2주~1개월)', '격렬한 운동 (2주 금지)', '음주·흡연 (회복 방해)', '탕목욕·사우나 (2주 금지)', '처방약 임의 중단'].map(t => <div key={t}>• {t}</div>)}
                </div>
              </div>
            </div>
            <InfoBox type="amber">⚠ 38도 이상 고열, 과다출혈, 심한 복통이 지속되면 즉시 내원하세요.</InfoBox>
          </section>

          {/* FAQ 섹션 */}
          <section style={{ marginBottom: '44px' }}>
            <SectionTag>자주 묻는 질문</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>
              임신중절수술에 관해 자주 묻는 질문
            </h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, marginBottom: '20px', letterSpacing: '-.01em' }}>
              상담 전에 많이 확인하는 비용, 당일 진행, 수술 방법, 준비사항과 회복 관련 내용을 정리했습니다.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
              {FEATURED_FAQS.map(({ q, a }) => (
                <FeaturedFAQItem key={q} question={q} answer={a} />
              ))}
            </div>
            <Link href="/abortion/faq" style={{ display: 'block', textAlign: 'center', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '14px', textDecoration: 'none', fontSize: '13px', fontWeight: 700, color: C.p }}>
              전체 {FAQ_COUNT}개 FAQ 보기 →
            </Link>
          </section>

          {/* 의료정보 안내 */}
          <section style={{ marginBottom: '44px', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '24px 28px' }}>
            <SectionTag>의료정보 안내</SectionTag>
            <h2 style={{ fontSize: '18px', fontWeight: 900, color: C.tm, marginBottom: '14px', letterSpacing: '-.02em' }}>
              의료정보는 어떤 기준으로 작성되었나요?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: C.ts, lineHeight: 1.85 }}>
              <div><strong style={{ color: C.tm }}>정보 제공:</strong> 연세365산부인과의원</div>
              <div><strong style={{ color: C.tm }}>최초 작성일:</strong> 2026년 5월 21일</div>
              <div><strong style={{ color: C.tm }}>최종 수정일:</strong> 2026년 6월 29일</div>
              <div><strong style={{ color: C.tm }}>공식 출처:</strong> 모자보건법, 대한산부인과학회 임상 지침</div>
              <div style={{ marginTop: '8px', fontSize: '12px', color: C.tg }}>본 정보는 일반적인 의료 안내이며 개인별 진료를 대신하지 않습니다. 정확한 진단과 치료는 의료기관을 방문하여 상담받으시기 바랍니다.</div>
            </div>
          </section>

          {/* 관련 페이지 */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '12px' }}>임신중절클리닉 더 자세히 보기</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }}>
              {RELATED.map(({ href, label }) => (
                <Link key={href} href={href} style={{ display: 'block', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px 16px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p }}>
                  → {label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: '36px', textAlign: 'center' }}>
            <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>연세365산부인과의원</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '6px' }}>서울특별시 관악구 과천대로 939, 3층 · 사당역 4번 출구 도보 3분</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.7)', marginBottom: '22px' }}>당일예약·당일수술 가능 · 비밀보장 · 전문의 직접 집도</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '14px', border: '0.5px solid rgba(255,255,255,.4)', padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 모바일 레이아웃 ── */}
      <div className="lg:hidden">

        {/* 모바일 히어로 */}
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-main.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '32px 20px',
        }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {['임신중절클리닉', '당일수술', '사당역 4번출구'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 10px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
          <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-.02em' }}>
            임신중절수술<br /><span style={{ fontSize: '18px', fontWeight: 700, opacity: .88 }}>주수 확인부터 수술 방법·비용·회복까지</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,.88)', fontSize: '13px', lineHeight: 1.85, marginBottom: '20px' }}>
            초음파로 임신 주수 확인 후 산부인과 전문의가 수술 방법을 안내합니다.
          </p>
          <div style={{ background: 'rgba(255,255,255,.1)', border: '0.5px solid rgba(255,255,255,.2)', borderRadius: '14px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '11px' }}>8주 미만 기준</div>
              <div style={{ color: '#FFD700', fontSize: '44px', fontWeight: 900, lineHeight: 1 }}>45</div>
              <div style={{ color: 'rgba(255,255,255,.85)', fontSize: '12px' }}>만원 (영양제 포함)</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {[['15분', '수술시간'], ['당일', '귀가'], ['의료법', '비밀보장'], ['1인실', '회복실']].map(([v, l]) => (
                <div key={l} style={{ background: 'rgba(255,255,255,.12)', borderRadius: '8px', padding: '8px', textAlign: 'center' }}>
                  <div style={{ color: '#FFD700', fontSize: '14px', fontWeight: 900 }}>{v}</div>
                  <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '9px', marginTop: '2px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 모바일 먼저 확인할 내용 */}
        <section style={{ padding: '20px 16px 4px', borderBottom: `0.5px solid ${C.pbd}` }}>
          <SectionTag>01 먼저 확인할 내용</SectionTag>
          <h2 style={{ fontSize: '18px', fontWeight: 900, color: C.tm, marginBottom: '10px', letterSpacing: '-.02em', lineHeight: 1.4 }}>
            임신중절수술 전, 먼저 확인해야 할 사항은 무엇인가요?
          </h2>
          <p className="speakable-summary" style={{ fontSize: '13px', color: C.ts, lineHeight: 1.9, marginBottom: '12px' }}>
            임신중절수술 전에는 초음파로 자궁 내 임신 여부와 정확한 임신 주수를 확인해야 합니다. 이후 건강 상태, 과거 병력, 복용 중인 약과 검사 결과를 바탕으로 의료진이 수술 가능 여부와 방법을 안내합니다. 연세365산부인과의원은 약물중절을 시행하지 않으며 수술적 방법에 대해서만 상담합니다.
          </p>
          <p style={{ fontSize: '13px', color: C.ts, lineHeight: 1.9, marginBottom: '14px' }}>
            비용은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원이며, 당일 진행 가능 여부는 금식 상태와 검사 결과에 따라 달라집니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
            {[
              { title: '주수 확인', desc: '초음파로 자궁 내 임신 여부와 정확한 주수 확인' },
              { title: '수술 방법', desc: '검사 결과·건강 상태를 바탕으로 의료진 안내' },
              { title: '주수별 비용', desc: '8주 미만 45만원 ~ 10주 80만원' },
              { title: '당일 진행', desc: '금식·검사 결과·예약 확인 후 가능 여부 안내' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px' }}>
                <div style={{ fontSize: '11px', fontWeight: 900, color: C.p, marginBottom: '4px' }}>{title}</div>
                <div style={{ fontSize: '11px', color: C.ts, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
          <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px', marginBottom: '10px', fontSize: '12px', fontWeight: 700, color: C.pd }}>
            본원 정책: 연세365산부인과의원은 약물중절을 시행하지 않고 수술적 방법만 상담합니다.
          </div>
          <p style={{ fontSize: '11px', color: C.tg, marginBottom: '16px' }}>※ 수술 가능 여부와 회복 과정은 개인의 건강 상태에 따라 달라질 수 있습니다.</p>
        </section>

        {/* 모바일 본문 아코디언 */}
        <MobileAccordion title="임신중절수술이란" icon="🔍">
          <p style={{ fontSize: '13px', color: C.ts, lineHeight: 1.9, marginBottom: '12px' }}>
            <strong style={{ color: C.p }}>임신중절수술</strong>은 자궁 내 임신 조직을 안전하게 제거하는 의료 시술입니다. 흡입술과 소파술로 나뉘며, 임신 주수에 따라 최적의 방법을 선택합니다.
          </p>
          <p style={{ fontSize: '13px', color: C.ts, lineHeight: 1.9, marginBottom: '12px' }}>
            2021년 낙태죄 폐지 후 14주 이내는 본인 동의만으로 가능합니다. 임신초기낙태·임신초기중절수술은 8주 이내로 비용도 낮고 회복도 빠릅니다.
          </p>
          <InfoBox>6~7주 내원 시 정확한 주수 진단에 유리합니다.</InfoBox>
        </MobileAccordion>

        <MobileAccordion title="임신중절수술 금액·낙태 비용 가격" icon="💰">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
            {[
              { w: '8주 미만', p: '45', color: C.p },
              { w: '8주', p: '60', color: '#C02860' },
              { w: '9주', p: '70', color: '#A01E4E' },
              { w: '10주', p: '80', color: '#7A1438' },
            ].map(({ w, p, color }) => (
              <div key={w} style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: C.tg, marginBottom: '4px' }}>{w}</div>
                <div style={{ fontSize: '28px', fontWeight: 900, color, lineHeight: 1 }}>{p}</div>
                <div style={{ fontSize: '11px', color: C.ts, marginTop: '2px' }}>만원</div>
              </div>
            ))}
          </div>
          <InfoBox type="amber">수술비·마취비·영양제·부가세 포함 최종 금액. 카드·현금 동일가.</InfoBox>
        </MobileAccordion>

        <MobileAccordion title="수술 방법 비교" icon="🔬">
          <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '10px', overflow: 'hidden', marginBottom: '10px' }}>
            <div style={{ background: C.pb, padding: '10px 14px', fontSize: '12px', fontWeight: 700, color: C.p, borderBottom: `0.5px solid ${C.pbd}` }}>흡입술</div>
            <div style={{ padding: '10px 14px', fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>8주 이내 · 10~15분 · 출혈 적음 · 회복 1~2일 · 45만원~</div>
            <div style={{ background: C.pb, padding: '10px 14px', fontSize: '12px', fontWeight: 700, color: C.pd, borderTop: `0.5px solid ${C.pbd}`, borderBottom: `0.5px solid ${C.pbd}` }}>소파술</div>
            <div style={{ padding: '10px 14px', fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>8~12주 · 20~30분 · 출혈 보통 · 회복 2~3일 · 60만원~</div>
            <div style={{ background: C.pb, padding: '8px 14px', fontSize: '11px', fontWeight: 700, color: C.p, borderTop: `0.5px solid ${C.pbd}`, textAlign: 'center' }}>공통: 수면마취 · 당일귀가 · 비밀보장</div>
          </div>
        </MobileAccordion>

        <MobileAccordion title="수술 당일 절차" icon="📋">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['내원·접수 및 동의서 작성', '초음파·혈액검사 (15~20분)', '전문의 상담 및 비용 확인', '수면마취 후 시술 (10~15분)', '1인 회복실 안정 후 당일 귀가'].map((s, i) => (
              <div key={s} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ width: '26px', height: '26px', background: C.p, borderRadius: '50%', color: '#fff', fontSize: '11px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                <span style={{ fontSize: '13px', color: C.ts, fontWeight: 600, lineHeight: 1.5 }}>{s}</span>
              </div>
            ))}
          </div>
        </MobileAccordion>

        <MobileAccordion title="수술 후 관리" icon="🌸">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
            <div style={{ border: `0.5px solid ${C.greenBorder}`, borderRadius: '10px', padding: '12px', background: C.greenBg }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.green, marginBottom: '8px' }}>✅ 가능</div>
              <div style={{ fontSize: '11px', color: C.green, lineHeight: 1.8 }}>산책 (다음날~)<br />식사 (귀가 후)<br />샤워 (다음날~)<br />업무 (2~3일 후)</div>
            </div>
            <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px', background: C.pb }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.p, marginBottom: '8px' }}>⛔ 금지</div>
              <div style={{ fontSize: '11px', color: C.pd, lineHeight: 1.8 }}>성관계 (2주~)<br />격렬운동 (2주)<br />음주·흡연<br />탕목욕 (2주)</div>
            </div>
          </div>
          <InfoBox type="amber">고열·과다출혈·심한 복통 지속 시 즉시 내원하세요.</InfoBox>
        </MobileAccordion>

        {/* 모바일 FAQ 섹션 */}
        <div style={{ padding: '16px', borderTop: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#bbb', marginBottom: '6px', letterSpacing: '.05em' }}>자주 묻는 질문</div>
          <div style={{ fontSize: '15px', fontWeight: 900, color: C.tm, marginBottom: '12px' }}>임신중절수술에 관해 자주 묻는 질문</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
            {FEATURED_FAQS.map(({ q, a }) => (
              <FeaturedFAQItem key={q} question={q} answer={a} />
            ))}
          </div>
          <Link href="/abortion/faq" style={{ display: 'block', textAlign: 'center', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '11px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p }}>
            전체 {FAQ_COUNT}개 FAQ 보기 →
          </Link>
        </div>

        {/* 모바일 의료정보 안내 */}
        <div style={{ padding: '14px 16px', background: C.pb, borderTop: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#bbb', marginBottom: '8px', letterSpacing: '.04em' }}>의료정보 안내</div>
          <div style={{ fontSize: '11px', color: C.tg, lineHeight: 1.8 }}>
            <div>정보 제공: 연세365산부인과의원</div>
            <div>최종 수정일: 2026년 6월 29일</div>
            <div>출처: 모자보건법, 대한산부인과학회 임상 지침</div>
            <div style={{ marginTop: '6px' }}>본 정보는 일반 의료 안내이며 개인별 진료를 대신하지 않습니다.</div>
          </div>
        </div>

        {/* 모바일 관련 링크 */}
        <div style={{ padding: '16px', background: C.pb, borderTop: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: C.tm, marginBottom: '10px' }}>더 자세히 보기</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '12px' }}>
            {RELATED.slice(0, 4).map(({ href, label }) => (
              <Link key={href} href={href} style={{ display: 'block', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '10px 12px', textDecoration: 'none', fontSize: '11px', fontWeight: 700, color: C.p, lineHeight: 1.4 }}>
                → {label}
              </Link>
            ))}
            <Link href="/abortion/surgery" style={{ display: 'block', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '10px 12px', textDecoration: 'none', fontSize: '11px', fontWeight: 700, color: C.p, lineHeight: 1.4 }}>
              → 수술 방법·절차·당일 진행 안내
            </Link>
          </div>
          <Link href="/abortion/faq" style={{ display: 'block', textAlign: 'center', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '11px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p }}>
            전체 {FAQ_COUNT}개 FAQ 보기 →
          </Link>
        </div>

      </div>
    </>
  )
}