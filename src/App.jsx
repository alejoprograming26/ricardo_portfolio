import { lazy, Suspense } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Process from './components/Process'
import Services from './components/Services'
import ScrollToTop from './components/ui/ScrollToTop'
import SectionDivider from './components/ui/SectionDivider'
import useTheme from './hooks/useTheme'

const Transformations = lazy(() => import('./components/Transformations'))
const FAQ = lazy(() => import('./components/FAQ'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return <div className="min-h-[20rem]" />
}

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="noise relative min-h-screen">
        <div className="mesh-bg" />

        <Navbar theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Transformations />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
    </LazyMotion>
  )
}
