# Rayce Ramsay Portfolio Site

This is a resume/portfolio website for Rayce Ramsay (a recent computer science grad) to demonstrate his software development background to potential employers.

## Tech Stack

- Next.js v16 (App Router)
- TypeScript (Strict)
- Tailwind CSS v4 + class-variance-authority (CVA) for styling
- Shadcn/UI (Radix Primitives)
- Lucide React for icons

## Component Guidelines

- Use Atomic Design. 1 component per file in `src/components`.
- Mobile-first design. Use CVA for variants; no boolean style props.
- Use CSS variables via Tailwind theme. No hardcoded hex/pixels.
- Components should be presentational UI only. Extract business logic/state to custom hooks.
- WCAG 2.1 compliant. Use semantic HTML & Radix roles.

## Code Style

- Naming conventions: Components (PascalCase), Hooks (useCamelCase), Utils (camelCase).
- Strict interfaces for all props. No `any`.
- Prefer named exports over default exports for components.

## Core Principles

- Simplicity First: Make every change as simple as possible. Impact minimal code.
- No Laziness: Find root causes. No temporary fixes. Senior developer standards.
- Minimal Impact: Only touch what's necessary. No side effects with new bugs.
