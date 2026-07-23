import type { Metadata } from 'next'
import Link from 'next/link'
import { clinicSchema } from '@/lib/schemas'
import ViewCounter from '@/components/ViewCounter'

export const metadata: Metadata = {
  title: '임신중절수술 후 생리 | 재개 시기·주기 변화 완벽 안내 2026 | 연세365산부인과',
  description: '임신중절수술 후 생리 재개 시기, 생리량·주기 변화, 정상 범위, 이상 증상까지 완벽하게 안내합니다. 사당역 4번 출구 연세365산부인과의원.',
  keywords: ['임신중절수술후생리','임신중절수술 후 생리','낙태후생리','낙태수술후생리','중절수술후생리','임신중절후생리재개','낙태후생리주기','임신중절수술생리언제','낙태후첫생리','임신중절수술생리불순','낙태후생리불순','사당역산부인과','임신중절수술비용','낙태비용'],
  openGraph: { title: '임신중절수술 후 생리 | 재개 시기 안내 | 연세365산부인과', description: '임신중절수술 후 생리 재개 시기·주기 변화 완벽 안내. 사당역 4번 출구.', url: 'https://www.yeonsei365.com/blog/abortion-menstruation', images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: 'https://www.yeonsei365.com/blog/abortion-menstruation' },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 후 생리 | 재개 시기·주기 변화 완벽 안내 2026 | 연세365산부인과',
    description: '임신중절수술 후 생리 재개 시기, 생리량·주기 변화, 정상 범위, 이상 증상까지 완벽하게 안내합니다. 사당역 4번 출구 연세365산부인과의원.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '임신중절수술 후 생리는 언제 시작되나요?', acceptedAnswer: { '@type': 'Answer', text: '보통 수술 후 4~6주 내에 첫 생리가 재개됩니다. 개인차가 있으며 8주 이상 생리가 없다면 내원하여 확인하세요.' } },
    { '@type': 'Question', name: '임신중절수술 후 생리량이 달라질 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '처음 1~2번의 생리는 양이 평소보다 적거나 많을 수 있습니다. 대부분 2~3회 생리 후 정상으로 돌아옵니다.' } },
    { '@type': 'Question', name: '임신중절수술 후 생리 전에도 임신이 가능한가요?', acceptedAnswer: { '@type': 'Answer', text: '네, 수술 후 첫 생리가 시작되기 전에도 배란이 일어나 임신이 가능합니다. 반드시 피임을 하세요.' } },
  ],
}
const PAGE_URL = 'https://www.yeonsei365.com/blog/abortion-menstruation'
const PAGE_DATE = '2026-04-10'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 후 생리 | 재개 시기·주기 변화 완벽 안내 2026', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 후 생리 | 재개 시기·주기 변화 완벽 안내 2026', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신중절수술 후 생리'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 후 생리 회복 관리 방법', description:'임신중절수술 후 생리 회복 단계별 안내', step:[ {'@type':'HowToStep',position:1,name:'수술 후 안정',text:'수술 후 4~6주 내 첫 생리가 시작됩니다.'}, {'@type':'HowToStep',position:2,name:'이상 증상 확인',text:'생리가 2개월 이상 없거나 과다출혈 시 즉시 내원합니다.'}, {'@type':'HowToStep',position:3,name:'피임 시작',text:'다음 생리 전까지 반드시 피임합니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 후 생리 | 재개 시기·주기 변화 완벽 안내 2026', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절수술정보',item:'https://www.yeonsei365.com/blog'}, {'@type':'ListItem',position:3,name:'임신중절수술 후 생리',item:PAGE_URL} ] }
const C = { p: '#CC2D5E', pd: '#8C1A4A', pp: '#4A0E2E', pb: '#FCE8EF', pt: '#B0456E', bd: '#FFE0E8', tm: '#1A0A10', ts: '#444455', tm2: '#888' }
const bt: React.CSSProperties = { fontSize: '15px', color: C.ts, lineHeight: 1.95, marginBottom: '14px' }
function SH({ n, title }: { n: string; title: string }) { return <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}><span style={{ background: C.p, color: '#fff', fontSize: '13px', fontWeight: 700, width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span><h2 style={{ fontSize: '22px', fontWeight: 700, color: C.tm, margin: 0, lineHeight: 1.3 }}>{title}</h2></div> }
function IBox({ children }: { children: React.ReactNode }) { return <div style={{ borderLeft: `4px solid ${C.p}`, background: C.pb, borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#7A2040', lineHeight: 1.85, margin: 0 }}>{children}</p></div> }
function WBox({ children }: { children: React.ReactNode }) { return <div style={{ borderLeft: '4px solid #E29000', background: '#FEF5E0', borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#7A5500', lineHeight: 1.85, margin: 0 }}>{children}</p></div> }
function Divider() { return <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '36px 0' }} /> }

export default function AbortionMenstruationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <div style={{ height: '60px' }} />
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 20px 100px', fontFamily: '"Pretendard", -apple-system, sans-serif' }}>
        <div style={{ margin: '28px 0 0' }}><img src="/og-image.jpg" alt="임신중절수술 후 생리 재개시기 연세365산부인과" width="780" height="410" style={{ width: '100%', borderRadius: '18px', display: 'block' }} /></div>
        <div style={{ background: `linear-gradient(160deg, ${C.pp} 0%, ${C.pd} 40%, ${C.p} 100%)`, borderRadius: '20px', padding: 'clamp(24px,5vw,40px) clamp(20px,5vw,36px)', margin: '20px 0 28px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>{['후생리안내','재개시기','주기변화','피임안내'].map(t => <span key={t} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>{t}</span>)}</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '180px' }}>
              <h1 style={{ color: '#fff', fontSize: 'clamp(20px,4vw,26px)', fontWeight: 900, lineHeight: 1.45, margin: '0 0 12px' }}>임신중절수술 후 생리<br />재개 시기·주기 변화 완벽 안내</h1>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(12px,3vw,14px)', lineHeight: 1.8, margin: 0 }}>수술 후 첫 생리 시기, 생리량·주기 변화, 정상 범위, 이상 증상까지 전문의가 안내합니다. · <ViewCounter slug="blog-abortion-menstruation" /></p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '16px', padding: '18px 22px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', marginBottom: '4px' }}>첫 생리 재개</div>
              <div style={{ color: '#FFD700', fontSize: 'clamp(32px,7vw,44px)', fontWeight: 900, lineHeight: 1 }}>4~6주</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', marginTop: '4px' }}>수술 후 평균</div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '20px', fontSize: '12px', color: C.tm2 }}>
          <Link href="/" style={{ color: C.tm2, textDecoration: 'none' }}>홈</Link>{' > '}<Link href="/blog" style={{ color: C.tm2, textDecoration: 'none' }}>임신중절수술정보</Link>{' > '}<span style={{ color: C.p }}>임신중절수술 후 생리</span>
        </div>
        <section style={{ marginBottom: '36px' }}>
          <SH n="1" title="임신중절수술 후 생리 재개 시기" />
          <p style={bt}>임신중절수술 후 첫 생리는 보통 수술 후 4~6주 내에 재개됩니다. 이는 수술로 인해 자궁 내막이 제거된 후 새롭게 재형성되는 데 걸리는 시간입니다. 개인의 호르몬 상태와 회복 속도에 따라 다소 차이가 있을 수 있습니다.</p>
          <p style={bt}>수술 후 출혈과 첫 생리를 혼동하는 경우가 있습니다. 수술 직후 발생하는 출혈은 자궁 수축 과정에서 나타나는 정상적인 반응으로, 생리와는 다릅니다. 보통 수술 후 출혈은 7~14일간 지속되다 멈추며, 이후 4~6주 후에 첫 생리가 시작됩니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '16px' }}>
            {[{t:'4~6주',d:'대부분의 경우 첫 생리 재개. 가장 일반적인 시기입니다.',c:'#27ae60'},{t:'6~8주',d:'다소 늦은 경우. 호르몬 회복이 느린 경우 발생합니다.',c:'#E29000'},{t:'8주 이상',d:'내원 권장. 자궁 유착이나 호르몬 이상 확인 필요.',c:'#C62828'}].map(c => (
              <div key={c.t} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px', borderTop: `3px solid ${c.c}` }}>
                <div style={{ fontSize: '16px', fontWeight: 900, color: c.c, marginBottom: '8px' }}>{c.t}</div>
                <div style={{ fontSize: '13px', color: C.ts, lineHeight: 1.7 }}>{c.d}</div>
              </div>
            ))}
          </div>
          <IBox>수술 후 8주 이상 생리가 없다면 반드시 내원하여 초음파 검사를 받으세요. 자궁 내 유착이나 호르몬 불균형 여부를 확인해야 합니다.</IBox>
        </section>
        <Divider />
        <section style={{ marginBottom: '36px' }}>
          <SH n="2" title="생리량·주기 변화" />
          <p style={bt}>임신중절수술 후 처음 1~2번의 생리는 평소와 다를 수 있습니다. 이는 자궁 내막이 재형성되는 과정에서 나타나는 정상적인 변화입니다. 대부분 2~3회 생리 후 평소 주기로 돌아옵니다.</p>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div style={{ border: `1px solid ${C.bd}`, borderRadius: '12px', overflow: 'hidden', minWidth: '340px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead><tr style={{ background: '#F8E8EF' }}>{['변화', '정상 범위', '이상 신호'].map(h => <th key={h} style={{ padding: '12px 14px', color: C.pd, fontWeight: 700, textAlign: 'left' }}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['생리량', '평소보다 적거나 많을 수 있음', '극도로 적거나 과다 출혈'],
                    ['생리 주기', '평소보다 짧거나 길 수 있음', '3개월 이상 불규칙 지속'],
                    ['생리 기간', '3~7일 (평소와 유사)', '2일 이하 또는 10일 이상'],
                    ['생리통', '평소와 비슷하거나 약할 수 있음', '극심한 통증 지속'],
                    ['색깔', '붉은색~갈색 (정상)', '녹색·악취 동반'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: `1px solid ${C.bd}`, background: i % 2 === 0 ? '#FFFAFB' : '#fff' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600, color: C.tm }}>{row[0]}</td>
                      <td style={{ padding: '10px 14px', color: '#27ae60', fontSize: '13px' }}>{row[1]}</td>
                      <td style={{ padding: '10px 14px', color: '#C62828', fontSize: '13px' }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Divider />
        <section style={{ marginBottom: '36px' }}>
          <SH n="3" title="생리 전 피임이 반드시 필요한 이유" />
          <p style={bt}>임신중절수술 후 첫 생리가 시작되기 전에도 배란이 일어날 수 있습니다. 수술 후 호르몬 수치가 회복되면서 배란이 예상보다 일찍 시작될 수 있으며, 이 경우 첫 생리 전에 임신이 가능합니다.</p>
          <p style={bt}>수술 후 원치 않는 재임신을 방지하기 위해 반드시 피임을 하시기 바랍니다. 피임 방법에 대해서는 전문의와 상담하여 본인에게 맞는 방법을 선택하세요. 연세365산부인과의원에서는 수술 후 피임 상담도 함께 제공하고 있습니다.</p>
          <WBox>⚠ 수술 후 첫 생리 전에도 임신이 가능합니다. 성관계를 재개하기 전 반드시 피임을 시작하세요.</WBox>
        </section>
        <Divider />
        <section style={{ marginBottom: '36px' }}>
          <SH n="4" title="자주 묻는 질문" />
          {[
            { q: '임신중절수술 후 생리는 언제 시작되나요?', a: '보통 수술 후 4~6주 내에 첫 생리가 재개됩니다. 개인차가 있으며 8주 이상 생리가 없다면 내원하여 자궁 상태를 확인하세요.' },
            { q: '수술 후 생리량이 줄어도 괜찮은가요?', a: '처음 1~2번의 생리는 평소보다 양이 적을 수 있습니다. 이는 자궁 내막이 재형성되는 과정에서 나타나는 정상적인 변화입니다. 2~3회 후 평소 양으로 돌아옵니다.' },
            { q: '생리 전에도 피임을 해야 하나요?', a: '네, 반드시 피임이 필요합니다. 수술 후 첫 생리가 시작되기 전에도 배란이 일어나 임신이 가능합니다.' },
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
            {[{href:'/abortion/surgery',label:'임신중절수술 금액·방법'},{href:'/blog/abortion-after',label:'임신중절수술 후 관리'},{href:'/blog/abortion-side',label:'임신중절수술 부작용'},{href:'/blog/abortion-period',label:'임신중절수술 기간'},{href:'/blog/abortion-cost',label:'임신중절수술 비용'},{href:'/blog',label:'전체 수술정보 보기'}].map(l => (
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