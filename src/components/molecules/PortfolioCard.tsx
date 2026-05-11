import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { PortfolioCard as PortfolioCardType } from '@/types/portfolio'

interface PortfolioCardProps {
  card: PortfolioCardType
  className?: string
}

export function PortfolioCard({ card, className }: PortfolioCardProps) {
  return (
    <article
      className={cn(
        'group relative w-72 flex-shrink-0 md:w-auto md:flex-1',
        className,
      )}
    >
      <Link
        href={card.href}
        aria-label={`View project: ${card.title}`}
        className='focus-visible:ring-foreground block overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
      >
        <div className='bg-surface relative aspect-video overflow-hidden'>
          <Image
            src={card.imageUrl}
            alt={card.imageAlt}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
            sizes='(max-width: 768px) 288px, 33vw'
          />
          <div className='bg-foreground/10 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          <div className='bg-foreground text-background absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <ArrowUpRight size={18} aria-hidden='true' />
          </div>
        </div>
        <div className='pt-3 pb-1'>
          <p className='text-foreground-muted mb-1 text-xs'>{card.category}</p>
          <h3 className='text-foreground text-sm leading-snug font-semibold'>
            {card.title}
          </h3>
        </div>
      </Link>
    </article>
  )
}
