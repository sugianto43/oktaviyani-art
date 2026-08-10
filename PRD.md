# PRD — Artist Painting Portfolio Website

## 1. Product Overview

### Product Name

**Artist Portfolio — Contemporary Painting**

### Product Type

Personal portfolio website untuk **seniman/pelukis** yang berfungsi sebagai digital gallery untuk menampilkan karya, memperkenalkan profil seniman, serta memberikan jalur bagi pengunjung untuk menghubungi seniman terkait karya atau commission.

### Product Goal

Membangun website portfolio yang:

1. Menjadikan **karya lukis sebagai fokus utama**.
2. Memberikan pengalaman seperti mengunjungi **digital art gallery**.
3. Menampilkan identitas dan karakter artistik seniman.
4. Memudahkan pengunjung menemukan dan mengeksplorasi karya.
5. Menyediakan cara sederhana untuk melakukan inquiry atau menghubungi seniman.
6. Memberikan pengalaman visual yang kuat pada desktop maupun mobile.
7. Memiliki technical foundation yang production-ready dan maintainable.
8. Mengikuti engineering best practices yang umum digunakan pada perusahaan teknologi skala besar.

---

# 2. Design Direction

## Visual Style

Website menggunakan pendekatan **minimalist contemporary art gallery**.

### Color

| Element        | Color                                  |
| -------------- | -------------------------------------- |
| Background     | `#F5F2EB`                              |
| Primary Text   | `#171717`                              |
| Secondary Text | `#66615B`                              |
| Border         | `#D9D4CB`                              |
| Accent         | Dynamic, diambil dari artwork          |
| Hover          | Menggunakan warna/kontras dari artwork |

Background tidak menggunakan pure white agar website terasa lebih **warm, sophisticated, dan editorial**.

---

## Typography

### Heading

Menggunakan serif typeface dengan ukuran besar.

Recommended fonts:

- Cormorant Garamond
- Playfair Display
- DM Serif Display
- Instrument Serif

### Body / UI

Menggunakan sans-serif:

- Inter
- DM Sans
- Manrope
- Neue Haas Grotesk

### Typography Hierarchy

| Element |  Desktop |
| ------- | -------: |
| Display | 72–120px |
| H1      |  56–80px |
| H2      |  40–56px |
| H3      |  24–32px |
| Body    |  16–18px |
| Caption |  12–14px |

Typography harus responsive.

---

# 3. Target Audience

### Primary

**Art collectors**

Orang yang tertarik membeli atau mengoleksi karya seni.

### Secondary

**Art enthusiasts**

Pengunjung yang ingin melihat karya dan mengenal seniman.

### Tertiary

**Gallery / curator**

Galeri atau curator yang ingin melihat portfolio dan exhibition history.

### Additional

**Potential commissioners**

Orang yang ingin meminta karya custom/commission.

---

# 4. User Goals

Pengunjung harus bisa:

- Melihat karya terbaru.
- Melihat seluruh portfolio.
- Membuka detail sebuah karya.
- Mengetahui medium dan ukuran karya.
- Mengenal seniman.
- Melihat exhibition history.
- Menghubungi seniman.
- Mengajukan inquiry untuk sebuah karya.

---

# 5. Information Architecture

```text
HOME
│
├── Featured Artwork
├── Selected Works
├── Artist Statement
├── Latest Exhibition
└── Contact CTA
│
├── WORKS
│   ├── All
│   ├── Painting
│   ├── Portrait
│   ├── Abstract
│   └── Landscape
│
├── ARTWORK DETAIL
│
├── ABOUT
│   ├── Biography
│   ├── Artist Statement
│   ├── Exhibitions
│   └── Awards
│
└── CONTACT
    ├── Email
    ├── Instagram
    └── Commission
```

---

# 6. Navigation

Navigation harus minimal.

## Desktop

```text
ARTIST NAME

                    WORKS    ABOUT    CONTACT
```

## Mobile

```text
ARTIST NAME                         ☰
```

Navigation:

- Sticky/fixed header.
- Minimal visual footprint.
- Keyboard accessible.
- Semantic navigation.
- Mobile menu harus trap focus ketika terbuka.
- `Escape` harus menutup mobile menu.
- Body scroll harus dikontrol ketika menu terbuka.

---

# 7. Homepage

## 7.1 Hero Section

Hero merupakan bagian paling penting dari homepage.

### Objective

Dalam 3–5 detik pertama user harus langsung memahami:

> "Ini adalah portfolio seorang seniman dan karya adalah fokus utama website."

### Requirements

- Artwork menggunakan ukuran besar.
- Tidak menggunakan terlalu banyak text.
- Hero image high quality.
- Artwork menggunakan subtle reveal animation.
- Judul artwork dapat muncul setelah image selesai reveal.
- CTA menuju halaman Works.
- Hero image harus diprioritaskan oleh browser.

