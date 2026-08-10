import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Placeholder images for development — remove before production
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    // placehold.co serves SVG; sandbox it via CSP since it's dev-only
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default nextConfig
