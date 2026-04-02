import type { Metadata } from 'next';
import '../index.css';
import PricePopup from '../components/PricePopup';

export const metadata: Metadata = {
  title: '연세365산부인과 | 임신중절수술·낙태비용 안내',
  description:
    '연세365산부인과 - 안전한 임신중절수술, 합리적인 낙태비용, 투명한 중절수술가격 안내. 사당역 4번출구 산부인과 전문의 직접 시행. 낙태수술비용 상담, 당일수술 및 퇴원, 1:1 비밀상담. 관악구·신림동·과천·강남 임신중절수술.',
  verification: {
    google: 'iVUs-rUXvdFnYyvVaAhuHAdliuBoujmjyq3tyLV23Hc',
    other: {
      'naver-site-verification': '7dff92f95e9059821e2b9974c70a797935f4a37c',
    },
  },
  openGraph: {
    title: '연세365산부인과 | 임신중절수술·낙태비용 안내',
    description:
      '안전한 임신중절수술, 합리적인 낙태비용, 투명한 중절수술가격 안내. 사당역 4번출구.',
      url: 'https://www.yeonsei365.com',
    siteName: '연세365산부인과',
    images: [
      {
        url: 'https://www.yeonsei365.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '연세365산부인과 임신중절수술 안내',
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
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <PricePopup />
      {children}
      </body>
    </html>
  );
}
