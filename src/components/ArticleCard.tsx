import Image from 'next/image';
import Link from 'next/link';
import { generateSlugWithId } from '@/utils/slug';

interface ArticleCardProps {
  id: number;
  imageUrl: string;
  tag: string;
  title: string;
  author: string;
  date: string;
  content: string;
  priority?: boolean;
}

export default function ArticleCard({
  id,
  imageUrl,
  tag,
  title,
  author,
  date,
  content,
  priority = false,
}: ArticleCardProps) {
  const slug = generateSlugWithId(title, id);

  const truncatedContent =
    content?.length > 240 ? `${content.substring(0, 240)}...` : content;

  return (
    <Link
      href={`/articles/${slug}`}
      className="w-full lg:w-[calc(20.8%)] xl:w-[calc(20.8%)] h-64 sm:h-68 md:h-72 lg:h-96 xl:h-[28rem] 2xl:h-[28rem] relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
    >
      <article className="w-full h-full relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 1023px) 100vw, 20.8vw"
          className="object-cover rounded-2xl shadow-lg w-full h-full cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
          loading={priority ? 'eager' : 'lazy'}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-4 bg-black/30">
          <span className="text-white text-xs sm:text-sm md:text-base font-bold mb-2 bg-gray-400/50 px-2 py-1 rounded-full w-fit">
            {tag}
          </span>
          <h3 className="text-white text-sm sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-white text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm mb-2 leading-tight line-clamp-3 opacity-90">
            {truncatedContent}
          </p>
          <div className="text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md font-bold">
            <span>by {author}</span>
            <span> • </span>
            <span>
              {new Date(date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
