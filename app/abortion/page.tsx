import type { Metadata } from 'next';
import AbortionClient from './AbortionClient';

export const metadata: Metadata = {
  title: '임신중절수술 금액·비용·가격 | 낙태 비용 가격 주수별 안내 | 연세365산부인과',
  description:
    '임신중절수술 금액과 비용이 궁금하신가요? 낙태 비용 가격, 중절수술 금액을 주수별로 투명하게 공개합니다. 8주 미만 45만원~. 임신초기낙태 비용까지 한눈에 확인하세요. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '임신중절수술', '임신중절수술이란', '임신중절수술금액', '임신중절수술비용',
    '임신중절수술가격', '임신중절금액', '임신중절비용', '임신중절가격',
    '중절수술금액', '중절수술비용', '낙태비용', '낙태비용가격',
    '낙태금액', '인공임신중절', '사당역산부인과', '관악구산부인과',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion' },
  openGraph: {
    title: '임신중절수술 금액·비용·가격 | 낙태 비용 주수별 안내 | 연세365산부인과',
    description: '임신중절수술 금액·비용·가격 주수별 투명 공개. 낙태 비용 가격 8주 미만 45만원~. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 금액 비용 가격 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 금액·비용·가격 | 낙태 비용 가격 주수별 안내 | 연세365산부인과',
    description:
      '임신중절수술 금액과 비용이 궁금하신가요? 낙태 비용 가격, 중절수술 금액을 주수별로 투명하게 공개합니다. 8주 미만 45만원~. 임신초기낙태 비용까지 한눈에 확인하세요. 사당역 4번출구 연세365산부인과.',
  },
};

export default function AbortionPage() {
  return <AbortionClient />;
}