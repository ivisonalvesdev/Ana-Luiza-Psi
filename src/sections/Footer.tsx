import { motion } from 'framer-motion'
import { MapPin, Heart } from 'lucide-react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { logoRodape, INSTAGRAM, EMAIL, WHATSAPP_NUMBER, ADDRESS_LINK } from '../assets'

const navLinks = [
  { label: 'Início',      href: '#hero' },
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato',     href: '#contato' },
  { label: 'Dúvidas',     href: '#faq' },
]

const sociais = [
  { icon: FaWhatsapp,  href: `https://wa.me/${WHATSAPP_NUMBER}`, label: 'WhatsApp',  color: '#25D366', bg: 'rgba(37,211,102,0.15)' },
  { icon: FaInstagram, href: INSTAGRAM,                           label: 'Instagram', color: '#E1306C', bg: 'rgba(225,48,108,0.15)'  },
  { icon: MdEmail,     href: `mailto:${EMAIL}`,                  label: 'E-mail',    color: '#4285F4', bg: 'rgba(66,133,244,0.15)'  },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#5A1231' }} className="text-white relative overflow-hidden">

      {/* ── Faixa CTA ── */}
      <div className="relative py-16 sm:py-20 overflow-hidden"
        style={{ background: 'linear-gradient(155deg, #7B1C42 0%, #9B2855 50%, #7B1C42 100%)' }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '26px 26px' }} />

        {/* Blobs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,164,184,0.25) 0%, transparent 65%)' }} />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(192,64,112,0.3) 0%, transparent 65%)' }} />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center px-5 relative z-10"
        >
          {/* Anel decorativo */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-full border border-brand-rosa/40 mx-auto mb-6 flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="w-8 h-8 rounded-full border border-brand-rosa/60 flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-brand-rosa" />
            </motion.div>
          </motion.div>

          <p className="font-script text-2xl sm:text-3xl lg:text-4xl text-white/85 mb-3 sm:mb-4">
            Você merece se sentir bem.
          </p>
          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white mb-2">
            Dê o primeiro passo hoje.
          </h3>
          <p className="font-sans text-sm text-white/50 font-light mb-7">
            Atendimento online e presencial · Recife, PE
          </p>
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Ana%20Luiza,%20gostaria%20de%20agendar%20minha%20primeira%20consulta!`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring' as const, stiffness: 300, damping: 18 }}
            className="inline-flex items-center justify-center gap-2.5
                       bg-white text-brand-vinho font-sans font-semibold text-sm
                       rounded-full px-8 py-4 shadow-button min-h-[52px]
                       hover:bg-brand-blush transition-colors duration-300
                       w-full sm:w-auto touch-manipulation"
          >
            <FaWhatsapp size={18} />
            Agendar Minha Consulta
          </motion.a>
        </motion.div>
      </div>

      {/* Linha separadora com gradiente */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(232,164,184,0.3) 50%, transparent 100%)' }} />

      {/* ── Footer principal ── */}
      <div className="relative section-container py-12 sm:py-14">
        {/* Blob sutil de fundo */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(232,164,184,1) 0%, transparent 65%)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative z-10">

          {/* Logo + slogan */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-5">
            <motion.img
              src={logoRodape}
              alt="Ana Luiza | Psicóloga"
              className="h-11 sm:h-14 w-auto max-w-[270px] sm:max-w-[330px]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <p className="font-sans text-sm text-white/50 leading-relaxed font-light max-w-xs">
              Acolhimento, sensibilidade e compromisso com sua saúde emocional.
              Psicóloga Clínica especializada no cuidado da mulher moderna.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {sociais.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring' as const, stiffness: 300, damping: 16 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 touch-manipulation"
                  style={{ backgroundColor: s.bg, color: s.color, border: `1px solid ${s.color}33` }}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-serif text-sm sm:text-base text-white mb-4">Navegação</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="group flex items-center gap-2 font-sans text-sm text-white/45 hover:text-white
                               transition-colors duration-200 touch-manipulation"
                  >
                    <span className="w-0 h-[1px] bg-brand-rosa group-hover:w-3 transition-all duration-300" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-serif text-sm sm:text-base text-white mb-4">Contato</h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 font-sans text-sm text-white/45 hover:text-white transition-colors duration-200 group"
                >
                  <FaInstagram size={14} className="mt-0.5 flex-shrink-0 group-hover:text-[#E1306C] transition-colors duration-200" />
                  @analuvieira.psi
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-2.5 font-sans text-sm text-white/45 hover:text-white transition-colors duration-200 break-all group"
                >
                  <MdEmail size={15} className="mt-0.5 flex-shrink-0 group-hover:text-[#4285F4] transition-colors duration-200" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={ADDRESS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 font-sans text-sm text-white/45 hover:text-white transition-colors duration-200 group"
                >
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-brand-rosa/60 group-hover:text-brand-rosa transition-colors duration-200" />
                  <span>
                    Rua Arnóbio Marques, 253 – Sala 1903<br />
                    Santo Amaro · Recife, PE
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-sans text-white/25 text-center sm:text-left relative z-10">
          <span>© {new Date().getFullYear()} Ana Luiza | Psicóloga Clínica · CRP 02/12731</span>
          <span className="flex items-center gap-1.5">
            Desenvolvido com <Heart size={10} className="text-brand-rosa" fill="currentColor" /> por Ivison Dev
          </span>
        </div>
      </div>
    </footer>
  )
}
