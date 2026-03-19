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
  title: '연세365산부인과 | 임신중절수술·낙태비용 안내',
  description:
    '연세365산부인과 - 안전한 임신중절수술, 합리적인 낙태비용, 투명한 중절수술가격 안내. 사당역 4번출구 산부인과 전문의 직접 시행. 낙태수술비용 상담, 당일수술 및 퇴원, 1:1 비밀상담. 관악구·신림동·과천·강남 임신중절수술.',
  openGraph: {
    title: '연세365산부인과 | 임신중절수술·낙태비용 안내',
    description:
      '안전한 임신중절수술, 합리적인 낙태비용, 투명한 중절수술가격 안내. 사당역 4번출구.',
    url: 'https://yeonsei365.vercel.app',
    siteName: '연세365산부인과',
    images: [
      {
        url: 'https://yeonsei365.vercel.app/og',
        width: 1200,
        height: 630,
        alt: '연세365산부인과 임신중절수술 안내',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/',
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