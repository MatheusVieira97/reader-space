import ArticleCard from '@/components/ArticleCard';
import TagCard from '@/components/TagCard';
import { Article } from '@/types/Article';
import Link from 'next/link';
import { JSX } from 'react';

interface ApiResponse {
  data: Article[];
}

interface Tag {
  name: string;
  imageUrl: string;
}

export default async function Home(): Promise<JSX.Element> {
  const response: Response = await fetch(
    `${process.env.API_URL}/api/articles?limit=3`
  );
  const fetchedArticles: ApiResponse = await response.json();
  const articles: Article[] = fetchedArticles.data;
  console.log('main page articles', articles);

  const tags: Tag[] = [
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

      <section className="max-w-4xl mx-auto mb-12 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <article className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Discover Your Next Great Read
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Explore our carefully curated collection of articles, book
              reviews, and literary insights. From timeless classics to
              contemporary masterpieces, we bring you the best in literature
              across all genres. Our community of passionate readers and writers
              share their thoughts, recommendations, and discoveries to help you
              find your next favorite book.
            </p>
          </article>
          <article className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Join Our Reading Community
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Connect with fellow book lovers who share your passion for
              reading. Share your thoughts, discover new authors, and engage in
              meaningful discussions about literature. Whether you are a casual
              reader or a literary enthusiast, there is a place for you in our
              growing community of bibliophiles.
            </p>
          </article>
        </div>
      </section>

      <section
        className="flex flex-row flex-wrap gap-4 justify-center"
        aria-label="Reading Categories"
      >
        {tags?.map((tag, index) => (
          <TagCard
            key={tag.name}
            tagName={tag.name}
            imageUrl={tag.imageUrl}
            priority={index < 3}
          />
        ))}
      </section>

      <section
        className="flex flex-row flex-wrap gap-4 sm:gap-6 justify-center mt-4"
        aria-label="Recent Articles"
      >
        {articles?.map((article, index) => (
          <ArticleCard
            key={`${article.id}-${index}`}
            id={article.id}
            tag={article.tag}
            title={article.title}
            author={article.author}
            date={article.published_at}
            imageUrl={article.image_url}
            content={article.content}
            priority={index === 0}
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

      <section className="max-w-4xl mx-auto mt-12 px-4">
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Why Choose Reader Space?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Curated Content
              </h3>
              <p className="text-sm text-gray-600">
                Handpicked articles and reviews from passionate readers and
                literary experts
              </p>
            </article>
            <article className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Community Driven
              </h3>
              <p className="text-sm text-gray-600">
                Connect with fellow readers and share your literary discoveries
              </p>
            </article>
            <article className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fast & Responsive
              </h3>
              <p className="text-sm text-gray-600">
                Enjoy a seamless reading experience across all your devices
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
