'use client'
import Link from 'next/link'

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

const REVIEWS = [
  { name: '20대 직장인', tag: '임신초기낙태', stars: 5, content: '혼자 왔는데 전혀 눈치 주지 않으시고 따뜻하게 상담해 주셨어요. 수술도 빠르게 끝나고 회복실에서 1시간 정도 쉬고 혼자 귀가했습니다. 낙태 비용도 처음 안내받은 그대로라 믿음이 갔어요. 사당역에서 가까워서 교통도 편했고 비밀도 완벽하게 지켜졌습니다.' },
  { name: '30대 직장인', tag: '임신중절수술 후기', stars: 5, content: '사당역에서 가까워서 퇴근 후 방문했어요. 야간진료가 있어서 너무 편했습니다. 선생님께서 판단하지 않으시고 전문적으로 상담해 주셔서 마음이 편했어요. 임신중절수술 금액도 처음에 안내받은 대로였고 추가 비용이 전혀 없었습니다.' },
  { name: '20대 학생', tag: '임신중절수술', stars: 5, content: '처음이라 너무 두려웠는데 원장님이 처음부터 끝까지 설명해 주셔서 안심이 됐어요. 수면마취라 수술 중 아무것도 몰랐고 깨어나니 끝나 있었어요. 낙태 비용 가격도 투명하게 공개되어 있어서 좋았습니다. 임신중절수술 병원 고민하신다면 여기 강추합니다.' },
  { name: '30대 기혼자', tag: '낙태수술 후기', stars: 5, content: '결혼 후 임신이 되었는데 여러 사정으로 중절수술을 결정했습니다. 상담부터 수술까지 어떤 판단이나 눈치도 없이 의료적으로 도와주셔서 감사했어요. 1인 회복실에서 충분히 쉰 후 귀가했는데 그 점이 특히 좋았습니다.' },
  { name: '20대 미혼모', tag: '임신초기중절수술', stars: 5, content: '혼자서 결정하고 혼자 방문했어요. 처음에 너무 무서웠는데 간호사 선생님부터 원장님까지 너무 친절하게 대해주셔서 마음이 놓였습니다. 수술 후 관리도 꼼꼼하게 알려주셔서 빠르게 회복할 수 있었어요.' },
  { name: '20대 직장인', tag: '낙태 비용 후기', stars: 5, content: '다른 병원에서 낙태 비용을 알아봤는데 처음에 낮게 안내하고 나중에 추가 비용이 발생하는 경우가 있더라고요. 연세365는 처음 안내받은 임신중절수술 금액 그대로 결제했습니다. 추가 비용 없이 처방약까지 다 포함이라 정말 믿음직했어요.' },
]

const RELATED = [
  { href: '/abortion', label: '임신중절수술이란' },
  { href: '/abortion/cost', label: '금액·비용 안내' },
  { href: '/abortion/method', label: '수술 방법 종류' },
  { href: '/abortion/recovery', label: '수술 후 관리' },
  { href: '/abortion/faq', label: 'FAQ 70가지' },
  { href: '/abortion/hospital', label: '병원 안내' },
]

