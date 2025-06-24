import ArticleCard from '@/components/ArticleCard';
import TagCard from '@/components/TagCard';
import { Article } from '@/types/Article';
import Link from 'next/link';

export default async function Home() {
  const response = await fetch(`${process.env.API_URL}/api/articles?limit=3`);
  const fetchedArticles = await response.json();
  const articles: Article[] = fetchedArticles.data;

  const tags = [
    {
      name: 'Classics',
      imageUrl:
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2940&auto=format&fit=crop',
    },
    {
      name: 'Fantasy',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Mystery',
      imageUrl:
        'https://images.unsplash.com/photo-1705769942043-5e109e0234b1?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Non-Fiction',
      imageUrl:
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2940&auto=format&fit=crop',
    },
    {
      name: 'Romance',
      imageUrl:
        'https://images.unsplash.com/photo-1550155891-1ab2d265d9c3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Sci-Fi',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <main className="mx-[7%] md:mx-[5%] lg:mx-[3%]">
      <section className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-center mt-8 font-fira-sans italic text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl px-4">
          Thoughts, stories and ideas by the Reader Space
        </h2>
        <p className="text-center mb-6  font-fira-sans text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl px-4 max-w-4xl">
          Reader Space is a minimal theme for your reading journey. A beautiful
          way to share stories with your growing audience.
        </p>
      </section>
      <section
        className="flex flex-row flex-wrap gap-4 justify-center"
        aria-label="Tags"
      >
        {tags.map(tag => (
          <TagCard key={tag.name} tagName={tag.name} imageUrl={tag.imageUrl} />
        ))}
      </section>

      <section
        className="flex flex-row flex-wrap gap-4 sm:gap-6 justify-center mt-4"
        aria-label="Recent Articles"
      >
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            tag={article.tag}
            title={article.title}
            author={article.author}
            date={article.published_at}
            imageUrl={article.image_url}
          />
        ))}
      </section>
      <div className="flex justify-center mt-8">
        <Link
          href="/articles"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white text-sm sm:text-base md:text-lg rounded-md hover:bg-gray-800 transition-colors cursor-pointer"
        >
          See all articles
        </Link>
      </div>
    </main>
  );
}
