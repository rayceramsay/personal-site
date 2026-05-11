import type { ProjectItem } from '@/types/portfolio'

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: '1',
    title: 'JERC Sentry',
    subtitle: 'AI Scam Call Defence',
    description:
      'Real-time AI inference pipeline using Deepgram and Groq APIs to classify live phone scams with sub-second response latency. Includes an async FastAPI/WebSocket backend with Telnyx integrations, Flutter mobile app with Firebase FCM fraud alerts, and Terraform-automated infrastructure.',
    techStack: [
      'FastAPI',
      'Flutter',
      'PostgreSQL',
      'Terraform',
      'Deepgram',
      'Groq',
      'Firebase',
      'GitHub Actions',
    ],
    demoUrl: 'https://jerc-beta.pages.dev',
    demoLabel: 'Documentation',
  },
  {
    id: '2',
    title: 'AI Doctors',
    subtitle: 'Drug Interaction Predictor',
    description:
      'FastAPI-based clinical decision support system predicting drug-drug interaction risks from structured patient data. Python ETL pipelines normalize five medical datasets into PostgreSQL, with a React dashboard and AWS ECS/RDS/S3 infrastructure provisioned via Terraform.',
    techStack: ['FastAPI', 'React', 'AWS', 'Terraform', 'PostgreSQL', 'Python'],
    githubUrl: 'https://github.com/UofT-CSC490-F2025/AIDoctors',
  },
  {
    id: '3',
    title: 'Swim By Shea',
    subtitle: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce platform with Stripe payment integration and a custom CMS for inventory and order management. Migrated a legacy PHP monolith to a decoupled React and REST API architecture, improving scalability and maintainability.',
    techStack: ['React', 'TailwindCSS', 'PHP', 'MySQL', 'Docker', 'Stripe'],
  },
  {
    id: '4',
    title: 'U of T Booking Bot',
    subtitle: 'Automated Activity Registration',
    description:
      'Playwright automation tool with a PyQt6 desktop GUI to secure high-demand university activity bookings within seconds of their release. Integrates native OS schedulers and SQLite to automate registrations at precise intervals, consistently beating 30-second sell-out windows.',
    techStack: ['Python', 'Playwright', 'SQLite', 'PyQt6'],
    githubUrl: 'https://github.com/ethanmcf/UofTBookingBot',
  },
]
