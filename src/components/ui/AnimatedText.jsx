import { useMemo } from 'react'
import { m, useReducedMotion } from 'framer-motion'

/* AnimatedText: staggered word-by-word fade/slide entrance */
export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  stagger = 0.04,
  once = true,
}) {
  const reduce = useReducedMotion()
  
  const tokens = useMemo(() => {
    return String(text)
      .split(' ')
      .map((word, position) => ({
        id: `wrd-${position}-${word}`,
        word,
        isLast: false,
      }))
      .map((t, idx, arr) => ({
        ...t,
        isLast: idx === arr.length - 1,
      }))
  }, [text])

  return (
    <m.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-60px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {tokens.map((token) => (
        <span key={token.id} className="inline-block whitespace-pre">
          <m.span
            className="inline-block"
            variants={{
              hidden: reduce ? { opacity: 0 } : { opacity: 0, y: '0.4em' },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {token.word}
          </m.span>
          {!token.isLast ? ' ' : ''}
        </span>
      ))}
    </m.span>
  )
}
