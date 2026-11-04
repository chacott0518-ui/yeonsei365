import type { Metadata } from 'next'
import Link from 'next/link'
import { clinicSchema } from '@/lib/schemas'
import ViewCounter from '@/components/ViewCounter'

export const metadata: Metadata = {
  title: '임신중절수술 보호자 동행이 필요한 경우 | 귀가·마취 준비 | 연세365산부인과의원',
  description: '임신중절수술 보호자 동행이 필요한 경우를 마취·귀가·개인 상태 중심으로 안내합니다. 연령·동의 기준은 의료기관에서 확인해 주세요. 사당역 연세365산부인과의원.',
  keywords: ['임신중절수술보호자','임신중절수술 보호자','낙태수술보호자','임신중절보호자','낙태보호자','임신중절수술혼자','낙태혼자가능','임신중절수술혼자가능','낙태수술혼자','임신중절수술미성년자','낙태미성년자','임신중절수술동반','사당역산부인과','임신중절수술비용','낙태비용'],
  openGraph: { title: '임신중절수술 보호자 동행이 필요한 경우 | 귀가·마취 준비 | 연세365산부인과의원', description: '마취·귀가·개인 상태 중심으로 보호자 동행 안내. 사당역 연세365산부인과의원.', url: 'https://www.yeonsei365.com/blog/abortion-guardian', images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: 'https://www.yeonsei365.com/blog/abortion-guardian' },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 보호자 동행이 필요한 경우 | 귀가·마취 준비 | 연세365산부인과의원',
    description: '임신중절수술 보호자 동행이 필요한 경우를 마취·귀가·개인 상태 중심으로 안내합니다. 연령·동의 기준은 의료기관에서 확인해 주세요. 사당역 연세365산부인과의원.',
  },
}

const PAGE_URL = 'https://www.yeonsei365.com/blog/abortion-guardian'
const PAGE_DATE = '2026-04-10'
const PAGE_MODIFIED = '2026-05-22'

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: '임신중절수술 보호자 동행이 필요한 경우 | 귀가·마취 준비',
  datePublished: PAGE_DATE, dateModified: PAGE_MODIFIED,
  image: 'https://www.yeonsei365.com/og-image.jpg',
  author: { '@type': 'Organization', name: '연세365산부인과의원', url: 'https://www.yeonsei365.com' },
  publisher: { '@type': 'MedicalOrganization', name: '연세365산부인과의원', logo: { '@type': 'ImageObject', url: 'https://i.imgur.com/f7h5DY0.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL }, url: PAGE_URL,
}
const medicalWebPageSchema = {
  '@context': 'https://schema.org', '@type': 'MedicalWebPage',
  name: '임신중절수술 보호자 동행이 필요한 경우 | 귀가·마취 준비',
  url: PAGE_URL,
  specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
  medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' },
  about: { '@type': 'MedicalCondition', name: '임신중절수술 보호자 동반' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: '임신중절수술 내원 전 보호자·귀가 준비',
  description: '마취·귀가·서류 확인을 위한 내원 준비 안내',
  step: [
    { '@type': 'HowToStep', position: 1, name: '예약·확인', text: '전화(02-585-3650) 또는 카카오톡으로 예약하고 필요한 서류·동행 여부를 확인합니다.' },
    { '@type': 'HowToStep', position: 2, name: '신분증·준비물', text: '안내받은 신분증·준비물을 지참합니다.' },
    { '@type': 'HowToStep', position: 3, name: '귀가 계획', text: '수술 후 운전 불가. 대중교통 또는 동행 귀가 계획을 미리 준비합니다.' },
  ],
  tool: { '@type': 'HowToTool', name: '연세365산부인과의원' },
}
const speakableSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: '임신중절수술 보호자 동행이 필요한 경우 | 귀가·마취 준비',
  url: PAGE_URL,
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
}
const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.yeonsei365.com' },
    { '@type': 'ListItem', position: 2, name: '임신중절수술정보', item: 'https://www.yeonsei365.com/blog' },
    { '@type': 'ListItem', position: 3, name: '임신중절수술 보호자', item: PAGE_URL },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '임신중절수술 혼자 가도 되나요?', acceptedAnswer: { '@type': 'Answer', text: '혼자 내원 가능 여부는 마취 방식·개인 상태·필요한 서류에 따라 달라질 수 있습니다. 내원 전 의료기관에 확인해 주세요. 수면마취 후 운전은 불가하므로 대중교통 또는 동행 귀가가 더 안전합니다.' } },
    { '@type': 'Question', name: '보호자 동의가 꼭 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '필요한 동의·서류는 상황과 의료기관 안내에 따라 다를 수 있습니다. 온라인으로 단정하지 마시고 전화 또는 카카오톡으로 먼저 상담해 주세요.' } },
  ],
}

