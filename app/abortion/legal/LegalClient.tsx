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
  blue: '#1a4fa8', blueBg: '#e8f0fe',
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return <span style={{ display: 'inline-block', background: C.pb, color: C.pd, fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', letterSpacing: '.05em', marginBottom: '10px' }}>{children}</span>
}
function Divider() { return <hr style={{ border: 'none', borderTop: `1px solid ${C.pbd}`, margin: '44px 0' }} /> }
function InfoBox({ children, type = 'pink' }: { children: React.ReactNode; type?: 'pink' | 'amber' | 'green' | 'blue' }) {
  const s = { pink: { bg: C.pb, border: C.p, text: '#7A2040' }, amber: { bg: C.amberBg, border: C.amber, text: C.amberDark }, green: { bg: C.greenBg, border: C.green, text: C.green }, blue: { bg: C.blueBg, border: C.blue, text: C.blue } }[type]
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
  { href: '/abortion/info', label: '보호자·보험 안내' },
  { href: '/abortion/faq', label: `전체 ${FAQ_COUNT}개 FAQ` },
  { href: '/abortion/hospital', label: '병원 안내' },
]

const FEATURED_FAQS = [
  {
    q: '임신중절수술의 법률 기준은 어떻게 확인해야 하나요?',
    a: '2021년 1월 낙태죄 폐지 이후 임신 14주 이내는 본인 동의만으로 의료기관에서 수술이 가능합니다. 14주~24주는 모자보건법 제14조에서 정한 사유(유전적 질환, 전염성 질환, 강간, 근친, 모체 건강 위협)에 해당하는 경우에 한해 가능합니다. 법적 기준의 최신 적용 여부는 진료 상담을 통해 확인하시기 바랍니다.',
  },
  {
    q: '임신 14주 이내면 누구나 수술이 가능한가요?',
    a: '임신 14주 이내이더라도 본인의 건강 상태, 초음파로 확인된 정확한 주수, 금식 여부 등에 따라 당일 수술 가능 여부가 달라질 수 있습니다. 수술 전 초음파 검사와 의료진 상담이 반드시 필요하며, 최종 판단은 진료 후 결정됩니다.',
  },
  {
    q: '14~24주 사이에도 수술이 가능한 경우가 있나요?',
    a: '모자보건법 제14조에서 정한 사유(강간·준강간에 의한 임신, 유전적 질환, 전염성 질환, 근친 임신, 모체 건강 위협)에 해당하는 경우 14~24주에도 수술이 가능할 수 있습니다. 해당 사유를 입증하는 서류가 필요할 수 있으며, 전문의와의 심층 상담이 필수입니다. 연세365산부인과의원에서 해당 조건 충족 여부를 상담받을 수 있습니다.',
  },
  {
    q: '임신중절수술은 어느 병원에서나 받을 수 있나요?',
    a: '현행법상 임신중절수술은 의사 면허를 가진 의료인이 의료기관에서 시행해야 합니다. 불법 시술이나 무면허 시술은 여전히 처벌 대상입니다. 합법적인 수술을 위해서는 산부인과 전문의가 있는 의료기관에서 진료를 받으시기 바랍니다.',
  },
  {
    q: '수술 동의서는 누가 작성하나요? 보호자 동의가 필요한가요?',
    a: '성인의 경우 본인 동의서만으로 수술 진행이 가능합니다. 보호자 동의가 법적으로 필요한지 여부는 개인 상황과 법 해석에 따라 달라질 수 있으므로, 구체적인 조건은 예약 상담 시 안내받으시기 바랍니다.',
  },
  {
    q: '합법 수술 후 법적으로 문제가 생길 수 있나요?',
    a: '의료기관에서 현행법 기준에 따라 적법하게 진행된 수술은 법적 문제가 없습니다. 연세365산부인과의원은 관련 법규를 준수하여 임신중절수술을 시행하며, 의무기록 보호는 의료법에 따라 보장됩니다. 구체적인 법적 사항에 대한 판단은 법률 전문가 상담을 병행하시기 바랍니다.',
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

export default function LegalClient() {
  return (
    <>
      <div className="hidden lg:block">
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-legal.webp)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          minHeight: '420px', padding: '52px 80px', display: 'flex', gap: '48px', alignItems: 'center',
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {['낙태 합법화', '낙태죄 폐지', '14주 이내 가능', '모자보건법'].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ color: '#fff', fontSize: '38px', fontWeight: 900, lineHeight: 1.25, letterSpacing: '-.03em', marginBottom: '16px' }}>
              임신중절수술 합법 여부와<br />
              법률 기준은 어떻게 확인할까요?<span style={{ display: 'block', fontSize: '20px', fontWeight: 700, opacity: .88, marginTop: '8px' }}>형법 낙태죄 효력 상실 이후 법률 기준 안내</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              2021년 낙태죄 폐지 이후 달라진 법적 기준을 안내합니다.<br />
              임신중절수술 합법 시기와 요건을 정확히 확인하세요.
 · <ViewCounter slug="abortion-legal" />
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>📞 02-585-3650</a>
            </div>
          </div>
          <div style={{ flexShrink: 0 }}>
            <div style={{ background: 'rgba(255,255,255,.12)', border: '0.5px solid rgba(255,255,255,.25)', borderRadius: '16px', padding: '24px 32px', textAlign: 'center' }}>
              <div style={{ color: 'rgba(255,255,255,.75)', fontSize: '12px', marginBottom: '8px' }}>낙태죄 폐지 시행</div>
              <div style={{ color: '#FFD700', fontSize: '28px', fontWeight: 900, lineHeight: 1 }}>2021.01.01</div>
              <div style={{ color: 'rgba(255,255,255,.8)', fontSize: '12px', marginTop: '8px' }}>형법 제269조·제270조 효력 상실</div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: C.tg, padding: '20px 0 32px' }}>
            <Link href="/" style={{ color: C.tg, textDecoration: 'none' }}>홈</Link><span>›</span>
            <Link href="/abortion" style={{ color: C.tg, textDecoration: 'none' }}>임신중절클리닉</Link><span>›</span>
            <span style={{ color: C.p, fontWeight: 700 }}>합법화 안내</span>
          </div>

          <section>
            <SectionTag>01 먼저 확인할 내용</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신중절수술의 법률 기준은 현재 어떻게 확인해야 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              2021년 1월 1일부터 형법 제269조·제270조의 낙태죄 처벌 조항이 효력을 상실했습니다. 현재 임신중절수술은 모자보건법이 정한 범위 안에서 의료기관에서 합법적으로 시행되고 있습니다. 14주 이내에는 본인 동의만으로 의료기관에서 수술이 가능하며, 14주~24주는 모자보건법 제14조에서 정한 사유에 해당하는 경우에 한해 가능합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              법적 기준의 세부 해석이나 최신 적용 범위는 의료기관 상담을 통해 개인 상황에 맞게 확인하는 것이 가장 정확합니다. 낙태죄 폐지 이후에도 무허가 의료기관이나 비전문의에 의한 시술은 처벌 대상임을 유의해야 합니다. 구체적인 법적 사항은 법률 전문가 상담을 병행하시기 바랍니다.
            </p>
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px 20px', marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd, marginBottom: '10px' }}>핵심 | 최종 수정일 2026.06</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {[['낙태죄 폐지', '2021.01.01 시행'], ['14주 이내', '본인 동의만으로 가능'], ['14~24주', '모자보건법 사유 확인 필요'], ['불법 시술', '여전히 처벌 대상']].map(([k, v]) => (
                  <div key={k} style={{ background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '10px 14px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: C.p, marginBottom: '3px' }}>{k}</div>
                    <div style={{ fontSize: '12px', color: C.ts }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              2019년 4월 헌법재판소가 낙태죄 처벌 조항에 대해 헌법불합치 결정을 내렸습니다. 이에 따라 2021년 1월 1일부터 형법 제269조(자기낙태죄) 및 제270조(의사낙태죄)가 효력을 상실했습니다. 현재 <strong style={{ color: C.p }}>임신중절수술은 모자보건법 범위 내에서 합법적으로 시행되고 있습니다.</strong>
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              낙태 합법화 이후 임신 14주 이내에는 본인 동의만으로 임신중절수술이 가능합니다. 이는 낙태 수술 합법 시기로 가장 안전하고 낙태 비용 가격도 낮은 시기입니다. 14주~24주는 사회·경제적 사유 등 모자보건법상 인정되는 조건에 해당하는 경우 시술이 가능합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              낙태죄 폐지 이후에도 불법 시술(무허가 의료기관 또는 비전문의 시술)은 여전히 처벌 대상입니다. 반드시 산부인과 전문의가 있는 의료기관에서 합법적으로 시술받으시기 바랍니다. 연세365산부인과의원은 모든 관련 법규를 준수하며 합법적으로 임신중절수술을 시행합니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '24px' }}>
              {[
                { period: '14주 이내', status: '자유 시술 가능', color: C.green, bg: C.greenBg, border: C.greenBorder, icon: '✓', desc: '본인 동의서만으로 가능합니다. 가장 안전하고 낙태 비용이 낮은 시기입니다.' },
                { period: '14~24주', status: '조건부 가능', color: C.amber, bg: C.amberBg, border: '#f0c060', icon: '!', desc: '모자보건법 사유 확인 후 전문의 상담이 필수입니다.' },
                { period: '24주 이후', status: '극히 제한', color: '#aaa', bg: '#f8f8f8', border: '#ddd', icon: '×', desc: '모체 생명 위협 등 극히 예외적인 경우에만 해당됩니다.' },
              ].map(({ period, status, color, bg, border, icon, desc }) => (
                <div key={period} style={{ border: `0.5px solid ${border}`, borderRadius: '14px', padding: '20px', background: bg }}>
                  <div style={{ width: '36px', height: '36px', background: color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', fontWeight: 700, marginBottom: '10px' }}>{icon}</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color, marginBottom: '4px' }}>{status}</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: C.tm, marginBottom: '8px' }}>{period}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
            <InfoBox type="blue">⚖ 현행 법적 기준 (2024년 기준) — 임신중절수술은 의료기관에서 전문의가 시행해야 합니다. 불법 시술은 여전히 처벌 대상입니다.</InfoBox>
          </section>

          <Divider />

          <section>
            <SectionTag>02 모자보건법 제14조 인정 사유</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>14~24주 가능한 사유</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              임신 14주 이후에는 모자보건법 제14조에서 정한 사유에 해당하는 경우에만 임신중절수술이 가능합니다. 전문의와의 심층 상담이 필수이며, 해당 사유를 입증하는 서류가 필요할 수 있습니다.
            </p>
            <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden', marginBottom: '16px' }}>
              {[
                ['우생학적·유전학적 질환', '본인 또는 배우자가 유전적 질환을 가진 경우'],
                ['전염성 질환', '전염성 질환을 가진 경우 (성병, 기타 감염병)'],
                ['강간·준강간', '강간 또는 준강간에 의해 임신된 경우'],
                ['근친 임신', '법률상 혼인할 수 없는 혈족 또는 인척 간 임신'],
                ['모체 건강 위협', '임신 지속이 모체의 건강을 심각하게 해치거나 해칠 우려가 있는 경우'],
              ].map(([title, desc], i) => (
                <div key={title} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', background: i % 2 === 0 ? C.pb : '#fff', borderBottom: `0.5px solid ${C.pbd}` }}>
                  <div style={{ padding: '14px 18px', fontWeight: 700, color: C.pd, fontSize: '13px', borderRight: `0.5px solid ${C.pbd}` }}>{title}</div>
                  <div style={{ padding: '14px 18px', color: C.ts, fontSize: '13px', lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
            <InfoBox type="amber">14~24주 해당 사유 시 전문의와 심층 상담이 필수입니다. 모든 상담은 비밀이 보장됩니다.</InfoBox>
          </section>

          <Divider />

          <section>
            <SectionTag>03 합법적 임신중절수술 절차</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>합법적으로 시술받는 방법</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              연세365산부인과의원은 모든 관련 법규를 준수하며 합법적으로 임신중절수술을 시행합니다. 아래 절차를 따라 안전하게 진행됩니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px' }}>
              {[
                { n: '1', title: '신분 확인', desc: '신분증 지참 필수. 본인 확인 후 진행합니다.', color: C.p },
                { n: '2', title: '동의서 작성', desc: '충분한 설명 후 서면 동의를 구합니다.', color: '#C02860' },
                { n: '3', title: '초음파 진단', desc: '정확한 주수 확인 후 방법을 결정합니다.', color: '#A01E4E' },
                { n: '4', title: '합법 시술', desc: '전문의가 안전하게 집도합니다.', color: C.pp },
              ].map(({ n, title, desc, color }) => (
                <div key={n} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '18px', background: '#fff', textAlign: 'center' }}>
                  <div style={{ width: '36px', height: '36px', background: color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', fontWeight: 900, margin: '0 auto 10px' }}>{n}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '6px' }}>{title}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </section>

          <Divider />



          <Divider />

          {/* 신규 섹션: 낙태죄 효력 상실 이후 확인사항 */}
          <section>
            <SectionTag>04 낙태죄 효력 상실 이후 확인할 사항</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>형법상 낙태죄 효력 상실 이후 무엇을 확인해야 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              2021년 1월 1일 형법 제269조·제270조 낙태죄 처벌 조항의 효력이 상실되었습니다. 이로 인해 임신중절수술을 받은 여성과 시술한 의사에 대한 형사 처벌이 더 이상 이루어지지 않습니다. 그러나 이는 별도의 법률 공백이 생긴 상태이며, 모자보건법이 여전히 적용되고 있습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              현재 임신중절수술은 의료인이 의료기관에서 시행해야 합니다. 무허가 의료기관이나 비전문의에 의한 시술은 의료법 위반으로 처벌 대상이 됩니다. 온라인이나 비공식 경로를 통한 약물 구매 및 자가 시술도 법적으로 허용되지 않으므로, 반드시 산부인과 전문의가 있는 의료기관을 통해 시술받아야 합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '16px' }}>
              연세365산부인과의원은 현행 법률 기준과 모자보건법을 준수하여 임신중절수술을 시행합니다. 법적 요건 충족 여부와 수술 가능 여부는 내원 상담을 통해 확인할 수 있으며, 모든 상담은 비밀이 보장됩니다.
            </p>
            <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden', marginBottom: '16px' }}>
              <div style={{ background: '#F8E8EF', padding: '12px 18px', display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd }}>확인 항목</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd }}>내용</div>
              </div>
              {[
                ['낙태죄 처벌 조항', '2021.01.01부로 효력 상실 (헌법불합치 결정)'],
                ['합법 시술 조건', '의사 면허 보유 의료인이 의료기관에서 시행'],
                ['불법 시술', '무허가 기관·비전문의 시술은 여전히 처벌 대상'],
                ['약물 자가 시술', '법적으로 허용되지 않음'],
                ['공식 출처 확인', '보건복지부·헌법재판소 결정문을 참고'],
              ].map(([k, v], i) => (
                <div key={k} style={{ padding: '11px 18px', display: 'grid', gridTemplateColumns: '1fr 2fr', background: i % 2 === 0 ? C.pb : '#fff', borderTop: `0.5px solid ${C.pbd}` }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: C.p }}>{k}</div>
                  <div style={{ fontSize: '13px', color: C.ts }}>{v}</div>
                </div>
              ))}
            </div>
            <InfoBox type="blue">⚖ 이 페이지의 법률 정보는 공식 출처(모자보건법, 헌법재판소 결정, 보건복지부)를 기준으로 작성되었습니다. 개인별 법적 판단은 법률 전문가 상담을 병행하시기 바랍니다.</InfoBox>
          </section>

          <Divider />

          {/* 신규 섹션: 주수와 건강 상태에 따라 상담이 필요한 이유 */}
          <section>
            <SectionTag>05 주수·건강 상태에 따라 상담이 필요한 이유</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신 주수와 건강 상태에 따라 의료기관 상담이 왜 필요한가요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              법적 기준과 실제 수술 가능 여부는 다를 수 있습니다. 14주 이내라도 초음파 검사로 확인된 정확한 주수, 자궁외 임신 여부, 개인 건강 상태에 따라 당일 수술 가능 여부가 달라집니다. 마지막 생리일로 계산한 주수와 초음파 검사 결과가 다를 수 있으므로, 내원 후 검사를 통해 정확한 주수를 확인하는 것이 중요합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              심장 질환, 혈액 질환, 혈압 이상 등 기저 질환이 있는 경우 수술 방법이나 마취 방법이 달라질 수 있습니다. 의료진은 초음파 검사와 기본 건강 검사 결과를 바탕으로 수술 방법을 결정합니다. 이 모든 과정은 환자의 안전을 위한 절차이며, 비밀이 보장됩니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '16px' }}>
              {[
                { icon: '🔬', title: '초음파 주수 확인', desc: '마지막 생리일 기준 주수와 실제 초음파 주수가 다를 수 있어 내원 후 확인이 필요합니다.' },
                { icon: '🏥', title: '수술 가능 여부 판단', desc: '주수, 건강 상태, 자궁외 임신 여부 확인 후 수술 가능 여부를 의료진이 최종 판단합니다.' },
                { icon: '💊', title: '개인 건강 상태 반영', desc: '기저 질환, 복용 약물, 알레르기에 따라 수술 방법과 마취 방법이 달라질 수 있습니다.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '18px', background: '#fff', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>{icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>{title}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
            <InfoBox>정확한 법률 적용 범위와 수술 가능 여부는 초음파 검사 결과와 개인 건강 상태 확인 후 의료진이 안내합니다. 전화 또는 카카오톡으로 먼저 상담하세요.</InfoBox>
            <div style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '10px' }}>관련 내용 더 보기</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Link href="/abortion/method" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신 주수별 수술 방법 선택 기준</Link>
                <Link href="/abortion/cost" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 주수별 비용 확인</Link>
                <Link href="/abortion/info" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 준비사항 안내</Link>
                <Link href="/abortion/faq" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 전체 {FAQ_COUNT}개 FAQ 보기</Link>
              </div>
            </div>
          </section>

          <Divider />

          <section style={{ marginBottom: '44px' }}>
            <SectionTag>자주 묻는 질문</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>
              임신중절수술 법률 기준에 관해 자주 묻는 질문
            </h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, marginBottom: '20px', letterSpacing: '-.01em' }}>
              합법 시기, 동의서, 병원 선택, 법적 절차와 관련하여 많이 묻는 질문을 정리했습니다.
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

          <section style={{ marginBottom: '44px', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '24px 28px' }}>
            <SectionTag>의료정보 안내</SectionTag>
            <h2 style={{ fontSize: '18px', fontWeight: 900, color: C.tm, marginBottom: '14px', letterSpacing: '-.02em' }}>
              법률 정보는 어떤 기준으로 작성되었나요?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: C.ts, lineHeight: 1.85 }}>
              <div><strong style={{ color: C.tm }}>정보 제공:</strong> 연세365산부인과의원</div>
              <div><strong style={{ color: C.tm }}>최종 수정일:</strong> 2026년 6월 29일</div>
              <div><strong style={{ color: C.tm }}>공식 출처:</strong> 모자보건법 제14조, 헌법재판소 헌법불합치 결정(2019헌바240), 보건복지부</div>
              <div style={{ marginTop: '8px', fontSize: '12px', color: C.tg }}>본 정보는 일반적인 법률 안내이며 개인의 법적 판단을 대신하지 않습니다. 구체적인 법적 사항은 법률 전문가와 상담하시기 바랍니다.</div>
            </div>
          </section>

          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '12px' }}>관련 페이지 더 보기</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }}>
              {RELATED.map(({ href, label }) => (
                <Link key={href} href={href} style={{ display: 'block', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px 16px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p }}>→ {label}</Link>
              ))}
            </div>
          </div>

          <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: '36px', textAlign: 'center' }}>
            <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>연세365산부인과의원</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '22px' }}>합법적 임신중절수술 · 전문의 직접 집도 · 비밀보장</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '14px', border: '0.5px solid rgba(255,255,255,.4)', padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-legal.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px 20px' }}>
          <h2 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-.02em' }}>
            임신중절수술 합법 여부와<br />법률 기준 확인 방법<span style={{ display: 'block', fontSize: '15px', fontWeight: 700, opacity: .88, marginTop: '6px' }}>형법 낙태죄 효력 상실 이후 안내</span>
          </h2>
          <div style={{ background: 'rgba(255,255,255,.12)', borderRadius: '10px', padding: '12px 16px', marginTop: '14px' }}>
            <div style={{ color: 'rgba(255,255,255,.75)', fontSize: '11px' }}>낙태죄 폐지 시행일</div>
            <div style={{ color: '#FFD700', fontSize: '22px', fontWeight: 900 }}>2021.01.01 ~</div>
          </div>
        </div>


        <div style={{ padding: '18px 16px', background: '#fff', borderBottom: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '13px', fontWeight: 900, color: C.tm, marginBottom: '8px' }}>임신중절수술의 법률 기준은 현재 어떻게 확인해야 하나요?</div>
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            2021년 1월부터 형법 낙태죄 처벌 조항이 효력을 상실했습니다. 현재 14주 이내는 본인 동의만으로 의료기관에서 수술이 가능합니다. 14~24주는 모자보건법 제14조 사유 해당 시 가능하며, 정확한 주수는 초음파 검사로 확인합니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {[['낙태죄 폐지', '2021.01.01~'], ['14주 이내', '본인 동의 가능'], ['14~24주', '사유 확인 필요'], ['합법 시술', '의료기관에서만']].map(([k, v]) => (
              <div key={k} style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '8px 10px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: C.p, marginBottom: '2px' }}>{k}</div>
                <div style={{ fontSize: '10px', color: C.ts }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <MobileAccordion title="낙태 합법화 현황" icon="⚖️">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            2021년 1월 낙태죄가 폐지되어 임신 14주 이내는 본인 동의만으로 합법적으로 임신중절수술이 가능합니다. 14~24주는 모자보건법상 사유 해당 시 가능하며, 24주 이후는 극히 제한적입니다.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { period: '14주 이내', status: '본인 동의로 가능', color: C.green, desc: '본인 동의만으로 진행 가능한 기간입니다. 주수가 짧을수록 수술이 간단합니다.' },
              { period: '14~24주', status: '조건부 가능', color: C.amber, desc: '모자보건법 사유 해당 시 전문의 상담 필수.' },
              { period: '24주 이후', status: '극히 제한', color: '#aaa', desc: '모체 생명 위협 등 예외적인 경우만 해당.' },
            ].map(({ period, status, color, desc }) => (
              <div key={period} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px 16px', background: '#fff' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: C.tm }}>{period}</span>
                  <span style={{ background: color, color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px' }}>{status}</span>
                </div>
                <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </MobileAccordion>

        <MobileAccordion title="모자보건법 인정 사유" icon="📋">
          {['우생학적·유전학적 질환', '전염성 질환', '강간·준강간', '근친 임신', '모체 건강 위협'].map(t => (
            <div key={t} style={{ display: 'flex', gap: '8px', padding: '8px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px', color: C.ts }}>
              <span style={{ color: C.p, fontWeight: 700 }}>•</span>{t}
            </div>
          ))}
          <InfoBox type="amber">14~24주 해당 사유 시 전문의와 심층 상담이 필수입니다.</InfoBox>
        </MobileAccordion>

        <div style={{ padding: '16px 16px 0' }}>
          <div style={{ fontSize: '14px', fontWeight: 900, color: C.tm, marginBottom: '14px' }}>법률 기준 자주 묻는 질문</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
            {FEATURED_FAQS.map(({ q, a }) => (
              <FeaturedFAQItem key={q} question={q} answer={a} />
            ))}
          </div>
          <Link href="/abortion/faq" style={{ display: 'block', textAlign: 'center', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p, marginBottom: '16px' }}>
            전체 {FAQ_COUNT}개 FAQ 보기 →
          </Link>
          <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px', marginBottom: '16px', fontSize: '12px', color: C.ts, lineHeight: 1.85 }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>의료정보 안내</div>
            <div>정보 제공: 연세365산부인과의원 · 최종 수정일: 2026년 6월 29일</div>
            <div>공식 출처: 모자보건법 제14조, 헌법재판소 결정(2019헌바240)</div>
            <div style={{ marginTop: '6px', fontSize: '11px', color: C.tg }}>본 정보는 일반적인 법률 안내이며 개인의 법적 판단을 대신하지 않습니다.</div>
          </div>
        </div>

        <div style={{ padding: '16px', background: C.pb, borderTop: `0.5px solid ${C.pbd}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {RELATED.slice(0, 4).map(({ href, label }) => (
              <Link key={href} href={href} style={{ display: 'block', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '10px 12px', textDecoration: 'none', fontSize: '11px', fontWeight: 700, color: C.p, lineHeight: 1.4 }}>→ {label}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}