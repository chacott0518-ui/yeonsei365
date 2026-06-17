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
  { href: '/abortion/recovery', label: '수술 후 관리' },
  { href: '/abortion/faq', label: 'FAQ 70가지' },
  { href: '/abortion/hospital', label: '병원 안내' },
]

export default function SurgeryClient() {
  return (
    <>
      {/* ── PC ── */}
      <div className="hidden lg:block">
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-surgery.webp)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          minHeight: '440px', padding: '52px 80px', display: 'flex', gap: '48px', alignItems: 'center',
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {['수술 절차', '당일수술', '수면마취', '안전성 검증'].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ color: '#fff', fontSize: '38px', fontWeight: 900, lineHeight: 1.25, letterSpacing: '-.03em', marginBottom: '16px' }}>
              임신중절수술 절차·안전성<br />
              <span style={{ fontSize: '24px', fontWeight: 700, opacity: .88 }}>수술 당일 전 과정 단계별 완벽 안내</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              임신중절수술 절차가 어떻게 진행되는지 단계별로 안내합니다.<br />
              수술 전 준비부터 마취, 시술, 회복까지 모든 과정을 투명하게 공개합니다.
 · <ViewCounter slug="abortion-surgery" />
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '22px' }}>
              {['산부인과 전문의 직접 집도', '수면마취 전문의 협진', '1인 회복실 운영', '당일귀가 가능'].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '5px 14px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>📞 02-585-3650</a>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ background: 'rgba(255,255,255,.12)', border: '0.5px solid rgba(255,255,255,.25)', borderRadius: '16px', padding: '20px 28px', textAlign: 'center' }}>
              <div style={{ color: 'rgba(255,255,255,.75)', fontSize: '11px', marginBottom: '4px' }}>총 소요 시간</div>
              <div style={{ color: '#FFD700', fontSize: '52px', fontWeight: 900, lineHeight: 1 }}>2~3</div>
              <div style={{ color: 'rgba(255,255,255,.9)', fontSize: '13px', marginTop: '4px' }}>시간 (검사·수술·회복 포함)</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[['10~15분', '실제 수술'], ['수면마취', '무통 진행'], ['당일', '귀가 가능'], ['1인실', '회복 진행']].map(([v, l]) => (
                <div key={v} style={{ background: 'rgba(255,255,255,.12)', border: '0.5px solid rgba(255,255,255,.2)', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                  <div style={{ color: '#FFD700', fontSize: '14px', fontWeight: 900 }}>{v}</div>
                  <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '10px', marginTop: '3px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: C.tg, padding: '20px 0 32px' }}>
            <Link href="/" style={{ color: C.tg, textDecoration: 'none' }}>홈</Link><span>›</span>
            <Link href="/abortion" style={{ color: C.tg, textDecoration: 'none' }}>임신중절클리닉</Link><span>›</span>
            <span style={{ color: C.p, fontWeight: 700 }}>수술 절차·안전성</span>
          </div>

          {/* 목차 */}
          <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px 28px', marginBottom: '44px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#bbb', marginBottom: '14px', letterSpacing: '.06em' }}>목차</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px 24px' }}>
              {['수술 당일 절차 5단계', '수술 전 준비사항', '수면마취 안전성', '수술 안전 시스템', '수술 중 모니터링', '응급 대처 시스템'].map((t, i) => (
                <div key={t} style={{ fontSize: '13px', color: C.p, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ width: '18px', height: '18px', background: C.p, color: '#fff', borderRadius: '50%', fontSize: '9px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* 섹션 1: 수술 절차 */}
          <section>
            <SectionTag>01 임신중절수술 당일 절차 5단계</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>수술 당일 진행 순서 — 단계별 완벽 안내</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 절차가 어떻게 진행되는지 미리 알면 막연한 불안감을 크게 줄일 수 있습니다. 연세365산부인과는 수술 당일 모든 절차를 투명하게 안내하며, 단계마다 충분한 설명을 제공합니다. 전체 소요 시간은 검사·상담·수술·회복을 포함하여 약 2~3시간입니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              수술 당일 반드시 기억해야 할 것은 <strong style={{ color: C.p }}>6시간 이상 완전 금식(물 포함)</strong>입니다. 수면마취를 안전하게 진행하기 위해 반드시 필요한 조건입니다. 금식 미준수 시 마취 도중 위 내용물이 폐로 유입되는 흡인 사고가 발생할 수 있어 수술이 당일 연기됩니다. 또한 신분증을 반드시 지참해야 하며, 수면마취 후에는 자가 운전이 불가합니다.
            </p>

            {/* 타임라인 */}
            <div style={{ position: 'relative', marginBottom: '24px' }}>
              <div style={{ position: 'absolute', top: '20px', left: '20px', right: '20px', height: '3px', background: `linear-gradient(90deg, ${C.p}, ${C.pp})`, zIndex: 0 }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '16px', position: 'relative', zIndex: 1 }}>
                {[
                  { n: '1', t: '내원·접수', s: '신분증·동의서 작성', color: C.p, time: '0분' },
                  { n: '2', t: '초음파·혈액검사', s: '주수 확인 정밀 진단', color: '#C02860', time: '15~20분' },
                  { n: '3', t: '전문의 상담', s: '방법·비용 최종 확인', color: '#A01E4E', time: '10~15분' },
                  { n: '4', t: '수면마취·수술', s: '10~15분 무통 진행', color: '#831638', time: '10~30분' },
                  { n: '5', t: '회복실·귀가', s: '1인실 1~2시간 안정', color: C.pp, time: '1~2시간' },
                ].map(({ n, t, s, color, time }) => (
                  <div key={n} style={{ textAlign: 'center' }}>
                    <div style={{ width: '42px', height: '42px', background: color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '17px', fontWeight: 900, margin: '0 auto 10px', border: '3px solid #fff', boxShadow: `0 0 0 2px ${color}` }}>{n}</div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color, marginBottom: '3px' }}>{t}</div>
                    <div style={{ fontSize: '11px', color: C.tg, lineHeight: 1.5, marginBottom: '4px' }}>{s}</div>
                    <div style={{ background: color, color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px', display: 'inline-block' }}>{time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 각 단계 상세 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              {[
                {
                  n: '01', title: '내원 및 접수', color: C.p,
                  content: '신분증을 지참하시고 접수대에서 내원 목적을 말씀해 주시면 됩니다. 모든 대화는 철저히 비밀이 보장되며 독립된 상담 공간으로 안내해 드립니다. 동의서는 수술 과정, 마취 특성, 가능한 부작용, 사후 관리 수칙 등이 포함되어 있으며, 내용을 충분히 이해하신 후 서명합니다. 어떤 질문이든 편하게 물어보실 수 있습니다.',
                  items: ['신분증 필수 지참', '동의서 작성 및 설명', '비밀보장 상담실 운영', '어떤 질문도 가능']
                },
                {
                  n: '02', title: '초음파·혈액검사', color: '#C02860',
                  content: '정확한 임신 주수 확인을 위한 초음파 검사와 수술 안전을 위한 기본 혈액 검사를 진행합니다. 초음파로 태낭 위치(자궁 내 정상 착상 여부), 임신 주수, 자궁 상태를 정밀하게 확인합니다. 자궁외 임신이 확인되는 경우 일반 임신중절수술이 아닌 별도의 긴급 처치가 필요하므로 초음파 확인은 절대적으로 중요합니다. 혈액 검사로는 혈액형, 빈혈 여부, 응고 기능 등을 확인합니다.',
                  items: ['정밀 초음파 주수 확인', '자궁외 임신 여부 확인', '혈액형·빈혈·응고 검사', '검사 결과 즉시 안내']
                },
                {
                  n: '03', title: '전문의 상담', color: '#A01E4E',
                  content: '검사 결과를 바탕으로 산부인과 전문의가 직접 상담합니다. 임신 주수에 따라 흡입술 또는 소파술 중 가장 적합한 방법을 결정하고, 임신중절수술 금액을 최종 확인합니다. 수술 과정에서 발생할 수 있는 상황, 마취 방법, 회복 기간 등을 상세히 설명드립니다. 이 단계에서 여전히 수술 여부를 결정하지 않아도 되며, 결정을 위한 충분한 시간을 드립니다.',
                  items: ['수술 방법 최종 결정', '임신중절수술 금액 확인', '수술 과정 상세 설명', '결정 기회 재확인']
                },
                {
                  n: '04', title: '수면마취 및 수술', color: '#831638',
                  content: '수면마취 전문의와 협진하여 안전한 정맥마취(수면마취)를 진행합니다. 마취 시작 후 수 초 내에 의식이 없어지며 수술 중 통증과 불안감을 전혀 느끼지 않습니다. 실제 수술 시간은 8~12주 기준 10~15분 내외이며, 이 과정에서 혈압, 심박수, 혈중 산소 포화도를 지속적으로 모니터링합니다. 수술 완료 후 마취에서 깨어날 때까지 의료진이 곁에서 케어합니다.',
                  items: ['수면마취 전문의 협진', '의식 없는 상태로 진행', '10~15분 실제 수술', '전 과정 활력징후 모니터링']
                },
                {
                  n: '05', title: '1인 회복실 안정 후 귀가', color: C.pp,
                  content: '수술 후 독립된 1인 회복실에서 충분히 안정을 취합니다. 마취에서 완전히 깨어날 때까지 의료진이 모니터링하며, 의식이 명확해지면 가벼운 수분 섭취가 가능합니다. 처방약 복용 방법, 주의사항, 사후 검진 일정에 대한 안내를 받은 후 귀가합니다. 수면마취 특성상 당일 자가 운전은 절대 불가하므로 대중교통 이용 또는 보호자와 함께 귀가해야 합니다.',
                  items: ['1인 프라이빗 회복실', '의료진 지속 모니터링', '처방약 복용 교육', '대중교통 귀가 권장']
                },
              ].map(({ n, title, color, content, items }) => (
                <div key={n} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', overflow: 'hidden', background: '#fff' }}>
                  <div style={{ background: color, padding: '14px 20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,.2)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 900, flexShrink: 0 }}>{n}</span>
                    <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>{title}</span>
                  </div>
                  <div style={{ padding: '18px 20px', display: 'grid', gridTemplateColumns: '1fr 220px', gap: '20px' }}>
                    <p style={{ fontSize: '13px', color: C.ts, lineHeight: 1.95, margin: 0 }}>{content}</p>
                    <div style={{ background: C.pb, borderRadius: '10px', padding: '14px' }}>
                      {items.map(item => (
                        <div key={item} style={{ display: 'flex', gap: '6px', padding: '5px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '12px', color: C.pd }}>
                          <span style={{ color, fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <InfoBox type="amber">⚠ 수술 6시간 전부터 물 포함 완전 금식. 신분증 필수. 수면마취 후 자가 운전 절대 불가.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 2: 수술 전 준비사항 */}
          <section>
            <SectionTag>02 수술 전 준비사항 완벽 체크리스트</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>수술 당일 이것만 확인하세요</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 전 준비사항을 미리 확인하면 수술 당일 더욱 원활하게 진행됩니다. 특히 금식은 수면마취 안전의 핵심이므로 반드시 지켜야 합니다. 수술 당일 아침부터 아무것도 드시지 않는 것이 가장 안전합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              복용 중인 약물이 있다면 반드시 의료진에게 알려주세요. 아스피린, 와파린 등 혈액응고제는 수술 출혈을 증가시킬 수 있어 사전에 중단이 필요합니다. 오메가3, 비타민E 등 일부 영양제도 혈액 응고에 영향을 줄 수 있으므로 복용 중인 모든 약물과 영양제 목록을 상담 시 알려주시기 바랍니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginBottom: '24px' }}>
              {[
                { icon: '🪪', title: '신분증 (필수)', desc: '주민등록증 또는 운전면허증. 본인 확인을 위해 반드시 지참해야 합니다. 여권도 가능합니다.', required: true },
                { icon: '⏱️', title: '6시간 금식 (필수)', desc: '물·껌·사탕·우유 포함 모든 음식물 완전 금식. 수면마취 흡인 사고 예방을 위한 절대 원칙입니다.', required: true },
                { icon: '💊', title: '복용 약 목록 (필수)', desc: '현재 복용 중인 모든 처방약, 영양제, 한약을 의료진에게 고지해야 합니다. 수술 전 중단이 필요한 약물이 있을 수 있습니다.', required: true },
                { icon: '👗', title: '편한 복장', desc: '꽉 끼지 않는 넉넉한 복장을 권장합니다. 치마 또는 헐렁한 바지가 적합하며, 수술복으로 갈아입는 과정이 있습니다.', required: false },
                { icon: '🩸', title: '개인 생리대', desc: '수술 후 출혈에 대비한 생리대를 준비해 오시면 편리합니다. 병원에도 준비되어 있지만 개인 제품을 선호하시는 경우를 위해 안내드립니다.', required: false },
                { icon: '👟', title: '편한 신발·귀중품 최소화', desc: '신고 벗기 편한 신발을 권장합니다. 귀중품은 가급적 지참하지 않는 것이 좋습니다. 수면마취 후 판단력이 일시적으로 저하될 수 있습니다.', required: false },
              ].map(({ icon, title, desc, required }) => (
                <div key={title} style={{ border: `0.5px solid ${required ? C.p : C.pbd}`, borderRadius: '12px', padding: '18px', background: required ? C.pb : '#fff' }}>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{icon}</div>
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
                  '개인 생리대 준비',
                  '편한 복장 미리 준비',
                ].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: C.ts, alignItems: 'flex-start' }}>
                    <span style={{ width: '18px', height: '18px', background: C.p, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', flexShrink: 0, marginTop: '1px' }}>✓</span>{t}
                  </div>
                ))}
              </div>
            </div>
            <InfoBox>수술 당일 아침 네일아트·매니큐어는 반드시 제거하세요. 마취 중 혈중 산소 포화도 모니터링에 방해가 됩니다.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 3: 수면마취 안전성 */}
          <section>
            <SectionTag>03 수면마취 안전성</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>수면마취 — 어떻게 진행되나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              수면마취(정맥마취)는 정맥을 통해 마취제를 투여하여 의식이 없는 상태에서 수술을 진행하는 방법입니다. 수술 중 통증과 공포감을 전혀 느끼지 않으며, 마취 시작 후 수 초 내에 깊은 잠에 드는 것처럼 의식이 없어집니다. 수술 완료 후 마취가 종료되면 서서히 의식을 회복합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              연세365산부인과는 마취 전 환자의 체중, 나이, 건강 상태, 과거 마취 경험 등을 종합적으로 고려하여 가장 적절한 마취 용량을 정밀하게 계산합니다. 수술 전 혈액 검사로 마취에 영향을 줄 수 있는 요인들을 미리 확인하며, 마취 중에는 혈압, 심박수, 혈중 산소 포화도, 체온을 지속적으로 모니터링합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              수면마취의 가장 중요한 안전 전제는 금식입니다. 위 내용물이 있는 상태에서 마취를 받으면 구토 반응이 일어나고, 이때 위 내용물이 폐로 흡인되는 심각한 합병증이 발생할 수 있습니다. 이 때문에 수술 6시간 전부터 물을 포함한 모든 음식물의 완전 금식이 절대적으로 필요합니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '14px' }}>수면마취 진행 과정</div>
                {[
                  { step: '마취 전 확인', desc: '활력징후 측정, 금식 여부 재확인, 알레르기 이력 확인' },
                  { step: '정맥 라인 확보', desc: '손등 또는 팔꿈치 안쪽에 정맥 주사 삽입' },
                  { step: '마취제 투여', desc: '프로포폴 등 안전한 마취제 정맥 투여, 수 초 내 의식 소실' },
                  { step: '수술 진행', desc: '의식 없는 상태로 무통 수술 진행, 지속적 모니터링' },
                  { step: '마취 종료', desc: '수술 완료 후 마취 중단, 서서히 의식 회복 시작' },
                  { step: '회복실 이동', desc: '의식 완전 회복까지 1인 회복실에서 전문 케어' },
                ].map(({ step, desc }, i) => (
                  <div key={step} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
                    <span style={{ width: '22px', height: '22px', background: C.p, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>{i + 1}</span>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '2px' }}>{step}</div>
                      <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', marginBottom: '14px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '14px' }}>수면마취 중 모니터링 항목</div>
                  {[
                    ['혈압', '저혈압·고혈압 즉시 감지'],
                    ['심박수', '부정맥 실시간 모니터링'],
                    ['혈중 산소', '폐 기능 지속 확인'],
                    ['체온', '저체온증 예방 관리'],
                    ['마취 깊이', '적정 마취 수준 유지'],
                  ].map(([item, desc]) => (
                    <div key={item} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px' }}>
                      <span style={{ color: C.p, fontWeight: 700 }}>{item}</span>
                      <span style={{ color: C.ts }}>{desc}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: C.greenBg, border: `0.5px solid ${C.greenBorder}`, borderRadius: '14px', padding: '16px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: C.green, marginBottom: '8px' }}>✅ 수면마취 장점</div>
                  {['수술 중 통증·공포 없음', '짧은 수술 시간', '당일 귀가 가능', '기억에 남지 않음', '빠른 마취 회복'].map(t => (
                    <div key={t} style={{ fontSize: '12px', color: C.green, padding: '4px 0', borderBottom: `0.5px solid ${C.greenBorder}` }}>• {t}</div>
                  ))}
                </div>
              </div>
            </div>
            <InfoBox type="amber">수면마취 후 약 4~6시간 동안 판단력 저하가 있을 수 있습니다. 당일 중요한 결정이나 자가 운전은 절대 피해야 합니다.</InfoBox>
          </section>

          <Divider />

          {/* 섹션 4: 안전 시스템 */}
          <section>
            <SectionTag>04 연세365 수술 안전 시스템</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>믿을 수 있는 수술 안전 시스템</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술의 안전성은 집도의의 전문성, 마취 시스템, 응급 대처 능력에 달려 있습니다. 연세365산부인과는 산부인과 전문의가 모든 수술을 직접 집도하며, 풍부한 임상 경험을 바탕으로 각 환자의 상태에 맞는 최적의 수술 방법을 선택합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              수술실에는 응급 상황 발생 시 즉각적으로 대처할 수 있는 응급 약품과 의료 장비가 완비되어 있습니다. 인근 상급 병원과의 협력 체계를 구축하여 만일의 사태에도 신속한 이송이 가능합니다. 모든 수술 기구는 1회용이거나 완벽한 멸균 과정을 거치며, 수술실은 정기적으로 소독·방역됩니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              연세365산부인과는 비전문의 대리 수술, 무허가 약물 사용, 부적절한 마취 시행 등 불법·비윤리적 행위를 일절 하지 않습니다. 모든 과정은 의료법과 의학 표준 지침에 따라 진행되며, 환자의 안전이 최우선입니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginBottom: '24px' }}>
              {[
                { icon: '👨‍⚕️', title: '전문의 직접 집도', desc: '산부인과 전문의가 모든 수술을 직접 집도합니다. 비전문의 대리 수술은 절대 없으며, 풍부한 임상 경험으로 안전하게 진행합니다.' },
                { icon: '💉', title: '마취 전문의 협진', desc: '수면마취는 마취 전문의와 협진하여 안전하게 진행합니다. 환자 상태에 맞는 정밀한 마취 용량을 계산하고 전 과정을 모니터링합니다.' },
                { icon: '🏥', title: '응급 처치 시스템', desc: '응급 약품과 의료 장비를 완비하고 있습니다. 인근 상급 병원과의 협력 체계로 만일의 사태에도 신속 대응이 가능합니다.' },
                { icon: '🔬', title: '멸균 수술 환경', desc: '모든 수술 기구는 1회용이거나 완벽한 고압증기 멸균을 거칩니다. 수술실은 정기적 소독으로 감염 위험을 최소화합니다.' },
                { icon: '📊', title: '수술 전 정밀 검사', desc: '혈액 검사로 빈혈, 응고 이상, 감염 여부를 미리 파악합니다. 초음파로 자궁 상태와 임신 주수를 정밀 확인한 후 수술합니다.' },
                { icon: '📋', title: '수술 기록 보관', desc: '모든 수술 과정과 마취 기록을 상세히 문서화하고 보관합니다. 사후 관리와 문제 발생 시 신속한 대응의 기반이 됩니다.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: '#fff' }}>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>{title}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.8 }}>{desc}</div>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* 섹션 5: 수술 후 바로 알아야 할 것 */}
          <section>
            <SectionTag>05 수술 직후 — 회복실 안내</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>수술 후 회복실에서 무엇이 일어나나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              수술이 완료되면 즉시 1인 회복실로 이동합니다. 마취에서 완전히 깨어날 때까지 의료진이 옆에서 케어하며, 혈압과 맥박을 주기적으로 체크합니다. 수술 후 처음 깨어나면 약간의 어지러움, 구역감, 졸음 등이 있을 수 있으나 이는 마취 후 자연스러운 반응으로 시간이 지나면서 사라집니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              1~2시간 안정을 취한 후 의료진이 귀가 가능 여부를 판단합니다. 회복 중에 가벼운 수분 섭취가 가능하며, 귀가 전 처방약 복용 방법, 수술 후 주의사항, 사후 검진 일정에 대한 자세한 안내를 받습니다. 집에 도착한 후에도 궁금한 점이 있으면 언제든 전화로 문의하실 수 있습니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div style={{ border: `0.5px solid ${C.greenBorder}`, borderRadius: '14px', padding: '20px', background: C.greenBg }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.green, marginBottom: '14px' }}>✅ 회복실에서 가능한 것</div>
                {['가벼운 수분 섭취 (의료진 확인 후)', '핸드폰 확인', '보호자 연락', '처방약 수령', '사후 안내 청취'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '8px', padding: '7px 0', borderBottom: `0.5px solid ${C.greenBorder}`, fontSize: '13px', color: C.green }}>
                    <span>•</span>{t}
                  </div>
                ))}
              </div>
              <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: C.pb }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.p, marginBottom: '14px' }}>⛔ 회복실에서 삼가야 할 것</div>
                {['자리에서 갑자기 일어나기', '자가 운전 시도', '중요한 결정·서명', '과도한 활동', '금식 해제 전 음식 섭취'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '8px', padding: '7px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px', color: C.ts }}>
                    <span style={{ color: C.p }}>×</span>{t}
                  </div>
                ))}
              </div>
            </div>
            <InfoBox>퇴원 후 24시간 이내에 이상 증상(고열, 과다출혈, 심한 복통)이 발생하면 즉시 연락하세요. 야간에도 긴급 연락이 가능합니다.</InfoBox>
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
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.7)', marginBottom: '22px' }}>당일예약·당일수술 · 전문의 직접 집도 · 비밀보장</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '14px', border: '0.5px solid rgba(255,255,255,.4)', padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 모바일 ── */}
      <div className="lg:hidden">
        <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-surgery.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px 20px' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {['수술 절차', '당일수술', '수면마취', '안전성'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 10px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
          <h2 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-.02em' }}>
            임신중절수술 절차·안전성<br /><span style={{ fontSize: '17px', fontWeight: 700, opacity: .88 }}>수술 당일 전 과정 단계별 안내</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '14px' }}>
            {[['2~3시간', '총 소요'], ['10~15분', '실제 수술'], ['수면마취', '무통 진행'], ['당일귀가', '1인 회복실']].map(([v, l]) => (
              <div key={v} style={{ background: 'rgba(255,255,255,.12)', borderRadius: '8px', padding: '8px', textAlign: 'center' }}>
                <div style={{ color: '#FFD700', fontSize: '14px', fontWeight: 900 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '10px', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <MobileAccordion title="수술 당일 절차 5단계" icon="📋">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '12px' }}>
            수술 당일 전체 소요 시간은 검사·상담·수술·회복 포함 약 2~3시간입니다. 실제 수술 시간은 10~15분이며, 수면마취로 통증 없이 진행됩니다.
          </p>
          {['내원·접수 및 동의서 작성', '초음파·혈액검사 (15~20분)', '전문의 상담 및 비용 확인', '수면마취 후 시술 (10~15분)', '1인 회복실 안정 후 당일 귀가'].map((s, i) => (
            <div key={s} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '8px 0', borderBottom: `0.5px solid ${C.pbd}` }}>
              <span style={{ width: '24px', height: '24px', background: C.p, borderRadius: '50%', color: '#fff', fontSize: '11px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
              <span style={{ fontSize: '12px', color: C.ts, fontWeight: 600 }}>{s}</span>
            </div>
          ))}
          <InfoBox type="amber">6시간 이상 완전 금식 필수. 신분증 지참 필수. 수면마취 후 자가 운전 불가.</InfoBox>
        </MobileAccordion>

        <MobileAccordion title="수술 전 준비사항" icon="✅">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            수술 6시간 전 완전 금식(물 포함)이 필수입니다. 신분증을 반드시 지참하세요. 복용 중인 약물이 있다면 모두 의료진에게 알려주세요. 네일아트는 반드시 제거해야 마취 모니터링이 가능합니다.
          </p>
          {[['신분증 (필수)', '주민등록증 또는 운전면허증'], ['6시간 금식 (필수)', '물·껌 포함 완전 금식'], ['복용약 목록', '처방약·영양제 모두 고지'], ['네일아트 제거', '마취 모니터링 필수'], ['편한 복장', '넉넉한 바지 또는 치마']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '12px' }}>
              <span style={{ fontWeight: 700, color: C.tm }}>{k}</span>
              <span style={{ color: C.tg, fontSize: '11px' }}>{v}</span>
            </div>
          ))}
        </MobileAccordion>

        <MobileAccordion title="수면마취 안전성" icon="💉">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            수면마취는 정맥을 통해 마취제를 투여해 의식 없는 상태에서 수술을 진행합니다. 수술 중 통증과 공포감이 전혀 없으며, 수술 내내 혈압·심박수·혈중 산소를 모니터링합니다. 마취 전문의와 협진하여 안전하게 진행합니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[['혈압 모니터링', '실시간'], ['심박수 체크', '지속'], ['산소 포화도', '모니터링'], ['체온 관리', '저체온 예방']].map(([k, v]) => (
              <div key={k} style={{ background: C.pb, borderRadius: '8px', padding: '8px', border: `0.5px solid ${C.pbd}`, textAlign: 'center' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: C.p }}>{k}</div>
                <div style={{ fontSize: '10px', color: C.tg }}>{v}</div>
              </div>
            ))}
          </div>
        </MobileAccordion>

        <MobileAccordion title="수술 안전 시스템" icon="🏥">
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            산부인과 전문의 직접 집도, 마취 전문의 협진, 응급 장비 완비, 멸균 수술 환경, 인근 상급 병원 협력 체계를 갖추고 있습니다. 비전문의 대리 수술은 절대 없으며 모든 과정은 의료법과 표준 지침을 준수합니다.
          </p>
          <InfoBox type="green">전문의 직접 집도 · 마취 전문의 협진 · 응급 장비 완비 · 멸균 수술 환경</InfoBox>
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