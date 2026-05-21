import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Sparkles } from 'lucide-react'
import { fotoSobre, WHATSAPP_NUMBER } from '../assets'

const diferenciais = [
  'Especialista em saúde mental feminina',
  'Terapia Cognitivo-Comportamental (TCC)',
  'Pós-Graduada em Neuropsicologia',
  'Oficinas Terapêuticas e Palestras',
  'Atendimento online e presencial em PE',
  'Ética e sigilo — CRP 12731 PE',
]

const tags = ['TCC', 'Neuropsicologia', 'Online', 'Presencial · PE']

export default function Sobre() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section
      id="sobre"
      className="section-py relative overflow-hidden"
      style={{ background: 'linear-gradient(155deg, #1A0814 0%, #3A1026 45%, #561830 80%, #3A1026 100%)' }}
    >

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.055]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      {/* Blobs decorativos */}
      <div className="absolute -top-24 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,164,184,0.18) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 -left-16 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(192,64,112,0.22) 0%, transparent 65%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full pointer-events-none opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, rgba(247,227,235,1) 0%, transparent 60%)' }} />

      <div className="section-container relative z-10">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 lg:gap-20 items-center"
        >

          {/* ── FOTO ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' as const }}
            className="relative flex justify-center"
          >
            {/* Orb brilhante fundo da foto */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.45, 0.75, 0.45] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(232,164,184,0.65) 0%, transparent 70%)' }}
            />

            {/* Orb flutuante — canto superior esquerdo */}
            <motion.div
              animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 -left-2 sm:left-2 w-10 h-10 rounded-full border border-brand-rosa/55 bg-brand-rosa/20 backdrop-blur-sm z-20 pointer-events-none"
            />
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-20 -left-4 sm:-left-2 w-5 h-5 rounded-full bg-brand-rosa/55 z-20 pointer-events-none"
            />

            {/* Frame + Foto — escalam juntos no hover */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: 'easeOut' as const }}
              className="relative w-full flex justify-center max-w-[270px] sm:max-w-[340px] md:max-w-full"
            >
              {/* Frame decorativo — glass escuro */}
              <div
                className="absolute bottom-0 left-4 right-4 sm:left-8 sm:right-8 h-4/5 rounded-2xl sm:rounded-3xl"
                style={{ background: 'linear-gradient(160deg, rgba(123,28,66,0.55) 0%, rgba(58,16,38,0.75) 100%)' }}
              />
              <div className="absolute bottom-2 sm:bottom-3 left-7 right-7 sm:left-11 sm:right-11 h-4/5 rounded-2xl sm:rounded-3xl border border-brand-rosa/25" />

              {/* Foto */}
              <img
                src={fotoSobre}
                alt="Ana Luiza, Psicóloga Clínica"
                className="relative z-10 w-full object-contain drop-shadow-2xl cursor-default"
              />
            </motion.div>

            {/* Badge CRP flutuante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.65 }}
              className="absolute bottom-6 right-0 sm:right-4 md:right-2 lg:right-4 z-20"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.2, ease: 'easeInOut', repeat: Infinity, delay: 0.9 }}
                className="bg-brand-vinho/90 backdrop-blur-sm text-white rounded-xl sm:rounded-2xl
                           px-3 py-2.5 sm:px-4 sm:py-3 shadow-button border border-brand-rosa/35"
              >
                <p className="font-sans text-[10px] sm:text-xs font-medium text-white/75 leading-tight">
                  Registro Profissional
                </p>
                <p className="font-serif text-sm sm:text-base font-semibold text-white">CRP 12731 PE</p>
              </motion.div>
            </motion.div>

            {/* Badge "5 anos" flutuante — topo direito */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.85 }}
              className="absolute top-8 right-0 sm:right-2 z-20"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.8, ease: 'easeInOut', repeat: Infinity, delay: 0.4 }}
                className="bg-white/12 backdrop-blur-md border border-white/22 rounded-xl
                           px-3 py-2 shadow-soft flex items-center gap-1.5"
              >
                <Sparkles size={12} className="text-brand-rosa flex-shrink-0" />
                <p className="font-sans text-[10px] font-semibold text-white/90">5 anos de experiência</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── TEXTO ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' as const, delay: 0.12 }}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <span className="font-script text-2xl sm:text-3xl text-brand-rosa">
              conheça a sua psicóloga
            </span>

            <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
              Olá, eu sou a{' '}
              <span className="text-rosa-gradient">Ana Luiza.</span>
            </h2>

            {/* Tags de especialidade */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07, type: 'spring' as const, stiffness: 200 }}
                  className="inline-flex items-center font-sans text-xs font-medium text-white/90
                             bg-brand-vinho/55 border border-brand-rosa/40 rounded-full px-3 py-1
                             hover:bg-brand-vinho/75 hover:border-brand-rosa/65 transition-colors duration-200"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed font-light">
              Psicóloga Clínica com CRP ativo em Pernambuco, especializada no cuidado da saúde
              mental feminina. Acredito que cada mulher carrega uma história única — e que a
              terapia é o espaço onde essa história pode ser reescrita com mais leveza,
              autocompaixão e propósito.
            </p>

            <p className="font-sans text-sm text-white/75 leading-relaxed font-light">
              Trabalho com a{' '}
              <strong className="text-white font-medium">
                Terapia Cognitivo-Comportamental (TCC)
              </strong>
              , reconhecida cientificamente como uma das mais eficazes para ansiedade e
              autoestima. Além do consultório, conduzo{' '}
              <strong className="text-white font-medium">Oficinas Terapêuticas</strong>{' '}
              e{' '}
              <strong className="text-white font-medium">Palestras</strong> voltadas ao
              desenvolvimento emocional feminino.
            </p>

            {/* Lista de diferenciais */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {diferenciais.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.45 + i * 0.08, ease: 'easeOut' as const }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2.5 text-sm font-sans text-white/80 font-light cursor-default group"
                >
                  <CheckCircle
                    size={15}
                    className="mt-0.5 flex-shrink-0 text-brand-rosa group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="group-hover:text-white transition-colors duration-200">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-1">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Ana%20Luiza,%20li%20sobre%20seu%20trabalho%20e%20gostaria%20de%20conversar!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blush text-brand-vinho font-sans font-semibold
                           rounded-full px-8 py-4 text-sm shadow-button hover:bg-white
                           transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg
                           w-full sm:w-auto justify-center sm:justify-start"
              >
                Quero começar minha jornada
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
