import Image from 'next/image';
import Link from 'next/link';

interface TagCardProps {
  imageUrl: string;
  tagName: string;
  priority?: boolean;
}

export default function TagCard({
  imageUrl,
  tagName,
  priority = false,
}: TagCardProps) {
  return (
    <Link
      href={`/articles?tag=${encodeURIComponent(tagName)}`}
      className="w-[calc(50%-0.5rem)] min-[720px]:w-[calc(33.33%-0.67rem)] min-[1024px]:w-[calc(10%)] h-40 sm:h-46 md:h-52 lg:h-28 xl:h-28 2xl:h-32 relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
    >
      <article>
        <Image
          src={imageUrl}
          alt={tagName}
          fill
          priority={priority}
          sizes="(max-width: 719px) 50vw, (max-width: 1023px) 33.33vw, 10vw"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          loading={priority ? 'eager' : 'lazy'}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
          <span className="text-white text-sm sm:text-base md:text-md lg:text-md xl:text-md 2xl:text-2xl font-bold">
            #{tagName}
          </span>
        </div>
      </article>
    </Link>
  );
}
