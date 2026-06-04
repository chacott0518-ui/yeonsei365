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
      <button onClick={() => setOpen(!open)} style={{ width: '100%', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: C.pb, border: 'none', cursor: 'pointer' }}>
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
  { href: '/abortion/faq', label: 'FAQ 70가지' },
  { href: '/abortion/legal', label: '합법화 안내' },
]

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
              임신중절수술 병원<br />
              <span style={{ fontSize: '24px', fontWeight: 700, opacity: .88 }}>서울 사당역 연세365산부인과</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              믿을 수 있는 임신중절수술 병원을 찾고 계신가요?<br />
              사당역 4번출구 연세365산부인과에서 전문의가 직접 집도합니다.<br />
              당일예약·당일수술·비밀보장 시스템으로 안전하게 시술받으세요. · <ViewCounter slug="abortion-hospital" />
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>📞 02-585-3650</a>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[['사당역', '4번출구'], ['당일', '예약가능'], ['전문의', '직접집도'], ['비밀', '100% 보장']].map(([v, l]) => (
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
            <SectionTag>01 임신중절수술 병원 선택 기준</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>믿을 수 있는 낙태병원 선택 방법</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 병원을 선택할 때 가장 중요한 기준은 안전성입니다. 낙태 비용이 저렴하다는 이유만으로 병원을 선택하면 안전하지 않은 환경에서 시술을 받을 위험이 있습니다. 임신중절수술은 반드시 산부인과 전문의가 직접 집도해야 하며, 수면마취는 마취 전문의가 상주하는 병원에서 진행되어야 합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              서울에서 임신중절수술 병원을 찾고 계신 분들 중 많은 분들이 사당역 연세365산부인과를 방문합니다. 지하철 4호선·2호선 환승역인 사당역 4번출구에서 도보 1분 이내에 위치해 있어 전국 어디에서도 접근이 편리합니다. 서울 낙태병원 중에서도 교통이 가장 편리한 위치 중 하나입니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              임신중절수술 병원을 선택할 때는 반드시 확인해야 할 사항들이 있습니다. 산부인과 전문의 직접 집도 여부, 수면마취 전문의 상주 여부, 1인 회복실 운영 여부, 비밀보장 시스템, 낙태 비용 가격의 투명성, 응급 상황 대처 능력 등을 꼼꼼히 확인하시기 바랍니다. 연세365산부인과는 이 모든 기준을 충족하는 서울의 대표적인 임신중절수술 병원입니다.
            </p>

            {/* 병원 특징 6개 카드 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginBottom: '20px' }}>
              {[
                { icon: '👨‍⚕️', title: '전문의 직접 집도', desc: '산부인과 전문의가 모든 임신중절수술을 직접 집도합니다. 비전문의 대리 수술은 절대 없습니다.' },
                { icon: '😴', title: '수면마취 전문', desc: '마취 전문의 협진 하에 수면마취를 진행합니다. 수술 중 통증과 공포 없이 안전하게 진행됩니다.' },
                { icon: '🔒', title: '1인 회복실', desc: '독립된 1인 회복실에서 충분한 안정을 취한 후 귀가합니다. 완전한 프라이버시가 보장됩니다.' },
                { icon: '📅', title: '당일예약 당일수술', desc: '예약 당일 수술이 가능합니다. 긴급한 상황에서도 빠른 대응이 가능한 낙태병원입니다.' },
                { icon: '💰', title: '투명한 낙태 비용', desc: '낙태 비용 가격을 사전에 투명하게 공개합니다. 상담 시 안내된 임신중절수술 금액이 최종 금액입니다.' },
                { icon: '🌙', title: '야간진료 운영', desc: '직장인 등 낮에 방문하기 어려운 분들을 위해 야간진료를 운영합니다. 퇴근 후 방문도 가능합니다.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: '#fff' }}>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>{title}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.8 }}>{desc}</div>
                </div>
              ))}
            </div>
            <InfoBox>연세365산부인과는 산부인과 전문의가 상주하며 모든 임신중절수술을 직접 집도합니다. 비전문의 대리 수술, 무허가 시술은 절대 없습니다.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 2 */}
          <section>
            <SectionTag>02 위치 및 교통 안내</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>사당역 임신중절수술 병원 — 오시는 길</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              연세365산부인과는 서울 관악구 과천대로 939 3층에 위치합니다. 지하철 4호선·2호선 사당역 4번출구에서 도보 1분 이내의 거리로, 서울 어디에서든 접근이 매우 편리합니다. 낙태병원을 찾을 때 교통편이 불편하면 불안감이 커질 수 있는데, 사당역은 2호선과 4호선이 만나는 환승역으로 서울 전역에서 쉽게 오실 수 있습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              수면마취 후에는 자가 운전이 불가능하므로 대중교통을 이용하시거나 보호자와 함께 내원하시는 것을 권장합니다. 병원 인근에 버스 정류장도 여러 개 있어 버스로도 편리하게 방문하실 수 있습니다. 주차는 건물 인근 공영주차장을 이용하실 수 있으며, 사전에 전화로 주차 정보를 문의하시면 안내해 드립니다.
            </p>

            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '24px', marginBottom: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '14px' }}>📍 병원 정보</div>
                  {[
                    ['주소', '서울 관악구 과천대로 939 3층'],
                    ['전화', '02-585-3650'],
                    ['지하철', '4호선·2호선 사당역 4번출구 1분'],
                    ['진료시간', '평일 09:00~20:00 / 토 09:00~14:00'],
                    ['야간진료', '평일 18:00~20:00'],
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
                    { line: '지하철 4호선', detail: '사당역 4번출구 → 도보 1분' },
                    { line: '지하철 2호선', detail: '사당역 4번출구 → 도보 1분' },
                    { line: '버스', detail: '사당역 정류장 하차 → 도보 2분' },
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
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>왜 연세365산부인과를 선택해야 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              서울에는 많은 임신중절수술 병원이 있습니다. 그 중에서 연세365산부인과를 선택해야 하는 이유는 명확합니다. 연세대학교 의과대학 출신 산부인과 전문의가 직접 집도하며, 오랜 임상 경험을 바탕으로 임신 주수에 맞는 최적의 방법을 선택합니다. 낙태병원에서 가장 중요한 것은 수술의 안전성과 전문성인데, 연세365산부인과는 이 두 가지를 모두 충족합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술을 결심하기까지 많은 고민과 감정적인 어려움이 있으셨을 것입니다. 연세365산부인과는 환자의 심리적 안정을 위해 비판 없는 따뜻한 상담을 제공합니다. 어떤 상황이든 판단하지 않고, 최선의 의료 서비스를 제공하는 것이 저희의 원칙입니다. 임신중절병원을 찾는 모든 분들이 안심하고 방문하실 수 있도록 완전한 비밀이 보장됩니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              서울 낙태병원 중 사당역 연세365산부인과가 많은 선택을 받는 또 다른 이유는 야간진료 운영입니다. 직장을 다니거나 학교를 다니는 분들이 낮 시간에 낙태수술 병원을 방문하기 어려운 경우가 많습니다. 연세365산부인과는 평일 오후 8시까지 진료가 가능하여 퇴근 후에도 방문하실 수 있습니다.
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
                ['야간진료 운영', '✅ 평일 20시까지', '⚠ 확인 필요'],
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
              연세365산부인과 임신중절수술 예약은 전화, 카카오톡, 방문 상담 세 가지 방법으로 가능합니다. 예약 시 원하는 날짜와 시간을 말씀해 주시면 가능한 한 빠르게 일정을 잡아드립니다. 당일예약 당일수술도 가능하므로 긴급한 상황에서도 빠른 대응이 가능합니다. 모든 상담과 예약은 철저히 비밀이 보장되며 익명 상담도 가능합니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '20px' }}>
              {[
                { n: '1', method: '전화 예약', icon: '📞', detail: '02-585-3650으로 전화하시면 상담 후 예약이 가능합니다. 평일 09:00~20:00, 토요일 09:00~14:00 운영합니다.', color: C.p },
                { n: '2', method: '카카오톡 예약', icon: '💬', detail: '카카오톡 채널로 언제든지 편하게 상담하실 수 있습니다. 문자 메시지로 비밀스럽게 예약 가능합니다.', color: '#FEE500' },
                { n: '3', method: '방문 상담', icon: '🏥', detail: '직접 내원하여 즉시 상담 후 당일 수술도 가능합니다. 사당역 4번출구에서 도보 1분 거리입니다.', color: C.pp },
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
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>연세365산부인과 실제 방문 후기</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              임신중절수술 병원을 선택할 때 실제 방문 후기를 참고하시는 것이 도움이 됩니다. 연세365산부인과를 방문하신 분들의 공통적인 후기는 '따뜻한 상담', '빠른 수술', '비밀보장 철저', '추가 비용 없음'입니다. 어렵고 힘든 결정을 하신 분들이 편안하게 시술받고 일상으로 돌아갈 수 있도록 최선을 다합니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }}>
              {[
                { name: '20대 직장인', content: '혼자 왔는데 전혀 눈치 주지 않으시고 따뜻하게 상담해 주셨어요. 수술도 빠르게 끝나고 회복실에서 1시간 정도 쉬고 혼자 귀가했습니다. 낙태 비용도 처음 안내받은 그대로라 믿음이 갔어요.', rating: 5 },
                { name: '30대 직장인', content: '사당역에서 가까워서 퇴근 후 방문했어요. 야간진료가 있어서 너무 편했습니다. 선생님께서 판단하지 않으시고 전문적으로 상담해 주셔서 마음이 편했어요. 비밀도 완벽하게 지켜졌고요.', rating: 5 },
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

          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '12px' }}>임신중절클리닉 관련 안내</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }}>
              {RELATED.map(({ href, label }) => (
                <Link key={href} href={href} style={{ display: 'block', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px 16px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p }}>→ {label}</Link>
              ))}
            </div>
          </div>

          <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: '36px', textAlign: 'center' }}>
            <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>연세365산부인과</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '6px' }}>서울 관악구 과천대로 939 3층 · 사당역 4번출구 1분</div>
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
            {['임신중절수술 병원', '낙태병원', '사당역 4번출구'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 10px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-.02em' }}>
            임신중절수술 병원<br /><span style={{ fontSize: '17px', fontWeight: 700, opacity: .88 }}>서울 사당역 연세365산부인과</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '12px', lineHeight: 1.8, marginBottom: '16px' }}>
            산부인과 전문의 직접 집도. 당일예약·당일수술. 비밀 100% 보장.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {[['사당역 4번출구', '도보 1분'], ['당일예약', '당일수술 가능'], ['전문의', '직접 집도'], ['비밀', '100% 보장']].map(([v, l]) => (
              <div key={v} style={{ background: 'rgba(255,255,255,.12)', borderRadius: '8px', padding: '8px', textAlign: 'center' }}>
                <div style={{ color: '#FFD700', fontSize: '13px', fontWeight: 900 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '10px', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <MobileAccordion title="병원 선택 기준" icon="🏥">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            임신중절수술 병원 선택 시 낙태 비용만 보지 마세요. 산부인과 전문의 직접 집도 여부, 수면마취 전문의 상주, 1인 회복실, 비밀보장 시스템을 꼭 확인해야 합니다. 연세365산부인과는 이 모든 기준을 충족하는 서울의 신뢰할 수 있는 낙태병원입니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {['전문의 직접 집도', '수면마취 전문의', '1인 회복실', '비밀 100% 보장', '투명한 낙태 비용', '야간진료 운영'].map(t => (
              <div key={t} style={{ background: C.pb, borderRadius: '8px', padding: '8px 10px', border: `0.5px solid ${C.pbd}`, fontSize: '11px', fontWeight: 600, color: C.pd, textAlign: 'center' }}>✓ {t}</div>
            ))}
          </div>
        </MobileAccordion>

        <MobileAccordion title="위치·교통 안내" icon="📍">
          <div style={{ marginBottom: '10px' }}>
            {[
              ['주소', '서울 관악구 과천대로 939 3층'],
              ['전화', '02-585-3650'],
              ['지하철', '사당역 4번출구 도보 1분'],
              ['진료시간', '평일 09:00~20:00 / 토 09:00~14:00'],
              ['야간진료', '평일 18:00~20:00'],
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
            연세365산부인과 방문 후기 공통 키워드: 따뜻한 상담, 빠른 수술, 철저한 비밀보장, 추가 비용 없음. 어렵고 힘든 결정을 하신 분들이 편안하게 임신중절수술을 받고 일상으로 돌아가실 수 있도록 최선을 다합니다.
          </p>
          <InfoBox type="green">전문의 직접 집도 · 수면마취 전문의 상주 · 1인 회복실 · 야간진료 운영</InfoBox>
        </MobileAccordion>

        <div style={{ padding: '16px', background: C.pb, borderTop: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: C.tm, marginBottom: '10px' }}>관련 페이지</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '10px' }}>
            {RELATED.slice(0, 4).map(({ href, label }) => (
              <Link key={href} href={href} style={{ display: 'block', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '10px 12px', textDecoration: 'none', fontSize: '11px', fontWeight: 700, color: C.p, lineHeight: 1.4 }}>→ {label}</Link>
            ))}
          </div>
          <Link href="/abortion/faq" style={{ display: 'block', textAlign: 'center', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '11px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p }}>
            전체 70가지 FAQ 보기 →
          </Link>
        </div>
      </div>
    </>
  )
}