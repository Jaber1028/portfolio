import { Metadata } from 'next';
import HomePage from '@/client/app/page';
import { siteConfig } from './metadata';

export const metadata: Metadata = {
  ...siteConfig,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    ...siteConfig.openGraph,
    url: '/',
  },
};

// Generate structured data at build time
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jacob Aberasturi',
  jobTitle: 'Software Engineer',
  url: 'https://jacobaberasturi.com',
  image: '/profile.jpeg',
  sameAs: [
    'https://github.com/Jaber1028',
    'https://linkedin.com/in/jabercodes',
  ],
  description: 'Software Engineer specializing in full-stack development, with expertise in React, TypeScript, and modern web technologies.',
  knowsAbout: [
    'Web Development',
    'React',
    'TypeScript',
    'Node.js',
    'Mobile Development',
    'Swift',
    'Python',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePage />
    </>
  );
} 