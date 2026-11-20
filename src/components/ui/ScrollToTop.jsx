import { useState } from 'react'
import { m, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { ArrowRight } from '../icons'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setShow(y > 500)
  })

  return (
    <AnimatePresence>
      {show && (
        <m.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-[var(--forest)] text-[var(--paper)] shadow-[0_8px_30px_-4px_var(--glow)] animate-pulseGlow"
          aria-label="Volver arriba"
        >
          <ArrowRight className="h-5 w-5 rotate-[-90deg]" />
        </m.button>
      )}
    </AnimatePresence>
  )
}
