import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import "./globals.css";

import { Manropes } from "./fonts";
import keywords from "./keywords";

export const metadata: Metadata = {
  title: 'PremKumar',
  description:
    "I'm a student developer who loves building web apps for fun. I enjoy experimenting with technologies to create free, useful tools that everyone can enjoy.",
  authors: [
    {
      name: 'Premkumar',
      url: 'https://portfolio-ni1e0elzy-premkumar740s-projects.vercel.app',
    },
  ],
  creator: 'Premkumar',
  referrer: 'origin-when-cross-origin',
  keywords: keywords,
  openGraph: {
    title: 'PremKumar',
    description:
      "I'm a student developer who loves building web apps for fun. I enjoy experimenting with technologies to create free, useful tools that everyone can enjoy.",
    images: [{ url: '/images/thumbnail.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premkumar',
    description:
      "I'm a student developer who loves building web apps for fun. I enjoy experimenting with technologies to create free, useful tools that everyone can enjoy.",
    images: [{ url: '/images/thumbnail.png' }],
    creator: '@Premkumar',
  },
  alternates: {
    canonical: '/',
  },
  icons: '/images/logo.svg',
  metadataBase: new URL('https://portfolio-ni1e0elzy-premkumar740s-projects.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Manropes.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