---

# 8. Selected Works

Menampilkan karya terbaik atau terbaru.

Menggunakan asymmetric editorial grid.

### Artwork Card

Menampilkan:

```text
[IMAGE]

THE SILENCE
Oil on Canvas
2026
```

### Interaction

Desktop:

```text
scale: 1 → 1.03
```

Mobile tidak boleh bergantung pada hover.

---

# 9. Works / Gallery

## Filter

```text
ALL     ABSTRACT     PORTRAIT     LANDSCAPE
```

## Gallery

Desktop menggunakan masonry/asymmetric grid.

Requirements:

- Responsive grid.
- Stable image aspect ratio.
- Tidak menyebabkan layout shift.
- Lazy loading untuk image di bawah fold.
- Keyboard accessible.
- Filter state dapat direpresentasikan melalui URL query parameter jika diperlukan.

Example:

```text
/works?category=abstract
```

---

# 10. Artwork Detail

Setiap karya memiliki halaman detail.

## Required Information

- Title
- Year
- Medium
- Dimensions
- Description
- Category
- Availability
- Artwork image

### Optional

- Price
- Location
- Exhibition
- Certificate of authenticity

## URL

```text
/works/[slug]
```

Example:

```text
/works/the-silence
```

Slug harus stable dan SEO-friendly.

---

# 11. About Artist

Content:

- Artist portrait
- Biography
- Artist statement
- Location
- Education
- Career highlights

---

# 12. Exhibitions

Menampilkan exhibition history.

Content:

- Year
- Exhibition title
- Type
- Venue
- Location
- Description
- Related artwork

---

# 13. Contact

Contact dibuat sederhana.

```text
LET'S TALK ABOUT ART

Interested in a work,
commission, or collaboration?

hello@artist.com

[ SEND AN INQUIRY ]

Instagram
Email
```

Jika menggunakan contact form:

Fields:

- Name
- Email
- Subject
- Message
- Optional artwork reference
- Honeypot anti-spam field

---

# 14. Animation & Interaction

Animation harus subtle.

## Image Reveal

```text
opacity: 0 → 1
scale: 1.04 → 1
```

Duration:

```text
600–900ms
```

## Hover Zoom

```text
scale: 1 → 1.03
```

Duration:

```text
400–600ms
```

## Reduced Motion

Semua animation harus menghormati:

```css
@media (prefers-reduced-motion: reduce) {
	/* reduce or disable non-essential animation */
}
```

---

# 15. Responsive Design

## Breakpoints

Recommended breakpoints:

```text
Mobile:  < 768px
Tablet:  768px – 1199px
Desktop: >= 1200px
```

Breakpoint tidak boleh digunakan secara berlebihan.

Layout harus primarily fluid dan menggunakan CSS Grid/Flexbox.

---

# 16. Accessibility

Target:

**WCAG 2.2 AA**

Requirements:

- Semantic HTML.
- Correct heading hierarchy.
- Alt text untuk artwork.
- Decorative image menggunakan empty alt.
- Keyboard navigation.
- Visible focus state.
- Sufficient contrast.
- Screen reader compatible.
- Form labels harus eksplisit.
- Error message harus accessible.
- Modal/menu harus memiliki focus management.
- Touch target minimal 44×44px.
- Reduced motion support.

Accessibility harus diuji menggunakan:

- axe
- Lighthouse
- Keyboard-only navigation
- Screen reader smoke test

---

# 17. Recommended Tech Stack

## Application

```text
Next.js
React
TypeScript
```

Recommended:

```text
Next.js App Router
React Server Components
```

Gunakan Client Component hanya jika memang membutuhkan:

- Browser APIs
- Local state
- Event handlers
- Animation libraries
- Interactive UI

Jangan menjadikan seluruh application sebagai Client Component.

---

## Styling

```text
Tailwind CSS
```

Gunakan:

- Design tokens.
- CSS variables.
- Consistent spacing scale.
- Responsive utilities.
- Component-level variants.

Avoid:

- Excessive arbitrary values.
- Inline styles kecuali memang diperlukan.
- Duplicated CSS.

---

## Data Fetching

Jika menggunakan backend/API:

```text
TanStack Query
```

Gunakan untuk client-side server state.

Jangan menggunakan Zustand/Redux untuk server state jika TanStack Query sudah mencukupi.

---

## Local State

Gunakan:

```text
React useState/useReducer
```

untuk state lokal.

Gunakan:

```text
Zustand
```

hanya jika membutuhkan shared client state yang benar-benar diperlukan.

Jangan membuat global state untuk state yang sebenarnya lokal.

---

# 18. TypeScript Standards

