'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormValues } from '../schemas/contactSchema'
import { contactService } from '../services/contactService'

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

export function useContactForm(defaultArtworkReference?: string) {
  const [state, setState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      artworkReference: defaultArtworkReference ?? '',
      company: '',
    },
  })

  async function onSubmit(values: ContactFormValues) {
    if (state === 'loading') return

    setState('loading')
    setErrorMessage(null)

    try {
      await contactService.submit(values)
      setState('success')
      form.reset()
    } catch (error) {
      setState('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message.')
    }
  }

  return {
    form,
    state,
    errorMessage,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
