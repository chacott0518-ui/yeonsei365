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
  { href: '/abortion/surgery', label: '수술 절차 안내' },
  { href: '/abortion/recovery', label: '수술 후 관리' },
  { href: '/abortion/faq', label: 'FAQ 70가지' },
  { href: '/abortion/legal', label: '합법화 안내' },
]

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
              임신중절수술 방법·종류<br />
              <span style={{ fontSize: '24px', fontWeight: 700, opacity: .88 }}>흡입술·소파술·약물중절 완전 비교</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              임신 주수와 자궁 상태에 따라 가장 적합한 수술 방법을 선택합니다.<br />
              흡입술, 소파술, 약물중절의 차이와 주수별 권장 방법을 안내합니다. · <ViewCounter slug="abortion-method" />
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
            <SectionTag>01 임신중절수술 방법 종류</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>흡입술 vs 소파술 — 완전 비교</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 방법은 크게 <strong style={{ color: C.p }}>흡입술(진공흡입법)</strong>, <strong style={{ color: C.p }}>소파술(자궁소파술)</strong>, <strong style={{ color: C.p }}>약물중절</strong> 세 가지로 나뉩니다. 연세365산부인과에서는 초음파 정밀 진단 후 임신 주수와 자궁 상태에 맞는 최적의 방법을 전문의가 직접 결정합니다.
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
          <h1 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-.02em' }}>
            임신중절수술 방법·종류<br /><span style={{ fontSize: '17px', fontWeight: 700, opacity: .88 }}>흡입술·소파술·약물중절 비교</span>
          </h1>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['흡입술', '소파술', '약물중절', '주수별 선택'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 10px', borderRadius: '20px' }}>{t}</span>
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