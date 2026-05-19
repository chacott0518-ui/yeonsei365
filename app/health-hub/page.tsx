'use client'
import { clinicSchema } from '@/lib/schemas'
import { useState } from 'react'
import Link from 'next/link'
import { CATEGORIES, HEALTH_ARTICLES } from '@/lib/healthHub'

const C = { p: '#D6336C', pd: '#993556', pp: '#5c0e20', pb: '#FFF5F7', pbd: '#f0d0dc', tm: '#1a1a1a', ts: '#444', tg: '#888' }
const PAGE_URL = 'https://www.yeonsei365.com/health-hub'
const PAGE_DATE = '2026-04-01'
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'산부인과 건강 Q&A는 어디서 확인하나요?',acceptedAnswer:{'@type':'Answer',text:'사당역 연세365산부인과 AI 건강허브에서 임신·피임·산부인과 질환·수술·여성건강 관련 전문의 Q&A를 확인하실 수 있습니다.'}}, {'@type':'Question',name:'직접 질문을 남길 수 있나요?',acceptedAnswer:{'@type':'Answer',text:'네, 질문을 남기시면 전문의가 검토 후 Q&A 페이지에 답변을 게시합니다. 연세365산부인과(02-585-3650)로 직접 문의도 가능합니다.'}} ] }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'AI 건강 Q&A',item:PAGE_URL} ] }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'산부인과 건강 정보 허브 AI 건강 Q&A 연세365산부인과', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const PER_PAGE = 5

export default function HealthHubPage() {
  const [page, setPage] = useState(1)
  const total = HEALTH_ARTICLES.length
  const totalPages = Math.ceil(total / PER_PAGE)
  const articles = [...HEALTH_ARTICLES].reverse().slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <div id="hh-hero" style={{ background: `linear-gradient(135deg, ${C.pp}, #993556, ${C.p})`, borderRadius: '20px', padding: '40px 28px', marginBottom: '32px' }}>
        <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,.7)', letterSpacing: '.08em', marginBottom: '10px' }}>연세365산부인과 · AI 건강 Q&A</div>
        <h1 style={{ color: '#fff', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 900, lineHeight: 1.35, marginBottom: '10px' }}>산부인과 건강 정보 허브</h1>
        <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>임신·피임·산부인과 질환·수술·여성건강<br />전문의가 직접 답변한 Q&A를 확인하세요</p>
        <Link href="/health-hub/ask" style={{ display: 'inline-block', background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '11px 24px', borderRadius: '24px', textDecoration: 'none' }}>내 질문 남기기 →</Link>
      </div>

      <div id="hh-categories">
        <div style={{ marginBottom: '12px', fontSize: '15px', fontWeight: 700, color: C.tm }}>카테고리</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginBottom: '36px' }}>
          {Object.entries(CATEGORIES).map(([key, cat]) => {
            const count = HEALTH_ARTICLES.filter(a => a.category === key).length
            return (
              <Link key={key} href={`/health-hub/${key}`} style={{ display: 'block', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '18px 14px', textDecoration: 'none', textAlign: 'center' }}>
                <div style={{ fontSize: '26px', marginBottom: '8px' }}>{cat.icon}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '4px' }}>{cat.label}</div>
                <div style={{ fontSize: '11px', color: C.tg }}>{count}개 Q&A</div>
              </Link>
            )
          })}
        </div>
      </div>

      <div id="hh-ask-mob" style={{ display: 'none', marginBottom: '20px' }}>
        <Link href="/health-hub/ask" style={{ display: 'block', background: C.p, color: '#fff', fontSize: '15px', fontWeight: 700, padding: '14px', borderRadius: '12px', textDecoration: 'none', textAlign: 'center' }}>✏️ 전문의에게 질문 남기기 →</Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div style={{ fontSize: '15px', fontWeight: 700, color: C.tm }}>전문의 실시간 Q&A</div>
        <span style={{ fontSize: '11px', color: C.tg }}>총 {total}개</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
        {articles.map(a => (
          <Link key={a.slug} href={`/health-hub/${a.category}/${a.slug}`} style={{ display: 'block', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '16px 18px', textDecoration: 'none' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ background: C.pb, color: C.pd, fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px' }}>{CATEGORIES[a.category].label}</span>
              <span style={{ fontSize: '11px', color: C.tg }}>{a.lastModified}</span>
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: C.tm, marginBottom: '5px', lineHeight: 1.4 }}>{a.title}</div>
            <div style={{ fontSize: '13px', color: C.ts, lineHeight: 1.6 }}>{a.faq[0]?.a.slice(0, 80)}...</div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button key={p} onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              style={{ width: '36px', height: '36px', borderRadius: '50%', border: `0.5px solid ${p === page ? C.p : C.pbd}`, background: p === page ? C.p : '#fff', color: p === page ? '#fff' : C.tm, fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
              {p}
            </button>
          ))}
        </div>
      )}

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link href="/health-hub/ask" style={{ display: 'inline-block', background: C.p, color: '#fff', fontSize: '14px', fontWeight: 700, padding: '13px 32px', borderRadius: '24px', textDecoration: 'none' }}>✏️ 내 질문 남기기 →</Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hh-hero { display: none !important; }
          #hh-categories { display: none !important; }
          #hh-ask-mob { display: block !important; }
        }
      `}</style>
    </>
  )
}