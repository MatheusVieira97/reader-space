'use client';

import { useState } from 'react';
import { Article, PaginationInfo } from '@/types/Article';
import ArticleCard from '@/components/ArticleCard';

interface ArticlesPageWrapperProps {
  initialArticles: Article[];
  initialPagination: PaginationInfo;
}

export default function ArticlesPageWrapper({
  initialArticles,
  initialPagination,
}: ArticlesPageWrapperProps) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [pagination, setPagination] =
    useState<PaginationInfo>(initialPagination);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreArticles = async () => {
    if (isLoading || !pagination.hasMore) return;

    setIsLoading(true);
    try {
      const nextPage = pagination.page + 1;
      const response = await fetch(
        `/api/articles?page=${nextPage}&limit=${pagination.limit}`
      );
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        setArticles(prev => [...prev, ...data.data]);

        const newPagination: PaginationInfo = {
          page: data.page || nextPage,
          limit: pagination.limit,
          totalArticles: data.totalItems || pagination.totalArticles,
          totalPages: data.totalPages || pagination.totalPages,
          hasMore:
            (data.page || nextPage) <
            (data.totalPages || pagination.totalPages),
        };
        setPagination(newPagination);
      }
    } catch (error) {
      console.error('Error loading more articles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section
        className="flex flex-row flex-wrap gap-4 sm:gap-6 justify-center mt-4 lg:mx-[6%]"
        aria-label="All Articles"
      >
        {articles.map((article, index) => (
          <ArticleCard
            key={`${article.id}-${index}`}
            id={article.id}
            tag={article.tag}
            title={article.title}
            author={article.author}
            date={article.published_at}
            imageUrl={article.image_url}
            content={article.content}
          />
        ))}
      </section>

      {pagination.hasMore && (
        <div className="flex justify-center mt-8 mb-8">
          <button
            onClick={loadMoreArticles}
            disabled={isLoading}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white text-sm sm:text-base md:text-lg rounded-md hover:bg-gray-800 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-fira-sans"
          >
            {isLoading ? 'Loading...' : 'See more posts'}
          </button>
        </div>
      )}
    </>
  );
}
