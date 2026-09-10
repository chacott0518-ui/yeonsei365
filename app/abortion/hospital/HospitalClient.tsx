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
  { href: '/abortion/faq', label: `전체 ${FAQ_COUNT}개 FAQ` },
  { href: '/abortion/legal', label: '합법화 안내' },
]

const FEATURED_FAQS = [
  {
    q: '임신중절수술 병원을 선택할 때 무엇을 확인해야 하나요?',
    a: '산부인과 전문의의 직접 집도 여부, 1인 회복실 운영, 개인정보와 진료정보 보호, 수술 전 초음파 검사 실시 여부를 확인하는 것이 중요합니다. 가격이 낮더라도 위 기준을 충족하지 못하는 경우 불필요한 위험이 발생할 수 있습니다. 초기 상담 시 궁금한 점은 모두 질문하여 신뢰 여부를 직접 확인하세요.',
  },
  {
    q: '사당역에서 연세365산부인과의원까지 얼마나 걸리나요?',
    a: '사당역 4번 출구 도보 3분 거리에 있습니다. 주소는 서울특별시 관악구 과천대로 939, 3층이며, 버스 이용 시에도 사당역 정류장에서 가깝습니다. 수면마취 후 자가 운전이 불가하므로 대중교통 이용을 권장합니다.',
  },
  {
    q: '예약 없이 방문해도 되나요?',
    a: '방문 전 전화(02-585-3650)나 카카오톡 채널 상담을 통해 예약을 권장합니다. 예약 없이 방문하셔도 상담은 가능하지만, 검사 결과, 금식 상태, 건강 상태와 진료 일정에 따라 당일 진행 여부가 결정됩니다. 상담과 접수 과정은 의료법과 개인정보 보호 기준에 따라 진료정보를 보호합니다.',
  },
  {
    q: '진료시간은 어떻게 되나요?',
    a: '평일 월~금 10:00~17:30, 토요일 09:00~16:30, 일요일·공휴일 10:00~14:00에 진료합니다. 공휴일 진료 여부는 사전에 전화로 확인하시기 바랍니다.',
  },
  {
    q: '처음 방문 시 어떤 서류나 준비물이 필요한가요?',
    a: '신분증은 반드시 지참하셔야 합니다. 당일 수술을 계획하고 계신다면 수술 6시간 전 금식(물 포함)이 필요합니다. 복용 중인 약이 있다면 수술 전 반드시 알려주시기 바랍니다.',
  },
  {
    q: '가족이나 지인에게 알리지 않고 혼자 방문할 수 있나요?',
    a: '성인 기준으로 본인 동의만으로 방문과 수술이 가능합니다. 접수부터 상담, 수술, 귀가까지 독립된 동선으로 진행되어 다른 방문자와 마주치는 상황을 최소화합니다. 의료 기록은 의료법에 따라 본인 동의 없이는 외부에 공개되지 않습니다.',
  },
]

