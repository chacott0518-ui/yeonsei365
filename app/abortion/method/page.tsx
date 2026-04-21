import type { Metadata } from 'next';
import MethodClient from './MethodClient';

export const metadata: Metadata = {
  title: '임신중절수술 방법·종류 | 낙태 비용 가격·흡입술·소파술 | 연세365산부인과',
  description:
    '임신중절수술 방법이 궁금하신가요? 흡입술, 소파술, 약물중절 방법을 주수별로 비교 안내합니다. 낙태 비용 가격·임신중절수술 금액·비용까지 한눈에 확인하세요. 사당역 연세365산부인과.',
  keywords: [
    '낙태방법', '낙태수술방법', '임신중절흡입술', '소파술',
    '흡입술', '약물중절방법', '임신중절수술방법', '중절수술방법',
    '임신초기중절방법', '임신중절수술금액', '임신중절수술비용',
    '낙태비용가격', '중절수술금액',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/method' },
  openGraph: {
    title: '임신중절수술 방법·종류 | 낙태 비용 가격·흡입술·소파술 | 연세365산부인과',
    description: '임신중절수술 방법 흡입술·소파술·약물중절 비교. 낙태 비용 가격 안내. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/method',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 방법 낙태 비용 가격 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 방법·종류 | 낙태 비용 가격·흡입술·소파술 | 연세365산부인과',
    description:
      '임신중절수술 방법이 궁금하신가요? 흡입술, 소파술, 약물중절 방법을 주수별로 비교 안내합니다. 낙태 비용 가격·임신중절수술 금액·비용까지 한눈에 확인하세요. 사당역 연세365산부인과.',
  },
};

export default function MethodPage() {
  return <MethodClient />;
}