TypeScript harus menggunakan strict mode.

```json
{
	"compilerOptions": {
		"strict": true
	}
}
```

Requirements:

- Avoid `any`.
- Prefer explicit domain types.
- Use discriminated unions untuk state kompleks.
- Validate external data.
- Jangan mempercayai API response secara langsung.
- Gunakan type-safe API layer.

Bad:

```typescript
const artwork: any = response.data;
```

Good:

```typescript
const artwork: Artwork = artworkSchema.parse(response.data);
```

---

# 19. Domain Model

## Artwork

```typescript
interface Artwork {
	id: string;
	slug: string;
	title: string;
	year: number;
	category: ArtworkCategory;
	medium: string;
	dimensions: string;
	image: ArtworkImage;
	description: string;
	status: ArtworkStatus;
	featured: boolean;
}
```

## Artwork Category

```typescript
type ArtworkCategory = 'painting' | 'portrait' | 'abstract' | 'landscape';
```

## Artwork Status

```typescript
type ArtworkStatus = 'available' | 'sold' | 'not-for-sale';
```

## Artist

```typescript
interface Artist {
	name: string;
	biography: string;
	statement: string;
	portrait: string;
	location: string;
	email: string;
	instagram: string;
}
```

---

# 20. API Standards

Jika website menggunakan API:

## API Requirements

- REST or GraphQL dengan contract yang jelas.
- Versioned API.
- Consistent response structure.
- Proper HTTP status codes.
- Request validation.
- Response validation.
- Error contract.
- Pagination untuk collection besar.
- Filtering/sorting harus explicit.

Example:

```json
{
	"data": [],
	"pagination": {
		"page": 1,
		"limit": 20,
		"total": 100
	}
}
```

Error:

```json
{
	"error": {
		"code": "ARTWORK_NOT_FOUND",
		"message": "Artwork was not found"
	}
}
```

Frontend tidak boleh bergantung pada string error untuk business logic.

Gunakan error code.

---

# 21. API Client Architecture

Jangan melakukan API request langsung di component.

Bad:

```tsx
function WorksPage() {
	useEffect(() => {
		fetch('/api/artworks');
	}, []);
}
```

Prefer:

```text
UI
 ↓
Feature Hook
 ↓
Query / Service
 ↓
API Client
 ↓
Backend
```

Example structure:

```text
src/
├── app/
├── components/
├── features/
│   └── artworks/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── schemas/
│       └── types/
├── lib/
│   ├── api/
│   ├── utils/
│   └── validation/
└── config/
```

---

# 22. Server vs Client Components

Default:

> Server Component.

Use Client Component only when necessary.

## Server Component

Use for:

- Artwork listing.
- Artwork detail.
- Artist information.
- SEO metadata.
- Static content.
- Server-side data fetching.

## Client Component

Use for:

- Gallery filters.
- Mobile navigation.
- Animation.
- Interactive gallery.
- Contact form.
- Client-side state.

Example:

```text
ArtworkDetailPage
    │
    ├── Server Component
    │
    ├── ArtworkImage
    │
    ├── ArtworkMetadata
    │
    └── InquiryButton
             │
             └── Client Component
```

---

# 23. Component Architecture

Components harus mengikuti prinsip:

> Build components based on responsibility, not visual repetition alone.

Recommended:

```text
components/
├── layout/
│   ├── Header
│   ├── Footer
│   └── Container
│
├── artwork/
│   ├── ArtworkCard
│   ├── ArtworkGrid
│   ├── ArtworkImage
│   ├── ArtworkMetadata
│   └── ArtworkGallery
│
├── artist/
│   ├── ArtistBio
│   └── ArtistStatement
│
├── exhibition/
│   └── ExhibitionItem
│
└── ui/
    ├── Button
    ├── Link
    ├── Modal
    └── Skeleton
```

Avoid:

```text
components/
└── EverythingComponent.tsx
```

---

# 24. Component Design Principles

Setiap component harus:

- Memiliki single responsibility.
- Memiliki API/props yang jelas.
- Tidak memiliki business logic yang tidak relevan.
- Mudah di-test.
- Tidak terlalu deeply nested.
- Tidak bergantung pada global state tanpa alasan.

Avoid premature abstraction.

Jangan membuat component hanya karena JSX digunakan dua kali jika abstraction belum memberikan value.

---

# 25. State Management

Gunakan hierarchy:

```text
Server State
    ↓
TanStack Query / Server Components

Shared Client State
    ↓
Zustand jika benar-benar diperlukan

Local UI State
    ↓
useState / useReducer

URL State
    ↓
Search Params
```

Contoh:

Gallery filter:

```text
/works?category=abstract
```

lebih baik daripada menyimpan filter utama hanya di global store.

---

# 26. Form Architecture

