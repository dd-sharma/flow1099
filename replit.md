# Flow1099 - 1099 Tax Form Management Platform

## Overview

Flow1099 is a consumer-friendly tax documentation platform designed to simplify 1099 form creation, management, and filing. The application draws inspiration from TurboTax's approachable interface and Mint's clean design philosophy, making tax form processing feel manageable rather than intimidating.

**Migration Status (Nov 7, 2024):** Successfully migrated from Vite+Express to Next.js 15 with Supabase. The application now uses Next.js 15 App Router for server-side rendering, improved SEO, and better performance. All TurboTax-inspired design elements have been preserved.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- Next.js 15 with App Router for server-side rendering and static generation
- React 19 with TypeScript as the primary UI framework
- Built-in Next.js routing via `app/` directory structure

**UI Component System**
- shadcn/ui component library built on Radix UI primitives
- Design system follows "New York" style with TailwindCSS for styling
- Custom theme configuration with support for light/dark modes via ThemeProvider
- Component path aliases configured for clean imports (`@/components`, `@/lib`, etc.)

**State Management**
- TanStack Query (React Query) v5 for server state management
- React Hook Form with Zod resolvers for form validation
- Local React state for UI-specific concerns

**Design Philosophy**
- Consumer-friendly approach prioritizing approachability over formality
- TurboTax-inspired color palette with primary green (#00a04b) and accent blue (#0052cc)
- Typography: Inter for UI text, JetBrains Mono for numerical data
- Elevation-based interaction patterns (hover-elevate, active-elevate classes)

### Backend Architecture

**Server Framework**
- Next.js 15 App Router with API Routes (located in `app/api/`)
- Server Components for data fetching and rendering
- Server Actions for form submissions and mutations

**Database & ORM**
- Supabase PostgreSQL database with Row Level Security (RLS)
- Supabase JavaScript client for database operations
- Three client types: browser client, server client (with cookies), and admin client (service role)
- Environment variables: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY

**API Structure**
- Next.js API Routes in `app/api/` directory
- Server-side data fetching via Server Components
- Supabase clients handle authentication and database access

**Type Safety**
- TypeScript strict mode enabled across the entire codebase
- Supabase automatically generates types from database schema
- Zod for runtime validation of forms and API requests

### External Dependencies

**UI Component Libraries**
- Radix UI: Comprehensive set of unstyled, accessible component primitives
- Lucide React: Icon library used throughout the application
- Embla Carousel: For carousel/slider components
- CMDK: Command palette component library

**Data & Forms**
- TanStack Query: Server state synchronization and caching
- React Hook Form: Form state management
- Zod: Schema validation and type inference
- Drizzle Zod: Bridge between Drizzle schemas and Zod validation

**Database & Connection**
- @neondatabase/serverless: Neon's PostgreSQL serverless driver
- Drizzle ORM: Type-safe database queries and migrations
- connect-pg-simple: PostgreSQL session store (for future session management)

**Styling & Utilities**
- TailwindCSS: Utility-first CSS framework
- class-variance-authority: Type-safe variant management for components
- clsx & tailwind-merge: Conditional className composition
- date-fns: Date manipulation utilities

**Development Tools**
- Replit-specific plugins: Error overlay, cartographer, dev banner
- TSX: TypeScript execution for development server
- esbuild: Production build bundling

**Configuration Notes**
- ESM module system throughout (type: "module" in package.json)
- Path aliases support asset imports via `@assets` alias
- Vite configured to serve from `client` directory, build to `dist/public`
- Development server uses Vite middleware mode for HMR integration
- Session management infrastructure present but not yet fully implemented