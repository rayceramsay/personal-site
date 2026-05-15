'use client'

import Link from 'next/link'
import { smoothScrollToHash } from '@/lib/smoothScrollToHash'

interface SmoothScrollLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

export function SmoothScrollLink({
  href,
  className,
  children,
}: SmoothScrollLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => smoothScrollToHash(e, href)}
    >
      {children}
    </Link>
  )
}
