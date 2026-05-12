import { SectionLabel } from '@/components/atoms/SectionLabel'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { Tag } from '@/components/atoms/Tag'
import { RevealOnScroll } from '@/components/atoms/RevealOnScroll'
import { SKILL_CATEGORIES } from '@/data/skills'

export function SkillsSection() {
  return (
    <section
      id='skills'
      aria-labelledby='skills-heading'
      className='mx-auto max-w-6xl px-6 py-16 md:py-24'
    >
      <RevealOnScroll className='mb-10 flex flex-col items-center gap-3 text-center'>
        <SectionLabel>Skills</SectionLabel>
        <SectionHeading as='h2' size='lg' id='skills-heading'>
          My Tech Stack
        </SectionHeading>
      </RevealOnScroll>

      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {SKILL_CATEGORIES.map((cat, i) => (
          <RevealOnScroll key={cat.id} delay={i * 75}>
            <div
              className='bg-surface h-full rounded-xl p-5'
              aria-label={cat.category}
            >
              <p className='text-foreground mb-3 text-sm font-semibold'>
                {cat.category}
              </p>
              <div className='flex flex-wrap gap-1.5'>
                {cat.skills.map((skill) => (
                  <Tag key={skill} label={skill} />
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
