'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { Column } from '@/lib/columns'
import ViewCounter from '@/components/ViewCounter'
import { FAQ_COUNT } from '@/app/abortion/faq/FAQClient'

const C = {
  p: '#D6336C', pd: '#993556', pp: '#5c0e20',
  pb: '#FFF5F7', pbd: '#f0d0dc',
  ts: '#444', tm: '#1a1a1a', tg: '#888',
  amber: '#BA7517', amberBg: '#fff8e8',
  green: '#0f6e56', greenBg: '#f0faf5', greenBorder: '#5dcaa5',
}

function InfoBox({ children, type = 'pink' }: { children: React.ReactNode; type?: 'pink' | 'amber' | 'green' | 'warn' }) {
  const s = {
    pink: { bg: C.pb, border: C.p, text: '#7A2040' },
    amber: { bg: C.amberBg, border: C.amber, text: '#633806' },
    green: { bg: C.greenBg, border: C.green, text: C.green },
    warn: { bg: C.amberBg, border: C.amber, text: '#633806' },
  }[type]
  return (
    <div style={{ background: s.bg, borderLeft: `3px solid ${s.border}`, borderRadius: '0 10px 10px 0', padding: '14px 18px', margin: '20px 0' }}>
      <p style={{ fontSize: '14px', color: s.text, lineHeight: 1.85, margin: 0, fontWeight: 600 }}>{children}</p>
    </div>
  )
}

