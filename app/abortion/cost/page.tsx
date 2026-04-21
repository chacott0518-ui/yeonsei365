import type { Metadata } from 'next';
import CostClient from './CostClient';

export const metadata: Metadata = {
  title: '임신중절수술 금액·비용·가격 | 낙태 비용 가격 주수별 안내 | 연세365산부인과',
  description:
    '임신중절수술 금액·비용·가격이 궁금하신가요? 낙태 비용 가격, 중절수술 금액·비용을 주수별로 투명하게 공개합니다. 8주 미만 45만원~. 임신초기낙태 비용까지 한눈에 확인하세요. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '임신중절수술금액', '임신중절수술비용', '임신중절수술가격',
    '임신중절금액', '임신중절비용', '임신중절가격',
    '중절수술금액', '중절수술비용', '중절수술가격',
    '낙태비용', '낙태비용가격', '낙태금액', '낙태가격',
    '임신초기낙태비용', '약물중절비용', '8주낙태비용',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/cost' },
  openGraph: {
    title: '임신중절수술 금액·비용·가격 | 낙태 비용 가격 주수별 안내 | 연세365산부인과',
    description: '임신중절수술 금액·비용·가격 주수별 투명 공개. 낙태 비용 가격 8주 미만 45만원~. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/cost',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 금액 비용 가격 주수별 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function CostPage() {
  return <CostClient />;
}