import type { Metadata } from 'next';
import { EB_Garamond, Fira_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
  weight: ['400', '600'],
});

const firaSans = Fira_Sans({
  variable: '--font-fira-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Reader Space - Your Personal Reading Journey',
  description:
    'Discover and organize your reading journey with Reader Space. Your personal space for books, articles, and reading lists. Join our community of passionate readers and explore curated content.',
  keywords:
    'reading, books, library, reading list, personal reading, book organization, literature, book reviews, reading community, digital library',
  authors: [{ name: 'Reader Space' }],
  creator: 'Reader Space',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Reader Space - Your Personal Reading Journey',
    description:
      'Discover and organize your reading journey with Reader Space. Your personal space for books, articles, and reading lists. Join our community of passionate readers and explore curated content.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reader Space - Your Personal Reading Journey',
    description:
      'Discover and organize your reading journey with Reader Space. Your personal space for books, articles, and reading lists.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Reader Space',
    description:
      'Discover and organize your reading journey with Reader Space. Your personal space for books, articles, and reading lists. Join our community of passionate readers and explore curated content.',
    url: 'https://readerspace.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://readerspace.com/articles?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Reader Space',
      logo: {
        '@type': 'ImageObject',
        url: 'https://readerspace.com/favicon.ico',
      },
    },
  };

  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${ebGaramond.variable} ${firaSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
