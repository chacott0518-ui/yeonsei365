import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '임신중절수술 금액·비용 | 낙태비용 가격 안내 | 연세365산부인과',
  description: '임신중절수술 금액·비용을 주수별로 투명하게 안내합니다. 8주 미만 45만원. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '임신중절수술금액', '임신중절수술 금액', '낙태금액', '낙태 금액',
    '중절수술금액', '임신중절금액', '낙태비용금액', '임신중절수술금액얼마',
    '낙태뜻', '낙태정의', '낙태란', '인공임신중절뜻', '낙태의뜻',
    '낙태합법화', '낙태합법', '낙태법', '낙태합법시기', '낙태수술합법',
    '낙태수술합법시기', '낙태합법화시기', '모자보건법낙태',
    '낙태방법', '낙태시기', '낙태기간', '낙태병원', '낙태후기',
    '낙태수술', '낙태수술방법', '낙태수술회복기간', '낙태후유증',
    '낙태수술후기', '낙태수술후출혈', '낙태수술통증',
    '낙태수술후음식', '낙태수술후회복', '낙태비용', '낙태가격',
    '낙태비용가격', '낙태수술가격', '낙태비용얼마',
    '임신중절수술', '임신중절합법', '임신중절수술합법', '임신중절수술합법기간',
    '임신중절수술뜻', '임신중절수술후기', '임신중절수술후관리',
    '임신중절수술후생리', '임신중절수술기간', '임신중절흡입술',
    '임신중절수술비용', '임신중절수술가격', '임신중절수술병원',
    '임신중절비용', '임신중절가격', '임신중절수술금액',
    '임신초기중절수술', '임신초기중절수술후', '임신초기중절수술후관리',
    '임신초기중절수술후기', '임신초기중절수술부작용',
    '임신초기중절수술비용', '임신초기중절수술금액', '임신초기중절수술가격',
    '임신초기낙태', '임신초기낙태수술', '임신초기낙태시기',
    '임신초기낙태비용', '임신초기낙태금액', '임신초기낙태가격',
    '임신초기낙태후유증', '임신초기낙태부작용', '임신초기낙태보호자',
    '중절수술합법', '중절수술뜻', '중절수술후관리', '중절수술후기',
    '중절수술후생리', '중절수술보험', '중절수술보호자',
    '중절수술후음식', '중절수술후출혈', '중절수술후통증',
    '중절수술비용', '중절수술금액', '중절수술가격', '중절수술병원',
    '약물중절금액', '약물중절비용', '약물중절후기', '약물중절가격',
    '약물중절방법', '약물중절MTX',
    '인공임신중절수술', '인공임신중절비용', '인공임신중절금액',
    '인공임신중절가격', '인공임신중절수술비용', '인공임신중절수술금액',
    '관악구낙태병원', '사당역산부인과', '서울중절수술병원',
    '중절수술병원금액', '중절수술병원비용', '중절수술병원가격',
    '흡입식소파술비용', '흡입식소파술금액',
    '여성검진클리닉', '난임클리닉', '소음순성형', '질레이저',
    '갱년기', '자궁근종', '피임상담', '미레나', '산부인과',
    '관악구산부인과', '낙태수술후임신', '중절수술후임신',
    '임신중절수술후임신', '낙태수술보호자', '낙태비용보험',
  ],
  openGraph: {
    title: '임신중절수술 금액·비용 | 낙태비용 가격 안내 | 연세365산부인과',
    description: '임신중절수술 금액 주수별 투명 공개. 8주 미만 45만원. 사당역 4번출구.',
    url: 'https://yeonsei365.com/blog',
    images: [{ url: 'https://yeonsei365.com/og', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://yeonsei365.com/blog',
  },
}

export default function BlogPage() {
  const posts = [
    {
      slug: 'abortion-amount',
      tag: '금액안내',
      title: '임신중절수술 금액과 낙태의 정의와 뜻 비용 가격 안내 2026',
      desc: '임신중절수술 금액 8주 미만 45만원부터 주수별 정리. 낙태 정의·뜻·합법조건까지 전문의 직접 안내.',
      date: '2026.04.01',
    },
    {
      slug: 'abortion-cost',
      tag: '비용안내',
      title: '임신중절수술 비용 정리 2026',
      desc: '주수별 비용, 수술 과정, 주의사항까지 전문의가 직접 안내합니다.',
      date: '2026.03.16',
    },
    {
      slug: 'abortion-price',
      tag: '비용안내',
      title: '낙태 비용 가격 총정리 2026',
      desc: '주수별 낙태 비용 가격 공개, 합법적 조건, 포함 항목까지 정리.',
      date: '2026.03.16',
    },
    {
      slug: 'abortion-legal',
      tag: '합법화안내',
      title: '낙태수술 합법화 뜻 시기와 비용 | 임신초기중절수술 병원',
      desc: '낙태수술 합법화 뜻과 시기, 합법적 조건 4가지, 임신초기중절수술 비용까지 정리.',
      date: '2026.03.17',
    },
    {
      slug: 'abortion-info',
      tag: '수술정보',
      title: '인공임신중절수술 비용·시기·가격 안내 2026',
      desc: '인공임신중절수술 비용, 합법적 시기, 주수별 가격까지 전문의가 직접 안내합니다.',
      date: '2026.03.30',
    },
  ]

  const tagColors: Record<string, { bg: string; color: string }> = {
    '금액안내': { bg: '#FCE4EC', color: '#C2185B' },
    '비용안내': { bg: '#FFF0F4', color: '#E8305A' },
    '합법화안내': { bg: '#E8F5E9', color: '#2E7D32' },
    '수술정보': { bg: '#FFF3E0', color: '#E65100' },
  }

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
        {posts.map(({ slug, title, desc, date, tag }) => {
          const tagStyle = tagColors[tag] ?? { bg: '#FFF0F4', color: '#E8305A' }
          return (
            <Link key={slug} href={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ border: '1px solid #FFE0E8', borderRadius: '16px', padding: '24px', marginBottom: '16px', background: '#FFFAFB', cursor: 'pointer' }}>
                <span style={{ background: tagStyle.bg, color: tagStyle.color, fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '20px' }}>
                  {tag}
                </span>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1A0A10', margin: '12px 0 8px' }}>{title}</h2>
                <p style={{ fontSize: '14px', color: '#554455', margin: '0 0 12px' }}>{desc}</p>
                <span style={{ fontSize: '12px', color: '#999' }}>{date}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}