'use client'

import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { useSmoothScrollToHash } from '@/hooks/useSmoothScrollToHash'

const navLinkVariants = cva(
  'text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 rounded-sm',
  {
    variants: {
      isActive: {
        true: 'text-foreground underline underline-offset-4',
        false: 'text-foreground-muted hover:text-foreground',
      },
    },
    defaultVariants: {
      isActive: false,
    },
  },
)

interface NavLinkProps extends VariantProps<typeof navLinkVariants> {
  href: string
  label: string
  className?: string
  onClick?: () => void
  tabIndex?: number
}

export function NavLink({
  href,
  label,
  isActive,
  className,
  onClick,
  tabIndex = 0,
}: NavLinkProps) {
  const smoothScrollToHash = useSmoothScrollToHash()

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    smoothScrollToHash(e, href)
    onClick?.()
  }

  return (
    <li>
      <Link
        href={href}
        className={cn(navLinkVariants({ isActive }), className)}
        onClick={handleClick}
        tabIndex={tabIndex}
      >
        {label}
      </Link>
    </li>
  )
}
