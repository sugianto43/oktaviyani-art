import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { siteName, siteUrl } from '@/lib/seo/site'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

const description = 'Portfolio of contemporary paintings by Oktaviyani.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: '%s — Oktaviyani',
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteName,
    description,
  },
}

const THEME_INIT_SCRIPT = `
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'light' || theme === 'dark') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  } catch (e) {}
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-fg)] font-sans">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        {children}
      </body>
    </html>
  )
}
