import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/* Counter: animates a number up when scrolled into view */
export default function Counter({ to, suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(to * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  const display = Number.isInteger(to) ? Math.round(val) : val.toFixed(1)
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
