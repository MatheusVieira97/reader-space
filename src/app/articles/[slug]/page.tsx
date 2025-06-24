import { Article } from '@/types/Article';
import { generateSlugWithId } from '@/utils/slug';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  const idMatch = slug.match(/-(\d+)$/);
  if (!idMatch) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  const id = parseInt(idMatch[1]);

  try {
    const response = await fetch(`${process.env.API_URL}/api/articles/${id}`);

    if (!response.ok) {
      return {
        title: 'Article Not Found',
        description: 'The requested article could not be found.',
      };
    }

    const responseData = await response.json();
    const article: Article = responseData.data;

    const expectedSlug = generateSlugWithId(article.title, article.id);
    if (slug !== expectedSlug) {
      return {
        title: 'Article Not Found',
        description: 'The requested article could not be found.',
      };
    }

    return {
      title: article.title,
      description: article.content.substring(0, 160) + '...',
      openGraph: {
        title: article.title,
        description: article.content.substring(0, 160) + '...',
        images: [article.image_url],
        type: 'article',
        publishedTime: article.published_at,
        authors: [article.author],
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.content.substring(0, 160) + '...',
        images: [article.image_url],
      },
    };
  } catch {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const idMatch = slug.match(/-(\d+)$/);
  if (!idMatch) {
    notFound();
  }

  const id = parseInt(idMatch[1]);

  try {
    const response = await fetch(`${process.env.API_URL}/api/articles/${id}`);

    if (!response.ok) {
      notFound();
    }

    const responseData = await response.json();
    const article: Article = responseData.data;

    const expectedSlug = generateSlugWithId(article.title, article.id);
    if (slug !== expectedSlug) {
      notFound();
    }

    return (
      <main className="mx-[7%] md:mx-[5%] lg:mx-[3%]">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 mt-4 leading-tight">
            {article.title}
          </h1>
          <div className="relative w-full h-64 md:h-80 lg:h-96 mb-4 rounded-2xl overflow-hidden mt-6">
            <Image
              src={article.image_url}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm md:text-base">
              <div className="flex items-center mb-2 sm:mb-0">
                <span className="font-medium">
                  <b>By {article.author}</b>
                </span>
              </div>
              <div className="flex items-center">
                <time dateTime={article.published_at} className="font-medium">
                  <b>
                    {new Date(article.published_at).toLocaleDateString(
                      'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </b>
                </time>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </main>
    );
  } catch (error) {
    console.error('Error fetching article:', error);
    notFound();
  }
}
