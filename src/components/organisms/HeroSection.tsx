import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { Button } from '@/components/atoms/Button'
import { StatCard } from '@/components/molecules/StatCard'
import { HERO_STATS } from '@/data/navigation'
import { RESUME_URL } from '@/data/links'

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
            Hello,
          </SectionHeading>

          <p className='text-foreground-muted text-base italic'>
            — I&apos;m Rayce, a full stack software engineer.
          </p>

          <div className='mt-2 flex flex-wrap gap-3'>
            <Button variant='primary' size='md' asChild>
              <a href={RESUME_URL} target='_blank' rel='noopener noreferrer'>
                View Resume
              </a>
            </Button>
            <Button variant='outline' size='md' asChild>
              <Link href='#contact'>Get in Touch</Link>
            </Button>
          </div>
        </div>

        <div className='relative order-first md:order-last'>
          <div className='bg-surface relative aspect-[4/5] overflow-hidden rounded-3xl'>
            <Image
              src='/rayce_headshot.png'
              alt='Rayce Ramsay — full stack software engineer'
              fill
              priority
              className='object-cover object-top'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
