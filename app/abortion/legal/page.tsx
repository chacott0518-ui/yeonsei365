import type { Metadata } from 'next';
import LegalClient from './LegalClient';

export const metadata: Metadata = {
  title: '낙태 합법화 안내 | 임신중절수술 합법 시기·기간·금액 | 연세365산부인과',
  description:
    '낙태 합법화가 궁금하신가요? 2021년 낙태죄 폐지 이후 임신중절수술 합법 시기와 기간을 정확히 안내합니다. 낙태 비용 가격·임신중절수술 금액·비용까지 한눈에 확인하세요. 사당역 연세365산부인과.',
  keywords: [
    '낙태합법화', '낙태시기', '낙태기간', '낙태법',
    '낙태수술합법', '낙태수술합법시기', '임신중절수술합법',
    '임신중절수술합법기간', '중절수술합법', '낙태죄폐지',
    '임신중절수술금액', '임신중절수술비용', '낙태비용가격',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/legal' },
  openGraph: {
    title: '낙태 합법화 안내 | 임신중절수술 합법 시기·기간·금액 | 연세365산부인과',
    description: '낙태 합법화, 낙태죄 폐지 후 임신중절 합법 기준·금액 안내. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/legal',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '낙태 합법화 임신중절수술 금액 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function LegalPage() {
  return <LegalClient />;
}