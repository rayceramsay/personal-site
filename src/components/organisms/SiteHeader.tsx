import Link from 'next/link'
import { Bird } from 'lucide-react'
import { Button } from '@/components/atoms/Button'
import { NavLink } from '@/components/molecules/NavLink'
import { MobileMenu } from '@/components/organisms/MobileMenu'
import { NAV_LINKS } from '@/data/navigation'

export function SiteHeader() {
  return (
    <header
      role='banner'
      className='bg-background/95 border-border sticky top-0 z-30 w-full border-b backdrop-blur-sm'
    >
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6'>
        <Link
          href='/'
          aria-label="D'Nova — home"
          className='text-foreground hover:text-foreground-muted focus-visible:ring-foreground flex items-center gap-2 rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
        >
          <Bird size={22} aria-hidden='true' />
          <span className='text-sm font-semibold tracking-tight'>
            D&apos;Nova
          </span>
        </Link>

        <nav aria-label='Main navigation' className='hidden md:block'>
          <ul className='flex items-center gap-7'>
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>
        </nav>

        <div className='hidden md:block'>
          <Button variant='pill' size='sm' asChild>
            <Link href='#contact'>Book A Call</Link>
          </Button>
        </div>

        <MobileMenu links={NAV_LINKS} />
      </div>
    </header>
  )
}
