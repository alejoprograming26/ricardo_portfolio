import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import { TESTIMONIALS } from '../data'
import { Star, Quote } from './icons'

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={`star-${i}`} className="h-4 w-4 text-[var(--lime-strong)]" />
      ))}
    </div>
  )
}

function Card({ t }) {
  return (
    <GlassCard className="relative w-[300px] shrink-0 p-6 sm:w-[340px]">
      <Quote className="h-7 w-7 text-[var(--forest-50)] dark:text-[var(--lime-50)]" />
      <Stars n={t.stars} />
      <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">"{t.text}"</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--forest)] font-display font-bold text-[var(--paper)]">
          {t.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-bold">{t.name}</p>
          <p className="text-xs text-[var(--text-muted)]">{t.role}</p>
        </div>
      </div>
    </GlassCard>
  )
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Reveal className="mx-auto max-w-2xl px-5 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--forest-deep)] dark:text-[var(--lime)]">
          Experiencias
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Historias reales, <span className="text-gradient">cambios definitivos</span>
        </h2>
      </Reveal>

      {/* Marquee row */}
      <div className="group relative mt-14 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-5 pr-5 group-hover:[animation-play-state:paused]">
          {TESTIMONIALS.map((t) => (
            <Card key={`t1-${t.name}`} t={t} />
          ))}
          {TESTIMONIALS.map((t) => (
            <Card key={`t2-${t.name}`} t={t} />
          ))}
        </div>
        <div aria-hidden="true" className="flex shrink-0 animate-marquee gap-5 pr-5 group-hover:[animation-play-state:paused]">
          {TESTIMONIALS.map((t) => (
            <Card key={`t3-${t.name}`} t={t} />
          ))}
          {TESTIMONIALS.map((t) => (
            <Card key={`t4-${t.name}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
