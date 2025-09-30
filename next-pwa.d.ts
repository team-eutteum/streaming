// types/next-pwa.d.ts
declare module 'next-pwa' {
  import type { NextConfig } from 'next';

  type PWAConfig = {
    dest?: string;
    disable?: boolean;
    register?: boolean;
    skipWaiting?: boolean;
  };

  // withPWA는 Next.js 설정을 감싸는 HOC 함수
  function withPWA(config?: PWAConfig): (nextConfig: NextConfig) => NextConfig;

  export = withPWA;
}
