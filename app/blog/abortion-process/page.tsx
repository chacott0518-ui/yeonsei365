import type { Metadata } from 'next'
import Link from 'next/link'
import { clinicSchema } from '@/lib/schemas'
import ViewCounter from '@/components/ViewCounter'

export const metadata: Metadata = {
  title: '당일 내원 전 준비 체크리스트 | 임신중절수술 | 연세365산부인과의원',
  description: '임신중절수술 당일 내원 전 금식·신분증·증상 기록 등 준비 체크리스트를 안내합니다. 전체 절차·안전성은 수술 안내 페이지에서 확인하세요.',
  keywords: ['임신중절수술절차','임신중절수술 절차','낙태수술절차','임신중절과정','낙태수술과정','임신중절수술과정','낙태절차','임신중절수술순서','낙태수술순서','임신중절수술방법','흡입술과정','소파술과정','임신중절수술소요시간','사당역산부인과','임신중절수술비용','낙태비용'],
  openGraph: { title: '당일 내원 전 준비 체크리스트 | 임신중절수술 | 연세365산부인과의원', description: '당일 내원 전 준비 체크리스트. 전체 절차는 수술 안내에서 확인. 사당역 연세365산부인과의원.', url: 'https://www.yeonsei365.com/blog/abortion-process', images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: 'https://www.yeonsei365.com/blog/abortion-process' },
  twitter: {
    card: 'summary_large_image',
    title: '당일 내원 전 준비 체크리스트 | 임신중절수술 | 연세365산부인과의원',
    description: '임신중절수술 당일 내원 전 금식·신분증·증상 기록 등 준비 체크리스트를 안내합니다. 전체 절차·안전성은 수술 안내 페이지에서 확인하세요.',
  },
}

