import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Waves, VenetianMask, Layers, BatteryLow, type LucideIcon } from 'lucide-react'

const dores = [
  {
    Icon: Waves,
    numero: '01',
    titulo: 'Ansiedade',
    desc: 'A sensação constante de que algo vai dar errado, o coração acelerado, a mente que não para — mesmo quando tudo parece bem por fora.',
  },
  {
    Icon: VenetianMask,
    numero: '02',
    titulo: 'Síndrome da Impostora',
    desc: 'Conquistou muito, mas uma voz interna sussurra que não merece, que logo vão descobrir que você "não é tão boa assim".',
  },
  {
    Icon: Layers,
    numero: '03',
    titulo: 'Sobrecarga de Papéis',
    desc: 'Mãe, profissional, filha, esposa, amiga — você carrega tantos chapéus que esqueceu quem é quando está sozinha.',
  },
  {
    Icon: BatteryLow,
    numero: '04',
    titulo: 'Exaustão Emocional',
    desc: 'O cansaço vai além do físico. É uma fadiga da alma, um vazio que nem o descanso consegue preencher completamente.',
  },
]

function DorCard({ Icon, numero, titulo, desc, delay }: {
  Icon: LucideIcon; numero: string; titulo: string; desc: string; delay: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  const baseShadow = '0 2px 0 rgba(123,28,66,0.10), 0 4px 0 rgba(123,28,66,0.07), 0 6px 0 rgba(123,28,66,0.04), 0 8px 0 rgba(123,28,66,0.02), 0 14px 28px rgba(123,28,66,0.09), inset 0 1px 0 rgba(255,255,255,0.85)'

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const { left, top, width, height } = card.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    const sx = x * 22
    const sy = y * 22
    card.style.transition = 'transform 0.08s ease'
    card.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.04)`
    card.style.boxShadow = `${baseShadow}, ${sx}px ${sy}px 32px rgba(232,164,184,0.45), ${sx * 0.5}px ${sy * 0.5}px 50px rgba(232,164,184,0.20)`
  }

  const onMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease'
    card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)'
    card.style.boxShadow = baseShadow
  }

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut' as const, delay, type: 'spring' as const, stiffness: 80 }}
      style={{ perspective: '900px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group relative bg-white/80 border border-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6
                   overflow-hidden transition-shadow duration-300 cursor-default"
        style={{
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          boxShadow: '0 2px 0 rgba(123,28,66,0.10), 0 4px 0 rgba(123,28,66,0.07), 0 6px 0 rgba(123,28,66,0.04), 0 8px 0 rgba(123,28,66,0.02), 0 14px 28px rgba(123,28,66,0.09), inset 0 1px 0 rgba(255,255,255,0.85)'
        }}
      >

      {/* Brilho de fundo no hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(123,28,66,0.06) 0%, transparent 70%)' }} />

      {/* Barra de acento lateral */}
      <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-brand-vinho/30 rounded-r-full
                      group-hover:bg-brand-vinho group-hover:top-0 group-hover:bottom-0
                      transition-all duration-300" />

      {/* Número decorativo */}
      <motion.span
        className="absolute top-4 right-5 font-serif text-4xl font-bold leading-none select-none
                   text-brand-vinho/10 group-hover:text-brand-vinho/18 transition-colors duration-300">
        {numero}
      </motion.span>

      {/* Ícone — linha fina, rosa escuro, leve e acolhedor */}
      <div className="flex justify-center mb-4">
        <motion.div
          whileHover={{ scale: 1.15, rotate: 6 }}
          transition={{ type: 'spring' as const, stiffness: 300, damping: 14 }}
          className="flex items-center justify-center w-11 h-11 rounded-2xl
                      bg-brand-vinho-mid/[0.08]
                      group-hover:bg-brand-vinho-mid/[0.14] transition-colors duration-300">
          <Icon size={24} strokeWidth={1.5} className="text-brand-vinho-mid" />
        </motion.div>
      </div>

      {/* Texto */}
      <h3 className="font-serif text-base sm:text-lg text-brand-vinho mb-2 leading-snug text-center
                     group-hover:text-brand-vinho-mid transition-colors duration-300">
        {titulo}
      </h3>
      <p className="font-sans text-xs sm:text-sm text-black/75 leading-relaxed font-light text-center">{desc}</p>

      {/* Linha decorativa inferior */}
      <div className="mt-4 mx-auto w-8 h-[1px] bg-brand-vinho/20 group-hover:w-16 group-hover:bg-brand-vinho/50 transition-all duration-500" />
      </div>
    </motion.div>
  )
}

export default function Dores() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section className="section-py relative z-[0]" style={{ background: 'linear-gradient(160deg, #F9ECF1 0%, #FCEEF4 50%, #F5E6EF 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: 'radial-gradient(circle, #7B1C42 1px, transparent 1px)', backgroundSize: '26px 26px' }} />

      {/* Blobs — contidos para não vazar da seção */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-28 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(247,227,235,0.7) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 -left-28 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(232,164,184,0.3) 0%, transparent 65%)' }} />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(192,64,112,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="section-container relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] as const }}
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


        {/* Bloco citação — entra com fade-up, como o restante do site */}
        <div className="mt-12 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative bg-brand-vinho rounded-2xl sm:rounded-3xl px-8 py-10 sm:px-14 sm:py-12
                            max-w-3xl mx-auto overflow-hidden border border-brand-rosa/25 shadow-button">

              {/* Glow de fundo */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(232,164,184,0.18) 0%, transparent 65%)' }} />

              {/* Aspas decorativas */}
              <span className="absolute -top-2 left-6 font-serif text-9xl text-white/8 leading-none select-none">"</span>
              <span className="absolute -bottom-6 right-6 font-serif text-9xl text-white/8 leading-none select-none">"</span>

              {/* Linha decorativa topo */}
              <div className="w-10 h-[2px] bg-gradient-to-r from-white/20 to-brand-rosa/70 mx-auto mb-6" />

              <p className="font-script text-xl sm:text-2xl lg:text-3xl text-brand-blush leading-snug text-center relative z-10">
                "A terapia não é um sinal de fraqueza — é o ato mais corajoso de se cuidar."
              </p>

              <div className="flex items-center justify-center gap-3 mt-5 relative z-10">
                <div className="h-px w-8 bg-white/20" />
                <span className="font-sans text-xs text-white/60 tracking-wide">Ana Luiza, Psicóloga Clínica</span>
                <div className="h-px w-8 bg-white/20" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
