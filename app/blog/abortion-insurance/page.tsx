import type { Metadata } from 'next'
import Link from 'next/link'
import { clinicSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: '임신중절수술 보험 | 실손보험 적용 여부 완벽 안내 2026 | 연세365산부인과',
  description: '임신중절수술 보험 적용 여부를 완벽하게 안내합니다. 건강보험·실손보험 적용 여부, 비급여 항목, 영수증 발급까지. 사당역 4번출구 연세365산부인과.',
  keywords: ['임신중절수술보험','임신중절수술 보험','낙태수술보험','임신중절보험','낙태보험','임신중절수술실손보험','낙태실손보험','임신중절수술건강보험','낙태건강보험','임신중절수술비급여','낙태비용보험처리','임신중절수술영수증','사당역산부인과','임신중절수술비용','낙태비용'],
  openGraph: { title: '임신중절수술 보험 | 실손보험 적용 여부 | 연세365산부인과', description: '임신중절수술 보험 적용 여부 완벽 안내. 사당역 4번출구.', url: 'https://www.yeonsei365.com/blog/abortion-insurance', images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: 'https://www.yeonsei365.com/blog/abortion-insurance' },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 보험 | 실손보험 적용 여부 완벽 안내 2026 | 연세365산부인과',
    description: '임신중절수술 보험 적용 여부를 완벽하게 안내합니다. 건강보험·실손보험 적용 여부, 비급여 항목, 영수증 발급까지. 사당역 4번출구 연세365산부인과.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '임신중절수술 보험 | 실손보험 적용 여부 완벽 안내 2026',
  description: '임신중절수술 보험 적용 여부를 완벽하게 안내합니다.',
  dateModified: '2026-05-22',
  author: { '@type': 'Organization', name: '연세365산부인과' },
  publisher: { '@type': 'Organization', name: '연세365산부인과' },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '임신중절수술 건강보험이 적용되나요?', acceptedAnswer: { '@type': 'Answer', text: '인공임신중절수술은 건강보험 비급여 항목으로 건강보험이 적용되지 않습니다. 전액 본인 부담입니다.' } },
    { '@type': 'Question', name: '임신중절수술 실손보험이 적용되나요?', acceptedAnswer: { '@type': 'Answer', text: '대부분의 실손보험에서 임신중절수술은 보장 제외 항목입니다. 다만 보험사와 가입 상품에 따라 다를 수 있으므로 본인 보험사에 직접 문의하세요.' } },
  ],
}
const PAGE_URL = 'https://www.yeonsei365.com/blog/abortion-insurance'
const PAGE_DATE = '2026-04-10'
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 보험 | 실손보험 적용 여부 완벽 안내 2026', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:PAGE_DATE, reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, about:{'@type':'MedicalCondition',name:'임신중절수술 보험 적용'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 보험 적용 확인 방법', description:'임신중절수술 보험 적용 여부 확인 단계별 안내', step:[ {'@type':'HowToStep',position:1,name:'보험사 확인',text:'가입한 실손보험 약관에서 임신중절수술 적용 여부를 확인합니다.'}, {'@type':'HowToStep',position:2,name:'서류 준비',text:'진단서, 수술확인서, 영수증을 병원에서 발급받습니다.'}, {'@type':'HowToStep',position:3,name:'보험 청구',text:'보험사 앱 또는 고객센터를 통해 보험을 청구합니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 보험 | 실손보험 적용 여부 완벽 안내 2026', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절수술정보',item:'https://www.yeonsei365.com/blog'}, {'@type':'ListItem',position:3,name:'임신중절수술 보험',item:PAGE_URL} ] }
const C = { p: '#CC2D5E', pd: '#8C1A4A', pp: '#4A0E2E', pb: '#FCE8EF', pt: '#B0456E', bd: '#FFE0E8', tm: '#1A0A10', ts: '#444455', tm2: '#888' }
const bt: React.CSSProperties = { fontSize: '15px', color: C.ts, lineHeight: 1.95, marginBottom: '14px' }
function SH({ n, title }: { n: string; title: string }) { return <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}><span style={{ background: C.p, color: '#fff', fontSize: '13px', fontWeight: 700, width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span><h2 style={{ fontSize: '22px', fontWeight: 700, color: C.tm, margin: 0, lineHeight: 1.3 }}>{title}</h2></div> }
function WBox({ children }: { children: React.ReactNode }) { return <div style={{ borderLeft: '4px solid #E29000', background: '#FEF5E0', borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#7A5500', lineHeight: 1.85, margin: 0 }}>{children}</p></div> }
function Divider() { return <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '36px 0' }} /> }

export default function AbortionInsurancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
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
        <div style={{ margin: '28px 0 0' }}><img src="/og-image.jpg" alt="임신중절수술 보험 실손보험 연세365산부인과" width="780" height="410" style={{ width: '100%', borderRadius: '18px', display: 'block' }} /></div>
        <div style={{ background: `linear-gradient(160deg, ${C.pp} 0%, ${C.pd} 40%, ${C.p} 100%)`, borderRadius: '20px', padding: 'clamp(24px,5vw,40px) clamp(20px,5vw,36px)', margin: '20px 0 28px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>{['보험안내','건강보험','실손보험','비급여안내'].map(t => <span key={t} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>{t}</span>)}</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '180px' }}>
              <h1 style={{ color: '#fff', fontSize: 'clamp(20px,4vw,26px)', fontWeight: 900, lineHeight: 1.45, margin: '0 0 12px' }}>임신중절수술 보험<br />건강보험·실손보험 적용 여부</h1>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(12px,3vw,14px)', lineHeight: 1.8, margin: 0 }}>건강보험·실손보험 적용 여부, 비급여 항목, 영수증 발급까지 투명하게 안내합니다.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '16px', padding: '18px 22px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', marginBottom: '4px' }}>8주 미만 기준</div>
              <div style={{ color: '#FFD700', fontSize: 'clamp(40px,8vw,52px)', fontWeight: 900, lineHeight: 1 }}>45</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', marginTop: '4px' }}>만원 (카드·현금 동일)</div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '20px', fontSize: '12px', color: C.tm2 }}>
          <Link href="/" style={{ color: C.tm2, textDecoration: 'none' }}>홈</Link>{' > '}<Link href="/blog" style={{ color: C.tm2, textDecoration: 'none' }}>임신중절수술정보</Link>{' > '}<span style={{ color: C.p }}>임신중절수술 보험</span>
        </div>
        <section style={{ marginBottom: '36px' }}>
          <SH n="1" title="임신중절수술 건강보험 적용 여부" />
          <p style={bt}>인공임신중절수술은 건강보험 비급여 항목으로 건강보험이 적용되지 않습니다. 따라서 수술 비용 전액이 본인 부담입니다. 이는 임신중절수술이 의학적 필요성이 아닌 개인적 선택에 의한 시술로 분류되기 때문입니다.</p>
          <p style={bt}>다만 모자보건법 제14조에 해당하는 사유(유전질환, 강간임신, 모체 건강 위협 등)로 시행되는 경우에는 일부 보험 적용이 가능할 수 있습니다. 이 경우에도 보험 적용 여부는 보험사와 가입 상품에 따라 달라질 수 있으므로 반드시 사전에 확인하시기 바랍니다.</p>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div style={{ border: `1px solid ${C.bd}`, borderRadius: '12px', overflow: 'hidden', minWidth: '340px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead><tr style={{ background: '#F8E8EF' }}>{['보험 종류', '적용 여부', '비고'].map(h => <th key={h} style={{ padding: '12px 14px', color: C.pd, fontWeight: 700, textAlign: 'left' }}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['건강보험 (급여)', '❌ 적용 안됨', '비급여 항목'],
                    ['실손보험', '❌ 대부분 제외', '보험사·상품마다 다름'],
                    ['모자보건법 사유 해당 시', '⚠️ 일부 가능', '사전 보험사 확인 필수'],
                    ['카드 결제', '✅ 가능', '현금과 동일가'],
                    ['현금영수증', '✅ 가능', '요청 시 발급'],
                    ['의료비 영수증', '✅ 발급 가능', '비급여 항목으로 처리'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: `1px solid ${C.bd}`, background: i % 2 === 0 ? '#FFFAFB' : '#fff' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600, color: C.tm }}>{row[0]}</td>
                      <td style={{ padding: '10px 14px', color: row[1].includes('❌') ? '#C62828' : row[1].includes('✅') ? '#27ae60' : '#E29000', fontWeight: 600 }}>{row[1]}</td>
                      <td style={{ padding: '10px 14px', color: C.ts, fontSize: '13px' }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <WBox>⚠ 보험 적용 여부는 보험사와 가입 상품에 따라 다를 수 있습니다. 정확한 보장 내용은 본인 보험사에 직접 문의하세요. 연세365산부인과는 보험 적용 여부를 보증하거나 안내드리기 어렵습니다.</WBox>
        </section>
        <Divider />
        <section style={{ marginBottom: '36px' }}>
          <SH n="2" title="자주 묻는 질문" />
          {[
            { q: '임신중절수술 비용이 보험 처리가 되나요?', a: '인공임신중절수술은 건강보험 비급여 항목으로 건강보험이 적용되지 않습니다. 실손보험도 대부분 보장 제외 항목입니다. 모자보건법상 사유에 해당하는 경우 일부 가능할 수 있으나 반드시 보험사에 사전 확인하세요.' },
            { q: '영수증 발급이 가능한가요?', a: '네, 요청하시면 의료비 영수증을 발급해드립니다. 비급여 항목으로 처리되며 현금영수증도 발급 가능합니다.' },
            { q: '카드 결제가 가능한가요?', a: '네, 카드와 현금 모두 결제 가능하며 동일한 가격입니다. 추가 비용 없이 처음 안내한 가격이 최종 가격입니다.' },
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
            {[{href:'/abortion/surgery',label:'임신중절수술 금액·방법'},{href:'/blog/abortion-cost',label:'임신중절수술 비용'},{href:'/blog/abortion-after',label:'임신중절수술 후 관리'},{href:'/blog/abortion-period',label:'임신중절수술 기간'},{href:'/blog/abortion-legal',label:'낙태합법화 안내'},{href:'/blog',label:'전체 수술정보 보기'}].map(l => (
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