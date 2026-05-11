import { SectionLabel } from '@/components/atoms/SectionLabel'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { ProjectCard } from '@/components/molecules/ProjectCard'
import { PROJECT_ITEMS } from '@/data/projects'

export function ProjectsSection() {
  return (
    <section
      id='projects'
      aria-labelledby='projects-heading'
      className='bg-surface'
    >
      <div className='mx-auto max-w-6xl px-6 py-16 md:py-24'>
        <div className='mb-10 flex flex-col items-center gap-3 text-center'>
          <SectionLabel>Projects</SectionLabel>
          <SectionHeading as='h2' size='lg' id='projects-heading'>
            Things I&apos;ve Built
          </SectionHeading>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {PROJECT_ITEMS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
