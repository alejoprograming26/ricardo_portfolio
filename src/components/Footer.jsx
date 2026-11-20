import { NAV_LINKS, SOCIALS } from '../data'
import { Leaf, Shield } from './icons'

export default function Footer() {
  return (
    <footer className="relative px-5 pb-10 pt-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] glass p-8 sm:p-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--forest)] text-[var(--lime)]">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
                Dr. Ricardo <em className="text-[var(--forest-deep)] not-italic dark:text-[var(--lime)]">Casanova</em>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
              Nutricionista clínico y deportivo. Transformo hábitos con ciencia, empatía y planes
              100% personalizados.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--forest-8)] text-[var(--text-muted)] transition-colors transition-transform hover:-translate-y-1 hover:border-[var(--forest)] hover:text-[var(--forest-deep)] dark:hover:text-[var(--lime)]"
                >
                  <s.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--forest-deep)] dark:text-[var(--lime)]">Navegación</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--forest-deep)] dark:hover:text-[var(--lime)]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--forest-deep)] dark:text-[var(--lime)]">Contacto</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--text-muted)]">
              <li>hola@ricardocasanova.com</li>
              <li>+52 55 5555 5555</li>
              <li>Ciudad de México · Online global</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-[var(--forest)] dark:text-[var(--lime)]" />
            La información es educativa y no sustituye diagnóstico médico profesional.
          </p>
          <p>© {new Date().getFullYear()} Dr. Ricardo Casanova. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
