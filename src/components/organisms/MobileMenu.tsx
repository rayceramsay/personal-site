'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useNavMenu } from '@/hooks/useNavMenu'
import { Button } from '@/components/atoms/Button'
import type { NavLink as NavLinkType } from '@/types/portfolio'
import { RESUME_URL } from '@/data/links'
import { NavLink } from '../molecules/NavLink'

interface MobileMenuProps {
  links: NavLinkType[]
  activeHref?: string
}

export function MobileMenu({ links, activeHref }: MobileMenuProps) {
  const { isOpen, toggle, close } = useNavMenu()

  return (
    <>
      <button
        type='button'
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className='text-foreground hover:bg-surface focus-visible:ring-foreground flex h-10 w-10 touch-manipulation items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:hidden'
      >
        {isOpen ? (
          <X size={20} aria-hidden='true' />
        ) : (
          <Menu size={20} aria-hidden='true' />
        )}
      </button>

      <div
        role='dialog'
        aria-modal='true'
        aria-label='Navigation menu'
        aria-hidden={!isOpen}
        className={`bg-background border-border fixed top-(--header-height) left-0 z-40 flex w-full flex-col items-center justify-center gap-10 border-t border-b px-6 pt-8 pb-16 transition-[visibility,opacity] duration-300 ease-in-out md:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label='Mobile navigation'>
          <ul className='flex flex-col items-center gap-2'>
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={close}
                tabIndex={isOpen ? 0 : -1}
                className={`focus-visible:ring-foreground block rounded-sm px-4 py-3 text-2xl font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${
                  activeHref === link.href
                    ? 'text-foreground underline underline-offset-4'
                    : 'text-foreground hover:text-foreground-muted'
                }`}
              />
            ))}
          </ul>
        </nav>
        <Button variant='pill' size='lg' tabIndex={isOpen ? 0 : -1} asChild>
          <Link href={RESUME_URL} target='_blank'>
            View Resume
          </Link>
        </Button>
      </div>
    </>
  )
}
