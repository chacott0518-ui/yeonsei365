import type { Metadata } from 'next';
import ReviewClient from './ReviewClient';

export const metadata: Metadata = {
  title: '낙태수술후기 임신중절수술후기 부작용 | 연세365산부인과',
  description:
    '낙태후기, 낙태수술후기, 임신중절수술후기, 중절수술후기, 임신초기중절수술후기, 임신초기낙태후기, 임신초기중절수술부작용, 임신초기낙태부작용, 약물중절후기 안내.',
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/abortion/review',
  },
};

export default function ReviewPage() {
  return <ReviewClient />;
}
