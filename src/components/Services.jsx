import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import FloatingOrbs from './ui/FloatingOrbs'
import { SERVICES } from '../data'
import { ArrowRight, Check } from './icons'

export default function Services() {
  return (
    <section id="servicios" className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <FloatingOrbs count={3} />

      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--forest-deep)] dark:text-[var(--lime)]">
          Planes de nutrición
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Un servicio para <span className="text-gradient">cada objetivo</span>
        </h2>
        <p className="mt-4 text-base text-[var(--text-muted)]">
          Programas diseñados a medida, con acompañamiento real y ajustes continuos.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <GlassCard hover glow shimmer className="group flex h-full flex-col p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--forest-12)] text-[var(--forest-deep)] dark:text-[var(--lime)]">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{s.desc}</p>

              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-[var(--text)]">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-[var(--lime-25)] text-[var(--forest-deep)] dark:text-[var(--lime)]">
                      <Check className="h-3 w-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--forest-40)] bg-[var(--forest-8)] px-4 py-2.5 text-sm font-bold text-[var(--forest-deep)] transition-colors duration-300 hover:bg-[var(--forest)] hover:text-[var(--paper)] dark:text-[var(--lime)] dark:hover:text-[#0f1813]"
              >
                Solicitar info
                <ArrowRight className="h-4 w-4" />
              </a>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
