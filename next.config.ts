import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.15.5'],
  images: {
    qualities: [50, 75, 80, 85, 90, 100],
  },
};

export default nextConfig;
