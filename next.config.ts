import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgcdn.stablediffusionweb.com",
      },
    ],
    domains: ["flagcdn.com"],
  },
};

export default nextConfig;
