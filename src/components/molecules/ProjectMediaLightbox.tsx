'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/atoms/Dialog'
import { useSwipe } from '@/hooks/useSwipe'
import { cn } from '@/lib/utils'
import type { ProjectMedia } from '@/types/portfolio'

interface ProjectMediaLightboxProps {
  media: ProjectMedia[]
  projectTitle: string
  open: boolean
  onOpenChange: (open: boolean) => void
  activeIndex: number
  onSelect: (index: number) => void
  onNext: () => void
  onPrev: () => void
}

export function ProjectMediaLightbox({
  media,
  projectTitle,
  open,
  onOpenChange,
  activeIndex,
  onSelect,
  onNext,
  onPrev,
}: ProjectMediaLightboxProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const swipeHandlers = useSwipe({
    onSwipeLeft: onNext,
    onSwipeRight: onPrev,
  })

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return
      if (index === activeIndex) {
        void video.play().catch(() => {})
      } else {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [activeIndex, open])

  if (media.length === 0) return null

  const hasMultiple = media.length > 1

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby={undefined}
        className='flex h-[85vh] w-[90vw] max-w-5xl flex-col gap-4 p-4 sm:p-6'
      >
        <div className='flex items-center justify-between gap-4 pr-10'>
          <DialogTitle className='text-foreground text-base font-semibold sm:text-lg'>
            {projectTitle}
          </DialogTitle>
          {hasMultiple && (
            <span
              className='text-foreground-muted text-xs font-medium tabular-nums'
              aria-live='polite'
            >
              {activeIndex + 1} / {media.length}
            </span>
          )}
        </div>
        <DialogDescription className='sr-only'>
          Media gallery for {projectTitle}. Use arrow keys to navigate, Escape
          to close.
        </DialogDescription>

        <div
          className='bg-surface relative flex flex-1 items-center justify-center overflow-hidden rounded-xl'
          onTouchStart={hasMultiple ? swipeHandlers.onTouchStart : undefined}
          onTouchEnd={hasMultiple ? swipeHandlers.onTouchEnd : undefined}
        >
          {media.map((item, index) => {
            const isActive = index === activeIndex
            return (
              <div
                key={index}
                aria-hidden={!isActive}
                className={cn(
                  'absolute inset-0 flex items-center justify-center',
                  isActive ? 'opacity-100' : 'pointer-events-none opacity-0',
                )}
              >
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    placeholder='blur'
                    sizes='90vw'
                    className='object-contain'
                  />
                ) : (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el
                    }}
                    src={item.src}
                    aria-label={item.alt}
                    poster={`/_next/image?url=${encodeURIComponent(item.poster.src)}&w=1080&q=75`}
                    controls
                    muted={item.muted}
                    playsInline
                    preload='metadata'
                    className='h-full w-full object-contain focus:outline-none'
                  />
                )}
              </div>
            )
          })}

          {hasMultiple && (
            <>
              <button
                type='button'
                onClick={onPrev}
                aria-label='Previous media'
                className='bg-background/80 text-foreground hover:bg-background focus-visible:ring-foreground shadow-card absolute top-1/2 left-3 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:outline-none'
              >
                <ChevronLeft size={20} aria-hidden='true' />
              </button>
              <button
                type='button'
                onClick={onNext}
                aria-label='Next media'
                className='bg-background/80 text-foreground hover:bg-background focus-visible:ring-foreground shadow-card absolute top-1/2 right-3 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:outline-none'
              >
                <ChevronRight size={20} aria-hidden='true' />
              </button>
            </>
          )}
        </div>

        {hasMultiple && (
          <div
            role='tablist'
            aria-label={`${projectTitle} media thumbnails`}
            className='flex gap-2 overflow-x-auto p-1'
          >
            {media.map((item, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={index}
                  type='button'
                  role='tab'
                  aria-selected={isActive}
                  aria-label={`View ${item.alt}`}
                  onClick={() => onSelect(index)}
                  className={cn(
                    'bg-surface focus-visible:ring-foreground relative h-12 w-20 shrink-0 overflow-hidden rounded-md transition-opacity focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
                    isActive
                      ? 'ring-foreground opacity-100 ring-2'
                      : 'opacity-60 hover:opacity-100',
                  )}
                >
                  <Image
                    src={item.type === 'image' ? item.src : item.poster}
                    alt=''
                    fill
                    placeholder='blur'
                    sizes='80px'
                    className='object-cover'
                  />
                </button>
              )
            })}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
