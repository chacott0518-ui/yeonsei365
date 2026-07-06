import type { Metadata } from 'next'
import Link from 'next/link'
import { clinicSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: '찾아오시는길 | 연세365산부인과의원',
  description: '연세365산부인과의원 오시는 길. 서울특별시 관악구 과천대로 939, 3층, 사당역 4번 출구 도보 3분. 2호선·4호선 환승. 02-585-3650.',
  alternates: { canonical: 'https://www.yeonsei365.com/about/location' },
  openGraph: { title: '찾아오시는길 | 연세365산부인과의원', url: 'https://www.yeonsei365.com/about/location', images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }] },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '연세365산부인과의원 위치가 어디인가요?', acceptedAnswer: { '@type': 'Answer', text: '서울특별시 관악구 과천대로 939, 3층에 위치합니다. 지하철 사당역 4번 출구 도보 3분 거리이며 2호선·4호선 환승역으로 접근이 편리합니다. 전화 02-585-3650으로 문의하세요.' } },
    { '@type': 'Question', name: '사당역에서 연세365산부인과의원까지 어떻게 가나요?', acceptedAnswer: { '@type': 'Answer', text: '지하철 4호선·2호선 사당역 4번 출구로 나와서 도보 3분이면 도착합니다. 버스 이용 시 사당역 정류장에서 하차 후 도보로 이동하시면 됩니다.' } },
  ],
}
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.yeonsei365.com' }, { '@type': 'ListItem', position: 2, name: '병원소개', item: 'https://www.yeonsei365.com/about' }, { '@type': 'ListItem', position: 3, name: '찾아오시는길', item: 'https://www.yeonsei365.com/about/location' } ] }

const subMenus = [
    { label: '의료진소개', href: '/about' },
    { label: '병원둘러보기', href: '/about/tour' },
    { label: '진료시간안내', href: '/about/hours' },
    { label: '찾아오시는길', href: '/about/location', active: true },
]

