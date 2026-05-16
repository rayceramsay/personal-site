import { Mail, FileText } from 'lucide-react'
import { GithubIcon } from '@/components/atoms/GithubIcon'
import { LinkedinIcon } from '@/components/atoms/LinkedinIcon'
import { SectionLabel } from '@/components/atoms/SectionLabel'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { RevealOnScroll } from '@/components/atoms/RevealOnScroll'
import { RESUME_URL, GITHUB_URL, LINKEDIN_URL, EMAIL } from '@/data/links'

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: 'Email',
    display: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    display: 'linkedin.com/in/rayceramsay',
    href: LINKEDIN_URL,
    external: true,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    display: 'github.com/rayceramsay',
    href: GITHUB_URL,
    external: true,
  },
  {
    icon: FileText,
    label: 'Resume',
    display: 'View PDF',
    href: RESUME_URL,
    external: true,
  },
] as const

export function ContactSection() {
  return (
    <section
      id='contact'
      aria-labelledby='contact-heading'
      className='bg-surface'
    >
      <div className='mx-auto max-w-6xl px-6 py-16 md:py-24'>
        <RevealOnScroll className='mb-10 flex flex-col items-center gap-3 text-center'>
          <SectionLabel>Contact</SectionLabel>
          <SectionHeading as='h2' size='lg' id='contact-heading'>
            Open to New Opportunities
          </SectionHeading>
          <p className='text-foreground-muted max-w-md text-sm leading-relaxed'>
            I&apos;m always looking for ways to challenge myself and grow in the
            software development space. If you have a project or opportunity you
            think I&apos;d be a good fit for, feel free to reach out!
          </p>
        </RevealOnScroll>

        <RevealOnScroll className='mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2'>
          {CONTACT_LINKS.map(
            ({ icon: Icon, label, display, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                aria-label={`${label}: ${display}`}
                className='bg-background border-border shadow-card hover:shadow-card-hover focus-visible:ring-foreground flex items-center gap-4 rounded-xl border p-5 transition-shadow focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                <div className='bg-surface flex h-10 w-10 shrink-0 items-center justify-center rounded-lg'>
                  <Icon
                    size={18}
                    className='text-foreground'
                    aria-hidden='true'
                  />
                </div>
                <div className='min-w-0'>
                  <p className='text-foreground-muted text-xs font-medium'>
                    {label}
                  </p>
                  <p className='text-foreground truncate text-sm font-semibold'>
                    {display}
                  </p>
                </div>
              </a>
            ),
          )}
        </RevealOnScroll>
      </div>
    </section>
  )
}
