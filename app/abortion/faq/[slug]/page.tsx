import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ALL_FAQS, getFaqBySlug, FAQ_CATEGORIES } from '@/lib/faqData'
import { clinicSchema } from '@/lib/schemas'
import ViewCounter from '@/components/ViewCounter'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return ALL_FAQS.map((faq) => ({ slug: faq.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const faq = getFaqBySlug(params.slug)
  if (!faq) return {}
  const url = `https://www.yeonsei365.com/abortion/faq/${faq.slug}`
  return {
    title: `${faq.question} | 연세365산부인과의원`,
    description: faq.answer.slice(0, 120),
    alternates: { canonical: url },
    openGraph: {
      title: `${faq.question} | 연세365산부인과의원`,
      description: faq.answer.slice(0, 120),
      url,
      images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }],
      locale: 'ko_KR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: faq.question,
      description: faq.answer.slice(0, 120),
    },
  }
}

export default function FaqSlugPage({ params }: Props) {
  const faq = getFaqBySlug(params.slug)
  if (!faq) notFound()

  const categoryFaqs = ALL_FAQS.filter(
    (f) => f.category === faq.category && f.slug !== faq.slug
  ).slice(0, 5)

  const categoryLabel =
    FAQ_CATEGORIES.find((c) => c.id === faq.category)?.label || '일반'

  const PAGE_URL = `https://www.yeonsei365.com/abortion/faq/${faq.slug}`

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: faq.question,
    description: faq.answer.slice(0, 120),
    datePublished: '2026-06-01',
    dateModified: '2026-06-01',
    image: 'https://www.yeonsei365.com/og-image.jpg',
    author: {
      '@type': 'Organization',
      name: '연세365산부인과의원',
      url: 'https://www.yeonsei365.com',
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: '연세365산부인과의원',
      logo: { '@type': 'ImageObject', url: 'https://i.imgur.com/f7h5DY0.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
    url: PAGE_URL,
  }

  const medicalSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: faq.question,
    url: PAGE_URL,
    specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
    medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' },
    }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.yeonsei365.com' },
      { '@type': 'ListItem', position: 2, name: '임신중절클리닉', item: 'https://www.yeonsei365.com/abortion' },
      { '@type': 'ListItem', position: 3, name: 'FAQ', item: 'https://www.yeonsei365.com/abortion/faq' },
      { '@type': 'ListItem', position: 4, name: faq.question, item: PAGE_URL },
    ],
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: faq.question,
    url: PAGE_URL,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.faq-answer', '.speakable-summary'],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />

      {/* 헤더 */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #FFE0E8', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" aria-label="홈으로"><img src="https://i.imgur.com/f7h5DY0.png" alt="연세365 로고" style={{ height: '36px' }} /></Link>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link href="/abortion/faq" style={{ fontSize: '13px', color: '#994466', textDecoration: 'none', fontWeight: 600 }}>FAQ 전체보기</Link>
          <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', padding: '8px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>💬 카톡상담</a>
        </div>
      </header>
      <div style={{ height: '64px' }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'Pretendard, sans-serif', color: '#1A0A10', lineHeight: 1.8 }}>

        {/* 브레드크럼 */}
        <div style={{ marginBottom: '24px', fontSize: '13px', color: '#AA5566' }}>
          <Link href="/" style={{ color: '#AA5566', textDecoration: 'none' }}>홈</Link>
          {' > '}
          <Link href="/abortion" style={{ color: '#AA5566', textDecoration: 'none' }}>임신중절클리닉</Link>
          {' > '}
          <Link href="/abortion/faq" style={{ color: '#AA5566', textDecoration: 'none' }}>FAQ</Link>
          {' > '}
          <span>{categoryLabel}</span>
        </div>

        {/* 카테고리 뱃지 */}
        <div style={{ marginBottom: '16px' }}>
          <span style={{ background: '#FFF0F4', color: '#D6336C', fontSize: '12px', fontWeight: 700, padding: '4px 14px', borderRadius: '20px' }}>
            {categoryLabel}
          </span>
        </div>

        {/* 질문 H1 */}
        <h1 style={{ fontSize: '26px', fontWeight: 900, color: '#1A0A10', lineHeight: 1.4, marginBottom: '8px' }}>
          {faq.question}
        </h1>
        <div style={{ fontSize: '13px', color: '#999', marginBottom: '32px' }}>
          연세365산부인과의원 · 2026-06-01 업데이트 · <ViewCounter slug={`abortion-faq-${params.slug}`} />
        </div>

        {/* aiSummary infobox */}
        <div className="speakable-summary" style={{ background: '#FFF5F7', border: '1px solid #FFD6E4', borderRadius: '12px', padding: '16px 20px', marginBottom: '28px', fontSize: '15px', color: '#D6336C', fontWeight: 700, lineHeight: 1.7 }}>
          💡 핵심 요약: {faq.answer.slice(0, 80)}
        </div>

        {/* 답변 본문 */}
        <div className="faq-answer" style={{ fontSize: '16px', color: '#333', lineHeight: 1.9, marginBottom: '40px', background: '#fff', border: '1px solid #FFE0E8', borderRadius: '16px', padding: '28px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ background: '#D6336C', color: '#fff', fontWeight: 700, fontSize: '13px', padding: '3px 10px', borderRadius: '20px', flexShrink: 0 }}>A</span>
            <span style={{ fontWeight: 700, color: '#D6336C', fontSize: '15px' }}>{faq.question}</span>
          </div>
          <p style={{ margin: 0, paddingLeft: '0' }}>{faq.answer}</p>
        </div>

        {/* 출처 */}
        <div style={{ padding: '14px 18px', background: '#F8F8F8', borderRadius: '8px', fontSize: '12px', color: '#999', marginBottom: '40px' }}>
          출처: 연세365산부인과의원 · 보건복지부 · 건강보험심사평가원 · 대한산부인과학회
        </div>

        {/* 관련 FAQ */}
        {categoryFaqs.length > 0 && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#1A0A10', marginBottom: '16px' }}>
              관련 질문
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {categoryFaqs.map((related) => (
                <Link
                  key={related.slug}
                  href={`/abortion/faq/${related.slug}`}
                  style={{ display: 'block', padding: '14px 18px', background: '#fff', border: '1px solid #FFE0E8', borderRadius: '10px', textDecoration: 'none', color: '#333', fontSize: '14px', fontWeight: 600 }}
                >
                  Q. {related.question}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* FAQ 전체 보기 버튼 */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Link href="/abortion/faq" style={{ display: 'inline-block', padding: '12px 28px', border: '2px solid #D6336C', borderRadius: '24px', color: '#D6336C', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
            ← FAQ 전체 목록 보기
          </Link>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '20px', fontWeight: 900, marginBottom: '6px' }}>지금 바로 무료 상담 받으세요</p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', marginBottom: '20px' }}>
            비밀 보장 · 당일 수술 가능 · 사당역 4번 출구 도보 3분
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', padding: '13px 26px', borderRadius: '50px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
              💬 카카오톡 무료상담
            </a>
            <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '13px 26px', borderRadius: '50px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' }}>
              📞 02-585-3650
            </a>
          </div>
        </div>

      </div>
    </>
  )
}
