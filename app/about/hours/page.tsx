import type { Metadata } from 'next'
import Link from 'next/link'
import { clinicSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: '진료시간 안내 | 연세365산부인과',
  description: '연세365산부인과 진료시간. 평일·토요일 09:00~18:00, 일·공휴일 10:00~14:00. 연중무휴 365일. 일요일 수술 가능. 02-585-3650.',
  alternates: { canonical: 'https://www.yeonsei365.com/about/hours' },
  openGraph: { title: '진료시간 안내 | 연세365산부인과', url: 'https://www.yeonsei365.com/about/hours', images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }] },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '연세365산부인과 진료시간이 어떻게 되나요?', acceptedAnswer: { '@type': 'Answer', text: '평일·토요일 오전 9시~오후 6시, 일·공휴일 오전 10시~오후 2시입니다. 연중무휴 365일 운영하며 일요일에도 수술이 가능합니다. 전화(02-585-3650) 또는 카카오톡으로 예약하세요.' } },
    { '@type': 'Question', name: '연세365산부인과 일요일에도 진료하나요?', acceptedAnswer: { '@type': 'Answer', text: '네, 일요일과 공휴일에도 오전 10시~오후 2시 운영합니다. 일요일에도 수술이 가능합니다. 방문 전 02-585-3650으로 확인하세요.' } },
    { '@type': 'Question', name: '당일 예약도 가능한가요?', acceptedAnswer: { '@type': 'Answer', text: '네, 당일 예약과 수술 모두 가능합니다. 전화(02-585-3650) 또는 카카오톡으로 금식 여부와 예약 가능 시간을 먼저 확인하시면 빠르게 진행할 수 있습니다.' } },
  ],
}
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.yeonsei365.com' }, { '@type': 'ListItem', position: 2, name: '병원소개', item: 'https://www.yeonsei365.com/about' }, { '@type': 'ListItem', position: 3, name: '진료시간 안내', item: 'https://www.yeonsei365.com/about/hours' } ] }

const subMenus = [
    { label: '의료진소개', href: '/about' },
{ label: '병원둘러보기', href: '/about/tour' },
{ label: '진료시간안내', href: '/about/hours', active: true },
{ label: '찾아오시는길', href: '/about/location' },
]

