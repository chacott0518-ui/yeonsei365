import type { Metadata } from 'next'
import SurgeryClient from './SurgeryClient'

export const metadata: Metadata = {
  title: '임신중절수술 절차·안전성 | 당일수술·수면마취 안내 | 연세365산부인과',
  description: '임신중절수술 절차가 궁금하신가요? 수술 전 준비부터 당일 절차, 수면마취 방법, 소요시간까지 단계별로 안내합니다. 임신중절수술 금액·비용·가격, 당일예약·당일수술 가능. 사당역 연세365산부인과.',
  keywords: ['임신중절수술 절차', '임신중절수술 안전성', '임신중절수술 당일', '수면마취 임신중절', '임신중절수술금액', '낙태비용', '사당역산부인과'],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/surgery' },
  openGraph: {
    title: '임신중절수술 절차·안전성 | 연세365산부인과',
    description: '임신중절수술 절차 단계별 안내. 수면마취·당일귀가·비밀보장.',
    url: 'https://www.yeonsei365.com/abortion/surgery',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 절차 안전성 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function SurgeryPage() {
  return <SurgeryClient />
}