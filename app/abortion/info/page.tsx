import type { Metadata } from 'next';
import InfoClient from './InfoClient';

export const metadata: Metadata = {
  title: '중절수술보호자 낙태비용보험 안내 | 연세365산부인과',
  description:
    '중절수술보호자 동반 여부, 임신초기낙태보호자, 중절수술보험, 낙태비용보험 적용 여부 상세 안내.',
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/abortion/info',
  },
};

export default function InfoPage() {
  return <InfoClient />;
}