const C = { p: '#CC2D5E', pd: '#8C1A4A', pp: '#4A0E2E', pb: '#FCE8EF', pt: '#B0456E', bd: '#FFE0E8', tm: '#1A0A10', ts: '#444455', tm2: '#888' }
const bt: React.CSSProperties = { fontSize: '15px', color: C.ts, lineHeight: 1.95, marginBottom: '14px' }
function SH({ n, title }: { n: string; title: string }) { return <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}><span style={{ background: C.p, color: '#fff', fontSize: '13px', fontWeight: 700, width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span><h2 style={{ fontSize: '22px', fontWeight: 700, color: C.tm, margin: 0, lineHeight: 1.3 }}>{title}</h2></div> }
function IBox({ children }: { children: React.ReactNode }) { return <div style={{ borderLeft: `4px solid ${C.p}`, background: C.pb, borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#7A2040', lineHeight: 1.85, margin: 0 }}>{children}</p></div> }
function WBox({ children }: { children: React.ReactNode }) { return <div style={{ borderLeft: '4px solid #E29000', background: '#FEF5E0', borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#7A5500', lineHeight: 1.85, margin: 0 }}>{children}</p></div> }
function Divider() { return <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '36px 0' }} /> }

export default function AbortionGuardianPage() {
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
        <div style={{ margin: '28px 0 0' }}><img src="/og-image.jpg" alt="임신중절수술 보호자 혼자가능 연세365산부인과의원" width="780" height="410" style={{ width: '100%', borderRadius: '18px', display: 'block' }} /></div>
        <div style={{ background: `linear-gradient(160deg, ${C.pp} 0%, ${C.pd} 40%, ${C.p} 100%)`, borderRadius: '20px', padding: 'clamp(24px,5vw,40px) clamp(20px,5vw,36px)', margin: '20px 0 28px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>{['보호자안내','마취·귀가','동의확인','비밀보장'].map(t => <span key={t} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>{t}</span>)}</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '180px' }}>
              <h1 style={{ color: '#fff', fontSize: 'clamp(20px,4vw,26px)', fontWeight: 900, lineHeight: 1.45, margin: '0 0 12px' }}>임신중절수술 보호자 동행은<br />언제 필요한가요?</h1>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(12px,3vw,14px)', lineHeight: 1.8, margin: 0 }}>마취 후 귀가, 개인 건강 상태, 의료기관 확인이 필요한 경우를 중심으로 안내합니다. · <ViewCounter slug="blog-abortion-guardian" /></p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '16px', padding: '18px 22px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', marginBottom: '4px' }}>확인 포인트</div>
              <div style={{ color: '#FFD700', fontSize: 'clamp(18px,4.5vw,24px)', fontWeight: 900, lineHeight: 1.25 }}>마취·귀가<br />준비</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', marginTop: '4px' }}>당일 운전 불가</div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '20px', fontSize: '12px', color: C.tm2 }}>
          <Link href="/" style={{ color: C.tm2, textDecoration: 'none' }}>홈</Link>{' > '}<Link href="/blog" style={{ color: C.tm2, textDecoration: 'none' }}>임신중절수술정보</Link>{' > '}<span style={{ color: C.p }}>임신중절수술 보호자</span>
        </div>
        <section style={{ marginBottom: '36px' }}>
          <SH n="1" title="보호자 동행이 도움이 되는 경우는?" />
          <p style={bt}>
            보호자·동행 필요 여부는 연령만으로 단정하기보다, 마취 방식·개인 건강 상태·당일 귀가 방법을 의료기관에서 확인하는 것이 중요합니다. 전체 클리닉 안내는{' '}
            <Link href="/abortion" style={{ color: C.p, fontWeight: 700 }}>임신중절수술 전체 안내</Link>
            를 참고하시고, 내원 전 전화·카카오톡으로 준비사항을 물어보시면 됩니다. 상담과 진료는 1:1로 진행되며 비밀이 보장됩니다.
          </p>
          <p style={bt}>수면마취 후에는 판단력이 일시적으로 저하되고 당일 운전은 불가합니다. 대중교통으로 귀가하거나, 가능하다면 동행인이 함께하는 편이 더 안전합니다. 어지러움·출혈·통증 등 개인 상태에 따라 관찰 시간이 달라질 수 있습니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px' }}>
            {[
              { t: '마취·귀가 준비', d: '당일 운전 불가. 대중교통 또는 동행 귀가 계획을 미리 확인하세요.', c: '#27ae60', icon: '✅' },
              { t: '동의·서류 확인', d: '연령·상황에 따라 필요한 서류가 다를 수 있어 내원 전 의료기관에 확인이 필요합니다.', c: '#E29000', icon: '⚠️' },
            ].map(c => (
              <div key={c.t} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px', borderTop: `3px solid ${c.c}` }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: c.c, marginBottom: '8px' }}>{c.icon} {c.t}</div>
                <div style={{ fontSize: '13px', color: C.ts, lineHeight: 1.7 }}>{c.d}</div>
              </div>
            ))}
          </div>
          <IBox>수술 후 운전은 절대 금지입니다. 혼자 내원하시는 경우 반드시 대중교통(지하철·버스·택시)을 이용하여 귀가하세요. 사당역 4번 출구에서 도보 3분 거리에 위치합니다.</IBox>
        </section>
        <Divider />
        <section style={{ marginBottom: '36px' }}>
          <SH n="2" title="동의·동행이 궁금할 때" />
          <p style={bt}>연령·가족 상황·특수 사안에 따라 필요한 동의·동행 절차가 달라질 수 있습니다. 온라인 정보로 단정하지 마시고, 먼저 전화 또는 카카오톡으로 상담 후 내원 여부를 결정하시기 바랍니다.</p>
          <p style={bt}>보호자에게 알리기 어려운 상황이나 추가 확인이 필요한 경우에도 혼자 고민하지 마시고 전문의와 먼저 상담하세요. 모든 상담 내용은 철저히 비밀이 보장됩니다.</p>
          <WBox>⚠ 동의·동행이 걱정되는 상황이라면 먼저 전화(02-585-3650) 또는 카카오톡으로 문의 주세요. 준비할 서류와 귀가 방법을 안내드리겠습니다.</WBox>
        </section>
        <Divider />
        <section style={{ marginBottom: '36px' }}>
          <SH n="3" title="자주 묻는 질문" />
          {[
            { q: '임신중절수술 혼자 가도 되나요?', a: '혼자 내원 가능 여부는 마취 방식·개인 상태·필요한 서류에 따라 달라질 수 있습니다. 내원 전 의료기관에 확인해 주세요. 수술 후 운전은 불가하므로 대중교통 또는 동행 귀가가 더 안전합니다.' },
            { q: '남자친구나 지인을 데려가야 하나요?', a: '반드시 데려가야 하는 것은 아닙니다. 다만 수면마취 후 귀가 시 도움이 있으면 더 안전하므로, 동행 가능 여부를 미리 상의하시는 것을 권장합니다.' },
            { q: '보호자 동의가 꼭 필요한가요?', a: '필요한 동의·서류는 상황과 의료기관 안내에 따라 다를 수 있습니다. 온라인으로 단정하지 마시고 전화 또는 카카오톡으로 먼저 상담해 주세요.' },
            { q: '수술 후 혼자 집에 갈 수 있나요?', a: '수면마취 후 대중교통은 이용 가능한 경우가 많습니다. 다만 운전은 절대 불가하며, 가능하다면 동행인과 함께 귀가하는 것을 권장합니다.' },
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
            {[{href:'/abortion/surgery',label:'임신중절수술 금액·방법'},{href:'/blog/abortion-fasting',label:'임신중절수술 금식'},{href:'/blog/abortion-after',label:'임신중절수술 후 관리'},{href:'/blog/abortion-period',label:'임신중절수술 기간'},{href:'/blog/abortion-cost',label:'임신중절수술 비용'},{href:'/abortion/info',label:'보호자·보험·준비 안내'},{href:'/blog',label:'전체 수술정보 보기'}].map(l => (
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
