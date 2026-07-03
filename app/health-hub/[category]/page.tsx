import { clinicSchema } from '@/lib/schemas'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CATEGORIES, getArticlesByCategory } from '@/lib/healthHub'
import type { CategoryKey } from '@/lib/healthHub'

const BASE = 'https://www.yeonsei365.com'
const C = {
  p: '#D6336C', pd: '#993556', pp: '#5c0e20',
  pb: '#FFF5F7', pbd: '#f0d0dc',
  tm: '#1a1a1a', ts: '#444', tg: '#888',
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map(category => ({ category }))
}

export async function generateMetadata({
  params,
}: {
  params: { category: string }
}): Promise<Metadata> {
  const cat = CATEGORIES[params.category as CategoryKey]
  if (!cat) return {}
  return {
    title: `${cat.label} Q&A 모음 | 연세365산부인과의원 건강허브`,
    description: `사당역 연세365산부인과의원 ${cat.label} 관련 일반 건강정보 Q&A 모음입니다. 02-585-3650.`,
    keywords: [cat.label, '산부인과Q&A', '임신중절수술', '사당역산부인과', '연세365산부인과의원', `${cat.label}질문`, `${cat.label}답변`],
    alternates: { canonical: `${BASE}/health-hub/${params.category}` },
    openGraph: {
      title: `${cat.label} Q&A | 연세365산부인과의원`,
      description: `${cat.label} 관련 일반 건강정보 Q&A 모음`,
      url: `${BASE}/health-hub/${params.category}`,
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${cat.label} Q&A | 연세365산부인과의원`, description: `${cat.label} 관련 일반 건강정보 Q&A. 사당역 연세365산부인과의원 02-585-3650.` },
  }
}
const PAGE_DATE = '2026-05-22'

export default function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const cat = CATEGORIES[params.category as CategoryKey]
  if (!cat) notFound()

    const articles = getArticlesByCategory(params.category as CategoryKey)
    .sort((a, b) => {
      const da = a.lastModified.replace(/[^0-9]/g, '')
      const db = b.lastModified.replace(/[^0-9]/g, '')
      return db.localeCompare(da)
    })

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'FAQPage', mainEntity: articles.flatMap(a => a.faq.slice(0,2).map(f => ({'@type':'Question', name:f.q, acceptedAnswer:{'@type':'Answer', text:f.a}}))) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'MedicalWebPage', name:`${cat.label} Q&A | 연세365산부인과의원`, url:`https://www.yeonsei365.com/health-hub/${params.category}`, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:PAGE_DATE, reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'} }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[{'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'},{'@type':'ListItem',position:2,name:'AI 건강 Q&A',item:'https://www.yeonsei365.com/health-hub'},{'@type':'ListItem',position:3,name:`${cat.label}`,item:`https://www.yeonsei365.com/health-hub/${params.category}`}] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  '@context': 'https://schema.org', '@type': 'Article',
  headline: `${cat.label} Q&A 모음 | 연세365산부인과의원`,
  datePublished: PAGE_DATE, dateModified: PAGE_DATE,
  image: `${BASE}/og-image.jpg`,
  author: { '@type': 'Organization', name: '연세365산부인과의원', url: BASE },
  publisher: { '@type': 'MedicalOrganization', name: '연세365산부인과의원', logo: { '@type': 'ImageObject', url: 'https://i.imgur.com/f7h5DY0.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/health-hub/${params.category}` },
}) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: '임신중절수술 예약 방법',
  description: '연세365산부인과의원 임신중절수술 예약부터 수술까지',
  step: [
    { '@type': 'HowToStep', position: 1, name: '상담 예약', text: '전화(02-585-3650) 또는 카카오톡으로 예약합니다.' },
    { '@type': 'HowToStep', position: 2, name: '내원 및 검사', text: '신분증 지참 후 내원. 초음파로 주수 확인 후 비용 안내.' },
    { '@type': 'HowToStep', position: 3, name: '수술 및 귀가', text: '수면마취 후 10~30분 수술. 당일 귀가 가능.' },
  ],
  tool: { '@type': 'HowToTool', name: '연세365산부인과의원' },
}) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: `${cat.label} Q&A | 연세365산부인과의원`,
  url: `${BASE}/health-hub/${params.category}`,
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
}) }} />
      {/* 카테고리 헤더 */}
      <div style={{ marginBottom: '28px' }}>
        <span
          style={{
            display: 'inline-block',
            background: C.pb,
            color: C.pd,
            fontSize: '11px',
            fontWeight: 700,
            padding: '3px 10px',
            borderRadius: '10px',
            marginBottom: '12px',
          }}
        >
          {cat.icon} {cat.label}
        </span>
        <h1
          style={{
            fontSize: 'clamp(20px, 3vw, 26px)',
            fontWeight: 900,
            color: C.tm,
            marginBottom: '8px',
            letterSpacing: '-.03em',
            wordBreak: 'keep-all',
          }}
        >
          {cat.label} Q&A
        </h1>
        <p style={{ fontSize: '14px', color: C.tg }}>
          총 {articles.length}개 Q&A · 일반 건강정보
        </p>
      </div>

      {/* 질문 유도 배너 */}
      <div
        style={{
          background: `linear-gradient(135deg, ${C.pp}, ${C.p})`,
          borderRadius: '14px',
          padding: '20px 24px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '4px',
              wordBreak: 'keep-all',
            }}
          >
            원하는 답변이 없으신가요?
          </div>
          <div
            style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,.8)',
              wordBreak: 'keep-all',
            }}
          >
            질문을 남기면 AI가 일반 건강정보 답변을 생성합니다
          </div>
        </div>
        <Link
          href="/health-hub/ask"
          style={{
            display: 'inline-block',
            background: '#FEE500',
            color: '#3B1B1B',
            fontSize: '13px',
            fontWeight: 700,
            padding: '10px 20px',
            borderRadius: '20px',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          질문 남기기 →
        </Link>
      </div>

      {/* 아티클 목록 */}
      {articles.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: C.pb,
            borderRadius: '16px',
            border: `0.5px solid ${C.pbd}`,
          }}
        >
          <div style={{ fontSize: '40px', marginBottom: '16px' }}>✍️</div>
          <div
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: C.tm,
              marginBottom: '8px',
            }}
          >
            아직 등록된 Q&A가 없습니다
          </div>
          <div
            style={{
              fontSize: '14px',
              color: C.tg,
              marginBottom: '20px',
              lineHeight: 1.7,
              wordBreak: 'keep-all',
            }}
          >
            질문을 남겨주시면 AI가<br />
            Q&A 페이지에 일반 건강정보 답변을 게시합니다.
          </div>
          <Link
            href="/health-hub/ask"
            style={{
              display: 'inline-block',
              background: C.p,
              color: '#fff',
              fontSize: '14px',
              fontWeight: 700,
              padding: '12px 24px',
              borderRadius: '20px',
              textDecoration: 'none',
            }}
          >
            첫 번째 질문 남기기
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/health-hub/${a.category}/${a.slug}`}
              style={{
                display: 'block',
                background: '#fff',
                border: `0.5px solid ${C.pbd}`,
                borderRadius: '14px',
                padding: '18px 20px',
                textDecoration: 'none',
              }}
            >
              {/* 날짜 */}
              <div
                style={{
                  fontSize: '11px',
                  color: C.tg,
                  marginBottom: '6px',
                }}
              >
                {a.lastModified}
              </div>
              {/* 제목 */}
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: C.tm,
                  marginBottom: '8px',
                  lineHeight: 1.4,
                  wordBreak: 'keep-all',
                }}
              >
                {a.title}
              </div>
              {/* 첫 FAQ 미리보기 */}
              <div
                style={{
                  fontSize: '13px',
                  color: C.ts,
                  lineHeight: 1.6,
                  marginBottom: '10px',
                  wordBreak: 'keep-all',
                }}
              >
                {a.faq[0]?.a.slice(0, 100)}...
              </div>
              {/* 하단 정보 */}
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    background: C.pb,
                    color: C.pd,
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '8px',
                  }}
                >
                  FAQ {a.faq.length}개
                </span>
                <span
                  style={{
                    background: '#f0faf5',
                    color: '#0f6e56',
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '8px',
                  }}
                >
                  일반 건강정보
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    color: C.p,
                    fontWeight: 600,
                    marginLeft: 'auto',
                  }}
                >
                  자세히 보기 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* 하단 전화 CTA */}
      <div
        style={{
          marginTop: '32px',
          background: C.pb,
          border: `0.5px solid ${C.pbd}`,
          borderRadius: '14px',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '14px',
            fontWeight: 700,
            color: C.tm,
            marginBottom: '4px',
          }}
        >
          직접 상담이 필요하신가요?
        </div>
        <div
          style={{
            fontSize: '12px',
            color: C.tg,
            marginBottom: '14px',
            wordBreak: 'keep-all',
          }}
        >
          사당역 4번 출구 · 연세365산부인과의원
        </div>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          
            <a href="http://pf.kakao.com/_TpaBj/chat"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#FEE500',
              color: '#3B1B1B',
              fontSize: '13px',
              fontWeight: 700,
              padding: '10px 18px',
              borderRadius: '20px',
              textDecoration: 'none',
            }}
          >
            💬 카카오톡 상담
          </a>
          
            <a href="tel:02-585-3650"
            style={{
              background: C.p,
              color: '#fff',
              fontSize: '13px',
              fontWeight: 700,
              padding: '10px 18px',
              borderRadius: '20px',
              textDecoration: 'none',
            }}
          >
            📞 02-585-3650
          </a>
        </div>
      </div>
    </>
  )
}