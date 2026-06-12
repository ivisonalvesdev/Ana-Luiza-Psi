import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

// Rosa mais escuro da marca (brand-vinho-mid)
const ACCENT = '#9B2855'

/**
 * Tela de carregamento da marca — contador 0→100% centralizado com anel
 * de progresso que preenche conforme o número. Trava o scroll enquanto ativa
 * e some com um fade suave ao concluir. Apenas SVG + opacity (alta performance).
 */
export default function Preloader({ onDone }: { onDone?: () => void }) {
  const reduce = useReducedMotion()
  const [done, setDone] = useState(false)
  const [progress, setProgress] = useState(0)
  const loadedRef = useRef(false)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    loadedRef.current = document.readyState === 'complete'
    const onLoad = () => { loadedRef.current = true }
    if (!loadedRef.current) window.addEventListener('load', onLoad, { once: true })

    const minDuration = reduce ? 500 : 1700
    const start = performance.now()
    let value = 0
    let raf = 0

    const loop = (now: number) => {
      const elapsed = now - start
      const t = Math.min(elapsed / minDuration, 1)
      const eased = (1 - Math.pow(1 - t, 3)) * 100          // ease-out cúbico
      const ceiling = loadedRef.current ? 100 : 90           // segura até a página carregar
      value += (Math.min(eased, ceiling) - value) * 0.14
      setProgress(Math.min(100, Math.round(value)))

      if (loadedRef.current && t >= 1 && value >= 99.4) {
        setProgress(100)
        window.setTimeout(() => setDone(true), 340)
        return
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('load', onLoad)
    }
  }, [reduce])

  // Libera o scroll assim que a saída começa
  useEffect(() => {
    if (done) document.body.style.overflow = ''
  }, [done])

  const size = 156
  const stroke = 2.5
  const r = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - progress / 100)

  return (
    <AnimatePresence onExitComplete={() => onDoneRef.current?.()}>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8"
          style={{ background: 'linear-gradient(155deg, #1A0814 0%, #3A1026 45%, #561830 80%, #3A1026 100%)' }}
        >
          {/* Glow suave de fundo */}
          <div
            className="absolute w-[360px] h-[360px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(155,40,85,0.22) 0%, transparent 65%)' }}
          />

          {/* Anel de progresso + número */}
          <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="absolute" style={{ transform: 'rotate(-90deg)' }}>
              {/* Trilho */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={stroke}
              />
              {/* Progresso */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={ACCENT}
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={offset}
                style={{
                  transition: 'stroke-dashoffset 0.2s ease-out',
                  filter: `drop-shadow(0 0 6px ${ACCENT})`,
                }}
              />
            </svg>

            {/* Número central */}
            <div className="flex items-start">
              <span className="font-serif text-5xl text-white tabular-nums leading-none">{progress}</span>
              <span className="font-sans text-base font-light mt-1" style={{ color: ACCENT }}>%</span>
            </div>
          </div>

          {/* Wordmark */}
          <span className="relative font-sans text-[10px] tracking-[0.4em] uppercase text-white/35">
            Ana Luiza · Psicóloga
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
