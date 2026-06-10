import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import '../index.css';
import PricePopup from '../components/PricePopup';
import FloatingChip from '../components/FloatingChip';
import FloatingBar from '../components/FloatingBar';
import Header from '../components/Header';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-inter',
});

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: '임신중절수술 금액 및 낙태 비용 가격 | 사당역 연세365산부인과',
  description:
    '임신중절수술 금액 및 비용, 낙태 비용 가격을 주수별로 투명하게 안내합니다. 인공임신중절수술 뜻·방법·절차를 산부인과 전문의가 직접 설명합니다. 8주 미만 45만원~. 당일예약·당일수술 가능. 비밀보장. 사당역 4번출구 연세365산부인과.',
  verification: {
    google: 'rqZ9BSKyrTCirBIR_X38TXF1br3haW9ggHjlX5ETZ6Y',
    other: {
      'naver-site-verification': '7dff92f95e9059821e2b9974c70a797935f4a37c',
    },
  },
  openGraph: {
    title: '임신중절수술 금액 및 낙태 비용 가격 | 사당역 연세365산부인과',
    description: '낙태 비용 가격 주수별 투명 공개. 8주 미만 45만원. 사당역 4번출구 연세365산부인과.',
    url: 'https://www.yeonsei365.com',
    images: [
      {
        url: 'https://www.yeonsei365.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '임신중절수술 금액 및 낙태 비용 가격 안내 | 8주 미만 45만원 투명 공개 | 연세365산부인과',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.yeonsei365.com/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${playfair.variable} ${inter.variable} ${pretendard.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["MedicalOrganization", "LocalBusiness"],
                  "@id": "https://www.yeonsei365.com/#organization",
                  "name": "연세365산부인과",
                  "alternateName": ["연세365", "사당역산부인과", "연세365산부인과의원"],
                  "url": "https://www.yeonsei365.com",
                  "logo": "https://i.imgur.com/f7h5DY0.png",
                  "image": "https://www.yeonsei365.com/og-image.jpg",
                  "description": "사당역 4번출구 연세365산부인과. 임신중절수술 금액 및 낙태 비용 가격 주수별 투명 안내. 인공임신중절수술 전문. 산부인과 전문의 직접 시행. 당일예약·당일수술 가능. 비밀보장.",
                  "telephone": "02-585-3650",
                  "priceRange": "₩₩",
                  "currenciesAccepted": "KRW",
                  "paymentAccepted": "현금, 신용카드",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "과천대로 939 3층",
                    "addressLocality": "관악구",
                    "addressRegion": "서울특별시",
                    "postalCode": "08807",
                    "addressCountry": "KR"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "37.4769",
                    "longitude": "126.9819"
                  },
                  "hasMap": "https://map.naver.com/v5/search/연세365산부인과",
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "09:00",
                      "closes": "19:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": "Saturday",
                      "opens": "09:00",
                      "closes": "15:00"
                    }
                  ],
                  "medicalSpecialty": [
                    "임신중절수술",
                    "인공임신중절",
                    "낙태 비용",
                    "산부인과",
                    "여성검진",
                    "난임클리닉",
                    "여성성형"
                  ],
                  "availableService": [
                    {
                      "@type": "MedicalProcedure",
                      "name": "임신중절수술",
                      "description": "임신 주수에 따른 안전한 임신중절수술. 8주 미만 45만원~. 당일수술 가능. 비밀보장.",
                      "procedureType": "https://schema.org/SurgicalProcedure"
                    },
                    {
                      "@type": "MedicalProcedure",
                      "name": "약물 임신중절",
                      "description": "임신 7주 이내 약물을 이용한 인공임신중절. 전문의 처방 및 관리.",
                      "procedureType": "https://schema.org/TherapeuticProcedure"
                    }
                  ],
                  "employee": {
                    "@type": "Physician",
                    "name": "이진우",
                    "jobTitle": "대표원장",
                    "description": "연세대학교 의과대학 졸업. 신촌세브란스병원 산부인과 전문의. 건국대학교 의학전문대학원 외래부교수.",
                    "medicalSpecialty": "산부인과"
                  },
                  "sameAs": [
                    "http://pf.kakao.com/_TpaBj",
                    "https://map.naver.com/v5/search/연세365산부인과"
                  ],
                  "areaServed": [
                    "서울 동작구", "서울 관악구", "서울 서초구",
                    "서울 강남구", "경기 과천시", "서울 신림동"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.yeonsei365.com/#website",
                  "url": "https://www.yeonsei365.com",
                  "name": "연세365산부인과",
                  "description": "임신중절수술 금액 및 낙태 비용 가격 안내 | 사당역 연세365산부인과",
                  "publisher": {
                    "@id": "https://www.yeonsei365.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://www.yeonsei365.com/?s={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "홈",
                      "item": "https://www.yeonsei365.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "임신중절클리닉",
                      "item": "https://www.yeonsei365.com/abortion"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "낙태 비용 가격",
                      "item": "https://www.yeonsei365.com/abortion/cost"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body>
      <Header /> 
        <PricePopup />
        {children}
        <FloatingBar />
        <FloatingChip />
      </body>
    </html>
  );
}