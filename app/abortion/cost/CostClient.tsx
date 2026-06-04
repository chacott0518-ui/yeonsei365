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
  { href: '/abortion/faq', label: 'FAQ 70가지' },
  { href: '/abortion/hospital', label: '병원 안내' },
]

export default function CostClient() {
  return (
    <>
      {/* ── PC ── */}
      <div className="hidden lg:block">
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-cost.webp)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          minHeight: '420px', padding: '52px 80px', display: 'flex', gap: '48px', alignItems: 'center',
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {['임신중절수술 금액', '낙태 비용 가격', '주수별 투명 공개', '추가 비용 없음'].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ color: '#fff', fontSize: '38px', fontWeight: 900, lineHeight: 1.25, letterSpacing: '-.03em', marginBottom: '16px' }}>
              임신중절수술 금액·비용·가격<br />
              <span style={{ fontSize: '24px', fontWeight: 700, opacity: .88 }}>낙태 비용 가격 주수별 투명 공개</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              임신중절수술 비용은 임신 주수와 수술 방법에 따라 달라집니다.<br />
              연세365산부인과는 모든 낙태 비용 가격을 사전에 투명하게 공개하며<br />
              수술비·마취비·영양제·부가세 포함 최종 금액을 안내합니다. · <ViewCounter slug="abortion-cost" />
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
              <div style={{ color: 'rgba(255,255,255,.9)', fontSize: '13px', marginTop: '4px' }}>만원 (영양제 포함)</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,.12)', border: '0.5px solid rgba(255,255,255,.2)', borderRadius: '12px', padding: '12px 20px', textAlign: 'center' }}>
              <div style={{ color: '#FFD700', fontSize: '13px', fontWeight: 700 }}>카드·현금 동일가 · 추가 비용 없음</div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: C.tg, padding: '20px 0 32px' }}>
            <Link href="/" style={{ color: C.tg, textDecoration: 'none' }}>홈</Link><span>›</span>
            <Link href="/abortion" style={{ color: C.tg, textDecoration: 'none' }}>임신중절클리닉</Link><span>›</span>
            <span style={{ color: C.p, fontWeight: 700 }}>비용·금액</span>
          </div>

          {/* 섹션 1 */}
          <section>
            <SectionTag>01 임신중절수술 금액 주수별 공개</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>낙태 비용 가격 — 주수별 완전 투명 공개</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 금액과 낙태 비용 가격은 임신 주수와 수술 방법에 따라 결정됩니다. 연세365산부인과는 임신중절수술 비용을 사전에 투명하게 공개하며, 상담 시 안내된 금액 외 추가 비용은 절대 발생하지 않습니다. 수술비·마취비·영양제·부가세가 모두 포함된 최종 금액이므로 안심하고 내원하셔도 됩니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              많은 분들이 임신중절수술 가격을 미리 알고 싶어 하십니다. 낙태 비용이 병원마다 다른 이유는 임신 주수, 수술 방법, 마취 방식, 사후 관리 포함 여부 등이 다르기 때문입니다. 연세365산부인과는 이러한 혼란을 없애기 위해 모든 중절수술 가격을 홈페이지에 명확히 공개합니다. 상담 후 갑자기 비용이 달라지는 일은 절대 없습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              임신중절비용을 결정하는 가장 중요한 요소는 임신 주수입니다. 8주 미만의 임신초기낙태는 45만원으로 흡입술을 통해 짧은 시간에 완료됩니다. 임신 주수가 늘어날수록 수술 난이도가 높아지고 마취 시간도 길어지기 때문에 낙태 비용도 단계적으로 증가합니다. 따라서 결정하셨다면 가능한 한 빠른 시일 내에 내원하시는 것이 비용 면에서도 안전 면에서도 유리합니다.
            </p>

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
                    {['임신 주수', '수술 방법', '금액 (최종)', '포함 항목', '소요 시간', '귀가'].map(h => (
                      <th key={h} style={{ padding: '12px 14px', color: C.pd, fontWeight: 700, textAlign: 'left', borderBottom: `0.5px solid ${C.pbd}` }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['8주 미만', '흡입술', '45만원', '수술·마취·영양제·부가세', '당일 1~2시간', '당일 귀가'],
                    ['8주', '흡입/소파술', '60만원', '수술·마취·영양제·부가세', '당일 2~3시간', '당일 귀가'],
                    ['9주', '소파술', '70만원', '수술·마취·영양제·부가세', '당일 2~3시간', '당일 귀가'],
                    ['10주', '소파술', '80만원', '수술·마취·영양제·부가세', '당일 3시간', '당일 귀가'],
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
            <InfoBox type="amber">⚠ 임신중절수술 금액은 초음파로 정확한 주수 확인 후 결정됩니다. 11주 이상은 별도 상담이 필요하며 비용이 상이할 수 있습니다. 정확한 낙태 비용은 내원 상담 후 안내드립니다.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 2 */}
          <section>
            <SectionTag>02 임신중절수술 비용 결정 요소</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>낙태 비용이 달라지는 이유</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 금액은 단순히 병원마다 임의로 다르게 책정되는 것이 아니라, 명확한 의학적 근거에 따라 결정됩니다. 임신 주수가 높아질수록 자궁의 크기가 커지고 시술 복잡도, 마취 시간, 의료 장비 투입량이 증가하기 때문에 낙태 비용 가격에 차이가 발생하는 것은 자연스러운 의료적 현상입니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              8주 미만 임신초기중절수술은 흡입술로 10~15분 내에 완료되므로 낙태 비용이 45만원으로 가장 낮습니다. 반면 10주에 가까울수록 소파술이 필요하고 수술 시간이 길어지며 마취 유지 시간도 늘어나기 때문에 임신중절수술 비용이 80만원까지 올라갑니다. 이처럼 임신 주수는 낙태 비용 가격을 결정하는 가장 핵심적인 요소입니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              연세365산부인과의 임신중절수술 비용에는 수술비, 수면마취비, 회복 영양제, 1인 회복실 이용료, 부가세가 모두 포함되어 있습니다. 일부 병원에서는 마취비, 영양제, 입원비 등을 별도로 청구하는 경우가 있어 실제 낙태 비용이 처음 안내받은 것보다 훨씬 높아지는 경우가 있습니다. 연세365산부인과는 이러한 불투명한 비용 청구를 일체 하지 않으며, 처음 안내드린 임신중절수술 금액이 최종 금액입니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '20px' }}>
              {[
                { icon: '📅', title: '임신 주수', desc: '낙태 비용 가격을 결정하는 가장 중요한 요소입니다. 8주 미만 45만원에서 10주 80만원까지 단계적으로 증가합니다. 주수가 짧을수록 수술이 간단하고 임신중절수술 금액도 낮습니다.' },
                { icon: '🔬', title: '수술 방법', desc: '8주 이내는 흡입술, 8주 이상은 소파술을 적용합니다. 흡입술은 부드러운 관으로 임신 조직을 배출해 시간이 짧고 낙태 비용도 낮습니다. 소파술은 더 복잡한 처치가 필요해 중절수술 가격이 높아집니다.' },
                { icon: '💉', title: '마취 방법', desc: '연세365산부인과는 모든 수술에 수면마취를 적용합니다. 수면마취는 마취 전문 인력과 모니터링 장비가 필요하여 임신중절비용에 포함됩니다. 국소마취보다 안전하고 통증이 없어 환자 만족도가 높습니다.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: '#fff' }}>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{icon}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>{title}</div>
                  <div style={{ fontSize: '13px', color: C.ts, lineHeight: 1.85 }}>{desc}</div>
                </div>
              ))}
            </div>

            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '24px', marginBottom: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: C.pd, marginBottom: '16px', textAlign: 'center' }}>주수별 임신중절수술 비용 비교 그래프</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {PRICES.map(({ w, p, bar, method, color }) => (
                  <div key={w} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '70px', fontSize: '12px', fontWeight: 700, color, flexShrink: 0 }}>{w}</div>
                    <div style={{ flex: 1, height: '30px', background: '#fff', borderRadius: '4px', overflow: 'hidden', border: `0.5px solid ${C.pbd}` }}>
                      <div style={{ height: '100%', width: `${bar}%`, background: color, borderRadius: '4px', display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
                        <span style={{ color: '#fff', fontSize: '12px', fontWeight: 900 }}>{p}만원</span>
                      </div>
                    </div>
                    <div style={{ width: '60px', fontSize: '11px', color: C.tg, flexShrink: 0 }}>{method}</div>
                  </div>
                ))}
              </div>
            </div>
            <InfoBox>임신 주수가 짧을수록 낙태 비용이 낮고 수술 안전성이 높습니다. 임신 8주 이내 내원을 강력히 권장합니다.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 3 */}
          <section>
            <SectionTag>03 임신중절수술 비용 포함 항목</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>낙태 비용 가격에 포함된 모든 것</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              연세365산부인과의 임신중절수술 금액은 처음 안내된 금액이 최종 금액입니다. 일부 병원에서는 낙태 비용을 낮게 안내한 후 수술 당일 마취비, 회복비, 영양제 비용을 추가로 청구하는 경우가 있어 환자들이 당혹스러운 경험을 하기도 합니다. 연세365산부인과는 이러한 불합리한 비용 청구를 절대 하지 않습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              임신중절수술 비용에 포함된 항목은 수술비(흡입술 또는 소파술), 수면마취비, 회복 영양제, 1인 회복실 이용료, 부가세(VAT), 기본 사후 처방약입니다. 결제 방식은 카드·현금 동일가이며 무이자 할부도 가능합니다. 상담 시 안내받은 낙태 비용 가격 그대로 결제하시면 됩니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div style={{ border: `0.5px solid ${C.greenBorder}`, borderRadius: '14px', padding: '20px', background: C.greenBg }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.green, marginBottom: '14px' }}>✅ 임신중절수술 비용에 포함된 항목</div>
                {[
                  ['수술비', '흡입술 또는 소파술 시술 비용'],
                  ['수면마취비', '마취 전문의 협진 및 마취제 비용'],
                  ['회복 영양제', '수술 후 빠른 회복을 위한 영양 수액'],
                  ['1인 회복실', '독립된 프라이빗 회복실 이용료'],
                  ['부가세 (VAT)', '세금 포함 최종 금액'],
                  ['기본 처방약', '수술 후 필요한 항생제·진통제'],
                ].map(([k, v]) => (
                  <div key={k} style={{ padding: '8px 0', borderBottom: `0.5px solid ${C.greenBorder}`, fontSize: '12px' }}>
                    <div style={{ fontWeight: 700, color: C.green, marginBottom: '2px' }}>✓ {k}</div>
                    <div style={{ color: C.ts, paddingLeft: '14px' }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: '#fff' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.p, marginBottom: '14px' }}>💳 결제 안내</div>
                {[
                  ['카드 결제', '모든 카드 가능 (체크카드 포함)'],
                  ['현금 결제', '카드와 동일가 적용'],
                  ['할부 결제', '무이자 할부 가능'],
                  ['현금영수증', '요청 시 즉시 발행'],
                  ['추가 비용', '절대 없음 (100% 보장)'],
                  ['영수증', '전액 발행 가능'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px' }}>
                    <span style={{ color: C.tg, fontWeight: 600 }}>{k}</span>
                    <span style={{ color: C.tm, fontWeight: 700 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <InfoBox>초음파 검사비·혈액검사비는 임신중절수술 비용에 포함되지 않으며 별도 발생할 수 있습니다. 상담 시 사전에 모든 비용을 투명하게 안내드립니다.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 4 */}
          <section>
            <SectionTag>04 낙태 비용 보험 적용 여부</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신중절수술 보험 적용이 되나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술은 건강보험 비급여 항목으로 분류되어 건강보험 적용이 되지 않습니다. 이는 임신중절수술이 질병의 치료 목적이 아닌 선택적 의료 시술로 분류되기 때문입니다. 따라서 낙태 비용 가격 전액은 본인 부담으로 지불하셔야 합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              실손의료보험도 대부분 임신·출산·피임 관련 항목을 보상 제외로 규정하고 있어 임신중절수술 비용에 대한 실손 적용이 어렵습니다. 다만 가입하신 보험 상품의 세부 약관에 따라 다를 수 있으므로, 정확한 보험 적용 여부는 가입하신 보험사에 직접 문의하시는 것이 가장 정확합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              모자보건법 제14조에서 정한 특수 사유(강간, 근친 임신, 유전적 질환, 모체 건강 위협 등)에 해당하는 경우에는 일부 급여 적용이 가능할 수 있습니다. 이 경우 필요한 서류 발급을 성실히 협조해 드리니 내원 시 말씀해 주시기 바랍니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
              {[
                { title: '건강보험', status: '적용 불가', desc: '비급여 항목으로 건강보험 적용이 되지 않습니다. 낙태 비용 전액은 본인 부담입니다.', color: '#E29000', bg: C.amberBg },
                { title: '실손보험', status: '대부분 불가', desc: '임신·출산 관련 보상 제외 항목이 대부분입니다. 가입 보험사에 직접 문의하세요.', color: '#E29000', bg: C.amberBg },
                { title: '특수 사유', status: '일부 가능', desc: '모자보건법상 사유 해당 시 일부 급여 가능합니다. 상담 시 서류 협조 드립니다.', color: C.green, bg: C.greenBg },
              ].map(({ title, status, desc, color, bg }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '20px', background: bg }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '6px' }}>{title}</div>
                  <div style={{ fontSize: '18px', fontWeight: 900, color, marginBottom: '10px' }}>{status}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.8 }}>{desc}</div>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* 섹션 5 */}
          <section>
            <SectionTag>05 병원 선택 시 주의사항</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>좋은 임신중절수술 병원 선택 기준</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 병원을 선택할 때 낙태 비용만을 기준으로 삼는 것은 위험합니다. 지나치게 낮은 낙태 비용 가격을 제시하는 병원 중에는 비전문의가 시술하거나, 마취 전문의 없이 수면마취를 진행하거나, 비위생적인 환경에서 시술하는 경우가 있습니다. 임신중절수술은 안전이 최우선이므로 반드시 산부인과 전문의가 직접 집도하는 병원을 선택해야 합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              연세365산부인과는 산부인과 전문의가 모든 임신중절수술을 직접 집도하며, 수면마취는 마취 전문의와 협진 하에 진행합니다. 1인 회복실에서 충분한 안정을 취한 후 귀가하실 수 있으며, 수술 후에도 연락 가능한 의료진이 대기하고 있어 응급 상황에 신속히 대응합니다. 낙태 비용 가격과 함께 안전성, 전문성, 비밀보장 여부를 꼼꼼히 확인하시기 바랍니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px' }}>
              {[
                { icon: '👨‍⚕️', label: '산부인과 전문의 직접 집도' },
                { icon: '💉', label: '마취 전문의 협진 수면마취' },
                { icon: '🔒', label: '1인 회복실 비밀보장' },
                { icon: '📋', label: '투명한 낙태 비용 공개' },
              ].map(({ icon, label }) => (
                <div key={label} style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd, lineHeight: 1.5 }}>{label}</div>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '12px' }}>관련 페이지 더 보기</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }}>
              {RELATED.map(({ href, label }) => (
                <Link key={href} href={href} style={{ display: 'block', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px 16px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p }}>→ {label}</Link>
              ))}
            </div>
          </div>

          <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: '36px', textAlign: 'center' }}>
            <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>연세365산부인과</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '6px' }}>서울 관악구 과천대로 939 3층 · 사당역 4번출구</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.7)', marginBottom: '22px' }}>임신중절수술 금액 투명 공개 · 추가 비용 없음 · 카드·현금 동일가</div>
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-cost.webp)`,
          backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px 20px',
        }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {['임신중절수술 금액', '낙태 비용 가격', '투명 공개'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 10px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-.02em' }}>
            임신중절수술 금액·비용<br /><span style={{ fontSize: '17px', fontWeight: 700, opacity: .88 }}>낙태 비용 가격 주수별 투명 공개</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '12px', lineHeight: 1.8, marginBottom: '16px' }}>
            수술비·마취비·영양제·부가세 모두 포함. 카드·현금 동일가. 추가 비용 없음.
          </p>
          <div style={{ background: 'rgba(255,255,255,.1)', border: '0.5px solid rgba(255,255,255,.2)', borderRadius: '14px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '11px' }}>8주 미만 기준</div>
              <div style={{ color: '#FFD700', fontSize: '44px', fontWeight: 900, lineHeight: 1 }}>45</div>
              <div style={{ color: 'rgba(255,255,255,.85)', fontSize: '12px' }}>만원 (영양제 포함)</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,.12)', borderRadius: '10px', padding: '12px 16px', textAlign: 'center' }}>
              <div style={{ color: '#FFD700', fontSize: '12px', fontWeight: 700, lineHeight: 1.7 }}>카드·현금<br />동일가<br />추가비용 없음</div>
            </div>
          </div>
        </div>

        <MobileAccordion title="주수별 임신중절수술 금액" icon="💰">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '12px' }}>
            임신중절수술 금액은 임신 주수에 따라 결정됩니다. 8주 미만 임신초기낙태는 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 모든 낙태 비용 가격은 수술비·마취비·영양제·부가세를 포함한 최종 금액이며 추가 비용은 절대 발생하지 않습니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
            {PRICES.map(({ w, p, color }) => (
              <div key={w} style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: C.tg, marginBottom: '4px' }}>{w}</div>
                <div style={{ fontSize: '28px', fontWeight: 900, color, lineHeight: 1 }}>{p}</div>
                <div style={{ fontSize: '11px', color: C.ts, marginTop: '2px' }}>만원</div>
              </div>
            ))}
          </div>
          <InfoBox type="amber">카드·현금 동일가. 11주 이상은 별도 상담 필요. 주수가 짧을수록 낙태 비용도 낮고 안전합니다.</InfoBox>
        </MobileAccordion>

        <MobileAccordion title="낙태 비용이 달라지는 이유" icon="📊">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            임신중절수술 금액은 임신 주수, 수술 방법(흡입술·소파술), 마취 방식에 따라 결정됩니다. 주수가 높아질수록 수술 복잡도가 증가하고 마취 시간이 길어져 낙태 비용 가격도 높아집니다. 연세365산부인과는 이러한 의학적 근거에 따라 투명하게 임신중절수술 비용을 공개합니다.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { label: '임신 주수', desc: '주수가 높을수록 임신중절수술 금액 증가' },
              { label: '수술 방법', desc: '흡입술보다 소파술이 중절수술 가격 높음' },
              { label: '마취 방법', desc: '수면마취 비용 포함 — 안전을 위해 필수' },
            ].map(({ label, desc }) => (
              <div key={label} style={{ background: C.pb, borderRadius: '8px', padding: '10px 12px', border: `0.5px solid ${C.pbd}` }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.p, marginBottom: '3px' }}>{label}</div>
                <div style={{ fontSize: '11px', color: C.ts }}>{desc}</div>
              </div>
            ))}
          </div>
        </MobileAccordion>

        <MobileAccordion title="비용 포함 항목" icon="✅">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            연세365산부인과 임신중절수술 비용에는 수술비, 수면마취비, 영양제, 1인 회복실, 부가세, 처방약이 모두 포함됩니다. 추가로 청구되는 비용은 절대 없으며, 처음 안내받은 낙태 비용 가격이 최종 금액입니다.
          </p>
          {['수술비 (흡입술 또는 소파술)', '수면마취비 (마취 전문의 협진)', '회복 영양제 수액', '1인 회복실 이용료', '부가세 (VAT) 포함', '기본 처방약 (항생제·진통제)'].map(t => (
            <div key={t} style={{ display: 'flex', gap: '8px', padding: '7px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '12px', color: C.ts }}>
              <span style={{ color: C.green, fontWeight: 700 }}>✓</span>{t}
            </div>
          ))}
        </MobileAccordion>

        <MobileAccordion title="보험 적용 여부" icon="🏥">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            임신중절수술은 건강보험 비급여 항목으로 건강보험 및 실손보험 적용이 대부분 불가합니다. 모자보건법상 특수 사유(강간, 근친 임신, 유전적 질환, 모체 건강 위협)에 해당하는 경우 일부 급여 적용이 가능할 수 있으므로 가입 보험사에 직접 문의하세요.
          </p>
          <InfoBox type="amber">보험 서류 발급 요청 시 성실히 협조해 드립니다. 현금영수증 발급도 가능합니다.</InfoBox>
        </MobileAccordion>

        <MobileAccordion title="좋은 낙태 병원 선택 기준" icon="🏥">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            지나치게 낮은 낙태 비용만 보고 병원을 선택하면 안전하지 않을 수 있습니다. 반드시 산부인과 전문의가 직접 집도하는지, 수면마취 전문의가 상주하는지, 1인 회복실을 운영하는지 확인하세요. 임신중절수술 금액과 함께 안전성과 비밀보장을 꼭 확인해야 합니다.
          </p>
        </MobileAccordion>

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