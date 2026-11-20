import { m } from 'framer-motion'

/* Button: primary CTA with hover shimmer + inner glow + press scale */
export default function Button({
  children,
  variant = 'primary',
  className = '',
  pulse = false,
  href,
  ...props
}) {
  const Comp = href ? m.a : m.button
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-tight overflow-hidden select-none transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lime-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]'

  const variants = {
    primary:
      'px-7 py-3.5 text-[var(--paper)] bg-[var(--forest)] shadow-[0_16px_40px_-18px_rgba(31,77,57,0.9)] hover:bg-[var(--forest-deep)] hover:-translate-y-0.5',
    ghost:
      'px-6 py-3 text-[var(--ink)] bg-transparent border border-[var(--line)] backdrop-blur-md hover:border-[var(--forest)] hover:bg-[var(--surface-soft)] dark:text-[var(--ink)]',
    outline:
      'px-6 py-3 text-[var(--forest-deep)] bg-transparent border border-[var(--forest)] hover:bg-[var(--glow)] dark:text-[var(--lime)]',
  }

  return (
    <Comp
      href={href}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={[base, variants[variant], pulse ? 'animate-pulseGlow' : '', className].join(' ')}
      {...props}
    >
      {/* inner glow */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* shimmer sweep */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute -inset-y-2 left-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
      </span>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Comp>
  )
}
