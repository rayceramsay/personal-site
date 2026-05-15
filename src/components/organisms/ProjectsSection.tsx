import { SectionLabel } from '@/components/atoms/SectionLabel'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { ProjectCard } from '@/components/molecules/ProjectCard'
import { RevealOnScroll } from '@/components/atoms/RevealOnScroll'
import { PROJECT_ITEMS } from '@/data/projects'

export function ProjectsSection() {
  return (
    <section
      id='projects'
      aria-labelledby='projects-heading'
      className='bg-surface'
    >
      <div className='mx-auto max-w-6xl px-6 py-16 md:py-24'>
        <RevealOnScroll className='mb-10 flex flex-col items-center gap-3 text-center'>
          <SectionLabel>Projects</SectionLabel>
          <SectionHeading as='h2' size='lg' id='projects-heading'>
            Things I&apos;ve Built
          </SectionHeading>
        </RevealOnScroll>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {PROJECT_ITEMS.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 50}>
              <ProjectCard project={project} className='h-full' />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
