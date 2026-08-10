import type { Exhibition } from '@/types'

interface ExhibitionItemProps {
  exhibition: Exhibition
}

export function ExhibitionItem({ exhibition }: ExhibitionItemProps) {
  return (
    <li className="flex flex-col gap-2 border-b border-[var(--color-border-default)] py-8 md:flex-row md:gap-10">
      <span className="font-serif text-2xl font-light text-[var(--color-muted-fg)] md:w-24 md:shrink-0">
        {exhibition.year}
      </span>

      <div className="flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-serif text-xl font-light tracking-tight">{exhibition.title}</h3>
          <span className="font-sans text-xs tracking-widest uppercase text-[var(--color-muted-fg)]">
            {exhibition.type === 'solo' ? 'Solo' : 'Group'}
          </span>
        </div>

        <p className="mt-1 font-sans text-sm text-[var(--color-muted-fg)]">
          {exhibition.venue}, {exhibition.location}
        </p>

        {exhibition.description ? (
          <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-[var(--color-muted-fg)]">
            {exhibition.description}
          </p>
        ) : null}
      </div>
    </li>
  )
}
