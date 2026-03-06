import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/Lectura-Web',
  assetPrefix: '/Lectura-Web'
};

export default nextConfig;
