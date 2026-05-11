import Link from 'next/link'
import { Bird } from 'lucide-react'
import { NAV_LINKS } from '@/data/navigation'

export function SiteFooter() {
  return (
    <footer role='contentinfo' className='bg-surface-dark text-background'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row'>
        <Link
          href='/'
          aria-label="D'Nova — home"
          className='text-background hover:text-background/70 focus-visible:ring-background focus-visible:ring-offset-surface-dark flex items-center gap-2 rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
        >
          <Bird size={22} aria-hidden='true' />
          <span className='text-sm font-semibold tracking-tight'>
            D&apos;Nova
          </span>
        </Link>

        <nav aria-label='Footer navigation'>
          <ul className='flex flex-wrap justify-center gap-6'>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='text-background/70 hover:text-background focus-visible:ring-background focus-visible:ring-offset-surface-dark rounded-sm text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href='mailto:hello@dnova.com'
          className='text-background hover:text-background/70 focus-visible:ring-background focus-visible:ring-offset-surface-dark rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
        >
          hello@dnova.com
        </a>
      </div>
    </footer>
  )
}
