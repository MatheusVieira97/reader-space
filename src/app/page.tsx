import ArticleCard from "@/components/ArticleCard";
import TagCard from "@/components/TagCard";

export default function Home() {
  const articles = [
    {
      tag: "Health",
      title: "The perfect place that helps you get work done in peace",
      author: "Sora Blogging Tips",
      date: "February 25, 2023",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1665329006421-4e945f91885f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      tag: "Health",
      title: "Being unique is better than being perfect",
      author: "Sora Blogging Tips",
      date: "March 17, 2017",
      imageUrl:
        "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?q=80&w=2835&auto=format&fit=crop",
    },
    {
      tag: "Lifestyle",
      title: "I always loved aesthetics",
      author: "Sora Blogging Tips",
      date: "March 18, 2017",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1663056025073-a9c4344f8e75?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const tags = [
    {
      name: "Health",
      imageUrl:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Food",
      imageUrl:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Breakfast",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1672363353897-ae5a81a1ab57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Snacks",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1687014520257-3b09f6668092?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Lifestyle",
      imageUrl:
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Chocolate",
      imageUrl:
        "https://images.unsplash.com/photo-1610450949065-1f2841536c88?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <main className="mx-[7%] md:mx-[5%] lg:mx-[3%]">
      <section className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-center mt-8 font-fira-sans text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl px-4">
          Thoughts, stories and ideas by the Reader Space
        </h2>
        <p className="text-center my-6  font-fira-sans text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl px-4 max-w-4xl">
          Reader Space is a minimal theme for your reading journey. A beautiful
          way to share stories with your growing audience.
        </p>
      </section>
      <section
        className="flex flex-row flex-wrap gap-4 justify-center"
        aria-label="Tags"
      >
        {tags.map((tag) => (
          <TagCard key={tag.name} tagName={tag.name} imageUrl={tag.imageUrl} />
        ))}
      </section>

      {/* <h3 className="text-center m-6 font-eb-garamond text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl px-4">Recent Posts</h3> */}
      
      <section className="flex flex-row flex-wrap gap-4 sm:gap-6 justify-center mt-4" aria-label="Recent Articles">
        {articles.map((article, index) => (
            <ArticleCard
              key={index}
              tag={article.tag}
              title={article.title}
              author={article.author}
              date={article.date}
              imageUrl={article.imageUrl}
            />
        ))}
      </section>
      <div className="flex justify-center mt-8">
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white text-sm sm:text-base md:text-lg rounded-md hover:bg-gray-800 transition-colors cursor-pointer">
          See all articles
        </button>
      </div>
    </main>
  );
}
