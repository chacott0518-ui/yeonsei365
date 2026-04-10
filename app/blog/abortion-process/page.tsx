import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '임신중절수술 절차 | 수술 과정 단계별 완벽 안내 2026 | 연세365산부인과',
  description: '임신중절수술 절차를 단계별로 완벽하게 안내합니다. 내원부터 퇴원까지 전 과정, 소요 시간, 준비사항까지. 사당역 4번출구 연세365산부인과.',
  keywords: ['임신중절수술절차','임신중절수술 절차','낙태수술절차','임신중절과정','낙태수술과정','임신중절수술과정','낙태절차','임신중절수술순서','낙태수술순서','임신중절수술방법','흡입술과정','소파술과정','임신중절수술소요시간','사당역산부인과','임신중절수술비용','낙태비용'],
  openGraph: { title: '임신중절수술 절차 | 단계별 완벽 안내 | 연세365산부인과', description: '임신중절수술 절차 단계별 완벽 안내. 사당역 4번출구.', url: 'https://www.yeonsei365.com/blog/abortion-process', images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: 'https://www.yeonsei365.com/blog/abortion-process' },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '임신중절수술 절차는 어떻게 되나요?', acceptedAnswer: { '@type': 'Answer', text: '내원 및 접수 → 초음파·혈액 검사 → 전문의 상담 → 수면마취 → 수술(10~30분) → 1인 회복실 안정(1~2시간) → 처방약 안내 후 당일 퇴원 순으로 진행됩니다.' } },
    { '@type': 'Question', name: '임신중절수술 소요 시간은 얼마나 되나요?', acceptedAnswer: { '@type': 'Answer', text: '수술 자체는 10~30분이지만 검사·상담·회복 시간을 포함하면 전체 내원 시간은 약 2~3시간입니다.' } },
  ],
}

