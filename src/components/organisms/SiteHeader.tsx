'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/atoms/Button'
import { ThemeToggle } from '@/components/atoms/ThemeToggle'
import { NavLink } from '@/components/molecules/NavLink'
import { MobileMenu } from '@/components/organisms/MobileMenu'
import { NAV_LINKS } from '@/data/navigation'
import { RESUME_URL } from '@/data/links'
import { useActiveSection } from '@/hooks/useActiveSection'

export function SiteHeader() {
  const activeHref = useActiveSection(NAV_LINKS.map((l) => l.href))

  return (
    <header
      role='banner'
      className='bg-background/95 border-border sticky top-0 z-30 w-full border-b backdrop-blur-sm'
    >
      <div className='h-header mx-auto flex max-w-6xl items-center justify-between gap-6 px-6'>
        <Link
          href='/'
          aria-label='Rayce Ramsay — home'
          className='text-foreground hover:text-foreground-muted focus-visible:ring-foreground flex items-center gap-2 rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
        >
          <Image
            src='/images/logo/rayce_logo_transparent-bg-black-font.png'
            alt=''
            width={22}
            height={22}
            aria-hidden='true'
            className='block dark:hidden'
          />
          <Image
            src='/images/logo/rayce_logo_transparent-bg-white-font.png'
            alt=''
            width={22}
            height={22}
            aria-hidden='true'
            className='hidden dark:block'
          />
          <span className='text-sm font-semibold tracking-tight'>
            Rayce Ramsay
          </span>
        </Link>

        <nav aria-label='Main navigation' className='hidden md:block'>
          <ul className='flex items-center gap-7'>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  label={link.label}
                  isActive={activeHref === link.href}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-3'>
          <div className='hidden md:block'>
            <Button variant='pill' size='sm' asChild>
              <a href={RESUME_URL} target='_blank' rel='noopener noreferrer'>
                View Resume
              </a>
            </Button>
          </div>
          <ThemeToggle />
          <MobileMenu links={NAV_LINKS} activeHref={activeHref} />
        </div>
      </div>
    </header>
  )
}
