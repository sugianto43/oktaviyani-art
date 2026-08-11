# Oktaviyani — Artist Painting Portfolio

Digital art gallery portfolio for painter Oktaviyani, built with the artwork as the main
character. Full product spec lives in [`PRD.md`](./PRD.md); engineering conventions live in
[`CLAUDE.md`](./CLAUDE.md).

## Requirements

- Node.js 20+
- [pnpm](https://pnpm.io/) 9+
- A [Sanity](https://www.sanity.io/) project (content is served from Sanity CMS)

## Installation

```bash
pnpm install
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable                         | Exposure    | Purpose                                                                                        |
| -------------------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`           | Public      | Canonical site URL, used for canonical links, sitemap, robots.txt, OG/Twitter metadata         |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | Public      | Sanity project ID                                                                              |
| `NEXT_PUBLIC_SANITY_DATASET`     | Public      | Sanity dataset name (e.g. `production`)                                                        |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Public      | Sanity API version pin                                                                         |
| `SANITY_API_WRITE_TOKEN`         | Server only | Editor-role token used by `pnpm seed` to import mock content — never expose as `NEXT_PUBLIC_*` |

## Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Sanity Studio is available at
[http://localhost:3000/studio](http://localhost:3000/studio) for content editing.

To seed the Sanity dataset with mock artwork/artist content:

```bash
pnpm seed
```

## Testing

```bash
pnpm test          # unit/component tests (Vitest + React Testing Library)
pnpm test:e2e       # end-to-end tests (Playwright)
pnpm typecheck      # TypeScript strict mode
pnpm lint           # ESLint
pnpm format:check   # Prettier
```

Pre-commit hooks (Husky + lint-staged) run lint and format automatically on staged files.

## Build

```bash
pnpm build
pnpm start
```

## Deployment

Deployed on [Vercel](https://vercel.com/). Every pull request gets a preview deployment;
production deploys from `main` only. Set the environment variables above in the Vercel project
settings for each environment (Preview/Production).

## Tech Stack

| Layer           | Tool                                        |
| --------------- | ------------------------------------------- |
| Framework       | Next.js App Router                          |
| Language        | TypeScript (strict)                         |
| Styling         | Tailwind CSS                                |
| Forms           | React Hook Form + Zod                       |
| CMS             | Sanity                                      |
| Testing         | Vitest + React Testing Library + Playwright |
| Package manager | pnpm                                        |
| Deploy          | Vercel                                      |

See [`CLAUDE.md`](./CLAUDE.md) for architecture rules, folder structure, domain types, and
coding conventions.
