import Image from "next/image";

interface TagCardProps {
  imageUrl: string;
  tagName: string;
}

export default function TagCard({ imageUrl, tagName }: TagCardProps) {
  return (
    <article className="w-[calc(50%-0.5rem)] min-[720px]:w-[calc(33.33%-0.67rem)] min-[1024px]:w-[calc(10%)] h-40 sm:h-46 md:h-52 lg:h-28 xl:h-28 2xl:h-32 relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
      <Image
        src={imageUrl}
        alt={tagName}
        fill
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
        <span className="text-white text-sm sm:text-base md:text-md lg:text-md xl:text-md 2xl:text-2xl font-bold">
          #{tagName}
        </span>
      </div>
    </article>
  );
}
