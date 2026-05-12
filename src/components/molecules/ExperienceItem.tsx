import { Tag } from '@/components/atoms/Tag'
import { Divider } from '@/components/atoms/Divider'
import { cn } from '@/lib/utils'
import type { ExperienceItem as ExperienceItemType } from '@/types/portfolio'

interface ExperienceItemProps {
  item: ExperienceItemType
  isLast?: boolean
  className?: string
}

export function ExperienceItem({
  item,
  isLast = false,
  className,
}: ExperienceItemProps) {
  return (
    <li className={cn('py-5', className)}>
      <div className='grid grid-cols-1 items-start gap-2 sm:grid-cols-2 sm:gap-4'>
        <div>
          <p className='text-foreground text-sm font-semibold'>
            {item.company}
          </p>
          <p className='text-foreground-muted mt-0.5 text-xs'>
            {item.location}
          </p>
          <p className='text-foreground-muted mt-0.5 text-xs'>{item.period}</p>
        </div>
        <div>
          <p className='text-foreground text-sm font-medium'>{item.role}</p>
          <ul className='mt-1 flex flex-col gap-1'>
            {item.bullets.map((bullet, i) => (
              <li
                key={i}
                className='text-foreground-muted flex items-start gap-1.5 text-xs leading-relaxed'
              >
                <span
                  aria-hidden='true'
                  className='bg-foreground-muted mt-1.5 h-1 w-1 shrink-0 rounded-full'
                />
                {bullet}
              </li>
            ))}
          </ul>
          <div className='mt-2 flex flex-wrap gap-1.5'>
            {item.skills.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
      {!isLast && <Divider className='mt-5' />}
    </li>
  )
}
