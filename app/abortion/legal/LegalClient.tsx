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
  { href: '/abortion/info', label: '보호자·보험 안내' },
  { href: '/abortion/faq', label: 'FAQ 70가지' },
  { href: '/abortion/hospital', label: '병원 안내' },
]

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
              낙태 합법화 안내<br />
              <span style={{ fontSize: '24px', fontWeight: 700, opacity: .88 }}>임신중절수술 합법 시기·기준 완벽 정리</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              2021년 낙태죄 폐지 이후 달라진 법적 기준을 안내합니다.<br />
              임신중절수술 합법 시기와 요건을 정확히 확인하세요. · <ViewCounter slug="abortion-legal" />
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
            <SectionTag>01 낙태 합법화 — 현황</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>낙태 합법화 이후 현재 법적 상황</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              2019년 4월 헌법재판소가 낙태죄 처벌 조항에 대해 헌법불합치 결정을 내렸습니다. 이에 따라 2021년 1월 1일부터 형법 제269조(자기낙태죄) 및 제270조(의사낙태죄)가 효력을 상실했습니다. 현재 <strong style={{ color: C.p }}>임신중절수술은 모자보건법 범위 내에서 합법적으로 시행되고 있습니다.</strong>
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              낙태 합법화 이후 임신 14주 이내에는 본인 동의만으로 임신중절수술이 가능합니다. 이는 낙태 수술 합법 시기로 가장 안전하고 낙태 비용 가격도 낮은 시기입니다. 14주~24주는 사회·경제적 사유 등 모자보건법상 인정되는 조건에 해당하는 경우 시술이 가능합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              낙태죄 폐지 이후에도 불법 시술(무허가 의료기관 또는 비전문의 시술)은 여전히 처벌 대상입니다. 반드시 산부인과 전문의가 있는 의료기관에서 합법적으로 시술받으시기 바랍니다. 연세365산부인과는 모든 관련 법규를 준수하며 합법적으로 임신중절수술을 시행합니다.
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
              연세365산부인과는 모든 관련 법규를 준수하며 합법적으로 임신중절수술을 시행합니다. 아래 절차를 따라 안전하게 진행됩니다.
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
          <h1 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-.02em' }}>
            낙태 합법화 안내<br /><span style={{ fontSize: '17px', fontWeight: 700, opacity: .88 }}>임신중절수술 합법 시기·기준</span>
          </h1>
          <div style={{ background: 'rgba(255,255,255,.12)', borderRadius: '10px', padding: '12px 16px', marginTop: '14px' }}>
            <div style={{ color: 'rgba(255,255,255,.75)', fontSize: '11px' }}>낙태죄 폐지 시행일</div>
            <div style={{ color: '#FFD700', fontSize: '22px', fontWeight: 900 }}>2021.01.01 ~</div>
          </div>
        </div>

        <MobileAccordion title="낙태 합법화 현황" icon="⚖️">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            2021년 1월 낙태죄가 폐지되어 임신 14주 이내는 본인 동의만으로 합법적으로 임신중절수술이 가능합니다. 14~24주는 모자보건법상 사유 해당 시 가능하며, 24주 이후는 극히 제한적입니다.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { period: '14주 이내', status: '자유 시술 가능', color: C.green, desc: '본인 동의만으로 가능. 가장 안전한 시기.' },
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