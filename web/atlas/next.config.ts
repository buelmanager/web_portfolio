import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/projects/atlas',
  assetPrefix: '/projects/atlas',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
