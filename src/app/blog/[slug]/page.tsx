import Image from "next/image";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import { getPostData, getSortedPostsData } from "@/lib/markdown";

export const generateStaticParams = async () => {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  try {
    const { slug } = await params;
    const post = await getPostData(slug);

    if (!post) {
      notFound();
    }

    return (
      <>
        <header className="relative h-[40vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-4xl text-white mb-4">{post.title}</h1>
            <div className="text-sm text-white/60">
              {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 -mt-8">
          <article className="max-w-4xl mx-auto">
            <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white/10 text-white/90 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </main>
        <div className="mt-16">
          <Footer />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error rendering blog post:", error);
    notFound();
  }
};

export default BlogPost;
