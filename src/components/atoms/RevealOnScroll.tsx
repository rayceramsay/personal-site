'use client'

import { cn } from '@/lib/utils'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

interface RevealOnScrollProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function RevealOnScroll({
  children,
  delay = 0,
  className,
}: RevealOnScrollProps) {
  const { ref, isInView } = useRevealOnScroll()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none',
        'transition-[opacity,transform] duration-500 ease-out',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className,
      )}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
