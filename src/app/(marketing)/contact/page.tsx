import type { Metadata } from 'next'
import { Container } from '@/components/layout'
import { ContactForm } from '@/features/contact/components/ContactForm'
import { artistService } from '@/features/artist/services/artistService'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Let's talk about art — inquiries, commissions, and collaborations.",
}

interface ContactPageProps {
  searchParams: Promise<{ artwork?: string }>
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const [{ artwork }, artist] = await Promise.all([searchParams, artistService.get()])

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <h1 className="font-serif text-4xl font-light tracking-tight md:text-5xl">
              Let&apos;s Talk About Art
            </h1>
            <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-[var(--color-muted-fg)]">
              Interested in a work, commission, or collaboration?
            </p>

            <a
              href={`mailto:${artist.email}`}
              className="mt-8 inline-block font-sans text-sm text-[var(--color-fg)] underline decoration-[var(--color-border-default)] underline-offset-4 hover:decoration-[var(--color-fg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
            >
              {artist.email}
            </a>

            <div className="mt-10 flex gap-6 font-sans text-xs tracking-widest uppercase">
              <a
                href={artist.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted-fg)] transition-colors hover:text-[var(--color-fg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
              >
                Instagram
              </a>
              <a
                href={`mailto:${artist.email}`}
                className="text-[var(--color-muted-fg)] transition-colors hover:text-[var(--color-fg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
              >
                Email
              </a>
            </div>
          </div>

          <ContactForm defaultArtworkReference={artwork} />
        </div>
      </Container>
    </section>
  )
}
