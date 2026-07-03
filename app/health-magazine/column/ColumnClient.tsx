'use client'
import Link from 'next/link'
import { COLUMNS } from '@/lib/columns'
import ViewCounter from '@/components/ViewCounter'

const C = {
  p: '#D6336C', pd: '#993556', pp: '#5c0e20',
  pb: '#FFF5F7', pbd: '#f0d0dc',
  ts: '#444', tm: '#1a1a1a', tg: '#888',
}

export default function ColumnClient() {
  return (
    <>
      {/* 히어로 */}
      <div style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(/images/hero-abortion-info.webp)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        padding: '100px 20px 48px', textAlign: 'center',
      }}>
        <span style={{ display: 'inline-block', background: C.p, color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 14px', borderRadius: '20px', marginBottom: '14px' }}>건강 칼럼</span>
        <h1 style={{ color: '#fff', fontSize: '32px', fontWeight: 900, marginBottom: '10px', letterSpacing: '-.02em' }}>여성 건강 칼럼</h1>
        <p style={{ color: 'rgba(255,255,255,.8)', fontSize: '14px', lineHeight: 1.7 }}>
          연세365산부인과의원에서 제공하는 여성 건강 정보<br />
          사당역 4번출구 · 02-585-3650 · <ViewCounter slug="health-magazine-column" />
        </p>
      </div>

      {/* 칼럼 목록 */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '48px 20px 80px' }}>

        {/* PC: 3컬럼 그리드 — 모든 카드 동일 높이 */}
        <div className="hidden lg:grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch' }}>
          {COLUMNS.map(col => (
            <Link
              key={col.slug}
              href={`/health-magazine/column/${col.slug}`}
              style={{ textDecoration: 'none', display: 'flex' }}
            >
              <div
                style={{
                  background: '#fff',
                  border: `0.5px solid ${C.pbd}`,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color .2s, box-shadow .2s',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = C.p
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(214,51,108,0.12)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = C.pbd
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
              >
                {/* 썸네일 */}
                <div style={{ height: '160px', overflow: 'hidden', flexShrink: 0, background: C.pb }}>
                  {col.thumbnail ? (
                    <img
                      src={col.thumbnail}
                      alt={col.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>
                      {col.icon}
                    </div>
                  )}
                </div>
                {/* 내용 */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span style={{ background: C.pb, color: C.pd, fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px' }}>{col.category}</span>
                    <span style={{ color: C.tg, fontSize: '11px' }}>{col.date}</span>
                    <span style={{ color: C.tg, fontSize: '11px' }}>· {col.readTime} 읽기</span>
                  </div>
                  <h2 style={{ fontSize: '16px', fontWeight: 700, color: C.tm, marginBottom: '8px', lineHeight: 1.4 }}>{col.title}</h2>
                  <p style={{
                    fontSize: '13px', color: C.ts, lineHeight: 1.7, marginBottom: '16px',
                    display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    flex: 1,
                  }}>
                    {col.description}
                  </p>
                  <span style={{ fontSize: '13px', color: C.p, fontWeight: 700, marginTop: 'auto' }}>읽어보기 →</span>
                </div>
              </div>
            </Link>
          ))}

          {/* 새 칼럼 준비 중 */}
          <div style={{
            background: C.pb, border: `0.5px dashed ${C.pbd}`, borderRadius: '16px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            minHeight: '300px', padding: '24px', textAlign: 'center',
          }}>
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>✍️</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: C.pd, marginBottom: '6px' }}>새 칼럼 준비 중</div>
            <div style={{ fontSize: '12px', color: C.tg }}>일반 건강정보 칼럼이<br />곧 게시됩니다</div>
          </div>
        </div>

        {/* 모바일: 1컬럼 리스트 */}
        <div className="lg:hidden flex flex-col" style={{ gap: '16px', padding: '0 16px' }}>
          {COLUMNS.map(col => (
            <Link key={col.slug} href={`/health-magazine/column/${col.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '14px',
                overflow: 'hidden', display: 'flex',
              }}>
                {/* 썸네일 */}
                <div style={{ width: '100px', flexShrink: 0, background: C.pb, overflow: 'hidden' }}>
                  {col.thumbnail ? (
                    <img
                      src={col.thumbnail}
                      alt={col.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <div style={{ height: '100%', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>
                      {col.icon}
                    </div>
                  )}
                </div>
                {/* 내용 */}
                <div style={{ padding: '16px 16px 16px 14px', flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ background: C.pb, color: C.pd, fontSize: '10px', fontWeight: 700, padding: '1px 7px', borderRadius: '8px' }}>{col.category}</span>
                    <span style={{ color: C.tg, fontSize: '10px' }}>{col.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '6px', lineHeight: 1.4 }}>{col.title}</h2>
                  <p style={{
                    fontSize: '12px', color: C.ts, lineHeight: 1.65,
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    marginBottom: '8px',
                  }}>
                    {col.description}
                  </p>
                  <span style={{ fontSize: '12px', color: C.p, fontWeight: 700 }}>읽기 →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 키워드 */}
        <div style={{ marginTop: '48px', padding: '20px 24px', background: C.pb, borderRadius: '14px', border: `0.5px solid ${C.pbd}` }}>
          <div style={{ fontSize: '12px', color: C.tg, marginBottom: '10px' }}>관련 검색 키워드</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {['자궁근종', '임신중절수술', '생리불순', '난임', '여성검진', '갱년기', '피임', '질염', '자궁내막증', '산부인과칼럼'].map(kw => (
              <span key={kw} style={{ background: '#fff', border: `0.5px solid ${C.pbd}`, color: C.tg, fontSize: '11px', padding: '3px 10px', borderRadius: '12px' }}>{kw}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}