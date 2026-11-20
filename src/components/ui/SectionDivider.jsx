/* SectionDivider: subtle glowing line between sections */
export default function SectionDivider({ className = '' }) {
  return (
    <div className={`pointer-events-none mx-auto max-w-6xl px-5 ${className}`} aria-hidden="true">
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--forest-40)] to-transparent" />
    </div>
  )
}
