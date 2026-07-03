import type { Metadata } from 'next'
import Link from 'next/link'
import { clinicSchema } from '@/lib/schemas'

const PAGE_URL = 'https://www.yeonsei365.com/about'
const PAGE_DATE = '2026-05-26'

export const metadata: Metadata = {
  title: '병원소개 · 의료진 | 연세365산부인과의원',
  description: '사당역 연세365산부인과의원 병원 소개와 의료진 안내. 연세대 산부인과 전문의 이진우 원장이 직접 진료합니다. 사당역 4번 출구 도보 3분. 02-585-3650.',
  keywords: ['연세365산부인과의원', '사당역산부인과', '이진우원장', '산부인과전문의', '사당역병원소개'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: '병원소개 · 의료진 | 연세365산부인과의원',
    description: '사당역 연세365산부인과의원 병원 소개와 의료진 안내.',
    url: PAGE_URL,
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR', type: 'article',
  },
  twitter: { card: 'summary_large_image', title: '병원소개 · 의료진 | 연세365산부인과의원', description: '사당역 연세365산부인과의원 병원 소개와 의료진 안내.' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '연세365산부인과의원 원장님은 어떤 분인가요?', acceptedAnswer: { '@type': 'Answer', text: '이진우 대표원장은 연세대학교 의과대학을 졸업하고 신촌세브란스병원에서 산부인과 전문의 과정을 수료했습니다. 강남차이병원 여성센터장, 건국대학교 의학전문대학원 외래부교수를 역임했으며 사당역 연세365산부인과의원(02-585-3650)에서 모든 진료를 직접 담당합니다.' } },
    { '@type': 'Question', name: '연세365산부인과의원은 어디에 있나요?', acceptedAnswer: { '@type': 'Answer', text: '서울특별시 관악구 과천대로 939, 3층에 위치합니다. 지하철 사당역 4번 출구 도보 3분 거리이며 2호선·4호선 환승역으로 접근이 편리합니다. 전화 02-585-3650으로 문의하세요.' } },
    { '@type': 'Question', name: '연세365산부인과의원 진료시간은 어떻게 되나요?', acceptedAnswer: { '@type': 'Answer', text: '월~금 오전 10시~오후 5시 30분, 토요일 오전 9시~오후 4시 30분, 일·공휴일 오전 10시~오후 2시입니다. 연중무휴 365일 운영하며 일요일에도 수술이 가능합니다. 전화(02-585-3650) 또는 카카오톡으로 예약하세요.' } },
  ],
}
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: '연세365산부인과의원 병원소개 및 의료진 안내', datePublished: PAGE_DATE, dateModified: PAGE_DATE, image: 'https://www.yeonsei365.com/og-image.jpg', author: { '@type': 'Organization', name: '연세365산부인과의원', url: 'https://www.yeonsei365.com' }, publisher: { '@type': 'MedicalOrganization', name: '연세365산부인과의원', logo: { '@type': 'ImageObject', url: 'https://i.imgur.com/f7h5DY0.png' } }, mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL }, url: PAGE_URL }
const medicalWebPageSchema = { '@context': 'https://schema.org', '@type': 'MedicalWebPage', name: '연세365산부인과의원 병원소개 의료진', url: PAGE_URL, specialty: { '@type': 'MedicalSpecialty', name: '산부인과' }, medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' }, lastReviewed: PAGE_DATE, reviewedBy: { '@type': 'MedicalOrganization', name: '연세365산부인과의원', url: 'https://www.yeonsei365.com' }, about: { '@type': 'MedicalCondition', name: '산부인과 진료' } }
const howToSchema = { '@context': 'https://schema.org', '@type': 'HowTo', name: '연세365산부인과의원 예약 방법', description: '사당역 연세365산부인과의원 예약 단계별 안내', step: [ { '@type': 'HowToStep', position: 1, name: '전화 또는 카카오톡 예약', text: '02-585-3650으로 전화하거나 카카오톡으로 예약합니다.' }, { '@type': 'HowToStep', position: 2, name: '내원', text: '사당역 4번 출구 도보 3분. 신분증 지참.' }, { '@type': 'HowToStep', position: 3, name: '진료', text: '산부인과 전문의가 직접 진료합니다.' } ], tool: { '@type': 'HowToTool', name: '연세365산부인과의원' } }
const speakableSchema = { '@context': 'https://schema.org', '@type': 'WebPage', name: '연세365산부인과의원 병원소개 의료진', url: PAGE_URL, speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.speakable-summary'] } }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.yeonsei365.com' }, { '@type': 'ListItem', position: 2, name: '병원소개', item: PAGE_URL } ] }

const subMenus = [
    { label: '의료진소개', href: '/about', active: true },
    { label: '병원둘러보기', href: '/about/tour' },
    { label: '진료시간안내', href: '/about/hours' },
    { label: '찾아오시는길', href: '/about/location' },
]

