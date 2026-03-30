import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '낙태비용 가격 금액 | 임신중절수술비용 안내 | 연세365산부인과',
  description: '낙태비용, 낙태금액, 낙태가격, 임신중절비용, 임신중절수술비용을 주수별로 투명하게 안내합니다. 8주 미만 45만원. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '낙태비용', '낙태금액', '낙태가격',
    '임신중절비용', '임신중절금액', '임신중절가격',
    '임신중절수술비용', '임신중절수술금액', '임신중절수술가격',
    '임신초기중절수술비용', '임신초기중절수술금액', '임신초기중절수술가격',
    '임신초기낙태비용', '임신초기낙태금액', '임신초기낙태가격',
    '중절수술비용', '중절수술금액', '중절수술가격',
    '인공임신중절비용', '인공임신중절금액', '인공임신중절가격',
  ],
  openGraph: {
    title: '낙태비용 가격 금액 | 임신중절수술비용 안내 | 연세365산부인과',
    description: '낙태비용 가격 주수별 투명 공개. 8주 미만 45만원. 사당역 4번출구.',
    url: 'https://yeonsei365.vercel.app/blog',
    images: [{ url: 'https://yeonsei365.vercel.app/og', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/blog',
  },
}

export default function BlogPage() {
  const posts = [
    {
      slug: 'abortion-cost',
      title: '임신중절수술 비용 완벽 정리 2026',
      desc: '주수별 비용, 수술 과정, 주의사항까지 전문의가 직접 안내합니다.',
      date: '2026.03.16',
      tag: '비용안내',
    },
    {
        slug: 'abortion-price',
        title: '낙태 비용 가격 총정리 2026',
        desc: '주수별 낙태 비용 가격 공개, 합법적 조건, 포함 항목까지 완벽 정리.',
        date: '2026.03.16',
        tag: '비용안내',
      },
      {
        slug: 'abortion-legal',
        title: '낙태수술 합법화 뜻 시기와 비용 | 임신초기중절수술 병원',
        desc: '낙태수술 합법화 뜻과 시기, 합법적 조건 4가지, 임신초기중절수술 비용까지 완벽 정리.',
        date: '2026.03.17',
        tag: '합법화안내',
      },
      {
        slug: 'abortion-info',
        title: '인공임신중절수술 비용·시기·가격 완벽 안내 2026',
        desc: '인공임신중절수술 비용, 합법적 시기, 주수별 가격까지 전문의가 직접 안내합니다.',
        date: '2026.03.30',
        tag: '수술정보',
      },
  ]
  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #FFE0E8', padding: '14px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src="https://i.imgur.com/f7h5DY0.png" alt="연세365 로고" style={{ height: '36px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <a href="/blog" style={{ fontSize: '13px', color: '#994466', textDecoration: 'none', fontWeight: 600 }}>임신중절수술정보</a>
          <a href="/" style={{ fontSize: '13px', color: '#666', textDecoration: 'none' }}>홈으로</a>
          <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
            style={{ background: '#FEE500', color: '#3B1B1B', padding: '8px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>
            💬 카톡상담
          </a>
        </div>
      </header>
      <div style={{ height: '64px' }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'Pretendard, sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#1A0A10', marginBottom: '8px' }}>임신중절수술정보</h1>
      <p style={{ color: '#AA5566', marginBottom: '32px', fontSize: '15px' }}>임신중절수술 비용·합법적 조건 전문의 직접 안내</p>
        {posts.map(({ slug, title, desc, date, tag }) => (
          <Link key={slug} href={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
            <div style={{ border: '1px solid #FFE0E8', borderRadius: '16px', padding: '24px', marginBottom: '16px', background: '#FFFAFB', cursor: 'pointer' }}>
              <span style={{ background: '#FFF0F4', color: '#E8305A', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '20px' }}>{tag}</span>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1A0A10', margin: '12px 0 8px' }}>{title}</h2>
              <p style={{ fontSize: '14px', color: '#554455', margin: '0 0 12px' }}>{desc}</p>
              <span style={{ fontSize: '12px', color: '#999' }}>{date}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}