import type { Metadata } from 'next';

// Get the deployment URL from environment or fallback to localhost in development
const SITE_URL = process.env.NEXT_PUBLIC_VERCEL_URL 
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const siteConfig = {
  name: 'Jacob Aberasturi',
  description: 'Software Engineer specializing in full-stack development, with expertise in React, TypeScript, and modern web technologies.',
  url: SITE_URL,
  ogImage: `${SITE_URL}/api/og`,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Jacob Aberasturi - Software Engineer',
    description: 'Software Engineer specializing in full-stack development, with expertise in React, TypeScript, and modern web technologies.',
    siteName: 'Jacob Aberasturi Portfolio',
    images: [
      {
        url: `${SITE_URL}/api/og`,
        width: 1200,
        height: 630,
        alt: 'Jacob Aberasturi - Software Engineer Portfolio',
        type: 'image/png',
      }
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'React',
    'TypeScript',
    'Next.js',
    'Web Development',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    ...siteConfig.openGraph,
    images: siteConfig.openGraph.images,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.openGraph.title,
    description: siteConfig.description,
    images: siteConfig.openGraph.images,
    creator: '@jabercodes',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}; 