import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/atoms/Badge'
import { cn } from '@/lib/utils'
import type { BlogPost } from '@/types/portfolio'

interface BlogCardProps {
  post: BlogPost
  className?: string
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        'group bg-background border-border shadow-card hover:shadow-card-hover flex flex-col overflow-hidden rounded-xl border transition-shadow duration-300',
        className,
      )}
    >
      <Link
        href={post.href}
        aria-label={`Read article: ${post.title}`}
        className='focus-visible:ring-foreground flex h-full flex-col rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
      >
        <div className='bg-surface relative aspect-video flex-shrink-0 overflow-hidden'>
          <Image
            src={post.imageUrl}
            alt={post.imageAlt}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          />
        </div>
        <div className='flex flex-1 flex-col gap-2 p-4'>
          <div className='flex items-center gap-2'>
            <Badge variant='category'>{post.category}</Badge>
            <span className='text-foreground-muted text-xs'>
              {post.readTimeMinutes} min read
            </span>
          </div>
          <h3 className='text-foreground group-hover:text-foreground/80 text-sm leading-snug font-semibold transition-colors'>
            {post.title}
          </h3>
        </div>
      </Link>
    </article>
  )
}
