'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Modal } from '@/components/ui'
import type { ArtworkImage as ArtworkImageType } from '@/types'

interface ArtworkLightboxProps {
  image: ArtworkImageType
  alt: string
  children: React.ReactNode
}

export function ArtworkLightbox({ image, alt, children }: ArtworkLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoomed, setZoomed] = useState(false)

  function handleClose() {
    setIsOpen(false)
    setZoomed(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View ${alt} full size`}
        className="block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
      >
        {children}
      </button>

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        ariaLabel={`${alt} — full size view`}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black/95 p-4"
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close full size view"
          className="fixed top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            ✕
          </span>
        </button>

        <button
          type="button"
          onClick={() => setZoomed((z) => !z)}
          aria-label={zoomed ? 'Zoom out' : 'Zoom in'}
          className={zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}
          style={{ touchAction: 'pinch-zoom' }}
        >
          <Image
            src={image.src}
            alt={alt}
            width={image.width}
            height={image.height}
            sizes="100vw"
            className="max-h-[90vh] w-auto object-contain transition-transform duration-300 ease-out"
            style={{ transform: zoomed ? 'scale(2)' : 'scale(1)' }}
          />
        </button>
      </Modal>
    </>
  )
}
