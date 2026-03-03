import type { Metadata } from 'next';
import AbortionClient from './AbortionClient';

export const metadata: Metadata = {
  title: '임신중절수술 낙태뜻 합법 안내 | 연세365산부인과',
  description:
    '임신중절수술 뜻, 낙태합법화, 낙태법, 임신초기낙태 안내. 사당역 4번출구 산부인과 전문의 직접 시행.',
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/abortion',
  },
};

export default function AbortionPage() {
  return <AbortionClient />;
}
