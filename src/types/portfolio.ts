export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface PortfolioCard {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  description: string;
  period: string;
  skills: string[];
}

export interface WorkItem {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
}

export interface BlogPost {
  id: string;
  category: string;
  readTimeMinutes: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
}
