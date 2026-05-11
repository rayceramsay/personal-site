import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva('inline-flex items-center font-medium rounded-full', {
  variants: {
    variant: {
      default: 'bg-surface text-foreground-muted text-xs px-3 py-1',
      category: 'bg-surface text-foreground text-xs px-3 py-1',
      skill: 'bg-tag-bg text-tag-text text-xs px-3 py-1',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ variant, className, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
