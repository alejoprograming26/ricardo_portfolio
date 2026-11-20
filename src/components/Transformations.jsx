import { useState } from 'react'
import { m } from 'framer-motion'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import FloatingOrbs from './ui/FloatingOrbs'
import { TRANSFORMATIONS } from '../data'
import { ArrowRight, WhatsApp } from './icons'

function BeforeAfterCard({ data, index }) {
  const [pos, setPos] = useState(50)

  return (
    <GlassCard shimmer className="group overflow-hidden p-0 border border-[var(--forest)]/20 shadow-xl transition-all duration-300 hover:shadow-2xl">
      {/* Visual Header / Goal */}
      <div className="p-5 pb-4 border-b border-[var(--line)] flex items-center justify-between gap-3 bg-[var(--forest-10)]/20">
        <div>
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[var(--forest-deep)] dark:text-[var(--lime)]">
            {data.badge}
          </span>
          <h3 className="font-display text-lg font-bold text-[var(--text)] mt-0.5">
            {data.title}
          </h3>
        </div>
      </div>

      {/* Before / After Slider Canvas */}
      <div className="relative aspect-[4/3] w-full select-none overflow-hidden bg-neutral-900">
        {/* After Image (Background) */}
        <img
          src={data.after}
          alt={`${data.title} - ${data.afterLabel}`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md z-20 border border-white/10 shadow-sm">
          {data.afterLabel || 'Con estrategia'}
        </span>

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={data.before}
            alt={`${data.title} - ${data.beforeLabel}`}
            className="absolute inset-0 h-full w-full object-cover filter grayscale-[25%]"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md z-20 border border-white/10 shadow-sm">
            {data.beforeLabel || 'Punto inicial'}
          </span>
        </div>

        {/* Vertical Divider Handle */}
        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--forest)] text-[var(--lime)] shadow-lg border border-white/30 transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </span>
        </div>

        {/* Touch / Drag Range Control */}
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => {
            const v = parseFloat(e.target.value)
            if (Number.isFinite(v)) setPos(v)
          }}
          aria-label={`Comparar antes y después de ${data.title}`}
          className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      {/* Card Body & Metrics */}
      <div className="p-5">
        <p className="text-xs text-[var(--muted)] leading-relaxed min-h-[2.5rem]">
          {data.tagline}
        </p>

        {/* Key Metrics */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {data.metrics.map((mMetric, i) => (
            <m.div
              key={mMetric.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.4 }}
              className="rounded-xl bg-[var(--surface)]/50 border border-white/5 px-2 py-2 text-center"
            >
              <p className="font-display text-xs sm:text-sm font-bold text-gradient">
                {mMetric.value}
              </p>
              <p className="text-[10px] text-[var(--muted)] mt-0.5 leading-tight">
                {mMetric.label}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </GlassCard>
  )
}

export default function Transformations() {
  return (
    <section id="resultados" className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 overflow-hidden">
      <FloatingOrbs count={3} />

      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--forest)]/25 bg-[var(--forest-10)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--forest-deep)] dark:text-[var(--lime)] mb-4 shadow-sm">
          Resultados y Objetivos
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text)]">
          El impacto de un <span className="text-gradient">plan estructurado</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--muted)]">
          Arrastra el control en cada objetivo para visualizar la evolución entre un enfoque improvisado y uno respaldado por ciencia y constancia.
        </p>
      </Reveal>

      {/* Grid of Interactive Slider Cards */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TRANSFORMATIONS.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.1}>
            <BeforeAfterCard data={t} index={i} />
          </Reveal>
        ))}
      </div>

      {/* Single Unified CTA at the bottom */}
      <Reveal delay={0.35}>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl glass p-6 sm:p-8 border border-[var(--forest)]/25 bg-gradient-to-r from-[var(--forest-10)]/40 via-transparent to-transparent shadow-lg">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--text)]">
              ¿Identificaste tu meta principal?
            </h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Conversemos sobre tu punto de partida y tracemos tu estrategia nutricional personalizada.
            </p>
          </div>
          <a
            href="https://wa.me/584120000000?text=Hola%20Dr.%20Ricardo,%20quiero%20iniciar%20mi%20plan%20nutricional%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-[var(--forest)] px-7 py-3.5 font-semibold text-[var(--lime)] shadow-lg shadow-[var(--forest)]/25 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <WhatsApp className="h-5 w-5" />
            <span>Consultar mi objetivo</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
