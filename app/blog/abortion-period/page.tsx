import type { Metadata } from 'next'
import Link from 'next/link'
import { clinicSchema } from '@/lib/schemas'
import ViewCounter from '@/components/ViewCounter'

export const metadata: Metadata = {
  title: '임신중절수술 기간 | 몇 주까지 가능한가? 합법 기간 완벽 안내 2026 | 연세365산부인과',
  description: '임신중절수술 기간을 주수별로 완벽 정리했습니다. 임신중절수술 몇 주까지 가능한지, 합법 기간, 주수별 시술 방법 차이, 빠른 결정이 중요한 이유, 주수별 비용까지. 사당역 4번 출구 연세365산부인과의원.',
  keywords: [
    '임신중절수술기간', '임신중절수술 기간', '임신중절가능기간', '낙태가능기간',
    '임신중절수술몇주', '임신중절수술몇주까지', '낙태몇주까지', '낙태가능주수',
    '임신중절합법기간', '임신중절수술합법기간', '낙태합법기간', '낙태합법주수',
    '임신중절수술시기', '임신중절가능시기', '낙태가능시기', '낙태시기',
    '임신중절14주', '임신중절10주', '임신중절8주', '낙태14주', '낙태10주',
    '임신중절수술비용', '임신중절수술금액', '낙태비용', '낙태금액',
    '사당역산부인과', '관악구산부인과', '임신중절수술병원', '낙태병원',
    '흡입술', '소파술', '인공임신중절수술기간', '임신초기중절수술기간',
  ],
  openGraph: {
    title: '임신중절수술 기간 | 몇 주까지 가능한가? 2026 | 연세365산부인과',
    description: '임신중절수술 기간 주수별 완벽 안내. 합법 기준·방법·비용 차이. 사당역 4번 출구.',
    url: 'https://www.yeonsei365.com/blog/abortion-period',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 기간 연세365산부인과' }],
  },
  alternates: { canonical: 'https://www.yeonsei365.com/blog/abortion-period' },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 기간 | 몇 주까지 가능한가? 합법 기간 완벽 안내 2026 | 연세365산부인과',
    description: '임신중절수술 기간을 주수별로 완벽 정리했습니다. 임신중절수술 몇 주까지 가능한지, 합법 기간, 주수별 시술 방법 차이, 빠른 결정이 중요한 이유, 주수별 비용까지. 사당역 4번 출구 연세365산부인과의원.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '임신중절수술 기간 | 몇 주까지 가능한가? 합법 기간 완벽 안내 2026',
  description: '임신중절수술 기간을 주수별로 완벽 정리했습니다.',
  author: { '@type': 'Organization', name: '연세365산부인과의원' },
  publisher: { '@type': 'Organization', name: '연세365산부인과의원' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '임신중절수술은 몇 주까지 가능한가요?', acceptedAnswer: { '@type': 'Answer', text: '의학적으로는 임신 10주 이내가 가장 안전합니다. 현행 법률 기준으로는 임신 14주 이내가 사실상 처벌 공백 상태이며, 모자보건법 제14조 조건에 해당하는 경우 24주까지도 가능합니다. 연세365산부인과의원은 임신 10주까지 당일 시술이 가능하며, 이후 주수는 별도 상담 후 안내드립니다.' } },
    { '@type': 'Question', name: '임신중절수술 기간이 짧을수록 좋은 이유는?', acceptedAnswer: { '@type': 'Answer', text: '임신 주수가 짧을수록 태아 크기가 작아 시술이 간단하고 출혈이 적으며 회복이 빠릅니다. 8주 미만 기준 45만원이며 주수가 늘어날수록 비용도 증가합니다.' } },
    { '@type': 'Question', name: '임신 10주 이후에도 수술이 가능한가요?', acceptedAnswer: { '@type': 'Answer', text: '임신 10주 이후에도 수술이 가능하나 난이도가 높아지고 비용이 증가합니다. 11주 이상은 별도 상담 후 안내드립니다.' } },
    { '@type': 'Question', name: '임신 주수를 모르는데 어떻게 하나요?', acceptedAnswer: { '@type': 'Answer', text: '내원하여 초음파 검사를 받으시면 정확한 임신 주수를 확인할 수 있습니다. 마지막 생리일을 모르거나 생리 주기가 불규칙한 경우에도 초음파로 정확하게 확인 가능합니다.' } },
  ],
}
const PAGE_URL = 'https://www.yeonsei365.com/blog/abortion-period'
const PAGE_DATE = '2026-04-10'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 기간 | 몇 주까지 가능한가? 합법 기간 완벽 안내 2026', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 기간 | 몇 주까지 가능한가? 합법 기간 완벽 안내 2026', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신중절수술 가능 기간'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 가능 기간 확인 방법', description:'임신 주수 확인부터 수술까지 단계별 안내', step:[ {'@type':'HowToStep',position:1,name:'임신 주수 확인',text:'초음파 검사로 정확한 임신 주수를 확인합니다.'}, {'@type':'HowToStep',position:2,name:'수술 가능 기간 확인',text:'임신 10주 이내가 가장 안전합니다. 빠를수록 좋습니다.'}, {'@type':'HowToStep',position:3,name:'즉시 예약',text:'주수가 증가할수록 비용과 위험도가 높아지므로 빠르게 예약합니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 기간 | 몇 주까지 가능한가? 합법 기간 완벽 안내 2026', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절수술정보',item:'https://www.yeonsei365.com/blog'}, {'@type':'ListItem',position:3,name:'임신중절수술 기간',item:PAGE_URL} ] }

const C = {
  p: '#CC2D5E', pd: '#8C1A4A', pp: '#4A0E2E',
  pb: '#FCE8EF', pt: '#B0456E', bd: '#FFE0E8',
  tm: '#1A0A10', ts: '#444455', tm2: '#888',
}

function SH({ n, title }: { n: string; title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
      <span style={{ background: C.p, color: '#fff', fontSize: '13px', fontWeight: 700, width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span>
      <h2 style={{ fontSize: '22px', fontWeight: 700, color: C.tm, margin: 0, lineHeight: 1.3 }}>{title}</h2>
    </div>
  )
}

function IBox({ children }: { children: React.ReactNode }) {
  return <div style={{ borderLeft: `4px solid ${C.p}`, background: C.pb, borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#7A2040', lineHeight: 1.85, margin: 0 }}>{children}</p></div>
}

function WBox({ children }: { children: React.ReactNode }) {
  return <div style={{ borderLeft: '4px solid #E29000', background: '#FEF5E0', borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#7A5500', lineHeight: 1.85, margin: 0 }}>{children}</p></div>
}

function Divider() {
  return <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '36px 0' }} />
}

const bt: React.CSSProperties = { fontSize: '15px', color: C.ts, lineHeight: 1.95, marginBottom: '14px' }

export default function AbortionPeriodPage() {
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
        <div style={{ margin: '28px 0 0' }}>
          <img src="/og-image.jpg" alt="임신중절수술 기간 몇주까지 가능 연세365산부인과의원 낙태가능기간 임신중절합법기간" width="780" height="410" style={{ width: '100%', borderRadius: '18px', display: 'block' }} />
        </div>

        <div style={{ background: `linear-gradient(160deg, ${C.pp} 0%, ${C.pd} 40%, ${C.p} 100%)`, borderRadius: '20px', padding: 'clamp(24px,5vw,40px) clamp(20px,5vw,36px)', margin: '20px 0 28px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {['기간안내', '합법기준', '주수별안내', '비용공개'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '180px' }}>
              <h1 style={{ color: '#fff', fontSize: 'clamp(20px,4vw,26px)', fontWeight: 900, lineHeight: 1.45, margin: '0 0 12px' }}>임신중절수술 기간<br />몇 주까지 가능한가?</h1>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(12px,3vw,14px)', lineHeight: 1.8, margin: '0 0 16px' }}>임신중절수술 가능 기간, 주수별 시술 방법 차이, 합법 기준, 빠른 결정이 중요한 이유까지 전문의가 투명하게 안내합니다. · <ViewCounter slug="blog-abortion-period" /></p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {['당일예약 가능', '당일시술 가능', '1인 회복실', '비밀보장'].map(b => (
                  <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: '11px', padding: '4px 12px', borderRadius: '20px' }}>{b}</span>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '16px', padding: '18px 22px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', marginBottom: '4px' }}>8주 미만 기준</div>
              <div style={{ color: '#FFD700', fontSize: 'clamp(40px,8vw,52px)', fontWeight: 900, lineHeight: 1 }}>45</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', marginTop: '4px' }}>만원 (영양제 포함)</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px', fontSize: '12px', color: C.tm2 }}>
          <Link href="/" style={{ color: C.tm2, textDecoration: 'none' }}>홈</Link>{' > '}
          <Link href="/blog" style={{ color: C.tm2, textDecoration: 'none' }}>임신중절수술정보</Link>{' > '}
          <span style={{ color: C.p }}>임신중절수술 기간</span>
        </div>

        <div style={{ background: '#FFF8FA', border: `1px solid ${C.bd}`, borderRadius: '16px', padding: '20px 24px', marginBottom: '36px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: C.p, marginBottom: '14px' }}>📋 목차</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px' }}>
            {[['1','임신중절수술 기간이란?'],['2','주수별 가능 기간 타임라인'],['3','합법적 가능 기간과 조건'],['4','주수별 시술 방법 차이'],['5','주수별 비용 차이'],['6','빠른 결정이 중요한 이유'],['7','정확한 주수 확인 방법'],['8','자주 묻는 질문']].map(([n,t]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: C.p }}>
                <span style={{ background: C.pb, color: C.pt, fontSize: '10px', fontWeight: 700, width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span>{t}
              </div>
            ))}
          </div>
        </div>

        <section style={{ marginBottom: '36px' }}>
          <SH n="1" title="임신중절수술 기간이란?" />
          <p style={bt}>임신중절수술 기간이란 임신중절수술을 안전하게 받을 수 있는 임신 주수 범위를 의미합니다. 임신 주수는 마지막 생리 시작일을 기준으로 계산하며, 정확한 주수는 반드시 초음파 검사를 통해 확인해야 합니다. 임신 주수가 짧을수록 시술이 간단하고 회복이 빠르며 비용도 저렴하기 때문에, 임신 사실을 인지한 즉시 전문의와 상담하시는 것이 중요합니다.</p>
          <p style={bt}>임신 초기라도 방치하면 급격히 주수가 늘어납니다. 임신 6주와 10주는 불과 4주 차이지만 수술 난이도, 비용, 회복 기간에서 큰 차이가 납니다. 임신 여부가 의심된다면 가능한 한 빨리 산부인과를 방문하여 초음파 검사를 받으시기 바랍니다.</p>
          <p style={bt}>임신중절수술 기간은 단순히 법적 허용 주수만을 의미하는 것이 아닙니다. 의학적으로 안전하게 시술받을 수 있는 최적의 기간이 따로 있으며, 연세365산부인과의원에서는 임신 10주 이내를 가장 안전한 시술 기간으로 권장합니다. 임신 10주 이후에도 시술이 가능하지만 난이도와 비용, 회복 기간이 모두 증가합니다.</p>
          <IBox>임신 주수 계산은 마지막 생리 시작일 기준입니다. 실제 초음파 주수와 생리일 기준 주수가 다를 수 있으므로 내원 후 초음파로 정확한 주수를 확인하는 것이 필수입니다. 주수에 따라 비용과 시술 방법이 달라집니다.</IBox>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="2" title="주수별 가능 기간 타임라인" />
          <p style={bt}>임신중절수술 가능 기간은 임신 주수에 따라 시술 방법과 위험도가 달라집니다. 아래 타임라인을 통해 주수별 상황을 한눈에 확인하세요. 주수가 증가할수록 시술 난이도와 비용이 높아지고 합병증 위험도 증가합니다.</p>
          <div style={{ position: 'relative', paddingLeft: '32px', marginBottom: '24px' }}>
            <div style={{ position: 'absolute', left: '12px', top: 0, bottom: 0, width: '2px', background: `linear-gradient(180deg, ${C.p}, ${C.pd})`, borderRadius: '2px' }} />
            {[
              { w: '~6주', title: '임신 극초기', color: '#27ae60', desc: '약물중절 또는 흡입술 모두 선택 가능합니다. 가장 간단한 시기로 당일 시술·당일 퇴원이 가능하며 회복이 가장 빠릅니다. 시술 후 출혈도 가장 적고 합병증 위험도 낮습니다.', risk: '매우 낮음' },
              { w: '7~8주', title: '임신 초기', color: C.p, desc: '흡입술(진공흡입법)로 안전하게 시술 가능합니다. 8주 미만 45만원, 8주 60만원입니다. 당일 시술·당일 퇴원이 가능하며 이 시기에 시술받는 것이 가장 이상적입니다.', risk: '낮음' },
              { w: '9~10주', title: '임신 중초기', color: '#E29000', desc: '흡입술 또는 소파술로 시행됩니다. 9주 70만원, 10주 80만원입니다. 시술 난이도가 약간 증가하나 당일 퇴원이 가능합니다. 회복 기간이 8주보다 다소 길어집니다.', risk: '보통' },
              { w: '11~14주', title: '임신 중기 초반', color: '#E67E22', desc: '전문의 상담 후 시술 가능합니다. 별도 비용 안내가 필요합니다. 시술 난이도가 높아지고 회복 기간이 증가합니다. 반드시 사전 전화 상담 후 내원하세요.', risk: '높아짐' },
              { w: '14주 이후', title: '임신 중기', color: '#C0392B', desc: '모자보건법 제14조 조건에 해당하는 경우에만 가능합니다. 의료기관별로 시술 가능 여부가 다르며 모체 위험도가 매우 높아집니다. 반드시 별도 상담이 필요합니다.', risk: '높음' },
            ].map((item, i, arr) => (
              <div key={item.w}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '4px', alignItems: 'flex-start' }}>
                  <div style={{ position: 'absolute', left: '7px', width: '12px', height: '12px', borderRadius: '50%', background: item.color, border: '2px solid white', boxShadow: '0 0 0 2px ' + item.color, marginTop: '4px' }} />
                  <div style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px 18px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={{ background: item.color, color: '#fff', fontSize: '12px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px' }}>{item.w}</span>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: C.tm }}>{item.title}</span>
                      <span style={{ fontSize: '11px', color: item.color, background: item.color + '20', padding: '2px 8px', borderRadius: '10px' }}>위험도: {item.risk}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: C.ts, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
                {i < arr.length - 1 && <div style={{ width: '1px', height: '16px', background: C.bd, marginLeft: '16px', marginBottom: '4px' }} />}
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="3" title="합법적 가능 기간과 조건" />
          <p style={bt}>2021년 1월 1일부로 낙태죄(형법 제269조·제270조)의 효력이 상실되었습니다. 헌법재판소는 2019년 해당 조항에 대해 헌법불합치 결정을 내렸으며, 국회가 법률을 개정하지 않은 채 시한이 경과하여 자동으로 효력을 잃었습니다. 이에 따라 현재 임신 14주 이내의 인공임신중절수술은 법적으로 처벌받지 않습니다.</p>
          <p style={bt}>다만 완전한 법제화가 이루어지지 않은 법적 공백 상태이므로, 반드시 합법적인 의료기관에서 산부인과 전문의에게 시술받으시기 바랍니다. 불법 시술이나 비전문가에 의한 시술은 생명을 위협할 수 있으므로 절대 피해야 합니다.</p>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div style={{ border: `1px solid ${C.bd}`, borderRadius: '12px', overflow: 'hidden', minWidth: '380px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: '#F8E8EF' }}>
                    {['임신 주수', '법적 상태', '필요 조건', '권장 여부'].map(h => (
                      <th key={h} style={{ padding: '12px 14px', color: C.pd, fontWeight: 700, textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['~14주', '처벌 공백 상태', '본인 동의서', '✅ 가능 (안전)'],
                    ['14~24주', '조건부 가능', '모자보건법 제14조 사유', '⚠️ 조건 충족 시'],
                    ['24주 이후', '극히 제한', '모체 생명 위협', '❌ 상급병원 의뢰'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: `1px solid ${C.bd}` }}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ padding: '12px 14px', color: j === 1 ? (i === 0 ? C.p : i === 1 ? '#E29000' : '#C0392B') : C.ts, fontWeight: j === 0 || j === 1 ? 600 : 400, whiteSpace: j === 0 ? 'nowrap' : 'normal' }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ marginTop: '16px', background: '#F0F4FF', border: '1px solid #B0BFEE', borderRadius: '14px', padding: '18px 22px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#3A4A9E', marginBottom: '12px' }}>⚖ 모자보건법 제14조 — 14~24주 가능 조건 5가지</div>
            {['① 본인 또는 배우자가 유전학적 정신장애·신체질환이 있는 경우', '② 본인 또는 배우자에게 전염성 질환이 있는 경우', '③ 강간 또는 준강간에 의하여 임신된 경우', '④ 법률상 혼인할 수 없는 혈족·인척 간에 임신된 경우', '⑤ 임신 지속이 모체 건강을 심각하게 해치거나 해칠 우려가 있는 경우'].map(c => (
              <p key={c} style={{ fontSize: '13px', color: '#3A4A7E', lineHeight: 1.8, margin: '4px 0' }}>{c}</p>
            ))}
          </div>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="4" title="주수별 시술 방법 차이" />
          <p style={bt}>임신중절수술 기간에 따라 시술 방법이 달라집니다. 연세365산부인과의원에서는 임신 주수와 환자 상태를 종합적으로 고려하여 가장 안전한 방법을 선택합니다. 모든 시술은 수면마취 하에 진행되어 시술 중 통증이나 기억이 없습니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '16px' }}>
            {[
              { w: '6~8주 미만', m: '흡입술 (진공흡입법)', bg: C.p, points: ['얇은 관으로 음압 흡입', '시술 시간 10~15분', '출혈 매우 적음', '회복 가장 빠름', '당일 퇴원 가능', '합병증 위험 낮음'] },
              { w: '8~12주', m: '소파술 (자궁소파술)', bg: C.pd, points: ['자궁경부 확장 후 큐렛 사용', '시술 시간 20~30분', '출혈 보통', '회복 2~3일', '당일 퇴원 가능', '전문의 시행 필수'] },
              { w: '12~14주', m: '확장흡입술 또는 소파술', bg: '#7A2040', points: ['자궁경부 사전 확장 필요', '시술 시간 30~45분', '회복 기간 증가', '전문의 상담 필수', '별도 비용 안내', '입원 필요할 수 있음'] },
            ].map(m => (
              <div key={m.w} style={{ border: `1px solid ${C.bd}`, borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ background: m.bg, padding: '14px 18px' }}>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', marginBottom: '4px' }}>{m.w}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>{m.m}</div>
                </div>
                <div style={{ padding: '14px 18px', background: '#fff' }}>
                  {m.points.map(p => (
                    <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', borderBottom: `1px solid ${C.bd}`, fontSize: '13px', color: C.ts }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: m.bg, flexShrink: 0 }} />{p}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="5" title="주수별 비용 차이" />
          <p style={bt}>임신중절수술 비용은 임신 주수가 늘어날수록 증가합니다. 연세365산부인과의원은 수술비·마취비·영양제·1인 회복실·부가세가 모두 포함된 투명한 가격을 안내합니다. 카드·현금 동일가이며 상담 후 추가 비용이 발생하지 않습니다. 처음 안내한 가격이 최종 가격입니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginBottom: '16px' }}>
            {[{w:'8주 미만',p:'45',bar:56},{w:'8주',p:'60',bar:75},{w:'9주',p:'70',bar:87},{w:'10주',p:'80',bar:100}].map(p => (
              <div key={p.w} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: C.tm2, marginBottom: '8px' }}>{p.w}</div>
                <div style={{ fontSize: '28px', fontWeight: 900, color: C.p, lineHeight: 1 }}>{p.p}</div>
                <div style={{ fontSize: '12px', color: C.ts, marginTop: '4px' }}>만원</div>
                <div style={{ height: '4px', borderRadius: '2px', background: C.pb, marginTop: '12px' }}>
                  <div style={{ height: '4px', borderRadius: '2px', background: C.p, width: `${p.bar}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: '#E0F7FA', borderRadius: '12px', padding: '14px 18px', fontSize: '13px', color: '#00695C' }}>
            영양제 · 1인 회복실 · 현금/카드 동일 · 부가세 포함 · 자궁유착방지제 선택 시 +5만원
          </div>
          <WBox>⚠ 임신 주수가 늘어날수록 비용이 증가하고 시술 위험도도 높아집니다. 임신 사실을 인지하셨다면 가능한 한 빨리 내원하시는 것이 몸과 비용 모두에 유리합니다.</WBox>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="6" title="빠른 결정이 중요한 이유" />
          <p style={bt}>임신중절수술은 임신 주수가 짧을수록 시술이 간단하고 회복이 빠르며 비용도 저렴합니다. 반면 주수가 늘어날수록 태아의 크기가 커져 시술 난이도와 출혈량이 증가하고, 합병증 위험도 높아집니다. 결정을 미루는 것이 오히려 더 큰 신체적·경제적 부담이 될 수 있습니다.</p>
          <p style={bt}>임신 초기에는 몸의 변화가 크지 않아 임신 여부를 인지하지 못하는 경우도 많습니다. 마지막 생리가 예정일보다 1~2주 이상 늦어지거나 임신 테스트기에서 양성이 나왔다면 지체 없이 산부인과를 방문하여 초음파 검사를 받으시기 바랍니다. 초음파 검사는 임신 주수 확인뿐 아니라 자궁외임신 여부도 확인할 수 있어 안전한 진료를 위해 필수적입니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
            {[
              { t: '시술 간단함', d: '주수가 짧을수록 태아 크기가 작아 흡입술로 간단히 시술 가능합니다. 10~15분 내외로 완료됩니다.' },
              { t: '회복 빠름', d: '8주 이내는 1~2일이면 일상 복귀 가능합니다. 주수가 늘수록 회복 기간이 증가합니다.' },
              { t: '비용 절감', d: '8주 미만 45만원. 주수가 늘면 8주 60만원, 9주 70만원, 10주 80만원으로 증가하므로 빠를수록 경제적입니다.' },
              { t: '합병증 위험 감소', d: '주수가 짧을수록 출혈·감염·자궁 손상 등 합병증 위험이 현저히 낮습니다.' },
            ].map(c => (
              <div key={c.t} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.p, marginBottom: '8px' }}>✓ {c.t}</div>
                <div style={{ fontSize: '13px', color: C.ts, lineHeight: 1.7 }}>{c.d}</div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="7" title="정확한 주수 확인 방법" />
          <p style={bt}>임신 주수는 마지막 정상 생리 시작일을 기준으로 계산합니다. 예를 들어 마지막 생리 시작일이 8주 전이라면 현재 임신 8주에 해당합니다. 그러나 생리 주기가 불규칙하거나 마지막 생리일을 정확히 기억하지 못하는 경우에는 초음파 검사로 확인해야 합니다.</p>
          <p style={bt}>자가 임신 테스트기는 임신 여부만 확인할 수 있을 뿐 정확한 주수는 알 수 없습니다. 또한 테스트기가 양성이라도 자궁외임신일 수 있어 반드시 산부인과에서 초음파 검사를 받아야 합니다. 자궁외임신은 생명에 위협이 될 수 있는 응급 상황이므로 반드시 의료기관을 통해 확인하시기 바랍니다.</p>
          <IBox>연세365산부인과의원은 예약 당일 초음파 검사를 통해 정확한 임신 주수를 확인하고, 그에 맞는 시술 방법과 비용을 안내드립니다. 사전 예약 없이도 당일 내원이 가능합니다. 전화 또는 카카오톡으로 먼저 문의 주시면 더욱 원활하게 진료받으실 수 있습니다.</IBox>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="8" title="자주 묻는 질문" />
          {[
            { q: '임신중절수술은 몇 주까지 가능한가요?', a: '의학적으로는 임신 10주 이내가 가장 안전합니다. 현행 법률 기준으로 14주 이내는 사실상 처벌 공백 상태이며, 모자보건법 제14조 조건에 해당하는 경우 24주까지도 가능합니다. 연세365산부인과의원은 임신 10주까지 당일 시술이 가능하며, 이후 주수는 별도 상담 후 안내드립니다.' },
            { q: '임신 주수를 모르는데 어떻게 하나요?', a: '내원하여 초음파 검사를 받으시면 정확한 임신 주수를 확인할 수 있습니다. 마지막 생리일을 모르거나 생리 주기가 불규칙한 경우에도 초음파로 정확하게 확인 가능합니다. 내원 전 전화 상담도 가능합니다.' },
            { q: '임신 8주와 10주의 차이가 얼마나 큰가요?', a: '8주는 흡입술로 15분 이내 시술이 가능하며 45~60만원입니다. 10주는 소파술로 20~30분 소요되며 80만원입니다. 회복 기간도 8주는 1~2일, 10주는 2~4일로 차이가 납니다. 시술 중 출혈량도 8주가 훨씬 적습니다.' },
            { q: '임신 테스트기에서 양성이 나왔는데 바로 수술이 가능한가요?', a: '임신 테스트기 양성만으로는 수술이 불가합니다. 반드시 초음파 검사를 통해 자궁 내 임신 여부와 정확한 주수를 확인한 후 시술이 진행됩니다. 자궁외임신 여부 확인도 안전을 위해 필수입니다.' },
            { q: '11주인데 수술이 가능한가요?', a: '11주 이상은 별도 상담 후 안내드립니다. 전화(02-585-3650) 또는 카카오톡으로 먼저 문의 주시면 정확히 안내해드리겠습니다.' },
            { q: '생리 주기가 불규칙한데 주수를 어떻게 계산하나요?', a: '생리 주기가 불규칙한 경우 마지막 생리일 기준 계산이 부정확할 수 있습니다. 내원 후 초음파 검사를 받으시면 태아 크기를 기준으로 정확한 주수를 산출해드립니다.' },
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
            {[
              { href: '/abortion/surgery', label: '임신중절수술 금액·방법 안내' },
              { href: '/blog/abortion-after', label: '임신중절수술 후 관리' },
              { href: '/blog/abortion-fasting', label: '임신중절수술 금식 안내' },
              { href: '/blog/abortion-cost', label: '임신중절수술 비용' },
              { href: '/blog/abortion-legal', label: '낙태합법화 안내' },
              { href: '/blog', label: '전체 수술정보 보기' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', background: C.pb, border: `1px solid ${C.bd}`, borderRadius: '10px', padding: '12px 16px', textDecoration: 'none', fontSize: '13px', color: C.p, fontWeight: 700 }}>→ {l.label}</Link>
            ))}
          </div>
        </div>

        <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: 'clamp(24px,5vw,36px)', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: 'clamp(18px,4vw,22px)', fontWeight: 900, marginBottom: '8px' }}>연세365산부인과의원</div>
          <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '6px' }}>사당역 4번 출구 도보 3분</div>
          <div style={{ fontSize: '14px', opacity: 0.85, marginBottom: '24px', lineHeight: 1.8 }}>당일예약·당일시술·1인 회복실 운영<br />모든 상담은 철저히 비밀이 보장됩니다</div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
            <a href="tel:02-585-3650" style={{ background: 'transparent', color: '#fff', fontSize: '15px', border: '1px solid rgba(255,255,255,0.5)', padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
          </div>
        </div>
      </div>
    </>
  )
}