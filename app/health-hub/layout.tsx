import Link from 'next/link'
import { CATEGORIES, HEALTH_ARTICLES } from '@/lib/healthHub'
import type { CategoryKey } from '@/lib/healthHub'

const C = { p: '#D6336C', pd: '#993556', pp: '#5c0e20', pb: '#FFF5F7', pbd: '#f0d0dc', tm: '#1a1a1a', tg: '#888' }

export default function HealthHubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ background: C.pb, borderBottom: `0.5px solid ${C.pbd}`, padding: '10px 20px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <Link href="/health-hub" style={{ fontSize: '13px', fontWeight: 700, color: C.p, textDecoration: 'none' }}>AI 건강 Q&A</Link>
          <span style={{ color: C.pbd }}>|</span>
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <Link key={key} href={`/health-hub/${key}`} style={{ fontSize: '12px', color: C.tg, textDecoration: 'none' }}>{cat.label}</Link>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: '1060px', margin: '0 auto', padding: '32px 20px 100px' }}>
        <div id="hh-grid" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '32px', alignItems: 'start' }}>
          <aside id="hh-sidebar" style={{ position: 'sticky', top: '80px' }}>
            <div style={{ background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '16px 0', marginBottom: '14px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#bbb', letterSpacing: '.06em', padding: '0 16px 10px' }}>카테고리</div>
              {Object.entries(CATEGORIES).map(([key, cat]) => {
                const count = HEALTH_ARTICLES.filter(a => a.category === key).length
                return (
                  <Link key={key} href={`/health-hub/${key}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 16px', fontSize: '13px', color: C.tm, fontWeight: 500, textDecoration: 'none' }}>
                    <span>{cat.icon} {cat.label}</span>
                    <span style={{ fontSize: '11px', color: C.tg, background: C.pb, padding: '1px 6px', borderRadius: '8px' }}>{count}</span>
                  </Link>
                )
              })}
            </div>
            <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '14px', padding: '18px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>궁금한 점이 있으신가요?</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.8)', marginBottom: '14px', lineHeight: 1.5 }}>질문을 남기면 전문의가<br />직접 답변해드립니다</div>
              <Link href="/health-hub/ask" style={{ display: 'block', background: '#FEE500', color: '#3B1B1B', fontSize: '12px', fontWeight: 700, padding: '9px', borderRadius: '10px', textDecoration: 'none', marginBottom: '8px' }}>질문 남기기</Link>
              <a href="tel:02-585-3650" style={{ display: 'block', background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '12px', fontWeight: 600, padding: '9px', borderRadius: '10px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.3)' }}>📞 02-585-3650</a>
            </div>
          </aside>
          <main style={{ minWidth: 0 }}>{children}</main>
        </div>
      </div>
      <div id="hh-mob" style={{ display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: `0.5px solid ${C.pbd}`, padding: '10px 16px', zIndex: 50, gap: '10px' }}>
        <Link href="/health-hub/ask" style={{ flex: 1, display: 'block', background: C.p, color: '#fff', fontSize: '14px', fontWeight: 700, padding: '12px', borderRadius: '12px', textDecoration: 'none', textAlign: 'center' }}>질문 남기기</Link>
        <a href="tel:02-585-3650" style={{ flex: 1, display: 'block', background: C.pb, color: C.pd, fontSize: '14px', fontWeight: 700, padding: '12px', borderRadius: '12px', textDecoration: 'none', textAlign: 'center', border: `0.5px solid ${C.pbd}` }}>📞 전화 상담</a>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #hh-grid { grid-template-columns: 1fr !important; }
          #hh-sidebar { display: none !important; }
          #hh-mob { display: flex !important; }
        }
      `}</style>
    </>
  )
}