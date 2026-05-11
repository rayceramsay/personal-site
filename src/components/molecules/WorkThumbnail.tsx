import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { WorkItem } from '@/types/portfolio'

interface WorkThumbnailProps {
  work: WorkItem
  className?: string
}

export function WorkThumbnail({ work, className }: WorkThumbnailProps) {
  return (
    <article className={cn('group', className)}>
      <Link
        href={work.href}
        aria-label={`View work: ${work.title}`}
        className='focus-visible:ring-foreground block overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
      >
        <div className='bg-surface relative aspect-square overflow-hidden'>
          <Image
            src={work.imageUrl}
            alt={work.imageAlt}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          />
          <div className='bg-foreground/10 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          <div className='bg-foreground text-background absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <ArrowUpRight size={18} aria-hidden='true' />
          </div>
        </div>
        <p className='text-foreground mt-3 text-sm font-medium'>{work.title}</p>
      </Link>
    </article>
  )
}
