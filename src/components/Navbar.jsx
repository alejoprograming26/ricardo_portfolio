import { useState, useEffect } from 'react'
import { m, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { NAV_LINKS } from '../data'
import { Menu, Close, Leaf, Sun, Moon } from './icons'

export default function Navbar({ theme = 'dark', onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 30)
  })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-6">
      <div
        className={[
          'mt-3 flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-shadow transition-colors duration-300 sm:rounded-full sm:px-5',
          'glass',
          scrolled ? 'shadow-[0_8px_40px_-16px_var(--glow)]' : '',
        ].join(' ')}
      >
        <a href="#inicio" className="flex shrink-0 items-center gap-2.5 pr-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--forest)] text-[var(--lime)] shadow-lg">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="hidden font-display text-lg font-semibold tracking-tight sm:block">
            Dr. Ricardo <em className="text-[var(--forest-deep)] not-italic dark:text-[var(--lime)]">Casanova</em>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 rounded-full bg-[var(--forest-10)] opacity-0 transition-opacity hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--forest-10)] text-[var(--text)] transition-colors hover:bg-[var(--forest-20)]"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a
            href="#contacto"
            className="hidden whitespace-nowrap items-center gap-2 rounded-full bg-[var(--forest)] px-5 py-2.5 text-sm font-bold text-[var(--paper)] shadow-[0_8px_24px_-8px_var(--glow)] transition-transform hover:-translate-y-0.5 dark:text-[#0f1813] sm:inline-flex"
          >
            Agendar Cita
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--forest-10)] text-[var(--text)] lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute left-4 right-4 top-20 rounded-3xl glass p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-[var(--text)] transition-colors hover:bg-[var(--forest-10)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl bg-[var(--forest)] px-4 py-3 text-center text-base font-bold text-[var(--paper)]"
                >
                  Agendar Cita
                </a>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
