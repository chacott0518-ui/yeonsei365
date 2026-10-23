import type { Metadata } from 'next'
import Link from 'next/link'
import { clinicSchema } from '@/lib/schemas'
import ViewCounter from '@/components/ViewCounter'

export const metadata: Metadata = {
  title: '임신중절수술 절차 | 수술 과정 단계별 완벽 안내 2026 | 연세365산부인과의원',
  description: '임신중절수술 절차를 단계별로 완벽하게 안내합니다. 내원부터 퇴원까지 전 과정, 소요 시간, 준비사항까지. 사당역 4번 출구 연세365산부인과의원.',
  keywords: ['임신중절수술절차','임신중절수술 절차','낙태수술절차','임신중절과정','낙태수술과정','임신중절수술과정','낙태절차','임신중절수술순서','낙태수술순서','임신중절수술방법','흡입술과정','소파술과정','임신중절수술소요시간','사당역산부인과','임신중절수술비용','낙태비용'],
  openGraph: { title: '임신중절수술 절차 | 단계별 완벽 안내 | 연세365산부인과의원', description: '임신중절수술 절차 단계별 완벽 안내. 사당역 4번 출구.', url: 'https://www.yeonsei365.com/blog/abortion-process', images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: 'https://www.yeonsei365.com/blog/abortion-process' },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 절차 | 수술 과정 단계별 완벽 안내 2026 | 연세365산부인과의원',
    description: '임신중절수술 절차를 단계별로 완벽하게 안내합니다. 내원부터 퇴원까지 전 과정, 소요 시간, 준비사항까지. 사당역 4번 출구 연세365산부인과의원.',
  },
}

