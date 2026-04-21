import type { Metadata } from 'next';
import InfoClient from './InfoClient';

export const metadata: Metadata = {
  title: '임신중절수술 보호자·보험 안내 | 낙태 비용 가격 보험적용 | 연세365산부인과',
  description:
    '임신중절수술 보호자 동반이 필요한지 궁금하신가요? 성인은 혼자 가능하며 미성년자는 법정대리인 동의가 필요합니다. 낙태 비용 가격 보험 적용 여부, 임신중절수술 금액·비용도 함께 안내합니다. 사당역 연세365산부인과.',
  keywords: [
    '임신중절수술보호자', '중절수술보호자', '낙태보호자',
    '임신초기낙태보호자', '중절수술보험', '낙태비용보험',
    '낙태보험적용', '임신중절수술혼자', '낙태혼자가능',
    '임신중절수술금액', '임신중절수술비용', '낙태비용가격',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/info' },
  openGraph: {
    title: '임신중절수술 보호자·보험 안내 | 낙태 비용 가격 보험적용 | 연세365산부인과',
    description: '임신중절수술 보호자 여부, 낙태 비용 가격 보험 적용 안내. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/info',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 보호자 보험 안내 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 보호자·보험 안내 | 낙태 비용 가격 보험적용 | 연세365산부인과',
    description:
      '임신중절수술 보호자 동반이 필요한지 궁금하신가요? 성인은 혼자 가능하며 미성년자는 법정대리인 동의가 필요합니다. 낙태 비용 가격 보험 적용 여부, 임신중절수술 금액·비용도 함께 안내합니다. 사당역 연세365산부인과.',
  },
};

export default function InfoPage() {
  return <InfoClient />;
}