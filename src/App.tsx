import Navbar          from './components/Navbar'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Hero             from './sections/Hero'
import Dores            from './sections/Dores'
import Sobre            from './sections/Sobre'
import Depoimentos      from './sections/Depoimentos'
import FAQ              from './sections/FAQ'
import Contato          from './sections/Contato'
import Footer           from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Dores />
        <Sobre />
        <Contato />
        <Depoimentos />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
