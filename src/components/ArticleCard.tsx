import Image from 'next/image';

interface ArticleCardProps {
  imageUrl: string;
  tag: string;
  title: string;
  author: string;
  date: string;
}

export default function ArticleCard({
  imageUrl,
  tag,
  title,
  author,
  date,
}: ArticleCardProps) {
  return (
    <article className="w-full lg:w-[calc(20.8%)] xl:w-[calc(20.8%)] h-64 sm:h-68 md:h-72 lg:h-96 xl:h-[28rem] 2xl:h-[28rem] relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover rounded-2xl shadow-lg w-full h-full cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-4 bg-black/30">
        <span className="text-white text-xs sm:text-sm md:text-base font-bold mb-2 bg-gray-400/50 px-2 py-1 rounded-full w-fit">
          {tag}
        </span>
        <h3 className="text-white text-sm sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2 leading-tight">
          {title}
        </h3>
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
  );
}
