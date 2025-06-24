import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://readerspace.com';

  return {
    name: 'Reader Space - Your Personal Reading Journey',
    short_name: 'Reader Space',
    description:
      'Discover and organize your reading journey with Reader Space. Your personal space for books, articles, and reading lists.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.ico',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['books', 'education', 'lifestyle'],
    lang: 'pt-BR',
    scope: '/',
  };
}
