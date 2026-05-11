import { SectionLabel } from "@/components/atoms/SectionLabel";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { BlogCard } from "@/components/molecules/BlogCard";
import { BLOG_POSTS } from "@/data/blog";

export function BlogSection() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="max-w-6xl mx-auto px-6 py-16 md:py-24"
    >
      <div className="flex flex-col items-center text-center gap-3 mb-10">
        <SectionLabel>Blogs</SectionLabel>
        <SectionHeading as="h2" size="lg" id="blog-heading">
          Design Insights &amp; Trends
        </SectionHeading>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
