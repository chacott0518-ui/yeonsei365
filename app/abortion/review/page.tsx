import type { Metadata } from 'next';
import ReviewClient from './ReviewClient';

export const metadata: Metadata = {
  title: '임신중절수술 후기 | 낙태 비용 가격·부작용·사례 안내 | 연세365산부인과',
  description:
    '임신중절수술 후기가 궁금하신가요? 낙태수술 후기, 중절수술 후기, 임신초기낙태 후기를 솔직하게 안내합니다. 임신중절수술 금액·비용·가격과 부작용 사례까지 한눈에 확인하세요. 사당역 연세365산부인과.',
  keywords: [
    '낙태후기', '낙태수술후기', '임신중절수술후기', '중절수술후기',
    '임신초기중절수술후기', '임신초기낙태후기', '낙태부작용',
    '임신중절수술부작용', '약물중절후기',
    '임신중절수술금액', '임신중절수술비용', '낙태비용가격',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/review' },
  openGraph: {
    title: '임신중절수술 후기 | 낙태 비용 가격·부작용·사례 안내 | 연세365산부인과',
    description: '임신중절수술 후기, 낙태수술 부작용 사례 안내. 임신중절수술 금액·비용. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/review',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 후기 낙태 비용 가격 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 후기 | 낙태 비용 가격·부작용·사례 안내 | 연세365산부인과',
    description:
      '임신중절수술 후기가 궁금하신가요? 낙태수술 후기, 중절수술 후기, 임신초기낙태 후기를 솔직하게 안내합니다. 임신중절수술 금액·비용·가격과 부작용 사례까지 한눈에 확인하세요. 사당역 연세365산부인과.',
  },
};

export default function ReviewPage() {
  return <ReviewClient />;
}