import type { ProjectItem } from '@/types/portfolio'

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: '1',
    title: 'JERC Sentry',
    subtitle: 'AI Scam Call Defence',
    description:
      'Real-time AI inference pipeline using Deepgram and Groq APIs to classify live phone call scams at the network level with sub-second response latency. Includes an async FastAPI/WebSocket backend with Telnyx integrations, Flutter mobile app with Firebase FCM fraud alerts for family intervention, and Terraform-automated infrastructure.',
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
      'pytest',
    ],
    demoUrl: 'https://jerc-beta.pages.dev',
    demoLabel: 'Documentation Site',
    media: [
      {
        type: 'video',
        src: '/videos/projects/1/demo.mp4',
        alt: 'JERC Sentry demo video showcasing real-time scam call detection and alerting features.',
        poster: '/images/projects/1/poster.png',
      },
      {
        type: 'image',
        src: '/images/projects/1/poster.png',
        alt: 'Screenshot of the JERC Sentry demo.',
      },
      {
        type: 'image',
        src: '/images/projects/1/content1.png',
        alt: 'Screenshot of a mobile device showing a notification for a scam call alert.',
      },
      {
        type: 'image',
        src: '/images/projects/1/content2.png',
        alt: 'Screenshot of the JERC Sentry React dashboard showing a detected scam call with classification details.',
      },
    ],
  },
  {
    id: '2',
    title: 'AI Doctors',
    subtitle: 'Drug Interaction Predictor',
    description:
      'FastAPI-based clinical decision support system for predicting drug-drug interaction risks from structured patient data. Features Python ETL pipelines to normalize five medical datasets into PostgreSQL, a RAG pipeline, an authenticated React dashboard for inference, and AWS ECS/RDS/S3 infrastructure provisioned via Terraform.',
    techStack: ['FastAPI', 'React', 'AWS', 'Terraform', 'PostgreSQL', 'Jest'],
    githubUrl: 'https://github.com/UofT-CSC490-F2025/AIDoctors',
    media: [
      {
        type: 'video',
        src: '/videos/projects/2/demo.mp4',
        alt: 'AI Doctors demo video showcasing the drug interaction prediction features.',
        poster: '/images/projects/2/poster.png',
      },
      {
        type: 'image',
        src: '/images/projects/2/poster.png',
        alt: 'Screenshot of the AI Doctors React dashboard showing patient data input form.',
      },
    ],
  },
  {
    id: '3',
    title: 'Studio Avele (Swim By Shea)',
    subtitle: 'Small Business E-Commerce Platform',
    description:
      'Full-stack e-commerce platform with Stripe payment integration and a custom CMS for inventory and order management. Migrated a legacy PHP monolith to a decoupled React and REST API architecture, improving scalability and maintainability.',
    techStack: ['React', 'TailwindCSS', 'PHP', 'MySQL', 'Docker', 'Stripe'],
    media: [
      {
        type: 'video',
        src: '/videos/projects/3/demo.mp4',
        alt: 'Video showcasing the Studio Avele e-commerce platform, highlighting the product catalog, shopping cart, checkout process, and admin panel.',
        poster: '/images/projects/3/poster.png',
        muted: true,
      },
      {
        type: 'image',
        src: '/images/projects/3/poster.png',
        alt: 'Screenshot of the Studio Avele homepage.',
      },
    ],
  },
  {
    id: '4',
    title: 'U of T Booking Bot',
    subtitle: 'Automated Activity Registration',
    description:
      'Playwright automation tool with a PyQt6 desktop GUI to secure high-demand university activity bookings within seconds of their release. Integrates native OS schedulers and SQLite to automate registrations at precise intervals, consistently beating 30-second sell-out windows.',
    techStack: ['Python', 'Playwright', 'SQLite', 'PyQt6'],
    githubUrl: 'https://github.com/ethanmcf/UofTBookingBot',
    media: [
      {
        type: 'video',
        src: '/videos/projects/4/demo.mp4',
        alt: 'U of T Booking Bot demo video showcasing the GUI and automated booking process.',
        poster: '/images/projects/4/poster.png',
        muted: true,
      },
      {
        type: 'image',
        src: '/images/projects/4/poster.png',
        alt: 'Screenshot of the U of T Booking Bot PyQt6 GUI home screen.',
      },
      {
        type: 'image',
        src: '/images/projects/4/content1.png',
        alt: 'Screenshot of the U of T Booking Bot showing the credentials setup screen.',
      },
      {
        type: 'image',
        src: '/images/projects/4/content2.png',
        alt: 'Screenshot of the U of T Booking Bot showing the run/booking screen.',
      },
      {
        type: 'image',
        src: '/images/projects/4/content3.png',
        alt: 'Screenshot of the U of T Booking Bot showing a successful booking schedule confirmation.',
      },
    ],
  },
  {
    id: '5',
    title: 'NHL Goaltender Height Analysis',
    subtitle: 'Goaltender Performance Study',
    description:
      'Statistical analysis of 20+ years of NHL goalie data in R using tidyverse, GAMs, decision trees, and random forests to evaluate height-performance links and surface long-term scouting trends.',
    techStack: ['R', 'Tidyverse', 'ggplot2', 'Machine Learning'],
    demoUrl: 'https://rayceramsay.github.io/nhl-goalie-height-analysis/',
    demoLabel: 'Interactive Analysis',
    media: [
      {
        type: 'video',
        src: '/videos/projects/5/demo.mp4',
        alt: 'Video summarizing the NHL Goaltender Height Analysis project, showcasing key findings and visualizations.',
        poster: '/images/projects/5/poster.png',
        muted: true,
      },
      {
        type: 'image',
        src: '/images/projects/5/poster.png',
        alt: 'Screenshot of the NHL Goaltender Height Analysis interactive R dashboard showing a regression tree.',
      },
    ],
  },
  {
    id: '6',
    title: 'Music Trivia Game',
    subtitle: 'Single Player Trivia Game',
    description:
      'Led a team of 5 to build a music trivia game in Java using Clean Architecture and Test-Driven Development, implementing audio playback, save/load functionality, and SQLite persistence with 90%+ JUnit test coverage.',
    techStack: ['Java', 'SQLite', 'JUnit', 'Git'],
    githubUrl:
      'https://github.com/rayceramsay/music-trivia/tree/post-semester-revision',
    media: [
      {
        type: 'video',
        src: '/videos/projects/6/demo.mp4',
        alt: 'Music Trivia Game demo video showcasing gameplay and features.',
        poster: '/images/projects/6/poster.png',
      },
      {
        type: 'image',
        src: '/images/projects/6/poster.png',
        alt: 'Screenshot of the Music Trivia Game active gameplay screen.',
      },
    ],
  },
  {
    id: '7',
    title: 'Onyx Analytics Dashboard',
    subtitle: 'Nonprofit KPI Dashboard',
    description:
      'React/Next.js analytics dashboard backed by PostgreSQL and GraphQL, enabling a nonprofit to track KPIs through dynamic filters and charts.',
    techStack: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'GraphQL'],
    githubUrl: 'https://github.com/onyx-initiative/onyx/pull/96',
    media: [
      {
        type: 'image',
        src: '/images/projects/7/content1.png',
        alt: 'Screenshot of the Onyx Analytics Dashboard showing an area/line chart.',
      },
      {
        type: 'image',
        src: '/images/projects/7/content2.png',
        alt: 'Screenshot of the Onyx Analytics Dashboard showing aggregated statistics cards.',
      },
      {
        type: 'image',
        src: '/images/projects/7/content3.png',
        alt: 'Screenshot of the Onyx Analytics Dashboard showing aggregated statistics cards with date filters.',
      },
    ],
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
    media: [
      {
        type: 'video',
        src: '/videos/projects/8/demo.mp4',
        alt: 'Video of the Like It Or Dump It homepage.',
        poster: '/images/projects/8/poster.png',
        muted: true,
      },
      {
        type: 'image',
        src: '/images/projects/8/poster.png',
        alt: 'Screenshot of the Like It Or Dump It homepage.',
      },
    ],
  },
]
