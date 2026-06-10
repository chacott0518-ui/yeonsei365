'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import ViewCounter from '@/components/ViewCounter'

const C = {
  p: '#D6336C', pd: '#993556', pp: '#5c0e20',
  pb: '#FFF5F7', pbd: '#f0d0dc',
  ts: '#444', tm: '#1a1a1a', tg: '#888',
  green: '#0f6e56', greenBg: '#f0faf5', greenBorder: '#5dcaa5',
  amber: '#BA7517', amberBg: '#fff8e8',
}

const COLUMNS = [
  { href: '/blog/abortion-cost', label: '낙태 비용 가격 총정리', tag: '비용', desc: '8주 미만부터 주수별 낙태 비용을 투명하게 공개합니다.' },
  { href: '/blog/abortion-legal', label: '낙태합법화 뜻·시기·기준', tag: '법적기준', desc: '2021년 낙태죄 폐지 이후 달라진 법적 기준을 정리했습니다.' },
  { href: '/blog/abortion-after', label: '임신중절수술 후 관리', tag: '후관리', desc: '수술 후 빠른 회복을 위한 단계별 관리 가이드입니다.' },
  { href: '/blog/abortion-fasting', label: '임신중절수술 전 금식', tag: '준비', desc: '수면마취 전 반드시 지켜야 할 금식 기준을 안내합니다.' },
  { href: '/blog/abortion-guardian', label: '임신중절수술 보호자 필요한가요?', tag: '정보', desc: '성인은 혼자 가능, 미성년자 기준을 정리했습니다.' },
  { href: '/blog/abortion-insurance', label: '임신중절수술 보험 적용', tag: '보험', desc: '건강보험·실손보험 적용 여부를 명확히 안내합니다.' },
  { href: '/blog/abortion-menstruation', label: '임신중절수술 후 생리', tag: '후관리', desc: '수술 후 생리 재개 시기와 주의사항을 안내합니다.' },
  { href: '/blog/abortion-period', label: '임신중절수술 가능 기간', tag: '주수', desc: '주수별 수술 방법과 위험도를 비교 안내합니다.' },
  { href: '/womens-clinic/sadang', label: '사당역 산부인과 연세365', tag: '병원', desc: '사당역 4번출구 1분, 연세365산부인과를 소개합니다.' },
  { href: '/blog/abortion-alone', label: '임신중절수술 혼자 가도 되나요?', tag: '정보', desc: '혼자 방문 가능 여부와 귀가 방법을 안내합니다.' },
  { href: '/blog/abortion-side', label: '임신중절수술 부작용', tag: '안전', desc: '전문의 시행 시 부작용이 드문 이유와 주의사항입니다.' },
  { href: '/blog/abortion-process', label: '임신중절수술 절차', tag: '절차', desc: '내원부터 귀가까지 전 과정을 단계별로 안내합니다.' },
]

const FAQ_ITEMS = [
  { q: '임신중절수술 금액이 얼마인가요?', a: '8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원. 수술·마취·영양제·부가세 포함, 카드·현금 동일가.' },
  { q: '낙태 합법 기간은 언제까지인가요?', a: '2021년 낙태죄 폐지 이후 임신 14주 이내는 본인 동의만으로 합법적으로 수술 가능합니다.' },
  { q: '혼자 가도 되나요?', a: '성인(만 19세 이상)은 혼자 수술 가능. 수면마취 후 자가 운전 불가, 대중교통 이용 권장.' },
  { q: '비밀이 보장되나요?', a: '의료법에 따라 모든 진료 기록은 본인 동의 없이 외부 공개 불가. 1인 상담실·1인 회복실 운영.' },
  { q: '수술 후 생리는 언제 시작되나요?', a: '보통 4~6주 내 재개. 8주 이상 없으면 내원 권장.' },
  { q: '보험 적용이 되나요?', a: '건강보험 비급여 항목으로 실손보험도 대부분 미적용. 모자보건법상 특수 사유 시 일부 가능.' },
]

