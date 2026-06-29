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
  { href: '/abortion/surgery', label: '수술 절차 안내' },
  { href: '/abortion/recovery', label: '수술 후 관리' },
  { href: '/abortion/faq', label: '전체 217개 FAQ' },
  { href: '/abortion/legal', label: '합법화 안내' },
]

const FEATURED_FAQS = [
  {
    q: '임신중절수술 방법은 어떤 기준으로 결정하나요?',
    a: '수술 방법은 임신 주수, 초음파 검사 결과, 자궁 상태, 과거 병력과 현재 건강 상태를 종합하여 의료진이 안내합니다. 연세365산부인과의원에서는 흡입술과 소파술을 시행하며, 약물중절은 시행하지 않습니다. 방법에 대한 자세한 안내는 초음파 확인과 상담 이후에 이루어집니다.',
  },
  {
    q: '흡입술과 소파술의 차이는 무엇인가요?',
    a: '흡입술은 음압으로 임신 조직을 제거하며 8주 이내에 주로 적용되고, 시술 시간은 10~15분 내외입니다. 소파술은 기구로 자궁 내 조직을 제거하며 8~12주 사이에 주로 적용되고, 시술 시간은 20~30분 내외입니다. 두 방법 모두 수면마취 하에 진행되며, 시술 후 당일 귀가가 가능한 경우가 많습니다.',
  },
  {
    q: '약물중절도 선택할 수 있나요?',
    a: '연세365산부인과의원은 약물중절을 시행하지 않으며 수술적 방법에 대해서만 상담합니다. 약물중절은 불완전 유산이나 후유증 위험이 있을 수 있어 의료진 관리가 중요합니다. 수술 방법에 대해 궁금한 점은 방문 전 전화나 카카오톡으로 문의하실 수 있습니다.',
  },
  {
    q: '어떤 방법이 회복이 빠른가요?',
    a: '흡입술은 일반적으로 자궁 손상이 적고 시술 시간이 짧아 회복이 빠른 편입니다. 소파술은 흡입술보다 회복 기간이 약간 더 필요할 수 있습니다. 회복 속도는 임신 주수, 개인 건강 상태에 따라 달라지므로 처방약과 주의사항을 따르는 것이 중요합니다.',
  },
  {
    q: '수술 방법이 향후 임신에 영향을 주나요?',
    a: '의료진이 안전하게 시행한 수술은 향후 임신에 직접적인 영향을 주지 않는 경우가 많습니다. 다만 반복 수술은 자궁 내막에 누적적 영향이 있을 수 있으므로 피임 상담을 함께 받는 것을 권장합니다. 수술 후 피임 상담도 내원 시 문의해 주시면 안내해 드립니다.',
  },
  {
    q: '주수별로 적용되는 수술 방법이 다른가요?',
    a: '임신 주수에 따라 권장 수술 방법이 달라집니다. 8주 이내는 흡입술이, 8~12주는 소파술이 일반적으로 적용됩니다. 11주 이상이나 특수 상황에서는 전문의 심층 상담과 추가 검사가 필요하며, 정확한 방법은 초음파 검사 후 의료진이 안내합니다.',
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

export default function MethodClient() {
  return (
    <>
      <div className="hidden lg:block">
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-method.webp)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          minHeight: '420px', padding: '52px 80px', display: 'flex', gap: '48px', alignItems: 'center',
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {['흡입술', '소파술', '약물중절', '주수별 최적 선택'].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ color: '#fff', fontSize: '38px', fontWeight: 900, lineHeight: 1.25, letterSpacing: '-.03em', marginBottom: '16px' }}>
              임신중절수술 방법과 종류는<br />어떻게 결정될까요?
              <span style={{ display: 'block', fontSize: '20px', fontWeight: 700, opacity: .88, marginTop: '8px' }}>흡입술·소파술·주수별 선택 기준 완전 안내</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              임신 주수와 자궁 상태에 따라 가장 적합한 수술 방법을 선택합니다.<br />
              흡입술, 소파술, 약물중절의 차이와 주수별 권장 방법을 안내합니다.
 · <ViewCounter slug="abortion-method" />
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>📞 02-585-3650</a>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[['흡입술', '8주 이내'], ['소파술', '8~12주'], ['약물중절', '7주 이내'], ['당일귀가', '전 방법']].map(([v, l]) => (
              <div key={v} style={{ background: 'rgba(255,255,255,.12)', border: '0.5px solid rgba(255,255,255,.2)', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                <div style={{ color: '#FFD700', fontSize: '16px', fontWeight: 900 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '10px', marginTop: '3px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: C.tg, padding: '20px 0 32px' }}>
            <Link href="/" style={{ color: C.tg, textDecoration: 'none' }}>홈</Link><span>›</span>
            <Link href="/abortion" style={{ color: C.tg, textDecoration: 'none' }}>임신중절클리닉</Link><span>›</span>
            <span style={{ color: C.p, fontWeight: 700 }}>수술 방법·종류</span>
          </div>

          <section>
            <SectionTag>01 먼저 확인할 내용</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신중절수술 방법은 어떤 기준으로 선택하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 방법은 임신 주수, 초음파 검사에서 확인한 자궁 상태, 개인 건강 조건을 종합하여 전문의가 결정합니다. 연세365산부인과의원은 수술 전 정밀 초음파 검사를 진행하고, 흡입술과 소파술 중 적합한 방법을 안내합니다. 약물중절은 연세365산부인과의원에서 시행하지 않습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신 8주 이내에는 흡입술이 권장되며, 8주 이상에서는 소파술이 일반적으로 적용됩니다. 정확한 임신 주수는 마지막 월경일과 초음파 검사 결과를 함께 확인해야 합니다. 초음파 전에는 수술 방법과 비용을 확정하기 어려우므로, 내원 후 검사 결과를 바탕으로 안내드립니다.
            </p>
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px 20px', marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd, marginBottom: '10px' }}>핵심: 수술 방법 결정 요소 | 최종 수정일 2026.06</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {['임신 주수 (초음파 확인)', '자궁 상태 및 착상 위치', '개인 건강 상태·과거 병력', '복용 중인 약물 여부'].map(t => (
                  <div key={t} style={{ fontSize: '12px', color: C.pd, display: 'flex', gap: '6px' }}><span>✓</span>{t}</div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 방법은 크게 <strong style={{ color: C.p }}>흡입술(진공흡입법)</strong>과 <strong style={{ color: C.p }}>소파술(자궁소파술)</strong>로 나뉩니다. 연세365산부인과의원에서는 초음파 정밀 진단 후 임신 주수와 자궁 상태에 맞는 방법을 전문의가 직접 결정합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신초기중절수술 방법 중 <strong>흡입술</strong>은 8주 이내에 가장 권장되는 방법으로, 부드러운 관으로 임신 조직을 배출하여 자궁 내막 손상이 최소화됩니다. 수술 시간이 10~15분으로 짧고 출혈량이 적으며 회복이 빠릅니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              <strong>소파술</strong>은 8주 이상의 주수에서 사용하며, 기구로 자궁 내 임신 조직을 직접 제거합니다. 수술 시간이 20~30분으로 다소 길지만 수면마취 하에 진행되어 통증은 없습니다. <strong>약물중절</strong>은 7주 이내에만 적용 가능하며, 불완전 유산 위험이 있어 반드시 의료진 관리 하에 진행해야 합니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '24px' }}>
              {[
                { name: '흡입술', badge: '8주 이내 권장', color: C.p, rows: [['적용 주수', '8주 이내'], ['수술 시간', '10~15분'], ['출혈량', '적음'], ['회복 기간', '1~2일'], ['낙태 비용', '45만원~']], desc: '자궁 내막 손상 최소. 가임력 보존에 가장 유리합니다.' },
                { name: '소파술', badge: '8~12주', color: C.pd, rows: [['적용 주수', '8~12주'], ['수술 시간', '20~30분'], ['출혈량', '보통'], ['회복 기간', '2~3일'], ['낙태 비용', '60만원~']], desc: '주수가 높을 때 주로 사용. 전문의 숙련도가 중요합니다.' },
                { name: '약물중절', badge: '7주 이내만', color: C.amber, rows: [['적용 주수', '7주 이내만'], ['방법', '약물 복용'], ['완전성', '불완전 위험'], ['추가시술', '필요할 수 있음'], ['주의사항', '의료진 관리 필수']], desc: '불완전 유산 위험. 반드시 의료진 감독 하에 진행해야 합니다.' },
              ].map(({ name, badge, color, rows, desc }) => (
                <div key={name} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden', background: '#fff' }}>
                  <div style={{ background: color, padding: '14px 18px' }}>
                    <div style={{ fontSize: '15px', fontWeight: 900, color: '#fff', marginBottom: '4px' }}>{name}</div>
                    <div style={{ background: 'rgba(255,255,255,.2)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px', display: 'inline-block' }}>{badge}</div>
                  </div>
                  <div style={{ padding: '14px 18px' }}>
                    <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.7, marginBottom: '12px' }}>{desc}</p>
                    {rows.map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '12px' }}>
                        <span style={{ color: C.tg, fontWeight: 600 }}>{k}</span>
                        <span style={{ fontWeight: 700, color: k === '낙태 비용' ? color : C.tm }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '14px 24px', textAlign: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: C.p }}>공통 사항 — 수면마취 · 당일귀가 · 비밀보장 · 전문의 직접 집도 · 1인 회복실</span>
            </div>
            <InfoBox>흡입술이 자궁 내막 손상이 가장 적어 가임력 보존에 유리합니다. 임신 8주 이내라면 흡입술을 우선 권장합니다.</InfoBox>
          </section>

          <Divider />

          <section>
            <SectionTag>02 주수별 수술 방법 선택 가이드</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>몇 주에 어떤 방법으로 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              임신 주수에 따라 권장 수술 방법이 다릅니다. 초음파 정밀 검사로 정확한 주수를 확인한 후 전문의가 가장 안전한 방법을 결정합니다. 임신 주수가 짧을수록 수술이 간단하고 낙태 비용도 낮으며 회복도 빠릅니다.
            </p>
            <div style={{ position: 'relative', paddingLeft: '32px', marginBottom: '24px' }}>
              <div style={{ position: 'absolute', left: '14px', top: 0, bottom: 0, width: '2px', background: `linear-gradient(${C.p}, ${C.pp})` }} />
              {[
                { week: '4~6주', method: '흡입술', color: C.p, desc: '태낭이 확인되는 시기. 흡입술로 10분 내 완료 가능합니다. 임신초기낙태 방법 중 가장 안전한 시기입니다. 낙태 비용 가격도 가장 낮습니다.' },
                { week: '7~8주', method: '흡입술', color: C.p, desc: '흡입술이 가장 적합한 시기입니다. 8주 미만 45만원의 낙태 비용 가격이 적용됩니다. 수술 시간 10~15분, 당일 귀가 가능합니다.' },
                { week: '9~10주', method: '소파술', color: '#A01E4E', desc: '소파술로 진행합니다. 수술 시간이 20~30분으로 길어지며 회복에 2~3일 소요됩니다. 전문의 정밀 진단이 더욱 중요한 시기입니다.' },
                { week: '11~12주', method: '소파술', color: '#7A1438', desc: '전문의 정밀 진단 후 수술 진행. 임신중절수술 금액과 소요 시간이 증가합니다. 자궁 벽이 얇아지기 시작해 더욱 세심한 시술이 필요합니다.' },
                { week: '13~14주', method: '상담 필요', color: C.amber, desc: '모체 위험이 증가하는 시기입니다. 전문의 심층 상담 후 진행 여부를 결정합니다. 합법 기간 내이나 위험도가 높아 신중한 접근이 필요합니다.' },
              ].map(({ week, method, color, desc }) => (
                <div key={week} style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', background: color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '-14px', border: '3px solid #fff' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: C.tm }}>{week}</span>
                      <span style={{ background: color, color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px' }}>{method}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: C.ts, lineHeight: 1.8, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <InfoBox type="amber">⚠ 임신 주수가 높을수록 위험도가 증가합니다. 결정하셨다면 빠른 내원을 권장합니다.</InfoBox>
          </section>

          <Divider />

          <section>
            <SectionTag>03 가임력 보존과 수술 방법</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>다음 임신에 영향이 있나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              전문의가 안전하게 시행한 임신중절수술은 향후 임신에 영향을 주지 않는 것이 일반적입니다. 연세365산부인과는 자궁 내막 손상을 최소화하는 정교한 수술 기법을 적용합니다. 특히 8주 이내 흡입술은 자궁 내막 손상이 가장 적어 가임력 보존에 가장 유리합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              그러나 반복적인 임신중절수술은 자궁 내막에 누적적인 손상을 줄 수 있으므로 수술 후 적절한 피임 방법을 선택하는 것이 중요합니다. 수술 후 피임 상담도 함께 제공하고 있으니 내원 시 문의해 주시기 바랍니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ border: `0.5px solid ${C.greenBorder}`, borderRadius: '14px', padding: '20px', background: C.greenBg }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.green, marginBottom: '12px' }}>✅ 가임력 보존을 위한 노력</div>
                {['자궁 내막 손상 최소화 수술 기법', '필요 최소한의 기구만 사용', '수술 후 자궁 회복 모니터링', '사후 피임 상담 제공', '정기 검진 권장'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '8px', padding: '7px 0', borderBottom: `0.5px solid ${C.greenBorder}`, fontSize: '13px', color: C.green }}>
                    <span>•</span>{t}
                  </div>
                ))}
              </div>
              <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: '#fff' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.p, marginBottom: '12px' }}>⚠ 주의가 필요한 경우</div>
                {['반복 수술 (자궁 내막 손상 누적)', '수술 후 감염 방치', '처방약 미복용으로 인한 염증', '수술 후 조기 성관계', '사후 검진 미실시'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '8px', padding: '7px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px', color: C.ts }}>
                    <span style={{ color: C.amber }}>!</span>{t}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          <section>
            <SectionTag>04 임신 주수와 검사 결과에 따라 방법이 달라지는 이유</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신 주수와 검사 결과에 따라 수술 방법이 달라지는 이유는 무엇인가요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신 주수가 짧을수록 태낭과 임신 조직의 크기가 작아 흡입술로 안전하게 제거할 수 있습니다. 반면 주수가 높아지면 태낭과 임신 조직의 크기가 커지고 자궁벽도 변화하므로, 소파술 등 다른 접근이 필요해집니다. 이 때문에 초음파 검사 결과가 수술 방법 결정의 핵심 근거가 됩니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              초음파 검사에서는 태낭의 위치(자궁 내 정상 착상 여부), 크기, 임신 주수를 함께 확인합니다. 자궁외 임신이나 불완전 착상이 확인되면 일반적인 임신중절수술과 다른 처치가 필요하므로, 수술 전 초음파 확인이 필수입니다. 마지막 생리일과 초음파 결과 모두를 기준으로 주수를 판단하며, 두 결과가 다를 때는 초음파 수치를 우선합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              개인의 자궁 크기, 자궁 기울기(전굴·후굴), 과거 제왕절개 흉터 유무에 따라서도 수술 접근 방식이 달라질 수 있습니다. 이 때문에 같은 주수라도 수술 방법과 소요 시간이 개인마다 다를 수 있으며, 정확한 안내는 초음파 검사 후에 이루어집니다.
            </p>
            <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden', marginBottom: '16px' }}>
              <div style={{ background: '#F8E8EF', padding: '12px 18px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd }}>확인 항목</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd }}>흡입술 (8주 이내)</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd }}>소파술 (8주 이상)</div>
              </div>
              {[
                ['태낭 크기', '작아 음압으로 제거 가능', '커서 기구 사용 필요'],
                ['자궁벽 두께', '두꺼워 손상 위험 낮음', '얇아져 주의 필요'],
                ['수술 시간', '10~15분', '20~30분'],
                ['출혈량', '적음', '보통~다소 많음'],
                ['회복 기간', '1~2일', '2~3일'],
              ].map(([item, a, b], i) => (
                <div key={item} style={{ padding: '10px 18px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', background: i % 2 === 0 ? C.pb : '#fff', borderTop: `0.5px solid ${C.pbd}` }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm }}>{item}</div>
                  <div style={{ fontSize: '12px', color: C.ts }}>{a}</div>
                  <div style={{ fontSize: '12px', color: C.ts }}>{b}</div>
                </div>
              ))}
            </div>
            <InfoBox type="amber">⚠ 초음파 검사 전에는 주수를 확정할 수 없어 수술 방법과 비용을 사전에 단정하기 어렵습니다. 내원 후 검사 결과를 기준으로 안내드립니다.</InfoBox>
          </section>

          <Divider />

          <section>
            <SectionTag>05 수술 방법 결정 전 의료진에게 알려야 할 건강 정보</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>수술 방법을 결정하기 전 의료진에게 알려야 할 건강 정보는 무엇인가요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              안전한 수술을 위해 의료진은 개인 건강 정보를 사전에 파악해야 합니다. 현재 복용 중인 약물이나 영양제, 알레르기 이력, 과거 수술 경험 등은 수술 방법과 마취 방식에 영향을 줄 수 있습니다. 상담 시 이 정보를 솔직하게 알려주시면 더 안전하게 수술을 준비할 수 있습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              특히 아스피린, 와파린 등 혈액 응고에 영향을 주는 약물은 수술 출혈에 영향을 줄 수 있어 사전 중단이 필요할 수 있습니다. 고혈압, 당뇨, 천식, 갑상선 질환 등 만성 질환이 있거나 이전에 전신 마취를 받은 경험이 있다면 반드시 알려주세요. 이 정보들은 수술 안전성 평가에 사용되며 외부에 공개되지 않습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              과거에 임신중절수술을 받은 경험이 있다면 이것도 알려주시는 것이 좋습니다. 반복 수술의 경우 자궁 내막 상태와 유착 여부를 초음파로 추가 확인할 수 있습니다. 모든 정보는 더 안전한 수술을 위한 것이며, 의료법에 따라 철저히 보호됩니다.
            </p>
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px 24px', marginBottom: '16px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '14px' }}>📋 상담 전 확인 체크리스트</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 20px' }}>
                {[
                  '현재 복용 중인 모든 처방약',
                  '영양제·한약·건강기능식품',
                  '알레르기 이력 (약물·음식·마취제)',
                  '과거 전신마취 경험과 부작용',
                  '만성 질환 유무 (고혈압·당뇨 등)',
                  '과거 자궁·산부인과 수술 경험',
                  '이전 임신중절수술 횟수',
                  '최근 음주·흡연 여부',
                ].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: C.ts, alignItems: 'flex-start' }}>
                    <span style={{ color: C.p, fontWeight: 700, flexShrink: 0 }}>✓</span>{t}
                  </div>
                ))}
              </div>
            </div>
            <InfoBox>건강 정보를 미리 알려주시면 수술 안전성을 높이고 불필요한 검사나 대기 시간을 줄일 수 있습니다. 모든 내용은 의료법에 따라 외부에 공개되지 않습니다.</InfoBox>
          </section>

          <Divider />

          <section style={{ marginBottom: '44px' }}>
            <SectionTag>자주 묻는 질문</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>
              임신중절수술 방법·종류에 관해 자주 묻는 질문
            </h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, marginBottom: '20px', letterSpacing: '-.01em' }}>
              흡입술과 소파술의 차이, 방법 결정 기준, 약물중절 시행 여부와 회복 관련 내용을 정리했습니다.
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
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '22px' }}>사당역 4번출구 · 전문의 직접 집도 · 비밀보장</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '14px', border: '0.5px solid rgba(255,255,255,.4)', padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-method.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px 20px' }}>
          <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: 900, lineHeight: 1.2, marginBottom: '10px', letterSpacing: '-.02em' }}>
            임신중절수술 방법과 종류는<br />어떻게 결정될까요?
          </h1>
          <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '12px', lineHeight: 1.7, marginBottom: '12px' }}>
            흡입술·소파술 차이와 주수별 선택 기준 안내
          </p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['흡입술', '소파술', '주수별 선택', '방법 결정 기준'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 10px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ padding: '18px 16px', background: '#fff', borderBottom: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '13px', fontWeight: 900, color: C.tm, marginBottom: '8px' }}>임신중절수술 방법은 어떤 기준으로 선택하나요?</div>
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            임신중절수술 방법은 임신 주수, 초음파 검사 결과, 자궁 상태를 종합하여 전문의가 결정합니다. 8주 이내는 흡입술, 8주 이상은 소파술이 일반적으로 적용됩니다. 연세365산부인과의원은 약물중절을 시행하지 않습니다.
          </p>
          <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px 14px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: C.pd, marginBottom: '6px' }}>핵심 | 최종 수정일 2026.06</div>
            {['흡입술: 8주 이내 권장', '소파술: 8주 이상 적용', '수술 방법은 초음파 검사 후 결정', '약물중절: 본원 미시행'].map(t => (
              <div key={t} style={{ fontSize: '11px', color: C.pd, padding: '3px 0', borderBottom: `0.5px solid ${C.pbd}` }}>✓ {t}</div>
            ))}
          </div>
        </div>

        <MobileAccordion title="흡입술 vs 소파술 비교" icon="🔬">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '12px' }}>
            임신중절수술 방법은 주수에 따라 결정됩니다. 8주 이내는 흡입술(45만원~), 8~12주는 소파술(60만원~)이 적합합니다. 약물중절은 7주 이내만 가능하며 불완전 유산 위험이 있어 의료진 관리가 필수입니다.
          </p>
          <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '10px', overflow: 'hidden', marginBottom: '10px' }}>
            <div style={{ background: C.p, padding: '10px 14px', fontSize: '12px', fontWeight: 700, color: '#fff' }}>흡입술 (8주 이내 권장)</div>
            <div style={{ padding: '10px 14px', fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>10~15분 · 출혈 적음 · 회복 1~2일 · 자궁 손상 최소 · 45만원~</div>
            <div style={{ background: C.pd, padding: '10px 14px', fontSize: '12px', fontWeight: 700, color: '#fff', borderTop: `0.5px solid ${C.pbd}` }}>소파술 (8~12주)</div>
            <div style={{ padding: '10px 14px', fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>20~30분 · 출혈 보통 · 회복 2~3일 · 60만원~</div>
            <div style={{ background: C.amberBg, padding: '10px 14px', fontSize: '12px', fontWeight: 700, color: C.amber, borderTop: `0.5px solid ${C.pbd}` }}>약물중절 (7주 이내만)</div>
            <div style={{ padding: '10px 14px', fontSize: '12px', color: C.ts, lineHeight: 1.7 }}>불완전 유산 위험. 의료진 관리 필수.</div>
            <div style={{ background: C.pb, padding: '8px 14px', fontSize: '11px', fontWeight: 700, color: C.p, borderTop: `0.5px solid ${C.pbd}`, textAlign: 'center' }}>공통: 수면마취 · 당일귀가 · 비밀보장</div>
          </div>
        </MobileAccordion>

        <MobileAccordion title="주수별 방법 선택 가이드" icon="📅">
          {[
            { week: '4~7주', method: '흡입술', color: C.p, desc: '흡입술로 10~15분 완료. 가장 안전한 시기. 낙태 비용 45만원~' },
            { week: '8~10주', method: '흡입/소파술', color: '#C02860', desc: '주수에 따라 방법 결정. 전문의 진단 필수.' },
            { week: '11~12주', method: '소파술', color: '#7A1438', desc: '소파술 진행. 수술 시간과 비용 증가.' },
            { week: '13~14주', method: '상담 필요', color: C.amber, desc: '위험도 증가. 전문의 심층 상담 필요.' },
          ].map(({ week, method, color, desc }) => (
            <div key={week} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '10px 0', borderBottom: `0.5px solid ${C.pbd}` }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, flexShrink: 0, marginTop: '5px' }} />
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '3px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: C.tm }}>{week}</span>
                  <span style={{ background: color, color: '#fff', fontSize: '9px', fontWeight: 700, padding: '1px 6px', borderRadius: '8px' }}>{method}</span>
                </div>
                <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </MobileAccordion>

        <MobileAccordion title="가임력 보존 안내" icon="🌸">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            전문의가 안전하게 시행한 임신중절수술은 향후 임신에 영향을 주지 않는 것이 일반적입니다. 8주 이내 흡입술이 자궁 내막 손상이 가장 적어 가임력 보존에 유리합니다. 반복 수술은 누적 손상이 있을 수 있으므로 피임 상담을 권장합니다.
          </p>
          <InfoBox type="green">수술 후 피임 상담도 함께 제공합니다. 내원 시 문의해 주세요.</InfoBox>
        </MobileAccordion>

        <MobileAccordion title="주수·검사로 방법이 달라지는 이유" icon="🔍">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            임신 주수가 짧을수록 태낭이 작아 흡입술로 안전하게 제거할 수 있습니다. 주수가 높아지면 태낭이 커지고 자궁벽이 변화하므로 소파술이 필요해집니다. 초음파로 착상 위치와 태낭 크기를 확인한 후 수술 방법이 결정됩니다.
          </p>
          {[['흡입술', '8주 이내 · 태낭 소형'], ['소파술', '8주 이상 · 태낭 커짐'], ['초음파 확인', '방법 결정 근거'], ['주수 차이', '방법·비용 달라짐']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '12px' }}>
              <span style={{ fontWeight: 700, color: C.p }}>{k}</span>
              <span style={{ color: C.ts }}>{v}</span>
            </div>
          ))}
        </MobileAccordion>

        <MobileAccordion title="의료진에게 알려야 할 건강 정보" icon="📋">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            안전한 수술을 위해 복용 중인 약물, 알레르기, 과거 수술 경험, 만성 질환 유무를 상담 전에 알려주세요. 혈액 응고에 영향을 주는 약물은 사전 중단이 필요할 수 있습니다. 모든 정보는 의료법에 따라 보호됩니다.
          </p>
          <div style={{ background: C.pb, borderRadius: '10px', padding: '12px', border: `0.5px solid ${C.pbd}` }}>
            {['복용 중인 처방약·영양제', '알레르기 이력 (약물·마취제)', '만성 질환 유무', '과거 전신마취 경험', '이전 임신중절 횟수'].map(t => (
              <div key={t} style={{ fontSize: '11px', color: C.pd, padding: '4px 0', borderBottom: `0.5px solid ${C.pbd}` }}>✓ {t}</div>
            ))}
          </div>
        </MobileAccordion>

        <div style={{ padding: '16px', borderTop: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#bbb', marginBottom: '6px', letterSpacing: '.05em' }}>자주 묻는 질문</div>
          <div style={{ fontSize: '15px', fontWeight: 900, color: C.tm, marginBottom: '12px' }}>임신중절수술 방법·종류 자주 묻는 질문</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
            {FEATURED_FAQS.map(({ q, a }) => (
              <FeaturedFAQItem key={q} question={q} answer={a} />
            ))}
          </div>
          <Link href="/abortion/faq" style={{ display: 'block', textAlign: 'center', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '11px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p }}>
            전체 217개 FAQ 보기 →
          </Link>
        </div>

        <div style={{ padding: '14px 16px', background: C.pb, borderTop: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#bbb', marginBottom: '8px', letterSpacing: '.04em' }}>의료정보 안내</div>
          <div style={{ fontSize: '11px', color: C.tg, lineHeight: 1.8 }}>
            <div>정보 제공: 연세365산부인과의원</div>
            <div>최종 수정일: 2026년 6월 29일</div>
            <div>출처: 모자보건법, 대한산부인과학회 임상 지침</div>
            <div style={{ marginTop: '6px' }}>본 정보는 일반 의료 안내이며 개인별 진료를 대신하지 않습니다.</div>
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