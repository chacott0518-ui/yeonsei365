import type { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: 'https://www.yeonsei365.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '연세365산부인과의원 임신중절수술 비용 안내',
      },
    ],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}