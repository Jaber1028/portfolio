import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jacob Aberasturi | Full Stack Developer',
  description: 'Portfolio website of Jacob Aberasturi, a Computer Science student and Full Stack Developer specializing in web development, mobile applications, and infrastructure testing.',
  keywords: [
    'Jacob Aberasturi',
    'Full Stack Developer',
    'Computer Science',
    'Web Development',
    'Mobile Development',
    'Software Engineer',
    'Portfolio',
    'Northeastern University'
  ],
  authors: [{ name: 'Jacob Aberasturi' }],
  creator: 'Jacob Aberasturi',
  publisher: 'Jacob Aberasturi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jabercodes.com',
    title: 'Jacob Aberasturi | Full Stack Developer',
    description: 'Portfolio website of Jacob Aberasturi, a Computer Science student and Full Stack Developer.',
    siteName: 'Jacob Aberasturi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Aberasturi | Full Stack Developer',
    description: 'Portfolio website of Jacob Aberasturi, a Computer Science student and Full Stack Developer.',
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
  verification: {
    google: 'your-google-site-verification',
  },
}; 