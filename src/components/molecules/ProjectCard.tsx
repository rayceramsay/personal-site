import { GitBranch, ExternalLink } from 'lucide-react'
import { Tag } from '@/components/atoms/Tag'
import { cn } from '@/lib/utils'
import type { ProjectItem } from '@/types/portfolio'

interface ProjectCardProps {
  project: ProjectItem
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const hasLinks = project.githubUrl || project.demoUrl

  return (
    <article
      className={cn(
        'bg-background border-border shadow-card hover:shadow-card-hover flex flex-col overflow-hidden rounded-xl border transition-shadow duration-300',
        className,
      )}
    >
      <div className='border-foreground bg-surface border-t-2 px-5 py-4'>
        <h3 className='text-foreground text-base leading-tight font-bold'>
          {project.title}
        </h3>
        <p className='text-foreground-muted mt-0.5 text-xs font-medium'>
          {project.subtitle}
        </p>
      </div>

      <div className='flex flex-1 flex-col gap-4 p-5'>
        <p className='text-foreground-muted text-sm leading-relaxed'>
          {project.description}
        </p>

        <div className='flex flex-wrap gap-1.5'>
          {project.techStack.map((tech) => (
            <Tag key={tech} label={tech} />
          ))}
        </div>

        {hasLinks && (
          <div className='mt-auto flex gap-3 pt-2'>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`View ${project.title} source code on GitHub`}
                className='text-foreground-muted hover:text-foreground focus-visible:ring-foreground inline-flex items-center gap-1.5 rounded-sm text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                <GitBranch size={14} aria-hidden='true' />
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`View ${project.title} ${project.demoLabel ?? 'demo'}`}
                className='text-foreground-muted hover:text-foreground focus-visible:ring-foreground inline-flex items-center gap-1.5 rounded-sm text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                <ExternalLink size={14} aria-hidden='true' />
                {project.demoLabel ?? 'Demo'}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
