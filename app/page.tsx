import type { Metadata } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Doctors from '../components/Doctors'
import Center from '../components/Center'
import Abortion from '../components/Abortion'
import Review from '../components/Review'
import FAQ from '../components/FAQ'
import Consultation from '../components/Booking'
import Footer from '../components/Footer'
import ConsultModal from '../components/ConsultModal'
import FloatingBar from '../components/FloatingBar'

export const metadata: Metadata = {
  title: '임신중절수술 금액·비용 | 낙태비용 가격 안내 | 연세365산부인과',
  description: '낙태비용, 낙태금액, 낙태가격, 임신중절비용, 임신중절수술비용을 주수별로 투명하게 안내합니다. 8주 미만 45만원. 사당역 4번출구 연세365산부인과.',
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
    description: '낙태비용 가격 주수별 투명 공개. 8주 미만 45만원. 사당역 4번출구.',
    url: 'https://yeonsei365.vercel.app/blog',
    images: [{ url: 'https://yeonsei365.vercel.app/og', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/blog',
  },
}

export default function Home() {
  return (
    <div className="relative bg-background text-gray-dark min-h-screen pb-0 font-sans">
      <Header />
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
  )
}