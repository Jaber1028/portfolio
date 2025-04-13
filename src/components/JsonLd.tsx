'use client';

import { useEffect } from 'react';

type JsonLdType = {
  '@context': string;
  '@type': string;
  name?: string;
  description?: string;
  url?: string;
  image?: string;
  sameAs?: string[];
  jobTitle?: string;
  knowsAbout?: string[];
  [key: string]: unknown;
};

interface JsonLdProps {
  data: JsonLdType;
}

export default function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
} 