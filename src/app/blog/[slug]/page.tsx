import Image from "next/image";
import Footer from "@/components/Footer";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import { getPostData, getSortedPostsData } from "@/lib/markdown";

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <>
      <header className="relative h-[40vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl md:text-4xl text-white mb-4">{post.title}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto px-4">{post.excerpt}</p>
        </div>
      </header>

      <main className="container mx-auto pl-0 pr-8 -mt-8 max-w-6xl">
        <BlogBreadcrumb title={post.title} slug={post.slug} />

        <article className="prose prose-invert max-w-none">
          <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority
            />
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-white/10 text-white/90 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            className="prose-headings:text-white prose-p:text-white/80 prose-a:text-white/80 prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
}
