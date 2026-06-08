/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
      { protocol: 'https', hostname: 'i.imgur.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // ipgyn 도메인 3개 → yeonsei365.com 301 리다이렉트
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'ipgyn.com' }],
        destination: 'https://www.yeonsei365.com',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ipgyn.com' }],
        destination: 'https://www.yeonsei365.com',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'ipgyn.co.kr' }],
        destination: 'https://www.yeonsei365.com',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ipgyn.co.kr' }],
        destination: 'https://www.yeonsei365.com',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'ipgyn.net' }],
        destination: 'https://www.yeonsei365.com',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ipgyn.net' }],
        destination: 'https://www.yeonsei365.com',
        permanent: true,
      },
      // 기존 리다이렉트
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'yeonsei365.vercel.app' }],
        destination: 'https://www.yeonsei365.com/:path*',
        permanent: true,
      },
      { source: '/01_intro/:path*', destination: '/', permanent: true },
      { source: '/01_intro', destination: '/', permanent: true },
      { source: '/02_vaginoplasty/:path*', destination: '/', permanent: true },
      { source: '/02_vaginoplasty', destination: '/', permanent: true },
      { source: '/03_incontinence/:path*', destination: '/', permanent: true },
      { source: '/03_incontinence', destination: '/', permanent: true },
      { source: '/03_abortion/:path*', destination: '/abortion', permanent: true },
      { source: '/03_abortion', destination: '/abortion', permanent: true },
      { source: '/04_illness/:path*', destination: '/', permanent: true },
      { source: '/04_illness', destination: '/', permanent: true },
      { source: '/04_skin/:path*', destination: '/', permanent: true },
      { source: '/04_skin', destination: '/', permanent: true },
      { source: '/05_customer/:path*', destination: '/', permanent: true },
      { source: '/05_customer', destination: '/', permanent: true },
      { source: '/05_examination/:path*', destination: '/', permanent: true },
      { source: '/05_examination', destination: '/', permanent: true },
      { source: '/06_contraception/:path*', destination: '/abortion/method', permanent: true },
      { source: '/06_contraception', destination: '/abortion/method', permanent: true },
      { source: '/06_segingplasty/:path*', destination: '/', permanent: true },
      { source: '/06_segingplasty', destination: '/', permanent: true },
      { source: '/07_skin/:path*', destination: '/', permanent: true },
      { source: '/07_skin', destination: '/', permanent: true },
      { source: '/08_customer/:path*', destination: '/', permanent: true },
      { source: '/08_customer', destination: '/', permanent: true },
      { source: '/09_community/:path*', destination: '/', permanent: true },
      { source: '/09_community', destination: '/', permanent: true },
      { source: '/member/:path*', destination: '/', permanent: true },
      { source: '/member', destination: '/', permanent: true },
    ]
  },
}
module.exports = nextConfig