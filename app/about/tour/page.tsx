import type { Metadata } from 'next'
import Link from 'next/link'
import { clinicSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: '병원 둘러보기 | 연세365산부인과',
  description: '사당역 연세365산부인과 내부 시설을 미리 확인하세요. 1:1 상담실, 1인 회복실, 독립 동선. 02-585-3650.',
  alternates: { canonical: 'https://www.yeonsei365.com/about/tour' },
  openGraph: { title: '병원 둘러보기 | 연세365산부인과', url: 'https://www.yeonsei365.com/about/tour', images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }] },
}

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.yeonsei365.com' }, { '@type': 'ListItem', position: 2, name: '병원소개', item: 'https://www.yeonsei365.com/about' }, { '@type': 'ListItem', position: 3, name: '병원 둘러보기', item: 'https://www.yeonsei365.com/about/tour' } ] }

const subMenus = [
    { label: '의료진소개', href: '/about' },
    { label: '병원둘러보기', href: '/about/tour', active: true },
    { label: '진료시간안내', href: '/about/hours' },
    { label: '찾아오시는길', href: '/about/location' },
]

export default function TourPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(80px,12vw,110px) clamp(16px,5vw,24px) 80px', fontFamily: 'Pretendard, sans-serif', color: '#1A0A10', lineHeight: 1.8 }}>

        <nav style={{ fontSize: '13px', color: '#AA5566', marginBottom: '20px' }}>
          <Link href="/" style={{ color: '#AA5566', textDecoration: 'none' }}>홈</Link>{' > '}
          <Link href="/about" style={{ color: '#AA5566', textDecoration: 'none' }}>병원소개</Link>{' > '}
          <span>병원 둘러보기</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(24px,5vw,32px)', fontWeight: 900, lineHeight: 1.3, marginBottom: '8px' }}>
          병원 둘러보기<br />
          <span style={{ color: '#E8305A' }}>내부 시설 미리 보기</span>
        </h1>
        <p style={{ fontSize: '13px', color: '#999', marginBottom: '28px' }}>연세365산부인과 · 사당역 4번출구 도보 3분</p>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'nowrap', marginBottom: '32px', overflow: 'hidden' }}>
          {subMenus.map(({ label, href, active }) => (
            <Link key={href} href={href} style={{ padding: '5px 10px', borderRadius: '14px', fontSize: '11px', whiteSpace: 'nowrap', flexShrink: 0, fontWeight: 700, textDecoration: 'none', background: active ? '#E8305A' : '#FFF5F7', color: active ? '#fff' : '#994466', border: `1px solid ${active ? '#E8305A' : '#FFE0E8'}` }}>
              {label}
            </Link>
          ))}
        </div>

        <div style={{ background: '#FFF5F7', border: '2px dashed #FFD6E4', borderRadius: '20px', padding: '60px 20px', textAlign: 'center', marginBottom: '44px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏥</div>
          <p style={{ fontSize: '20px', fontWeight: 900, color: '#E8305A', marginBottom: '8px' }}>병원 사진 업로드 준비중</p>
          <p style={{ fontSize: '14px', color: '#994466', marginBottom: '4px' }}>진료실, 상담실, 회복실, 대기실 사진을 준비하고 있습니다.</p>
          <p style={{ fontSize: '13px', color: '#AA5566' }}>곧 업데이트 예정입니다.</p>
        </div>

        <h2 style={{ fontSize: 'clamp(18px,4vw,22px)', fontWeight: 800, borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          연세365산부인과 시설은 어떻게 되나요?
        </h2>
        <div style={{ marginBottom: '44px' }}>
          {[
            { icon: '🚪', title: '1:1 독립 상담실', desc: '모든 상담은 독립된 1인 상담실에서 진행됩니다. 다른 환자와 마주치지 않아 완전한 프라이버시가 보장됩니다.' },
            { icon: '🛏️', title: '1인 회복실', desc: '수술 후 회복은 1인 전용 회복실에서 진행됩니다. 충분한 휴식과 함께 의료진이 상태를 지속적으로 모니터링합니다.' },
            { icon: '🔬', title: '최신 초음파 장비', desc: '정밀 초음파 장비로 정확한 임신 주수 확인 및 자궁·난소 상태를 진단합니다.' },
            { icon: '🏃', title: '독립 동선', desc: '접수부터 귀가까지 독립된 동선을 운영합니다. 다른 환자와 마주칠 가능성을 최소화했습니다.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ display: 'flex', gap: '14px', marginBottom: '10px', padding: 'clamp(14px,3.5vw,18px)', background: '#FFFAFB', borderRadius: '12px', border: '1px solid #FFE0E8' }}>
              <span style={{ fontSize: '24px', flexShrink: 0 }}>{icon}</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '5px', color: '#1A0A10' }}>{title}</p>
                <p style={{ fontSize: '14px', color: '#554455', margin: 0, wordBreak: 'keep-all' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)', borderRadius: '20px', padding: 'clamp(20px,5vw,32px)', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '20px', fontWeight: 900, marginBottom: '6px' }}>직접 방문해서 확인하세요</p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginBottom: '22px' }}>사당역 4번출구 도보 3분 · 예약 없이 당일 내원 가능</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', padding: '13px 26px', borderRadius: '50px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
            <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '10px 18px', borderRadius: '50px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', minWidth: '140px', textAlign: 'center', border: '2px solid rgba(255,255,255,0.5)' }}>📞 02-585-3650</a>
          </div>
        </div>

      </div>
    </>
  )
}