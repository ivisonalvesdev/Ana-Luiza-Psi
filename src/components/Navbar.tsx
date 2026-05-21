import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../assets'

const links = [
  { label: 'Início',      href: '#hero' },
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Contato',     href: '#contato' },
  { label: 'Resultados',  href: '#depoimentos' },
  { label: 'Dúvidas',     href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleLink = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 120)
  }

  return (
    <>
      {/* ── HEADER — barra de navegação slim, sem logo ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-soft py-2 sm:py-3' : 'bg-transparent py-3 sm:py-4'
        }`}
      >
        <div className="section-container flex items-center justify-end">

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleLink(l.href)}
                className={`font-sans text-sm font-semibold transition-colors duration-200 ${
                  scrolled
                    ? 'text-brand-charcoal hover:text-brand-vinho'
                    : 'text-white hover:text-brand-blush'
                }`}
              >
                {l.label}
              </button>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Ana%20Luiza,%20gostaria%20de%20agendar%20uma%20consulta!`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vinho !py-2.5 !px-5 !text-sm !min-h-0"
            >
              Agendar Consulta
            </a>
          </nav>

          {/* Tablet nav (md–lg) */}
          <nav className="hidden md:flex lg:hidden items-center gap-5">
            {links.slice(0, 3).map((l) => (
              <button
                key={l.href}
                onClick={() => handleLink(l.href)}
                className={`font-sans text-sm font-semibold transition-colors duration-200 ${
                  scrolled
                    ? 'text-brand-charcoal hover:text-brand-vinho'
                    : 'text-white hover:text-brand-blush'
                }`}
              >
                {l.label}
              </button>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Ana%20Luiza,%20gostaria%20de%20agendar%20uma%20consulta!`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vinho !py-2 !px-4 !text-xs !min-h-0"
            >
              Agendar
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 touch-manipulation transition-colors duration-200 ${scrolled ? 'text-brand-charcoal' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22 }}
              className="fixed top-0 left-0 right-0 z-40 glass shadow-soft pt-16 pb-7 px-5 flex flex-col gap-1"
            >
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleLink(l.href)}
                  className="text-left font-sans text-base font-medium text-brand-charcoal hover:text-brand-vinho py-3 border-b border-brand-blush transition-colors touch-manipulation"
                >
                  {l.label}
                </button>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Ana%20Luiza,%20gostaria%20de%20agendar%20uma%20consulta!`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-vinho mt-3 justify-center"
                onClick={() => setOpen(false)}
              >
                Agendar Consulta
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
