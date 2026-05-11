import * as React from 'react'
import { cn } from '@/lib/utils'

interface SectionLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export function SectionLabel({
  children,
  className,
  ...props
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        'text-foreground-muted flex items-center gap-1.5 text-sm font-medium tracking-widest uppercase',
        className,
      )}
      {...props}
    >
      <span aria-hidden='true'>•</span>
      {children}
    </p>
  )
}
