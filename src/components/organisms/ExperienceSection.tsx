import Link from 'next/link'
import { SectionLabel } from '@/components/atoms/SectionLabel'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { Button } from '@/components/atoms/Button'
import { ExperienceItem } from '@/components/molecules/ExperienceItem'
import { EXPERIENCE_ITEMS } from '@/data/experience'

export function ExperienceSection() {
  return (
    <section
      id='services'
      aria-labelledby='experience-heading'
      className='mx-auto max-w-6xl px-6 py-16 md:py-24'
    >
      <div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-2'>
        <div className='flex flex-col gap-5 lg:sticky lg:top-24'>
          <SectionLabel>Experiences</SectionLabel>
          <SectionHeading as='h2' size='lg' id='experience-heading'>
            Explore My Design Journey
          </SectionHeading>
          <p className='text-foreground-muted text-sm leading-relaxed'>
            Over the past 4+ years, I&apos;ve had the opportunity to work on a
            wide range of design projects, collaborating with diverse teams and
            clients to bring creative visions to life.
          </p>
          <Button variant='outline' size='md' asChild>
            <Link href='#contact'>Book A Call</Link>
          </Button>
        </div>

        <div>
          <ol aria-label='Work experience timeline'>
            {EXPERIENCE_ITEMS.map((item, i) => (
              <ExperienceItem
                key={item.id}
                item={item}
                isLast={i === EXPERIENCE_ITEMS.length - 1}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
