'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useNavMenu } from '@/hooks/useNavMenu'
import { Button } from '@/components/atoms/Button'
import type { NavLink } from '@/types/portfolio'

interface MobileMenuProps {
  links: NavLink[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const { isOpen, toggle, close } = useNavMenu()

  return (
    <>
      <button
        type='button'
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className='text-foreground hover:bg-surface focus-visible:ring-foreground flex h-10 w-10 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:hidden'
      >
        {isOpen ? (
          <X size={20} aria-hidden='true' />
        ) : (
          <Menu size={20} aria-hidden='true' />
        )}
      </button>

      {isOpen && (
        <div
          className='fixed inset-0 z-40 md:hidden'
          aria-hidden='true'
          onClick={close}
        />
      )}

      <div
        role='dialog'
        aria-modal='true'
        aria-label='Navigation menu'
        className={`bg-background border-border shadow-card-hover fixed top-0 right-0 z-50 flex h-full w-72 flex-col gap-6 border-l p-8 transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type='button'
          onClick={close}
          aria-label='Close navigation menu'
          className='text-foreground hover:bg-surface focus-visible:ring-foreground flex h-9 w-9 items-center justify-center self-end rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
        >
          <X size={18} aria-hidden='true' />
        </button>
        <nav>
          <ul className='flex flex-col gap-5'>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className='text-foreground hover:text-foreground-muted focus-visible:ring-foreground rounded-sm text-base font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='mt-auto'>
          <Button variant='pill' size='md' asChild>
            <Link href='#contact'>Book A Call</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
