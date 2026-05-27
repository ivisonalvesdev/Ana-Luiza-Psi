import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ambiente4, fotoHeroPrincipal, logoRosa, WHATSAPP_NUMBER } from '../assets'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: 'easeOut' as const, delay },
})

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

function SpotlightBtn({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const angle =
      Math.atan2(e.clientY - (top + height / 2), e.clientX - (left + width / 2)) *
        (180 / Math.PI) + 90
    el.style.setProperty('--mouse-angle', `${angle}deg`)
  }

  return (
    <span ref={ref} className={`btn-spotlight ${className ?? ''}`} onMouseMove={onMove}>
      {children}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Fundo desktop — imagem de ambiente */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{ backgroundImage: `url(${ambiente4})` }}
      />

      {/* Fundo mobile — foto da cliente com blend sobre tom rosé */}
      <div className="absolute inset-0 lg:hidden bg-[#C9A0A8]">
        <img
          src={fotoHeroPrincipal}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top [mix-blend-mode:multiply]"
        />
      </div>

      {/* Vinheta radial */}
      <div className="absolute inset-0 pointer-events-none
                      bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(0,0,0,0.62)_100%)]" />

      {/* Escurecimento lateral esquerda */}
      <div className="absolute inset-0 bg-gradient-to-r
                      from-black/90 via-black/60 to-transparent
                      pointer-events-none" />

      {/* Escurecimento topo */}
      <div className="absolute top-0 left-0 right-0 h-48
                      bg-gradient-to-b from-black/35 to-transparent
                      pointer-events-none" />

      {/* Ponto de sombra circular — apenas desktop */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block"
           style={{ background: `
  radial-gradient(circle 110px at 61.5% 37%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.55) 60%, transparent 100%),
  radial-gradient(circle 330px at 65% 70%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.55) 60%, transparent 100%)
` }} />

      {/* Layout principal */}
      <div className="relative z-10 flex h-full">

        {/* ── COLUNA ESQUERDA — conteúdo ── */}
        <div className="flex items-start lg:items-center w-full lg:w-[48%] xl:w-[46%]
                        px-5 sm:px-10 lg:px-14 xl:px-20 pt-[40vh] sm:pt-[18vh] lg:pt-0 lg:pb-8">
          <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-4 xl:gap-6 2xl:gap-6 3xl:gap-7 w-full -mt-[6vh] lg:mt-0">

            {/* Logo — 1/4 superior oculto atrás da navbar (z-50) */}
            <motion.div
              {...fadeUp(0.10)}
              className="-mt-[14vh] -mb-5 sm:-mb-7 lg:-mb-6 xl:-mb-10 2xl:-mb-10 3xl:-mb-11 relative z-0"
            >
              <motion.img
                src={logoRosa}
                alt="Ana Luiza | Psicóloga"
                className="h-44 sm:h-52 md:h-52 lg:h-60 xl:h-80 2xl:h-80 3xl:h-[22rem] w-auto cursor-pointer"
                animate={{ x: [-7, 7, -7] }}
                transition={{ duration: 6.5, ease: 'easeInOut' as const, repeat: Infinity, delay: 0.85 }}
                onClick={() => document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })}
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.28)}
              className="relative z-10 font-serif font-medium text-white -mt-[4vh] sm:-mt-[5vh] lg:-mt-[2vh] xl:-mt-[5vh] 2xl:-mt-[5vh] 3xl:-mt-[7vh]
                         leading-[1.15] sm:leading-[1.05] lg:leading-[0.92] xl:leading-[0.90] 2xl:leading-[0.90] 3xl:leading-[0.88]
                         text-2xl sm:text-3xl md:text-[2.2rem] lg:text-[1.9rem] xl:text-[3.0rem] 2xl:text-[3.4rem] 3xl:text-[4rem]"
            >
              Reescreva sua história e sinta{' '}
              <em className="not-italic text-rosa-gradient">
                orgulho da sua jornada.
              </em>
            </motion.h1>

            {/* Frase script */}
            <motion.p
              {...fadeUp(0.40)}
              className="relative z-10 font-script text-sm sm:text-base md:text-lg lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-2xl text-white/75"
            >
              "Acolhimento, sensibilidade e compromisso."
            </motion.p>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.50)}
              className="relative z-10 font-sans text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-base 3xl:text-lg leading-relaxed text-white/70 font-light max-w-sm sm:max-w-md lg:max-w-sm xl:max-w-lg 2xl:max-w-lg 3xl:max-w-xl"
            >
              Acolhimento especializado para mulheres 30+ que buscam superar a ansiedade,
              a autocrítica e a sobrecarga emocional através da{' '}
              <strong className="font-medium text-white">
                Terapia Cognitivo-Comportamental.
              </strong>
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.46)}
              className="relative z-10 flex flex-col gap-2.5 w-full lg:flex-row lg:w-auto pt-1"
            >
              <SpotlightBtn className="w-full lg:w-auto">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Ana%20Luiza,%20gostaria%20de%20agendar%20uma%20consulta!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-vinho justify-center shadow-md !text-xs !px-4 !py-2.5 !min-h-[38px]
                             sm:!text-sm sm:!px-5 sm:!py-3 sm:!min-h-[42px]
                             lg:!text-xs lg:!px-4 lg:!py-2.5 lg:!min-h-[36px]
                             xl:!text-base xl:!px-7 xl:!py-3.5 xl:!min-h-[48px]
                             2xl:!text-base 2xl:!px-7 2xl:!py-3.5 2xl:!min-h-[50px]
                             3xl:!text-base 3xl:!px-8 3xl:!py-4 3xl:!min-h-[54px]
                             w-full lg:w-auto"
                >
                  <WaIcon />
                  Agendar Consulta via WhatsApp
                </a>
              </SpotlightBtn>

              <SpotlightBtn className="w-full lg:w-auto">
                <button
                  onClick={() => document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 justify-center
                             border border-white/60 text-white font-sans font-medium
                             rounded-full px-4 py-2.5 text-xs min-h-[38px]
                             sm:px-5 sm:py-3 sm:text-sm sm:min-h-[42px]
                             lg:px-4 lg:py-2.5 lg:text-xs lg:min-h-[36px]
                             xl:px-7 xl:py-3.5 xl:text-base xl:min-h-[48px]
                             2xl:px-7 2xl:py-3.5 2xl:text-base 2xl:min-h-[50px]
                             3xl:px-8 3xl:py-4 3xl:text-base 3xl:min-h-[54px]
                             transition-colors duration-300 hover:bg-white/15
                             touch-manipulation backdrop-blur-sm w-full lg:w-auto"
                >
                  Conhecer a Ana Luiza
                </button>
              </SpotlightBtn>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              {...fadeUp(0.58)}
              className="relative z-10 flex flex-wrap gap-x-4 gap-y-1.5 xl:gap-x-6"
            >
              {[
                '🏛️ Online & Presencial',
                '💬 TCC para Mulheres',
                '🎓 Especialista em Saúde Mental Feminina',
              ].map((item) => (
                <span key={item} className="text-xs xl:text-sm font-sans text-white font-light drop-shadow-sm">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── COLUNA DIREITA — foto hero ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' as const, delay: 0.2 }}
          className="hidden lg:flex flex-1 self-stretch items-end justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none
                          bg-[radial-gradient(ellipse_75%_65%_at_55%_75%,rgba(253,248,245,0.52)_0%,rgba(247,227,235,0.25)_45%,transparent_70%)]" />
          <img
            src={fotoHeroPrincipal}
            alt="Ana Luiza, Psicóloga Clínica"
            className="h-full w-full max-w-none object-contain object-bottom
                       [mix-blend-mode:multiply]"
          />
        </motion.div>

      </div>

      {/* Chip CRP flutuante */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' as const }}
        className="absolute bottom-24 lg:bottom-28 left-[49%] lg:left-[51%] z-20 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 3.8, ease: 'easeInOut' as const, repeat: Infinity, delay: 1.5 }}
        >
          <span className="inline-flex items-center gap-2 bg-white/85 text-brand-vinho
                           text-xs font-sans font-medium rounded-full
                           px-4 py-2.5 backdrop-blur-md shadow-soft
                           border border-brand-blush/60">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-vinho flex-shrink-0 animate-pulse" />
            Psicóloga Clínica · CRP 02/12731
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-white/45 z-10"
      >
        <span className="text-[10px] font-sans tracking-widest uppercase">Descubra mais</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, ease: 'easeInOut' as const, repeat: Infinity }}
          className="w-px h-7 bg-gradient-to-b from-brand-rosa to-transparent"
        />
      </motion.div>

      {/* Fade de transição */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#F5EDE8] pointer-events-none z-30" />
    </section>
  )
}
