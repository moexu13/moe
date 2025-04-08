import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import { getSortedPostsData } from "@/lib/markdown";

import { loversQuarrel, openSans } from "../fonts";

const Blog = async () => {
  const allPosts = await getSortedPostsData();
  const blogPosts = allPosts.slice(0, 5); // Limit to 5 posts

  // Get unique tags from all posts
  const uniqueTags = Array.from(new Set(allPosts.flatMap((post) => post.tags || [])));

  return (
    <>
      <header className="relative h-[40vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className={`${loversQuarrel.className} text-6xl md:text-8xl text-white mb-4`}>
            Blog
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto px-4">
            Thoughts, tutorials, and insights about web development
          </p>
        </div>
      </header>

      <main className="container mx-auto pl-0 pr-8 -mt-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side Menu */}
          <div className="lg:w-1/5 lg:-ml-16">
            <div className="sticky top-8 bg-[var(--color-primary)]/90 rounded-xl p-6">
              <h2 className={`${openSans.className} text-lg text-white mb-4`}>Archives</h2>
              <div className="space-y-4">
                {Array.from(
                  new Set(
                    allPosts.map((post) =>
                      new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        timeZone: "UTC",
                      }),
                    ),
                  ),
                )
                  .sort(
                    (a, b) =>
                      new Date(b + "T00:00:00").getTime() - new Date(a + "T00:00:00").getTime(),
                  )
                  .map((date) => {
                    const [month, year] = date.split(" ");
                    return (
                      <div key={date} className="space-y-2">
                        <Link
                          href={`/blog?date=${year}-${new Date(`${month} 1, ${year}`).getMonth() + 1}`}
                          className={`${openSans.className} text-white/80 hover:text-white transition-colors block`}
                        >
                          {date}
                        </Link>
                      </div>
                    );
                  })}
              </div>

              <h2 className={`${openSans.className} text-lg text-white mt-8 mb-4`}>Tags</h2>
              <div className="flex flex-wrap gap-2">
                {uniqueTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="bg-white/10 text-white/90 text-sm px-3 py-1 rounded-full hover:bg-white/20 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:w-4/5">
            <div className="flex flex-col items-center">
              {blogPosts.map((post) => (
                <div
                  key={post.slug}
                  className="w-full max-w-3xl rounded-xl p-6 mt-8 bg-[var(--color-primary)]/90 flex flex-col md:flex-row gap-6"
                >
                  <div className="md:w-1/3 flex-shrink-0 relative group flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-black/40 rounded-lg" />
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={200}
                      className="w-full h-[200px] rounded-lg object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className={`${openSans.className} text-sm text-white/60 mb-2`}>
                        {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          timeZone: "UTC",
                        })}
                      </div>
                      <h2 className={`${openSans.className} text-xl text-white mb-3`}>
                        {post.title}
                      </h2>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags?.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-white/10 text-white/90 text-sm px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className={`${openSans.className} text-white/80 mb-4 line-clamp-2`}>
                        {post.excerpt}
                      </p>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-fit"
                    >
                      Read More
                      <Image
                        src="/icons/arrow.svg"
                        alt="arrow"
                        width={24}
                        height={24}
                        className="filter invert"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
};

export default Blog;