Contact form menggunakan:

```text
React Hook Form
+
Zod
```

Example:

```typescript
const contactSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	subject: z.string().min(1),
	message: z.string().min(10),
});
```

Requirements:

- Client-side validation.
- Server-side validation.
- Accessible error messages.
- Loading state.
- Success state.
- Error state.
- Prevent duplicate submissions.
- Spam protection.

---

# 27. Security

Security harus menjadi bagian dari design, bukan ditambahkan belakangan.

## Requirements

- HTTPS only.
- Secure headers.
- Content Security Policy jika memungkinkan.
- Input validation.
- Output escaping.
- Rate limiting untuk contact endpoint.
- CSRF protection jika architecture membutuhkannya.
- Honeypot/reCAPTCHA/TurnstILE untuk spam.
- Jangan expose secrets ke client.
- Jangan menyimpan API secret di `NEXT_PUBLIC_*`.
- Sanitize user-generated content.
- Restrict CORS.
- Validate uploaded files.
- Limit upload size/type.

---

# 28. Environment Variables

Environment variable harus dibedakan berdasarkan exposure.

Public:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_ANALYTICS_ID
```

Server only:

```text
DATABASE_URL
CMS_API_TOKEN
EMAIL_API_KEY
```

Secret tidak boleh:

- Di-commit ke Git.
- Dimasukkan ke client bundle.
- Menggunakan prefix `NEXT_PUBLIC_`.

Gunakan:

```text
.env.local
.env.test
.env.production
```

dan secret management pada CI/CD.

---

# 29. Image Architecture

Image adalah bagian paling critical dari website.

## Requirements

- AVIF/WebP.
- Responsive sizes.
- Proper width/height.
- Lazy loading.
- Priority loading untuk hero.
- CDN.
- Image compression.
- Blur placeholder.
- Prevent layout shift.

Example:

```tsx
<Image
	src={artwork.image}
	alt={artwork.title}
	width={1200}
	height={1600}
	priority
/>
```

Hanya hero/LCP image yang menggunakan `priority`.

Jangan memberikan `priority` ke semua image.

---

# 30. Performance

Target:

| Metric                       |       Target |
| ---------------------------- | -----------: |
| LCP                          |       < 2.5s |
| INP                          |      < 200ms |
| CLS                          |        < 0.1 |
| Lighthouse Performance       |         ≥ 90 |
| Lighthouse Accessibility     |         ≥ 95 |
| Lighthouse SEO               |         ≥ 95 |
| JS shipped per initial route | Keep minimal |

## Performance Principles

- Server Components by default.
- Minimize client JavaScript.
- Code splitting.
- Lazy load non-critical components.
- Optimize images.
- Avoid unnecessary dependencies.
- Avoid unnecessary re-renders.
- Avoid large client-side state.
- Avoid loading animation libraries globally.
- Use dynamic imports when appropriate.

---

# 31. Core Web Vitals

Performance harus diukur berdasarkan **real user data**, bukan hanya local Lighthouse.

Monitoring:

```text
LCP
INP
CLS
FCP
TTFB
```

Gunakan:

- Web Vitals
- Real User Monitoring
- Lighthouse CI
- Chrome UX data jika tersedia

---

# 32. SEO

Setiap page harus memiliki:

- Unique title.
- Meta description.
- Canonical URL.
- Open Graph metadata.
- Twitter/X metadata.
- Semantic HTML.
- Structured headings.
- Sitemap.
- Robots.txt.

Artwork detail harus menggunakan structured data jika relevan.

Recommended:

```text
VisualArtwork
Person
CollectionPage
BreadcrumbList
```

---

# 33. Accessibility Testing

Accessibility testing harus masuk ke CI jika memungkinkan.

Tools:

```text
axe
eslint-plugin-jsx-a11y
Lighthouse
Playwright
```

Minimum requirement:

```text
No critical accessibility violation
```

---

# 34. Testing Strategy

Testing pyramid:

```text
             E2E
            /   \
           /     \
       Integration
        /         \
       /           \
     Unit Tests
