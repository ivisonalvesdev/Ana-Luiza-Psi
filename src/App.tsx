import { useState } from 'react'
import Navbar          from './components/Navbar'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Preloader        from './components/Preloader'
import SectionReveal    from './components/SectionReveal'
import Hero             from './sections/Hero'
import Dores            from './sections/Dores'
import Sobre            from './sections/Sobre'
import Depoimentos      from './sections/Depoimentos'
import FAQ              from './sections/FAQ'
import Contato          from './sections/Contato'
import Footer           from './sections/Footer'

export default function App() {
  // Vira true quando o preloader termina → dispara a entrada do Hero
  const [revealed, setRevealed] = useState(false)

  return (
    <>
      <Preloader onDone={() => setRevealed(true)} />
      <Navbar />
      <main>
        <Hero start={revealed} />
        <SectionReveal><Dores /></SectionReveal>
        <SectionReveal><Sobre /></SectionReveal>
        <SectionReveal><Contato /></SectionReveal>
        <SectionReveal><Depoimentos /></SectionReveal>
        <SectionReveal><FAQ /></SectionReveal>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
