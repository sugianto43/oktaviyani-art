import type { NextConfig } from 'next'

// Next.js App Router streams inline hydration scripts, so script-src needs
// 'unsafe-inline' without a nonce-based middleware setup.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

const SECURITY_HEADERS = [
  { key: 'Content-Security-Policy', value: CSP },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
]

// Studio needs to talk to Sanity's API/CDN/websocket hosts, which the
// site-wide CSP above (connect-src 'self') blocks.
const STUDIO_CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://cdn.sanity.io",
  "font-src 'self' data:",
  "connect-src 'self' https://*.api.sanity.io https://*.sanity.io wss://*.api.sanity.io",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

const STUDIO_SECURITY_HEADERS = [
  { key: 'Content-Security-Policy', value: STUDIO_CSP },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
]

const nextConfig: NextConfig = {
  // Sanity Studio (embedded at /studio) pulls in `swr`, whose react-server
  // export condition trips Next's RSC bundling. Run it via native require
  // instead of bundling through the Server Components graph.
  serverExternalPackages: ['sanity'],
  async headers() {
    return [
      {
        source: '/studio/:path*',
        headers: STUDIO_SECURITY_HEADERS,
      },
      {
        source: '/((?!studio).*)',
        headers: SECURITY_HEADERS,
      },
    ]
  },
  images: {
    remotePatterns: [
      // Placeholder images for development — remove before production
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    // placehold.co serves SVG; sandbox it via CSP since it's dev-only
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default nextConfig
