import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    APP_ENV: process.env.APP_ENV,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    if (options.dev) {
      Object.defineProperty(config, 'devtool', {
        get() {
          return 'source-map';
        },
        set() {},
      });
    }

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/chart/:path*',
        destination: `${process.env.NEXT_PUBLIC_CHART_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
