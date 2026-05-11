import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { StatCard } from '@/components/molecules/StatCard'
import { HERO_STATS } from '@/data/navigation'

export function HeroSection() {
  return (
    <section
      aria-labelledby='hero-heading'
      className='relative overflow-hidden'
    >
      <div className='mx-auto grid min-h-[85vh] max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24'>
        <div className='flex flex-col gap-6'>
          <div className='flex gap-8'>
            {HERO_STATS.map((stat) => (
              <StatCard key={stat.value} stat={stat} size='sm' />
            ))}
          </div>

          <SectionHeading
            as='h1'
            size='display'
            id='hero-heading'
            className='font-black'
          >
            Hello
          </SectionHeading>

          <p className='text-foreground-muted text-base italic'>
            — hi it&apos;s D&apos;Nova a design veteran!
          </p>

          <a
            href='#about'
            className='text-foreground-muted hover:text-foreground focus-visible:ring-foreground mt-4 inline-flex w-fit items-center gap-1.5 rounded-sm text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
          >
            Scroll down
            <ChevronDown size={16} aria-hidden='true' />
          </a>
        </div>

        <div className='relative order-first md:order-last'>
          <div className='bg-surface relative aspect-[4/5] overflow-hidden rounded-3xl'>
            <Image
              src='https://picsum.photos/seed/portrait/480/600'
              alt="D'Nova — design veteran portrait"
              fill
              priority
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
