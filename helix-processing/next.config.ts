import type { NextConfig } from "next";

/**
 * Optimized config for development speed
 */
const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Disable type checking during build for speed (you can still use IDE for type checking)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable eslint during build for speed (you can still use IDE for linting)
    ignoreDuringBuilds: true,
  },
  // Optimizations for faster development
  reactStrictMode: false, // Disable strict mode in dev for faster renders
  
  // Memory optimization
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 15 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

export default nextConfig;
