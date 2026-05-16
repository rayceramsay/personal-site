'use client'

import Image from 'next/image'
import { useCallback, useRef } from 'react'
import { cn } from '@/lib/utils'
import type { ProjectMedia } from '@/types/portfolio'

interface ProjectMediaHeroProps {
  media: ProjectMedia[]
  projectTitle: string
  onActivate: () => void
  className?: string
}

export function ProjectMediaHero({
  media,
  projectTitle,
  onActivate,
  className,
}: ProjectMediaHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const playVideo = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    void video.play().catch(() => {
      /* ignore autoplay rejections */
    })
  }, [])

  const pauseVideo = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.currentTime = 0
    video.load()
  }, [])

  if (media.length === 0) return null

  const first = media[0]
  const extraCount = media.length - 1

  return (
    <button
      type='button'
      onClick={onActivate}
      onMouseEnter={first.type === 'video' ? playVideo : undefined}
      onMouseLeave={first.type === 'video' ? pauseVideo : undefined}
      onFocus={first.type === 'video' ? playVideo : undefined}
      onBlur={first.type === 'video' ? pauseVideo : undefined}
      aria-label={`View ${projectTitle} media gallery (${media.length} ${media.length === 1 ? 'item' : 'items'})`}
      className={cn(
        'group bg-surface focus-visible:ring-foreground relative block aspect-video w-full cursor-zoom-in overflow-hidden focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset',
        className,
      )}
    >
      {first.type === 'image' ? (
        <Image
          src={first.src}
          alt={first.alt}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
      ) : (
        <video
          ref={videoRef}
          src={first.src}
          poster={first.poster}
          aria-label={first.alt}
          muted
          loop
          playsInline
          preload='metadata'
          className='h-full w-full object-cover'
        />
      )}

      {extraCount > 0 && (
        <span
          aria-hidden='true'
          className='bg-foreground/80 text-background absolute right-2 bottom-2 rounded-full px-2 py-0.5 text-xs font-semibold backdrop-blur-sm'
        >
          +{extraCount}
        </span>
      )}
    </button>
  )
}
