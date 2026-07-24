import { clinicSchema } from '@/lib/schemas'
import type { Metadata } from 'next';
import PregnancyCalculator from './PregnancyCalculator';
import ViewCounter from '@/components/ViewCounter'

export const metadata: Metadata = {
  title: '임신주수 계산기 | 출산예정일·태아발달 자동 계산 — 연세365산부인과의원',
  description: '마지막 생리 시작일 입력 시 현재 임신주수, 출산예정일, 태아 발달 정보, 산전 검사 일정까지 한 번에 확인. 연세365산부인과의원 무료 임신주수 계산기.',
  keywords: ['임신주수계산기','임신주수 계산','출산예정일 계산','임신 초기 증상','임신주수별 태아발달'],
  alternates: { canonical: 'https://www.yeonsei365.com/pregnancy-calculator' },
  openGraph: {
    title: '임신주수 계산기 — 연세365산부인과의원',
    description: '마지막 생리일 입력으로 임신주수·출산예정일·태아발달 즉시 확인',
    url: 'https://www.yeonsei365.com/pregnancy-calculator',
    siteName: '연세365산부인과의원',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '임신주수 계산기 | 연세365산부인과의원', description: '마지막 생리일 입력으로 임신주수·출산예정일·태아발달 즉시 확인.' },
};

