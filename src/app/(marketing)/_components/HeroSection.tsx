'use client'

import { motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import type { Artwork } from '@/types'

interface HeroSectionProps {
  artwork: Artwork
}

export function HeroSection({ artwork }: HeroSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-label="Featured artwork" className="relative flex min-h-[90svh] flex-col">
      {/* Full-bleed image */}
      <div className="relative flex-1 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease: 'easeOut' }}
        >
          <motion.div
            className="h-full w-full"
            initial={{ scale: reduceMotion ? 1 : 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 1.1, ease: 'easeOut' }}
          >
            <Image
              src={artwork.image.src}
              alt={artwork.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>

        {/* Gradient overlay for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
        />

        {/* Artwork info */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-8 md:p-14"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.6,
            ease: 'easeOut',
          }}
        >
          <p className="font-sans text-xs tracking-widest uppercase text-white/70 mb-2">
            Featured Work
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-light tracking-tight text-white mb-2">
            {artwork.title}
          </h1>
          <p className="font-sans text-sm text-white/70">
            {artwork.medium} &mdash; {artwork.year}
          </p>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        className="flex items-center justify-between px-8 md:px-14 py-6 border-t border-[var(--color-border-default)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.9 }}
      >
        <p className="font-sans text-xs tracking-widest uppercase text-[var(--color-muted-fg)]">
          Oktaviyani — Contemporary Painting
        </p>
        <Link
          href="/works"
          className="font-sans text-xs tracking-widest uppercase border-b border-[var(--color-fg)] pb-0.5 hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
        >
          View All Works
        </Link>
      </motion.div>
    </section>
  )
}
