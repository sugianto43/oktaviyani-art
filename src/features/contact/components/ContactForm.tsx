'use client'

import { useContactForm } from '../hooks/useContactForm'

interface ContactFormProps {
  defaultArtworkReference?: string
}

const INPUT_CLASSES =
  'w-full border-b border-[var(--color-border-default)] bg-transparent py-2 font-sans text-sm outline-none transition-colors focus:border-[var(--color-fg)]'

const LABEL_CLASSES = 'font-sans text-xs tracking-widest uppercase text-[var(--color-muted-fg)]'

export function ContactForm({ defaultArtworkReference }: ContactFormProps) {
  const { form, state, errorMessage, onSubmit } = useContactForm(defaultArtworkReference)
  const {
    register,
    formState: { errors },
  } = form

  if (state === 'success') {
    return (
      <div role="status" className="py-8">
        <p className="font-serif text-xl font-light">Thank you — your message is on its way.</p>
        <p className="mt-2 font-sans text-sm text-[var(--color-muted-fg)]">
          I&apos;ll get back to you as soon as I can.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {/* Honeypot: hidden from users and assistive tech, present for bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register('company')} />
      </div>

      <div>
        <label htmlFor="name" className={LABEL_CLASSES}>
          Name
        </label>
        <input
          id="name"
          type="text"
          className={INPUT_CLASSES}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name')}
        />
        {errors.name ? (
          <p id="name-error" className="mt-1 font-sans text-xs text-red-700">
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className={LABEL_CLASSES}>
          Email
        </label>
        <input
          id="email"
          type="email"
          className={INPUT_CLASSES}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
        />
        {errors.email ? (
          <p id="email-error" className="mt-1 font-sans text-xs text-red-700">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="subject" className={LABEL_CLASSES}>
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className={INPUT_CLASSES}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          {...register('subject')}
        />
        {errors.subject ? (
          <p id="subject-error" className="mt-1 font-sans text-xs text-red-700">
            {errors.subject.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="artworkReference" className={LABEL_CLASSES}>
          Artwork Reference{' '}
          <span className="normal-case text-[var(--color-muted-fg)]">(optional)</span>
        </label>
        <input
          id="artworkReference"
          type="text"
          className={INPUT_CLASSES}
          {...register('artworkReference')}
        />
      </div>

      <div>
        <label htmlFor="message" className={LABEL_CLASSES}>
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={INPUT_CLASSES}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 font-sans text-xs text-red-700">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {state === 'error' && errorMessage ? (
        <p role="alert" className="font-sans text-sm text-red-700">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="border border-[var(--color-fg)] px-6 py-3 font-sans text-xs tracking-widest uppercase transition-colors hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-fg)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state === 'loading' ? 'Sending…' : 'Send an Inquiry'}
      </button>
    </form>
  )
}