export default function HealthMagazineClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* 히어로 */}
      <div style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(/images/hero-abortion-info.webp)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '80px 20px 40px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '16px' }}>
            {['자가진단 퀴즈', 'FAQ 70가지', '건강 칼럼'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.3)' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ color: '#fff', fontSize: '36px', fontWeight: 900, lineHeight: 1.25, marginBottom: '12px', letterSpacing: '-.03em' }}>
            건강매거진
          </h1>
          <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '15px', lineHeight: 1.8 }}>
            증상 자가진단부터 FAQ, 건강 칼럼까지<br />
            연세365산부인과가 직접 답변합니다 · <ViewCounter slug="health-magazine" />
          </p>
        </div>
      </div>

      {/* 탭 */}
      <div style={{ background: '#fff', borderBottom: `1px solid ${C.pbd}`, position: 'sticky', top: '64px', zIndex: 40 }}>
        <div className="scrollbar-hide" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
            {[
              { label: '자가진단 퀴즈', href: '/health-magazine/quiz' },
              { label: 'FAQ', href: '/abortion/faq' },
              { label: '건강 칼럼', href: '/health-magazine/column' },
            ].map(tab => (
              <Link key={tab.href} href={tab.href} style={{
                padding: '14px 20px', fontSize: '13px', fontWeight: 700,
                color: C.p, textDecoration: 'none', borderBottom: `2px solid transparent`,
                display: 'block', flexShrink: 0,
              }}>
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 자가진단 퀴즈 섹션 */}
      <section id="quiz" style={{ background: C.pb, padding: '60px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ display: 'inline-block', background: C.p, color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 14px', borderRadius: '20px', marginBottom: '12px' }}>자가진단 퀴즈</span>
            <h2 style={{ fontSize: '26px', fontWeight: 900, color: C.tm, marginBottom: '8px' }}>지금 증상을 확인하세요</h2>
            <p style={{ fontSize: '14px', color: C.ts, lineHeight: 1.7 }}>생리·임신·통증·검진 4가지 카테고리 · 3단계 맞춤 진단</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '28px' }}>
            {[
              { icon: '🩸', label: '생리 관련', desc: '주기·양·통증 이상' },
              { icon: '🤰', label: '임신 관련', desc: '임신 확인·중절·난임' },
              { icon: '⚡', label: '통증·분비물', desc: '아랫배·냉 이상' },
              { icon: '🔍', label: '검진·예방', desc: '정기검진·피임 상담' },
            ].map(cat => (
              <Link key={cat.label} href="/health-magazine/quiz"
                style={{ display: 'block', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '16px', padding: '20px 14px', textAlign: 'center', textDecoration: 'none' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{cat.icon}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '4px' }}>{cat.label}</div>
                <div style={{ fontSize: '11px', color: C.tg }}>{cat.desc}</div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/health-magazine/quiz"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, color: '#fff', fontSize: '15px', fontWeight: 700, padding: '14px 32px', borderRadius: '28px', textDecoration: 'none' }}>
              자가진단 퀴즈 시작하기 →
            </Link>
            <p style={{ fontSize: '11px', color: C.tg, marginTop: '10px' }}>※ 참고용 안내이며 의학적 진단을 대신하지 않습니다</p>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section id="faq" style={{ background: '#fff', padding: '60px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ display: 'inline-block', background: C.pb, color: C.p, fontSize: '11px', fontWeight: 700, padding: '4px 14px', borderRadius: '20px', marginBottom: '12px' }}>FAQ</span>
            <h2 style={{ fontSize: '26px', fontWeight: 900, color: C.tm, marginBottom: '8px' }}>자주 묻는 질문</h2>
            <p style={{ fontSize: '14px', color: C.ts }}>가장 많이 문의하시는 질문 핵심만 정리했어요</p>
          </div>

          {/* PC 2컬럼 */}
          <div className="hidden lg:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  style={{ width: '100%', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: C.p, fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>Q.</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: openFaq === i ? C.p : C.tm, lineHeight: 1.5 }}>{item.q}</span>
                  </div>
                  {openFaq === i ? <ChevronUp size={15} style={{ color: C.p, flexShrink: 0 }} /> : <ChevronDown size={15} style={{ color: '#aaa', flexShrink: 0 }} />}
                </button>
                {openFaq === i && (
                  <div style={{ padding: '10px 16px 14px 36px', fontSize: '13px', color: C.ts, lineHeight: 1.8, background: '#fff8fa', borderTop: `0.5px dashed ${C.pbd}` }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 모바일 1컬럼 */}
          <div className="lg:hidden" style={{ flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', overflow: 'hidden', background: '#fff', marginBottom: '8px' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  style={{ width: '100%', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: C.p, fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>Q.</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: openFaq === i ? C.p : C.tm, lineHeight: 1.5 }}>{item.q}</span>
                  </div>
                  {openFaq === i ? <ChevronUp size={15} style={{ color: C.p, flexShrink: 0 }} /> : <ChevronDown size={15} style={{ color: '#aaa', flexShrink: 0 }} />}
                </button>
                {openFaq === i && (
                  <div style={{ padding: '10px 16px 14px 36px', fontSize: '12px', color: C.ts, lineHeight: 1.8, background: '#fff8fa', borderTop: `0.5px dashed ${C.pbd}` }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/abortion/faq"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, color: '#fff', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>
              전체 70가지 FAQ 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 건강 칼럼 섹션 */}
      <section id="column" style={{ background: C.pb, padding: '60px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ display: 'inline-block', background: C.p, color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 14px', borderRadius: '20px', marginBottom: '12px' }}>건강 칼럼</span>
            <h2 style={{ fontSize: '26px', fontWeight: 900, color: C.tm, marginBottom: '8px' }}>여성 건강 칼럼</h2>
            <p style={{ fontSize: '14px', color: C.ts }}>연세365산부인과 전문의가 직접 작성한 건강 정보</p>
          </div>

          {/* PC 3컬럼 */}
          <div className="hidden lg:grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
            {COLUMNS.map(col => (
              <Link key={col.href} href={col.href}
                style={{ display: 'block', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px', textDecoration: 'none' }}>
                <span style={{ display: 'inline-block', background: C.pb, color: C.p, fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px', marginBottom: '10px' }}>{col.tag}</span>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '8px', lineHeight: 1.4 }}>{col.label}</div>
                <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.6 }}>{col.desc}</div>
                <div style={{ fontSize: '12px', color: C.p, fontWeight: 700, marginTop: '12px' }}>읽어보기 →</div>
              </Link>
            ))}
          </div>

          {/* 모바일 2컬럼 */}
          <div className="lg:hidden" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {COLUMNS.map(col => (
              <Link key={col.href} href={col.href}
                style={{ display: 'block', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '14px', textDecoration: 'none' }}>
                <span style={{ display: 'inline-block', background: C.pb, color: C.p, fontSize: '9px', fontWeight: 700, padding: '2px 6px', borderRadius: '8px', marginBottom: '8px' }}>{col.tag}</span>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.tm, lineHeight: 1.4, marginBottom: '6px' }}>{col.label}</div>
                <div style={{ fontSize: '11px', color: C.p, fontWeight: 700 }}>읽기 →</div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/health-magazine/column"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: C.p, color: '#fff', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>
              전체 칼럼 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, padding: '48px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>연세365산부인과</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '6px' }}>서울 관악구 과천대로 939 3층 · 사당역 4번출구</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.7)', marginBottom: '24px' }}>당일예약 · 당일수술 · 비밀보장 · 전문의 직접 집도</div>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
              style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>
              💬 카카오톡 상담
            </a>
            <a href="tel:02-585-3650"
              style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '14px', fontWeight: 700, border: '0.5px solid rgba(255,255,255,.4)', padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>
              📞 02-585-3650
            </a>
          </div>
        </div>
      </section>
    </>
  )
}