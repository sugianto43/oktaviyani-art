# CLAUDE.md — Oktaviyani Art Portfolio

Artist painting portfolio website. Digital art gallery. Artwork is the main character — UI disappears.

Full spec: `PRD.md`.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js App Router |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| Forms | React Hook Form + Zod |
| Server state | TanStack Query (only if needed) |
| Client state | Zustand (only if truly shared) |
| Testing | Vitest + React Testing Library + Playwright |
| Package manager | pnpm |
| Deploy | Vercel |

---

## Architecture Rules

### Server vs Client Components

Default: **Server Component**.

Use `'use client'` only for:
- Gallery filter
- Mobile navigation
- Animations (Framer Motion)
- Contact form
- Any interactive UI requiring browser APIs or local state

Never make an entire page or layout a Client Component.

### Data Fetching

Never fetch directly in a component. Always use the layered architecture:

```
UI → Feature Hook → Query/Service → API Client → Backend/CMS
```

**Bad:**
```tsx
function WorksPage() {
  useEffect(() => { fetch('/api/artworks') }, [])
}
```

**Good:**
```tsx
// src/features/artworks/hooks/useArtworks.ts
export function useArtworks(category?: ArtworkCategory) {
  return useQuery({ queryKey: ['artworks', category], queryFn: () => artworkService.list(category) })
}
```

### State Management Priority

1. Server state → TanStack Query / Server Components
2. URL state → Search params (`/works?category=abstract`)
3. Local UI state → `useState` / `useReducer`
4. Shared client state → Zustand (last resort)

Gallery filter belongs in URL state, not a global store.

---

## Folder Structure

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              # Homepage
│   │   ├── works/
│   │   │   ├── page.tsx          # Works gallery
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Artwork detail
│   │   ├── about/
│   │   ├── exhibitions/
│   │   └── contact/
│   ├── api/
│   ├── error.tsx
│   ├── not-found.tsx
│   └── layout.tsx
│
├── components/
│   ├── ui/           # Button, Link, Modal, Skeleton
│   ├── layout/       # Header, Footer, Container
│   ├── artwork/      # ArtworkCard, ArtworkGrid, ArtworkImage, ArtworkMetadata
│   ├── artist/       # ArtistBio, ArtistStatement
│   └── exhibition/   # ExhibitionItem
│
├── features/
│   ├── artworks/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── schemas/
│   │   └── types/
│   ├── contact/
│   └── exhibitions/
│
├── lib/
│   ├── api/
│   ├── analytics/
│   ├── validation/
│   └── utils/
│
├── hooks/
├── types/
├── config/
└── styles/
```

---

## Domain Types

These are canonical. Do not redefine or rename without updating everywhere.

```typescript
interface Artwork {
  id: string
  slug: string
  title: string
  year: number
  category: ArtworkCategory
  medium: string
  dimensions: string
  image: ArtworkImage
  description: string
  status: ArtworkStatus
  featured: boolean
}

type ArtworkCategory = 'painting' | 'portrait' | 'abstract' | 'landscape'
type ArtworkStatus = 'available' | 'sold' | 'not-for-sale'

interface Artist {
  name: string
  biography: string
  statement: string
  portrait: string
  location: string
  email: string
  instagram: string
}
```

---

## TypeScript Rules

- `strict: true` always
- No `any` — use proper domain types
- Validate all external data with Zod before using

**Bad:**
```typescript
const artwork: any = response.data
```

**Good:**
```typescript
const artwork: Artwork = artworkSchema.parse(response.data)
```

---

## Design Tokens

Always use CSS variables. No magic values in component code.

```css
:root {
  --color-background: #f5f2eb;
  --color-foreground: #171717;
  --color-muted: #66615b;
  --color-border: #d9d4cb;
}
```

Colors in Tailwind config must reference these variables.

---

## Image Rules

- Hero/LCP image: `priority` prop required
- All other images: lazy load (no `priority`)
- Always provide `width` and `height` to prevent CLS
- Use `alt={artwork.title}` for artwork images
- Decorative images: `alt=""`
- Format: WebP/AVIF via Next.js Image

---

## URL Patterns

```
/                     Homepage
/works                Works gallery
/works?category=abstract  Filtered gallery
/works/[slug]         Artwork detail (slug must be stable)
/about                About artist
/exhibitions          Exhibition history
/contact              Contact
```

Slugs are permanent. Never change a slug after publish — it breaks SEO and existing links.

---

## Animations

- Image reveal: `opacity: 0→1`, `scale: 1.04→1`, duration 600–900ms
- Hover zoom: `scale: 1→1.03`, duration 400–600ms
- Always add `@media (prefers-reduced-motion: reduce)` guard
- Mobile: no hover-dependent interactions

---

## Navigation

- Desktop: sticky header, artist name left, links right (Works / About / Contact)
- Mobile: hamburger → overlay menu
- Mobile menu: trap focus when open, `Escape` closes, body scroll locked

---

## Contact Form

Fields: name, email, subject, message, artwork reference (optional), honeypot (hidden, anti-spam).

Validation: React Hook Form + Zod, both client and server side.

States required: loading / success / error / prevent duplicate submit.

---

## Performance Targets

| Metric | Target |
|---|---|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| Initial JS bundle | < 200KB gzip |

---

## Security

- Never put secrets in `NEXT_PUBLIC_*`
- Rate limit contact endpoint
- Honeypot on contact form
- Validate and sanitize all user input server-side
- Security headers: CSP, HSTS, X-Content-Type-Options, Referrer-Policy

---

## Git Convention

Conventional commits required:

```
feat: add artwork gallery filter
fix: prevent hero image layout shift
perf: optimize artwork card rendering
test: add contact form validation tests
refactor: extract artwork service layer
chore: update dependencies
```

Branch naming:
```
feature/artwork-gallery
fix/mobile-navigation
perf/hero-image
```

---

## Definition of Done

A feature is done when:

- [ ] Correct behavior
- [ ] Responsive (mobile / tablet / desktop)
- [ ] Loading + error + empty states exist
- [ ] TypeScript strict — no `any`
- [ ] Accessible (keyboard nav, focus, contrast, alt text)
- [ ] No CLS from images
- [ ] Tests cover critical logic
- [ ] No console errors or warnings
- [ ] ESLint + Prettier + typecheck pass
- [ ] No secrets committed

---

## What NOT to Do

- Do not `fetch` directly in a component
- Do not use `any`
- Do not mark all components `'use client'`
- Do not add `priority` to every image — only hero/LCP
- Do not store gallery filter in Zustand — use URL state
- Do not hardcode colors or spacing — use design tokens
- Do not change artwork slugs after publish
- Do not add dependencies for simple functionality
- Do not add global state for state that is actually local
- Do not add animation without `prefers-reduced-motion` guard
- Do not trust API responses without Zod validation
