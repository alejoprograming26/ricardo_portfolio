import { m } from 'framer-motion'
import Reveal from './ui/Reveal'
import FloatingOrbs from './ui/FloatingOrbs'
import { PROCESS_STEPS } from '../data'

export default function Process() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <FloatingOrbs count={3} />

      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--forest-deep)] dark:text-[var(--lime)]">
          ¿Cómo funciona?
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Tu camino hacia el <span className="text-gradient">cambio real</span>
        </h2>
        <p className="mt-4 text-base text-[var(--text-muted)]">
          Un proceso claro, profesional y sin vueltas. Desde la evaluación hasta tus resultados.
        </p>
      </Reveal>

      <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Connecting line (desktop only) */}
        <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-[var(--forest-40)] to-transparent lg:block" />

        {PROCESS_STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.12}>
            <m.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative rounded-3xl glass p-6 text-center"
            >
              {/* Step number badge */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 grid h-7 w-7 place-items-center rounded-full bg-[var(--forest)] font-display text-[13px] font-bold text-[var(--paper)] shadow-[0_4px_16px_-2px_var(--glow)]">
                {i + 1}
              </span>

              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[var(--forest-12)] text-[var(--forest-deep)] transition-transform duration-300 group-hover:scale-110 dark:text-[var(--lime)]">
                <step.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{step.desc}</p>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-[inset_0_0_30px_-8px_var(--glow)]" />
            </m.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