```

## Unit Testing

Gunakan:

```text
Vitest
```

Test:

- Utility functions.
- Formatters.
- Validation schema.
- Business logic.
- Hooks jika diperlukan.

Example:

```text
formatArtworkDimensions()
formatArtworkStatus()
artworkSchema
```

---

# 35. Component Testing

Gunakan:

```text
Vitest
+
React Testing Library
```

Test behavior, bukan implementation detail.

Good:

```text
user clicks "View Artwork"
→ artwork detail page is opened
```

Avoid:

```text
expect(component.state.foo).toBe(true)
```

---

# 36. E2E Testing

Gunakan:

```text
Playwright
```

Critical flows:

### Homepage

```text
Open homepage
→ Hero loads
→ Featured artwork visible
→ Click Works
```

### Artwork

```text
Open Works
→ Filter artwork
→ Open artwork
→ Artwork metadata visible
```

### Contact

```text
Open Contact
→ Fill form
→ Submit
→ Success message
```

### Mobile

Test critical flows pada:

- Mobile viewport.
- Tablet viewport.
- Desktop viewport.

---

# 37. Test Coverage

Coverage bukan satu-satunya quality metric.

Recommended baseline:

```text
Statements: ≥ 80%
Branches:   ≥ 75%
Functions:  ≥ 80%
Lines:      ≥ 80%
```

Critical business logic dapat memiliki target lebih tinggi:

```text
≥ 90%
```

Coverage threshold harus dipasang di CI agar coverage tidak turun tanpa disengaja.

---

# 38. Visual Regression Testing

Karena website sangat visual, gunakan visual regression testing untuk critical pages.

Tool:

```text
Playwright screenshots
```

Critical snapshots:

```text
Homepage
Works
Artwork Detail
About
Contact
Mobile Homepage
Mobile Works
```

Test harus memperhatikan:

- Layout.
- Typography.
- Artwork positioning.
- Responsive behavior.
- Navigation.

---

# 39. Code Quality

Recommended tooling:

```text
ESLint
Prettier
TypeScript
Husky
lint-staged
```

Pre-commit:

```text
lint
typecheck
format check
affected tests
```

CI harus melakukan full validation.

---

# 40. Git Strategy

Gunakan conventional commit.

Examples:

```text
feat: add artwork gallery
fix: prevent artwork layout shift
refactor: simplify artwork query
test: add artwork detail coverage
perf: optimize hero image loading
docs: update development guide
chore: update dependencies
```

Branch naming:

```text
feature/artwork-gallery
fix/mobile-navigation
refactor/artwork-api
perf/image-optimization
```

---

# 41. Pull Request Standards

Setiap PR harus memiliki:

### Description

- What changed?
- Why?
- How was it tested?
- Any trade-offs?

### Checklist

```text
- [ ] Tests added/updated
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Accessibility checked
- [ ] Responsive checked
- [ ] Performance impact considered
- [ ] No secrets committed
- [ ] Screenshots attached for UI changes
```

PR harus kecil dan focused.

Avoid large unrelated changes.

---

# 42. CI/CD

CI pipeline minimal:

```text
Pull Request
     ↓
Install
     ↓
Lint
     ↓
Typecheck
     ↓
Unit Tests
     ↓
Build
     ↓
E2E Tests
     ↓
Lighthouse / Performance Check
     ↓
Deploy Preview
```

Production:

```text
main
 ↓
CI
 ↓
Build
 ↓
Deploy
 ↓
Smoke Test
 ↓
Production
```

---

# 43. Deployment

Recommended:

```text
Vercel
```

atau platform equivalent.

Requirements:

- Preview deployment untuk setiap PR.
- Production deployment hanya dari protected branch.
- Environment separation.
- Automatic rollback.
- Build logs.
- Deployment monitoring.

---

# 44. Branch Protection

Production branch harus protected.

Requirements:

- Pull request required.
- CI checks required.
- No direct push.
- At least one approval untuk production code.
- Branch up-to-date before merge jika diperlukan.
- Force push disabled.

---

# 45. Dependency Management

Dependencies harus diminimalkan.

Rules:

- Jangan menambahkan dependency untuk functionality sederhana.
- Audit dependencies secara berkala.
- Lockfile wajib di-commit.
- Automated dependency update.
- Security vulnerability scanning.
- Remove unused dependencies.

Recommended:

```text
pnpm
```

---

# 46. Error Handling

Application harus memiliki:

```text
Loading
Empty
Error
Success
```

states.

Example:

```text
Artwork Loading
Artwork Empty
Artwork Error
Artwork Loaded
```

Untuk Next.js:

- `loading.tsx`
- `error.tsx`
- `not-found.tsx`

Gunakan error boundary untuk isolated failures.

---

# 47. Observability

Production application harus memiliki minimal:

### Error Monitoring

Recommended:

```text
Sentry
```

Monitor:

- JavaScript errors.
- Server errors.
- API failures.
- Performance issues.

### Analytics

Gunakan privacy-conscious analytics.

Track events seperti:

```text
view_artwork
filter_artwork
click_inquiry
submit_inquiry
view_exhibition
```

Jangan mengumpulkan personal data yang tidak diperlukan.

---

# 48. Logging

Logging harus:

- Structured.
- Tidak mengandung secret.
- Tidak mengandung sensitive user data.
- Memiliki context yang cukup untuk debugging.

Bad:

```text
console.log(user)
```

Good:

```text
{
  event: "artwork_inquiry_failed",
  artworkId: "123",
  requestId: "abc"
}
```

---

# 49. Analytics

Analytics harus mengikuti privacy requirements.

Recommended events:

```text
page_view
artwork_view
artwork_filter
artwork_inquiry_click
contact_submit
exhibition_view
instagram_click
```

Avoid tracking:

- Password.
- Full message content.
- Sensitive personal information.
- Unnecessary identifiers.

---

# 50. Caching Strategy

Static content harus memanfaatkan caching.

Recommended hierarchy:

```text
CDN
 ↓