export default function ColumnDetailClient({ column }: { column: Column }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const renderSection = (sec: Column['sections'][number], i: number) => {
    switch (sec.type) {
      case 'text':
        return (
          <section key={i} style={{ marginBottom: '36px' }}>
            {sec.title && (
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: C.tm, marginBottom: '14px', letterSpacing: '-.02em', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '4px', height: '20px', background: C.p, borderRadius: '2px', display: 'inline-block', flexShrink: 0 }} />
                {sec.title}
              </h2>
            )}
            <p style={{ fontSize: '15px', color: C.ts, lineHeight: 2, letterSpacing: '-.01em' }}>{sec.content}</p>
          </section>
        )

      case 'infobox':
        return <InfoBox key={i} type="pink">{sec.content}</InfoBox>

      case 'warnbox':
        return <InfoBox key={i} type="warn">{sec.content}</InfoBox>

      case 'greenbox':
        return <InfoBox key={i} type="green">{sec.content}</InfoBox>

      case 'checklist':
        return (
          <section key={i} style={{ marginBottom: '36px' }}>
            {sec.title && (
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: C.tm, marginBottom: '16px', letterSpacing: '-.02em', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '4px', height: '20px', background: C.p, borderRadius: '2px', display: 'inline-block', flexShrink: 0 }} />
                {sec.title}
              </h2>
            )}
            <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px 24px' }}>
              <p style={{ fontSize: '13px', color: C.pd, fontWeight: 700, marginBottom: '14px' }}>해당 증상이 있으면 내원을 권장합니다</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '8px' }}>
                {sec.items?.map((item, j) => (
                  <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '8px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '14px', color: C.ts }}>
                    <span style={{ width: '18px', height: '18px', background: C.p, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', flexShrink: 0, marginTop: '2px' }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )

      case 'table':
        return (
          <section key={i} style={{ marginBottom: '36px' }}>
            {sec.title && (
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: C.tm, marginBottom: '16px', letterSpacing: '-.02em', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '4px', height: '20px', background: C.p, borderRadius: '2px', display: 'inline-block', flexShrink: 0 }} />
                {sec.title}
              </h2>
            )}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '480px' }}>
                <thead>
                  <tr style={{ background: '#F8E8EF' }}>
                    {sec.headers?.map(h => (
                      <th key={h} style={{ padding: '12px 14px', color: C.pd, fontWeight: 700, textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sec.rows?.map((row, j) => (
                    <tr key={j} style={{ borderTop: `0.5px solid ${C.pbd}`, background: j % 2 === 0 ? '#fff' : C.pb }}>
                      {row.map((cell, k) => (
                        <td key={k} style={{ padding: '11px 14px', color: k === 0 ? C.tm : C.ts, fontWeight: k === 0 ? 700 : 400, lineHeight: 1.5 }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )

      case 'comparison':
        return (
          <section key={i} style={{ marginBottom: '36px' }}>
            {sec.title && (
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: C.tm, marginBottom: '16px', letterSpacing: '-.02em', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '4px', height: '20px', background: C.p, borderRadius: '2px', display: 'inline-block', flexShrink: 0 }} />
                {sec.title}
              </h2>
            )}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '520px' }}>
                <thead>
                  <tr style={{ background: C.pp }}>
                    {sec.headers?.map(h => (
                      <th key={h} style={{ padding: '12px 14px', color: '#fff', fontWeight: 700, textAlign: 'left' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sec.rows?.map((row, j) => (
                    <tr key={j} style={{ borderTop: `0.5px solid ${C.pbd}`, background: j % 2 === 0 ? '#fff' : C.pb }}>
                      {row.map((cell, k) => (
                        <td key={k} style={{ padding: '11px 14px', color: k === 0 ? C.p : C.ts, fontWeight: k === 0 ? 700 : 400 }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )

      case 'steps':
        return (
          <section key={i} style={{ marginBottom: '36px' }}>
            {sec.title && (
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: C.tm, marginBottom: '16px', letterSpacing: '-.02em', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '4px', height: '20px', background: C.p, borderRadius: '2px', display: 'inline-block', flexShrink: 0 }} />
                {sec.title}
              </h2>
            )}
            <div style={{ position: 'relative', paddingLeft: '20px' }}>
              <div style={{ position: 'absolute', left: '16px', top: '16px', bottom: '16px', width: '2px', background: `linear-gradient(${C.p}, ${C.pp})` }} />
              {sec.steps?.map((step, j) => (
                <div key={j} style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                  <div style={{ width: '32px', height: '32px', background: C.p, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', fontWeight: 700, flexShrink: 0, marginLeft: '-4px', border: '3px solid #fff' }}>
                    {step.n}
                  </div>
                  <div style={{ flex: 1, paddingTop: '4px' }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: C.tm, marginBottom: '4px' }}>{step.title}</div>
                    <div style={{ fontSize: '14px', color: C.ts, lineHeight: 1.8 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )
        case 'image':
          return (
            <section key={i} style={{ marginBottom: '32px' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: `0.5px solid ${C.pbd}` }}>
                <img
                  src={sec.src}
                  alt={sec.alt || ''}
                  loading="lazy"
                  style={{ width: '100%', display: 'block', maxHeight: '420px', objectFit: 'cover' }}
                />
              </div>
              {sec.caption && (
                <p style={{ fontSize: '12px', color: C.tg, textAlign: 'center', marginTop: '8px', lineHeight: 1.5 }}>
                  {sec.caption}
                </p>
              )}
            </section>
          )
      default:
        return null
    }
  }

  return (
    <>
      {/* 히어로 */}
      <div style={{
        background: column.heroImage
        ? `linear-gradient(rgba(92,14,32,0.72), rgba(92,14,32,0.55)), url(${column.heroImage}) center/cover no-repeat`
        : `linear-gradient(135deg, ${C.pp} 0%, ${C.pd} 50%, ${C.p} 100%)`,
      padding: '100px 20px 48px',
      }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span style={{ background: 'rgba(255,255,255,.2)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', border: '0.5px solid rgba(255,255,255,.35)' }}>
              {column.category}
            </span>
            <span style={{ background: 'rgba(255,255,255,.15)', color: 'rgba(255,255,255,.85)', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>
              {column.date}
            </span>
            <span style={{ background: 'rgba(255,255,255,.15)', color: 'rgba(255,255,255,.85)', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>
              {column.readTime} 읽기
            </span>
          </div>
          <h1 style={{ color: '#fff', fontSize: '32px', fontWeight: 900, lineHeight: 1.3, marginBottom: '12px', letterSpacing: '-.03em' }}>
            {column.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
            {column.subtitle} · <ViewCounter slug={`health-magazine-column-${column.slug}`} />
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
              style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '13px', fontWeight: 700, padding: '10px 20px', borderRadius: '24px', textDecoration: 'none' }}>
              💬 카카오톡 상담
            </a>
            <a href="tel:02-585-3650"
              style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '10px 20px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>
              📞 02-585-3650
            </a>
          </div>
        </div>
      </div>

      {/* 본문 */}
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 20px 80px', fontFamily: 'Pretendard, sans-serif' }}>

        {/* 목차 */}
        <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '20px 24px', marginBottom: '40px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#bbb', letterSpacing: '.06em', marginBottom: '12px' }}>목차</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {column.sections.filter(s => s.type !== 'image' && s.title).map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: C.p, fontWeight: 600 }}>
                <span style={{ width: '4px', height: '4px', background: C.p, borderRadius: '50%', flexShrink: 0 }} />
                {s.title}
              </div>
            ))}
            {column.faq.length > 0 && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: C.p, fontWeight: 600 }}>
                <span style={{ width: '4px', height: '4px', background: C.p, borderRadius: '50%', flexShrink: 0 }} />
                자주 묻는 질문 (FAQ)
              </div>
            )}
          </div>
        </div>

        {/* 섹션 렌더링 */}
        {column.sections.map((sec, i) => renderSection(sec, i))}

        {/* FAQ */}
        {column.faq.length > 0 && (
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: C.tm, marginBottom: '16px', letterSpacing: '-.02em', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '4px', height: '20px', background: C.p, borderRadius: '2px', display: 'inline-block', flexShrink: 0 }} />
              자주 묻는 질문 (FAQ)
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {column.faq.map((f, i) => (
                <div key={i} style={{ border: `0.5px solid ${openFaq === i ? C.p : C.pbd}`, borderRadius: '12px', overflow: 'hidden', background: openFaq === i ? C.pb : '#fff' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    style={{ width: '100%', padding: '14px 18px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: C.p, fontWeight: 700, fontSize: '14px', flexShrink: 0 }}>Q.</span>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: openFaq === i ? C.p : C.tm, lineHeight: 1.5 }}>{f.q}</span>
                    </div>
                    {openFaq === i
                      ? <ChevronUp size={16} style={{ color: C.p, flexShrink: 0 }} />
                      : <ChevronDown size={16} style={{ color: '#aaa', flexShrink: 0 }} />}
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '12px 18px 16px 40px', fontSize: '14px', color: C.ts, lineHeight: 1.85, background: '#fff8fa', borderTop: `0.5px dashed ${C.pbd}` }}>
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 키워드 */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '12px', color: C.tg, marginBottom: '8px' }}>관련 검색 키워드</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {column.keywords.map(kw => (
              <span key={kw} style={{ background: '#f8f8f8', border: `0.5px solid ${C.pbd}`, color: C.tg, fontSize: '11px', padding: '3px 10px', borderRadius: '12px' }}>{kw}</span>
            ))}
          </div>
        </div>

        {/* 관련 페이지 */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '12px' }}>관련 페이지 더 보기</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '8px' }}>
            {[
              { href: '/health-magazine/column', label: '← 칼럼 목록' },
              { href: '/abortion/faq', label: `FAQ ${FAQ_COUNT}개` },
              { href: '/abortion/cost', label: '수술 금액 안내' },
              { href: '/abortion', label: '임신중절클리닉' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ display: 'block', background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px 14px', textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: C.p }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: '36px', textAlign: 'center' }}>
          <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>연세365산부인과</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginBottom: '6px' }}>서울특별시 관악구 과천대로 939, 3층 · 사당역 4번 출구 도보 3분</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.7)', marginBottom: '22px' }}>당일예약 · 전문의 직접 진료 · 비밀보장</div>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
              style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '14px', fontWeight: 700, padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>
              💬 카카오톡 상담
            </a>
            <a href="tel:02-585-3650"
              style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '14px', fontWeight: 700, border: '0.5px solid rgba(255,255,255,.4)', padding: '13px 28px', borderRadius: '24px', textDecoration: 'none' }}>
              📞 02-585-3650
            </a>
          </div>
        </div>

      </div>
    </>
  )
}