export default function LocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(80px,12vw,110px) clamp(16px,5vw,24px) 80px', fontFamily: 'Pretendard, sans-serif', color: '#1A0A10', lineHeight: 1.8 }}>

        <nav style={{ fontSize: '13px', color: '#AA5566', marginBottom: '20px' }}>
          <Link href="/" style={{ color: '#AA5566', textDecoration: 'none' }}>홈</Link>{' > '}
          <Link href="/about" style={{ color: '#AA5566', textDecoration: 'none' }}>병원소개</Link>{' > '}
          <span>찾아오시는길</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(24px,5vw,32px)', fontWeight: 900, lineHeight: 1.3, marginBottom: '8px' }}>
          찾아오시는길<br />
          <span style={{ color: '#E8305A' }}>사당역 4번 출구 도보 3분</span>
        </h1>
        <p style={{ fontSize: '13px', color: '#999', marginBottom: '28px' }}>서울특별시 관악구 과천대로 939, 3층</p>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'nowrap', marginBottom: '32px', overflow: 'hidden' }}>
          {subMenus.map(({ label, href, active }) => (
            <Link key={href} href={href} style={{ padding: '5px 10px', borderRadius: '14px', fontSize: '11px', whiteSpace: 'nowrap', flexShrink: 0, fontWeight: 700, textDecoration: 'none', background: active ? '#E8305A' : '#FFF5F7', color: active ? '#fff' : '#994466', border: `1px solid ${active ? '#E8305A' : '#FFE0E8'}` }}>
              {label}
            </Link>
          ))}
        </div>

        <div style={{ background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)', borderRadius: '16px', padding: 'clamp(16px,4vw,24px)', marginBottom: '32px', color: '#fff' }}>
          <p style={{ fontWeight: 900, fontSize: '18px', marginBottom: '16px' }}>📍 연세365산부인과의원 위치 정보</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: '주소', value: '서울특별시 관악구 과천대로 939, 3층' },
              { label: '지하철', value: '4호선·2호선 사당역 4번 출구 도보 3분' },
              { label: '일반진료', value: '02-585-3650' },
              { label: '여성성형', value: '02-547-2876' },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', gap: '14px', alignItems: 'center', background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px 16px' }}>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', minWidth: '60px', flexShrink: 0 }}>{label}</span>
                <span style={{ fontSize: '14px', fontWeight: 700 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '32px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #FFE0E8' }}>
          <img src="https://i.imgur.com/E5YzhoJ.png" alt="연세365산부인과의원 지도 사당역 4번 출구 도보 3분" style={{ width: '100%', display: 'block' }} />
        </div>

        <a href="https://map.naver.com/p/entry/place/36298054" target="_blank" rel="noopener noreferrer"
          style={{ display: 'block', background: '#03C75A', color: '#fff', textAlign: 'center', padding: '16px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', marginBottom: '44px' }}>
          📍 네이버 지도 보기
        </a>

        <h2 style={{ fontSize: 'clamp(18px,4vw,22px)', fontWeight: 800, borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          오시는 방법은 어떻게 되나요?
        </h2>
        <div style={{ marginBottom: '32px' }}>
          {[
            { icon: '🚇', title: '지하철', desc: '4호선·2호선 사당역 4번 출구 도보 3분. 강남, 서초, 방배, 이수, 관악, 동작, 과천 등 어디서든 접근이 편리한 환승역입니다.' },
            { icon: '🚌', title: '버스', desc: '사당역 버스 정류장 하차 후 도보 이용 가능합니다.' },
            { icon: '🚗', title: '자가용', desc: '주차 공간이 제한적이므로 대중교통 이용을 권장합니다.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ display: 'flex', gap: '14px', marginBottom: '10px', padding: '16px 18px', background: '#FFFAFB', borderRadius: '12px', border: '1px solid #FFE0E8' }}>
              <span style={{ fontSize: '24px', flexShrink: 0 }}>{icon}</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px', color: '#1A0A10' }}>{title}</p>
                <p style={{ fontSize: '14px', color: '#554455', margin: 0, wordBreak: 'keep-all' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 'clamp(18px,4vw,22px)', fontWeight: 800, borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>자주 묻는 질문</h2>
        <div style={{ marginBottom: '32px' }}>
          {[
            { q: '연세365산부인과의원 위치가 어디인가요?', a: '서울특별시 관악구 과천대로 939, 3층에 위치합니다. 사당역 4번 출구 도보 3분 거리이며 2호선·4호선 환승역으로 접근이 편리합니다.' },
            { q: '사당역에서 어떻게 가나요?', a: '4호선·2호선 사당역 4번 출구로 나와서 도보 3분이면 도착합니다. 버스 이용 시 사당역 정류장 하차 후 도보로 이동하시면 됩니다.' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '10px', border: '1px solid #FFE0E8', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#FFF5F7', padding: '14px 18px', fontWeight: 700, fontSize: '14px', color: '#E8305A' }}>Q. {item.q}</div>
              <div style={{ padding: '14px 18px', fontSize: '14px', color: '#554455', lineHeight: 1.85 }}>A. {item.a}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/abortion/hospital" style={{ fontSize: '13px', color: '#AA5566', textDecoration: 'none' }}>임신중절수술 병원 안내 자세히 보기</Link>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)', borderRadius: '20px', padding: 'clamp(20px,5vw,32px)', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '20px', fontWeight: 900, marginBottom: '6px' }}>방문 전 미리 상담하세요</p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginBottom: '22px' }}>사당역 4번 출구 도보 3분 · 당일 예약 가능 · 비밀보장</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', padding: '10px 18px', borderRadius: '50px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', minWidth: '140px', textAlign: 'center' }}>💬 카카오톡 상담</a>
            <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '10px 18px', borderRadius: '50px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', minWidth: '140px', textAlign: 'center', border: '2px solid rgba(255,255,255,0.5)' }}>📞 02-585-3650</a>
          </div>
        </div>

      </div>
    </>
  )
}