const C = { p: '#CC2D5E', pd: '#8C1A4A', pp: '#4A0E2E', pb: '#FCE8EF', pt: '#B0456E', bd: '#FFE0E8', tm: '#1A0A10', ts: '#444455', tm2: '#888' }
const bt: React.CSSProperties = { fontSize: '15px', color: C.ts, lineHeight: 1.95, marginBottom: '14px' }
function SH({ n, title }: { n: string; title: string }) { return <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}><span style={{ background: C.p, color: '#fff', fontSize: '13px', fontWeight: 700, width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span><h2 style={{ fontSize: '22px', fontWeight: 700, color: C.tm, margin: 0, lineHeight: 1.3 }}>{title}</h2></div> }
function IBox({ children }: { children: React.ReactNode }) { return <div style={{ borderLeft: `4px solid ${C.p}`, background: C.pb, borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#7A2040', lineHeight: 1.85, margin: 0 }}>{children}</p></div> }
function Divider() { return <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '36px 0' }} /> }

export default function AbortionProcessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)', borderBottom: `2px solid ${C.bd}`, padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none' }}><img src="https://i.imgur.com/f7h5DY0.png" alt="연세365 로고" style={{ height: '32px', width: 'auto' }} /></a>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="/abortion/surgery" style={{ fontSize: '12px', color: '#555', textDecoration: 'none', fontWeight: 600, padding: '4px 8px' }}>임신중절수술</a>
          <a href="/blog" style={{ fontSize: '12px', color: '#555', textDecoration: 'none', fontWeight: 600, padding: '4px 8px' }}>수술정보</a>
          <a href="/" style={{ fontSize: '12px', color: '#888', textDecoration: 'none', padding: '4px 8px' }}>홈으로</a>
          <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>💬 카톡상담</a>
        </div>
      </header>
      <div style={{ height: '60px' }} />
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 20px 100px', fontFamily: '"Pretendard", -apple-system, sans-serif' }}>
        <div style={{ margin: '28px 0 0' }}><img src="/og-image.jpg" alt="임신중절수술 절차 과정 연세365산부인과" width="780" height="410" style={{ width: '100%', borderRadius: '18px', display: 'block' }} /></div>
        <div style={{ background: `linear-gradient(160deg, ${C.pp} 0%, ${C.pd} 40%, ${C.p} 100%)`, borderRadius: '20px', padding: 'clamp(24px,5vw,40px) clamp(20px,5vw,36px)', margin: '20px 0 28px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>{['절차안내','단계별과정','소요시간','준비사항'].map(t => <span key={t} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>{t}</span>)}</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '180px' }}>
              <h1 style={{ color: '#fff', fontSize: 'clamp(20px,4vw,26px)', fontWeight: 900, lineHeight: 1.45, margin: '0 0 12px' }}>임신중절수술 절차<br />내원부터 퇴원까지 단계별 안내</h1>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(12px,3vw,14px)', lineHeight: 1.8, margin: 0 }}>임신중절수술 절차 전 과정, 소요 시간, 준비사항까지 전문의가 투명하게 안내합니다.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '16px', padding: '18px 22px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', marginBottom: '4px' }}>전체 내원 시간</div>
              <div style={{ color: '#FFD700', fontSize: 'clamp(32px,7vw,44px)', fontWeight: 900, lineHeight: 1 }}>2~3시간</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', marginTop: '4px' }}>당일 퇴원 가능</div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '20px', fontSize: '12px', color: C.tm2 }}>
          <Link href="/" style={{ color: C.tm2, textDecoration: 'none' }}>홈</Link>{' > '}<Link href="/blog" style={{ color: C.tm2, textDecoration: 'none' }}>임신중절수술정보</Link>{' > '}<span style={{ color: C.p }}>임신중절수술 절차</span>
        </div>
        <section style={{ marginBottom: '36px' }}>
          <SH n="1" title="임신중절수술 절차 전체 과정" />
          <p style={bt}>임신중절수술은 내원부터 퇴원까지 체계적인 절차로 진행됩니다. 수술 자체는 10~30분이지만 검사·상담·회복을 포함하면 전체 내원 시간은 약 2~3시간입니다. 모든 과정은 1:1 프라이빗 환경에서 진행되며 철저히 비밀이 보장됩니다.</p>
          <div style={{ position: 'relative', paddingLeft: '32px' }}>
            <div style={{ position: 'absolute', left: '12px', top: 0, bottom: 0, width: '2px', background: `linear-gradient(180deg, ${C.p}, ${C.pd})`, borderRadius: '2px' }} />
            {[
              { n: '01', t: '내원 및 접수', d: '신분증 지참 필수. 수술 동의서 작성. 1:1 프라이빗 상담실에서 진행됩니다. 예약 없이 당일 내원도 가능합니다.', time: '약 10분' },
              { n: '02', t: '초음파·혈액 검사', d: '초음파로 정확한 임신 주수 확인. 혈액형·혈액검사로 기본 건강 상태를 확인합니다. 자궁외임신 여부도 확인합니다.', time: '약 15~20분' },
              { n: '03', t: '전문의 상담', d: '초음파 결과 기반 시술 방법·비용·주의사항 최종 안내. 궁금한 사항은 무엇이든 질문하세요. 모든 내용은 비밀이 보장됩니다.', time: '약 10~15분' },
              { n: '04', t: '수면마취 준비', d: '정맥 라인 확보 후 수면마취 약물 투여. 서서히 잠들게 되며 수술 중 통증·기억이 없습니다.', time: '약 5~10분' },
              { n: '05', t: '임신중절수술 시행', d: '주수에 따라 흡입술 또는 소파술로 시행됩니다. 수면마취 상태에서 진행되어 통증이 없습니다.', time: '10~30분' },
              { n: '06', t: '1인 회복실 안정', d: '프라이빗 1인 회복실에서 안정을 취합니다. 혈압·출혈량·통증을 확인하며 충분히 회복합니다.', time: '1~2시간' },
              { n: '07', t: '처방약 안내 후 퇴원', d: '처방약·귀가 후 주의사항을 상세히 안내받고 당일 퇴원합니다. 당일 운전 절대 금지입니다.', time: '약 10분' },
            ].map((s, i, arr) => (
              <div key={s.n}>
                <div style={{ display: 'flex', gap: '14px', marginBottom: '4px' }}>
                  <div style={{ position: 'absolute', left: '7px', width: '12px', height: '12px', borderRadius: '50%', background: C.p, border: '2px solid white', marginTop: '4px' }} />
                  <div style={{ flex: 1, background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '12px', padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <span style={{ background: C.p, color: '#fff', fontSize: '11px', fontWeight: 700, padding: '2px 10px', borderRadius: '20px' }}>STEP {s.n}</span>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: C.tm }}>{s.t}</span>
                      <span style={{ fontSize: '11px', color: C.tm2, background: '#F5F5F5', padding: '2px 8px', borderRadius: '10px' }}>⏱ {s.time}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: C.ts, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
                  </div>
                </div>
                {i < arr.length - 1 && <div style={{ width: '1px', height: '12px', background: C.bd, marginLeft: '16px', marginBottom: '4px' }} />}
              </div>
            ))}
          </div>
          <IBox>수술 후 운전은 절대 불가합니다. 반드시 대중교통을 이용하시거나 동행인과 함께 귀가하세요.</IBox>
        </section>
        <Divider />
        <section style={{ marginBottom: '36px' }}>
          <SH n="2" title="자주 묻는 질문" />
          {[
            { q: '임신중절수술 전체 소요 시간이 얼마나 되나요?', a: '수술 자체는 10~30분이지만 검사·상담·회복을 포함하면 전체 내원 시간은 약 2~3시간입니다. 여유 있게 시간을 비워두시기 바랍니다.' },
            { q: '혼자 내원해도 되나요?', a: '수술 자체는 혼자도 가능합니다. 다만 수면마취 후 운전이 불가하므로 대중교통 이용 또는 동행인과 함께 귀가하시는 것을 강력히 권장합니다.' },
            { q: '예약 없이 당일 내원도 가능한가요?', a: '가능합니다. 다만 예약 시 대기 시간을 크게 줄일 수 있습니다. 전화 또는 카카오톡으로 미리 예약하시면 더욱 원활하게 진료받으실 수 있습니다.' },
          ].map((f, i) => (
            <div key={i} style={{ border: `1px solid ${C.bd}`, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px', background: '#fff' }}>
              <div style={{ background: '#FFF8FA', padding: '14px 18px', fontSize: '14px', fontWeight: 700, color: C.tm, borderBottom: `1px solid ${C.bd}` }}>Q. {f.q}</div>
              <div style={{ padding: '14px 18px', fontSize: '14px', color: C.ts, lineHeight: 1.85 }}>{f.a}</div>
            </div>
          ))}
        </section>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '14px' }}>관련 정보 더 보기</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
            {[{href:'/abortion/surgery',label:'임신중절수술 금액·방법'},{href:'/blog/abortion-fasting',label:'임신중절수술 금식'},{href:'/blog/abortion-after',label:'임신중절수술 후 관리'},{href:'/blog/abortion-period',label:'임신중절수술 기간'},{href:'/blog/abortion-cost',label:'임신중절수술 비용'},{href:'/blog',label:'전체 수술정보 보기'}].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', background: C.pb, border: `1px solid ${C.bd}`, borderRadius: '10px', padding: '12px 16px', textDecoration: 'none', fontSize: '13px', color: C.p, fontWeight: 700 }}>→ {l.label}</Link>
            ))}
          </div>
        </div>
        <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: 'clamp(24px,5vw,36px)', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: 'clamp(18px,4vw,22px)', fontWeight: 900, marginBottom: '8px' }}>연세365산부인과</div>
          <div style={{ fontSize: '14px', opacity: 0.85, marginBottom: '24px', lineHeight: 1.8 }}>사당역 4번출구 도보 2분 · 당일예약·당일시술<br />모든 상담은 철저히 비밀이 보장됩니다</div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
            <a href="tel:02-585-3650" style={{ background: 'transparent', color: '#fff', fontSize: '15px', border: '1px solid rgba(255,255,255,0.5)', padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
          </div>
        </div>
      </div>
    </>
  )
}