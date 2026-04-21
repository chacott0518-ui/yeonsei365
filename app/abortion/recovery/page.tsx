import type { Metadata } from 'next';
import RecoveryClient from './RecoveryClient';

export const metadata: Metadata = {
  title: '임신중절수술 후 관리 | 낙태 비용 가격·회복기간·주의사항 | 연세365산부인과',
  description:
    '임신중절수술 후 관리가 궁금하신가요? 낙태 수술 회복기간, 수술 후 음식·음주·출혈·생리 재개 시기를 안내합니다. 임신중절수술 금액·비용·가격도 함께 확인하세요. 사당역 연세365산부인과.',
  keywords: [
    '낙태수술후관리', '낙태수술회복기간', '낙태수술후출혈',
    '낙태수술후음식', '낙태수술후음주', '낙태후유증',
    '중절수술후관리', '중절수술후생리', '임신중절수술후관리',
    '임신중절수술금액', '임신중절수술비용', '낙태비용가격',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/recovery' },
  openGraph: {
    title: '임신중절수술 후 관리 | 낙태 비용 가격·회복기간·주의사항 | 연세365산부인과',
    description: '낙태 수술 후 회복기간, 주의사항, 생리 재개 시기 안내. 임신중절수술 금액·비용. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/recovery',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 후 관리 낙태 비용 가격 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 후 관리 | 낙태 비용 가격·회복기간·주의사항 | 연세365산부인과',
    description:
      '임신중절수술 후 관리가 궁금하신가요? 낙태 수술 회복기간, 수술 후 음식·음주·출혈·생리 재개 시기를 안내합니다. 임신중절수술 금액·비용·가격도 함께 확인하세요. 사당역 연세365산부인과.',
  },
};

export default function RecoveryPage() {
  return <RecoveryClient />;
}