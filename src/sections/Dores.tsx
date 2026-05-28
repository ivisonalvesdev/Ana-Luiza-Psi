import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const dores = [
  {
    icon: '🌊',
    numero: '01',
    titulo: 'Ansiedade',
    desc: 'A sensação constante de que algo vai dar errado, o coração acelerado, a mente que não para — mesmo quando tudo parece bem por fora.',
  },
  {
    icon: '🎭',
    numero: '02',
    titulo: 'Síndrome da Impostora',
    desc: 'Conquistou muito, mas uma voz interna sussurra que não merece, que logo vão descobrir que você "não é tão boa assim".',
  },
  {
    icon: '⚖️',
    numero: '03',
    titulo: 'Sobrecarga de Papéis',
    desc: 'Mãe, profissional, filha, esposa, amiga — você carrega tantos chapéus que esqueceu quem é quando está sozinha.',
  },
  {
    icon: '🕯️',
    numero: '04',
    titulo: 'Exaustão Emocional',
    desc: 'O cansaço vai além do físico. É uma fadiga da alma, um vazio que nem o descanso consegue preencher completamente.',
  },
]

function DorCard({ icon, numero, titulo, desc, delay }: {
  icon: string; numero: string; titulo: string; desc: string; delay: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const angle =
      Math.atan2(e.clientY - (top + height / 2), e.clientX - (left + width / 2)) *
        (180 / Math.PI) + 90
    el.style.setProperty('--mouse-angle', `${angle}deg`)
  }

  return (
    <motion.div
      ref={(el: HTMLDivElement | null) => { cardRef.current = el; inViewRef(el) }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut' as const, delay, type: 'spring' as const, stiffness: 80 }}
      whileHover={{ y: -10, scale: 1.03 }}
      onMouseMove={onMove}
      className="card-spotlight group relative bg-brand-vinho rounded-2xl sm:rounded-3xl p-5 sm:p-6
                 shadow-button overflow-hidden hover:shadow-glow transition-shadow duration-300 cursor-default"
    >
      {/* Scan line */}
      <div className="scan-line-hover" />

      {/* Brilho de fundo no hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(232,164,184,0.12) 0%, transparent 70%)' }} />

      {/* Barra de acento lateral */}
      <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-brand-rosa/50 rounded-r-full
                      group-hover:bg-brand-rosa group-hover:top-0 group-hover:bottom-0
                      transition-all duration-300" />

      {/* Número decorativo */}
      <motion.span
        className="absolute top-4 right-5 font-serif text-4xl font-bold leading-none select-none
                   text-white/10 group-hover:text-white/18 transition-colors duration-300">
        {numero}
      </motion.span>

      {/* Ícone */}
      <div className="flex justify-center mb-4">
        <motion.div
          whileHover={{ scale: 1.15, rotate: 6 }}
          transition={{ type: 'spring' as const, stiffness: 300, damping: 14 }}
          className="flex items-center justify-center w-11 h-11 rounded-2xl
                      bg-white/10 text-xl
                      group-hover:bg-white/18 transition-colors duration-300">
          {icon}
        </motion.div>
      </div>

      {/* Texto */}
      <h3 className="font-serif text-base sm:text-lg text-brand-blush mb-2 leading-snug text-center
                     group-hover:text-white transition-colors duration-300">
        {titulo}
      </h3>
      <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed font-light text-center">{desc}</p>

      {/* Linha decorativa inferior */}
      <div className="mt-4 mx-auto w-8 h-[1px] bg-brand-rosa/30 group-hover:w-16 group-hover:bg-brand-rosa/60 transition-all duration-500" />
    </motion.div>
  )
}

export default function Dores() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section className="section-py relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #F9ECF1 0%, #FCEEF4 50%, #F5E6EF 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: 'radial-gradient(circle, #7B1C42 1px, transparent 1px)', backgroundSize: '26px 26px' }} />

      {/* Blobs */}
      <div className="absolute -top-28 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,227,235,0.7) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 -left-28 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,164,184,0.3) 0%, transparent 65%)' }} />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(192,64,112,0.04) 0%, transparent 70%)' }} />

      <div className="section-container relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="font-script text-2xl sm:text-3xl text-brand-rosa block mb-3"
          >
            você se reconhece aqui?
          </motion.span>

          <h2 className="section-title mb-5">
            Você não precisa carregar o{' '}
            <span className="text-vinho-gradient">peso do mundo sozinha.</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-brand-rosa" />
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 rounded-full bg-brand-vinho/40"
            />
            <div className="w-1 h-1 rounded-full bg-brand-vinho" />
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="w-2 h-2 rounded-full bg-brand-vinho/40"
            />
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-brand-rosa" />
          </div>

          <p className="section-subtitle max-w-xl mx-auto">
            Muitas mulheres chegam ao consultório sentindo que algo está "errado"  mas na
            verdade, estão simplesmente sobrecarregadas e precisam de um espaço seguro para respirar.
          </p>
        </motion.div>

        {/* Grid 2×2 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {dores.map((d, i) => (
            <DorCard key={d.titulo} {...d} delay={i * 0.12} />
          ))}
        </div>

        {/* Bloco citação premium */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 sm:mt-16"
        >
          <div className="relative bg-brand-cream rounded-2xl sm:rounded-3xl px-8 py-10 sm:px-14 sm:py-12
                          max-w-3xl mx-auto overflow-hidden border border-brand-blush shadow-card">

            {/* Glow de fundo */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl"
              style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(247,227,235,0.6) 0%, transparent 65%)' }} />

            {/* Aspas decorativas */}
            <span className="absolute -top-2 left-6 font-serif text-9xl text-brand-vinho/8 leading-none select-none">"</span>
            <span className="absolute -bottom-6 right-6 font-serif text-9xl text-brand-vinho/8 leading-none select-none">"</span>

            {/* Linha decorativa topo */}
            <div className="w-10 h-[2px] bg-gradient-to-r from-brand-vinho/20 to-brand-rosa/60 mx-auto mb-6" />

            <p className="font-script text-xl sm:text-2xl lg:text-3xl text-brand-vinho leading-snug text-center relative z-10">
              "A terapia não é um sinal de fraqueza — é o ato mais corajoso de se cuidar."
            </p>

            <div className="flex items-center justify-center gap-3 mt-5 relative z-10">
              <div className="h-px w-8 bg-brand-vinho/20" />
              <span className="font-sans text-xs text-brand-muted tracking-wide">Ana Luiza, Psicóloga Clínica</span>
              <div className="h-px w-8 bg-brand-vinho/20" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
