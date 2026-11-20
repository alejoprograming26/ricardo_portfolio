import { useState } from 'react'
import { m } from 'framer-motion'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import FloatingOrbs from './ui/FloatingOrbs'
import { TRANSFORMATIONS } from '../data'

function BeforeAfter({ data }) {
  const [pos, setPos] = useState(50)

  return (
    <GlassCard shimmer className="group overflow-hidden p-0">
      <div className="relative aspect-[4/3] w-full select-none overflow-hidden">
        <img src={data.after} alt={`${data.name} después`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" draggable={false} />
        <span className="absolute right-3 top-3 rounded-full bg-[#1b2a22]/70 px-3 py-1 text-xs font-semibold text-[var(--paper)] backdrop-blur-md z-20 dark:bg-black/40 dark:text-white">
          Después
        </span>

        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={data.before} alt={`${data.name} antes`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" draggable={false} />
          <span className="absolute left-3 top-3 rounded-full bg-[#1b2a22]/70 px-3 py-1 text-xs font-semibold text-[var(--paper)] backdrop-blur-md dark:bg-black/40 dark:text-white">
            Antes
          </span>
        </div>

        {/* Handle */}
        <div className="absolute inset-y-0 z-10 w-0.5 bg-[var(--paper)] shadow-[0_0_12px_rgba(0,0,0,0.3)]" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--forest)] text-[var(--lime)] shadow-lg">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => {
            const v = parseFloat(e.target.value)
            if (Number.isFinite(v)) setPos(v)
          }}
          aria-label="Comparar antes y después"
          className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold tracking-tight">{data.name}</h3>
          <span className="rounded-full bg-[var(--forest-12)] px-3 py-1 text-xs font-semibold text-[var(--forest-deep)] dark:text-[var(--lime)]">
            {data.goal}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {data.metrics.map((mMetric, i) => (
            <m.div
              key={mMetric.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="rounded-2xl bg-[var(--forest-8)] border border-[var(--line)] px-2 py-2.5 text-center"
            >
              <p className="font-display text-base font-semibold text-gradient">{mMetric.value}</p>
              <p className="text-[10px] leading-tight text-[var(--text-muted)]">{mMetric.label}</p>
            </m.div>
          ))}
        </div>
      </div>
    </GlassCard>
  )
}

export default function Transformations() {
  return (
    <section id="transformaciones" className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <FloatingOrbs count={3} />
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--forest-deep)] dark:text-[var(--lime)]">
          Casos de éxito
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Resultados <span className="text-gradient">reales, duraderos</span>
        </h2>
        <p className="mt-4 text-base text-[var(--text-muted)]">
          Arrastra el control para ver la transformación. Cada caso es único y profesional.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TRANSFORMATIONS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <BeforeAfter data={t} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
