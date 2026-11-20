import { m } from 'framer-motion'

/* GlassCard: glassmorphism container with optional hover shimmer + glow */
export default function GlassCard({
  children,
  className = '',
  shimmer = false,
  glow = false,
  hover = false,
  ...props
}) {
  return (
    <m.div
      className={[
        'relative overflow-hidden rounded-3xl glass',
        hover ? 'transition-transform duration-300' : '',
        glow ? 'hover:shadow-[0_0_50px_-8px_var(--glow)]' : '',
        className,
      ].join(' ')}
      {...(hover
        ? { whileHover: { y: -8 }, transition: { type: 'spring', stiffness: 300, damping: 22 } }
        : {})}
      {...props}
    >
      {/* Glass top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--forest)]/30 to-transparent" />

      {/* Hover shimmer sweep */}
      {shimmer && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -inset-y-2 left-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300" />
        </div>
      )}

      {children}
    </m.div>
  )
}
