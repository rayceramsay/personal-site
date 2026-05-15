export interface NavLink {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
}

export interface ExperienceItem {
  id: string
  company: string
  location: string
  role: string
  bullets: string[]
  period: string
  skills: string[]
}

export type ProjectMediaType = 'image' | 'video'

export interface ProjectMedia {
  type: ProjectMediaType
  src: string
  alt: string
  poster?: string
  muted?: boolean
  width?: number
  height?: number
}

export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  description: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  demoLabel?: string
  media?: ProjectMedia[]
}

export interface SkillCategory {
  id: string
  category: string
  skills: string[]
}
