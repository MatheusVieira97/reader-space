import { Article, ArticlesPageProps, PaginationInfo } from '@/types/Article';
import { Suspense } from 'react';
import ArticlesPageWrapper from './components/ArticlesPageWrapper';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'All Articles - Reader Space',
  description:
    'Explore our complete collection of articles, book reviews, and literary insights. Discover new authors, genres, and reading recommendations from our community of passionate readers.',
  keywords:
    'articles, book reviews, literature, reading recommendations, book blog, literary content, reading community',
};

export default async function ArticlesPage({
  searchParams,
}: ArticlesPageProps) {
  const params = await searchParams;
  const page: number = parseInt(params.page || '1');
  const limit: number = parseInt(params.limit || '8');
  const tag: string | undefined = params.tag;

  const apiUrl: URL = new URL(`${process.env.API_URL}/api/articles`);
  apiUrl.searchParams.set('page', page.toString());
  apiUrl.searchParams.set('limit', limit.toString());
  if (tag) {
    const normalizedTag: string = tag.toLowerCase().replace(/[\s-]/g, '');
    apiUrl.searchParams.set('tag', normalizedTag);
  }

  const response: Response = await fetch(apiUrl.toString());
  const fetchedData: {
    data: Article[];
    page?: number;
    totalItems?: number;
    totalPages?: number;
  } = await response.json();
  const articles: Article[] = fetchedData.data;

  const pagination: PaginationInfo = {
    page: fetchedData.page || 1,
    limit: limit,
    totalArticles: fetchedData.totalItems || 0,
    totalPages: fetchedData.totalPages || 1,
    hasMore: (fetchedData.page || 1) < (fetchedData.totalPages || 1),
  };

  const searchParamsKey: string = JSON.stringify({ page, limit, tag });

  return (
    <main className="mx-[7%] md:mx-[5%] lg:mx-[3%]">
      <section className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-center mt-8 font-fira-sans italic text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl px-4">
          {tag ? `Articles tagged with "${tag}"` : 'All Articles'}
        </h1>
        <p className="text-center mb-6 font-fira-sans text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl px-4 max-w-4xl">
          {tag
            ? `Explore articles tagged with "${tag}" and discover amazing stories.`
            : 'Explore all our articles and discover amazing stories from our community.'}
        </p>
        {!tag && (
          <div className="text-center mb-8 max-w-3xl mx-auto px-4">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Dive into our extensive collection of literary content, from
              in-depth book reviews and author interviews to reading guides and
              literary analysis. Our articles are written by passionate readers
              and literary enthusiasts who share their insights,
              recommendations, and discoveries to enrich your reading journey.
            </p>
          </div>
        )}
      </section>

      <Suspense fallback={<div>Loading articles...</div>}>
        <ArticlesPageWrapper
          key={searchParamsKey}
          initialArticles={articles}
          initialPagination={pagination}
        />
      </Suspense>

      {articles.length === 0 && (
        <div className="text-center mt-8">
          <p className="text-gray-600 font-fira-sans text-lg">
            {tag ? `No articles found for tag "${tag}".` : 'No articles found.'}
          </p>
        </div>
      )}
    </main>
  );
}
