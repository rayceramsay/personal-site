# rayceramsay.ca

Personal portfolio and resume site for Rayce Ramsay. Built to showcase software development experience to potential employers.

**Live site: [rayceramsay.ca](https://rayceramsay.ca)**

## Tech Stack

Next.js 16 | TypeScript | Tailwind CSS v4 | Radix UI | Lucide React | Vercel

## Project Structure

```
public/           # Public assets (images)
src/
├── app/          # Next.js App Router pages and layouts
├── components/   # UI components (Atomic Design: atoms → molecules → organisms)
├── data/         # Static content (projects, experience, skills, links)
├── hooks/        # Custom React hooks
├── lib/          # Utility functions
└── types/        # TypeScript interfaces
```

## Quickstart

**Prerequisites:** Node.js 18+, npm

```bash
# Clone the repo
git clone https://github.com/rayceramsay/rayceramsay.ca.git
cd rayceramsay.ca

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start local dev server           |
| `npm run build`        | Production build                 |
| `npm run start`        | Serve the production build       |
| `npm run lint`         | Run ESLint                       |
| `npm run format`       | Format with Prettier             |
| `npm run format:check` | Check formatting without writing |
