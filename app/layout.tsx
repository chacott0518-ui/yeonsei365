import type { Metadata } from 'next';
import '../index.css';
import PricePopup from '../components/PricePopup';
import FloatingChip from '../components/FloatingChip';
import FloatingBar from '../components/FloatingBar';

export const metadata: Metadata = {
  title: '임신중절수술 금액·비용 | 낙태 비용 가격 안내 | 연세365산부인과',
  description:
  '연세365산부인과 - 산부인과 전문의의 안전한 임신중절수술, 합리적인 낙태 비용, 투명한 중절 수술 가격 및 실제 후기 안내. 임신주수 계산기 서비스 제공. 사당역 4번출구 위치. 낙태 수술 비용 상담, 당일 수술 및 퇴원, 1:1 비밀 상담 가능. 관악구·신림동·과천·강남 임신중절수술 및 낙태 비용 가격 주수별 상세 안내.',
    verification: {
      google: 'rqZ9BSKyrTCirBIR_X38TXF1br3haW9ggHjlX5ETZ6Y',
      other: {
        'naver-site-verification': '7dff92f95e9059821e2b9974c70a797935f4a37c',
      },
    },
    openGraph: {
      title: '임신중절수술 금액·비용 | 낙태 비용 가격 안내 | 연세365산부인과',
      description: '낙태 비용 가격 주수별 투명 공개. 8주 미만 45만원. 사당역 4번출구.',
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
        <FloatingBar />
        <FloatingChip />
      </body>
    </html>
  );
}
