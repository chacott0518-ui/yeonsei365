import type { Metadata } from 'next';
import CostClient from './CostClient';

export const metadata: Metadata = {
  title: '낙태비용 가격 금액 얼마 | 연세365산부인과',
  description:
    '낙태비용 얼마인지, 낙태금액, 낙태가격, 임신주수별 낙태비용가격, 중절수술비용, 임신중절수술금액, 임신초기낙태비용, 약물중절비용 투명하게 안내. 8주미만 45만원부터.',
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/abortion/cost',
  },
};

export default function CostPage() {
  return <CostClient />;
}
