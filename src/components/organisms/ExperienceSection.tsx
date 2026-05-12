import { SectionLabel } from '@/components/atoms/SectionLabel'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { Button } from '@/components/atoms/Button'
import { ExperienceItem } from '@/components/molecules/ExperienceItem'
import { RevealOnScroll } from '@/components/atoms/RevealOnScroll'
import { EXPERIENCE_ITEMS } from '@/data/experience'
import { GITHUB_URL } from '@/data/links'

export function ExperienceSection() {
  return (
    <section
      id='experience'
      aria-labelledby='experience-heading'
      className='mx-auto max-w-6xl px-6 py-16 md:py-24'
    >
      <div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-5'>
        <RevealOnScroll className='flex flex-col gap-5 lg:sticky lg:top-24 lg:col-span-2'>
          <SectionLabel>Experience</SectionLabel>
          <SectionHeading as='h2' size='lg' id='experience-heading'>
            Work Experience
          </SectionHeading>
          <p className='text-foreground-muted text-sm leading-relaxed'>
            I&apos;ve worked across enterprise HR platforms and national
            research infrastructure, shipping production code, automating
            deployments, and maintaining high test coverage under real
            engineering constraints.
          </p>
          <Button variant='outline' size='md' asChild>
            <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
              View GitHub
            </a>
          </Button>
        </RevealOnScroll>

        <RevealOnScroll delay={150} className='lg:col-span-3'>
          <ol aria-label='Work experience timeline'>
            {EXPERIENCE_ITEMS.map((item, i) => (
              <ExperienceItem
                key={item.id}
                item={item}
                isLast={i === EXPERIENCE_ITEMS.length - 1}
              />
            ))}
          </ol>
        </RevealOnScroll>
      </div>
    </section>
  )
}
