import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    APP_ENV: process.env.APP_ENV,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
