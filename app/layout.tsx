/**
 * Root Layout
 *
 * This is the main layout that wraps your entire application.
 * Think of it like a base template in Flask/Django that all pages inherit from.
 *
 * What it does:
 * - Sets up HTML structure
 * - Loads fonts
 * - Adds meta tags for SEO
 * - Wraps app in ThemeProvider for dark mode
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-context'
import { seoMetadata } from '@/lib/data/personal'

// Load Inter font from Google Fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(seoMetadata.siteUrl),
  title: seoMetadata.title,
  description: seoMetadata.description,
  keywords: seoMetadata.keywords,
  authors: [{ name: seoMetadata.author }],
  openGraph: {
    title: seoMetadata.title,
    description: seoMetadata.description,
    url: seoMetadata.siteUrl,
    siteName: seoMetadata.title,
    images: [
      {
        url: seoMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: seoMetadata.author,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoMetadata.title,
    description: seoMetadata.description,
    images: [seoMetadata.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
