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