Next.js cache
 ↓
Server
 ↓
Database / CMS
```

Artwork listing dapat menggunakan revalidation.

Contoh konsep:

```text
revalidate: 3600
```

Untuk content yang jarang berubah.

Jika CMS mendukung webhook:

```text
CMS update
    ↓
Webhook
    ↓
Revalidation
    ↓
Updated page
```

---

# 51. Data Fetching Strategy

Prioritas:

```text
1. Static / build-time data
2. Server-side fetch
3. Cached server fetch
4. Client-side fetch
```

Jangan menggunakan client-side fetching jika data dapat diperoleh secara server-side.

---

# 52. Caching & Mutation Rules

GET:

- Cache jika data tidak sering berubah.
- Revalidate berdasarkan kebutuhan.

POST/Mutation:

- Jangan cache.
- Validate input.
- Rate limit.
- Return explicit response.

Setelah mutation:

```text
Mutation
 ↓
Invalidate/Revalidate
 ↓
Fresh data
```

---

# 53. URL & Routing Standards

URL harus:

- Lowercase.
- SEO-friendly.
- Stable.
- Tanpa unnecessary query parameters.

Good:

```text
/works/the-silence
```

Bad:

```text
/work?id=123&type=painting&view=detail
```

Query parameters hanya untuk state yang memang cocok direpresentasikan sebagai URL state.

Example:

```text
/works?category=abstract
```

---

# 54. Internationalization

Jika website berpotensi mendukung bahasa lain, architecture harus memungkinkan i18n sejak awal.

Potential:

```text
/en
/id
```

Namun jangan implementasikan i18n jika belum diperlukan.

Avoid premature complexity.

---

# 55. Content Management

Jika artist sering menambahkan artwork:

CMS direkomendasikan.

Content model:

```text
Artist
Artwork
Artwork Category
Exhibition
Page
```

CMS harus mendukung:

- Draft.
- Publish.
- Image management.
- Metadata.
- Preview.
- Revision history.

---

# 56. Image Upload Requirements

Jika CMS/admin memiliki upload:

Allowed:

```text
AVIF
WebP
JPEG
PNG
```

Maximum file size harus dibatasi.

Upload pipeline:

```text
Upload
 ↓
Validate MIME
 ↓
Validate size
 ↓
Optimize
 ↓
Generate variants
 ↓
Store CDN
```

Generate variants:

```text
thumbnail
medium
large
original
```

---

# 57. Design System

Gunakan design tokens.

Example:

```css
:root {
	--color-background: #f5f2eb;
	--color-foreground: #171717;
	--color-muted: #66615b;
	--color-border: #d9d4cb;

	--space-xs: 0.25rem;
	--space-sm: 0.5rem;
	--space-md: 1rem;
	--space-lg: 2rem;
	--space-xl: 4rem;
	--space-2xl: 8rem;
}
```

Jangan menyebarkan magic values di seluruh codebase.

---

# 58. CSS Standards

Prioritas:

```text
CSS
 ↓
Tailwind utilities
 ↓
Component variants
 ↓
Custom CSS only when necessary
```

Avoid:

- Excessive `!important`.
- Deep CSS selectors.
- Global styles yang tidak diperlukan.
- Inline style untuk static values.

---

# 59. Performance Budget

Tetapkan budget sejak awal.

Example:

```text
Initial JS:        < 200KB gzip
Critical CSS:      minimized
Hero image:        optimized
Third-party JS:    minimized
Fonts:             ≤ 2 families
```

Budget dapat disesuaikan berdasarkan hasil profiling nyata.

Jika budget terlampaui:

```text
CI warning
```

dan untuk critical regression:

```text
CI failure
```

---

# 60. Third-Party Dependencies

Third-party scripts harus diminimalkan.

Sebelum menambahkan third-party:

1. Apakah benar-benar diperlukan?
2. Apakah bisa dilakukan native?
3. Berapa impact terhadap bundle?
4. Apakah impact terhadap privacy?
5. Apakah impact terhadap Core Web Vitals?

Third-party analytics/chat/widget harus:

- Lazy loaded jika memungkinkan.
- Tidak blocking initial render.
- Dipasang hanya jika memiliki business value.

---

# 61. Security Headers

Recommended headers:

```text
Content-Security-Policy
Strict-Transport-Security
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
```

Configuration harus disesuaikan dengan hosting dan kebutuhan application.

---

# 62. Dependency & Security Scanning

CI harus menjalankan:

```text
pnpm audit
```

atau equivalent security scanner.

Tambahkan:

- Dependabot/Renovate.
- Secret scanning.
- Dependency vulnerability scanning.
- License checking jika diperlukan.

Critical vulnerabilities harus diblok sebelum production release.

---

# 63. Disaster Recovery

Untuk content/backend:

- Database backup.
- CMS backup/versioning.
- Image backup.
- Restore procedure terdokumentasi.

Minimum requirement:

```text
Backup
 ↓
