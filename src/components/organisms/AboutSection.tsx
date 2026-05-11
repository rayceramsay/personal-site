import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { StatCard } from '@/components/molecules/StatCard'

const ABOUT_BULLETS = [
  "Varsity Blues Men's Hockey goalie at the University of Toronto.",
  '2× U SPORTS Academic All-Canadian award recipient.',
  'Hockey Gives Blood Player Ambassador.',
]

const GPA_STAT = { value: '3.55', label: 'University GPA / 4.0' }

export function AboutSection() {
  return (
    <section
      id='about'
      aria-labelledby='about-heading'
      className='mx-auto max-w-6xl px-6 py-16 md:py-24'
    >
      <div className='grid grid-cols-1 items-start gap-12 md:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <SectionHeading as='h2' size='lg' id='about-heading'>
            About Me
          </SectionHeading>
          <p className='text-foreground-muted text-sm leading-relaxed'>
            I&apos;m a recent Computer Science graduate from the University of
            Toronto with experience developing enterprise and consumer-facing
            web applications. My background spans production debugging, CI/CD
            automation, cloud infrastructure provisioning, and real-time
            application development — built across personal projects and
            internships at ADP and the Canadian Light Source.
          </p>

          <div className='bg-surface rounded-xl p-5'>
            <p className='text-foreground text-sm font-semibold'>
              University of Toronto
            </p>
            <p className='text-foreground-muted mt-1 text-xs'>
              Honours B.Sc. Computer Science &amp; Data Science
            </p>
            <p className='text-foreground-muted text-xs'>
              Minor in Statistics | 2022 – 2026
            </p>
          </div>

          <StatCard stat={GPA_STAT} size='lg' />
        </div>

        <div className='flex flex-col items-center gap-6 md:items-start'>
          <div className='bg-surface relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl'>
            <Image
              src={'/images/rayce_hockey_headshot.jpg'}
              alt='Rayce Ramsay'
              fill
              className='object-cover object-top'
              sizes='(max-width: 768px) 100vw, 320px'
            />
          </div>

          <ul className='flex flex-col gap-4' aria-label='Personal highlights'>
            {ABOUT_BULLETS.map((text, i) => (
              <li key={i} className='flex items-start gap-3'>
                <CheckCircle2
                  size={18}
                  className='text-foreground mt-0.5 shrink-0'
                  aria-hidden='true'
                />
                <p className='text-foreground-muted text-sm leading-relaxed'>
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
