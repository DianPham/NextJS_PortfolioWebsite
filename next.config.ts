import type { NextConfig } from "next";

const nextConfig: NextConfig = { // Required for Firebase
  trailingSlash: false, 
  images: {
    domains: ["lekimoanh.com"],
  },
  
};

export default nextConfig;
