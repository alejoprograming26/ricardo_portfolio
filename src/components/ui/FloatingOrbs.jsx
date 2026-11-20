import { useMemo } from 'react'
import { m } from 'framer-motion'

/* FloatingOrbs: ambient animated botanical blobs.
   Colors come from theme CSS variables; animates GPU-friendly transforms only. */
export default function FloatingOrbs({ count = 3, className = '' }) {
  const orbs = useMemo(() => {
    // Deterministic pseudo-random values to avoid hydration mismatches and random re-calculations
    const seeds = [
      { size: 180, x: 15, y: 20, opacity: 0.18, duration: 26, varName: 'var(--lime)' },
      { size: 230, x: 75, y: 65, opacity: 0.14, duration: 32, varName: 'var(--forest)' },
      { size: 150, x: 45, y: 80, opacity: 0.16, duration: 28, varName: 'var(--lime)' },
      { size: 200, x: 85, y: 25, opacity: 0.12, duration: 34, varName: 'var(--forest)' },
      { size: 160, x: 25, y: 55, opacity: 0.15, duration: 30, varName: 'var(--lime)' },
    ]
    return Array.from({ length: count }).map((_, i) => {
      const seed = seeds[i % seeds.length]
      return {
        ...seed,
        delay: i * 2.5,
      }
    })
  }, [count])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {orbs.map((o, i) => (
        <m.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-2xl"
          style={{
            width: o.size,
            height: o.size,
            left: `${o.x}%`,
            top: `${o.y}%`,
            background: `radial-gradient(circle, color-mix(in srgb, ${o.varName} ${Math.round(o.opacity * 100)}%, transparent) 0%, transparent 72%)`,
          }}
          animate={{
            x: [0, 40 * (i % 2 === 0 ? 1 : -1), -30, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.12, 0.92, 1],
          }}
          transition={{
            duration: o.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: o.delay,
          }}
        />
      ))}
    </div>
  )
}
