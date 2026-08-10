'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import type { ArtworkImage as ArtworkImageType } from '@/types'

interface ArtworkImageProps {
  image: ArtworkImageType
  alt: string
  priority?: boolean
  className?: string
  sizes?: string
}

export function ArtworkImage({
  image,
  alt,
  priority = false,
  className = '',
  sizes = '100vw',
}: ArtworkImageProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.8, ease: 'easeOut' }}
    >
      <motion.div
        initial={{ scale: reduceMotion ? 1 : 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.9, ease: 'easeOut' }}
      >
        <Image
          src={image.src}
          alt={alt}
          width={image.width}
          height={image.height}
          priority={priority}
          sizes={sizes}
          placeholder={image.blurDataUrl ? 'blur' : 'empty'}
          blurDataURL={image.blurDataUrl}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  )
}
