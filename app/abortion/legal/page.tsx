import type { Metadata } from 'next';
import LegalClient from './LegalClient';

export const metadata: Metadata = {
  title: '낙태합법화 낙태시기 합법기간 | 연세365산부인과',
  description:
    '낙태합법화, 낙태시기, 낙태기간, 낙태법, 낙태수술합법, 낙태수술합법시기, 임신중절수술합법, 임신중절수술합법기간, 중절수술합법, 임신초기낙태시기, 임신초기낙태불법 상세 안내.',
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/abortion/legal',
  },
};

export default function LegalPage() {
  return <LegalClient />;
}
