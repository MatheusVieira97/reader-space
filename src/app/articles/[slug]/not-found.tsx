import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-[7%] md:mx-[5%] lg:mx-[3%]">
      <div className="max-w-2xl mx-auto text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Article Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the article youre looking for doesnt exist or may have been
          moved.
        </p>
        <Link
          href="/articles"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Articles
        </Link>
      </div>
    </main>
  );
}
