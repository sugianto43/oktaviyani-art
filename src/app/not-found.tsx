import { Button } from '@/components/ui'

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-serif text-4xl font-light tracking-tight md:text-5xl">404</p>
      <p className="font-sans text-sm text-[var(--color-muted-fg)]">
        This page could not be found.
      </p>
      <Button href="/">Back to Home</Button>
    </div>
  )
}