const processFaqs = [
  {
    q: '내원 전에 무엇을 준비하면 되나요?',
    a: '예약 시 안내받은 금식 시간, 신분증, 마지막 생리 시작일·테스트기 확인일·현재 증상·복용 약 기록을 준비하면 접수와 상담이 수월합니다. 개인 상태에 따라 추가 준비물이 안내될 수 있습니다.',
  },
  {
    q: '금식은 왜 필요한가요?',
    a: '마취 안전과 관련된 준비입니다. 금식 시간과 허용 범위는 예약·상담 안내에 따르며, 지키지 않으면 당일 진행이 어려울 수 있습니다.',
  },
  {
    q: '당일 타임라인은 어떻게 참고하면 되나요?',
    a: '아래 타임라인은 내원 전 흐름을 미리 파악하기 위한 요약입니다. 방법·마취·안전성 등 전체 절차는 수술 안내 페이지에서 확인하세요.',
  },
  {
    q: '혼자 내원해도 되나요?',
    a: '내원 가능 여부와 귀가 방법은 마취 방식과 개인 상태에 따라 달라질 수 있습니다. 수면마취 후에는 운전하지 말고, 의료진이 안내한 방법에 따라 대중교통을 이용하거나 동행인과 귀가해야 합니다.',
  },
  {
    q: '예약 없이 당일 내원도 가능한가요?',
    a: '당일 상담과 수술 가능 여부는 예약 상황, 금식 여부, 검사 결과와 개인 상태에 따라 달라집니다. 방문 전에 전화나 카카오톡으로 가능한 시간과 준비사항을 확인해 주세요.',
  },
  {
    q: '전체 수술 절차는 어디서 보나요?',
    a: '접수부터 수술·회복까지 상세 절차·안전성 안내는 https://www.yeonsei365.com/abortion/surgery 에서 확인하세요. 이 글은 당일 내원 전 준비에 초점을 둡니다.',
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
const PAGE_MODIFIED = '2026-11-04'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'당일 내원 전 준비 체크리스트', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'당일 내원 전 준비 체크리스트', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신중절수술 당일 준비'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'당일 내원 전 준비 체크리스트', description:'임신중절수술 당일 내원 전 준비 항목', step:[ {'@type':'HowToStep',position:1,name:'금식·예약 안내 확인',text:'예약 시 안내받은 금식 시간과 방문 시각을 확인합니다.'}, {'@type':'HowToStep',position:2,name:'신분증·기록 준비',text:'신분증과 생리일·테스트기 확인일·증상·복용 약 기록을 준비합니다.'}, {'@type':'HowToStep',position:3,name:'당일 흐름 요약 확인',text:'접수·검사·상담·수술·회복 순서를 요약으로 파악하고, 상세 절차는 수술 안내에서 확인합니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'당일 내원 전 준비 체크리스트', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'여성건강 진료정보',item:'https://www.yeonsei365.com/blog'}, {'@type':'ListItem',position:3,name:'당일 내원 전 준비',item:PAGE_URL} ] }
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
        <div style={{ margin: '28px 0 0' }}><img src="/og-image.jpg" alt="임신중절수술 당일 내원 전 준비 체크리스트 연세365산부인과의원" width="780" height="410" style={{ width: '100%', borderRadius: '18px', display: 'block' }} /></div>
        <div style={{ background: `linear-gradient(160deg, ${C.pp} 0%, ${C.pd} 40%, ${C.p} 100%)`, borderRadius: '20px', padding: 'clamp(24px,5vw,40px) clamp(20px,5vw,36px)', margin: '20px 0 28px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>{['내원 전 준비','체크리스트','금식·신분증','당일 흐름 요약'].map(t => <span key={t} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>{t}</span>)}</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '180px' }}>
              <h1 style={{ color: '#fff', fontSize: 'clamp(20px,4vw,26px)', fontWeight: 900, lineHeight: 1.45, margin: '0 0 12px' }}>당일 내원 전 준비<br />체크리스트</h1>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(12px,3vw,14px)', lineHeight: 1.8, margin: 0 }}>금식·신분증·증상 기록 등 내원 전 확인할 항목을 정리합니다. 전체 절차·안전성은 수술 안내에서 확인하세요. · <ViewCounter slug="blog-abortion-process" /></p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '16px', padding: '18px 22px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', marginBottom: '4px' }}>참고 내원 시간</div>
              <div style={{ color: '#FFD700', fontSize: 'clamp(32px,7vw,44px)', fontWeight: 900, lineHeight: 1 }}>2~3시간</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', marginTop: '4px' }}>검사·상태 후 확인</div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '20px', fontSize: '12px', color: C.tm2 }}>
          <Link href="/" style={{ color: C.tm2, textDecoration: 'none' }}>홈</Link>{' > '}<Link href="/blog" style={{ color: C.tm2, textDecoration: 'none' }}>여성건강 진료정보</Link>{' > '}<span style={{ color: C.p }}>당일 내원 전 준비</span>
        </div>
        <section style={{ marginBottom: '36px' }}>
          <SH n="1" title="내원 전, 무엇을 챙기면 되나요?" />
          <p style={bt}>
            임신 여부와 주수 확인부터 방법·비용·회복까지 전체 흐름은{' '}
            <Link href="/abortion" style={{ color: C.p, fontWeight: 700 }}>임신중절수술 전체 안내</Link>
            에서 확인할 수 있습니다. 이 글은 당일 내원 전 준비에 초점을 둡니다. 접수부터 수술·회복까지 방법·마취·안전성 등 전체 절차는{' '}
            <Link href="/abortion/surgery" style={{ color: C.p, fontWeight: 700 }}>임신중절수술 절차·안전성 안내</Link>
            에서 확인하세요.
          </p>
          <IBox>
            준비 핵심: 예약·금식 안내 확인 | 신분증 | 생리일·테스트기 날짜·증상·복용 약 기록 | 귀가 방법(운전 금지 안내 포함) | 기준일 2026.11
          </IBox>
          <div style={{ display: 'grid', gap: '10px', marginBottom: '20px' }}>
            {[
              '예약 시각과 금식 시작 시각을 다시 확인한다',
              '신분증을 챙긴다',
              '마지막 생리 시작일·테스트기 확인일·현재 증상을 적는다',
              '복용 중인 약·알레르기·과거 수술력을 말할 수 있게 정리한다',
              '수면마취 후 귀가 방법(대중교통·동행)을 미리 정한다',
            ].map((item) => (
              <div key={item} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '12px', padding: '14px 16px', fontSize: '14px', color: C.ts, lineHeight: 1.7 }}>
                ✓ {item}
              </div>
            ))}
          </div>
        </section>
        <Divider />
        <section style={{ marginBottom: '36px' }}>
          <SH n="2" title="당일 흐름 요약 타임라인 (참고)" />
          <p style={bt}>
            아래는 내원 전 일정 파악을 위한 요약입니다. 실제 소요·가능 여부는 검사·예약·개인 상태에 따라 달라질 수 있습니다. 방법·마취·안전성 등 상세 내용은 위 수술 전후 절차 안내를 참고하세요.
          </p>
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
          <SH n="3" title="자주 묻는 질문" />
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
            {[{href:'/blog/abortion-fasting',label:'임신중절수술 금식'},{href:'/blog/abortion-after',label:'임신중절수술 후 관리'},{href:'/blog/abortion-period',label:'임신중절수술 기간'},{href:'/abortion/info',label:'보호자·보험·준비 안내'},{href:'/blog/abortion-cost',label:'임신중절수술 비용'},{href:'/blog',label:'전체 수술정보 보기'}].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', background: C.pb, border: `1px solid ${C.bd}`, borderRadius: '10px', padding: '12px 16px', textDecoration: 'none', fontSize: '13px', color: C.p, fontWeight: 700 }}>→ {l.label}</Link>
            ))}
          </div>
        </div>
        <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: 'clamp(24px,5vw,36px)', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: 'clamp(18px,4vw,22px)', fontWeight: 900, marginBottom: '8px' }}>연세365산부인과의원</div>
          <div style={{ fontSize: '14px', opacity: 0.85, marginBottom: '24px', lineHeight: 1.8 }}>사당역 4번 출구 도보 3분 · 당일 진행은 검사·일정 후 확인<br />모든 상담은 철저히 비밀이 보장됩니다</div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
            <a href="tel:02-585-3650" style={{ background: 'transparent', color: '#fff', fontSize: '15px', border: '1px solid rgba(255,255,255,0.5)', padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
          </div>
        </div>
      </div>
    </>
  )
}
