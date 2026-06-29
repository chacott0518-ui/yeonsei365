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

const PRICES = [
  { w: '8주 미만', p: '45', bar: 56, method: '흡입술', time: '당일 1~2시간', color: C.p },
  { w: '8주', p: '60', bar: 75, method: '흡입/소파', time: '당일 2~3시간', color: '#C02860' },
  { w: '9주', p: '70', bar: 87, method: '소파술', time: '당일 2~3시간', color: '#A01E4E' },
  { w: '10주', p: '80', bar: 100, method: '소파술', time: '당일 3시간', color: '#7A1438' },
]

const RELATED = [
  { href: '/abortion', label: '임신중절수술이란' },
  { href: '/abortion/method', label: '수술 방법 종류' },
  { href: '/abortion/surgery', label: '수술 절차 안내' },
  { href: '/abortion/recovery', label: '수술 후 관리' },
  { href: '/abortion/faq', label: '전체 217개 FAQ' },
  { href: '/abortion/hospital', label: '병원 안내' },
]

const FEATURED_FAQS = [
  {
    q: '임신중절수술 비용은 임신 주수에 따라 어떻게 달라지나요?',
    a: '연세365산부인과의원의 임신중절수술 비용은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 주수가 높아질수록 수술 방법이 복잡해지고 소요 시간이 길어지므로 비용도 높아집니다. 정확한 주수는 초음파 검사로 확인하며, 11주 이상은 별도 상담이 필요합니다.',
  },
  {
    q: '안내된 주수별 비용에 포함된 항목은 무엇인가요?',
    a: '안내된 주수별 비용은 수술비 기준이며, 초음파 검사·처방약·마취비 등의 포함 여부는 진료 상담 시 확인하시기 바랍니다. 검사나 추가 처치가 필요한 경우 최종 비용은 진료 후 달라질 수 있습니다. 정확한 비용과 포함 항목은 예약 상담 시 사전에 안내받으시기 바랍니다.',
  },
  {
    q: '카드 또는 현금 모두 결제가 가능한가요?',
    a: '카드와 현금 모두 동일한 금액으로 결제 가능하며, 현금영수증 발급도 가능합니다. 당일 수술 진행 여부는 초음파 검사 결과, 금식 상태, 예약 상황에 따라 결정되므로 방문 전 사전 문의를 권장합니다.',
  },
  {
    q: '임신중절수술에 건강보험이나 실손보험이 적용되나요?',
    a: '임신중절수술은 건강보험 비급여 항목으로 건강보험 및 실손보험 적용이 대부분 불가합니다. 모자보건법상 특수 사유(강간, 근친 임신, 유전적 질환, 모체 건강 위협)에 해당하는 경우 일부 급여 적용이 가능할 수 있으므로 가입 보험사에 직접 문의하시기 바랍니다.',
  },
  {
    q: '방문 당일에 정확한 비용을 알 수 있나요?',
    a: '네, 가능합니다. 초음파로 확인된 정확한 주수에 따라 수술 방법과 비용이 결정됩니다. 예를 들어 방문 시 7주로 생각했지만 실제로 8주 이상으로 확인되면 해당 주수에 맞는 비용이 적용됩니다. 비용 확인을 위해 초음파 검사를 먼저 진행합니다.',
  },
  {
    q: '11주 이상이면 비용이 어떻게 되나요?',
    a: '11주 이상은 수술 난이도와 방법이 달라지므로 별도 상담이 필요합니다. 연세365산부인과의원에서 진료 상담을 통해 수술 가능 여부와 비용을 확인하시기 바랍니다. 주수가 높을수록 의료진 판단에 따라 결정되며, 방문 전 전화 문의를 권장합니다.',
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

export default function CostClient() {
  return (
    <>
      {/* PC 영역 */}
      <div className="hidden lg:block">
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-cost.webp)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          minHeight: '420px', padding: '52px 80px', display: 'flex', gap: '48px', alignItems: 'center',
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {['임신중절수술 비용', '주수별 금액', '수술 비용 안내', '비급여 항목'].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ color: '#fff', fontSize: '38px', fontWeight: 900, lineHeight: 1.25, letterSpacing: '-.03em', marginBottom: '16px' }}>
              임신중절수술 주수별 비용은 어떻게 달라질까요?<br />
              <span style={{ fontSize: '24px', fontWeight: 700, opacity: .88 }}>주수별 금액 안내 | 연세365산부인과의원</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              임신중절수술 비용은 임신 주수에 따라 달라집니다.<br />
              연세365산부인과의원은 주수별 비용을 기준에 따라 안내합니다.<br />
              정확한 비용은 초음파 검사 후 상담을 통해 확인 가능합니다.  <ViewCounter slug="abortion-cost" />
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>📞 02-585-3650</a>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ background: 'rgba(255,255,255,.12)', border: '0.5px solid rgba(255,255,255,.25)', borderRadius: '16px', padding: '20px 28px', textAlign: 'center' }}>
              <div style={{ color: 'rgba(255,255,255,.75)', fontSize: '11px', marginBottom: '4px' }}>8주 미만 기준</div>
              <div style={{ color: '#FFD700', fontSize: '60px', fontWeight: 900, lineHeight: 1 }}>45</div>
              <div style={{ color: 'rgba(255,255,255,.9)', fontSize: '13px', marginTop: '4px' }}>만원 (상담 후 확정)</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,.12)', border: '0.5px solid rgba(255,255,255,.2)', borderRadius: '12px', padding: '12px 20px', textAlign: 'center' }}>
              <div style={{ color: '#FFD700', fontSize: '13px', fontWeight: 700 }}>카드·현금 동일가 · 상담 후 비용 확정</div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: C.tg, padding: '20px 0 32px' }}>
            <Link href="/" style={{ color: C.tg, textDecoration: 'none' }}>홈</Link><span>›</span>
            <Link href="/abortion" style={{ color: C.tg, textDecoration: 'none' }}>임신중절클리닉</Link><span>›</span>
            <span style={{ color: C.p, fontWeight: 700 }}>주수별 비용</span>
          </div>

          <section>
            <SectionTag>01 먼저 확인할 내용</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신중절수술 비용은 임신 주수에 따라 어떻게 달라지나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 비용은 임신 주수에 따라 달라집니다. 연세365산부인과의원의 공식 비용은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 주수가 높아질수록 수술 방법이 복잡해지고 시간이 길어지므로 비용이 증가합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              정확한 임신 주수는 내원 후 초음파 검사로 확인합니다. 마지막 생리일로 계산한 주수와 초음파 검사 결과가 다를 수 있으며, 초음파 결과를 기준으로 비용을 안내합니다. 개인 상태에 따라 추가 처치가 필요한 경우 최종 비용은 달라질 수 있으므로, 초음파 검사 후 정확한 비용을 확인하시기 바랍니다.
            </p>
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px 20px', marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd, marginBottom: '10px' }}>핵심: 주수별 비용 기준 | 최종 수정일 2026.06</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {[['8주 미만', '45만원'], ['8주', '60만원'], ['9주', '70만원'], ['10주', '80만원']].map(([w, p]) => (
                  <div key={w} style={{ fontSize: '13px', color: C.pd, display: 'flex', justifyContent: 'space-between', padding: '4px 8px', background: 'rgba(255,255,255,0.7)', borderRadius: '6px' }}>
                    <span style={{ fontWeight: 600 }}>{w}</span><span style={{ fontWeight: 700 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />


          <section>
            <SectionTag>01 임신중절수술 비용 주수별 안내</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신중절수술 비용은 임신 주수에 따라 어떻게 달라지나요?</h2>
            <div className="speakable-summary">
              <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
                임신중절수술 비용은 임신 주수와 수술 방법에 따라 다릅니다. 연세365산부인과의원의 주수별 기준 비용은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 수술 전 초음파 검사로 정확한 주수를 확인한 후 적합한 수술 방법과 비용을 안내합니다.
              </p>
              <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
                안내된 주수별 비용은 수술비 기준이며, 초음파·처방약·마취 등 포함 여부는 진료 상담 시 확인하시기 바랍니다. 검사 결과에 따라 최종 비용은 달라질 수 있습니다. 11주 이상은 별도 상담 필요합니다.
              </p>
            </div>

            <div style={{ background: C.amberBg, border: `0.5px solid ${C.amber}`, borderRadius: '12px', padding: '16px 20px', marginBottom: '20px', fontSize: '13px', color: C.amberDark, lineHeight: 1.85 }}>
              <strong>기준:</strong> 8주 미만 45만원 | 8주 60만원 | 9주 70만원 | 10주 80만원 | 카드·현금 동일가 | 2026.06
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px', marginBottom: '20px' }}>
              {PRICES.map(({ w, p, bar, method, time, color }) => (
                <div key={w} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden', background: '#fff' }}>
                  <div style={{ background: color, height: '5px' }} />
                  <div style={{ padding: '20px 16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', color: C.tg, marginBottom: '8px', fontWeight: 600 }}>{w}</div>
                    <div style={{ fontSize: '42px', fontWeight: 900, color, lineHeight: 1 }}>{p}</div>
                    <div style={{ fontSize: '13px', color: C.ts, marginTop: '4px' }}>만원</div>
                    <div style={{ marginTop: '12px', height: '4px', background: C.pbd, borderRadius: '2px' }}>
                      <div style={{ height: '4px', width: `${bar}%`, background: color, borderRadius: '2px' }} />
                    </div>
                    <div style={{ fontSize: '10px', color, marginTop: '6px', fontWeight: 700 }}>{method}</div>
                    <div style={{ fontSize: '10px', color: C.tg, marginTop: '3px' }}>{time}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '500px' }}>
                <thead>
                  <tr style={{ background: '#F8E8EF' }}>
                    {['임신 주수', '수술 방법', '금액 (만원)', '수면마취', '소요 시간', '당일'].map(h => (
                      <th key={h} style={{ padding: '12px 14px', color: C.pd, fontWeight: 700, textAlign: 'left', borderBottom: `0.5px solid ${C.pbd}` }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['8주 미만', '흡입술', '45만원', '진행', '1~2시간', '검사 후 확인'],
                    ['8주', '흡입/소파술', '60만원', '진행', '2~3시간', '검사 후 확인'],
                    ['9주', '소파술', '70만원', '진행', '2~3시간', '검사 후 확인'],
                    ['10주', '소파술', '80만원', '진행', '3시간', '검사 후 확인'],
                  ].map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? C.pb : '#fff', borderBottom: `0.5px solid ${C.pbd}` }}>
                      <td style={{ padding: '11px 14px', fontWeight: 700, color: C.p }}>{row[0]}</td>
                      <td style={{ padding: '11px 14px', color: C.ts }}>{row[1]}</td>
                      <td style={{ padding: '11px 14px', fontWeight: 900, color: C.p, fontSize: '15px' }}>{row[2]}</td>
                      <td style={{ padding: '11px 14px', color: C.ts }}>{row[3]}</td>
                      <td style={{ padding: '11px 14px', color: C.ts }}>{row[4]}</td>
                      <td style={{ padding: '11px 14px', color: C.green, fontWeight: 700 }}>{row[5]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <InfoBox type="amber">안내된 주수별 비용은 수술비 기준이며, 검사나 추가 처치가 필요한 경우 최종 비용은 진료 후 달라질 수 있습니다. 11주 이상은 별도 상담 필요.</InfoBox>
          </section>

          <Divider />

          <section>
            <SectionTag>02 비용 포함 항목 확인</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>비용에 무엇이 포함되어 있나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              정확한 포함 항목은 진료 상담 시 안내받으시기 바랍니다. 초음파 검사, 처방약, 수액, 추가 처치 등의 포함 여부는 개인 상태와 수술 방법에 따라 달라질 수 있습니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '16px' }}>
              {[
                 { icon: '💳', title: '결제 방법', desc: '카드·현금 동일가. 현금영수증 발급 가능.' },
                 { icon: '🔬', title: '초음파 검사', desc: '수술 전 주수 확인을 위한 초음파 검사 실시.' },
                 { icon: '📋', title: '포함 항목', desc: '수술비 기준 안내. 세부 항목은 상담 시 확인.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '18px', background: '#fff', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>{icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.p, marginBottom: '6px' }}>{title}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
            <InfoBox type="amber">정확한 비용과 포함 항목은 초음파 검사와 상담 후 안내합니다. 예약 전 전화 또는 카카오톡으로 문의하시기 바랍니다.</InfoBox>
          </section>

          <Divider />

          <Divider />

          <section>
            <SectionTag>초음파로 임신 주수를 확인한 뒤 비용을 안내하는 이유</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>초음파로 임신 주수를 먼저 확인한 뒤 비용을 안내하는 이유는 무엇인가요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신 주수는 마지막 생리일만으로 정확히 계산하기 어렵습니다. 생리 주기가 불규칙하거나 착상 시기가 다르면 실제 주수가 예상과 다를 수 있습니다. 초음파로 태낭 크기와 위치를 직접 확인해야 정확한 주수를 알 수 있습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              비용은 초음파로 확인한 주수를 기준으로 결정됩니다. 예를 들어, 생리일로 계산하면 7주로 예상했지만 초음파에서 8주 이상으로 확인되면 비용이 달라질 수 있습니다. 이 때문에 전화 상담 시에는 예상 주수를 기준으로 대략적인 비용 범위를 안내하고, 정확한 비용은 내원 후 초음파 검사 결과로 확정합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              또한 초음파 검사에서 자궁외 임신, 자궁 기형, 불완전 착상이 확인되면 일반적인 시술과 다른 처치가 필요해져 비용이 달라질 수 있습니다. 이처럼 초음파 검사는 안전한 수술을 위한 필수 과정이자, 정확한 비용을 안내하기 위한 근거입니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: C.pb }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '12px' }}>초음파 검사로 확인하는 것</div>
                {['정확한 임신 주수', '태낭 위치 (자궁 내 착상 여부)', '태낭 크기와 상태', '자궁외 임신 여부', '자궁 상태 (근종·기형 등)'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '6px', padding: '6px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px', color: C.pd }}>
                    <span>✓</span>{t}
                  </div>
                ))}
              </div>
              <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: '#fff' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '12px' }}>비용에 영향을 주는 요소</div>
                {['초음파 확인 주수', '수술 방법 (흡입술·소파술)', '자궁 상태 이상 여부', '추가 처치 필요 여부', '개인 건강 조건'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '6px', padding: '6px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px', color: C.ts }}>
                    <span style={{ color: C.amber }}>!</span>{t}
                  </div>
                ))}
              </div>
            </div>
            <InfoBox type="amber">정확한 비용과 포함 항목은 초음파 검사, 개인 상태와 추가 처치 필요 여부를 확인한 뒤 안내합니다.</InfoBox>
          </section>

          <Divider />

          <section>
            <SectionTag>상담 전에 비용과 포함 항목을 확인하는 방법</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>상담 전에 비용과 포함 항목을 어떻게 확인할 수 있나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              내원 전 전화나 카카오톡으로 예상 주수와 준비사항을 문의하면 대략적인 비용 범위를 먼저 확인할 수 있습니다. 다만 정확한 주수와 최종 비용은 초음파 검사 결과에 따라 결정되므로, 상담 시 안내받은 금액은 예상 범위로 이해하시기 바랍니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              연세365산부인과의원의 공식 비용에는 수술비, 수면마취비, 영양제, 부가세가 포함되어 있습니다. 비용에 포함된 항목과 포함되지 않은 항목이 무엇인지 상담 시 직접 확인하시는 것을 권장합니다. 예상하지 못한 추가 비용이 발생하지 않도록 사전에 충분히 질문해 주시기 바랍니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              비용 확인 외에도 상담 전에 마지막 생리일, 현재 복용 중인 약물, 과거 수술 이력 등을 미리 정리해 두시면 상담이 더 빠르고 정확하게 진행됩니다. 모든 상담 내용은 비밀이 보장됩니다.
            </p>
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px 24px', marginBottom: '16px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '14px' }}>📋 상담 전 준비 체크리스트</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 20px' }}>
                {[
                  '마지막 생리 시작일 확인',
                  '예상 임신 주수 계산',
                  '복용 중인 약물·영양제 목록',
                  '과거 자궁 수술 이력',
                  '알레르기 이력 (약물·마취제)',
                  '귀가 방법 사전 계획',
                ].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: C.ts, alignItems: 'flex-start' }}>
                    <span style={{ color: C.p, fontWeight: 700, flexShrink: 0 }}>✓</span>{t}
                  </div>
                ))}
              </div>
            </div>
            <InfoBox>비용 문의는 전화(02-585-3650) 또는 카카오톡으로 가능합니다. 정확한 주수와 최종 비용은 내원 후 초음파 검사 결과로 안내드립니다.</InfoBox>
          </section>

          <Divider />


          <section style={{ marginBottom: '44px' }}>
            <SectionTag>자주 묻는 질문</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>
              임신중절수술 비용에 관해 자주 묻는 질문
            </h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, marginBottom: '20px', letterSpacing: '-.01em' }}>
              주수별 비용, 포함 항목, 보험 적용, 결제 방법에 대한 내용을 정리했습니다.
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
              비용 정보는 어떤 기준으로 작성되었나요?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: C.ts, lineHeight: 1.85 }}>
              <div><strong style={{ color: C.tm }}>정보 제공:</strong> 연세365산부인과의원</div>
              <div><strong style={{ color: C.tm }}>최종 수정일:</strong> 2026년 6월 29일</div>
              <div><strong style={{ color: C.tm }}>공식 출처:</strong> 연세365산부인과의원 운영 안내</div>
              <div style={{ marginTop: '8px', fontSize: '12px', color: C.tg }}>안내된 비용은 기준 가격이며, 검사 결과와 추가 처치에 따라 최종 비용이 달라질 수 있습니다. 정확한 비용은 진료 상담 후 확인하시기 바랍니다.</div>
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
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '6px' }}>서울 서초구 강남대로 939 3층 · 지하철 4호선 이수역</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.7)', marginBottom: '22px' }}>임신중절수술 비용 안내 · 카드·현금 동일가 · 상담 문의 가능</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '14px', border: '0.5px solid rgba(255,255,255,.4)', padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 영역 */}
      <div className="lg:hidden">
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-cost.webp)`,
          backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px 20px',
        }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {['주수별 비용', '8주 미만 45만원', '상담 후 확인'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 10px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ color: '#fff', fontSize: '22px', fontWeight: 900, lineHeight: 1.2, marginBottom: '10px', letterSpacing: '-.02em' }}>
            임신중절수술 주수별 비용은<br />어떻게 달라질까요?
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '14px' }}>
            {[['8주 미만', '45만원'], ['8주', '60만원'], ['9주', '70만원'], ['10주', '80만원']].map(([v, l]) => (
              <div key={v} style={{ background: 'rgba(255,255,255,.12)', borderRadius: '8px', padding: '8px', textAlign: 'center' }}>
                <div style={{ color: '#FFD700', fontSize: '13px', fontWeight: 900 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '10px', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>


        <div style={{ padding: '18px 16px', background: '#fff', borderBottom: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '13px', fontWeight: 900, color: C.tm, marginBottom: '8px' }}>임신중절수술 비용은 임신 주수에 따라 어떻게 달라지나요?</div>
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 정확한 주수와 비용은 초음파 검사 후 확인합니다. 개인 상태에 따라 최종 비용이 달라질 수 있습니다.
          </p>
          <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px 14px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: C.pd, marginBottom: '6px' }}>핵심 | 최종 수정일 2026.06</div>
            {[['8주 미만', '45만원'], ['8주', '60만원'], ['9주', '70만원'], ['10주', '80만원']].map(([w, p]) => (
              <div key={w} style={{ fontSize: '11px', color: C.pd, padding: '3px 0', borderBottom: `0.5px solid ${C.pbd}`, display: 'flex', justifyContent: 'space-between' }}>
                <span>{w}</span><span style={{ fontWeight: 700 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        <MobileAccordion title="주수별 비용 안내" icon="💰">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            임신중절수술 비용은 임신 주수에 따라 결정됩니다. 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원이 기준입니다. 정확한 주수는 초음파 검사로 확인합니다.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {PRICES.map(({ w, p, method, color }) => (
              <div key={w} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', background: '#fff' }}>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: C.tm }}>{w}</span>
                  <span style={{ fontSize: '11px', color: C.tg, marginLeft: '8px' }}>{method}</span>
                </div>
                <span style={{ fontSize: '16px', fontWeight: 900, color }}>{p}만원</span>
              </div>
            ))}
          </div>
          <InfoBox type="amber">11주 이상은 별도 상담 필요. 정확한 비용은 초음파 검사 후 확인합니다.</InfoBox>
        </MobileAccordion>

        <MobileAccordion title="비용 포함 항목 안내" icon="📋">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
          안내된 비용은 수술비 기준이며, 초음파 검사·처방약·추가 처치 등의 포함 여부는 진료 상담 시 확인하시기 바랍니다. 카드·현금 동일가, 현금영수증 발급 가능합니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[['결제 방법', '카드·현금 동일'], ['현금영수증', '발급 가능'], ['초음파 검사', '수술 전 필수'], ['포함 항목', '상담 시 확인']].map(([t, s]) => (
              <div key={t} style={{ background: C.pb, borderRadius: '8px', padding: '10px', border: `0.5px solid ${C.pbd}`, textAlign: 'center' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: C.tm, marginBottom: '3px' }}>{t}</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.p }}>{s}</div>
              </div>
            ))}
          </div>
        </MobileAccordion>

        <MobileAccordion title="보험 적용 여부" icon="🏥">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            임신중절수술은 건강보험 비급여 항목으로 건강보험 및 실손보험 적용이 대부분 불가합니다. 모자보건법상 특수 사유(강간, 근친 임신, 유전적 질환, 모체 건강 위협)에 해당하는 경우 일부 급여 적용이 가능할 수 있으므로 가입 보험사에 직접 문의하시기 바랍니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
            {[['건강보험', '적용 불가', C.amber], ['실손보험', '대부분 불가', C.amber], ['특수 사유', '일부 가능', C.green]].map(([t, s, c]) => (
              <div key={t} style={{ background: C.pb, borderRadius: '8px', padding: '10px', textAlign: 'center', border: `0.5px solid ${C.pbd}` }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: C.tm, marginBottom: '3px' }}>{t}</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: c as string }}>{s}</div>
              </div>
            ))}
          </div>
        </MobileAccordion>

        <MobileAccordion title="초음파로 주수 확인 후 비용 안내 이유" icon="🔍">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            마지막 생리일로 계산한 주수와 초음파 검사 결과가 다를 수 있어 내원 후 초음파로 확인합니다. 자궁외 임신이나 이상 상태가 확인되면 추가 처치가 필요해져 비용이 달라질 수 있습니다. 전화 상담 시 예상 비용을, 내원 후 초음파 결과로 정확한 비용을 안내드립니다.
          </p>
          <InfoBox type="amber">정확한 비용과 포함 항목은 초음파 검사, 개인 상태 확인 후 안내합니다.</InfoBox>
        </MobileAccordion>

        <MobileAccordion title="상담 전 비용·포함 항목 확인 방법" icon="💰">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            전화(02-585-3650) 또는 카카오톡으로 예상 주수를 알려주시면 대략적인 비용 범위를 먼저 확인할 수 있습니다. 비용에는 수술비, 수면마취비, 영양제, 부가세가 포함됩니다. 정확한 최종 비용은 내원 후 초음파 결과로 확정됩니다.
          </p>
          {[['포함 항목', '수술비·마취비·영양제·부가세'], ['확인 방법', '전화·카카오톡 사전 문의'], ['정확한 비용', '초음파 검사 후 확정']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '12px' }}>
              <span style={{ fontWeight: 700, color: C.p }}>{k}</span>
              <span style={{ color: C.ts, fontSize: '11px' }}>{v}</span>
            </div>
          ))}
        </MobileAccordion>

                <div style={{ padding: '16px 16px 0' }}>
          <div style={{ fontSize: '14px', fontWeight: 900, color: C.tm, marginBottom: '14px' }}>비용 관련 자주 묻는 질문</div>
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
            <div style={{ marginTop: '6px', fontSize: '11px', color: C.tg }}>안내된 비용은 기준 가격이며 변경될 수 있습니다.</div>
          </div>
        </div>

        <div style={{ padding: '16px', background: C.pb, borderTop: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: C.tm, marginBottom: '10px' }}>관련 페이지</div>
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
