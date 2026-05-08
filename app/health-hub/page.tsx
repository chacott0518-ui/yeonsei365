import type { Metadata } from 'next'
import Link from 'next/link'
import { CATEGORIES, HEALTH_ARTICLES } from '@/lib/healthHub'

const BASE = 'https://www.yeonsei365.com'
const C = { p: '#D6336C', pd: '#993556', pp: '#5c0e20', pb: '#FFF5F7', pbd: '#f0d0dc', tm: '#1a1a1a', ts: '#444', tg: '#888' }

export const metadata: Metadata = {
  title: '산부인과 건강 Q&A 허브 — 임신·피임·산부인과 질환 | 연세365산부인과',
  description: '임신, 피임, 산부인과 질환에 대한 전문의 Q&A. 사당역 연세365산부인과가 직접 답변하는 여성 건강 정보 허브. 02-585-3650.',
  keywords: ['산부인과건강정보', '임신초기증상', '피임방법', '산부인과질환', '사당역산부인과'],
  alternates: { canonical: `${BASE}/health-hub` },
  openGraph: { title: '산부인과 건강 Q&A | 연세365산부인과', description: '임신·피임·산부인과 질환 전문의 Q&A 허브', url: `${BASE}/health-hub`, locale: 'ko_KR', type: 'website' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: '연세365산부인과 건강 Q&A 허브',
  description: '사당역 연세365산부인과 전문의가 직접 답변한 산부인과 건강 Q&A 모음',
  url: `${BASE}/health-hub`,
  publisher: { '@type': 'MedicalClinic', name: '연세365산부인과', telephone: '02-585-3650', address: { '@type': 'PostalAddress', streetAddress: '과천대로 939 3층', addressLocality: '관악구', addressRegion: '서울', addressCountry: 'KR' } },
}

export default function HealthHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <div style={{ background: `linear-gradient(135deg, ${C.pp}, #993556, ${C.p})`, borderRadius: '20px', padding: '40px 28px', marginBottom: '32px' }}>
        <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,.7)', letterSpacing: '.08em', marginBottom: '10px' }}>연세365산부인과 · AI 건강 Q&A</div>
        <h1 style={{ color: '#fff', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 900, lineHeight: 1.35, marginBottom: '10px', letterSpacing: '-.03em' }}>산부인과 건강 정보 허브</h1>
        <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>임신·피임·산부인과 질환·수술·여성건강<br />전문의가 직접 답변한 Q&A를 확인하세요</p>
        <Link href="/health-hub/ask" style={{ display: 'inline-block', background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '11px 24px', borderRadius: '24px', textDecoration: 'none' }}>내 질문 남기기 →</Link>
      </div>
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
      <div style={{ marginBottom: '12px', fontSize: '15px', fontWeight: 700, color: C.tm }}>최신 Q&A</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {HEALTH_ARTICLES.map(a => (
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
    </>
  )
}