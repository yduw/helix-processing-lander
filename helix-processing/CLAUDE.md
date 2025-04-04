# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Build: `npm run build`
- Dev: `npm run dev` (uses Turbopack)
- Start: `npm run start`
- Lint: `npm run lint`

## Code Style
- TypeScript with strict mode enabled
- Next.js App Router
- Path aliases: use `@/*` for imports from src directory
- ESLint with Next.js core web vitals and TypeScript configs
- Tailwind CSS for styling 
- React 19 with functional components and hooks
- Use Geist font family (sans and mono) 
- Prefer explicit types with React.ReactNode for children
- Use named exports for components and metadata
- Use readonly for immutable props
- Format JSX with consistent indentation and self-closing tags