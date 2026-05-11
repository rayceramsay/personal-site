import type { SkillCategory } from '@/types/portfolio'

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: '1',
    category: 'Languages',
    skills: [
      'Python',
      'Java',
      'TypeScript',
      'JavaScript',
      'SQL',
      'C',
      'PHP',
      'R',
    ],
  },
  {
    id: '2',
    category: 'Frameworks & Libraries',
    skills: [
      'React',
      'FastAPI',
      'Spring Boot',
      'Node.js',
      'Express.js',
      'Django',
      'Flutter',
      'Redux',
    ],
  },
  {
    id: '3',
    category: 'Infrastructure & DevOps',
    skills: [
      'Docker',
      'Terraform',
      'AWS',
      'PostgreSQL',
      'GitHub Actions',
      'Jenkins',
      'TeamCity',
      'Ansible',
      'Splunk',
    ],
  },
  {
    id: '4',
    category: 'Testing & Automation',
    skills: ['JUnit', 'Mockito', 'pytest', 'Playwright'],
  },
  {
    id: '5',
    category: 'Data & ML',
    skills: [
      'PyTorch',
      'scikit-learn',
      'pandas',
      'NumPy',
      'Matplotlib',
      'Tidyverse',
      'ggplot2',
      'ArcGIS',
    ],
  },
]
