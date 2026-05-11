import * as React from 'react'
import { cn } from '@/lib/utils'

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string
}

export function Tag({ label, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        'bg-tag-bg text-tag-text inline-flex items-center rounded px-2 py-0.5 text-xs font-medium',
        className,
      )}
      {...props}
    >
      {label}
    </span>
  )
}
