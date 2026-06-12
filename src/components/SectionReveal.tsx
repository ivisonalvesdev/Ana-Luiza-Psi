import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Envolve uma seção e revela o bloco inteiro com um fade-up leve e único
 * conforme entra na viewport. Apenas opacity/transform (alta performance).
 * Não altera o conteúdo interno — só suaviza a transição de entrada.
 */
export default function SectionReveal({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()

  if (reduce) return <>{children}</>

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
