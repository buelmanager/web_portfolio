import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/projects/onyx',
  assetPrefix: '/projects/onyx',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
