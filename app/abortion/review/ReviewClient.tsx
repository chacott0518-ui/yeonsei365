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

const REVIEWS = [
  { name: '20대 직장인', tag: '임신초기낙태', stars: 5, content: '혼자 왔는데 전혀 눈치 주지 않으시고 따뜻하게 상담해 주셨어요. 수술도 빠르게 끝나고 회복실에서 1시간 정도 쉬고 혼자 귀가했습니다. 낙태 비용도 처음 안내받은 그대로라 믿음이 갔어요. 사당역에서 가까워서 교통도 편했고 비밀도 완벽하게 지켜졌습니다.' },
  { name: '30대 직장인', tag: '임신중절수술 후기', stars: 5, content: '사당역에서 가까워서 방문했어요. 연중무휴 진료라 일정 맞추기 편했습니다. 선생님께서 판단하지 않으시고 전문적으로 상담해 주셔서 마음이 편했어요. 임신중절수술 비용도 상담 시 안내받은 내용과 동일하게 진행됐습니다.' },
  { name: '20대 학생', tag: '임신중절수술', stars: 5, content: '처음이라 너무 두려웠는데 원장님이 처음부터 끝까지 설명해 주셔서 안심이 됐어요. 수면마취라 수술 중 아무것도 몰랐고 깨어나니 끝나 있었어요. 낙태 비용 가격도 투명하게 공개되어 있어서 좋았습니다. 임신중절수술 병원 고민하신다면 여기 강추합니다.' },
  { name: '30대 기혼자', tag: '낙태수술 후기', stars: 5, content: '결혼 후 임신이 되었는데 여러 사정으로 중절수술을 결정했습니다. 상담부터 수술까지 어떤 판단이나 눈치도 없이 의료적으로 도와주셔서 감사했어요. 1인 회복실에서 충분히 쉰 후 귀가했는데 그 점이 특히 좋았습니다.' },
  { name: '20대 미혼모', tag: '임신초기중절수술', stars: 5, content: '혼자서 결정하고 혼자 방문했어요. 처음에 너무 무서웠는데 간호사 선생님부터 원장님까지 너무 친절하게 대해주셔서 마음이 놓였습니다. 수술 후 관리도 꼼꼼하게 알려주셔서 빠르게 회복할 수 있었어요.' },
  { name: '20대 직장인', tag: '낙태 비용 후기', stars: 5, content: '다른 병원에서 낙태 비용을 알아봤는데 처음에 낮게 안내하고 나중에 비용이 달라지는 경우가 있더라고요. 연세365산부인과의원은 상담 때 안내받은 비용을 기준으로 진행되어 믿음직했습니다. 정확한 비용은 초음파 검사 후 안내받으시길 권장합니다.' },
]

const RELATED = [
  { href: '/abortion', label: '임신중절수술이란' },
  { href: '/abortion/cost', label: '금액·비용 안내' },
  { href: '/abortion/method', label: '수술 방법 종류' },
  { href: '/abortion/recovery', label: '수술 후 관리' },
  { href: '/abortion/faq', label: `전체 ${FAQ_COUNT}개 FAQ` },
  { href: '/abortion/hospital', label: '병원 안내' },
]

