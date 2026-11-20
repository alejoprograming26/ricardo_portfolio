import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import FloatingOrbs from './ui/FloatingOrbs'
import { WhatsApp, Calendar, Mail, Phone, Check, ArrowRight } from './icons'

const WHATSAPP_URL = 'https://wa.me/5215555555555?text=Hola%20Dr.%20Ricardo%2C%20quiero%20agendar%20una%20cita%20de%20nutrición.'
const CALENDLY_URL = 'https://calendly.com/ricardocasanova-nutricion/primera-cita'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <FloatingOrbs count={3} />
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--forest-deep)] dark:text-[var(--lime)]">
          Contacto & agendamiento
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Empecemos tu <span className="text-gradient">transformación</span>
        </h2>
        <p className="mt-4 text-base text-[var(--text-muted)]">
          Déjame tus datos o agenda directo por WhatsApp / Calendly. Te respondo en menos de 24 h.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* Form */}
        <Reveal>
          <GlassCard shimmer className="group p-7 sm:p-9">
            <AnimatePresence mode="wait">
              {sent ? (
                <m.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-[var(--lime-25)] text-[var(--forest-deep)] dark:text-[var(--lime)]">
                    <Check className="h-8 w-8" />
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold">¡Mensaje enviado!</h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Gracias {form.name || ''}. Te contactaré muy pronto. 💚
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-5 rounded-full border border-[var(--line)] px-5 py-2 text-sm font-bold text-[var(--text)] transition hover:bg-[var(--forest-10)]"
                  >
                    Enviar otro
                  </button>
                </m.div>
              ) : (
                <m.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input label="Nombre" value={form.name} onChange={update('name')} placeholder="Tu nombre" required />
                    <Input label="Email" type="email" value={form.email} onChange={update('email')} placeholder="tu@email.com" required />
                  </div>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-[var(--text)]">Tu objetivo</span>
                    <textarea
                      value={form.message}
                      onChange={update('message')}
                      rows={4}
                      placeholder="Cuéntame qué te gustaría lograr..."
                      className="w-full resize-none rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--glow)]"
                    />
                  </label>
                  <m.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--forest)] px-6 py-3.5 font-bold text-[var(--paper)] shadow-[0_16px_40px_-18px_var(--glow)]"
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute -inset-y-2 left-0 w-1/3 skew-x-12 bg-white/30 opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-shimmer" />
                    </span>
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Agendar mi cita
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </m.button>
                </m.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </Reveal>

        {/* Quick actions */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-3xl glass p-5 transition-transform hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--forest-12)] text-[var(--forest-deep)] transition-transform group-hover:scale-110 dark:text-[var(--lime)]">
                <WhatsApp className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="font-bold">Agendar por WhatsApp</p>
                <p className="text-sm text-[var(--text-muted)]">Respuesta inmediata</p>
              </div>
              <ArrowRight className="h-5 w-5 text-[var(--text-muted)] transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-3xl glass p-5 transition-transform hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--forest-12)] text-[var(--forest-deep)] transition-transform group-hover:scale-110 dark:text-[var(--lime)]">
                <Calendar className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="font-bold">Reservar en Calendly</p>
                <p className="text-sm text-[var(--text-muted)]">Elige tu horario</p>
              </div>
              <ArrowRight className="h-5 w-5 text-[var(--text-muted)] transition-transform group-hover:translate-x-1" />
            </a>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl glass-soft p-5">
                <Mail className="h-5 w-5 text-[var(--forest-deep)] dark:text-[var(--lime)]" />
                <p className="mt-2 text-sm font-bold">Email</p>
                <p className="text-xs text-[var(--text-muted)]">hola@ricardocasanova.com</p>
              </div>
              <div className="rounded-3xl glass-soft p-5">
                <Phone className="h-5 w-5 text-[var(--forest-deep)] dark:text-[var(--lime)]" />
                <p className="mt-2 text-sm font-bold">Teléfono</p>
                <p className="text-xs text-[var(--text-muted)]">+52 55 5555 5555</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Input({ label, type = 'text', value, onChange, placeholder, required }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--text)]">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--glow)]"
      />
    </label>
  )
}
