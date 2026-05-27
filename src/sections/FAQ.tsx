import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../assets'

const perguntas = [
  {
    q: 'O atendimento online tem a mesma eficácia que o presencial?',
    a: 'Sim! Pesquisas clínicas confirmam que a terapia online é tão eficaz quanto a presencial, especialmente para ansiedade e questões emocionais. O importante é que você se sinta confortável e segura — e trabalhamos para criar esse ambiente mesmo à distância.',
  },
  {
    q: 'Com que frequência devo fazer as sessões?',
    a: 'O ideal é começar com sessões semanais, que permitem um processo mais contínuo e profundo. Conforme a evolução, podemos ajustar a frequência para quinzenal. Tudo é definido juntas, respeitando seu ritmo e necessidades.',
  },
  {
    q: 'Quais são as formas de pagamento? Atende por convênio?',
    a: 'Os atendimentos são particulares — aceito PIX e cartão de crédito. Você também pode solicitar recibo para reembolso junto ao seu plano de saúde, caso ele ofereça essa cobertura. Para saber os valores atuais, é só me chamar no WhatsApp!',
  },
  {
    q: 'Quanto tempo dura a terapia e cada sessão?',
    a: 'Cada sessão tem duração de 50 minutos. Já o processo terapêutico depende de cada pessoa e do objetivo: a TCC é uma abordagem de curto a médio prazo — muitas pessoas percebem melhoras significativas já nos primeiros meses. O progresso é acompanhado juntas e ajustado conforme sua evolução.',
  },
  {
    q: 'É seguro falar sobre tudo nas sessões?',
    a: 'Absolutamente. O sigilo profissional é um compromisso ético e legal. Tudo o que for compartilhado nas sessões permanece entre nós, garantindo liberdade total para se expressar sem receios.',
  },
  {
    q: 'Como é a primeira sessão?',
    a: 'A primeira sessão é um espaço de acolhimento e escuta. Conversamos sobre o que te trouxe até aqui, seus objetivos e expectativas. Não há cobranças — é o momento de nos conhecermos e você sentir se está confortável para iniciar o processo.',
  },
]

const nums = ['01', '02', '03', '04', '05', '06']

function Pergunta({ q, a, delay, num }: { q: string; a: string; delay: number; num: string }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.48, delay }}
      className={`group relative border-b border-brand-blush/60 last:border-0 transition-colors duration-300
                  ${open ? 'bg-gradient-to-r from-brand-blush/25 to-transparent' : 'hover:bg-brand-blush/10'}`}
    >
      {/* Acento lateral */}
      <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full transition-all duration-300
                       ${open ? 'bg-brand-vinho' : 'bg-transparent group-hover:bg-brand-rosa/50'}`} />

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 py-5 sm:py-6 text-left pl-4 pr-1 touch-manipulation"
        aria-expanded={open}
      >
        {/* Número */}
        <span className={`font-serif text-lg font-bold flex-shrink-0 transition-colors duration-300 leading-none
                          ${open ? 'text-vinho-gradient' : 'text-brand-vinho/25 group-hover:text-brand-vinho/50'}`}>
          {num}
        </span>

        <span className={`font-sans text-sm sm:text-base font-medium transition-colors duration-200 flex-1
                          ${open ? 'text-brand-vinho' : 'text-brand-charcoal group-hover:text-brand-vinho'}`}>
          {q}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' as const }}
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
            open
              ? 'bg-brand-vinho text-white shadow-button'
              : 'border border-brand-blush text-brand-vinho bg-brand-cream group-hover:bg-brand-blush'
          }`}
        >
          <ChevronDown size={14} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: 'easeInOut' as const }}
            className="overflow-hidden"
          >
            <p className="pb-5 sm:pb-6 pl-[52px] pr-10 font-sans text-sm text-brand-muted leading-relaxed font-light">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="faq" className="section-py relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #F2DCE6 0%, #F7E4EE 50%, #EDD4E2 100%)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #7B1C42 1px, transparent 1px)', backgroundSize: '26px 26px' }} />

      {/* Blobs */}
      <div className="absolute -top-20 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,227,235,0.65) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,164,184,0.25) 0%, transparent 65%)' }} />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 sm:mb-14"
          >
            <span className="font-script text-2xl sm:text-3xl text-brand-rosa block mb-3">
              tire suas dúvidas
            </span>
            <h2 className="section-title mb-5">
              Perguntas <span className="text-vinho-gradient">Frequentes</span>
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
            <p className="section-subtitle max-w-lg mx-auto">
              É natural ter dúvidas antes de dar o primeiro passo. Aqui estão as respostas
              para as perguntas que mais recebo.
            </p>
          </motion.div>

          {/* Accordion container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-card border border-brand-blush/60 px-4 sm:px-6 lg:px-8 overflow-hidden"
          >
            {perguntas.map((p, i) => (
              <Pergunta key={p.q} {...p} num={nums[i]} delay={i * 0.06} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-10 sm:mt-12"
          >
            <div className="relative bg-brand-vinho rounded-2xl sm:rounded-3xl px-7 py-8 sm:px-10 sm:py-10 overflow-hidden text-center">
              {/* Glow interno */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(232,164,184,0.18) 0%, transparent 60%)' }} />
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(192,64,112,0.4) 0%, transparent 70%)' }} />

              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex mb-3"
              >
                <MessageCircle size={24} className="text-brand-rosa" />
              </motion.div>

              <p className="font-script text-xl sm:text-2xl text-white/80 mb-2 relative z-10">
                ainda tem alguma dúvida?
              </p>
              <p className="font-sans text-sm text-white/55 font-light mb-6 relative z-10">
                Fale diretamente comigo pelo WhatsApp — responderei com atenção.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Ana%20Luiza,%20tenho%20uma%20dúvida%20e%20gostaria%20de%20conversar!`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-2 bg-white text-brand-vinho font-sans font-semibold
                           rounded-full px-7 py-3.5 text-sm shadow-button hover:bg-brand-blush
                           transition-all duration-300 hover:-translate-y-0.5"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
