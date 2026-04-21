'use client'
import Link from 'next/link'
import { useState } from 'react'

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
  { href: '/abortion/method', label: '수술 방법 종류' },
  { href: '/abortion/surgery', label: '수술 절차' },
  { href: '/abortion/faq', label: 'FAQ 70가지' },
  { href: '/abortion/legal', label: '합법화 안내' },
]

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
              임신중절수술 후 관리<br />
              <span style={{ fontSize: '24px', fontWeight: 700, opacity: .88 }}>회복기간·주의사항·생리 재개 완벽 안내</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              빠른 회복을 위한 단계별 관리 가이드를 안내합니다.<br />
              수술 당일부터 4주까지 시기별 주의사항을 확인하세요.
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
            <SectionTag>01 단계별 회복 타임라인</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신중절수술 후 회복 단계별 완벽 안내</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 후 회복 기간은 개인차가 있지만 일반적으로 수술 다음 날부터 가벼운 일상생활이 가능합니다. 낙태 수술 후 관리를 잘 하면 빠른 회복이 가능합니다. 연세365산부인과는 수술 당일부터 4주까지 단계별 주의사항과 가능한 활동 범위를 상세히 안내합니다.
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
              대부분 정상적으로 회복되지만, 아래 증상이 발생하면 즉시 내원하여 전문의 진료를 받으셔야 합니다. 연세365산부인과는 야간진료를 운영하여 퇴근 후에도 방문이 가능합니다.
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
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '22px' }}>사당역 4번출구 · 야간진료 운영 · 사후 검진 가능</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '14px', border: '0.5px solid rgba(255,255,255,.4)', padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-recovery.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px 20px' }}>
          <h1 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-.02em' }}>
            임신중절수술 후 관리<br /><span style={{ fontSize: '17px', fontWeight: 700, opacity: .88 }}>회복기간·주의사항 안내</span>
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '16px' }}>
            {[['1~2일', '일상복귀'], ['4~6주', '생리재개'], ['2주', '금지사항'], ['1주내', '사후검진']].map(([v, l]) => (
              <div key={v} style={{ background: 'rgba(255,255,255,.12)', borderRadius: '8px', padding: '8px', textAlign: 'center' }}>
                <div style={{ color: '#FFD700', fontSize: '16px', fontWeight: 900 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '10px' }}>{l}</div>
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