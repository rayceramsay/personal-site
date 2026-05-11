import { SectionLabel } from '@/components/atoms/SectionLabel'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { BlogCard } from '@/components/molecules/BlogCard'
import { BLOG_POSTS } from '@/data/blog'

export function BlogSection() {
  return (
    <section
      id='blog'
      aria-labelledby='blog-heading'
      className='mx-auto max-w-6xl px-6 py-16 md:py-24'
    >
      <div className='mb-10 flex flex-col items-center gap-3 text-center'>
        <SectionLabel>Blogs</SectionLabel>
        <SectionHeading as='h2' size='lg' id='blog-heading'>
          Design Insights &amp; Trends
        </SectionHeading>
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