Verify
 ↓
Restore test
```

Backup yang tidak pernah diuji tidak dianggap reliable.

---

# 64. Documentation

Repository harus memiliki:

```text
README.md
CONTRIBUTING.md
ARCHITECTURE.md
```

README minimal berisi:

- Project overview.
- Requirements.
- Installation.
- Development.
- Environment variables.
- Testing.
- Build.
- Deployment.

Architecture documentation menjelaskan:

- Folder structure.
- Data flow.
- Rendering strategy.
- API architecture.
- State management.
- CMS integration.

---

# 65. Repository Structure

Recommended:

```text
.
├── .github/
│   └── workflows/
│
├── public/
│   ├── fonts/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx
│   │   │   ├── works/
│   │   │   ├── about/
│   │   │   ├── exhibitions/
│   │   │   └── contact/
│   │   │
│   │   ├── api/
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── artwork/
│   │   ├── artist/
│   │   └── exhibition/
│   │
│   ├── features/
│   │   ├── artworks/
│   │   ├── contact/
│   │   └── exhibitions/
│   │
│   ├── lib/
│   │   ├── api/
│   │   ├── analytics/
│   │   ├── validation/
│   │   └── utils/
│   │
│   ├── hooks/
│   ├── types/
│   ├── config/
│   └── styles/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example
├── eslint.config.js
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── README.md
├── ARCHITECTURE.md
└── CONTRIBUTING.md
```

---

# 66. Engineering Principles

Development harus mengikuti prinsip:

### 1. Correctness First

Feature harus benar sebelum dioptimalkan.

### 2. Accessibility by Default

Accessibility bukan post-development task.

### 3. Performance by Default

Jangan mengirim JavaScript/image yang tidak diperlukan.

### 4. Server First

Gunakan server rendering secara default jika memungkinkan.

### 5. Type Safety

External data harus divalidasi.

### 6. Explicit Architecture

Data flow dan responsibility harus jelas.

### 7. Test Behavior

Test behavior/user outcome, bukan implementation detail.

### 8. Observability

Production issue harus dapat dideteksi dan di-debug.

### 9. Security by Default

Jangan mempercayai input dari client.

### 10. Simplicity

Jangan menambahkan abstraction atau dependency tanpa alasan.

---

# 67. Definition of Done

Sebuah feature dianggap selesai jika:

### Product

- [ ] Acceptance criteria terpenuhi.
- [ ] UX sesuai design.
- [ ] Responsive.
- [ ] Empty state tersedia.
- [ ] Loading state tersedia.
- [ ] Error state tersedia.

### Engineering

- [ ] TypeScript strict.
- [ ] No unnecessary `any`.
- [ ] Unit tests jika terdapat logic.
- [ ] Integration tests jika diperlukan.
- [ ] E2E test untuk critical flow.
- [ ] Accessibility checked.
- [ ] Performance checked.
- [ ] No console errors.
- [ ] No console warnings.

### Quality

- [ ] ESLint passed.
- [ ] Prettier passed.
- [ ] Typecheck passed.
- [ ] Tests passed.
- [ ] Build passed.
- [ ] CI passed.

### Security

- [ ] No secrets committed.
- [ ] Input validated.
- [ ] API protected.
- [ ] Dependencies checked.
- [ ] Security headers configured.

### Documentation

- [ ] README updated jika diperlukan.
- [ ] Architecture documentation updated jika ada perubahan architecture.
- [ ] PR description lengkap.

---

# 68. MVP Scope

## Must Have

- [ ] Homepage
- [ ] Hero artwork
- [ ] Selected works
- [ ] Works gallery
- [ ] Artwork detail
- [ ] About
- [ ] Contact
- [ ] Responsive design
- [ ] Image reveal
- [ ] Hover zoom
- [ ] Basic SEO
- [ ] Accessibility
- [ ] Image optimization
- [ ] Error/loading/empty states
- [ ] Unit tests
- [ ] E2E tests
- [ ] CI/CD
- [ ] Error monitoring
- [ ] Analytics

## Should Have

- [ ] Exhibition history
- [ ] Artwork filtering
- [ ] Commission inquiry
- [ ] Instagram integration
- [ ] CMS
- [ ] Artwork availability status
- [ ] Visual regression testing
- [ ] Performance monitoring

## Could Have

- [ ] Artwork purchase
- [ ] Online exhibition
- [ ] Fullscreen gallery
- [ ] Dark mode
- [ ] Advanced page transitions
- [ ] 3D/parallax experience
- [ ] Virtual gallery
- [ ] Artwork zoom viewer

---

# 69. Success Metrics

Website dianggap berhasil apabila:

| Metric                            |          Target |
| --------------------------------- | --------------: |
| Homepage → Works                  |           > 30% |
| Artwork Detail engagement         |           > 50% |
| Contact CTA click                 |            > 5% |
| Mobile usability                  | 100% functional |
| LCP                               |          < 2.5s |
| CLS                               |           < 0.1 |
| INP                               |         < 200ms |
| Lighthouse Performance            |            ≥ 90 |
| Lighthouse Accessibility          |            ≥ 95 |
| Lighthouse SEO                    |            ≥ 95 |
| Critical accessibility issues     |               0 |
| Critical security vulnerabilities |               0 |

---

# 70. Final Design Direction

The final website should feel:

- Minimal
- Artistic
- Sophisticated
- Editorial
- Warm
- Premium
- Emotional
- Image-focused
- Contemporary

It should **not** feel:

- Corporate
- Generic portfolio template
- Ecommerce-heavy
- UI-heavy
- Over-animated
- Overly colorful
- Crowded

---

# 71. Overall User Experience

Prinsip desain utama:

> **"Let the art breathe."**

Website jangan terasa seperti ecommerce atau portfolio template.

Visual hierarchy:

```text
             ARTWORK
                ↓
              TITLE
                ↓
        ARTIST STATEMENT
                ↓
           ARTIST INFO
                ↓
             CONTACT
