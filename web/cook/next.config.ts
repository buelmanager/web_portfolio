import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/projects/cook',
  assetPrefix: '/projects/cook',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