const processFaqs = [
  {
    q: '임신 중절 수술 전 상담은 어떤 내용을 확인하나요?',
    a: '상담에서는 임신 위치와 주수, 현재 증상, 복용 중인 약, 알레르기, 과거 수술과 질환을 확인합니다. 검사 결과를 바탕으로 가능한 수술 방법과 마취, 준비사항, 회복 및 후속 진료 방법을 안내합니다.',
  },
  {
    q: '임신 중절 수술 전에 필요한 검사는 무엇인가요?',
    a: '우선 초음파로 임신이 자궁 안에 위치하는지와 임신 주수를 확인합니다. 혈액검사 등 추가 검사는 임신 주수, 수술 방법, 마취 방식과 개인 건강 상태를 고려해 의료진이 결정합니다.',
  },
  {
    q: '임신중절수술은 어떤 과정으로 진행되나요?',
    a: '일반적으로 임신 위치와 주수 확인, 건강 상태 문진, 필요한 검사, 의료진 상담, 수술과 회복 확인 순서로 진행됩니다. 구체적인 방법은 임신 주수와 개인 상태에 따라 달라질 수 있습니다.',
  },
  {
    q: '임신 중절 수술 후 회복 기간은 어느 정도인가요?',
    a: '회복 속도는 임신 주수, 수술 방법과 개인 상태에 따라 다릅니다. 정해진 기간만으로 판단하기보다 출혈과 통증이 줄어드는지 살피고, 안내받은 주의사항과 진료 일정을 따르는 것이 중요합니다.',
  },
  {
    q: '임신중절수술 전체 소요 시간이 얼마나 되나요?',
    a: '수술 자체는 10~30분이지만 검사·상담·회복을 포함하면 전체 내원 시간은 약 2~3시간입니다. 당일 검사 결과와 회복 상태에 따라 달라질 수 있으므로 여유 있게 일정을 잡는 것이 좋습니다.',
  },
  {
    q: '혼자 내원해도 되나요?',
    a: '내원 가능 여부와 귀가 방법은 마취 방식과 개인 상태에 따라 달라질 수 있습니다. 수면마취 후에는 운전하지 말고, 의료진이 안내한 방법에 따라 대중교통을 이용하거나 동행인과 귀가해야 합니다.',
  },
  {
    q: '예약 없이 당일 내원도 가능한가요?',
    a: '당일 상담과 수술 가능 여부는 예약 상황, 금식 여부, 검사 결과와 개인 상태에 따라 달라집니다. 방문 전에 전화나 카카오톡으로 가능한 시간과 준비사항을 확인해 주세요.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: processFaqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}
const PAGE_URL = 'https://www.yeonsei365.com/blog/abortion-process'
const PAGE_DATE = '2026-04-10'
const PAGE_MODIFIED = '2026-10-23'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 절차 | 수술 과정 단계별 완벽 안내 2026', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 절차 | 수술 과정 단계별 완벽 안내 2026', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신중절수술 절차'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 절차', description:'임신중절수술 내원부터 퇴원까지 단계별 안내', step:[ {'@type':'HowToStep',position:1,name:'내원 및 접수',text:'접수 후 현재 증상과 병력, 복용약을 확인하고 동의 절차를 진행합니다.'}, {'@type':'HowToStep',position:2,name:'초음파·필요 검사',text:'초음파로 임신 위치와 주수를 확인하고 개인 상태와 마취 계획에 따라 필요한 검사를 진행합니다.'}, {'@type':'HowToStep',position:3,name:'수술 및 회복',text:'상담 결과에 따른 수술과 회복 관찰을 진행하고 상태가 안정된 것을 확인한 뒤 귀가 안내를 받습니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 절차 | 수술 과정 단계별 완벽 안내 2026', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절수술정보',item:'https://www.yeonsei365.com/blog'}, {'@type':'ListItem',position:3,name:'임신중절수술 절차',item:PAGE_URL} ] }
const C = { p: '#CC2D5E', pd: '#8C1A4A', pp: '#4A0E2E', pb: '#FCE8EF', pt: '#B0456E', bd: '#FFE0E8', tm: '#1A0A10', ts: '#444455', tm2: '#888' }
const bt: React.CSSProperties = { fontSize: '15px', color: C.ts, lineHeight: 1.95, marginBottom: '14px' }
function SH({ n, title }: { n: string; title: string }) { return <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}><span style={{ background: C.p, color: '#fff', fontSize: '13px', fontWeight: 700, width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span><h2 style={{ fontSize: '22px', fontWeight: 700, color: C.tm, margin: 0, lineHeight: 1.3 }}>{title}</h2></div> }
function IBox({ children }: { children: React.ReactNode }) { return <div style={{ borderLeft: `4px solid ${C.p}`, background: C.pb, borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#7A2040', lineHeight: 1.85, margin: 0 }}>{children}</p></div> }
function Divider() { return <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '36px 0' }} /> }

export default function AbortionProcessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <div style={{ height: '60px' }} />
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 20px 100px', fontFamily: '"Pretendard", -apple-system, sans-serif' }}>
        <div style={{ margin: '28px 0 0' }}><img src="/og-image.jpg" alt="임신중절수술 절차 과정 연세365산부인과의원" width="780" height="410" style={{ width: '100%', borderRadius: '18px', display: 'block' }} /></div>
        <div style={{ background: `linear-gradient(160deg, ${C.pp} 0%, ${C.pd} 40%, ${C.p} 100%)`, borderRadius: '20px', padding: 'clamp(24px,5vw,40px) clamp(20px,5vw,36px)', margin: '20px 0 28px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>{['절차안내','단계별과정','소요시간','준비사항'].map(t => <span key={t} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>{t}</span>)}</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '180px' }}>
              <h1 style={{ color: '#fff', fontSize: 'clamp(20px,4vw,26px)', fontWeight: 900, lineHeight: 1.45, margin: '0 0 12px' }}>임신중절수술 절차<br />내원부터 퇴원까지 단계별 안내</h1>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(12px,3vw,14px)', lineHeight: 1.8, margin: 0 }}>임신중절수술 절차 전 과정, 소요 시간, 준비사항까지 전문의가 투명하게 안내합니다. · <ViewCounter slug="blog-abortion-process" /></p>
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
          <IBox>
            <Link href="/abortion" style={{ color: C.pd, fontWeight: 800 }}>
              임신중절수술
            </Link>
            은 임신 위치와 주수 확인, 건강 상태 문진, 필요한 검사, 의료진 상담,
            수술과 회복 확인 순서로 진행되며 세부 과정은 개인 상태에 따라 달라질 수 있습니다.
          </IBox>
          <div style={{ position: 'relative', paddingLeft: '32px' }}>
            <div style={{ position: 'absolute', left: '12px', top: 0, bottom: 0, width: '2px', background: `linear-gradient(180deg, ${C.p}, ${C.pd})`, borderRadius: '2px' }} />
            {[
              { n: '01', t: '내원 및 접수', d: '접수 후 현재 증상과 병력, 복용약을 확인하고 동의 절차를 진행합니다. 당일 가능 여부와 준비사항은 방문 전에 확인하세요.', time: '약 10분' },
              { n: '02', t: '초음파·필요 검사', d: '초음파로 임신 위치와 주수를 확인합니다. 혈액검사 등 추가 검사는 개인 건강 상태와 마취 계획에 따라 결정합니다.', time: '약 15~20분' },
              { n: '03', t: '전문의 상담', d: '초음파 결과 기반 시술 방법·비용·주의사항 최종 안내. 궁금한 사항은 무엇이든 질문하세요. 모든 내용은 비밀이 보장됩니다.', time: '약 10~15분' },
              { n: '04', t: '마취 준비', d: '마취 전 건강 상태를 다시 확인하고 모니터링을 준비합니다. 마취 방식과 주의사항은 상담 결과에 따라 안내합니다.', time: '약 5~10분' },
              { n: '05', t: '임신중절수술 시행', d: '임신 주수와 개인 상태에 맞는 수술적 방법으로 진행합니다. 마취 후 통증이나 불편감의 정도는 개인마다 다를 수 있습니다.', time: '10~30분' },
              { n: '06', t: '1인 회복실 안정', d: '프라이빗 1인 회복실에서 안정을 취합니다. 혈압·출혈량·통증을 확인하며 충분히 회복합니다.', time: '1~2시간' },
              { n: '07', t: '처방약 안내 후 퇴원', d: '회복 상태가 안정된 것을 확인한 뒤 처방약과 귀가 후 주의사항을 안내합니다. 수면마취를 받은 당일에는 운전하지 마세요.', time: '약 10분' },
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
          {processFaqs.map((f, i) => (
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
          <div style={{ fontSize: 'clamp(18px,4vw,22px)', fontWeight: 900, marginBottom: '8px' }}>연세365산부인과의원</div>
          <div style={{ fontSize: '14px', opacity: 0.85, marginBottom: '24px', lineHeight: 1.8 }}>사당역 4번 출구 도보 3분 · 당일예약·당일시술<br />모든 상담은 철저히 비밀이 보장됩니다</div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
            <a href="tel:02-585-3650" style={{ background: 'transparent', color: '#fff', fontSize: '15px', border: '1px solid rgba(255,255,255,0.5)', padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
          </div>
        </div>
      </div>
    </>
  )
}
