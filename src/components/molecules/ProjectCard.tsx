'use client'

import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/atoms/GithubIcon'
import { ProjectMediaHero } from '@/components/atoms/ProjectMediaHero'
import { Tag } from '@/components/atoms/Tag'
import { ProjectMediaLightbox } from '@/components/molecules/ProjectMediaLightbox'
import { useProjectMediaGallery } from '@/hooks/useProjectMediaGallery'
import { cn } from '@/lib/utils'
import type { ProjectItem } from '@/types/portfolio'

interface ProjectCardProps {
  project: ProjectItem
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const hasLinks = project.githubUrl || project.demoUrl
  const media = project.media ?? []
  const gallery = useProjectMediaGallery({ count: media.length })

  return (
    <article
      className={cn(
        'bg-background border-border shadow-card hover:shadow-card-hover flex flex-col overflow-hidden rounded-xl border transition-shadow duration-300',
        className,
      )}
    >
      <ProjectMediaHero
        media={media}
        projectTitle={project.title}
        onActivate={() => gallery.openAt(0)}
      />

      <div className='border-foreground bg-surface px-5 py-4'>
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
                <GithubIcon size={14} aria-hidden='true' />
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

      {media.length > 0 && (
        <ProjectMediaLightbox
          media={media}
          projectTitle={project.title}
          open={gallery.open}
          onOpenChange={gallery.setOpen}
          activeIndex={gallery.activeIndex}
          onSelect={gallery.openAt}
          onNext={gallery.next}
          onPrev={gallery.prev}
        />
      )}
    </article>
  )
}
