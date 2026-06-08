import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticleBySlug, getAllArticlePaths, CATEGORIES, HEALTH_ARTICLES } from '@/lib/healthHub'
import type { HealthArticle } from '@/lib/healthHub'
import ViewCounter from '@/components/ViewCounter'

const BASE = 'https://www.yeonsei365.com'
const C = {
  p: '#D6336C', pd: '#993556', pp: '#5c0e20',
  pb: '#FFF5F7', pbd: '#f0d0dc',
  ts: '#444', tm: '#1a1a1a', tg: '#888',
  amber: '#BA7517', amberBg: '#fff8e8',
  green: '#0f6e56', greenBg: '#f0faf5',
  blue: '#185FA5', blueBg: '#E6F1FB',
}

export async function generateStaticParams() { return getAllArticlePaths() }

export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  const a = getArticleBySlug(params.category, params.slug)
  if (!a) return {}
  const url = `${BASE}/health-hub/${params.category}/${params.slug}`
  return {
    title: `${a.title} | 연세365산부인과`,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${a.title} | 연세365산부인과`,
      description: a.description,
      url,
      images: [{ url: a.heroImage || `${BASE}/og-image.jpg`, width: 1200, height: 630 }],
      locale: 'ko_KR',
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title: a.title, description: a.description },
  }
}

function renderSection(sec: HealthArticle['sections'][number], i: number) {
  const H2 = ({ t }: { t: string }) => (
    <h2 style={{ fontSize: 'clamp(16px,2.5vw,20px)', fontWeight: 700, color: C.tm, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px', letterSpacing: '-.02em' }}>
      <span style={{ width: '4px', height: '20px', background: C.p, borderRadius: '2px', display: 'inline-block', flexShrink: 0 }} />{t}
    </h2>
  )
  switch (sec.type) {
    case 'text': return (
      <section key={i} style={{ marginBottom: '32px' }}>
        {sec.title && <H2 t={sec.title} />}
        <p style={{ fontSize: '15px', color: C.ts, lineHeight: 2, wordBreak: 'keep-all' }}>{sec.content}</p>
      </section>
    )
    case 'infobox': return (
      <div key={i} style={{ background: C.pb, borderLeft: `3px solid ${C.p}`, padding: '14px 18px', margin: '20px 0', borderRadius: '0 8px 8px 0' }}>
        <p style={{ fontSize: '14px', color: '#7A2040', lineHeight: 1.85, margin: 0, fontWeight: 600, wordBreak: 'keep-all' }}>
          {sec.content}
        </p>
      </div>
    )
    case 'warnbox': return (
      <div key={i} style={{ background: C.amberBg, borderLeft: `3px solid ${C.amber}`, padding: '14px 18px', margin: '20px 0', borderRadius: '0 8px 8px 0' }}>
        <p style={{ fontSize: '14px', color: '#633806', lineHeight: 1.85, margin: 0, fontWeight: 600, wordBreak: 'keep-all' }}>
          ⚠️ {sec.content}
        </p>
      </div>
    )
    case 'checklist': return (
      <section key={i} style={{ marginBottom: '32px' }}>
        {sec.title && <H2 t={sec.title} />}
        <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '14px', padding: '16px 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '4px' }}>
            {sec.items?.map((item, j) => (
              <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '8px 0', borderBottom: `0.5px solid ${C.pbd}`, fontSize: '14px', color: C.ts, wordBreak: 'keep-all' }}>
                <span style={{ width: '18px', height: '18px', background: C.p, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', flexShrink: 0, marginTop: '2px' }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
    case 'table': return (
      <section key={i} style={{ marginBottom: '32px' }}>
        {sec.title && <H2 t={sec.title} />}
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '360px' }}>
            <thead>
              <tr style={{ background: '#F8E8EF' }}>
                {sec.headers?.map(h => (
                  <th key={h} style={{ padding: '11px 14px', color: C.pd, fontWeight: 700, textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sec.rows?.map((row, j) => (
                <tr key={j} style={{ borderTop: `0.5px solid ${C.pbd}`, background: j % 2 === 0 ? '#fff' : C.pb }}>
                  {row.map((cell, k) => (
                    <td key={k} style={{ padding: '10px 14px', color: k === 0 ? C.tm : C.ts, fontWeight: k === 0 ? 700 : 400, wordBreak: 'keep-all' }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    )
    case 'steps': return (
      <section key={i} style={{ marginBottom: '32px' }}>
        {sec.title && <H2 t={sec.title} />}
        <div style={{ position: 'relative', paddingLeft: '20px' }}>
          <div style={{ position: 'absolute', left: '16px', top: '16px', bottom: '16px', width: '2px', background: `linear-gradient(${C.p}, ${C.pp})` }} />
          {sec.steps?.map((step, j) => (
            <div key={j} style={{ display: 'flex', gap: '14px', marginBottom: '18px', alignItems: 'flex-start' }}>
              <div style={{ width: '30px', height: '30px', background: C.p, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', fontWeight: 700, flexShrink: 0, marginLeft: '-4px', border: '3px solid #fff' }}>{step.n}</div>
              <div style={{ flex: 1, paddingTop: '3px' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: C.tm, marginBottom: '4px' }}>{step.title}</div>
                <div style={{ fontSize: '14px', color: C.ts, lineHeight: 1.8, wordBreak: 'keep-all' }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
    default: return null
  }
}

export default function ArticlePage({ params }: { params: { category: string; slug: string } }) {
  const article = getArticleBySlug(params.category, params.slug)
  if (!article) notFound()
  const url = `${BASE}/health-hub/${params.category}/${params.slug}`
  const cat = CATEGORIES[article.category]

  // 관련 Q&A — 같은 카테고리에서 현재 글 제외 최대 3개
  const related = HEALTH_ARTICLES
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .sort((a, b) => {
      const da = a.lastModified.replace(/[^0-9]/g, '')
      const db = b.lastModified.replace(/[^0-9]/g, '')
      return db.localeCompare(da)
    })
    .slice(0, 3)

  const schemas = [
    {
      '@context': 'https://schema.org', '@type': 'Article',
      headline: article.title, description: article.description,
      datePublished: article.lastModified, dateModified: article.lastModified,
      image: article.heroImage || `${BASE}/og-image.jpg`,
      author: { '@type': 'Organization', name: '연세365산부인과', url: BASE },
      publisher: { '@type': 'MedicalOrganization', name: '연세365산부인과', logo: { '@type': 'ImageObject', url: `${BASE}/logo.png` } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      keywords: article.keywords.join(', '),
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: article.faq.map(f => ({
        '@type': 'Question', name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org', '@type': 'MedicalWebPage',
      name: article.title, description: article.description, url,
      specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
      medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' },
      lastReviewed: article.lastModified,
      reviewedBy: { '@type': 'MedicalOrganization', name: '연세365산부인과' },
    },
    {
      '@context': 'https://schema.org', '@type': 'MedicalClinic',
      name: '연세365산부인과', url: BASE, telephone: '02-585-3650',
      address: { '@type': 'PostalAddress', streetAddress: '과천대로 939 3층', addressLocality: '관악구', addressRegion: '서울', addressCountry: 'KR' },
      geo: { '@type': 'GeoCoordinates', latitude: 37.4875, longitude: 126.9822 },
      openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-13:00'],
    },
    {
      '@context': 'https://schema.org', '@type': 'HowTo',
      name: '임신중절수술 예약 방법',
      description: '연세365산부인과 임신중절수술 예약부터 수술까지',
      step: [
        { '@type': 'HowToStep', position: 1, name: '상담 예약', text: '전화(02-585-3650) 또는 카카오톡으로 예약합니다.' },
        { '@type': 'HowToStep', position: 2, name: '내원 및 검사', text: '신분증 지참 후 내원. 초음파로 주수 확인 후 비용 안내.' },
        { '@type': 'HowToStep', position: 3, name: '수술 및 귀가', text: '수면마취 후 10~30분 수술. 당일 귀가 가능.' },
      ],
      tool: { '@type': 'HowToTool', name: '연세365산부인과' },
    },
    {
      '@context': 'https://schema.org', '@type': 'WebPage',
      name: article.title,
      url,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'AI 건강 Q&A', item: `${BASE}/health-hub` },
        { '@type': 'ListItem', position: 3, name: cat.label, item: `${BASE}/health-hub/${article.category}` },
        { '@type': 'ListItem', position: 4, name: article.title, item: url },
      ],
    },
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* ── FAQ 모바일 접힘 강제 적용 CSS ── */}
      <style>{`
        details { display: block; }
        details[open] > summary::after { transform: rotate(180deg); }
        summary::after {
          content: '▾';
          float: right;
          font-size: 14px;
          color: ${C.p};
          transition: transform 0.2s;
        }
        summary::-webkit-details-marker { display: none; }
        summary { user-select: none; }
        @media (max-width: 768px) {
          details { }
          .article-hero-img { height: 200px !important; object-position: center top; }
          .article-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .article-checklist { grid-template-columns: 1fr !important; }
          .article-cta-btns { flex-direction: column !important; }
          .article-cta-btns a { text-align: center; }
          .article-faq-a { padding-left: 16px !important; }
        }
      `}</style>

      {/* ── 브레드크럼 ── */}
      <div style={{ display: 'flex', gap: '6px', fontSize: '12px', color: C.tg, marginBottom: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Link href="/health-hub" style={{ color: C.tg, textDecoration: 'none' }}>건강허브</Link>
        <span>/</span>
        <Link href={`/health-hub/${article.category}`} style={{ color: C.tg, textDecoration: 'none' }}>{cat.label}</Link>
        <span>/</span>
        <span style={{ color: C.tm }}>{article.title.slice(0, 20)}...</span>
      </div>

      {/* ── 히어로 이미지 ── */}
      {article.heroImage && (
        <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', position: 'relative' }}>
          <img
            src={article.heroImage}
            alt={article.title}
            className="article-hero-img"
            style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', bottom: '10px', right: '12px', fontSize: '10px', color: 'rgba(255,255,255,.8)', background: 'rgba(0,0,0,.35)', padding: '3px 8px', borderRadius: '6px' }}>
            Photo: Unsplash
          </div>
        </div>
      )}

      {/* ── 제목 영역 ── */}
      <div style={{ marginBottom: '20px' }}>
        <span style={{ display: 'inline-block', background: C.pb, color: C.pd, fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '10px', marginBottom: '10px' }}>
          {cat.icon} {cat.label}
        </span>
        <h1 style={{ fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 900, color: C.tm, lineHeight: 1.35, marginBottom: '8px', letterSpacing: '-.03em', wordBreak: 'keep-all' }}>
          {article.title}
        </h1>
        <p style={{ fontSize: '12px', color: C.tg, marginBottom: 0 }}>
        {article.lastModified} · 연세365산부인과 의료진 감수 · <ViewCounter slug={`health-hub-${params.category}-${params.slug}`} />
        </p>
      </div>

      {/* ── AI 안내 박스 ── */}
      <div style={{ background: C.blueBg, border: `0.5px solid #85B7EB`, borderRadius: '12px', padding: '12px 16px', marginBottom: '16px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '16px', flexShrink: 0 }}>ℹ️</span>
        <div style={{ fontSize: '12px', color: '#0C447C', lineHeight: 1.7, wordBreak: 'keep-all' }}>
          <strong>AI 생성 콘텐츠 안내:</strong> 이 답변은 AI가 생성한 일반적인 의료 정보입니다. 개인 상황에 따라 다를 수 있으며, 정확한 진단과 치료는 반드시 전문의와 상담하세요. 의학적 결정의 근거로 사용하지 마세요.
        </div>
      </div>

      {/* ── 통계 수치 ── */}
      {article.stats && article.stats.length > 0 && (
        <div className="article-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '20px' }}>
          {article.stats.map((stat, i) => (
            <div key={i} style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '12px 8px', textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: 900, color: C.p, marginBottom: '2px' }}>{stat.num}</div>
              <div style={{ fontSize: '10px', color: C.tg, wordBreak: 'keep-all' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* ── 핵심 답변 박스 ── */}
      <div style={{ background: C.greenBg, border: `1px solid #5DCAA5`, borderRadius: '14px', padding: '18px 20px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
          <span style={{ width: '8px', height: '8px', background: C.green, borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ fontSize: '11px', fontWeight: 700, color: C.green }}>연세365 의료진 핵심 답변</span>
        </div>
        <p style={{ fontSize: '15px', color: '#1a3a2a', lineHeight: 1.9, margin: 0, fontWeight: 500, wordBreak: 'keep-all' }}>
          {article.faq[0]?.a}
        </p>
      </div>

      {/* ── 본문 섹션 ── */}
      {article.sections.map((sec, i) => renderSection(sec, i))}

      {/* ── FAQ — 접힘/펼침 (SEO 최적화) ── */}
      <section style={{ marginBottom: '36px' }}>
        <h2 style={{ fontSize: 'clamp(16px,2.5vw,20px)', fontWeight: 700, color: C.tm, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '4px', height: '20px', background: C.p, borderRadius: '2px', display: 'inline-block', flexShrink: 0 }} />
          자주 묻는 질문 (FAQ)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {article.faq.map((f, idx) => (
            <details key={idx} style={{ border: `0.5px solid ${C.pbd}`, borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
              <summary style={{ padding: '13px 16px 13px 16px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, color: C.tm, listStyle: 'none', display: 'flex', gap: '8px', alignItems: 'flex-start', background: '#fff', wordBreak: 'keep-all', WebkitAppearance: 'none' }}>
                <span style={{ color: C.p, fontWeight: 700, flexShrink: 0 }}>Q.</span>
                <span style={{ flex: 1 }}>{f.q}</span>
              </summary>
              <div className="article-faq-a" style={{ padding: '14px 16px 16px 36px', fontSize: '14px', color: C.ts, lineHeight: 1.9, background: '#fff8fa', borderTop: `0.5px dashed ${C.pbd}`, wordBreak: 'keep-all' }}>
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── 의료법 경고 ── */}
      <div style={{ background: C.amberBg, border: `0.5px solid #EF9F27`, borderRadius: '12px', padding: '14px 16px', marginBottom: '24px', fontSize: '13px', color: '#633806', lineHeight: 1.8, wordBreak: 'keep-all' }}>
        ⚠️ <strong>의료 안내 주의사항:</strong> 본 콘텐츠는 일반적인 건강 정보 제공을 목적으로 하며, 의료법상 진단·처방·치료를 대체하지 않습니다. 증상이나 치료에 대한 정확한 판단은 반드시 자격을 갖춘 의료진과 직접 상담하시기 바랍니다. 응급 상황 시 119에 연락하세요.
      </div>

      {/* ── 관련 검색어 ── */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ fontSize: '12px', color: C.tg, marginBottom: '8px' }}>관련 검색어</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {article.keywords.map(kw => (
            <span key={kw} style={{ background: '#f8f8f8', border: `0.5px solid ${C.pbd}`, color: C.tg, fontSize: '11px', padding: '3px 10px', borderRadius: '12px' }}>{kw}</span>
          ))}
        </div>
      </div>

      {/* ── 관련 Q&A (닥터나우 스타일) ── */}
      {related.length > 0 && (
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, color: C.tm, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '4px', height: '20px', background: C.p, borderRadius: '2px', display: 'inline-block', flexShrink: 0 }} />
            관련 Q&A
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {related.map(a => (
              <Link key={a.slug} href={`/health-hub/${a.category}/${a.slug}`}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fff', border: `0.5px solid ${C.pbd}`, borderRadius: '12px', padding: '14px 16px', textDecoration: 'none' }}>
                {a.heroImage && (
                  <img src={a.heroImage} alt={a.title}
                    style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '4px', wordBreak: 'keep-all', lineHeight: 1.4 }}>{a.title}</div>
                  <div style={{ fontSize: '11px', color: C.tg }}>{a.lastModified}</div>
                </div>
                <span style={{ fontSize: '14px', color: C.p, flexShrink: 0 }}>›</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA 하단 ── */}
      <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: '28px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: '16px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>더 궁금한 점이 있으신가요?</div>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.8)', marginBottom: '18px' }}>사당역 4번출구 · 연세365산부인과 · 당일 예약 가능</div>
        <div className="article-cta-btns" style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
            style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '13px', fontWeight: 700, padding: '11px 20px', borderRadius: '24px', textDecoration: 'none' }}>
            💬 카카오톡 상담
          </a>
          <a href="tel:02-585-3650"
            style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '11px 20px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>
            📞 02-585-3650
          </a>
          <Link href="/health-hub/ask"
            style={{ background: 'rgba(255,255,255,.15)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '11px 20px', borderRadius: '24px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,.4)' }}>
            ✍️ 질문 남기기
          </Link>
        </div>
      </div>
    </>
  )
}