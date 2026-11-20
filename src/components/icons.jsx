/* Lightweight inline SVG icon set (stroke-based, currentColor) */
const S = ({ children, className = 'w-6 h-6', strokeWidth = 1.6, ...p }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...p}
  >
    {children}
  </svg>
)

export const Leaf = (p) => (
  <S {...p}>
    <path d="M11 20A7 7 0 0 1 4 13c0-6 5-11 16-11 0 11-5 16-11 16Z" />
    <path d="M5 19c4-3 7-6 9-11" />
  </S>
)

export const Bolt = (p) => (
  <S {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </S>
)

export const Heart = (p) => (
  <S {...p}>
    <path d="M19 5.5a4.5 4.5 0 0 0-7 0L12 6l-.5-.5a4.5 4.5 0 1 0-6.4 6.4L12 19l6.9-6.9A4.5 4.5 0 0 0 19 5.5Z" />
  </S>
)

export const Activity = (p) => (
  <S {...p}>
    <path d="M3 12h4l3 8 4-16 3 8h4" />
  </S>
)

export const Dumbbell = (p) => (
  <S {...p}>
    <path d="M6.5 6.5 17.5 17.5" />
    <path d="M3 7v10M21 7v10M6.5 4.5 4.5 6.5M19.5 17.5l2-2M17.5 19.5l2 2M6.5 19.5 4.5 17.5M17.5 4.5l2-2" />
  </S>
)

export const Apple = (p) => (
  <S {...p}>
    <path d="M12 7c2-2 5-2 6 1 1 3-1 8-3 10-1 1-2 1-2-1-1 2-3 2-4 1-2-2-3-7-2-10 1-2 3-2 5-1Z" />
    <path d="M12 7c0-2 1-4 2-4" />
  </S>
)

export const Calculator = (p) => (
  <S {...p}>
    <rect x="5" y="3" width="14" height="18" rx="2.5" />
    <path d="M9 7h6M9 11h0M12 11h0M15 11h0M9 15h0M12 15h0M15 15h0M9 18h6" />
  </S>
)

export const Chat = (p) => (
  <S {...p}>
    <path d="M21 12a8 8 0 0 1-11.3 7.3L4 21l1.7-5.7A8 8 0 1 1 21 12Z" />
  </S>
)

export const Star = ({ className = 'w-5 h-5', ...p }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...p}>
    <path d="m12 2 2.9 6.3 6.6.6-5 4.4 1.5 6.5L12 16.8 5.9 20.4l1.5-6.5-5-4.4 6.6-.6L12 2Z" />
  </svg>
)

export const Check = (p) => (
  <S {...p}>
    <path d="m4 12 5 5L20 6" />
  </S>
)

export const ArrowRight = (p) => (
  <S {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </S>
)

export const Menu = (p) => (
  <S {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </S>
)

export const Close = (p) => (
  <S {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </S>
)

export const WhatsApp = (p) => (
  <S {...p}>
    <path d="M21 11.5a8.5 8.5 0 0 1-12.2 7.7L3 21l1.9-5.6A8.5 8.5 0 1 1 21 11.5Z" />
    <path d="M9 9c0 4 3 6 6 6 .4-1 .2-2-.5-2.6l-1 .8-1.3-1.2.9-1c-.6-.7-1.6-.9-2.6-.5Z" />
  </S>
)

export const Calendar = (p) => (
  <S {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </S>
)

export const Instagram = (p) => (
  <S {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </S>
)

export const LinkedIn = (p) => (
  <S {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M7 10v7M7 7v0M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" />
  </S>
)

export const XSocial = (p) => (
  <S {...p}>
    <path d="M4 4l16 16M20 4 4 20" />
  </S>
)

export const Mail = (p) => (
  <S {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </S>
)

export const Phone = (p) => (
  <S {...p}>
    <path d="M5 4h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 16l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </S>
)

export const Shield = (p) => (
  <S {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </S>
)

export const Flame = (p) => (
  <S {...p}>
    <path d="M12 3c1 3 4 4 4 8a4 4 0 0 1-8 0c0-1 .5-2 1-2.5C8 10 9 7 12 3Z" />
    <path d="M12 20a3 3 0 0 0 3-3c0-2-2-2.5-3-5-1 2.5-3 3-3 5a3 3 0 0 0 3 3Z" />
  </S>
)

export const Dna = (p) => (
  <S {...p}>
    <path d="M7 4c0 4 10 4 10 8s-10 4-10 8M17 4c0 4-10 4-10 8s10 4 10 8M7 4h10M7 20h10M9 8h6M9 16h6" />
  </S>
)

export const User = (p) => (
  <S {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M5 20a7 7 0 0 1 14 0" />
  </S>
)

export const Clock = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </S>
)

export const Target = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </S>
)

export const Quote = (p) => (
  <S {...p}>
    <path d="M9 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2v-3H6v-2h3V7Z" fill="currentColor" stroke="none" />
    <path d="M20 7h-3a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2v-3h-2v-2h3V7Z" fill="currentColor" stroke="none" />
  </S>
)

export const Sun = (p) => (
  <S {...p} strokeWidth={1.8}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </S>
)

export const Moon = (p) => (
  <S {...p} strokeWidth={1.8}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
  </S>
)
