import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { StatItem } from '@/types/portfolio'

const statCardVariants = cva('flex flex-col', {
  variants: {
    size: {
      sm: 'gap-0.5',
      lg: 'gap-1',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

const valueVariants = cva('font-black text-foreground leading-none', {
  variants: {
    size: {
      sm: 'text-2xl',
      lg: 'text-6xl md:text-7xl',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

const labelVariants = cva('text-foreground-muted leading-snug', {
  variants: {
    size: {
      sm: 'text-xs',
      lg: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

interface StatCardProps extends VariantProps<typeof statCardVariants> {
  stat: StatItem
  className?: string
}

export function StatCard({ stat, size, className }: StatCardProps) {
  return (
    <div className={cn(statCardVariants({ size }), className)}>
      <span className={valueVariants({ size })}>{stat.value}</span>
      <span className={labelVariants({ size })}>{stat.label}</span>
    </div>
  )
}
