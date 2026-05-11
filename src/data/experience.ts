import type { ExperienceItem } from '@/types/portfolio'

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: '1',
    company: 'ADP',
    location: 'Toronto, ON',
    role: 'Application Developer Intern',
    period: 'May 2025 – Jul 2025',
    bullets: [
      "Resolved 27 production issues across ADP's Workforce Now HR platform, eliminating client-facing blockers for 11+ businesses.",
      'Implemented backend and frontend enhancements using Java (Spring Boot), TypeScript, and SQL.',
      'Maintained 80% minimum test coverage using JUnit and Mockito, ensuring seamless integration and quality deployments.',
      'Leveraged Jenkins, Splunk, and Dynatrace to monitor production environments and resolve critical software issues.',
    ],
    skills: ['Java', 'Spring Boot', 'TypeScript', 'SQL', 'JUnit', 'Jenkins'],
  },
  {
    id: '2',
    company: 'Canadian Light Source',
    location: 'Saskatoon, SK',
    role: 'Software Developer Intern',
    period: 'May 2023 – Aug 2023',
    bullets: [
      'Built a Python/Django feedback system with custom views and optimized PostgreSQL queries to capture user training metrics.',
      'Automated web app deployments via Ansible and TeamCity, achieving a 50% reduction in delivery time for faculty-facing platforms.',
      'Delivered 70 pull requests, performed peer code reviews, and led stakeholder demos to accelerate Agile sprint cycles.',
    ],
    skills: ['Python', 'Django', 'PostgreSQL', 'Ansible', 'TeamCity'],
  },
]