```

UI harus "menghilang" dan membiarkan karya seni menjadi karakter utama website.

---

# 72. Recommended Tech Stack

## Frontend

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## State & Data

- React Server Components
- TanStack Query jika diperlukan
- Zustand hanya untuk shared client state

## Forms

- React Hook Form
- Zod

## Testing

- Vitest
- React Testing Library
- Playwright
- axe

## Code Quality

- ESLint
- Prettier
- TypeScript
- Husky
- lint-staged

## Animation

- Motion / Framer Motion
- Native CSS transitions

## CMS

Optional:

- Sanity
- Contentful
- Strapi
- Headless WordPress

## Image

- Next.js Image
- WebP / AVIF
- CDN

## Monitoring

- Sentry
- Web Vitals
- Analytics

## CI/CD

- GitHub Actions
- Preview deployment
- Production deployment

## Package Manager

```text
pnpm
```

---

# 73. Architecture Summary

High-level architecture:

```text
                        ┌───────────────┐
                        │     User      │
                        └───────┬───────┘
                                │
                                ▼
                     ┌───────────────────┐
                     │ CDN / Edge / WAF  │
                     └─────────┬─────────┘
                               │
                               ▼
                     ┌───────────────────┐
                     │ Next.js App       │
                     │                   │
                     │ Server Components │
                     │ Client Components │
                     └─────────┬─────────┘
                               │
                ┌──────────────┼──────────────┐
                │              │              │
                ▼              ▼              ▼
             ┌──────┐      ┌───────┐      ┌─────────┐
             │ CMS  │      │ API   │      │ Images  │
             └──────┘      └───────┘      │ CDN     │
                                          └─────────┘
                │              │
                └──────────────┼──────────────┐
                               ▼              ▼
                           ┌───────┐      ┌─────────┐
                           │ DB    │      │ Email   │
                           └───────┘      │ Service │
                                          └─────────┘
```

Observability:

```text
Application
     │
     ├── Error Monitoring → Sentry
     │
     ├── Performance → Web Vitals
     │
     └── Analytics → Privacy-conscious Analytics
```

---

# 74. Engineering Quality Bar

Website ini tidak hanya harus **"looks good"**, tetapi harus memenuhi tiga quality dimensions:

```text
                    QUALITY
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
        DESIGN     ENGINEERING   EXPERIENCE
          │            │            │
       Visual       Reliability   Accessibility
       System       Performance   Usability
       Motion       Security      Responsive
       Typography   Testing       SEO
```

Final quality bar:

> **Production-ready, accessible, performant, secure, observable, maintainable, and visually distinctive.**

Tujuan akhirnya bukan membuat website yang terlihat seperti project portfolio developer, tetapi membuat **digital art gallery yang memiliki engineering quality setara production application modern**.
