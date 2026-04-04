/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
      { protocol: 'https', hostname: 'i.imgur.com' },
    ],
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'yeonsei365.vercel.app' }],
        destination: 'https://www.yeonsei365.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;