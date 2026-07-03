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
  { href: '/abortion/surgery', label: '수술 절차' },
  { href: '/abortion/faq', label: '전체 217개 FAQ' },
  { href: '/abortion/legal', label: '합법화 안내' },
]

const FEATURED_FAQS = [
  {
    q: '임신중절수술 후에는 어떻게 관리해야 하나요?',
    a: '수술 당일에는 회복실에서 1~2시간 안정을 취한 뒤 귀가합니다. 가벼운 식사는 당일부터 가능하지만 격렬한 운동, 음주, 성관계는 2주 이상 피하셔야 합니다. 수술 후 1주 이내에 사후 검진을 받는 것을 권장합니다.',
  },
  {
    q: '수술 후 출혈은 언제까지 지속되나요?',
    a: '수술 후 소량의 출혈이 수일에서 수 주 정도 지속될 수 있으며, 개인 상태에 따라 차이가 있습니다. 월경 수준을 초과하는 과다출혈이나 혈전 덩어리가 반복적으로 발생하면 즉시 내원하시기 바랍니다. 이상 증상 여부는 의료진이 판단합니다.',
  },
  {
    q: '수술 후 생리는 언제 다시 시작되나요?',
    a: '수술 후 첫 생리는 일반적으로 4~6주 이내에 재개됩니다. 다만 개인의 호르몬 상태, 수술 주수, 건강 상태에 따라 시기가 달라질 수 있습니다. 8주 이상 생리가 없다면 산부인과 진료를 받으시기 바랍니다.',
  },
  {
    q: '수술 후 언제부터 일상생활이 가능한가요?',
    a: '가벼운 일상 활동과 사무직 업무는 수술 다음 날부터 가능한 경우가 많습니다. 격렬한 신체 활동이나 현장 근무는 의료진 안내에 따라 재개 시기를 결정하시기 바랍니다. 개인 회복 속도에 따라 차이가 있으므로 무리하지 않는 것이 중요합니다.',
  },
  {
    q: '수술 후 샤워와 목욕은 언제 가능한가요?',
    a: '샤워는 수술 다음 날부터 가능합니다. 욕조 목욕이나 수영장 이용은 감염 위험으로 인해 2주 이상 피하셔야 합니다. 정확한 가능 시기는 상태에 따라 다를 수 있으므로 사후 검진 시 의료진에게 확인하세요.',
  },
  {
    q: '수술 후 즉시 병원에 연락해야 하는 증상은 무엇인가요?',
    a: '38도 이상 고열, 월경 수준 이상의 과다출혈, 지속되는 심한 복통, 악취 분비물, 어지럼증이나 실신 증세가 나타나면 즉시 의료기관에 연락하거나 내원하세요. 이러한 증상은 감염이나 불완전 수술의 신호일 수 있으며 지체 없는 처치가 필요합니다.',
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

export default function RecoveryClient() {
  return (
    <>
      <div className="hidden lg:block">
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-recovery.webp)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          minHeight: '420px', padding: '52px 80px', display: 'flex', gap: '48px', alignItems: 'center',
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {['수술 후 관리', '회복기간 안내', '주의사항', '생리 재개 시기'].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ color: '#fff', fontSize: '38px', fontWeight: 900, lineHeight: 1.25, letterSpacing: '-.03em', marginBottom: '16px' }}>
              임신중절수술 후
              회복기간과 관리 방법<span style={{ display: 'block', fontSize: '20px', fontWeight: 700, opacity: .88, marginTop: '8px' }}>수술 직후부터 4주까지 단계별 회복 안내</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              빠른 회복을 위한 단계별 관리 가이드를 안내합니다.<br />
              수술 당일부터 4주까지 시기별 주의사항을 확인하세요.
 · <ViewCounter slug="abortion-recovery" />
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>📞 02-585-3650</a>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[['1~2일', '일상복귀'], ['4~6주', '생리재개'], ['2주', '금지사항'], ['1주내', '사후검진']].map(([v, l]) => (
              <div key={v} style={{ background: 'rgba(255,255,255,.12)', border: '0.5px solid rgba(255,255,255,.2)', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                <div style={{ color: '#FFD700', fontSize: '18px', fontWeight: 900 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '10px', marginTop: '3px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: C.tg, padding: '20px 0 32px' }}>
            <Link href="/" style={{ color: C.tg, textDecoration: 'none' }}>홈</Link><span>›</span>
            <Link href="/abortion" style={{ color: C.tg, textDecoration: 'none' }}>임신중절클리닉</Link><span>›</span>
            <span style={{ color: C.p, fontWeight: 700 }}>수술 후 관리</span>
          </div>

          <section>
            <SectionTag>01 먼저 확인할 내용</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신중절수술 후에는 어떻게 관리해야 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              수술 당일 1~2시간 회복실 안정 후 귀가하며, 가벼운 일상 활동은 수술 다음 날부터 가능한 경우가 많습니다. 성관계·격렬한 운동·음주·탕목욕은 최소 2주간 피해야 합니다. 수술 후 1주 이내에 사후 검진을 받는 것을 권장합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              소량의 출혈은 수술 후 며칠에서 수 주간 지속될 수 있으며, 이는 개인 상태에 따라 다릅니다. 첫 생리는 보통 수술 후 4~6주 이내에 재개되는 경우가 많습니다. 38도 이상 고열, 생리량을 초과하는 과다출혈, 심한 복통, 악취 분비물이 발생하면 즉시 의료기관에 연락해야 합니다.
            </p>
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px 20px', marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd, marginBottom: '10px' }}>핵심 | 최종 수정일 2026.06</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {[['일상복귀', '수술 다음 날부터'], ['금지사항', '성관계·운동·음주 2주'], ['생리 재개', '4~6주 이내'], ['사후 검진', '1주 이내 권장']].map(([k, v]) => (
                  <div key={k} style={{ background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '10px 14px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: C.p, marginBottom: '3px' }}>{k}</div>
                    <div style={{ fontSize: '12px', color: C.ts }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 후 회복 기간은 개인차가 있지만 일반적으로 수술 다음 날부터 가벼운 일상생활이 가능합니다. 낙태 수술 후 관리를 잘 하면 빠른 회복이 가능합니다. 연세365산부인과의원은 수술 당일부터 4주까지 단계별 주의사항과 가능한 활동 범위를 상세히 안내합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              임신중절수술 후 생리는 보통 4~6주 안에 재개됩니다. 첫 생리는 평소보다 양이 많거나 통증이 강할 수 있으며, 이는 자궁 내막이 새롭게 형성되는 자연스러운 과정입니다. 8주가 지나도 생리가 없다면 내원하여 검진을 받으시기 바랍니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px', marginBottom: '24px' }}>
              {[
                { period: '수술 당일', title: '안정 및 귀가', color: C.p, items: ['1인 회복실 1~2시간 안정', '수분 섭취 가능', '가벼운 식사 귀가 후', '자가 운전 금지', '처방약 복용 시작'] },
                { period: '1~3일', title: '가벼운 일상', color: '#C02860', items: ['샤워 가능 (욕조 금지)', '가벼운 산책 가능', '사무직 업무 복귀', '출혈·복통 관찰', '무거운 물건 금지'] },
                { period: '1~2주', title: '회복 집중', color: '#A01E4E', items: ['성관계 금지', '격렬한 운동 금지', '음주·흡연 금지', '사우나·탕목욕 금지', '사후 검진 내원'] },
                { period: '4~6주', title: '정상 복귀', color: C.pp, items: ['첫 생리 재개', '운동 재개 가능', '성관계 재개 검토', '피임 상담 권장', '정기 검진 권장'] },
              ].map(({ period, title, color, items }) => (
                <div key={period} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden', background: '#fff' }}>
                  <div style={{ background: color, padding: '12px 16px' }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.8)', marginBottom: '2px' }}>{period}</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{title}</div>
                  </div>
                  <div style={{ padding: '14px 16px' }}>
                    {items.map(item => (
                      <div key={item} style={{ display: 'flex', gap: '6px', padding: '5px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '12px', color: C.ts }}>
                        <span style={{ color, fontWeight: 700, flexShrink: 0 }}>•</span>{item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <InfoBox type="amber">⚠ 38도 이상 고열, 생리량보다 많은 출혈, 심한 복통이 지속되면 즉시 내원하세요.</InfoBox>
          </section>

          <Divider />

          <section>
            <SectionTag>02 수술 후 가능·금지 사항</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>낙태 수술 후 무엇을 해도 되고 안 되나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              임신중절수술 후 빠른 회복을 위해 생활 관리가 중요합니다. 자궁 내막이 회복되는 1~2주 동안 특히 주의가 필요합니다. 처방약은 증상이 없어도 반드시 끝까지 복용해야 감염을 예방할 수 있습니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div style={{ border: `0.5px solid ${C.greenBorder}`, borderRadius: '14px', padding: '20px', background: C.greenBg }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.green, marginBottom: '14px' }}>✅ 가능한 것</div>
                {[
                  ['가벼운 산책', '다음 날부터'],
                  ['일반 식사', '귀가 후 바로'],
                  ['샤워', '다음 날부터'],
                  ['사무직 업무', '2~3일 후'],
                  ['가벼운 스트레칭', '1주일 후'],
                  ['처방약 복용', '지시대로 끝까지'],
                ].map(([act, when]) => (
                  <div key={act} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `0.5px solid ${C.greenBorder}`, fontSize: '13px' }}>
                    <span style={{ color: C.green, fontWeight: 600 }}>{act}</span>
                    <span style={{ color: C.green, fontSize: '11px' }}>{when}</span>
                  </div>
                ))}
              </div>
              <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: C.pb }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.p, marginBottom: '14px' }}>⛔ 삼가야 할 것</div>
                {[
                  ['성관계', '최소 2주~1개월'],
                  ['격렬한 운동', '2주 금지'],
                  ['음주', '회복에 악영향'],
                  ['흡연', '혈류 방해'],
                  ['탕목욕·사우나', '2주 금지'],
                  ['처방약 임의 중단', '절대 금지'],
                ].map(([act, reason]) => (
                  <div key={act} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px' }}>
                    <span style={{ color: C.pd, fontWeight: 600 }}>{act}</span>
                    <span style={{ color: C.tg, fontSize: '11px' }}>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          <section>
            <SectionTag>03 즉시 내원해야 하는 증상</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>이런 증상이 있으면 즉시 오세요</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              대부분 정상적으로 회복되지만, 아래 증상이 발생하면 즉시 내원하여 전문의 진료를 받으셔야 합니다. 연세365산부인과의원은 연중무휴로 진료합니다(월~금 10:00~17:30, 토 09:00~16:30, 일·공휴일 10:00~14:00).
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
              {[
                { icon: '🌡️', title: '38도 이상 고열', desc: '수술 후 감염의 주요 신호입니다. 즉시 내원하세요.' },
                { icon: '🩸', title: '과다 출혈', desc: '생리량보다 훨씬 많은 출혈이 지속되면 즉시 내원하세요.' },
                { icon: '⚡', title: '심한 복통', desc: '약으로 조절되지 않는 극심한 통증이 지속될 때.' },
                { icon: '🤢', title: '심한 구토·발열', desc: '감염이나 합병증의 신호일 수 있습니다.' },
                { icon: '💧', title: '악취 분비물', desc: '자궁 내 감염 가능성. 즉시 확인이 필요합니다.' },
                { icon: '📅', title: '8주 이상 생리 없음', desc: '수술 후 8주가 지나도 생리가 없으면 검진 필요합니다.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '18px', background: '#fff', borderLeft: `3px solid ${C.p}` }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: C.p, marginBottom: '6px' }}>{title}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
          </section>

          <Divider />



          <Divider />

          {/* 신규 섹션: 출혈과 통증 관찰 방법 */}
          <section>
            <SectionTag>04 수술 후 출혈과 통증 관찰 방법</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>수술 후 출혈과 통증을 어떻게 관찰해야 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              수술 후 소량의 출혈은 자궁 내막이 회복되는 과정에서 수일~수 주간 나타날 수 있으며, 이는 일반적인 회복 과정의 일부입니다. 출혈 양이 생리량을 크게 초과하거나 혈전 덩어리가 반복적으로 배출된다면 즉시 의료기관에 연락해야 합니다. 처방받은 지혈제·항생제는 증상 유무와 관계없이 처방 기간 동안 복용해야 감염을 예방할 수 있습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              수술 후 통증은 생리통과 유사한 형태로 나타날 수 있으며, 처방된 진통제로 조절합니다. 진통제로 조절되지 않는 심한 복통이 지속된다면 이상 신호일 수 있습니다. 통증의 정도는 임신 주수, 수술 방법, 개인 통증 역치에 따라 다르게 경험됩니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '16px' }}>
              38도 이상 고열이 발생하면 감염 가능성을 배제하기 위해 즉시 내원해야 합니다. 고열은 수술 후 감염의 주요 신호 중 하나이며, 지체 없이 처치를 받는 것이 중요합니다. 이 페이지의 정보는 일반적인 안내이며, 개인 증상에 대한 의료적 판단을 대신하지 않습니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '16px' }}>
              {[
                { icon: '🩸', title: '출혈 관찰 기준', status: '즉시 내원', desc: '생리량을 초과하는 과다출혈, 혈전 덩어리 반복 배출. 소량 출혈은 수일~수 주간 지속 가능.' },
                { icon: '⚡', title: '통증 관찰 기준', status: '즉시 연락', desc: '진통제로 조절되지 않는 심한 복통 지속. 생리통 유사한 불편감은 회복 중 나타날 수 있음.' },
                { icon: '🌡️', title: '체온 관찰 기준', status: '즉시 내원', desc: '38도 이상 고열이 발생하면 즉시 내원. 발열은 감염의 주요 신호.' },
              ].map(({ icon, title, status, desc }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '18px', background: '#fff', borderLeft: `3px solid ${C.p}` }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '4px' }}>{title}</div>
                  <div style={{ background: C.p, color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '8px', display: 'inline-block', marginBottom: '8px' }}>{status}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
            <InfoBox type="amber">⚠ 38도 이상 고열 · 과다출혈 · 심한 복통 · 악취 분비물이 발생하면 즉시 의료기관에 연락하거나 내원하세요. 이 정보는 진단을 대신하지 않습니다.</InfoBox>
          </section>

          <Divider />

          {/* 신규 섹션: 생리·관계·운동·샤워 재개 확인 */}
          <section>
            <SectionTag>05 생리·관계·운동·샤워 재개 확인사항</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>생리·성관계·운동·샤워를 다시 시작할 때 무엇을 확인해야 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              샤워는 수술 다음 날부터 가능합니다. 욕조 목욕·사우나·수영장은 감염 위험으로 2주 이상 피해야 합니다. 성관계는 자궁 내막 회복을 위해 최소 2주~1개월간 피하는 것이 권장되며, 재개 시기는 수술 방법과 회복 상태에 따라 달라질 수 있습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              가벼운 산책이나 사무직 업무는 수술 다음 날부터 가능한 경우가 많지만, 격렬한 운동과 무거운 물건 드는 작업은 2주간 피해야 합니다. 운동 재개 시기는 개인 회복 상태와 의료진 안내에 따르는 것이 안전합니다. 첫 생리는 수술 후 4~6주 이내에 재개되는 경우가 많으며, 8주 이상 생리가 없다면 내원하여 확인해야 합니다.
            </p>
            <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden', marginBottom: '16px' }}>
              <div style={{ background: '#F8E8EF', padding: '12px 18px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd }}>활동</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd }}>재개 가능 시기</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd }}>확인사항</div>
              </div>
              {[
                ['샤워', '수술 다음 날부터', '욕조 목욕·사우나는 2주 후'],
                ['가벼운 산책', '수술 다음 날부터', '무리하지 않는 범위에서'],
                ['사무직 업무', '2~3일 후', '몸 상태에 따라 조절'],
                ['격렬한 운동', '2주 후 이상', '의료진 안내에 따라 결정'],
                ['성관계', '2주~1개월 후', '회복 상태 확인 후 재개'],
                ['음주', '회복 후', '충분히 회복될 때까지 피하기'],
                ['첫 생리', '4~6주 이내', '8주 이상 없으면 내원 필요'],
              ].map(([act, when, note], i) => (
                <div key={act} style={{ padding: '11px 18px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', background: i % 2 === 0 ? C.pb : '#fff', borderTop: `0.5px solid ${C.pbd}` }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: C.p }}>{act}</div>
                  <div style={{ fontSize: '13px', color: C.green, fontWeight: 600 }}>{when}</div>
                  <div style={{ fontSize: '12px', color: C.ts }}>{note}</div>
                </div>
              ))}
            </div>
            <InfoBox>임신중절수술 후 피임 계획은 사후 검진 시 의료진과 상담하세요. 수술 후에도 배란이 빠르게 재개될 수 있습니다.</InfoBox>
            <div style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '10px' }}>관련 내용 더 보기</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Link href="/abortion/surgery" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 당일 절차와 회복 과정</Link>
                <Link href="/abortion/info" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 준비사항 안내</Link>
                <Link href="/abortion/faq" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 전체 217개 FAQ 보기</Link>
              </div>
            </div>
          </section>

          <Divider />

          <section style={{ marginBottom: '44px' }}>
            <SectionTag>자주 묻는 질문</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>
              임신중절수술 후 관리에 관해 자주 묻는 질문
            </h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, marginBottom: '20px', letterSpacing: '-.01em' }}>
              수술 후 출혈, 생리 재개 시기, 일상 복귀, 샤워, 이상 증상에 대한 내용을 정리했습니다.
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
              회복 정보는 어떤 기준으로 작성되었나요?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: C.ts, lineHeight: 1.85 }}>
              <div><strong style={{ color: C.tm }}>정보 제공:</strong> 연세365산부인과의원</div>
              <div><strong style={{ color: C.tm }}>최종 수정일:</strong> 2026년 6월 29일</div>
              <div><strong style={{ color: C.tm }}>공식 출처:</strong> 대한산부인과학회 임상 지침, 보건복지부</div>
              <div style={{ marginTop: '8px', fontSize: '12px', color: C.tg }}>본 정보는 일반적인 의료 안내이며 개인별 진료를 대신하지 않습니다. 이상 증상 발생 시 반드시 의료기관을 방문하시기 바랍니다.</div>
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
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '22px' }}>사당역 4번 출구 도보 3분 · 사후 검진 가능</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '14px', border: '0.5px solid rgba(255,255,255,.4)', padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-recovery.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px 20px' }}>
          <h2 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-.02em' }}>
            임신중절수술 후<br />회복기간과 관리 방법<span style={{ display: 'block', fontSize: '15px', fontWeight: 700, opacity: .88, marginTop: '6px' }}>수술 직후부터 4주까지 단계별 안내</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '16px' }}>
            {[['1~2일', '일상복귀'], ['4~6주', '생리재개'], ['2주', '금지사항'], ['1주내', '사후검진']].map(([v, l]) => (
              <div key={v} style={{ background: 'rgba(255,255,255,.12)', borderRadius: '8px', padding: '8px', textAlign: 'center' }}>
                <div style={{ color: '#FFD700', fontSize: '16px', fontWeight: 900 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '10px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>


        <div style={{ padding: '18px 16px', background: '#fff', borderBottom: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '13px', fontWeight: 900, color: C.tm, marginBottom: '8px' }}>임신중절수술 후에는 어떻게 관리해야 하나요?</div>
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            수술 다음 날부터 가벼운 일상활동이 가능합니다. 성관계·격렬한 운동·음주·탕목욕은 2주간 피하고, 1주 이내 사후 검진을 받으세요. 38도 이상 고열, 과다출혈, 심한 복통이 발생하면 즉시 내원해야 합니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {[['일상복귀', '다음 날부터'], ['금지사항', '성관계·운동 2주'], ['생리 재개', '4~6주 이내'], ['사후 검진', '1주 이내']].map(([k, v]) => (
              <div key={k} style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '8px 10px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: C.p, marginBottom: '2px' }}>{k}</div>
                <div style={{ fontSize: '10px', color: C.ts }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <MobileAccordion title="단계별 회복 안내" icon="📅">
          {[
            { period: '수술 당일', color: C.p, items: ['회복실 1~2시간 안정', '가벼운 식사 가능', '처방약 복용 시작', '자가 운전 금지'] },
            { period: '1~3일', color: '#C02860', items: ['샤워 가능 (욕조 금지)', '가벼운 산책', '사무직 업무 복귀', '출혈·복통 관찰'] },
            { period: '1~2주', color: '#A01E4E', items: ['성관계 금지', '격렬한 운동 금지', '음주·흡연 금지', '사후 검진 내원'] },
            { period: '4~6주', color: C.pp, items: ['첫 생리 재개', '정상 활동 가능', '피임 상담 권장'] },
          ].map(({ period, color, items }) => (
            <div key={period} style={{ marginBottom: '10px', border: `0.5px solid ${C.pbd}`, borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ background: color, padding: '8px 14px', fontSize: '12px', fontWeight: 700, color: '#fff' }}>{period}</div>
              <div style={{ padding: '10px 14px' }}>
                {items.map(item => <div key={item} style={{ fontSize: '12px', color: C.ts, padding: '4px 0', borderBottom: `0.5px solid ${C.pbd}` }}>• {item}</div>)}
              </div>
            </div>
          ))}
        </MobileAccordion>

        <MobileAccordion title="가능·금지 사항" icon="⚠️">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ border: `0.5px solid ${C.greenBorder}`, borderRadius: '10px', padding: '12px', background: C.greenBg }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.green, marginBottom: '8px' }}>✅ 가능</div>
              <div style={{ fontSize: '11px', color: C.green, lineHeight: 1.8 }}>산책 (다음날~)<br />샤워 (다음날~)<br />식사 (바로)<br />업무 (2~3일 후)</div>
            </div>
            <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px', background: C.pb }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.p, marginBottom: '8px' }}>⛔ 금지</div>
              <div style={{ fontSize: '11px', color: C.pd, lineHeight: 1.8 }}>성관계 (2주~)<br />격렬운동 (2주)<br />음주·흡연<br />탕목욕 (2주)</div>
            </div>
          </div>
          <InfoBox type="amber">고열·과다출혈·심한 복통 지속 시 즉시 내원하세요.</InfoBox>
        </MobileAccordion>

        <MobileAccordion title="즉시 내원 증상" icon="🚨">
          <InfoBox type="amber">38도 이상 고열 · 과다출혈 · 심한 복통 · 악취 분비물 · 8주 이상 생리 없음 → 즉시 내원하세요.</InfoBox>
        </MobileAccordion>

        <div style={{ padding: '16px 16px 0' }}>
          <div style={{ fontSize: '14px', fontWeight: 900, color: C.tm, marginBottom: '14px' }}>수술 후 관리 자주 묻는 질문</div>
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
            <div>공식 출처: 대한산부인과학회 임상 지침</div>
            <div style={{ marginTop: '6px', fontSize: '11px', color: C.tg }}>본 정보는 일반적인 의료 안내이며 개인별 진료를 대신하지 않습니다.</div>
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