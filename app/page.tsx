import type { Metadata } from 'next'
import { clinicSchema } from '@/lib/schemas'
import Hero from '../components/Hero'
import dynamic from 'next/dynamic'

const emptyFallback = () => <div aria-hidden="true" />

const About = dynamic(() => import('../components/About'), { ssr: false, loading: emptyFallback })
const Doctors = dynamic(() => import('../components/Doctors'), { ssr: false, loading: emptyFallback })
const Center = dynamic(() => import('../components/Center'), { ssr: false, loading: emptyFallback })
const Abortion = dynamic(() => import('../components/Abortion'), { ssr: false, loading: emptyFallback })
const Review = dynamic(() => import('../components/Review'), { ssr: false, loading: emptyFallback })
const FAQ = dynamic(() => import('../components/FAQ'), { ssr: false, loading: emptyFallback })
const Consultation = dynamic(() => import('../components/Booking'), { ssr: false, loading: emptyFallback })
const Footer = dynamic(() => import('../components/Footer'), { ssr: false, loading: emptyFallback })
const ConsultModal = dynamic(() => import('../components/ConsultModal'), { ssr: false, loading: emptyFallback })
const FloatingBar = dynamic(() => import('../components/FloatingBar'), { ssr: false, loading: emptyFallback })

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '임신중절수술 금액이 얼마인가요?', acceptedAnswer: { '@type': 'Answer', text: '사당역 연세365산부인과의원 기준 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원. 수술·마취·영양제·부가세 포함 최종 금액, 카드·현금 동일가, 추가 비용 없음.' } },
    { '@type': 'Question', name: '임신중절수술 합법 기간은 언제까지인가요?', acceptedAnswer: { '@type': 'Answer', text: '2021년 낙태죄 폐지 이후 임신 14주 이내는 본인 동의만으로 합법적으로 수술 가능. 14~24주는 모자보건법 사유 해당 시 조건부 가능.' } },
    { '@type': 'Question', name: '임신중절수술 혼자 가도 되나요?', acceptedAnswer: { '@type': 'Answer', text: '성인(만 19세 이상)은 보호자 없이 혼자 수술 가능. 수면마취 후 자가 운전은 불가하므로 귀가 시 대중교통 이용 필수. 사당역 4번 출구 도보 3분.' } },
    { '@type': 'Question', name: '흡입술과 소파술 중 어떤 방법이 더 안전한가요?', acceptedAnswer: { '@type': 'Answer', text: '8주 이내라면 흡입술이 자궁 내막 손상이 가장 적고 회복이 빠름. 8~12주는 소파술이 적합. 두 방법 모두 수면마취 하에 진행, 수술 중 통증 없음.' } },
    { '@type': 'Question', name: '임신중절수술 당일 절차가 어떻게 되나요?', acceptedAnswer: { '@type': 'Answer', text: '내원·접수 → 초음파·혈액검사 → 전문의 상담 → 수면마취 후 시술(10~15분) → 1인 회복실 안정 → 당일 귀가. 총 소요 시간 2~3시간.' } },
    { '@type': 'Question', name: '낙태수술 기록이 타인에게 알려질 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '의료법 제19조에 따라 진료 기록은 본인 동의 없이 외부에 절대 공개 불가. 1인 상담실·1인 회복실·독립 동선으로 완전 비밀 보장.' } },
  ],
}
const PAGE_URL = 'https://www.yeonsei365.com'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 금액·비용 | 낙태비용 가격 안내 | 연세365산부인과의원', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 금액·비용 낙태비용 가격 안내 연세365산부인과의원', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:PAGE_DATE, reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, about:{'@type':'MedicalCondition',name:'임신중절수술'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 예약 방법', description:'연세365산부인과의원 예약부터 수술까지', step:[ {'@type':'HowToStep',position:1,name:'상담 예약',text:'전화(02-585-3650) 또는 카카오톡으로 예약합니다.'}, {'@type':'HowToStep',position:2,name:'내원 및 검사',text:'사당역 4번 출구 도보 3분. 초음파 주수 확인 후 비용 안내.'}, {'@type':'HowToStep',position:3,name:'수술 및 귀가',text:'수면마취 후 10~30분 수술. 당일 귀가 가능.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 금액·비용 낙태비용 가격 안내 연세365산부인과의원', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'} ] }

export const metadata: Metadata = {
  title: '임신중절수술 금액·비용 | 낙태비용 가격 안내 | 연세365산부인과',
  description: '낙태비용, 낙태금액, 낙태가격, 임신중절비용, 임신중절수술비용을 주수별로 투명하게 안내합니다. 8주 미만 45만원. 사당역 4번 출구 연세365산부인과의원.',
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
  ],
  openGraph: {
    title: '낙태비용 가격 금액 | 임신중절수술비용 안내 | 연세365산부인과',
    description: '낙태비용 가격 주수별 투명 공개. 8주 미만 45만원. 사당역 4번 출구.',
    url: 'https://www.yeonsei365.com',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '연세365산부인과의원 임신중절수술 비용 안내' }],
  },
  twitter: { card: 'summary_large_image', title: '사당역 연세365산부인과의원 | 임신중절수술 전문', description: '임신중절수술 비용·방법·후기 전문의 직접 안내. 당일 수술 가능. 사당역 4번 출구 02-585-3650.' },
  alternates: { canonical: 'https://www.yeonsei365.com' },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <div className="relative bg-background text-gray-dark min-h-screen pb-0 font-sans">
        <main>
          <Hero />
          <div className="relative z-10 bg-white shadow-2xl">
            <About />
            <Doctors />
            <Center />
            <Abortion />
            <Review />
            <FAQ />
            <Consultation />
          </div>
        </main>
        <Footer />
        <ConsultModal />
        <FloatingBar />
      </div>
    </>
  )
}