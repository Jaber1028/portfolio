import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "@/client/app/globals.css";
import ThemeToggle from "@/client/components/ThemeToggle";
import BackToTop from "@/client/components/BackToTop";
import ErrorBoundary from "@/client/components/ErrorBoundary";
import PageTransition from "@/client/components/PageTransition";
import { metadata as siteMetadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <PageTransition>
            {children}
          </PageTransition>
          <ThemeToggle />
          <BackToTop />
          <Analytics />
        </ErrorBoundary>
      </body>
    </html>
  );
}
