import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

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
}

export function NavLink({
  href,
  label,
  isActive,
  className,
  onClick,
}: NavLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const id = href.startsWith('#') ? href.slice(1) : null
    if (id) {
      const target = document.getElementById(id)
      if (target) {
        e.preventDefault()
        const reducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches
        target.scrollIntoView({
          behavior: reducedMotion ? 'instant' : 'smooth',
        })
        history.pushState(null, '', href)
      }
    }
    onClick?.()
  }

  return (
    <li>
      <Link
        href={href}
        className={cn(navLinkVariants({ isActive }), className)}
        onClick={handleClick}
      >
        {label}
      </Link>
    </li>
  )
}
