import * as React from 'react'
import { cn } from '@/lib/utils'

type DividerProps = React.HTMLAttributes<HTMLHRElement>

export function Divider({ className, ...props }: DividerProps) {
  return (
    <hr
      aria-hidden='true'
      className={cn('border-border border-t', className)}
      {...props}
    />
  )
}
