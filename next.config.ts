import type { NextConfig } from "next";

const nextConfig: NextConfig = { // Required for Firebase
  trailingSlash: false, 
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  
};

export default nextConfig;
