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
  { href: '/abortion/legal', label: '합법화 안내' },
  { href: '/abortion/recovery', label: '수술 후 관리' },
  { href: '/abortion/faq', label: `전체 ${FAQ_COUNT}개 FAQ` },
  { href: '/abortion/hospital', label: '병원 안내' },
]

const FEATURED_FAQS = [
  {
    q: '임신중절수술 전에는 무엇을 준비해야 하나요?',
    a: '수술 전 준비사항으로는 신분증, 수면마취를 위한 6시간 이상 완전 금식(물 포함), 복용 중인 약 목록 고지, 네일아트 제거가 일반적으로 필요합니다. 귀가 시 수면마취 후 자가 운전이 어려우므로 귀가 방법을 미리 준비해 두세요. 구체적인 준비사항은 예약 시 안내받으시기 바랍니다.',
  },
  {
    q: '혼자 수술받을 수 있나요?',
    a: '성인은 본인 동의만으로 수술이 가능하며, 반드시 보호자가 동반해야 하는 것은 아닙니다. 다만 수면마취 후에는 자가 운전이 어려우므로 귀가 시 동행자가 있으면 더 안전합니다. 정확한 조건은 예약 시 확인해 주시기 바랍니다.',
  },
  {
    q: '비밀이 보장되나요?',
    a: '의료 기록은 의료법에 따라 철저히 보호되며 본인 동의 없이는 누구에게도 공개되지 않습니다. 연세365산부인과의원은 1인 상담실과 1인 회복실, 독립 동선을 운영하여 다른 환자와의 접촉을 최소화합니다. 카드 결제 내역에는 병원명만 표시됩니다.',
  },
  {
    q: '보험 적용이 가능한가요?',
    a: '임신중절수술은 건강보험 비급여 항목으로 건강보험과 실손보험 적용이 대부분 불가합니다. 모자보건법상 특수 사유에 해당하는 경우 일부 적용 가능성이 있을 수 있으니 가입 보험사에 직접 문의하세요. 영수증과 진단서 등 서류는 요청 시 발급 협조해 드립니다.',
  },
  {
    q: '수술 당일 금식은 얼마나 해야 하나요?',
    a: '수면마취를 위해 수술 6시간 전부터 완전 금식(물 포함)이 필요합니다. 금식 미준수 시 수술이 당일 연기될 수 있으므로 반드시 지켜야 합니다. 정확한 금식 시간은 예약 시 안내받으시기 바랍니다.',
  },
  {
    q: '수술 후 언제부터 일상 복귀가 가능한가요?',
    a: '수술 후 일상 복귀 시점은 개인의 건강 상태와 수술 방법에 따라 다릅니다. 가벼운 사무 업무는 2~3일 이후부터 가능한 경우가 많지만, 무거운 활동이나 격렬한 운동은 2주 이상 자제해야 합니다. 처방약과 주의사항을 따르고, 이상 증상이 있으면 즉시 내원해야 합니다.',
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

export default function InfoClient() {
  return (
    <>
      {/* ── PC ── */}
      <div className="hidden lg:block">
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-info.webp)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          minHeight: '440px', padding: '52px 80px', display: 'flex', gap: '48px', alignItems: 'center',
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {['보호자 동반 여부', '혼자 가능', '비밀보장', '보험 적용 여부'].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ color: '#fff', fontSize: '38px', fontWeight: 900, lineHeight: 1.25, letterSpacing: '-.03em', marginBottom: '16px' }}>
              임신중절수술 전 준비사항과<br />
              보호자 동행 기준<span style={{ display: 'block', fontSize: '20px', fontWeight: 700, opacity: .88, marginTop: '8px' }}>금식·준비물·보호자 동행·비밀보장 완전 안내</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              임신중절수술 전 궁금한 것들을 모두 안내드립니다.<br />
              보호자 동반 여부, 수술 정보, 보험 적용, 준비물, 비밀보장까지 확인하세요.
 · <ViewCounter slug="abortion-info" />
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '22px' }}>
              {['성인 혼자 가능', '의료법 비밀보장', '비급여 항목', '준비물 안내'].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '5px 14px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>📞 02-585-3650</a>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { q: '혼자 와도 되나요?', a: '성인은 가능' },
              { q: '보험 적용되나요?', a: '비급여 항목' },
              { q: '비밀 보장되나요?', a: '100% 보장' },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: 'rgba(255,255,255,.12)', border: '0.5px solid rgba(255,255,255,.2)', borderRadius: '12px', padding: '14px 20px' }}>
                <div style={{ color: 'rgba(255,255,255,.75)', fontSize: '11px', marginBottom: '4px' }}>{q}</div>
                <div style={{ color: '#FFD700', fontSize: '16px', fontWeight: 900 }}>{a}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: C.tg, padding: '20px 0 32px' }}>
            <Link href="/" style={{ color: C.tg, textDecoration: 'none' }}>홈</Link><span>›</span>
            <Link href="/abortion" style={{ color: C.tg, textDecoration: 'none' }}>임신중절클리닉</Link><span>›</span>
            <span style={{ color: C.p, fontWeight: 700 }}>수술 정보·보호자</span>
          </div>

          {/* 목차 */}
          <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px 28px', marginBottom: '44px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#bbb', marginBottom: '14px', letterSpacing: '.06em' }}>목차</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px 24px' }}>
              {['보호자 동반 여부', '수술 전 준비물', '보험 적용 여부', '비밀 보장 시스템', '미성년자 안내', '수술 후 주의사항'].map((t, i) => (
                <div key={t} style={{ fontSize: '13px', color: C.p, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ width: '18px', height: '18px', background: C.p, color: '#fff', borderRadius: '50%', fontSize: '9px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* 섹션 1: 보호자 */}
          <section>
            <SectionTag>01 먼저 확인할 내용</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신중절수술 전에는 무엇을 준비해야 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              수술 6시간 전부터 물을 포함한 완전 금식이 필요합니다. 신분증(주민등록증 또는 운전면허증)을 반드시 지참해야 하며, 복용 중인 약물이 있다면 예약 시 또는 내원 직후 의료진에게 알려야 합니다. 네일아트·젤 네일은 마취 중 혈중 산소 측정에 영향을 주므로 사전에 제거해야 합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              성인(만 19세 이상)은 보호자 없이 혼자 내원하여 수술이 가능합니다. 미성년자의 경우 법정대리인 동의가 원칙이지만 특수한 상황은 개별 상담을 통해 확인합니다. 수면마취 후에는 자가 운전이 불가하므로 귀가 방법을 미리 결정해 두는 것이 좋습니다.
            </p>
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px 20px', marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd, marginBottom: '10px' }}>핵심 | 최종 수정일 2026.06</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {[['완전 금식', '수술 6시간 전부터 (물 포함)'], ['신분증', '주민등록증·운전면허증·여권'], ['복용약 고지', '처방약·영양제·한약 모두'], ['네일 제거', '수술 전날까지 완전 제거']].map(([k, v]) => (
                  <div key={k} style={{ background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '10px 14px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: C.p, marginBottom: '3px' }}>{k}</div>
                    <div style={{ fontSize: '12px', color: C.ts }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술을 결심하셨지만 혼자 가도 되는지, 보호자가 꼭 필요한지 걱정하시는 분들이 많습니다. 결론부터 말씀드리면 <strong style={{ color: C.p }}>성인(만 19세 이상)은 보호자 없이 혼자 내원하여 수술이 가능합니다.</strong> 임신중절수술은 본인의 의사 결정권이 최우선으로 존중되는 의료 시술이기 때문입니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              사당역 4번 출구에서 도보 3분 이내에 위치한 연세365산부인과의원은 혼자 대중교통으로 방문하시기에 매우 편리합니다. 지하철 2호선·4호선 환승역인 사당역에서 접근이 쉬워 서울 어디서든 편하게 오실 수 있습니다. 수면마취 후에는 자가 운전이 불가하므로 귀가 시에는 반드시 대중교통을 이용하시거나 보호자와 함께 오시기를 권장합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              많은 분들이 직장 동료나 가족에게 알리지 않고 혼자 내원하십니다. 연세365산부인과의원은 1인 상담실과 독립된 동선을 운영하여 다른 환자와 마주칠 일이 없습니다. 접수부터 수술, 회복, 귀가까지 모든 과정에서 프라이버시가 완벽하게 보호됩니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              미성년자(만 18세 이하)의 경우 원칙적으로 법정대리인(부모 또는 후견인)의 동의서가 필요합니다. 그러나 부모에게 알리기 어려운 특수한 상황이나 강간, 가정폭력 등의 사유가 있는 경우에는 개별 상담을 통해 최선의 방안을 모색합니다. 먼저 전화나 카카오톡으로 상황을 말씀해 주시면 안내드리겠습니다.
            </p>

            {/* 성인 vs 미성년자 비교 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div style={{ border: `0.5px solid ${C.greenBorder}`, borderRadius: '14px', padding: '20px', background: C.greenBg }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.green, marginBottom: '14px' }}>✅ 성인 (만 19세 이상)</div>
                {[
                  ['보호자 동반', '불필요 (혼자 가능)'],
                  ['신분증', '필수 지참 (주민등록증·면허증)'],
                  ['동의서', '본인 서명으로 완료'],
                  ['귀가 방법', '대중교통 이용 권장'],
                  ['자가 운전', '수면마취 후 절대 불가'],
                  ['비밀보장', '의료법에 따라 100% 보장'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `0.5px solid ${C.greenBorder}`, fontSize: '13px' }}>
                    <span style={{ color: C.green, fontWeight: 600 }}>{k}</span>
                    <span style={{ color: C.green, fontWeight: 700 }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: C.pb }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.p, marginBottom: '14px' }}>⚠ 미성년자 (만 18세 이하)</div>
                {[
                  ['법정대리인 동의', '원칙적으로 필수'],
                  ['보호자 동행', '권장'],
                  ['신분증', '본인 + 법정대리인'],
                  ['서류', '가족관계증명서'],
                  ['특수 상황', '개별 상담 후 안내'],
                  ['비밀보장', '동일하게 100% 보장'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px' }}>
                    <span style={{ color: C.pd, fontWeight: 600 }}>{k}</span>
                    <span style={{ color: C.p, fontWeight: 700 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <InfoBox>사당역 4번 출구 도보 3분 거리로 혼자 대중교통 방문이 매우 편리합니다. 수면마취 후 자가 운전은 절대 불가하오니 대중교통을 이용해 주세요.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 2: 준비물 */}
          <section>
            <SectionTag>02 수술 전 준비물 체크리스트</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>수술 당일 준비물 완벽 체크리스트</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 당일 준비물을 미리 확인하고 내원하시면 더욱 원활하게 진행됩니다. 가장 중요한 것은 <strong style={{ color: C.p }}>수술 6시간 전부터 완전 금식(물 포함)</strong>입니다. 금식을 지키지 않으면 수면마취 시 흡인 위험이 있어 수술이 당일 연기될 수 있습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              신분증은 본인 확인을 위해 반드시 지참해야 합니다. 주민등록증 또는 운전면허증을 지참해 주세요. 여권도 가능합니다. 복용 중인 약이 있다면 반드시 의료진에게 알려주세요. 혈액응고에 영향을 주는 아스피린, 와파린, 오메가3 등은 수술 전 일정 기간 중단이 필요할 수 있습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              수술 당일 네일아트와 매니큐어는 반드시 제거해 주세요. 수면마취 중 혈중 산소 포화도를 손끝 센서로 모니터링하는데, 매니큐어나 젤 네일이 있으면 정확한 측정이 어렵습니다. 젤 네일은 제거에 시간이 걸리므로 수술 전날 미리 제거하고 오시는 것이 좋습니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginBottom: '20px' }}>
              {[
                { icon: '🪪', title: '신분증 (필수)', desc: '주민등록증 또는 운전면허증. 여권도 가능합니다. 본인 확인을 위해 반드시 지참해야 합니다. 신분증이 없으면 수술이 불가합니다.', required: true },
                { icon: '⏱️', title: '6시간 금식 (필수)', desc: '물·껌·사탕·우유 등 모든 음식물 완전 금식. 수면마취 흡인 사고 예방을 위한 절대 원칙입니다. 금식 미준수 시 수술이 당일 연기됩니다.', required: true },
                { icon: '💊', title: '복용 약 목록 (필수)', desc: '현재 복용 중인 모든 처방약, 영양제, 한약을 의료진에게 고지해야 합니다. 혈액 응고에 영향을 주는 약물은 사전 중단이 필요합니다.', required: true },
                { icon: '💅', title: '네일아트 제거 (필수)', desc: '매니큐어·젤 네일은 마취 모니터링에 방해됩니다. 수술 전날 미리 제거하고 오세요. 수술 당일 제거는 지연이 생길 수 있습니다.', required: true },
                { icon: '👗', title: '편한 복장', desc: '꽉 끼지 않는 넉넉한 복장을 권장합니다. 치마 또는 헐렁한 바지가 적합합니다. 수술복으로 갈아입는 과정이 있습니다.', required: false },
                { icon: '🩸', title: '개인 생리대', desc: '수술 후 출혈에 대비한 생리대를 준비해 오시면 편리합니다. 병원에도 준비되어 있지만 개인 제품을 선호하시는 분을 위해 안내드립니다.', required: false },
              ].map(({ icon, title, desc, required }) => (
                <div key={title} style={{ border: `0.5px solid ${required ? C.p : C.pbd}`, borderRadius: '12px', padding: '18px', background: required ? C.pb : '#fff' }}>
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}>{icon}</div>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: C.tm }}>{title}</span>
                    {required && <span style={{ background: C.p, color: '#fff', fontSize: '9px', fontWeight: 700, padding: '1px 6px', borderRadius: '8px' }}>필수</span>}
                  </div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.75 }}>{desc}</div>
                </div>
              ))}
            </div>

            {/* 수술 전날 체크리스트 */}
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '24px', marginBottom: '16px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '16px' }}>📋 수술 전날 체크리스트</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                {[
                  '다음 날 수술 시간과 병원 위치 재확인',
                  '신분증 위치 미리 확인',
                  '수술 후 귀가 방법 결정 (대중교통)',
                  '수술 다음 날 일정 비워두기',
                  '음주 및 흡연 중단',
                  '혈액응고에 영향 주는 약물 중단',
                  '네일아트·매니큐어 제거',
                  '편한 복장·개인 생리대 준비',
                ].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: C.ts, alignItems: 'flex-start' }}>
                    <span style={{ width: '18px', height: '18px', background: C.p, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', flexShrink: 0, marginTop: '1px' }}>✓</span>{t}
                  </div>
                ))}
              </div>
            </div>
            <InfoBox type="amber">⚠ 금식 미준수 시 수술이 당일 연기됩니다. 물 한 모금도 마시지 마세요. 내원 6시간 전부터 완전 금식이 원칙입니다.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 3: 보험 */}
          <section>
            <SectionTag>03 보험 적용 여부</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신중절수술 보험 적용이 되나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술은 건강보험 비급여 항목으로 분류되어 있어 국민건강보험이 적용되지 않습니다. 이는 임신중절수술이 질병의 치료 목적이 아닌 선택적 의료 시술로 분류되기 때문입니다. 따라서 낙태 비용 가격 전액은 본인 부담으로 지불하셔야 합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              실손의료보험도 대부분 임신·출산·피임 관련 항목을 보상 제외로 규정하고 있어 임신중절수술 비용에 대한 실손 적용이 어렵습니다. 가입하신 보험 상품의 약관은 회사마다 다를 수 있으므로 정확한 보험 적용 여부는 가입하신 보험사에 직접 문의하시는 것이 가장 정확합니다. 연세365산부인과의원은 보험 청구에 필요한 서류 발급을 성실히 협조해 드립니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              모자보건법 제14조에서 정한 특수 사유(강간, 근친 임신, 유전적 질환, 모체 건강 위협 등)에 해당하는 경우에는 일부 급여 적용이 가능할 수 있습니다. 이 경우 해당 사유를 증명하는 서류와 함께 보험사에 청구하시면 됩니다. 필요한 진단서, 소견서 등 서류 발급을 성실히 협조해 드리니 내원 시 말씀해 주시기 바랍니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '16px' }}>
              {[
                { title: '건강보험', status: '적용 불가', desc: '비급여 항목으로 건강보험 적용이 되지 않습니다. 낙태 비용 전액 본인 부담입니다.', color: C.amber, bg: C.amberBg },
                { title: '실손보험', status: '대부분 불가', desc: '임신·출산 관련 보상 제외 항목이 대부분입니다. 가입 보험사에 직접 문의하세요.', color: C.amber, bg: C.amberBg },
                { title: '특수 사유', status: '일부 가능', desc: '모자보건법상 사유 해당 시 일부 가능합니다. 서류 발급 협조 가능합니다.', color: C.green, bg: C.greenBg },
              ].map(({ title, status, desc, color, bg }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '20px', background: bg }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '6px' }}>{title}</div>
                  <div style={{ fontSize: '18px', fontWeight: 900, color, marginBottom: '10px' }}>{status}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.8 }}>{desc}</div>
                </div>
              ))}
            </div>

            {/* 비용 안내 표 */}
            <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden', marginBottom: '16px' }}>
              <div style={{ background: '#F8E8EF', padding: '12px 18px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd }}>임신 주수</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd }}>비용 (최종)</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd }}>포함 항목</div>
              </div>
              {[
                ['8주 미만', '45만원', '수술·마취·영양제·부가세'],
                ['8주', '60만원', '수술·마취·영양제·부가세'],
                ['9주', '70만원', '수술·마취·영양제·부가세'],
                ['10주', '80만원', '수술·마취·영양제·부가세'],
              ].map(([w, p, inc], i) => (
                <div key={w} style={{ padding: '11px 18px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', background: i % 2 === 0 ? C.pb : '#fff', borderTop: `0.5px solid ${C.pbd}` }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: C.p }}>{w}</div>
                  <div style={{ fontSize: '13px', fontWeight: 900, color: C.p }}>{p}</div>
                  <div style={{ fontSize: '12px', color: C.ts }}>{inc}</div>
                </div>
              ))}
            </div>
            <InfoBox>보험 서류(진단서, 영수증, 소견서 등) 발급 요청 시 성실히 협조해 드립니다. 현금영수증 발급도 가능합니다.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 4: 비밀보장 */}
          <section>
            <SectionTag>04 비밀 보장 시스템</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>100% 비밀이 보장됩니다</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술을 결심하셨을 때 가장 걱정되는 것 중 하나가 비밀 유지입니다. 가족이나 직장 동료에게 알려질까 걱정하시는 분들이 매우 많습니다. 연세365산부인과의원은 환자의 프라이버시 보호를 최우선으로 합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              모든 상담과 진료 기록은 의료법 제19조에 따라 철저히 보호되며, 본인 동의 없이는 가족을 포함한 누구에게도 공개되지 않습니다. 독립된 1인 상담실에서 비공개 상담이 진행되며, 다른 환자와 마주칠 일이 없도록 동선을 분리하여 운영합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              전산 시스템의 개인 정보는 고도의 보안 시스템으로 관리되며, 외부에 절대 유출되지 않습니다. 수술 후 회복 역시 1인 회복실에서 완전한 프라이버시가 보장됩니다. 연세365산부인과의원을 방문하신 분들의 후기에서 가장 많이 언급되는 키워드가 바로 '비밀보장 철저'입니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginBottom: '20px' }}>
              {[
                { icon: '🔒', title: '1인 상담실', desc: '독립된 공간에서 비공개 1:1 상담이 진행됩니다. 다른 환자와 마주칠 일이 없으며 목소리도 외부에 전달되지 않습니다.' },
                { icon: '🛏️', title: '1인 회복실', desc: '수술 후 독립된 1인 회복실에서 안정을 취합니다. 완전한 프라이버시 보장으로 누구와도 마주칠 염려가 없습니다.' },
                { icon: '💻', title: '의료 기록 보호', desc: '의료법에 따라 모든 개인 정보와 진료 기록을 철저히 보호합니다. 고도의 보안 시스템으로 외부 유출은 절대 없습니다.' },
                { icon: '🚶', title: '독립 동선 운영', desc: '접수부터 수술, 회복, 귀가까지 모든 동선이 독립적으로 분리됩니다. 병원 방문 자체를 다른 사람이 알기 어렵습니다.' },
                { icon: '📱', title: '상담 비밀보장', desc: '전화·카카오톡 상담 내용도 철저히 비밀이 보장됩니다. 익명 상담도 가능하며 이름을 밝히지 않아도 됩니다.' },
                { icon: '⚖️', title: '법적 보호', desc: '의료법 제19조에 의해 의료인은 환자의 개인 정보를 외부에 누설할 수 없습니다. 법적으로 완벽하게 보호됩니다.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '20px', background: '#fff', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', marginBottom: '10px' }}>{icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>{title}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
            <InfoBox>의료법 제19조에 따라 의료인은 환자의 개인 정보를 누설하거나 발표할 수 없습니다. 모든 진료 내용은 법적으로 보호됩니다.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 5: 자주 묻는 질문 */}
          <section>
            <SectionTag>05 자주 묻는 질문</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>보호자·보험·준비물 FAQ</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              임신중절수술 전 가장 많이 문의하시는 질문들을 정리했습니다.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { q: '남자친구나 가족에게 알리지 않고 혼자 수술이 가능한가요?', a: '성인의 경우 본인 동의만으로 수술이 가능합니다. 보호자에게 알리지 않아도 되며, 모든 과정은 철저히 비밀이 보장됩니다. 접수부터 귀가까지 독립된 동선으로 진행됩니다.' },
                { q: '수술 당일 혼자 가서 혼자 귀가할 수 있나요?', a: '내원은 혼자 가능하지만 수면마취 후에는 자가 운전이 절대 불가합니다. 귀가 시에는 반드시 대중교통을 이용하시거나 보호자와 함께 하셔야 합니다.' },
                { q: '직장에서 쓸 수 있는 진단서나 서류 발급이 가능한가요?', a: '환자 본인 요청 시 진단서, 확인서, 소견서 등 필요한 서류 발급이 가능합니다. 모든 서류 발급 과정에서도 개인 정보 보호를 철저히 합니다.' },
                { q: '카드 결제 내역에 어떻게 표시되나요?', a: '병원명으로 표시되며, 임신중절수술이나 관련 내용이 직접 노출되지 않습니다. 현금 결제를 원하시는 경우 현금영수증 발급도 가능합니다.' },
                { q: '수술 후 며칠 쉬어야 하나요?', a: '수술 다음 날부터 가벼운 일상생활이나 사무직 업무 복귀가 가능합니다. 격렬한 운동, 성관계, 음주는 2주간 피하셔야 합니다.' },
              ].map(({ q, a }, i) => (
                <div key={i} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '18px 20px', background: '#fff' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>Q. {q}</div>
                  <div style={{ fontSize: '13px', color: C.ts, lineHeight: 1.85 }}>{a}</div>
                </div>
              ))}
            </div>
          </section>

          <Divider />



          <Divider />

          {/* 신규 섹션: 금식·복용약·과거 병력 */}
          <section>
            <SectionTag>05 예약 전 확인할 금식·약물·병력</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>예약 전에 금식·복용약·과거 병력을 왜 확인해야 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              수면마취 전 금식 여부와 복용 중인 약물 정보는 수술 당일 안전과 직결됩니다. 금식을 지키지 않으면 마취 시 흡인 위험이 생겨 수술이 연기될 수 있습니다. 혈액응고에 영향을 주는 아스피린·와파린·오메가3 등은 수술 전 일정 기간 복용을 중단해야 할 수 있으므로, 예약 시 미리 알려주시는 것이 좋습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              과거 마취 부작용, 심장 질환, 혈액 질환, 혈압 이상, 알레르기 반응이 있었다면 반드시 의료진에게 사전에 고지해야 합니다. 이러한 정보는 수술 방법과 마취 계획을 결정하는 데 중요하게 사용됩니다. 해당 정보를 숨기면 예상치 못한 상황이 발생할 수 있으므로 솔직하게 알려주시기 바랍니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '16px' }}>
              임신중절수술 전 건강 상태 확인을 위한 기본 검사(초음파, 혈액 검사 등)가 내원 후 진행됩니다. 검사 결과에 따라 당일 수술 진행 여부가 결정될 수 있습니다. 모든 검사와 과정은 비밀이 보장되며, 개인 건강 상태에 맞는 맞춤형 안내를 받을 수 있습니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '16px' }}>
              {[
                { icon: '⏱️', title: '수술 6시간 전 금식', desc: '물·껌·사탕을 포함한 모든 음식물 금식. 금식 미준수 시 마취 흡인 위험으로 수술이 당일 연기됩니다.', level: '필수' },
                { icon: '💊', title: '복용약 사전 고지', desc: '처방약·영양제·한약 모두 고지 필요. 혈액응고 관련 약물(아스피린·오메가3 등)은 수술 전 중단 필요 가능성 있음.', level: '필수' },
                { icon: '📋', title: '과거 병력 고지', desc: '마취 부작용 경험, 심장·혈액 질환, 혈압 이상, 알레르기 반응. 수술 방법과 마취 계획에 반영됩니다.', level: '필수' },
              ].map(({ icon, title, desc, level }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '18px', background: C.pb }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: C.tm }}>{title}</span>
                    <span style={{ background: C.p, color: '#fff', fontSize: '9px', fontWeight: 700, padding: '1px 6px', borderRadius: '8px' }}>{level}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.75 }}>{desc}</div>
                </div>
              ))}
            </div>
            <InfoBox type="amber">⚠ 금식 시간은 마취 방법과 개인 상태에 따라 달라질 수 있습니다. 예약 시 안내받은 금식 시작 시간을 반드시 지켜주세요.</InfoBox>
            <div style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '10px' }}>관련 내용 더 보기</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Link href="/abortion/surgery" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 당일 절차와 검사 과정</Link>
                <Link href="/abortion/recovery" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 후 회복기간과 관리 방법</Link>
              </div>
            </div>
          </section>

          <Divider />

          {/* 신규 섹션: 혼자 vs 보호자 동행 */}
          <section>
            <SectionTag>06 혼자 방문 vs 보호자 동행 확인사항</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>혼자 방문하거나 보호자와 동행할 때 각각 무엇을 확인해야 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              성인(만 19세 이상)은 본인 동의만으로 임신중절수술이 가능합니다. 혼자 방문하더라도 수술 전 동의서 작성, 초음파 검사, 수술, 회복실 안정 후 귀가까지 모든 과정이 가능합니다. 다만 수면마취 후 자가 운전은 절대 불가하므로, 혼자 방문하는 경우 반드시 대중교통으로 귀가해야 합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              보호자와 함께 방문하는 경우, 보호자는 대기실에서 기다리며 수술 과정에는 참여하지 않는 것이 일반적입니다. 개인정보 보호를 위해 보호자에게도 수술 세부 내용을 알리지 않을 수 있으며, 이는 사전에 상담을 통해 결정할 수 있습니다. 미성년자의 경우 법정대리인 동의가 원칙이지만, 특수 상황은 예약 시 개별 안내를 받으시기 바랍니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div style={{ border: `0.5px solid ${C.greenBorder}`, borderRadius: '14px', padding: '20px', background: C.greenBg }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.green, marginBottom: '14px' }}>혼자 방문할 때 확인사항</div>
                {[
                  ['신분증', '반드시 지참 (본인 확인)'],
                  ['귀가 방법', '대중교통 사전 확인'],
                  ['금식 준수', '6시간 완전 금식'],
                  ['복용약 고지', '예약 시 또는 내원 직후'],
                  ['네일 제거', '수술 전날까지 완료'],
                  ['비밀보장', '독립 동선으로 완전 보장'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: `0.5px solid ${C.greenBorder}`, fontSize: '13px' }}>
                    <span style={{ color: C.green, fontWeight: 600 }}>{k}</span>
                    <span style={{ color: C.ts, fontSize: '11px' }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: C.pb }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.p, marginBottom: '14px' }}>보호자와 동행할 때 확인사항</div>
                {[
                  ['보호자 역할', '대기실 대기 (수술 동행 불가)'],
                  ['정보 공유', '사전 상담에서 결정'],
                  ['미성년자', '법정대리인 동의 필요'],
                  ['귀가 지원', '자가 운전 가능 (마취 종료 후)'],
                  ['동의서', '본인 서명 필수 (성인 기준)'],
                  ['비밀보장', '동일하게 보장'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px' }}>
                    <span style={{ color: C.pd, fontWeight: 600 }}>{k}</span>
                    <span style={{ color: C.ts, fontSize: '11px' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <InfoBox>의료법 제19조에 따라 진료 내용은 본인 동의 없이 누구에게도 공개되지 않습니다. 보호자 동행 시에도 비밀보장 원칙은 동일하게 적용됩니다.</InfoBox>
            <div style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '10px' }}>관련 내용 더 보기</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Link href="/abortion/cost" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 주수별 비용 확인</Link>
                <Link href="/abortion/hospital" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 병원 선택 기준</Link>
                <Link href="/abortion/faq" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 전체 {FAQ_COUNT}개 FAQ 보기</Link>
              </div>
            </div>
          </section>

          <Divider />

          <section style={{ marginBottom: '44px' }}>
            <SectionTag>자주 묻는 질문</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>
              임신중절수술 준비·보호자에 관해 자주 묻는 질문
            </h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, marginBottom: '20px', letterSpacing: '-.01em' }}>
              수술 전 준비사항, 혼자 방문 여부, 비밀보장, 보험 적용, 금식과 일상 복귀 관련 내용을 정리했습니다.
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
              의료정보는 어떤 기준으로 작성되었나요?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: C.ts, lineHeight: 1.85 }}>
              <div><strong style={{ color: C.tm }}>정보 제공:</strong> 연세365산부인과의원</div>
              <div><strong style={{ color: C.tm }}>최종 수정일:</strong> 2026년 6월 29일</div>
              <div><strong style={{ color: C.tm }}>공식 출처:</strong> 모자보건법, 대한산부인과학회 임상 지침</div>
              <div style={{ marginTop: '8px', fontSize: '12px', color: C.tg }}>본 정보는 일반적인 의료 안내이며 개인별 진료를 대신하지 않습니다. 정확한 진단과 치료는 의료기관을 방문하여 상담받으시기 바랍니다.</div>
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
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '6px' }}>서울특별시 관악구 과천대로 939, 3층 · 사당역 4번 출구 도보 3분</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.7)', marginBottom: '22px' }}>비밀보장 · 혼자 방문 가능 · 당일예약 가능</div>
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-info.webp)`,
          backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px 20px',
        }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {['보호자 동반 여부', '혼자 가능', '비밀보장'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 10px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
          <h2 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-.02em' }}>
            임신중절수술 전 준비사항과<br />보호자 동행 기준<span style={{ display: 'block', fontSize: '15px', fontWeight: 700, opacity: .88, marginTop: '6px' }}>금식·준비물·보호자·비밀보장 안내</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', marginTop: '14px' }}>
            {[['혼자 가능', '성인 기준'], ['비밀보장', '100%'], ['비급여', '보험 불가']].map(([v, l]) => (
              <div key={v} style={{ background: 'rgba(255,255,255,.12)', borderRadius: '8px', padding: '8px', textAlign: 'center' }}>
                <div style={{ color: '#FFD700', fontSize: '13px', fontWeight: 900 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '10px', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>


        <div style={{ padding: '18px 16px', background: '#fff', borderBottom: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '13px', fontWeight: 900, color: C.tm, marginBottom: '8px' }}>임신중절수술 전에는 무엇을 준비해야 하나요?</div>
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            수술 6시간 전부터 물 포함 완전 금식이 필요합니다. 신분증을 반드시 지참하고, 복용 중인 약물은 예약 시 의료진에게 알려야 합니다. 네일아트는 수술 전날까지 제거해야 합니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {[['완전 금식', '수술 6시간 전부터'], ['신분증', '반드시 지참'], ['복용약 고지', '전부 알려야 함'], ['네일 제거', '전날까지 완료']].map(([k, v]) => (
              <div key={k} style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '8px 10px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: C.p, marginBottom: '2px' }}>{k}</div>
                <div style={{ fontSize: '10px', color: C.ts }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <MobileAccordion title="보호자 동반 여부" icon="👤">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '12px' }}>
            성인(만 19세 이상)은 보호자 없이 혼자 내원하여 임신중절수술이 가능합니다. 신분증만 지참하시면 됩니다. 수면마취 후에는 자가 운전이 불가하므로 귀가 시 대중교통을 이용하세요.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
            <div style={{ border: `0.5px solid ${C.greenBorder}`, borderRadius: '10px', padding: '12px', background: C.greenBg }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.green, marginBottom: '8px' }}>성인 (만 19세↑)</div>
              <div style={{ fontSize: '11px', color: C.green, lineHeight: 1.8 }}>혼자 가능<br />신분증 필수<br />본인 동의서<br />대중교통 귀가</div>
            </div>
            <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px', background: C.pb }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.p, marginBottom: '8px' }}>미성년자 (18세↓)</div>
              <div style={{ fontSize: '11px', color: C.pd, lineHeight: 1.8 }}>법정대리인 동의<br />보호자 동행 권장<br />가족관계증명서<br />특수상황 별도상담</div>
            </div>
          </div>
          <InfoBox>수면마취 후 자가 운전 절대 불가. 대중교통 이용 또는 보호자 동반 귀가를 권장합니다.</InfoBox>
        </MobileAccordion>

        <MobileAccordion title="수술 전 준비물" icon="📋">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            수술 6시간 전 완전 금식(물 포함)이 필수입니다. 신분증을 반드시 지참하세요. 복용 중인 약물이 있다면 모두 의료진에게 알려주세요. 네일아트는 반드시 사전에 제거해야 합니다.
          </p>
          {[
            ['신분증 (필수)', '주민등록증 또는 운전면허증'],
            ['6시간 금식 (필수)', '물·껌 포함 완전 금식'],
            ['복용약 목록 (필수)', '처방약·영양제 모두 고지'],
            ['네일아트 제거 (필수)', '마취 모니터링 필수 조건'],
            ['편한 복장', '넉넉한 바지 또는 치마'],
            ['개인 생리대', '수술 후 출혈 대비'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '12px' }}>
              <span style={{ fontWeight: 700, color: C.tm }}>{k}</span>
              <span style={{ color: C.tg, fontSize: '11px' }}>{v}</span>
            </div>
          ))}
          <InfoBox type="amber">금식 미준수 시 수술이 당일 연기됩니다. 물 한 모금도 마시지 마세요.</InfoBox>
        </MobileAccordion>

        <MobileAccordion title="보험 적용 여부" icon="🏥">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            임신중절수술은 건강보험 비급여 항목으로 건강보험 및 실손보험 적용이 대부분 불가합니다. 모자보건법상 특수 사유(강간, 근친 임신, 유전적 질환, 모체 건강 위협)에 해당하는 경우 일부 급여 적용이 가능할 수 있으므로 가입 보험사에 직접 문의하세요.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '10px' }}>
            {[['건강보험', '적용 불가', C.amber], ['실손보험', '대부분 불가', C.amber], ['특수 사유', '일부 가능', C.green]].map(([t, s, c]) => (
              <div key={t} style={{ background: C.pb, borderRadius: '8px', padding: '10px', textAlign: 'center', border: `0.5px solid ${C.pbd}` }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: C.tm, marginBottom: '3px' }}>{t}</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: c as string }}>{s}</div>
              </div>
            ))}
          </div>
          <InfoBox type="amber">보험 서류 발급 요청 시 성실히 협조해 드립니다. 현금영수증 발급도 가능합니다.</InfoBox>
        </MobileAccordion>

        <MobileAccordion title="비밀 보장 시스템" icon="🔒">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            1인 상담실·1인 회복실·독립 동선 운영으로 완전한 프라이버시를 보장합니다. 의료 기록은 의료법 제19조에 따라 철저히 보호되며 본인 동의 없이는 누구에게도 공개되지 않습니다. 카드 내역에도 임신중절 관련 내용이 직접 노출되지 않습니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {['1인 상담실', '1인 회복실', '독립 동선', '법적 보호'].map(t => (
              <div key={t} style={{ background: C.pb, borderRadius: '8px', padding: '8px 12px', border: `0.5px solid ${C.pbd}`, fontSize: '12px', fontWeight: 700, color: C.p, textAlign: 'center' }}>🔒 {t}</div>
            ))}
          </div>
          <InfoBox>의료법 제19조에 따라 모든 진료 내용은 법적으로 보호됩니다. 외부 유출은 절대 없습니다.</InfoBox>
        </MobileAccordion>

        <div style={{ padding: '16px 16px 0' }}>
          <div style={{ fontSize: '14px', fontWeight: 900, color: C.tm, marginBottom: '14px' }}>자주 묻는 질문</div>
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
            <div>공식 출처: 모자보건법, 대한산부인과학회 임상 지침</div>
            <div style={{ marginTop: '6px', fontSize: '11px', color: C.tg }}>본 정보는 일반적인 의료 안내이며 개인별 진료를 대신하지 않습니다.</div>
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