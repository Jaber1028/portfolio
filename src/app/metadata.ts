import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Jacob Aberasturi',
  description: 'Software Engineer specializing in full-stack development, with expertise in React, TypeScript, and modern web technologies.',
  url: 'https://jacobaberasturi.com',
  ogImage: '/og-image.jpg',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jacobaberasturi.com',
    title: 'Jacob Aberasturi',
    description: 'Software Engineer specializing in full-stack development, with expertise in React, TypeScript, and modern web technologies.',
    siteName: 'Jacob Aberasturi',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jacob Aberasturi Portfolio',
      },
    ],
  },
};

export const metadata: Metadata = {
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
  metadataBase: new URL(siteConfig.url),
  openGraph: siteConfig.openGraph,
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
}; 