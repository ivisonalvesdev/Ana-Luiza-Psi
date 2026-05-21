import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ambiente1, ambiente2, ambiente3, ambiente4 } from '../assets'

const fotos = [
  { src: ambiente1, alt: 'Consultório acolhedor em tons rosa' },
  { src: ambiente2, alt: 'Detalhe do espaço terapêutico' },
  { src: ambiente3, alt: 'Ambiente relaxante e confortável' },
  { src: ambiente4, alt: 'Sala de atendimento boutique' },
]

const diferenciais = [
  {
    icon: '🌿',
    label: 'Ambiente Seguro',
    desc: 'Privacidade total, sigilo profissional e acolhimento genuíno.',
  },
  {
    icon: '💻',
    label: 'Online & Presencial',
    desc: 'Atendimento adaptado à sua rotina, onde você estiver.',
  },
  {
    icon: '🕊️',
    label: 'Sem Julgamentos',
    desc: 'Um espaço livre para expressar o que não consegue dizer em outro lugar.',
  },
]

export default function Espaco() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="espaco" className="section-py bg-brand-cream-alt">
      <div className="section-container">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="font-script text-xl sm:text-2xl text-brand-rosa block mb-2 sm:mb-3">
            um lugar só seu
          </span>
          <h2 className="section-title mb-3 sm:mb-4">
            O <span className="text-vinho-gradient">Espaço</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Um ambiente pensado nos mínimos detalhes para que você se sinta segura, acolhida
            e completamente à vontade para ser quem realmente é.
          </p>
        </motion.div>

        {/* ── Galeria ──
            Mobile:  1 coluna, todas empilhadas
            sm:      2 colunas iguais
            lg:      grid assimétrico 3 cols / 2 rows (foto 1 grande)
        */}
        <div className="
          grid gap-3 sm:gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        ">
          {/* Foto 1 — destaque (maior no lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="relative group overflow-hidden rounded-2xl sm:rounded-3xl
                       lg:col-span-2 lg:row-span-2"
            style={{ aspectRatio: '4/3' }}
          >
            <img
              src={fotos[0].src}
              alt={fotos[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-vinho opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          </motion.div>

          {/* Fotos 2, 3, 4 */}
          {fotos.slice(1).map((foto, i) => (
            <motion.div
              key={foto.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: (i + 1) * 0.1 }}
              className="relative group overflow-hidden rounded-2xl sm:rounded-3xl"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-vinho opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Diferenciais — 1 col mobile, 3 col sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
        >
          {diferenciais.map((item) => (
            <div key={item.label} className="flex sm:flex-col items-start sm:items-center gap-4 sm:gap-2 sm:text-center">
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div>
                <h4 className="font-serif text-base sm:text-lg text-brand-charcoal mb-0.5 sm:mb-1">
                  {item.label}
                </h4>
                <p className="font-sans text-sm text-brand-muted font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