export default function ReviewClient() {
  return (
    <>
      <div className="hidden lg:block">
        <div style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-main.webp)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          minHeight: '420px', padding: '52px 80px', display: 'flex', gap: '48px', alignItems: 'center',
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {['임신중절수술 후기', '낙태수술 후기', '실제 방문 사례', '비밀보장'].map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ color: '#fff', fontSize: '38px', fontWeight: 900, lineHeight: 1.25, letterSpacing: '-.03em', marginBottom: '16px' }}>
              임신중절수술 후기·사례<br />
              <span style={{ fontSize: '24px', fontWeight: 700, opacity: .88 }}>연세365산부인과 실제 방문 후기</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              낙태수술 후기, 임신초기중절수술 후기 등 실제 방문하신 분들의<br />
              솔직한 경험을 안내합니다.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>📞 02-585-3650</a>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ background: 'rgba(255,255,255,.12)', border: '0.5px solid rgba(255,255,255,.25)', borderRadius: '16px', padding: '20px 28px', textAlign: 'center' }}>
              <div style={{ color: 'rgba(255,255,255,.75)', fontSize: '11px', marginBottom: '4px' }}>방문 후기 평점</div>
              <div style={{ color: '#FFD700', fontSize: '48px', fontWeight: 900, lineHeight: 1 }}>★★★★★</div>
              <div style={{ color: 'rgba(255,255,255,.9)', fontSize: '13px', marginTop: '4px' }}>실제 방문자 평균 5.0</div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: C.tg, padding: '20px 0 32px' }}>
            <Link href="/" style={{ color: C.tg, textDecoration: 'none' }}>홈</Link><span>›</span>
            <Link href="/abortion" style={{ color: C.tg, textDecoration: 'none' }}>임신중절클리닉</Link><span>›</span>
            <span style={{ color: C.p, fontWeight: 700 }}>수술 후기·사례</span>
          </div>

          <section>
            <SectionTag>01 임신중절수술 후기</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>연세365산부인과 실제 방문 후기</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 후기는 병원을 선택할 때 중요한 참고 자료입니다. 연세365산부인과를 방문하신 분들의 공통적인 후기는 <strong style={{ color: C.p }}>따뜻한 상담, 빠른 수술, 비밀보장 철저, 추가 비용 없음</strong>입니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              낙태수술 후기를 보실 때는 병원의 전문성, 비밀보장 여부, 낙태 비용 가격의 투명성을 함께 확인하시는 것이 좋습니다. 연세365산부인과는 임신중절수술 금액을 사전에 투명하게 공개하며, 상담 시 안내된 금액 외 추가 비용은 절대 없습니다.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '24px' }}>
              {REVIEWS.map(({ name, tag, stars, content }) => (
                <div key={name} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: '#fff' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ width: '36px', height: '36px', background: C.pb, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>👤</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm }}>{name}</div>
                      <div style={{ fontSize: '11px', color: C.p, fontWeight: 600 }}>{tag}</div>
                    </div>
                  </div>
                  <div style={{ color: '#FFD700', fontSize: '14px', marginBottom: '10px' }}>{'★'.repeat(stars)}</div>
                  <p style={{ fontSize: '13px', color: C.ts, lineHeight: 1.8, margin: 0 }}>{content}</p>
                </div>
              ))}
            </div>
            <InfoBox>후기 내용은 실제 방문자의 경험을 바탕으로 작성되었습니다. 개인정보 보호를 위해 이름과 일부 내용은 변경되었습니다.</InfoBox>
          </section>

          <Divider />

          <section>
            <SectionTag>02 공통 후기 키워드</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>방문자들이 공통으로 말하는 것</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              임신중절수술 후기에서 반복적으로 언급되는 키워드를 정리했습니다. 낙태수술 병원 선택 시 참고하세요.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px' }}>
              {[
                { icon: '💬', keyword: '따뜻한 상담', desc: '판단 없이 따뜻하게 상담해준다는 후기가 가장 많습니다.' },
                { icon: '⚡', keyword: '빠른 수술', desc: '수술 시간이 짧고 당일 귀가가 가능합니다.' },
                { icon: '🔒', keyword: '철저한 비밀보장', desc: '비밀이 완벽하게 지켜진다는 후기가 많습니다.' },
                { icon: '💰', keyword: '추가 비용 없음', desc: '처음 안내받은 낙태 비용 가격 그대로 결제됩니다.' },
              ].map(({ icon, keyword, desc }) => (
                <div key={keyword} style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '18px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>{icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.p, marginBottom: '6px' }}>{keyword}</div>
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
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '22px' }}>사당역 4번출구 · 비밀보장 · 당일예약·당일수술</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '14px', border: '0.5px solid rgba(255,255,255,.4)', padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-main.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px 20px' }}>
          <h1 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-.02em' }}>
            임신중절수술 후기·사례<br /><span style={{ fontSize: '17px', fontWeight: 700, opacity: .88 }}>실제 방문자 후기</span>
          </h1>
          <div style={{ color: '#FFD700', fontSize: '20px', marginTop: '10px' }}>★★★★★ 평균 5.0</div>
        </div>

        <div style={{ padding: '16px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '14px' }}>실제 방문 후기</div>
          {REVIEWS.slice(0, 4).map(({ name, tag, stars, content }) => (
            <div key={name} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px', background: '#fff', marginBottom: '10px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ width: '30px', height: '30px', background: C.pb, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>👤</div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: C.tm }}>{name}</div>
                  <div style={{ fontSize: '10px', color: C.p, fontWeight: 600 }}>{tag}</div>
                </div>
                <div style={{ marginLeft: 'auto', color: '#FFD700', fontSize: '12px' }}>{'★'.repeat(stars)}</div>
              </div>
              <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.8, margin: 0 }}>{content}</p>
            </div>
          ))}
        </div>

        <div style={{ padding: '0 16px 16px', background: C.pb, borderTop: `0.5px solid ${C.pbd}` }}>
          <div style={{ paddingTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {RELATED.slice(0, 4).map(({ href, label }) => (
              <Link key={href} href={href} style={{ display: 'block', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '10px 12px', textDecoration: 'none', fontSize: '11px', fontWeight: 700, color: C.p, lineHeight: 1.4 }}>→ {label}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}