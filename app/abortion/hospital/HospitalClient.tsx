'use client'
import Link from 'next/link'
import { useState } from 'react'
import ViewCounter from '@/components/ViewCounter'

const C = {
  p: '#D6336C', pd: '#993556', pp: '#5c0e20',
  pb: '#FFF5F7', pbd: '#f0d0dc',
  ts: '#444', tm: '#1a1a1a', tg: '#888',
  amber: '#BA7517', amberDark: '#633806', amberBg: '#fff8e8',
  green: '#0f6e56', greenBg: '#f0faf5', greenBorder: '#5dcaa5',
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return <span style={{ display: 'inline-block', background: C.pb, color: C.pd, fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', letterSpacing: '.05em', marginBottom: '10px' }}>{children}</span>
}
function Divider() { return <hr style={{ border: 'none', borderTop: `1px solid ${C.pbd}`, margin: '44px 0' }} /> }
function InfoBox({ children, type = 'pink' }: { children: React.ReactNode; type?: 'pink' | 'amber' | 'green' }) {
  const s = { pink: { bg: C.pb, border: C.p, text: '#7A2040' }, amber: { bg: C.amberBg, border: C.amber, text: C.amberDark }, green: { bg: C.greenBg, border: C.green, text: C.green } }[type]
  return <div style={{ background: s.bg, borderLeft: `3px solid ${s.border}`, borderRadius: '0 10px 10px 0', padding: '14px 18px', margin: '16px 0' }}><p style={{ fontSize: '13px', color: s.text, lineHeight: 1.85, margin: 0, fontWeight: 600 }}>{children}</p></div>
}
function MobileAccordion({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `0.5px solid ${C.pbd}` }}>
      <button
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        style={{ width: '100%', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: C.pb, border: 'none', cursor: 'pointer' }}>
        <span style={{ fontSize: '13px', fontWeight: 700, color: C.p }}>{icon} {title}</span>
        <span style={{ color: C.p, fontSize: '12px', transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .2s', display: 'inline-block' }}>▼</span>
      </button>
      {open && <div style={{ padding: '12px 16px 16px' }}>{children}</div>}
    </div>
  )
}

const RELATED = [
  { href: '/abortion', label: '임신중절수술이란' },
  { href: '/abortion/cost', label: '금액·비용 안내' },
  { href: '/abortion/method', label: '수술 방법 종류' },
  { href: '/abortion/recovery', label: '수술 후 관리' },
  { href: '/abortion/faq', label: '전체 217개 FAQ' },
  { href: '/abortion/legal', label: '합법화 안내' },
]

const FEATURED_FAQS = [
  {
    q: '임신중절수술 병원을 선택할 때 무엇을 확인해야 하나요?',
    a: '산부인과 전문의의 직접 집도 여부, 1인 회복실 운영, 비밀보장 시스템, 수술 전 초음파 검사 실시 여부를 확인하는 것이 중요합니다. 가격이 낮더라도 위 기준을 충족하지 못하는 경우 불필요한 위험이 발생할 수 있습니다. 초기 상담 시 궁금한 점은 모두 질문하여 신뢰 여부를 직접 확인하세요.',
  },
  {
    q: '사당역에서 연세365산부인과의원까지 얼마나 걸리나요?',
    a: '지하철 4호선·2호선 사당역 4번 출구에서 도보로 약 1분 거리입니다. 주소는 서울특별시 관악구 과천대로 939, 3층이며, 버스 이용 시에도 사당역 정류장에서 가깝습니다. 수면마취 후 자가 운전이 불가하므로 대중교통 이용을 권장합니다.',
  },
  {
    q: '예약 없이 방문해도 되나요?',
    a: '방문 전 전화(02-585-3650)나 카카오톡 채널 상담을 통해 예약을 권장합니다. 예약 없이 방문하셔도 상담은 가능하지만 당일 수술 진행 여부는 예약 상황과 검사 결과에 따라 달라질 수 있습니다. 모든 상담과 접수 과정은 비밀이 보장됩니다.',
  },
  {
    q: '진료시간은 어떻게 되나요?',
    a: '월~금 오전 10시부터 오후 5시 30분까지, 토요일은 오전 9시부터 오후 4시 30분까지 진료합니다. 일·공휴일은 오전 10시부터 오후 2시까지 운영합니다. 공휴일 진료 여부는 사전에 전화로 확인하시기 바랍니다.',
  },
  {
    q: '처음 방문 시 어떤 서류나 준비물이 필요한가요?',
    a: '신분증은 반드시 지참하셔야 합니다. 당일 수술을 계획하고 계신다면 수술 6시간 전 완전 금식(물 포함)이 필요합니다. 복용 중인 약이 있다면 수술 전 반드시 알려주시기 바랍니다.',
  },
  {
    q: '가족이나 지인에게 알리지 않고 혼자 방문할 수 있나요?',
    a: '성인 기준으로 본인 동의만으로 방문과 수술이 가능합니다. 접수부터 상담, 수술, 귀가까지 독립된 동선으로 진행되어 다른 방문자와 마주치는 상황을 최소화합니다. 의료 기록은 의료법에 따라 본인 동의 없이는 외부에 공개되지 않습니다.',
  },
]

function FeaturedFAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <details open={open} onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
      style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '14px 18px', background: '#fff' }}>
      <summary style={{ fontSize: '14px', fontWeight: 700, color: C.tm, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Q. {question}</span>
        <span style={{ color: C.p, fontSize: '12px', marginLeft: '8px' }}>{open ? '▲' : '▼'}</span>
      </summary>
      <p style={{ fontSize: '13px', color: C.ts, lineHeight: 1.85, marginTop: '10px', marginBottom: 0 }}>{answer}</p>
    </details>
  )
}

