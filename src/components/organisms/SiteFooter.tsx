import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/data/navigation'
import { EMAIL } from '@/data/links'
import { SmoothScrollLink } from '@/components/atoms/SmoothScrollLink'

export function SiteFooter() {
  return (
    <footer role='contentinfo' className='bg-surface-dark text-white'>
      <div className='mx-auto flex max-w-6xl flex-col items-start justify-between gap-12 px-6 py-10 md:flex-row md:items-center md:gap-6'>
        <Link
          href='/'
          aria-label='Rayce Ramsay — home'
          className='focus-visible:ring-offset-surface-dark flex items-center gap-2 rounded-sm text-white transition-colors hover:text-white/70 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none'
        >
          <Image
            src='/images/logo/rayce_logo_transparent-bg-white-font.png'
            alt=''
            width={22}
            height={22}
            aria-hidden='true'
          />
          <span className='text-sm font-semibold tracking-tight'>
            Rayce Ramsay
          </span>
        </Link>

        <nav aria-label='Footer navigation'>
          <ul className='flex flex-col flex-wrap justify-center gap-6 md:flex-row'>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <SmoothScrollLink
                  href={link.href}
                  className='focus-visible:ring-offset-surface-dark rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none'
                >
                  {link.label}
                </SmoothScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`mailto:${EMAIL}`}
          className='focus-visible:ring-offset-surface-dark rounded-sm text-sm font-medium text-white transition-colors hover:text-white/70 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none'
        >
          {EMAIL}
        </a>
      </div>
    </footer>
  )
}
