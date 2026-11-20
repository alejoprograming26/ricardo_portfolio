import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import FloatingOrbs from './ui/FloatingOrbs'
import { FAQ_ITEMS } from '../data'
import { WhatsApp, ArrowRight } from './icons'

function ChevronDown({ className = 'w-5 h-5', open = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} transition-transform duration-300 ${open ? 'rotate-180 text-[var(--forest)] dark:text-[var(--lime)]' : 'text-[var(--muted)]'}`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

const CATEGORIES = [
  { id: 'all', label: 'Todas las dudas' },
  { id: 'metodo', label: 'Alimentación y Método' },
  { id: 'modalidad', label: 'Modalidad y Consultas' },
  { id: 'tiempos', label: 'Tiempos y Resultados' },
]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openIndex, setOpenIndex] = useState(0) // Start with the 1st question open

  const filteredItems = activeCategory === 'all' 
    ? FAQ_ITEMS 
    : FAQ_ITEMS.filter((item) => item.category === activeCategory)

  const toggleQuestion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      <FloatingOrbs count={3} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--forest)]/25 bg-[var(--forest-10)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--forest-deep)] dark:text-[var(--lime)] mb-4 shadow-sm">
              Preguntas Frecuentes
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text)]">
              Claridad total,{' '}
              <span className="text-gradient">cero dudas</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-[var(--muted)] font-normal">
              Respuestas directas y basadas en ciencia sobre cómo trabajaremos juntos para transformar tu salud y rendimiento.
            </p>
          </Reveal>
        </div>

        {/* Filter Pills */}
        <Reveal delay={0.25}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id)
                    setOpenIndex(0)
                  }}
                  className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[var(--forest)] text-[var(--lime)] shadow-md shadow-[var(--forest)]/20 scale-[1.02]'
                      : 'glass hover:bg-[var(--forest-10)] text-[var(--muted)] hover:text-[var(--text)]'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <Reveal key={item.q} delay={idx * 0.04}>
                <div
                  className={`group rounded-2xl glass transition-all duration-300 border ${
                    isOpen
                      ? 'border-[var(--forest)]/40 bg-[var(--forest-10)]/40 shadow-lg shadow-[var(--forest)]/5'
                      : 'border-white/10 dark:border-white/5 hover:border-[var(--forest)]/25'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleQuestion(idx)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-[var(--text)] flex items-center gap-3">
                      <span className="flex-shrink-0 grid h-6 w-6 place-items-center rounded-full bg-[var(--forest-10)] text-xs font-mono font-bold text-[var(--forest-deep)] dark:text-[var(--lime)]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {item.q}
                    </span>
                    <div className="flex-shrink-0 p-1 rounded-full bg-[var(--surface)]/50 border border-white/10">
                      <ChevronDown open={isOpen} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[var(--muted)] leading-relaxed border-t border-[var(--forest)]/10">
                          {item.a}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Bottom Callout / Direct consultation */}
        <Reveal delay={0.4}>
          <GlassCard className="mt-12 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border border-[var(--forest)]/20 bg-gradient-to-r from-[var(--forest-10)]/30 via-transparent to-transparent">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--text)]">
                ¿Tienes una consulta específica o caso clínico?
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Escríbeme directamente a WhatsApp y evaluamos tu caso sin compromiso.
              </p>
            </div>
            <a
              href="https://wa.me/584120000000?text=Hola%20Dr.%20Ricardo,%20tengo%20una%20consulta%20sobre%20sus%20planes%20nutricionales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-[var(--forest)] px-6 py-3 font-semibold text-[var(--lime)] shadow-lg shadow-[var(--forest)]/25 transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <WhatsApp className="h-5 w-5" />
              <span>Chatear conmigo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