export default function HospitalClient() {
  return (
    <>
      {/* ── PC ── */}
      <div className="hidden lg:block">
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-hospital.webp)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          minHeight: '420px', padding: '52px 80px', display: 'flex', gap: '48px', alignItems: 'center',
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {['임신중절수술 병원', '낙태병원', '사당역 산부인과', '서울 낙태병원'].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ color: '#fff', fontSize: '38px', fontWeight: 900, lineHeight: 1.25, letterSpacing: '-.03em', marginBottom: '16px' }}>
              임신중절수술 병원을
              선택할 때 확인해야 할 기준<span style={{ display: 'block', fontSize: '20px', fontWeight: 700, opacity: .88, marginTop: '8px' }}>진료 항목·비밀보장·위치·예약 확인 방법</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              믿을 수 있는 임신중절수술 병원을 찾고 계신가요?<br />
              사당역 4번 출구 연세365산부인과의원에서 전문의가 직접 집도합니다.<br />
              당일예약·당일수술·비밀보장 시스템으로 안전하게 시술받으세요.
 · <ViewCounter slug="abortion-hospital" />
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>📞 02-585-3650</a>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[['사당역', '4번 출구'], ['당일', '예약가능'], ['전문의', '직접집도'], ['비밀', '100% 보장']].map(([v, l]) => (
              <div key={v} style={{ background: 'rgba(255,255,255,.12)', border: '0.5px solid rgba(255,255,255,.2)', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
                <div style={{ color: '#FFD700', fontSize: '18px', fontWeight: 900 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '10px', marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: C.tg, padding: '20px 0 32px' }}>
            <Link href="/" style={{ color: C.tg, textDecoration: 'none' }}>홈</Link><span>›</span>
            <Link href="/abortion" style={{ color: C.tg, textDecoration: 'none' }}>임신중절클리닉</Link><span>›</span>
            <span style={{ color: C.p, fontWeight: 700 }}>병원 안내</span>
          </div>

          {/* 섹션 1 */}
          <section>
            <SectionTag>01 먼저 확인할 내용</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신중절수술 병원은 어떤 기준으로 선택해야 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              산부인과 전문의의 직접 집도 여부, 수술 전 초음파 검사 실시 여부, 1인 회복실 운영, 비밀보장 시스템을 먼저 확인해야 합니다. 비용이 낮더라도 이 기준을 충족하지 못하는 경우 위험이 발생할 수 있습니다. 진료 가능 주수와 수술 방법도 사전에 확인하는 것이 중요합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              예약은 전화(02-585-3650) 또는 카카오톡 채널로 가능하며, 당일예약 당일수술도 가능한 경우가 있습니다. 수술 전 초음파 검사를 통해 주수와 수술 방법을 결정하므로, 정확한 수술 가능 여부는 내원 후 확인합니다. 연세365산부인과의원은 사당역 4번 출구에서 도보 3분 거리에 위치하며, 연중무휴로 진료합니다.
            </p>
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px 20px', marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd, marginBottom: '10px' }}>핵심 확인 기준 | 최종 수정일 2026.06</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {[['전문의 집도', '산부인과 전문의 직접 집도'], ['초음파 검사', '수술 전 반드시 실시'], ['비밀보장', '1인 상담실·1인 회복실'], ['위치', '사당역 4번 출구 도보 3분']].map(([k, v]) => (
                  <div key={k} style={{ background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '10px 14px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: C.p, marginBottom: '3px' }}>{k}</div>
                    <div style={{ fontSize: '12px', color: C.ts }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 병원을 선택할 때 가장 중요한 기준은 안전성입니다. 낙태 비용이 저렴하다는 이유만으로 병원을 선택하면 안전하지 않은 환경에서 시술을 받을 위험이 있습니다. 임신중절수술은 반드시 산부인과 전문의가 직접 집도해야 하며, 수면마취는 마취 전문의가 상주하는 병원에서 진행되어야 합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              서울에서 임신중절수술 병원을 찾고 계신 분들 중 많은 분들이 사당역 연세365산부인과의원을 방문합니다. 지하철 4호선·2호선 환승역인 사당역 4번 출구에서 도보 3분 이내에 위치해 있어 전국 어디에서도 접근이 편리합니다. 서울 낙태병원 중에서도 교통이 가장 편리한 위치 중 하나입니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              임신중절수술 병원을 선택할 때는 반드시 확인해야 할 사항들이 있습니다. 산부인과 전문의 직접 집도 여부, 수면마취 전문의 상주 여부, 1인 회복실 운영 여부, 비밀보장 시스템, 낙태 비용 가격의 투명성, 응급 상황 대처 능력 등을 꼼꼼히 확인하시기 바랍니다. 연세365산부인과의원은 이 모든 기준을 충족하는 서울의 대표적인 임신중절수술 병원입니다.
            </p>

            {/* 병원 특징 6개 카드 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginBottom: '20px' }}>
              {[
                { icon: '👨‍⚕️', title: '전문의 직접 집도', desc: '산부인과 전문의가 모든 임신중절수술을 직접 집도합니다. 비전문의 대리 수술은 절대 없습니다.' },
                { icon: '😴', title: '수면마취 전문', desc: '마취 전문의 협진 하에 수면마취를 진행합니다. 수술 중 통증과 공포 없이 안전하게 진행됩니다.' },
                { icon: '🔒', title: '1인 회복실', desc: '독립된 1인 회복실에서 충분한 안정을 취한 후 귀가합니다. 완전한 프라이버시가 보장됩니다.' },
                { icon: '📅', title: '당일예약 당일수술', desc: '예약 당일 수술이 가능합니다. 긴급한 상황에서도 빠른 대응이 가능한 낙태병원입니다.' },
                { icon: '💰', title: '투명한 낙태 비용', desc: '낙태 비용 가격을 사전에 투명하게 공개합니다. 상담 시 안내된 임신중절수술 금액이 최종 금액입니다.' },
                { icon: '🌙', title: '연중무휴 운영', desc: '월~금 10:00~17:30, 토요일 09:00~16:30, 일·공휴일 10:00~14:00 연중무휴로 진료합니다.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: '#fff' }}>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>{title}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.8 }}>{desc}</div>
                </div>
              ))}
            </div>
            <InfoBox>연세365산부인과의원은 산부인과 전문의가 상주하며 모든 임신중절수술을 직접 집도합니다. 비전문의 대리 수술, 무허가 시술은 절대 없습니다.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 2 */}
          <section>
            <SectionTag>02 위치 및 교통 안내</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>사당역 임신중절수술 병원 — 오시는 길</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              연세365산부인과의원은 서울특별시 관악구 과천대로 939, 3층에 위치합니다. 지하철 4호선·2호선 사당역 4번 출구에서 도보 3분 이내의 거리로, 서울 어디에서든 접근이 매우 편리합니다. 낙태병원을 찾을 때 교통편이 불편하면 불안감이 커질 수 있는데, 사당역은 2호선과 4호선이 만나는 환승역으로 서울 전역에서 쉽게 오실 수 있습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              수면마취 후에는 자가 운전이 불가능하므로 대중교통을 이용하시거나 보호자와 함께 내원하시는 것을 권장합니다. 병원 인근에 버스 정류장도 여러 개 있어 버스로도 편리하게 방문하실 수 있습니다. 주차는 건물 인근 공영주차장을 이용하실 수 있으며, 사전에 전화로 주차 정보를 문의하시면 안내해 드립니다.
            </p>

            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '24px', marginBottom: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '14px' }}>📍 병원 정보</div>
                  {[
                    ['주소', '서울특별시 관악구 과천대로 939, 3층'],
                    ['전화', '02-585-3650'],
                    ['지하철', '4호선·2호선 사당역 4번 출구 1분'],
                    ['진료시간', '월~금 10:00~17:30 / 토 09:00~16:30 / 일·공휴일 10:00~14:00'],
                    ['점심시간', '13:00~14:00 (진료 중단)'],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', gap: '12px', padding: '8px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px' }}>
                      <span style={{ color: C.tg, fontWeight: 600, flexShrink: 0, width: '70px' }}>{k}</span>
                      <span style={{ color: C.tm, fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '14px' }}>🚇 교통 안내</div>
                  {[
                    { line: '지하철 4호선', detail: '사당역 4번 출구 → 도보 3분' },
                    { line: '지하철 2호선', detail: '사당역 4번 출구 → 도보 3분' },
                    { line: '버스', detail: '사당역 정류장 하차 → 도보 3분' },
                    { line: '자가용', detail: '인근 공영주차장 이용 (사전 문의)' },
                  ].map(({ line, detail }) => (
                    <div key={line} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px', alignItems: 'flex-start' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: C.p, flexShrink: 0, marginTop: '5px' }} />
                      <div>
                        <div style={{ fontWeight: 700, color: C.p, marginBottom: '2px' }}>{line}</div>
                        <div style={{ color: C.ts }}>{detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <InfoBox>수면마취 후에는 자가 운전이 불가합니다. 대중교통 이용 또는 보호자 동반 귀가를 권장합니다.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 3 */}
          <section>
            <SectionTag>03 연세365 임신중절수술 병원 특징</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>왜 연세365산부인과의원을 선택해야 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              서울에는 많은 임신중절수술 병원이 있습니다. 그 중에서 연세365산부인과의원을 선택해야 하는 이유는 명확합니다. 연세대학교 의과대학 출신 산부인과 전문의가 직접 집도하며, 오랜 임상 경험을 바탕으로 임신 주수에 맞는 최적의 방법을 선택합니다. 낙태병원에서 가장 중요한 것은 수술의 안전성과 전문성인데, 연세365산부인과의원은 이 두 가지를 모두 충족합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술을 결심하기까지 많은 고민과 감정적인 어려움이 있으셨을 것입니다. 연세365산부인과의원은 환자의 심리적 안정을 위해 비판 없는 따뜻한 상담을 제공합니다. 어떤 상황이든 판단하지 않고, 최선의 의료 서비스를 제공하는 것이 저희의 원칙입니다. 임신중절병원을 찾는 모든 분들이 안심하고 방문하실 수 있도록 완전한 비밀이 보장됩니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              서울 낙태병원 중 사당역 연세365산부인과의원이 많은 선택을 받는 또 다른 이유는 연중무휴 운영입니다. 월~금 10:00~17:30, 토요일 09:00~16:30, 일·공휴일 10:00~14:00에 진료합니다.
            </p>

            {/* 선택 기준 비교 표 */}
            <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden', marginBottom: '20px' }}>
              <div style={{ background: '#F8E8EF', padding: '14px 20px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '8px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C.pd }}>확인 항목</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C.pd, textAlign: 'center' }}>연세365</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C.tg, textAlign: 'center' }}>일반 기준</div>
              </div>
              {[
                ['산부인과 전문의 직접 집도', '✅ 항상', '⚠ 확인 필요'],
                ['수면마취 전문의 상주', '✅ 항상', '⚠ 확인 필요'],
                ['1인 프라이빗 회복실', '✅ 운영', '⚠ 확인 필요'],
                ['낙태 비용 가격 투명 공개', '✅ 사전 공개', '⚠ 상담 후 안내'],
                ['연중무휴 운영', '✅ 평일 20시까지', '⚠ 확인 필요'],
                ['당일예약·당일수술', '✅ 가능', '⚠ 확인 필요'],
                ['비밀보장 시스템', '✅ 100%', '⚠ 확인 필요'],
                ['추가 비용 청구', '✅ 없음', '⚠ 발생 가능'],
              ].map(([item, us, others], i) => (
                <div key={item} style={{ padding: '12px 20px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '8px', background: i % 2 === 0 ? C.pb : '#fff', borderTop: `0.5px solid ${C.pbd}` }}>
                  <div style={{ fontSize: '13px', color: C.ts }}>{item}</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: C.green, textAlign: 'center' }}>{us}</div>
                  <div style={{ fontSize: '13px', color: C.tg, textAlign: 'center' }}>{others}</div>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* 섹션 4 */}
          <section>
            <SectionTag>04 임신중절수술 예약 방법</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>예약부터 수술까지 — 간단한 3단계</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              연세365산부인과의원 임신중절수술 예약은 전화, 카카오톡, 방문 상담 세 가지 방법으로 가능합니다. 예약 시 원하는 날짜와 시간을 말씀해 주시면 가능한 한 빠르게 일정을 잡아드립니다. 당일예약 당일수술도 가능하므로 긴급한 상황에서도 빠른 대응이 가능합니다. 모든 상담과 예약은 철저히 비밀이 보장되며 익명 상담도 가능합니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '20px' }}>
              {[
                { n: '1', method: '전화 예약', icon: '📞', detail: '02-585-3650으로 전화하시면 상담 후 예약이 가능합니다. 월~금 10:00~17:30, 토요일 09:00~16:30, 일·공휴일 10:00~14:00 운영합니다.', color: C.p },
                { n: '2', method: '카카오톡 예약', icon: '💬', detail: '카카오톡 채널로 언제든지 편하게 상담하실 수 있습니다. 문자 메시지로 비밀스럽게 예약 가능합니다.', color: '#FEE500' },
                { n: '3', method: '방문 상담', icon: '🏥', detail: '직접 내원하여 즉시 상담 후 당일 수술도 가능합니다. 사당역 4번 출구에서 도보 3분 거리입니다.', color: C.pp },
              ].map(({ n, method, icon, detail, color }) => (
                <div key={method} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden', background: '#fff' }}>
                  <div style={{ background: color === '#FEE500' ? '#FEE500' : color, padding: '14px 18px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ width: '28px', height: '28px', background: 'rgba(255,255,255,.2)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 900, color: color === '#FEE500' ? '#3B1B1B' : '#fff', flexShrink: 0 }}>{n}</span>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: color === '#FEE500' ? '#3B1B1B' : '#fff' }}>{method}</span>
                    <span style={{ fontSize: '20px', marginLeft: 'auto' }}>{icon}</span>
                  </div>
                  <div style={{ padding: '16px 18px', fontSize: '13px', color: C.ts, lineHeight: 1.8 }}>{detail}</div>
                </div>
              ))}
            </div>

            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px 24px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '14px' }}>⚠ 예약 전 반드시 확인하세요</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px' }}>
                {[
                  '수술 6시간 전부터 완전 금식 (물 포함)',
                  '신분증 반드시 지참',
                  '수면마취 후 자가 운전 불가',
                  '편한 복장으로 내원',
                  '생리대 개인 지참 권장',
                  '현재 복용 중인 약 의료진에게 고지',
                ].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: C.ts, alignItems: 'flex-start' }}>
                    <span style={{ color: C.p, fontWeight: 700, flexShrink: 0 }}>•</span>{t}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          {/* 섹션 5 */}
          <section>
            <SectionTag>05 임신중절수술 후기·사례</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>연세365산부인과의원 실제 방문 후기</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              임신중절수술 병원을 선택할 때 실제 방문 후기를 참고하시는 것이 도움이 됩니다. 연세365산부인과의원을 방문하신 분들의 공통적인 후기에는 '따뜻한 상담', '빠른 수술', '비밀보장 철저'가 자주 언급됩니다. 어렵고 힘든 결정을 하신 분들이 편안하게 시술받고 일상으로 돌아갈 수 있도록 최선을 다합니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }}>
              {[
                { name: '20대 직장인', content: '혼자 왔는데 전혀 눈치 주지 않으시고 따뜻하게 상담해 주셨어요. 수술도 빠르게 끝나고 회복실에서 1시간 정도 쉬고 혼자 귀가했습니다. 낙태 비용도 처음 안내받은 그대로라 믿음이 갔어요.', rating: 5 },
                { name: '30대 직장인', content: '사당역에서 가까워서 방문했어요. 연중무휴 진료라 일정 맞추기 편했습니다. 선생님께서 판단하지 않으시고 전문적으로 상담해 주셔서 마음이 편했어요. 비밀도 완벽하게 지켜졌고요.', rating: 5 },
                { name: '20대 학생', content: '처음이라 너무 두려웠는데 원장님이 처음부터 끝까지 설명해 주셔서 안심이 됐어요. 수면마취라 수술 중 아무것도 몰랐고 깨어나니 끝나 있었어요. 임신중절수술 병원 고민하신다면 여기 강추합니다.', rating: 5 },
              ].map(({ name, content, rating }) => (
                <div key={name} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '18px', background: '#fff' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ width: '32px', height: '32px', background: C.pb, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>👤</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm }}>{name}</div>
                      <div style={{ fontSize: '12px', color: '#FFD700' }}>{'★'.repeat(rating)}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.8, margin: 0 }}>{content}</p>
                </div>
              ))}
            </div>
          </section>

          <Divider />



          <Divider />

          {/* 신규 섹션: 상담 전 확인할 진료 항목 */}
          <section>
            <SectionTag>05 상담 전 확인할 진료 항목과 병원 운영 정보</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>상담 전에 진료 항목과 병원 운영 정보를 어떻게 확인해야 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              병원에 전화하거나 카카오톡으로 상담을 먼저 요청하면, 현재 진료 가능한 임신 주수 범위와 수술 방법, 수술 비용 범위, 당일 수술 가능 여부를 미리 확인할 수 있습니다. 연세365산부인과의원은 약물중절을 시행하지 않으며, 수면마취 흡입술과 소파술을 주수에 따라 진행합니다. 여의사 진료는 운영하지 않으므로 사전에 확인하시기 바랍니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              진료 가능 주수, 수술 방법, 당일 수술 진행 가능 여부는 개인 건강 상태와 초음파 검사 결과에 따라 달라질 수 있습니다. 사전에 전화 상담으로 예상 주수를 알려주시면 더 정확한 안내가 가능합니다. 진료시간은 월~금 10:00~17:30, 토요일 09:00~16:30, 일·공휴일 10:00~14:00입니다.
            </p>
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px 24px', marginBottom: '16px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '16px' }}>연세365산부인과의원 진료 정보</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
                {[
                  ['수술 방법', '흡입술·소파술 (주수에 따라 결정)'],
                  ['약물중절', '시행하지 않음'],
                  ['여의사 진료', '운영하지 않음'],
                  ['당일 수술', '검사 결과에 따라 가능'],
                  ['진료시간', '월~금 10~17:30 / 토 09~16:30 / 일·공휴일 10~14'],
                  ['점심시간', '13~14시 진료 중단'],
                  ['예약 방법', '전화·카카오톡·방문 상담'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px' }}>
                    <span style={{ color: C.tg, fontWeight: 600, flexShrink: 0, width: '80px' }}>{k}</span>
                    <span style={{ color: C.tm }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <InfoBox>진료시간과 진료 범위는 예고 없이 변경될 수 있습니다. 방문 전 전화(02-585-3650) 또는 카카오톡으로 사전 확인을 권장합니다.</InfoBox>
          </section>

          <Divider />

          {/* 신규 섹션: 위치·예약·개인정보·사후관리 확인 방법 */}
          <section>
            <SectionTag>06 위치·예약·개인정보 보호·사후관리 확인 방법</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>위치·예약·개인정보 보호·사후관리를 어떻게 확인할 수 있나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              연세365산부인과의원은 서울특별시 관악구 과천대로 939, 3층에 위치하며, 지하철 4호선·2호선 사당역 4번 출구에서 도보 3분 거리입니다. 서울 어디에서든 대중교통으로 쉽게 방문할 수 있어, 교통 스트레스 없이 내원할 수 있습니다. 수면마취 후 자가 운전이 불가하므로 대중교통을 이용하거나 보호자와 함께 귀가해야 합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              개인정보는 의료법 제19조에 따라 철저히 보호됩니다. 1인 상담실·1인 회복실·독립 동선 운영으로 다른 방문자와 마주치는 상황을 최소화합니다. 카드 결제 내역에는 수술 내용이 직접 노출되지 않으며, 익명 상담도 가능합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '16px' }}>
              사후관리를 위한 재진 예약은 수술 당일 안내받을 수 있습니다. 수술 후 이상 증상(고열, 과다출혈, 심한 복통 등)이 발생하면 즉시 연락하면 됩니다. 연세365산부인과의원은 진료시간 내 전화 문의가 가능합니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '16px' }}>
              {[
                { icon: '📍', title: '위치·교통', desc: '서울특별시 관악구 과천대로 939, 3층. 사당역 4번 출구 도보 3분. 2호선·4호선 환승역으로 전국에서 접근 편리.' },
                { icon: '📅', title: '예약·당일 수술', desc: '전화(02-585-3650)·카카오톡·방문 상담으로 예약. 당일 수술은 검사 결과 확인 후 가능 여부 안내.' },
                { icon: '🔒', title: '개인정보 보호', desc: '의료법에 따라 진료 내용 완전 보호. 1인 동선 운영. 카드 내역에 수술 내용 미노출. 익명 상담 가능.' },
                { icon: '🏥', title: '사후관리', desc: '수술 후 1주 이내 사후 검진 권장. 이상 증상 발생 시 즉시 연락 가능. 야간 긴급 문의 가능.' },
                { icon: '💰', title: '비용 확인', desc: '전화·카카오톡으로 예상 비용 범위 사전 문의 가능. 정확한 비용은 초음파 검사 후 확정.' },
                { icon: '🔇', title: '비밀보장', desc: '1인 상담실·1인 회복실 운영. 독립 동선으로 다른 환자와 접촉 최소화. 법적 비밀보장.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '18px', background: '#fff' }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>{title}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
            <InfoBox>연세365산부인과의원은 사당역 임신중절수술 병원으로 대중교통 접근이 매우 편리합니다. 수면마취 후에는 반드시 대중교통을 이용하거나 보호자와 함께 귀가해야 합니다.</InfoBox>
            <div style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '10px' }}>관련 내용 더 보기</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Link href="/abortion/cost" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 주수별 비용 보기</Link>
                <Link href="/abortion/info" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 준비사항 안내</Link>
                <Link href="/abortion/recovery" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 후 관리 방법</Link>
                <Link href="/abortion/faq" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 전체 217개 FAQ 보기</Link>
              </div>
            </div>
          </section>

          <Divider />

          <section style={{ marginBottom: '44px' }}>
            <SectionTag>자주 묻는 질문</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>
              임신중절수술 병원 선택에 관해 자주 묻는 질문
            </h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, marginBottom: '20px', letterSpacing: '-.01em' }}>
              병원 선택 기준, 위치, 진료시간, 예약, 혼자 방문 가능 여부에 대한 내용을 정리했습니다.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
              {FEATURED_FAQS.map(({ q, a }) => (
                <FeaturedFAQItem key={q} question={q} answer={a} />
              ))}
            </div>
            <Link href="/abortion/faq" style={{ display: 'block', textAlign: 'center', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '14px', textDecoration: 'none', fontSize: '13px', fontWeight: 700, color: C.p }}>
              전체 217개 FAQ 보기 →
            </Link>
          </section>

          <section style={{ marginBottom: '44px', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '24px 28px' }}>
            <SectionTag>의료정보 안내</SectionTag>
            <h2 style={{ fontSize: '18px', fontWeight: 900, color: C.tm, marginBottom: '14px', letterSpacing: '-.02em' }}>
              병원 안내 정보는 어떤 기준으로 작성되었나요?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: C.ts, lineHeight: 1.85 }}>
              <div><strong style={{ color: C.tm }}>정보 제공:</strong> 연세365산부인과의원</div>
              <div><strong style={{ color: C.tm }}>최종 수정일:</strong> 2026년 6월 29일</div>
              <div><strong style={{ color: C.tm }}>공식 출처:</strong> 연세365산부인과의원 운영 안내</div>
              <div style={{ marginTop: '8px', fontSize: '12px', color: C.tg }}>진료시간, 예약 방법, 비용은 사전 공지 없이 변경될 수 있습니다. 방문 전 전화 또는 채널톡으로 확인하시기 바랍니다.</div>
            </div>
          </section>

          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '12px' }}>임신중절클리닉 관련 안내</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }}>
              {RELATED.map(({ href, label }) => (
                <Link key={href} href={href} style={{ display: 'block', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px 16px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p }}>→ {label}</Link>
              ))}
            </div>
          </div>

          <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: '36px', textAlign: 'center' }}>
            <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>연세365산부인과의원</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '6px' }}>서울특별시 관악구 과천대로 939, 3층 · 사당역 4번 출구 도보 3분</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.7)', marginBottom: '22px' }}>임신중절수술 병원 · 산부인과 전문의 직접 집도 · 비밀보장 · 당일예약 가능</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '14px', border: '0.5px solid rgba(255,255,255,.4)', padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 모바일 ── */}
      <div className="lg:hidden">
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-hospital.webp)`,
          backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px 20px',
        }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {['임신중절수술 병원', '낙태병원', '사당역 4번 출구'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 10px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
          <h2 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-.02em' }}>
            임신중절수술 병원<br />선택 기준 확인하기<span style={{ display: 'block', fontSize: '15px', fontWeight: 700, opacity: .88, marginTop: '6px' }}>진료 항목·위치·예약·비밀보장 안내</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '12px', lineHeight: 1.8, marginBottom: '16px' }}>
            산부인과 전문의 직접 집도. 당일예약 가능. 의료법 비밀보장.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {[['사당역 4번 출구', '도보 3분'], ['당일예약', '검사 후 확인'], ['전문의', '직접 집도'], ['비밀', '의료법 보장']].map(([v, l]) => (
              <div key={v} style={{ background: 'rgba(255,255,255,.12)', borderRadius: '8px', padding: '8px', textAlign: 'center' }}>
                <div style={{ color: '#FFD700', fontSize: '13px', fontWeight: 900 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '10px', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>


        <div style={{ padding: '18px 16px', background: '#fff', borderBottom: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '13px', fontWeight: 900, color: C.tm, marginBottom: '8px' }}>임신중절수술 병원은 어떤 기준으로 선택해야 하나요?</div>
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            산부인과 전문의 직접 집도, 수술 전 초음파 검사, 1인 회복실, 비밀보장 시스템을 먼저 확인하세요. 예약은 전화(02-585-3650)나 카카오톡으로 가능하며, 사당역 4번 출구에서 도보 3분 거리입니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {[['전문의 집도', '산부인과 전문의'], ['초음파 검사', '수술 전 실시'], ['1인 회복실', '비밀보장'], ['사당역 1분', '대중교통 접근']].map(([k, v]) => (
              <div key={k} style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '8px 10px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: C.p, marginBottom: '2px' }}>{k}</div>
                <div style={{ fontSize: '10px', color: C.ts }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <MobileAccordion title="병원 선택 기준" icon="🏥">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            임신중절수술 병원 선택 시 낙태 비용만 보지 마세요. 산부인과 전문의 직접 집도 여부, 수면마취 전문의 상주, 1인 회복실, 비밀보장 시스템을 꼭 확인해야 합니다. 연세365산부인과의원은 이 모든 기준을 충족하는 서울의 신뢰할 수 있는 낙태병원입니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {['전문의 직접 집도', '수면마취 진행', '1인 회복실', '의료법 비밀보장', '투명한 비용 안내', '연중무휴 운영'].map(t => (
              <div key={t} style={{ background: C.pb, borderRadius: '8px', padding: '8px 10px', border: `0.5px solid ${C.pbd}`, fontSize: '11px', fontWeight: 600, color: C.pd, textAlign: 'center' }}>✓ {t}</div>
            ))}
          </div>
        </MobileAccordion>

        <MobileAccordion title="위치·교통 안내" icon="📍">
          <div style={{ marginBottom: '10px' }}>
            {[
              ['주소', '서울특별시 관악구 과천대로 939, 3층'],
              ['전화', '02-585-3650'],
              ['지하철', '사당역 4번 출구 도보 3분'],
              ['진료시간', '월~금 10:00~17:30 / 토 09:00~16:30 / 일·공휴일 10:00~14:00'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '12px' }}>
                <span style={{ color: C.tg, fontWeight: 600, flexShrink: 0, width: '65px' }}>{k}</span>
                <span style={{ color: C.tm, fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
          <InfoBox>수면마취 후 자가 운전 불가합니다. 대중교통 이용 또는 보호자 동반 귀가를 권장합니다.</InfoBox>
        </MobileAccordion>

        <MobileAccordion title="예약 방법" icon="📅">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            전화(02-585-3650), 카카오톡 채널, 방문 상담 세 가지 방법으로 예약 가능합니다. 당일예약 당일수술도 가능하며 모든 상담은 비밀이 보장됩니다.
          </p>
          <div style={{ background: C.pb, borderRadius: '10px', padding: '12px 14px', border: `0.5px solid ${C.pbd}` }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: C.p, marginBottom: '8px' }}>예약 전 체크리스트</div>
            {['수술 6시간 전 완전 금식 (물 포함)', '신분증 반드시 지참', '편한 복장으로 내원', '수면마취 후 자가 운전 불가'].map(t => (
              <div key={t} style={{ fontSize: '11px', color: C.ts, padding: '4px 0', borderBottom: `0.5px solid ${C.pbd}` }}>• {t}</div>
            ))}
          </div>
        </MobileAccordion>

        <MobileAccordion title="방문 후기" icon="⭐">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            연세365산부인과의원 방문 후기 공통 키워드: 따뜻한 상담, 빠른 수술, 철저한 비밀보장, 추가 비용 없음. 어렵고 힘든 결정을 하신 분들이 편안하게 임신중절수술을 받고 일상으로 돌아가실 수 있도록 최선을 다합니다.
          </p>
          <InfoBox type="green">전문의 직접 집도 · 수면마취 전문의 상주 · 1인 회복실 · 연중무휴 운영</InfoBox>
        </MobileAccordion>

        <div style={{ padding: '16px 16px 0' }}>
          <div style={{ fontSize: '14px', fontWeight: 900, color: C.tm, marginBottom: '14px' }}>병원 선택 자주 묻는 질문</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
            {FEATURED_FAQS.map(({ q, a }) => (
              <FeaturedFAQItem key={q} question={q} answer={a} />
            ))}
          </div>
          <Link href="/abortion/faq" style={{ display: 'block', textAlign: 'center', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p, marginBottom: '16px' }}>
            전체 217개 FAQ 보기 →
          </Link>
          <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px', marginBottom: '16px', fontSize: '12px', color: C.ts, lineHeight: 1.85 }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>의료정보 안내</div>
            <div>정보 제공: 연세365산부인과의원 · 최종 수정일: 2026년 6월 29일</div>
            <div style={{ marginTop: '6px', fontSize: '11px', color: C.tg }}>진료시간·비용 등은 변경될 수 있습니다. 방문 전 전화로 확인하시기 바랍니다.</div>
          </div>
        </div>

        <div style={{ padding: '16px', background: C.pb, borderTop: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: C.tm, marginBottom: '10px' }}>관련 페이지</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '10px' }}>
            {RELATED.slice(0, 4).map(({ href, label }) => (
              <Link key={href} href={href} style={{ display: 'block', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '10px 12px', textDecoration: 'none', fontSize: '11px', fontWeight: 700, color: C.p, lineHeight: 1.4 }}>→ {label}</Link>
            ))}
          </div>
          <Link href="/abortion/faq" style={{ display: 'block', textAlign: 'center', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '11px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p }}>
            전체 217개 FAQ 보기 →
          </Link>
        </div>
      </div>
    </>
  )
}