const FEATURED_FAQS = [
  {
    q: '임신중절수술 후기는 어떤 기준으로 참고해야 하나요?',
    a: '후기에서 통증, 회복 기간, 당일 과정에 대한 내용은 참고할 수 있지만 개인마다 경험이 다를 수 있습니다. 수술 방법, 주수, 건강 상태에 따라 회복 속도와 통증 정도가 달라지므로 특정 후기의 경험이 자신에게도 동일하게 적용된다고 단정하지 않는 것이 좋습니다. 후기보다는 직접 상담을 통해 본인 상황에 맞는 정보를 얻으시길 권장합니다.',
  },
  {
    q: '수술 후 통증은 얼마나 심한가요?',
    a: '수면마취 중에는 통증을 느끼지 않는 것이 일반적입니다. 수술 후 마취에서 깨어난 뒤 일정 기간 생리통과 유사한 불편감이 있을 수 있으며, 정도는 개인마다 차이가 있습니다. 심한 통증이 지속되거나 악화된다면 즉시 의료기관에 연락하시기 바랍니다.',
  },
  {
    q: '수술 당일 귀가는 어떻게 이루어지나요?',
    a: '회복실에서 1~2시간 안정을 취한 후 귀가하는 것이 일반적입니다. 수면마취 후에는 자가 운전이 불가하므로 대중교통을 이용하거나 보호자와 함께 귀가하셔야 합니다. 귀가 가능 여부는 회복 상태를 확인한 의료진이 최종적으로 안내합니다.',
  },
  {
    q: '수술 후 일상 복귀까지 얼마나 걸리나요?',
    a: '가벼운 일상생활이나 사무직 업무는 수술 다음 날부터 가능한 경우가 많습니다. 개인 상태에 따라 차이가 있으므로 격렬한 운동이나 장시간 서 있는 업무는 의료진 안내에 따라 복귀 시기를 결정하시기 바랍니다. 무리한 활동은 회복에 영향을 줄 수 있습니다.',
  },
  {
    q: '후기에서 비용이 다르게 나오는데 어떤 기준인가요?',
    a: '비용은 임신 주수에 따라 다르며, 연세365산부인과의원의 기준은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 정확한 주수는 초음파 검사로 확인하며, 추가 처치가 필요한 경우 최종 비용은 진료 후 달라질 수 있습니다. 비용에 대한 궁금한 사항은 상담 시 사전에 확인하시기 바랍니다.',
  },
  {
    q: '혼자 방문해도 비밀이 보장되나요?',
    a: '의료법에 따라 진료 내용은 본인 동의 없이 외부에 공개되지 않습니다. 접수부터 상담, 수술, 회복, 귀가까지 독립된 동선으로 진행되어 다른 방문자와 마주치는 상황을 최소화합니다. 카드 결제 내역에도 수술 내용이 직접 노출되지 않습니다.',
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
              임신중절수술 후기를
              보기 전에 확인해야 할 정보<span style={{ display: 'block', fontSize: '20px', fontWeight: 700, opacity: .88, marginTop: '8px' }}>후기 참고 기준과 개인차 이해 안내</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '14px', lineHeight: 1.95, marginBottom: '22px', letterSpacing: '-.01em' }}>
              낙태수술 후기, 임신초기중절수술 후기 등 실제 방문하신 분들의<br />
              솔직한 경험을 안내합니다.
 · <ViewCounter slug="abortion-review" />
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
            <SectionTag>01 먼저 확인할 내용</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>임신중절수술 후기는 어떤 기준으로 참고해야 하나요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              후기에서 병원 분위기, 상담 태도, 당일 과정 흐름에 대한 내용은 참고할 수 있습니다. 그러나 통증 정도, 회복 속도, 출혈 기간은 임신 주수·수술 방법·개인 건강 상태에 따라 다르게 경험되므로, 특정 후기의 경험이 본인에게도 동일하게 적용된다고 단정하기 어렵습니다. 후기를 참고한 뒤 직접 상담을 통해 본인 상황에 맞는 정보를 얻는 것이 가장 정확합니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              수술 방법, 주수, 마취 방식에 따라 수술 시간과 회복 경험이 달라집니다. 수면마취 후 통증 인식 자체가 개인마다 다르며, 수술 후 출혈·통증·회복 속도 모두 개인차가 있습니다. 후기에서 '전혀 아프지 않았다'거나 '많이 힘들었다'는 표현은 그 개인의 경험이며, 모든 사람에게 적용되는 사실이 아닙니다.
            </p>
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px 20px', marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: C.pd, marginBottom: '10px' }}>후기 참고 기준 | 최종 수정일 2026.06</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {[['참고 가능', '병원 분위기·상담 태도·동선'], ['개인차 큼', '통증·회복속도·출혈 기간'], ['직접 확인 필요', '본인 상황에 맞는 비용·방법'], ['상담 권장', '전화·카카오톡으로 사전 문의']].map(([k, v]) => (
                  <div key={k} style={{ background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '10px 14px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: C.p, marginBottom: '3px' }}>{k}</div>
                    <div style={{ fontSize: '12px', color: C.ts }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 후기는 병원을 선택할 때 참고 자료가 됩니다. 연세365산부인과의원을 방문하신 분들의 공통적인 후기는 <strong style={{ color: C.p }}>따뜻한 상담, 빠른 수술, 비밀보장 철저, 추가 비용 없음</strong>입니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '20px' }}>
              낙태수술 후기를 보실 때는 병원의 전문성, 비밀보장 여부, 낙태 비용 가격의 투명성을 함께 확인하시는 것이 좋습니다. 연세365산부인과의원은 임신중절수술 금액을 사전에 투명하게 공개하며, 상담 시 안내된 금액 외 추가 비용은 절대 없습니다.
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
                { icon: '💰', keyword: '투명한 비용 안내', desc: '상담 시 안내된 주수별 비용을 기준으로 진행합니다.' },
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



          <Divider />

          {/* 신규 섹션: 사람마다 통증과 회복 경험이 다른 이유 */}
          <section>
            <SectionTag>03 통증·회복 경험이 개인마다 다른 이유</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>사람마다 통증과 회복 경험이 다른 이유는 무엇인가요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신 주수가 클수록 수술 시간이 길어지고 수술 후 회복 과정에서 느끼는 불편감이 달라질 수 있습니다. 흡입술과 소파술은 수술 방식과 자궁에 가해지는 자극이 다르므로, 수술 후 통증과 출혈 양상이 다를 수 있습니다. 수면마취 상태에서는 수술 중 통증을 인식하지 못하는 것이 일반적이지만, 마취에서 깨어난 후의 불편감은 개인마다 다르게 나타납니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              평소 생리통 정도, 자궁 상태, 호르몬 수치, 정서적 상태 모두 수술 후 경험에 영향을 줄 수 있습니다. 같은 주수에서 같은 방법으로 수술을 받더라도 회복 속도와 통증 정도가 사람마다 다른 것은 이러한 개인차 때문입니다. 따라서 특정 후기의 경험을 자신의 예상 경험과 동일시하는 것은 적절하지 않습니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px', marginBottom: '16px' }}>
              {[
                { icon: '📅', title: '임신 주수', desc: '주수가 클수록 수술 시간과 회복 과정이 달라질 수 있습니다.' },
                { icon: '🔧', title: '수술 방법', desc: '흡입술과 소파술의 자극 방식 차이로 수술 후 경험이 다릅니다.' },
                { icon: '💪', title: '개인 건강 상태', desc: '평소 생리통, 자궁 상태, 호르몬 수치가 영향을 줍니다.' },
                { icon: '🧠', title: '정서적 상태', desc: '심리적 안정 여부도 수술 전후 경험에 영향을 미칩니다.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '18px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>{icon}</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: C.p, marginBottom: '6px' }}>{title}</div>
                  <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
            <InfoBox>후기에서 통증이나 회복 속도에 대한 내용은 개인 경험이며, 본인에게도 같은 결과가 나타난다고 단정할 수 없습니다. 정확한 예상은 의료진 상담을 통해 확인하세요.</InfoBox>
          </section>

          <Divider />

          {/* 신규 섹션: 후기보다 상담이 중요한 이유 */}
          <section>
            <SectionTag>04 후기보다 검사 결과와 상담이 중요한 이유</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>후기보다 검사 결과와 의료진 상담이 중요한 이유는 무엇인가요?</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              임신중절수술 방법, 수술 가능 주수, 수술 후 예상 회복 과정은 초음파 검사로 확인된 정확한 주수, 개인 건강 상태, 자궁 구조에 따라 달라집니다. 후기에서 "8주에 수술했다"는 내용을 읽더라도, 실제 마지막 생리일로 계산한 주수와 초음파 주수가 다를 수 있어 본인의 상황과 다를 수 있습니다. 수술 방법과 예상 회복 과정에 대한 정확한 정보는 초음파 검사 후 의료진 상담을 통해 얻을 수 있습니다.
            </p>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em', marginBottom: '14px' }}>
              온라인 후기는 익명으로 작성되므로 내용의 정확성이나 최신성을 확인하기 어렵습니다. 상담 시 궁금한 점을 직접 질문하면 본인 상황에 맞는 구체적인 안내를 받을 수 있습니다. 연세365산부인과의원에서는 전화(02-585-3650)나 카카오톡으로 사전 상담이 가능하며, 모든 상담은 비밀이 보장됩니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: C.pb }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.p, marginBottom: '14px' }}>후기로 확인 가능한 것</div>
                {['병원 분위기와 청결도', '상담 태도와 친절함', '수술 진행 흐름', '귀가 과정', '비밀보장 여부'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '8px', padding: '7px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px', color: C.ts }}>
                    <span style={{ color: C.green, fontWeight: 700 }}>✓</span>{t}
                  </div>
                ))}
              </div>
              <div style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', background: '#fff' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.p, marginBottom: '14px' }}>의료진 상담으로 확인할 것</div>
                {['본인의 정확한 임신 주수', '적합한 수술 방법', '예상 회복 기간', '개인 건강 상태 확인', '비용과 포함 항목'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: '8px', padding: '7px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '13px', color: C.ts }}>
                    <span style={{ color: C.p, fontWeight: 700 }}>→</span>{t}
                  </div>
                ))}
              </div>
            </div>
            <InfoBox type="green">초음파 검사 결과와 의료진 상담이 본인에게 가장 정확한 정보입니다. 전화 또는 카카오톡으로 사전 상담을 먼저 받아보세요.</InfoBox>
            <div style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '10px' }}>관련 내용 더 보기</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Link href="/abortion/method" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 방법과 종류 확인</Link>
                <Link href="/abortion/cost" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 주수별 비용 보기</Link>
                <Link href="/abortion/recovery" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 임신중절수술 후 관리 방법</Link>
                <Link href="/abortion/faq" style={{ color: C.p, textDecoration: 'none', fontSize: '13px' }}>→ 전체 {FAQ_COUNT}개 FAQ 보기</Link>
              </div>
            </div>
          </section>

          <Divider />

          <section style={{ marginBottom: '44px' }}>
            <SectionTag>자주 묻는 질문</SectionTag>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px', letterSpacing: '-.02em' }}>
              임신중절수술 후기 검색자가 자주 묻는 질문
            </h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 2, marginBottom: '20px', letterSpacing: '-.01em' }}>
              통증, 회복기간, 당일 귀가, 비용 기준, 비밀보장에 관한 객관적인 내용을 정리했습니다.
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
              후기 안내 정보는 어떤 기준으로 작성되었나요?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: C.ts, lineHeight: 1.85 }}>
              <div><strong style={{ color: C.tm }}>정보 제공:</strong> 연세365산부인과의원</div>
              <div><strong style={{ color: C.tm }}>최종 수정일:</strong> 2026년 6월 29일</div>
              <div><strong style={{ color: C.tm }}>공식 출처:</strong> 대한산부인과학회 임상 지침</div>
              <div style={{ marginTop: '8px', fontSize: '12px', color: C.tg }}>후기는 개인 경험을 반영하며 동일한 결과를 보장하지 않습니다. 정확한 진단과 치료는 의료기관에서 상담받으시기 바랍니다.</div>
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
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '22px' }}>사당역 4번 출구 도보 3분 · 비밀보장 · 당일예약 가능</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
              <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '14px', border: '0.5px solid rgba(255,255,255,.4)', padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(/images/hero-abortion-main.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px 20px' }}>
          <h2 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-.02em' }}>
            임신중절수술 후기를<br />보기 전에 확인할 정보<span style={{ display: 'block', fontSize: '15px', fontWeight: 700, opacity: .88, marginTop: '6px' }}>후기 참고 기준과 개인차 안내</span>
          </h2>
          <div style={{ color: '#FFD700', fontSize: '20px', marginTop: '10px' }}>★★★★★ 평균 5.0</div>
        </div>


        <div style={{ padding: '18px 16px', background: '#fff', borderBottom: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '13px', fontWeight: 900, color: C.tm, marginBottom: '8px' }}>임신중절수술 후기는 어떤 기준으로 참고해야 하나요?</div>
          <p style={{ fontSize: '12px', color: C.ts, lineHeight: 1.85, marginBottom: '10px' }}>
            병원 분위기·상담 태도는 후기로 참고할 수 있습니다. 통증·회복속도는 임신 주수·수술 방법·개인 건강 상태에 따라 다르므로, 특정 후기를 자신에게 그대로 적용하기 어렵습니다. 본인 상황은 직접 상담으로 확인하세요.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {[['참고 가능', '분위기·태도·동선'], ['개인차 큼', '통증·회복속도'], ['주수별 차이', '수술 방법에 따라'], ['직접 확인', '상담 권장']].map(([k, v]) => (
              <div key={k} style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '8px', padding: '8px 10px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: C.p, marginBottom: '2px' }}>{k}</div>
                <div style={{ fontSize: '10px', color: C.ts }}>{v}</div>
              </div>
            ))}
          </div>
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

        <div style={{ padding: '16px 16px 0' }}>
          <div style={{ fontSize: '14px', fontWeight: 900, color: C.tm, marginBottom: '14px' }}>후기 검색자 자주 묻는 질문</div>
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
            <div style={{ marginTop: '6px', fontSize: '11px', color: C.tg }}>후기는 개인 경험을 반영하며 동일한 결과를 보장하지 않습니다.</div>
          </div>
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