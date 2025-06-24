import { MetadataRoute } from 'next';
import { Article } from '@/types/Article';
import { generateSlugWithId } from '@/utils/slug';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://readerspace.com';

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  let articlePages: MetadataRoute.Sitemap = [];

  try {
    const response = await fetch(
      `${process.env.API_URL}/api/articles?limit=100`
    );
    if (response.ok) {
      const data = await response.json();
      const articles: Article[] = data.data || [];

      articlePages = articles.map(article => ({
        url: `${baseUrl}/articles/${generateSlugWithId(article.title, article.id)}`,
        lastModified: new Date(
          article.published_at || article.updated_at || Date.now()
        ),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error);
  }

  return [...staticPages, ...articlePages];
}
