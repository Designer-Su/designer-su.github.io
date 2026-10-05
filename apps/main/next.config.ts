import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/graphic",
        destination: "http://localhost:3001/graphic",
      },
      {
        source: "/graphic/:path*",
        destination: "http://localhost:3001/graphic/:path*",
      },
    ];
  },
};

export default nextConfig;
