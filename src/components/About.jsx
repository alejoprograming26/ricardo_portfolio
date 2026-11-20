import { m } from 'framer-motion'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import { ABOUT_CREDENTIALS } from '../data'
import { Check, Shield, Leaf } from './icons'

export default function About() {
  return (
    <section id="sobre-mi" className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* Left: photo + botanical badges */}
        <Reveal className="relative mx-auto w-full max-w-sm sm:max-w-md">
          <GlassCard className="p-3">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <img
                src="/images/dr-ricardo-casanova.jpg"
                alt="Dr. Ricardo Casanova, nutricionista clínico y deportivo"
                className="aspect-[4/5] w-full object-cover object-top"
                width={640}
                height={800}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2a22]/70 via-transparent to-transparent" />
            </div>
          </GlassCard>

          {/* Secondary doctor image */}
          <m.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 right-3 w-32 overflow-hidden rounded-2xl border-4 border-[var(--paper)] shadow-2xl sm:right-6"
          >
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=70"
              alt="Dr. Ricardo Casanova en consulta clínica"
              className="aspect-square w-full object-cover"
              width={320}
              height={320}
              loading="lazy"
              decoding="async"
            />
          </m.div>

          {/* Floating credential badges */}
          <m.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-5 -left-3 rounded-2xl glass px-4 py-3 sm:-left-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--forest-12)] text-[var(--forest-deep)] dark:text-[var(--lime)]">
                <Shield className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold leading-tight">Certificado ISSN</p>
                <p className="text-xs text-[var(--text-muted)]">Nutrición Deportiva</p>
              </div>
            </div>
          </m.div>

          <m.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-2xl glass px-4 py-3 sm:block"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--forest-12)] text-[var(--forest-deep)] dark:text-[var(--lime)]">
                <Leaf className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold leading-tight">+500 vidas</p>
                <p className="text-xs text-[var(--text-muted)]">transformadas</p>
              </div>
            </div>
          </m.div>
        </Reveal>

        {/* Right: bio */}
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--forest-deep)] dark:text-[var(--lime)]">
              Sobre mí
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Nutrición que <span className="text-gradient">respeta tu cuerpo</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-[var(--text)]">
              Soy el <strong className="text-[var(--forest-deep)] dark:text-[var(--lime)]">Dr. Ricardo Casanova</strong>. Mi filosofía es simple:
              no existen las dietas mágicas, sino decisiones coherentes basadas en ciencia. Trabajo
              desde lo clínico y lo deportivo para construir planes que se adaptan a tu vida real,
              no al revés.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
              Cada persona es un sistema único. Por eso analizo tu composición corporal, tus
              objetivos y tu rutina antes de escribir una sola recomendación.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {ABOUT_CREDENTIALS.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-2.5 rounded-2xl bg-[var(--forest-8)] border border-[var(--line)] px-4 py-3 text-sm font-medium text-[var(--text)]"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--lime-25)] text-[var(--forest-deep)] dark:text-[var(--lime)]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
