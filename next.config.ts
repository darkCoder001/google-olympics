import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "flagcdn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgcdn.stablediffusionweb.com",
      },
    ],
  },
};

export default nextConfig;
