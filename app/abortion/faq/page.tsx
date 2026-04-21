import type { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: '임신중절수술 FAQ | 낙태 비용 가격 자주 묻는 질문 70가지 | 연세365산부인과',
  description:
    '임신중절수술 비용·금액·가격, 수술 방법, 주수별 기간, 수술 전 준비, 수술 후 관리, 법적 기준까지 자주 묻는 질문 70가지를 전문의가 직접 답변합니다. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '임신중절수술FAQ', '낙태FAQ', '임신중절수술자주묻는질문',
    '임신중절수술금액', '임신중절수술비용', '낙태비용가격',
    '임신중절수술방법', '임신중절수술후관리', '낙태합법화',
    '임신중절수술병원', '사당역산부인과',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/faq' },
  openGraph: {
    title: '임신중절수술 FAQ | 낙태 비용 가격 자주 묻는 질문 70가지 | 연세365산부인과',
    description: '임신중절수술 비용·방법·후관리 자주 묻는 질문 70가지. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/faq',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 FAQ 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function FAQPage() {
  return <FAQClient />;
}