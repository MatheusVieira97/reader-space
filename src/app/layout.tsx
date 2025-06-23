import type { Metadata } from 'next';
import { EB_Garamond, Fira_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    'Discover and organize your reading journey with Reader Space. Your personal space for books, articles, and reading lists.',
  keywords:
    'reading, books, library, reading list, personal reading, book organization',
  authors: [{ name: 'Reader Space' }],
  creator: 'Reader Space',
  openGraph: {
    title: 'Reader Space - Your Personal Reading Journey',
    description:
      'Discover and organize your reading journey with Reader Space. Your personal space for books, articles, and reading lists.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reader Space - Your Personal Reading Journey',
    description:
      'Discover and organize your reading journey with Reader Space.',
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
  return (
    <html lang="pt-BR">
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
