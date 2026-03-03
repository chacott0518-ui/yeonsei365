import type { Metadata } from 'next';
import RecoveryClient from './RecoveryClient';

export const metadata: Metadata = {
  title: '낙태수술후회복 중절수술후관리 | 연세365산부인과',
  description:
    '낙태수술회복기간, 낙태수술후회복, 낙태수술후음식, 낙태수술후출혈, 낙태수술통증, 중절수술후관리, 중절수술후생리, 중절수술후음식, 중절수술후음주, 중절수술후출혈, 낙태후유증 안내.',
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/abortion/recovery',
  },
};

export default function RecoveryPage() {
  return <RecoveryClient />;
}
