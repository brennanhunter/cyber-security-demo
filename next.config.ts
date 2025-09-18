import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Generate a static not-found page at build time
  trailingSlash: false,
  
  // Configure external image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  
  // Security headers
  async headers() {
    return [
      {
        // Apply to all routes that don't exist (will be handled by not-found.tsx)
        source: '/:path*',
        headers: [
          {
            key: 'X-SCP-Status',
            value: 'classified-access',
          },
          {
            key: 'X-Content-Type-Options', 
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-SCP-Response-Type',
            value: 'hidden-endpoint',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
