import Link from 'next/link'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { Button } from '@/components/atoms/Button'

export function FinalCTASection() {
  return (
    <section
      id='contact'
      aria-labelledby='final-cta-heading'
      className='mx-auto max-w-6xl px-6 py-16 md:py-24'
    >
      <div className='flex flex-col items-center gap-6 text-center'>
        <SectionHeading
          as='h2'
          size='lg'
          id='final-cta-heading'
          className='max-w-lg'
        >
          Got a Vision? Let&apos;s Bring It to Life!
        </SectionHeading>
        <p className='text-foreground-muted max-w-md text-sm leading-relaxed'>
          I&apos;ve always wanted to collaborate on new and innovative projects.
          Whether you&apos;re starting from scratch or refining an existing
          plan, I&apos;m here to help you build something extraordinary.
        </p>
        <Button variant='primary' size='lg' asChild>
          <Link href='mailto:hello@dnova.com'>Book A Call</Link>
        </Button>
      </div>
    </section>
  )
}