const WEEKS = [
  { week: 4,  label: '임신 초기',       desc: '착상혈, 소변 임신테스트 가능. 태아 크기: 양귀비씨 (0.1mm)' },
  { week: 6,  label: '심장박동 시작',    desc: '심장박동 확인, 입덧 시작, 팔다리 싹 형성. 태아 크기: 완두콩 (6mm)' },
  { week: 8,  label: '주요 장기 형성',   desc: '입덧 최고조, 손가락·발가락 구분, 기형 발생 민감기. 태아 크기: 포도 (1.6cm)' },
  { week: 10, label: '태아기 진입',      desc: '입덧 완화 시작, 손톱 형성, 1차 기형아 검사 준비. 태아 크기: 딸기 (3cm)' },
  { week: 12, label: '1분기 마무리',     desc: '유산 위험 감소, 1차 기형아 검사, 안정기 진입. 태아 크기: 라임 (5.4cm)' },
  { week: 16, label: '2분기 진입',       desc: '쿼드 검사, 태동 느끼기 시작, 청각 발달. 태아 크기: 아보카도 (11.6cm)' },
  { week: 20, label: '정밀 초음파',      desc: '정밀 초음파, 태동 뚜렷, 성별 확인 가능. 태아 크기: 바나나 (25cm)' },
  { week: 24, label: '임신성 당뇨 검사', desc: '임신성 당뇨 검사, 폐 발달 활발. 태아 크기: 옥수수 (30cm)' },
  { week: 28, label: '3분기 진입',       desc: '빈번한 태동, 뇌 발달 급격히 빨라짐. 태아 크기: 가지 (37cm)' },
];
const PAGE_URL = 'https://www.yeonsei365.com/pregnancy-calculator'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신주수 계산기 | 출산예정일·태아발달 자동 계산 연세365산부인과의원', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신주수는 어떻게 계산하나요?',acceptedAnswer:{'@type':'Answer',text:'마지막 생리 시작일(LMP)을 기준으로 계산합니다. 실제 수정일보다 약 2주 길게 계산되며 이는 전 세계 산부인과 표준 방법입니다.'}}, {'@type':'Question',name:'출산예정일은 어떻게 계산하나요?',acceptedAnswer:{'@type':'Answer',text:'마지막 생리 시작일로부터 280일(40주)을 더해 계산합니다. 네겔레 법칙이라고 하며 실제 출산은 예정일 전후 2주(38~42주) 사이가 정상입니다.'}}, {'@type':'Question',name:'임신주수 계산기가 정확한가요?',acceptedAnswer:{'@type':'Answer',text:'생리주기가 규칙적인 경우 높은 정확도를 보이나, 불규칙한 경우 산부인과 초음파 검사로 정확한 주수를 확인하는 것이 중요합니다. 사당역 연세365산부인과의원(02-585-3650)에서 정확한 주수 확인이 가능합니다.'}} ] }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신주수계산기',item:PAGE_URL} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신주수 계산기 | 출산예정일·태아발달 자동 계산', url:'https://www.yeonsei365.com/pregnancy-calculator', specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신주수 계산'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신주수 계산하는 방법', description:'마지막 생리일로 임신주수·출산예정일 계산', step:[ {'@type':'HowToStep',position:1,name:'마지막 생리일 입력',text:'마지막 생리 시작일을 계산기에 입력합니다.'}, {'@type':'HowToStep',position:2,name:'임신주수 확인',text:'현재 임신주수와 출산예정일이 자동으로 계산됩니다.'}, {'@type':'HowToStep',position:3,name:'산부인과 확인',text:'정확한 주수는 연세365산부인과의원(02-585-3650) 초음파로 확인하세요.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신주수 계산기 출산예정일 태아발달 자동 계산 연세365산부인과의원', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }

export default function Page() {
  return (
    <main className="min-h-screen" style={{ background: '#f7eef2' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'WebApplication', name:'임신주수 계산기', description:'임신주수, 출산예정일, 태아 발달 정보를 자동으로 계산합니다.', url:PAGE_URL, applicationCategory:'HealthApplication', offers:{'@type':'Offer',price:'0',priceCurrency:'KRW'} }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />

      <section className="w-full px-5 py-10 md:px-8 md:py-14" style={{ background: '#d63870' }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>
            연세365 › 임신주수계산기
          </p>
          <h1 className="text-2xl font-black leading-snug text-white md:text-4xl">
            임신주수 계산기 — 출산예정일·태아발달 자동 계산
          </h1>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
            마지막 생리 시작일(LMP)을 입력하면 현재 임신주수, 출산예정일, 임신 진행률, 태아 발달 정보,
            이 주수의 주요 증상, 산전 검사 타임라인까지 한 번에 확인할 수 있습니다. · <ViewCounter slug="pregnancy-calculator" />
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-8 md:px-8">
        <PregnancyCalculator />
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-8 md:px-8">
        <h2 className="mb-2 text-xl font-black" style={{ color: '#2a1520' }}>임신주수별 태아 발달 · 증상 정보</h2>
        <p className="mb-6 text-sm" style={{ color: '#8a6070' }}>
          임신 4주부터 28주까지 주수별 태아 발달 상황과 엄마 몸의 변화를 확인하세요.
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {WEEKS.map((w) => (
            <div key={w.week} className="rounded-2xl border p-4" style={{ background: '#fff', borderColor: '#f0dce4' }}>
              <div className="text-2xl font-black" style={{ color: '#d63870' }}>{w.week}주</div>
              <div className="mb-1 text-xs font-medium" style={{ color: '#b080a0' }}>{w.label}</div>
              <div className="text-xs leading-relaxed" style={{ color: '#555' }}>{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16 md:px-8">
        <div className="rounded-2xl p-6 text-sm leading-relaxed" style={{ background: '#fff', border: '1px solid #f0dce4', color: '#555' }}>
          <h2 className="mb-3 text-base font-black" style={{ color: '#2a1520' }}>임신주수 계산기란?</h2>
          <p className="mb-3">
            임신주수는 마지막 생리 시작일(LMP, Last Menstrual Period)을 기준으로 계산합니다.
            실제 수정일이 아닌 생리 시작일을 기준으로 하기 때문에 실제 태아 나이보다 약 2주 길게 계산됩니다.
            이는 전 세계 산부인과에서 공통으로 사용하는 표준 방법입니다.
          </p>
          <p className="mb-3">
            출산예정일(EDD, Estimated Due Date)은 마지막 생리 시작일로부터 280일(40주)을 더해 계산합니다.
            이를 네겔레 법칙(Naegele&apos;s Rule)이라고 합니다. 실제 출산은 예정일 전후 2주(38~42주) 사이에
            이루어지는 것이 정상입니다.
          </p>
          <p>
            임신 초기(1~13주)는 1분기, 중기(14~27주)는 2분기, 후기(28주~)는 3분기로 나뉩니다.
            각 분기마다 필요한 산전 검사와 주의사항이 다르므로 정기적인 산부인과 진찰을 통해
            전문의와 상담하는 것이 중요합니다.
          </p>
        </div>
      </section>
    </main>
  );
}