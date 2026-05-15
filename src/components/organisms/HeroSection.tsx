'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { Button } from '@/components/atoms/Button'
import { StatCard } from '@/components/molecules/StatCard'
import { HERO_STATS } from '@/data/navigation'
import { RESUME_URL } from '@/data/links'
import { smoothScrollToHash } from '@/lib/smoothScrollToHash'

export function HeroSection() {
  return (
    <section
      aria-labelledby='hero-heading'
      className='relative overflow-hidden'
    >
      <div className='mx-auto grid min-h-[calc(100dvh-var(--header-height))] max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:mb-24 md:grid-cols-2 md:py-0'>
        <div className='flex flex-col gap-6'>
          <div
            className='animate-fade-in-up flex gap-8'
            style={{ animationDelay: '0ms' }}
          >
            {HERO_STATS.map((stat) => (
              <StatCard key={stat.value} stat={stat} size='sm' />
            ))}
          </div>

          <SectionHeading
            as='h1'
            size='display'
            id='hero-heading'
            className='animate-fade-in-up font-black'
            style={{ animationDelay: '100ms' }}
          >
            Hello,
          </SectionHeading>

          <p
            className='animate-fade-in-up text-foreground-muted text-base italic'
            style={{ animationDelay: '200ms' }}
          >
            — I&apos;m Rayce, a full stack software engineer.
          </p>

          <div
            className='animate-fade-in-up mt-2 flex flex-wrap gap-3'
            style={{ animationDelay: '300ms' }}
          >
            <Button variant='primary' size='md' asChild>
              <a href={RESUME_URL} target='_blank' rel='noopener noreferrer'>
                View Resume
              </a>
            </Button>
            <Button variant='outline' size='md' asChild>
              <Link
                href='#contact'
                onClick={(e) => smoothScrollToHash(e, '#contact')}
              >
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>

        <div
          className='animate-fade-in-up relative order-first md:order-last'
          style={{ animationDelay: '150ms' }}
        >
          <div className='bg-surface relative aspect-4/5 overflow-hidden rounded-3xl'>
            <Image
              src='/images/rayce_professional_headshot.png'
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
