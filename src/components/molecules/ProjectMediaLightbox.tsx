'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/atoms/Dialog'
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
  if (media.length === 0) return null

  const current = media[activeIndex] ?? media[0]
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

        <div className='bg-surface relative flex flex-1 items-center justify-center overflow-hidden rounded-xl'>
          {current.type === 'image' ? (
            <Image
              key={current.src.src}
              src={current.src}
              alt={current.alt}
              fill
              placeholder='blur'
              sizes='90vw'
              className='object-contain'
            />
          ) : (
            <video
              key={current.src}
              src={current.src}
              poster={current.poster.src}
              aria-label={current.alt}
              controls
              autoPlay
              muted={current.muted}
              playsInline
              className='h-full w-full object-contain'
            />
          )}

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
            className='flex gap-2 overflow-x-auto pb-1'
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
                  {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      alt=''
                      fill
                      placeholder='blur'
                      sizes='80px'
                      className='object-cover'
                    />
                  ) : (
                    <video
                      src={item.src}
                      poster={item.poster.src}
                      muted
                      playsInline
                      preload='metadata'
                      className='h-full w-full object-cover'
                    />
                  )}
                </button>
              )
            })}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
