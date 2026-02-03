import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/projects/zenith',
  assetPrefix: '/projects/zenith',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
