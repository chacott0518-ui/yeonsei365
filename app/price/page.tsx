import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: '낙태 비용 가격 총정리 | 임신중절수술 금액·비용 주수별 | 연세365산부인과',
  description: '낙태 비용 가격이 궁금하신가요? 임신중절수술 금액·비용·가격을 주수별로 투명하게 안내합니다. 8주 미만 45만원~. 사당역 4번출구 연세365산부인과.',
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/cost' },
  openGraph: {
    title: '낙태 비용 가격 총정리 | 임신중절수술 금액·비용 주수별 | 연세365산부인과',
    description: '낙태 비용 가격 주수별 총정리. 임신중절수술 금액·비용 8주 미만 45만원~. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/cost',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '낙태 비용 가격 임신중절수술 금액 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function PricePage() {
  redirect('/abortion/cost')
}