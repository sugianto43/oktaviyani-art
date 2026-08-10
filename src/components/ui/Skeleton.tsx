interface SkeletonProps {
  className?: string
  style?: React.CSSProperties
}

export function Skeleton({ className = '', style }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded bg-[var(--color-border-default)] ${className}`}
      style={style}
    />
  )
}
