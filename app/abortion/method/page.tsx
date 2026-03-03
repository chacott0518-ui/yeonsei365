import type { Metadata } from 'next';
import MethodClient from './MethodClient';

export const metadata: Metadata = {
  title: '낙태수술방법 임신중절흡입술 약물중절 | 연세365산부인과',
  description:
    '낙태방법, 낙태수술방법, 임신중절흡입술, 약물중절방법, 약물중절MTX, 임신초기중절수술약물 비교 안내. 주수별 최적 수술방법 상담.',
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/abortion/method',
  },
};

export default function MethodPage() {
  return <MethodClient />;
}
