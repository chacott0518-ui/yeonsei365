import type { Metadata } from 'next';
import HospitalClient from './HospitalClient';

export const metadata: Metadata = {
  title: '임신중절수술 병원 | 낙태병원·낙태수술병원 서울 | 연세365산부인과',
  description:
    '임신중절수술 병원을 찾고 계신가요? 서울 낙태병원·낙태수술병원 중 사당역 연세365산부인과는 전문의 직접 시행, 당일수술 가능, 비밀보장입니다. 임신중절수술 금액·비용·가격도 투명하게 안내합니다. 사당역 4번출구.',
  keywords: [
    '임신중절수술병원', '낙태병원', '낙태수술병원', '서울낙태병원',
    '중절수술병원', '임신초기낙태병원', '낙태병원찾기',
    '낙태병원예약', '낙태병원후기', '사당역낙태병원',
    '임신중절수술금액', '임신중절수술비용', '낙태비용가격',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/hospital' },
  openGraph: {
    title: '임신중절수술 병원 | 낙태병원·낙태수술병원 서울 | 연세365산부인과',
    description: '서울 낙태병원·임신중절수술 병원. 전문의 직접 시행. 당일수술 가능. 비밀보장. 사당역.',
    url: 'https://www.yeonsei365.com/abortion/hospital',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 병원 낙태병원 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 병원 | 낙태병원·낙태수술병원 서울 | 연세365산부인과',
    description:
      '임신중절수술 병원을 찾고 계신가요? 서울 낙태병원·낙태수술병원 중 사당역 연세365산부인과는 전문의 직접 시행, 당일수술 가능, 비밀보장입니다. 임신중절수술 금액·비용·가격도 투명하게 안내합니다. 사당역 4번출구.',
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '연세365산부인과',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '서울 관악구 과천대로 939 3층',
    addressCountry: 'KR',
  },
  telephone: '02-585-3650',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.4875,
    longitude: 126.9814,
  },
};

export default function HospitalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <HospitalClient />
    </>
  );
}