function MedicalSourceDetails({
  published,
  modified,
  sources,
}: {
  published?: string
  modified?: string
  sources: string
}) {
  return (
    <details className="mb-6 rounded-xl border border-[#D6336C]/20 bg-[#FFF5F7] px-3 py-2 md:mb-8 md:px-4 md:py-3">
      <summary className="cursor-pointer list-none text-[13px] font-bold text-[#1a1a1a] md:text-[14px] [&::-webkit-details-marker]:hidden">
        의료정보 작성·검수 및 공식 출처
      </summary>
      <div className="mt-2 space-y-1 break-keep text-[12px] leading-relaxed text-[#444] md:text-[13px]">
        <div>정보 제공: 연세365산부인과의원</div>
        <div>의료 검수: 이진우 대표원장 · 산부인과 전문의</div>
        {published ? <div>최초 작성일: {published}</div> : null}
        {modified ? <div>최종 검수일: {modified}</div> : null}
        <div>공식 출처: {sources}</div>
        <div className="pt-1 text-[#888]">이 내용은 일반적인 의료정보이며 개인의 진단과 치료를 대신하지 않습니다.</div>
      </div>
    </details>
  )
}

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
              사당역 4번 출구 도보 3분, 연세365산부인과의원에서 전문의가 직접 집도합니다.<br />
              검사 결과, 금식 상태, 건강 상태와 진료 일정에 따라 당일 진행 여부가 결정됩니다.
 · <ViewCounter slug="abortion-hospital" />
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>📞 02-585-3650</a>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[['사당역', '도보 3분'], ['당일', '검사 후 확인'], ['전문의', '직접집도'], ['비밀', '의료법 보호']].map(([v, l]) => (
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
              산부인과 전문의의 직접 집도 여부, 수술 전 초음파 검사 실시 여부, 1인 회복실 운영, 개인정보와 진료정보 보호를 먼저 확인해야 합니다. 비용이 낮더라도 이 기준을 충족하지 못하는 경우 위험이 발생할 수 있습니다. 진료 가능 주수와 수술 방법도 사전에 확인하는 것이 중요합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              예약은 전화(02-585-3650) 또는 카카오톡 채널로 가능합니다. 검사 결과, 금식 상태, 건강 상태와 진료 일정에 따라 당일 진행 여부가 결정됩니다. 수술 전 초음파 검사를 통해 주수와 수술 방법을 확인한 뒤 안내합니다. 연세365산부인과의원은 사당역 4번 출구 도보 3분 거리에 위치하며, 연중무휴로 진료합니다.
            </p>
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px 20px', marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd, marginBottom: '10px' }}>핵심 확인 기준 | 최종 수정일 2026.06</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {[['전문의 집도', '산부인과 전문의 직접 집도'], ['초음파 검사', '수술 전 반드시 실시'], ['진료정보 보호', '1인 상담실·1인 회복실'], ['위치', '사당역 4번 출구 도보 3분']].map(([k, v]) => (
                  <div key={k} style={{ background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '10px 14px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: C.p, marginBottom: '3px' }}>{k}</div>
                    <div style={{ fontSize: '12px', color: C.ts }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 병원을 선택할 때 확인해야 할 기준은 안전성입니다. 낙태 비용이 저렴하다는 이유만으로 병원을 선택하면 안전하지 않은 환경에서 시술을 받을 위험이 있습니다. 임신중절수술은 산부인과 전문의가 직접 집도하는 의료기관에서 진행하는 것이 중요하며, 수술 전 건강 상태와 마취 관련 주의사항을 확인하고 수술 후 회복 상태를 관찰하는 체계가 있는지를 함께 확인하시기 바랍니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              사당역에 위치한 산부인과인 연세365산부인과의원은 지하철 2호선·4호선 환승역에서 접근할 수 있습니다. 사당역 4번 출구 도보 3분 거리에 위치합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              병원 선택 시 산부인과 전문의 직접 집도 여부, 수술 전 초음파·상담, 1인 회복실 운영, 개인정보와 진료정보 보호, 낙태 비용 가격 안내 방식을 확인하시기 바랍니다. 연세365산부인과의원에서는 초음파 검사, 전문의 상담, 회복 관리 항목을 기준으로 안내합니다.
            </p>

            {/* 병원 특징 6개 카드 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginBottom: '20px' }}>
              {[
                { icon: '👨‍⚕️', title: '전문의 직접 집도', desc: '산부인과 전문의가 직접 진료하고 수술을 진행합니다.' },
                { icon: '😴', title: '수면마취 안내', desc: '수술 전 건강 상태와 마취 관련 주의사항을 확인하고, 수술 후 회복 상태를 관찰합니다.' },
                { icon: '🔒', title: '1인 회복실', desc: '독립된 1인 회복실에서 안정을 취한 후 귀가합니다. 개인정보와 진료정보 보호를 위해 1인 동선을 운영합니다.' },
                { icon: '📅', title: '당일 진행 안내', desc: '검사 결과, 금식 상태, 건강 상태와 진료 일정에 따라 당일 진행 여부가 결정됩니다.' },
                { icon: '💰', title: '투명한 낙태 비용', desc: '낙태 비용 가격을 사전에 안내합니다. 상담 시 안내된 임신중절수술 금액과 포함 항목을 확인하실 수 있습니다.' },
                { icon: '🌙', title: '연중무휴 운영', desc: '평일 월~금 10:00~17:30, 토요일 09:00~16:30, 일요일·공휴일 10:00~14:00에 진료합니다.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: '#fff' }}>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>{title}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.8 }}>{desc}</div>
                </div>
              ))}
            </div>
            <InfoBox>연세365산부인과의원은 산부인과 전문의가 직접 진료하고 수술을 진행합니다. 의료법과 개인정보 보호 기준에 따라 진료정보를 보호합니다.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 2 */}
          <section>
            <SectionTag>02 위치 및 교통 안내</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>사당역 임신중절수술 병원 — 오시는 길</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              연세365산부인과의원은 서울특별시 관악구 과천대로 939, 3층에 위치합니다. 사당역 4번 출구 도보 3분 거리이며, 2호선·4호선 환승역에서 접근할 수 있습니다.
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
                    ['지하철', '사당역 4번 출구 도보 3분'],
                    ['진료시간', '평일 월~금 10:00~17:30 / 토 09:00~16:30 / 일·공휴일 10:00~14:00'],
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
              연세365산부인과의원은 사당역에 위치한 산부인과로, 산부인과 전문의가 직접 진료하고 수술을 진행합니다. 임신 주수와 검사 결과를 확인한 뒤 수술 방법을 안내합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              상담은 1인 상담실에서 진행하며, 의료법과 개인정보 보호 기준에 따라 진료정보를 보호합니다. 수술 전 건강 상태와 마취 관련 주의사항을 확인하고, 수술 후 회복 상태를 관찰합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              진료시간은 평일 월~금 10:00~17:30, 토요일 09:00~16:30, 일요일·공휴일 10:00~14:00입니다.
            </p>

            {/* 선택 기준 비교 표 */}
            <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden', marginBottom: '20px' }}>
              <div style={{ background: '#F8E8EF', padding: '14px 20px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '8px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C.pd }}>확인 항목</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C.pd, textAlign: 'center' }}>연세365</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C.tg, textAlign: 'center' }}>일반 확인</div>
              </div>
              {[
                ['산부인과 전문의 직접 집도', '직접 진료·수술', '확인 필요'],
                ['수술 전 검사·마취 주의사항 확인', '검사·상담 후 진행', '확인 필요'],
                ['1인 회복실', '운영', '확인 필요'],
                ['낙태 비용 가격 안내', '사전 안내', '상담 후 안내'],
                ['진료시간', '월~금 10:00~17:30 등', '확인 필요'],
                ['당일 진행', '검사·일정 후 결정', '확인 필요'],
                ['개인정보와 진료정보 보호', '의료법 기준 보호', '확인 필요'],
                ['포함 비용 안내', '상담 시 안내', '발생 가능'],
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
              연세365산부인과의원 임신중절수술 예약은 전화, 카카오톡, 방문 상담 세 가지 방법으로 가능합니다. 예약 시 원하는 날짜와 시간을 말씀해 주시면 가능한 일정을 안내드립니다. 검사 결과, 금식 상태, 건강 상태와 진료 일정에 따라 당일 진행 여부가 결정됩니다. 상담과 예약 과정에서 의료법과 개인정보 보호 기준에 따라 진료정보를 보호합니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '20px' }}>
              {[
                { n: '1', method: '전화 예약', icon: '📞', detail: '02-585-3650으로 전화하시면 상담 후 예약이 가능합니다. 평일 월~금 10:00~17:30, 토요일 09:00~16:30, 일요일·공휴일 10:00~14:00 운영합니다.', color: C.p },
                { n: '2', method: '카카오톡 예약', icon: '💬', detail: '카카오톡 채널로 상담과 예약을 문의하실 수 있습니다. 개인정보와 진료정보 보호를 위해 필요한 정보만 확인합니다.', color: '#FEE500' },
                { n: '3', method: '방문 상담', icon: '🏥', detail: '직접 내원하여 상담할 수 있습니다. 당일 진행 여부는 검사 결과와 진료 일정에 따라 결정됩니다. 사당역 4번 출구 도보 3분 거리입니다.', color: C.pp },
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
                  '수술 6시간 전부터 금식 (물 포함)',
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
              병원 선택 시에는 위치, 상담 환경, 검사 과정, 회복 안내처럼 확인 가능한 정보를 중심으로 살펴보시기 바랍니다. 아래는 방문 과정에서 확인되는 사실 중심 안내입니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }}>
              {[
                { name: '위치·접근', content: '사당역 4번 출구 도보 3분 거리에 위치합니다. 2호선·4호선 환승역에서 접근할 수 있으며, 수면마취 후에는 대중교통 또는 보호자 동반 귀가를 안내합니다.' },
                { name: '상담·검사', content: '1인 상담실에서 상담이 진행되며, 수술 전 초음파 검사와 필요한 검사를 통해 임신 주수와 상태를 확인합니다. 검사 결과와 건강 상태를 바탕으로 수술 방법을 안내합니다.' },
                { name: '회복 안내', content: '수술 후 1인 회복실에서 안정을 취한 뒤 귀가합니다. 회복 중 주의사항과 이상 증상 시 연락 방법을 안내하며, 의료법과 개인정보 보호 기준에 따라 진료정보를 보호합니다.' },
              ].map(({ name, content }) => (
                <div key={name} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '18px', background: '#fff' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ width: '32px', height: '32px', background: C.pb, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>👤</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm }}>{name}</div>
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
              진료 가능 주수, 수술 방법, 당일 수술 진행 가능 여부는 검사 결과, 금식 상태, 건강 상태와 진료 일정에 따라 달라질 수 있습니다. 사전에 전화 상담으로 예상 주수를 알려주시면 더 정확한 안내가 가능합니다. 진료시간은 평일 월~금 10:00~17:30, 토요일 09:00~16:30, 일요일·공휴일 10:00~14:00입니다.
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
                { icon: '📍', title: '위치·교통', desc: '서울특별시 관악구 과천대로 939, 3층. 사당역 4번 출구 도보 3분. 2호선·4호선 환승역에서 접근할 수 있습니다.' },
                { icon: '📅', title: '예약·당일 수술', desc: '전화(02-585-3650)·카카오톡·방문 상담으로 예약. 검사 결과, 금식 상태, 건강 상태와 진료 일정에 따라 당일 진행 여부가 결정됩니다.' },
                { icon: '🔒', title: '개인정보 보호', desc: '의료법과 개인정보 보호 기준에 따라 진료정보를 보호합니다. 1인 동선 운영.' },
                { icon: '🏥', title: '사후관리', desc: '수술 후 회복 상태를 관찰하고 주의사항을 안내합니다. 이상 증상 발생 시 진료시간 내 연락할 수 있습니다.' },
                { icon: '💰', title: '비용 확인', desc: '전화·카카오톡으로 예상 비용 범위 사전 문의 가능. 정확한 비용은 초음파 검사 후 확정.' },
                { icon: '🔇', title: '개인정보와 진료정보 보호', desc: '1인 상담실·1인 회복실 운영. 독립 동선으로 다른 환자와 접촉을 최소화합니다.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '18px', background: '#fff' }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>{title}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
            <InfoBox>연세365산부인과의원은 사당역 4번 출구 도보 3분 거리에 있습니다. 2호선·4호선 환승역에서 접근할 수 있습니다. 수면마취 후에는 대중교통을 이용하거나 보호자와 함께 귀가해야 합니다.</InfoBox>
            <div style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '10px' }}>관련 내용 더 보기</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Link href="/abortion/cost" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 주수별 비용 보기</Link>
                <Link href="/abortion/info" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 준비사항 안내</Link>
                <Link href="/abortion/recovery" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 후 관리 방법</Link>
                <Link href="/abortion/faq" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 전체 {FAQ_COUNT}개 FAQ 보기</Link>
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
              전체 {FAQ_COUNT}개 FAQ 보기 →
            </Link>
          </section>

          <MedicalSourceDetails
            published="2026년 4월 1일"
            modified="2026년 5월 22일"
            sources="연세365산부인과의원 운영 안내"
          />

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
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.7)', marginBottom: '22px' }}>임신중절수술 병원 · 산부인과 전문의 직접 집도 · 당일 진행은 검사·일정 후 확인</div>
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
            산부인과 전문의 직접 집도. 당일 진행은 검사·일정 후 확인. 의료법·개인정보 보호.
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
            산부인과 전문의 직접 집도, 수술 전 초음파 검사, 1인 회복실, 개인정보와 진료정보 보호를 먼저 확인하세요. 예약은 전화(02-585-3650)나 카카오톡으로 가능하며, 사당역 4번 출구 도보 3분 거리입니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {[['전문의 집도', '산부인과 전문의'], ['초음파 검사', '수술 전 실시'], ['1인 회복실', '진료정보 보호'], ['사당역 도보 3분', '대중교통 접근']].map(([k, v]) => (
              <div key={k} style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '8px 10px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: C.p, marginBottom: '2px' }}>{k}</div>
                <div style={{ fontSize: '10px', color: C.ts }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <MobileAccordion title="병원 선택 기준" icon="🏥">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            임신중절수술 병원 선택 시 낙태 비용만 보지 마세요. 산부인과 전문의 직접 집도, 수술 전 초음파·상담, 1인 회복실, 개인정보와 진료정보 보호를 확인하시기 바랍니다. 연세365산부인과의원은 사당역에 위치한 산부인과입니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {['전문의 직접 집도', '검사·마취 주의사항 확인', '1인 회복실', '개인정보와 진료정보 보호', '투명한 비용 안내', '연중무휴 운영'].map(t => (
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
              ['진료시간', '평일 월~금 10:00~17:30 / 토 09:00~16:30 / 일·공휴일 10:00~14:00'],
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
            전화(02-585-3650), 카카오톡 채널, 방문 상담 세 가지 방법으로 예약 가능합니다. 검사 결과, 금식 상태, 건강 상태와 진료 일정에 따라 당일 진행 여부가 결정됩니다.
          </p>
          <div style={{ background: C.pb, borderRadius: '10px', padding: '12px 14px', border: `0.5px solid ${C.pbd}` }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: C.p, marginBottom: '8px' }}>예약 전 체크리스트</div>
            {['수술 6시간 전 금식 (물 포함)', '신분증 반드시 지참', '편한 복장으로 내원', '수면마취 후 자가 운전 불가'].map(t => (
              <div key={t} style={{ fontSize: '11px', color: C.ts, padding: '4px 0', borderBottom: `0.5px solid ${C.pbd}` }}>• {t}</div>
            ))}
          </div>
        </MobileAccordion>

        <MobileAccordion title="방문 안내" icon="📋">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            사당역 4번 출구 도보 3분. 1인 상담실에서 상담·검사를 진행하고, 1인 회복실에서 안정을 취한 뒤 귀가합니다. 의료법과 개인정보 보호 기준에 따라 진료정보를 보호합니다.
          </p>
          <InfoBox type="green">전문의 직접 집도 · 검사·마취 주의사항 확인 · 1인 회복실 · 연중무휴 운영</InfoBox>
        </MobileAccordion>

        <div style={{ padding: '16px 16px 0' }}>
          <div style={{ fontSize: '14px', fontWeight: 900, color: C.tm, marginBottom: '14px' }}>병원 선택 자주 묻는 질문</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
            {FEATURED_FAQS.map(({ q, a }) => (
              <FeaturedFAQItem key={q} question={q} answer={a} />
            ))}
          </div>
          <Link href="/abortion/faq" style={{ display: 'block', textAlign: 'center', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p, marginBottom: '16px' }}>
            전체 {FAQ_COUNT}개 FAQ 보기 →
          </Link>
          <MedicalSourceDetails
            published="2026년 4월 1일"
            modified="2026년 5월 22일"
            sources="연세365산부인과의원 운영 안내"
          />
        </div>

        <div style={{ padding: '16px', background: C.pb, borderTop: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: C.tm, marginBottom: '10px' }}>관련 페이지</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '10px' }}>
            {RELATED.slice(0, 4).map(({ href, label }) => (
              <Link key={href} href={href} style={{ display: 'block', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '10px 12px', textDecoration: 'none', fontSize: '11px', fontWeight: 700, color: C.p, lineHeight: 1.4 }}>→ {label}</Link>
            ))}
          </div>
          <Link href="/abortion/faq" style={{ display: 'block', textAlign: 'center', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '11px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p }}>
            전체 {FAQ_COUNT}개 FAQ 보기 →
          </Link>
        </div>
      </div>
    </>
  )
}