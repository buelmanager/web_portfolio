import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/projects/aurora',
  assetPrefix: '/projects/aurora',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
