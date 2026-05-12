import Link from 'next/link'
import { Code2 } from 'lucide-react'
import { NAV_LINKS } from '@/data/navigation'
import { EMAIL } from '@/data/links'

export function SiteFooter() {
  return (
    <footer role='contentinfo' className='bg-surface-dark text-background'>
      <div className='mx-auto flex max-w-6xl flex-col items-start justify-between gap-12 px-6 py-10 md:flex-row md:items-center md:gap-6'>
        <Link
          href='/'
          aria-label='Rayce Ramsay — home'
          className='text-background hover:text-background/70 focus-visible:ring-background focus-visible:ring-offset-surface-dark flex items-center gap-2 rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
        >
          <Code2 size={22} aria-hidden='true' />
          <span className='text-sm font-semibold tracking-tight'>
            Rayce Ramsay
          </span>
        </Link>

        <nav aria-label='Footer navigation'>
          <ul className='flex flex-col flex-wrap justify-center gap-6 md:flex-row'>
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
          href={`mailto:${EMAIL}`}
          className='text-background hover:text-background/70 focus-visible:ring-background focus-visible:ring-offset-surface-dark rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
        >
          {EMAIL}
        </a>
      </div>
    </footer>
  )
}
