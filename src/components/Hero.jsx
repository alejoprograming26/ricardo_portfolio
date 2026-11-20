import { m } from 'framer-motion'
import { HERO_STATS } from '../data'
import AnimatedText from './ui/AnimatedText'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import Counter from './ui/Counter'
import FloatingOrbs from './ui/FloatingOrbs'
import { ArrowRight, Leaf, Shield, Apple, Flame } from './icons'

export default function Hero() {
  return (
    <section id="inicio" className="relative mx-auto max-w-6xl overflow-visible px-5 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <FloatingOrbs count={3} />

      <div className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Editorial wordmark kicker */}
        <div className="relative z-10 text-center lg:text-left">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--forest-deep)] dark:text-[var(--lime)]">
              <Leaf className="h-4 w-4" /> Nutrición Clínica & Deportiva
            </p>
          </Reveal>

          <h1 className="mt-7 font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.5rem]">
            <AnimatedText text="Come bien," className="block italic text-[var(--forest-deep)] dark:text-[var(--lime)]" />
            <AnimatedText
              text="vive mejor,"
              className="block font-display"
              delay={0.18}
            />
            <AnimatedText text="transforma tu cuerpo." className="block text-gradient" delay={0.36} />
          </h1>

          <Reveal delay={0.5}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)] lg:mx-0">
              Planes 100% personalizados, basados en evidencia, para que comas rico sin reglas
              absurdas y alcances tu mejor versión — de forma sostenible.
            </p>
          </Reveal>

          <Reveal delay={0.65}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start justify-center">
              <Button href="#contacto" pulse>
                Agendar mi primera cita
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="#servicios" variant="ghost">
                Ver planes de nutrición
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.8}>
            <ul className="mt-11 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-medium text-[var(--text-muted)] lg:justify-start">
              <li className="inline-flex items-center gap-2">
                <Shield className="h-4 w-4 text-[var(--forest)] dark:text-[var(--lime)]" /> Enfoque médico
              </li>
              <li className="inline-flex items-center gap-2">
                <Flame className="h-4 w-4 text-[var(--forest)] dark:text-[var(--lime)]" /> Sin dietas extremas
              </li>
              <li className="inline-flex items-center gap-2">
                <Apple className="h-4 w-4 text-[var(--forest)] dark:text-[var(--lime)]" /> Comida real
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Right: overlapping botanical composition */}
        <Reveal delay={0.25} className="relative z-10 mx-auto w-full max-w-md">
          <div className="relative">
            {/* Rotated accent card behind */}
            <m.div
              animate={{ rotate: [-2, 1, -2] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-3 -top-6 z-0 hidden w-44 rotate-3 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-soft)] p-4 backdrop-blur-md sm:block"
            >
              <p className="font-display text-4xl font-semibold text-gradient">
                <Counter to={8} suffix=" años" />
              </p>
              <p className="mt-1 text-xs text-[var(--text-muted)]">de experiencia clínica</p>
            </m.div>

            {/* Main panel */}
            <div className="relative z-10 rounded-[2.25rem] glass p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Resultados
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold tracking-tight">
                    Progreso real
                  </p>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--forest-12)] text-[var(--forest-deep)] dark:text-[var(--lime)]">
                  <Leaf className="h-6 w-6" />
                </span>
              </div>

              <div className="mt-7 flex items-center justify-center">
                <div className="relative grid h-44 w-44 place-items-center rounded-full bg-[conic-gradient(from_0deg,var(--lime-strong)_0deg,var(--forest)_300deg,rgba(148,163,184,0.18)_300deg,transparent_360deg)]">
                  <div className="grid h-36 w-36 place-items-center rounded-full bg-[var(--paper)] shadow-inner">
                    <div className="text-center">
                      <p className="font-display text-4xl font-semibold text-gradient">
                        <Counter to={98} suffix="%" />
                      </p>
                      <p className="text-xs font-medium text-[var(--text-muted)]">Éxito</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-sm font-medium text-[var(--text)]">
                de pacientes mantienen resultados al año
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { l: 'Adherencia', v: '92%' },
                  { l: 'Satisfacción', v: '98%' },
                ].map((row) => (
                  <div key={row.l}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="font-medium text-[var(--text-muted)]">{row.l}</span>
                      <span className="font-bold text-[var(--forest-deep)] dark:text-[var(--lime)]">{row.v}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--line)]">
                      <m.div
                        className="h-full origin-left rounded-full bg-gradient-to-r from-[var(--lime-strong)] to-[var(--forest)]"
                        style={{ width: row.l === 'Adherencia' ? '92%' : '98%' }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating mobile-friendly chip */}
            <m.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 left-1/2 flex w-max -translate-x-1/2 items-center gap-2.5 rounded-full glass px-4 py-2.5"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--lime)]" />
              <span className="text-sm font-semibold">+500 vidas transformadas</span>
            </m.div>
          </div>
        </Reveal>
      </div>

      {/* Bottom stat strip */}
      <Reveal delay={0.3} className="mt-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="rounded-3xl glass-soft px-6 py-6 text-center">
              <p className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-sm font-medium text-[var(--text-muted)]">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
