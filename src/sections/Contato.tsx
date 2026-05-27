import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wallet } from 'lucide-react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPix } from 'react-icons/fa6'
import { WHATSAPP_NUMBER, INSTAGRAM, EMAIL, ADDRESS_MAPS, ADDRESS_LINK, logoFundoRosa } from '../assets'

const cards = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    desc: 'Prefere agilidade? Me chame diretamente e agende sua consulta em poucos minutos.',
    value: '+55 (81) 98519-2492',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Ana%20Luiza,%20gostaria%20de%20agendar%20uma%20consulta!`,
    cta: 'Iniciar conversa',
    iconBg: '#DCFCE7',
    iconColor: '#25D366',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    desc: 'Acompanhe conteúdos sobre saúde mental feminina e bem-estar no meu perfil.',
    value: '@analuvieira.psi',
    href: INSTAGRAM,
    cta: 'Seguir no Instagram',
    iconBg: '#FDF0F7',
    iconColor: '#E1306C',
  },
  {
    id: 'email',
    label: 'E-mail',
    desc: 'Para parcerias, contatos institucionais ou dúvidas mais detalhadas.',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    cta: 'Enviar e-mail',
    iconBg: '#F0F4FF',
    iconColor: '#4285F4',
  },
]

export default function Contato() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section id="contato" className="section-py relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #F9ECF1 0%, #FCEEF4 50%, #F5E6EF 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #7B1C42 1px, transparent 1px)', backgroundSize: '26px 26px' }} />

      {/* Blobs */}
      <div className="absolute -top-24 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,227,235,0.65) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 -left-16 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,164,184,0.2) 0%, transparent 65%)' }} />

      <div className="section-container relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="relative text-center mb-8 sm:mb-10"
        >
          {/* Logo topo direito */}
          <img
            src={logoFundoRosa}
            alt="Ana Luiza | Psicóloga"
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-24 lg:h-28 w-auto rounded-2xl"
          />

          <span className="font-script text-2xl sm:text-3xl text-brand-rosa block mb-3">
            entre em contato
          </span>
          <h2 className="section-title mb-5">
            Vamos <span className="text-vinho-gradient">conversar?</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-brand-rosa" />
            <div className="w-2 h-2 rounded-full bg-brand-vinho/40" />
            <div className="w-1 h-1 rounded-full bg-brand-vinho" />
            <div className="w-2 h-2 rounded-full bg-brand-vinho/40" />
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-brand-rosa" />
          </div>
          <p className="section-subtitle max-w-lg mx-auto">
            Escolha o canal de sua preferência. Estou disponível para acolhê-la com atenção e sigilo.
          </p>
        </motion.div>

        {/* Painel de contato + Mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">

          {/* Painel unificado */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' as const, delay: 0.1 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-card border border-brand-blush/60 overflow-hidden"
          >
            {cards.map((card, i) => (
              <div
                key={card.id}
                className={`group relative flex items-center gap-5 px-6 py-6 sm:px-8 sm:py-7
                            transition-colors duration-300 hover:bg-brand-blush/20
                            ${i < cards.length - 1 ? 'border-b border-brand-blush/60' : ''}`}
              >
                {/* Acento lateral */}
                <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full bg-transparent
                                group-hover:bg-brand-vinho/40 transition-colors duration-300" />

                {/* Ícone */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring' as const, stiffness: 280, damping: 16 }}
                  className="relative flex-shrink-0 w-11 h-11"
                >
                  <span
                    className={`absolute inset-0 flex items-center justify-center text-white
                      ${card.id === 'instagram'
                        ? 'rounded-[28%] border border-white/20'
                        : 'rounded-full'}`}
                    style={{
                      background: card.id === 'instagram'
                        ? 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
                        : card.iconColor,
                    }}
                  >
                    {card.id === 'whatsapp'  && <FaWhatsapp size={22} />}
                    {card.id === 'instagram' && <FaInstagram size={22} />}
                    {card.id === 'email'     && <MdEmail size={22} />}
                  </span>
                </motion.div>

                {/* Texto */}
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="font-sans text-[11px] font-semibold tracking-widest uppercase text-brand-muted/70">
                    {card.label}
                  </span>
                  <span className="font-serif text-base text-brand-charcoal group-hover:text-brand-vinho transition-colors duration-300">
                    {card.value}
                  </span>
                  <span className="font-sans text-xs text-brand-muted font-light leading-relaxed">
                    {card.desc}
                  </span>
                </div>

                {/* CTA */}
                {card.href ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-sans font-medium
                               text-brand-vinho hover:text-brand-vinho-mid transition-colors duration-200
                               touch-manipulation group/link"
                  >
                    <span className="hidden sm:inline">{card.cta}</span>
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ) : (
                  <span className="flex-shrink-0 text-xs font-sans text-brand-muted/40">Em breve</span>
                )}
              </div>
            ))}

            {/* ── Valores & Pagamento ── */}
            <div className="relative overflow-hidden border-t border-brand-blush/60
                            bg-gradient-to-r from-brand-vinho/[0.06] to-brand-rosa/[0.04]
                            px-6 sm:px-8 py-5 flex items-center justify-between gap-4">
              {/* Glow decorativo */}
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(123,28,66,0.08) 0%, transparent 70%)' }} />

              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-sm font-semibold text-brand-charcoal">
                  Valores & Pagamento
                </span>
                <span className="flex items-center gap-2 font-sans text-xs text-brand-muted font-light flex-wrap">
                  <span className="flex items-center gap-1">
                    <FaPix size={11} className="text-teal-600" />
                    PIX
                  </span>
                  <span className="text-brand-muted/30">·</span>
                  <span>Cartão de crédito</span>
                </span>
              </div>

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Ana%20Luiza,%20gostaria%20de%20saber%20os%20valores%20das%20consultas!`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring' as const, stiffness: 320, damping: 18 }}
                className="flex-shrink-0 inline-flex items-center gap-2
                           bg-brand-vinho text-white font-sans font-medium text-xs
                           rounded-full px-4 py-2.5 shadow-button
                           hover:bg-brand-vinho-mid transition-colors duration-200
                           touch-manipulation"
              >
                <Wallet size={14} />
                Saber valores
              </motion.a>
            </div>

            {/* Rodapé do painel */}
            <div className="px-6 sm:px-8 py-4 bg-brand-blush/20 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-vinho/50 flex-shrink-0" />
              <span className="font-sans text-xs text-brand-muted font-light">
                Online & Presencial · Santo Amaro, Recife, PE · CRP 02/12731 · 50 min/sessão
              </span>
            </div>
          </motion.div>

          {/* Coluna direita: info + mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' as const, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Info do consultório */}
            <a
              href={ADDRESS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl sm:rounded-3xl bg-white shadow-card border border-brand-blush/60 px-6 py-4
                         flex items-start gap-3 group hover:border-brand-rosa/60 transition-colors duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-rosa flex-shrink-0 mt-1.5" />
              <div className="flex flex-col gap-0.5">
                <span className="font-serif text-base text-brand-vinho font-semibold group-hover:text-brand-vinho-mid transition-colors duration-200">
                  Nosso Consultório
                </span>
                <span className="font-sans text-xs text-brand-muted font-light leading-relaxed">
                  Rua Arnóbio Marques, 253 – Sala 1903 · Empresarial Eng. Camilo Brito<br />
                  Santo Amaro · Recife, PE · CRP 02/12731 · Sessões de 50 min
                </span>
              </div>
            </a>

          {/* Google Maps */}
          <div
            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-brand-blush/60 min-h-[360px]"
          >
            <iframe
              title="Localização do consultório – Rua Arnóbio Marques 253, Santo Amaro, Recife"
              src={ADDRESS_MAPS}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '360px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
