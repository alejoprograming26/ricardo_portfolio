import { m, useReducedMotion } from 'framer-motion'

/* Reveal: scroll-driven entrance animation (fade + slide up) */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
  as = 'div',
  once = true,
}) {
  const reduce = useReducedMotion()
  const MotionTag = m[as] || m.div
  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