export default function HoursPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(80px,12vw,110px) clamp(16px,5vw,24px) 80px', fontFamily: 'Pretendard, sans-serif', color: '#1A0A10', lineHeight: 1.8 }}>

        <nav style={{ fontSize: '13px', color: '#AA5566', marginBottom: '20px' }}>
          <Link href="/" style={{ color: '#AA5566', textDecoration: 'none' }}>홈</Link>{' > '}
          <Link href="/about" style={{ color: '#AA5566', textDecoration: 'none' }}>병원소개</Link>{' > '}
          <span>진료시간 안내</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(24px,5vw,32px)', fontWeight: 900, lineHeight: 1.3, marginBottom: '8px' }}>
          진료시간 안내<br />
          <span style={{ color: '#E8305A' }}>연중무휴 365일 운영</span>
        </h1>
        <p style={{ fontSize: '13px', color: '#999', marginBottom: '28px' }}>연세365산부인과 · 02-585-3650</p>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'nowrap', marginBottom: '32px', overflow: 'hidden' }}>
          {subMenus.map(({ label, href, active }) => (
            <Link key={href} href={href} style={{ padding: '5px 10px', borderRadius: '14px', fontSize: '11px', whiteSpace: 'nowrap', flexShrink: 0, fontWeight: 700, textDecoration: 'none', background: active ? '#E8305A' : '#FFF5F7', color: active ? '#fff' : '#994466', border: `1px solid ${active ? '#E8305A' : '#FFE0E8'}` }}>
              {label}
            </Link>
          ))}
        </div>

        <div style={{ background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)', borderRadius: '20px', padding: 'clamp(20px,5vw,32px)', marginBottom: '32px', color: '#fff' }}>
          <p style={{ fontWeight: 900, fontSize: '18px', marginBottom: '20px' }}>🏥 산부인과 진료시간</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { day: '월 ~ 금', time: '오전 09:00 ~ 오후 18:00', badge: null },
              { day: '토요일', time: '오전 09:00 ~ 오후 18:00', badge: null },
              { day: '일 · 공휴일', time: '오전 10:00 ~ 오후 14:00', badge: '수술 가능' },
            ].map(({ day, time, badge }) => (
              <div key={day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '14px 18px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontWeight: 700, fontSize: '15px' }}>{day}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '15px' }}>{time}</span>
                  {badge && <span style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>{badge}</span>}
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.9)', fontWeight: 700, textAlign: 'center' }}>
            ✅ 연중무휴 365일 · 일요일 수술 가능
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '44px' }}>
          <div style={{ background: '#FFF5F7', borderRadius: '14px', padding: '20px', border: '1px solid #FFE0E8', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: '#AA5566', marginBottom: '6px' }}>일반진료상담</p>
            <a href="tel:02-585-3650" style={{ fontSize: '22px', fontWeight: 900, color: '#E8305A', textDecoration: 'none' }}>02-585-3650</a>
          </div>
          <div style={{ background: '#FFF5F7', borderRadius: '14px', padding: '20px', border: '1px solid #FFE0E8', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: '#AA5566', marginBottom: '6px' }}>여성성형진료상담</p>
            <a href="tel:02-547-2876" style={{ fontSize: '22px', fontWeight: 900, color: '#E8305A', textDecoration: 'none' }}>02-547-2876</a>
          </div>
        </div>

        <h2 style={{ fontSize: 'clamp(18px,4vw,22px)', fontWeight: 800, borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          예약은 어떻게 하나요?
        </h2>
        <div style={{ marginBottom: '32px' }}>
          {[
            { icon: '📞', title: '전화 예약', desc: '02-585-3650으로 전화하시면 바로 예약이 가능합니다. 당일 예약도 가능합니다.' },
            { icon: '💬', title: '카카오톡 예약', desc: '카카오톡 채널에서 연세365산부인과를 검색하거나 아래 버튼을 눌러 상담하세요. 24시간 문의 가능합니다.' },
            { icon: '🚶', title: '당일 방문', desc: '예약 없이 당일 방문도 가능합니다. 다만 대기 시간이 발생할 수 있으므로 사전 예약을 권장합니다.' },
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
            { q: '연세365산부인과 진료시간이 어떻게 되나요?', a: '평일·토요일 오전 9시~오후 6시, 일·공휴일 오전 10시~오후 2시입니다. 연중무휴 365일 운영하며 일요일에도 수술이 가능합니다.' },
            { q: '일요일에도 진료하나요?', a: '네, 일요일과 공휴일에도 오전 10시~오후 2시 운영합니다. 일요일에도 수술이 가능합니다. 방문 전 02-585-3650으로 확인하세요.' },
            { q: '당일 예약도 가능한가요?', a: '네, 당일 예약과 수술 모두 가능합니다. 전화(02-585-3650) 또는 카카오톡으로 금식 여부와 예약 가능 시간을 먼저 확인하시면 빠르게 진행할 수 있습니다.' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '10px', border: '1px solid #FFE0E8', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#FFF5F7', padding: '14px 18px', fontWeight: 700, fontSize: '14px', color: '#E8305A' }}>Q. {item.q}</div>
              <div style={{ padding: '14px 18px', fontSize: '14px', color: '#554455', lineHeight: 1.85 }}>A. {item.a}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)', borderRadius: '20px', padding: 'clamp(20px,5vw,32px)', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: '20px', fontWeight: 900, marginBottom: '6px' }}>지금 바로 예약하세요</p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginBottom: '22px' }}>연중무휴 · 당일 예약·수술 가능 · 비밀보장</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', padding: '10px 18px', borderRadius: '50px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', minWidth: '140px', textAlign: 'center' }}>💬 카카오톡 상담</a>
            <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '10px 18px', borderRadius: '50px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', minWidth: '140px', textAlign: 'center', border: '2px solid rgba(255,255,255,0.5)' }}>📞 02-585-3650</a>
          </div>
        </div>

      </div>
    </>
  )
}