import { clinicSchema } from '@/lib/schemas'
import type { Metadata } from 'next';
import OvulationCalculator from './OvulationCalculator';

export const metadata: Metadata = {
  title: '배란일 계산기 | 가임기·배란일 자동 계산 — 연세365산부인과',
  description: '생리 시작일과 주기를 입력하면 배란일, 가임기 구간, 임신 최적일, 다음 생리 예정일을 달력으로 자동 계산합니다. 연세365산부인과 무료 배란일 계산기.',
  keywords: ['배란일계산기','배란일 계산','가임기 계산기','임신 가능한 날','생리주기 계산'],
  alternates: { canonical: 'https://www.yeonsei365.com/배란일계산기' },
  openGraph: {
    title: '배란일·가임기 계산기 — 연세365산부인과',
    description: '생리 시작일·주기 입력으로 배란일·가임기·임신 최적일 즉시 확인',
    url: 'https://www.yeonsei365.com/배란일계산기',
    siteName: '연세365산부인과',
    locale: 'ko_KR',
    type: 'website',
  },
};

const PAGE_URL = 'https://www.yeonsei365.com/ovulation-calculator'
const PAGE_DATE = '2026-04-01'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'배란일 계산기 | 가임기·배란일 자동 계산 연세365산부인과', datePublished:PAGE_DATE, dateModified:PAGE_DATE, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'배란일은 어떻게 계산하나요?',acceptedAnswer:{'@type':'Answer',text:'다음 생리 예정일에서 14일을 뺀 날이 배란일입니다. 황체기가 14일로 고정되어 있기 때문입니다. 생리주기가 불규칙하면 배란일도 달라질 수 있습니다.'}}, {'@type':'Question',name:'가임기는 언제인가요?',acceptedAnswer:{'@type':'Answer',text:'배란일 기준 전후 5~7일이 가임기입니다. 정자는 체내에서 최대 5일 생존하므로 배란일 4~5일 전부터 배란일 당일까지가 임신 가능 기간입니다. 통계적으로 배란일 1~2일 전 임신 확률이 가장 높습니다.'}}, {'@type':'Question',name:'배란이 잘 안 되면 어떻게 하나요?',acceptedAnswer:{'@type':'Answer',text:'3개월 이상 임신이 안 되거나 생리주기가 불규칙하다면 사당역 연세365산부인과(02-585-3650)에서 초음파 및 호르몬 검사로 배란 이상 여부를 확인하세요.'}} ] }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신주수계산기',item:'https://www.yeonsei365.com/pregnancy-calculator'}, {'@type':'ListItem',position:3,name:'배란일계산기',item:PAGE_URL} ] }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'배란일 계산기 가임기 배란일 자동 계산 연세365산부인과', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
export default function Page() {
  return (
    <main className="min-h-screen" style={{ background: '#f7eef2' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'WebApplication', name:'배란일·가임기 계산기', description:'배란일과 가임기를 자동으로 계산합니다.', url:PAGE_URL, applicationCategory:'HealthApplication', offers:{'@type':'Offer',price:'0',priceCurrency:'KRW'} }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />

      <section className="w-full px-5 py-10 md:px-8 md:py-14" style={{ background: '#d63870' }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>
            연세365 › 임신주수계산기 › 배란일계산기
          </p>
          <h1 className="text-2xl font-black leading-snug text-white md:text-4xl">
            배란일 계산기 — 가임기·임신 최적일 자동 계산
          </h1>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
            마지막 생리 시작일과 생리주기를 입력하면 예상 배란일, 가임기 구간, 임신 시도 최적일,
            다음 생리 예정일을 달력으로 한 번에 확인할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-8 md:px-8">
        <OvulationCalculator />
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-8 md:px-8">
        <div className="rounded-2xl p-6 text-sm leading-relaxed" style={{ background: '#fff', border: '1px solid #f0dce4', color: '#555' }}>
          <h2 className="mb-3 text-base font-black" style={{ color: '#2a1520' }}>배란일이란?</h2>
          <p className="mb-3">
            배란일이란 난소에서 성숙한 난자가 배출되는 날로, 임신 가능성이 가장 높은 시기입니다.
            일반적으로 다음 생리 예정일에서 14일을 뺀 날이 배란일로 계산됩니다 (황체기 14일 기준).
          </p>
          <p className="mb-3">
            가임기는 배란일 기준으로 전후 약 5~7일 구간입니다. 정자는 체내에서 최대 5일 생존할 수 있으므로
            배란일 4~5일 전부터 배란일 당일까지가 임신 가능한 기간입니다. 통계적으로 배란일 1~2일 전이
            임신 확률이 가장 높습니다.
          </p>
          <p>
            생리주기가 불규칙하거나 스트레스·질환 등으로 배란 시기가 달라질 수 있습니다.
            정확한 배란 확인은 산부인과 초음파 검사를 통해 가능하며, 배란 이상이 의심되거나
            3개월 이상 임신이 안 된다면 반드시 전문의 상담을 받으세요.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16 md:px-8">
        <h2 className="mb-4 text-xl font-black" style={{ color: '#2a1520' }}>관련 페이지</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {[
            { href: '/pregnancy-calculator', icon: '📅', label: '임신주수 계산기', desc: '주수·출산예정일·태아발달 자동 계산' },
            { href: '/blog/abortion-period', icon: '📋', label: '임신중절수술 기간', desc: '주수별 수술 가능 기간 안내' },
            { href: '/blog/abortion-price', icon: '💰', label: '낙태 비용 가격 총정리', desc: '주수별 투명한 비용 공개' },
            { href: '/womens-clinic/sadang', icon: '🏥', label: '사당역 산부인과', desc: '연세365 위치 및 진료 안내' },
          ].map((r) => (
            <a key={r.href} href={r.href} className="flex items-center gap-3 rounded-2xl p-4 transition-all" style={{ background: '#fff', border: '1px solid #f0dce4', textDecoration: 'none' }}>
              <span className="text-2xl">{r.icon}</span>
              <div>
                <div className="text-sm font-bold" style={{ color: '#2a1520' }}>{r.label}</div>
                <div className="text-xs" style={{ color: '#b080a0' }}>{r.desc}</div>
              </div>
              <span className="ml-auto" style={{ color: '#d6a0b4' }}>›</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}