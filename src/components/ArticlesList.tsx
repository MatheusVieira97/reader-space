import { Article } from '@/types/Article';
import ArticleCard from '@/components/ArticleCard';

interface ArticlesListProps {
  articles: Article[];
}

export default function ArticlesList({ articles }: ArticlesListProps) {
  return (
    <section
      className="flex flex-row flex-wrap gap-4 sm:gap-6 justify-center mt-4 lg:mx-50"
      aria-label="All Articles"
    >
      {articles.map((article, index) => (
        <ArticleCard
          key={article.id || index}
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
  );
}
