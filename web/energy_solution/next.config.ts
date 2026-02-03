import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/projects/energy_solution',
  assetPrefix: '/projects/energy_solution',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
