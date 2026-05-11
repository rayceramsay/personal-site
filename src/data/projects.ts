import type { ProjectItem } from '@/types/portfolio'

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: '1',
    title: 'JERC Sentry',
    subtitle: 'AI Scam Call Defence',
    description:
      'Real-time AI inference pipeline using Deepgram and Groq APIs to classify live phone scams with sub-second response latency. Includes an async FastAPI/WebSocket backend with Telnyx integrations, Flutter mobile app with Firebase FCM fraud alerts for family intervention, and Terraform-automated infrastructure.',
    techStack: [
      'FastAPI',
      'Flutter',
      'PostgreSQL',
      'Terraform',
      'Deepgram',
      'Groq',
      'Telnyx',
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
  {
    id: '5',
    title: 'NHL Goaltender Height Analysis',
    subtitle: 'Goaltender Performance Study',
    description:
      'Statistical analysis of 20+ years of NHL goalie data in R using tidyverse, GAMs, decision trees, and random forests to evaluate height-performance links and surface long-term scouting trends.',
    techStack: ['R', 'Tidyverse', 'ggplot2', 'Machine Learning'],
    demoUrl: 'https://rayceramsay.github.io/nhl-goalie-height-analysis/',
    demoLabel: 'Analysis',
  },
  {
    id: '6',
    title: 'Music Trivia Game',
    subtitle: 'Multiplayer Trivia Game',
    description:
      'Led a team of 5 to build a music trivia game in Java using Clean Architecture and Test-Driven Development, implementing audio playback, save/load functionality, and SQLite persistence with 90%+ JUnit test coverage.',
    techStack: ['Java', 'SQLite', 'JUnit', 'Git'],
    githubUrl:
      'https://github.com/rayceramsay/music-trivia/tree/post-semester-revision',
  },
  {
    id: '7',
    title: 'Onyx Analytics Dashboard',
    subtitle: 'Nonprofit KPI Dashboard',
    description:
      'React/Next.js analytics dashboard backed by PostgreSQL and GraphQL, enabling a nonprofit to track KPIs and accelerate decision-making by 33% through dynamic filters and interactive charts.',
    techStack: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'GraphQL'],
    githubUrl: 'https://github.com/onyx-initiative/onyx/pull/96',
  },
  {
    id: '8',
    title: 'Like It Or Dump It',
    subtitle: 'Small Business Website',
    description:
      'Single-page marketing website for a junk removal business built with HTML5, CSS, JavaScript, Vite, and a Node.js/Express backend.',
    techStack: ['HTML5', 'CSS', 'JavaScript', 'Express', 'Vite'],
    demoUrl: 'https://likeitordumpit.ca',
    demoLabel: 'Live Site',
  },
]
