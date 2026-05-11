import Link from 'next/link'
import { Button } from '@/components/atoms/Button'

export function CTABanner() {
  return (
    <section
      aria-label='Free consultation promotional offer'
      className='px-6 py-4'
    >
      <div className='bg-surface-dark mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 rounded-2xl px-8 py-12 md:flex-row md:px-16 md:py-16'>
        <div className='flex max-w-lg flex-col gap-2 text-center md:text-left'>
          <p className='text-background/60 text-xs font-medium tracking-widest uppercase'>
            Book Your Free Consultation Now!
          </p>
          <p className='text-background text-2xl leading-snug font-bold md:text-3xl'>
            Exclusive Winter Deal Days Get a Free Consultation!
          </p>
        </div>
        <Button variant='pill' size='lg' asChild>
          <Link href='#contact'>Let&apos;s Call</Link>
        </Button>
      </div>
    </section>
  )
}