const history = [
  '연세대학교 의과대학 졸업', '신촌세브란스병원 인턴수료',
  '신촌세브란스병원 산부인과전문의 수료', '행복여성병원 원장',
  '센트럴병원 진료과장', '세종병원 진료과장',
  '강남차이병원 여성센터장', '연세미산부인과 대표원장',
  '건국대학교 의학전문 대학원 외래부교수', '이뻐지는산부인과 대표원장',
  '대한산부인과학회 정회원', '대한초음파학회 정회원', '대한비노부인과학회 정회원',
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(80px,12vw,110px) clamp(16px,5vw,24px) 80px', fontFamily: 'Pretendard, sans-serif', color: '#1A0A10', lineHeight: 1.8 }}>

        <nav style={{ fontSize: '13px', color: '#AA5566', marginBottom: '20px' }}>
          <Link href="/" style={{ color: '#AA5566', textDecoration: 'none' }}>홈</Link>{' > '}
          <span>병원소개</span>
        </nav>

        <h1 style={{ fontSize: 'clamp(24px,5vw,32px)', fontWeight: 900, lineHeight: 1.3, marginBottom: '8px' }}>
          연세365산부인과의원<br />
          <span style={{ color: '#E8305A' }}>병원소개 · 의료진</span>
        </h1>
        <p style={{ fontSize: '13px', color: '#999', marginBottom: '28px' }}>사당역 4번 출구 · 산부인과 전문의 직접 진료</p>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'nowrap', marginBottom: '32px', overflow: 'hidden' }}>
          {subMenus.map(({ label, href, active }) => (
            <Link key={href} href={href} style={{ padding: '5px 10px', borderRadius: '14px', fontSize: '11px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, background: active ? '#E8305A' : '#FFF5F7', color: active ? '#fff' : '#994466', border: `1px solid ${active ? '#E8305A' : '#FFE0E8'}` }}>
              {label}
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: 'clamp(18px,4vw,24px)', fontWeight: 800, borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          연세365산부인과의원은 어떤 병원인가요?
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          연세365산부인과의원은 서울특별시 관악구 과천대로 939, 3층(사당역 4번 출구 도보 3분)에 위치한 여성 전문 의원입니다. 연세대학교 의과대학을 졸업하고 신촌세브란스병원에서 산부인과 전문의 과정을 수료한 이진우 대표원장이 모든 진료를 직접 담당합니다.
        </p>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '32px', wordBreak: 'keep-all' }}>
          임신중절수술, 여성검진, 피임상담, 난임클리닉, 갱년기 관리까지 여성 건강의 전 주기를 한 곳에서 관리할 수 있으며, 연중무휴 365일 운영으로 일요일에도 수술이 가능합니다. 모든 진료는 1:1 비밀이 철저히 보장됩니다.
        </p>

        <div style={{ background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)', borderRadius: '16px', padding: 'clamp(16px,4vw,24px)', marginBottom: '44px', color: '#fff' }}>
          <p style={{ fontWeight: 900, fontSize: 'clamp(15px,3.5vw,18px)', marginBottom: '16px' }}>📍 연세365산부인과의원 핵심 정보</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
            {[
              { label: '위치', value: '서울특별시 관악구 과천대로 939, 3층' },
              { label: '전화', value: '02-585-3650' },
              { label: '진료시간', value: '월~금 10:00~17:30 / 토 09:00~16:30' },
              { label: '일·공휴일', value: '10:00~14:00' },
              { label: '전문의', value: '연세대 산부인과 전문의' },
              { label: '특징', value: '연중무휴 · 비밀보장' },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '10px 14px' }}>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', marginBottom: '3px' }}>{label}</p>
                <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', fontWeight: 700, margin: 0 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: 'clamp(18px,4vw,24px)', fontWeight: 800, borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '20px' }}>
          담당 의료진을 소개합니다
        </h2>
        <div style={{ background: '#FFF5F7', borderRadius: '16px', padding: 'clamp(20px,5vw,32px)', marginBottom: '44px', border: '1px solid #FFE0E8' }}>
          <p style={{ fontWeight: 900, fontSize: 'clamp(18px,4vw,22px)', color: '#E8305A', marginBottom: '4px' }}>이진우 대표원장</p>
          <p style={{ fontSize: '13px', color: '#999', marginBottom: '12px' }}>산부인과 전문의 · MEDICAL DIRECTOR</p>
          <p style={{ fontSize: '14px', color: '#554455', lineHeight: 1.85, marginBottom: '20px', wordBreak: 'keep-all', fontStyle: 'italic' }}>
            "여성의 건강과 행복한 삶을 위해 따뜻한 마음으로 함께하겠습니다. 평안하고 프라이빗한 진료 공간에서 여성 전문 의료진이 세심하게 케어드립니다."
          </p>
          <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#1A0A10', marginBottom: '14px' }}>주요 약력</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
            {history.map((item) => (
              <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '10px 14px', background: '#fff', borderRadius: '10px', border: '1px solid #FFE0E8', fontSize: 'clamp(12px,2.8vw,13px)', color: '#554455', wordBreak: 'keep-all' }}>
                <span style={{ color: '#E8305A', flexShrink: 0, fontWeight: 700 }}>·</span>{item}
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: 'clamp(18px,4vw,24px)', fontWeight: 800, borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          연세365산부인과의원을 선택하는 이유는?
        </h2>
        <div style={{ marginBottom: '44px' }}>
          {[
            { icon: '👩‍⚕️', title: '산부인과 전문의 직접 진료', desc: '연세대학교 의과대학 졸업, 신촌세브란스병원 산부인과 전문의 출신 이진우 대표원장이 초진부터 추적 관리까지 모든 진료를 직접 담당합니다.' },
            { icon: '🔒', title: '1:1 완벽한 비밀 보장', desc: '의료법과 개인정보보호법에 따라 모든 진료 정보는 외부에 유출되지 않습니다. 1인 상담실·1인 회복실·독립 동선으로 프라이버시를 철저히 보호합니다.' },
            { icon: '📋', title: '투명한 비용 안내', desc: '진료 전 필요한 검사 항목과 예상 비용을 사전에 안내합니다. 추가 비용 없이 현금과 카드 동일가로 운영됩니다.' },
            { icon: '🏥', title: '연중무휴 365일 운영', desc: '평일·토요일·일요일·공휴일 모두 운영합니다. 일요일에도 수술이 가능하며 사당역 4번 출구 도보 3분으로 접근이 편리합니다.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ display: 'flex', gap: '14px', marginBottom: '10px', padding: 'clamp(14px,3.5vw,18px)', background: '#FFFAFB', borderRadius: '12px', border: '1px solid #FFE0E8' }}>
              <span style={{ fontSize: 'clamp(20px,4.5vw,26px)', flexShrink: 0 }}>{icon}</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: 'clamp(13px,3vw,15px)', marginBottom: '5px', color: '#1A0A10' }}>{title}</p>
                <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', color: '#554455', margin: 0, wordBreak: 'keep-all' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 'clamp(18px,4vw,24px)', fontWeight: 800, borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>
          연세365 산부인과 협력병원
        </h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '44px' }}>
          {['서울아산병원', '강남세브란스병원', '세브란스병원'].map((hospital) => (
            <div key={hospital} style={{ padding: '10px 18px', background: '#FFF5F7', borderRadius: '10px', border: '1px solid #FFE0E8', fontSize: '14px', fontWeight: 700, color: '#994466' }}>
              🏥 {hospital}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 'clamp(18px,4vw,24px)', fontWeight: 800, borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px' }}>자주 묻는 질문</h2>
        <div style={{ marginBottom: '32px' }}>
          {[
            { q: '연세365산부인과의원 원장님은 어떤 분인가요?', a: '이진우 대표원장은 연세대학교 의과대학을 졸업하고 신촌세브란스병원에서 산부인과 전문의 과정을 수료했습니다. 강남차이병원 여성센터장, 건국대학교 의학전문대학원 외래부교수 등을 역임했으며 현재 사당역 연세365산부인과의원에서 모든 진료를 직접 담당합니다.' },
            { q: '연세365산부인과의원은 어디에 있나요?', a: '서울특별시 관악구 과천대로 939, 3층에 위치합니다. 사당역 4번 출구 도보 3분 거리이며 2호선·4호선 환승역으로 접근이 편리합니다. 전화 02-585-3650으로 문의하세요.' },
            { q: '연세365산부인과의원 진료시간은 어떻게 되나요?', a: '월~금 오전 10시~오후 5시 30분, 토요일 오전 9시~오후 4시 30분, 일·공휴일 오전 10시~오후 2시입니다. 연중무휴 365일 운영하며 일요일에도 수술이 가능합니다.' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '10px', border: '1px solid #FFE0E8', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#FFF5F7', padding: '14px 18px', fontWeight: 700, fontSize: '14px', color: '#E8305A' }}>Q. {item.q}</div>
              <div style={{ padding: '14px 18px', fontSize: '14px', color: '#554455', lineHeight: 1.85 }}>A. {item.a}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '32px', padding: '14px', background: '#FFF5F7', borderRadius: '8px', fontSize: '12px', color: '#AA5566' }}>
          출처: 연세365산부인과의원 · 대한산부인과학회 · 보건복지부
        </div>

        <div style={{ background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)', borderRadius: '20px', padding: 'clamp(20px,5vw,32px)', textAlign: 'center' }}>
          <p style={{ color: '#fff', fontSize: 'clamp(18px,4.5vw,22px)', fontWeight: 900, marginBottom: '6px' }}>지금 바로 상담 받으세요</p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginBottom: '22px' }}>사당역 4번 출구 도보 3분 · 1:1 비밀보장 · 연중무휴</p>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', padding: '10px 18px', borderRadius: '50px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', minWidth: '140px', textAlign: 'center' }}>💬 카카오톡 상담</a>
            <a href="tel:02-585-3650" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '10px 18px', borderRadius: '50px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', minWidth: '140px', textAlign: 'center', border: '2px solid rgba(255,255,255,0.5)' }}>📞 02-585-3650</a>
          </div>
        </div>

      </div>
    </>
  )
}