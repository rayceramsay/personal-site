import { cn } from '@/lib/utils'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
}

export function RevealOnScroll({ children, className }: RevealOnScrollProps) {
  return <div className={cn('reveal-on-scroll', className)}>{children}</div>
}
