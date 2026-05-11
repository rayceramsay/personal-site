# Project Standards & Patterns

## Tech Stack

- **Framework:** Next.js v16 (App Router)
- **Language:** TypeScript (Strict)
- **Styling:** Tailwind CSS v4 + class-variance-authority (CVA)
- **Components:** Shadcn/UI (Radix Primitives)
- **Icons:** Lucide React

## Component Guidelines

- **Architecture:** Atomic Design. 1 component per file in `src/components`.
- **Styling Patterns:** Mobile-first. Use CVA for variants; no boolean style props.
- **Tokens:** Use CSS variables via Tailwind theme. No hardcoded hex/pixels.
- **Logic:** Presentational UI only. Extract business logic/state to custom hooks.
- **A11y:** WCAG 2.1 compliant. Use semantic HTML & Radix roles.

## Code Style

- **Naming:** Components (PascalCase), Hooks (useCamelCase), Utils (camelCase).
- **Types:** Strict interfaces for all props. No `any`.
- **Exports:** Prefer named exports over default exports for components.
