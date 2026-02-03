import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/projects/vertex',
  assetPrefix: '/projects/vertex',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
