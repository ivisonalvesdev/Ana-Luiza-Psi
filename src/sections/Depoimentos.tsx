import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, BadgeCheck, Users, TrendingUp, Heart, Award } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../assets'

const stats = [
  { icon: Users,      value: '150+', label: 'Pacientes atendidas',  color: '#E8A4B8' },
  { icon: TrendingUp, value: '5',    label: 'Anos de experiência',  color: '#F7E3EB' },
  { icon: Star,       value: '4.9★', label: 'Avaliação média',      color: '#E8A4B8' },
  { icon: Heart,      value: '98%',  label: 'Taxa de satisfação',   color: '#F7E3EB' },
]

const row1 = [
  { nome: 'Maria S.',    tema: 'Ansiedade',         texto: 'A Ana Luiza transformou minha relação comigo mesma. Aprendi a identificar meus gatilhos e hoje vivo com muito mais leveza e autoconfiança.', light: false },
  { nome: 'Carla M.',    tema: 'Autoestima',        texto: 'Cheguei ao consultório completamente perdida. Hoje reconheço meu valor e consigo colocar limites sem culpa.', light: true },
  { nome: 'Fernanda C.', tema: 'TCC',               texto: 'A abordagem da TCC mudou a forma como processo meus pensamentos. A Ana Luiza é extremamente competente e acolhedora.', light: false },
  { nome: 'Juliana R.',  tema: 'Sobrecarga',        texto: 'Eu era aquela pessoa que não conseguia dizer não para ninguém. As sessões me ensinaram a cuidar de mim sem me sentir egoísta.', light: true },
  { nome: 'Patricia L.', tema: 'Saúde Mental',      texto: 'O espaço da terapia com a Ana Luiza é seguro e sem julgamentos. É um presente que me dei e que recomendo para toda mulher.', light: false },
  { nome: 'Renata O.',   tema: 'Autoconhecimento',  texto: 'Em poucos meses já percebi mudanças significativas no meu comportamento e na forma como me relaciono com as pessoas ao meu redor.', light: true },
]

const row2 = [
  { nome: 'Amanda R.',  tema: 'Ansiedade Feminina',  texto: 'Finalmente encontrei um espaço onde me sinto realmente compreendida. A Ana Luiza tem uma sensibilidade única para trabalhar com mulheres.', light: true },
  { nome: 'Beatriz A.', tema: 'Sínd. Impostora',     texto: 'Sempre achei que não merecia minhas conquistas. Hoje reconheço minha competência e paro de sabotar minhas próprias oportunidades.', light: false },
  { nome: 'Camila F.',  tema: 'Desenvolvimento',     texto: 'A terapia foi um divisor de águas na minha vida. Aprendi ferramentas que uso todos os dias para gerenciar minha ansiedade com mais leveza.', light: true },
  { nome: 'Mariana G.', tema: 'Papéis Femininos',    texto: 'Consegui reconectar com minha essência depois de anos me perdendo nos papéis de mãe, esposa e profissional. Gratidão eterna!', light: false },
  { nome: 'Isabela T.', tema: 'Online',              texto: 'O atendimento online funcionou perfeitamente para minha rotina. Profissionalismo, empatia e resultados reais. Indico de olhos fechados.', light: true },
  { nome: 'Larissa V.', tema: 'Crescimento',         texto: 'Cada sessão é uma descoberta sobre mim mesma. A Ana Luiza tem um dom especial para fazer perguntas que nos levam a grandes insights.', light: false },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

function Card({ nome, tema, texto, light }: { nome: string; tema: string; texto: string; light: boolean }) {
  return (
    <div className={`relative flex-shrink-0 w-[300px] sm:w-[330px] rounded-2xl p-5 flex flex-col gap-3
                     border transition-all duration-300 cursor-default
                     ${light
                       ? 'bg-white/12 border-white/20 hover:bg-white/18'
                       : 'bg-brand-vinho-mid/40 border-brand-rosa/25 hover:bg-brand-vinho-mid/55'
                     }`}>
      {/* Topo */}
      <div className="flex items-start justify-between gap-2">
        <Quote size={20} className="text-brand-rosa/70 flex-shrink-0 mt-0.5" />
        <span className="text-[10px] font-sans font-semibold tracking-widest uppercase
                         text-brand-rosa/80 bg-brand-rosa/15 rounded-full px-2.5 py-1">
          {tema}
        </span>
      </div>

      {/* Texto */}
      <p className="font-sans text-sm text-white/85 leading-relaxed font-light flex-1">
        "{texto}"
      </p>

      {/* Rodapé */}
      <div className="flex items-center justify-between pt-1 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-brand-rosa/30 flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-serif font-semibold text-white">
              {nome.charAt(0)}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-sans font-medium text-white/90">{nome}</span>
            <Stars />
          </div>
        </div>
        <BadgeCheck size={16} className="text-brand-rosa/80 flex-shrink-0" />
      </div>
    </div>
  )
}

export default function Depoimentos() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="depoimentos" className="relative overflow-hidden py-20 sm:py-28"
      style={{ background: 'linear-gradient(145deg, #1A0818 0%, #360E28 30%, #561638 60%, #2C0A20 100%)' }}
    >
      {/* Blobs decorativos */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.14] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C04878 0%, transparent 70%)' }} />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-[0.12] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B1A48 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7B1C52 0%, transparent 65%)' }} />

      {/* Grade de pontos sutil */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="section-container relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="font-script text-2xl sm:text-3xl text-brand-rosa block mb-3">
            histórias reais
          </span>
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-5">
            Vidas que foram{' '}
            <span className="text-rosa-gradient">transformadas.</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-brand-rosa" />
            <div className="w-2 h-2 rounded-full bg-brand-rosa/60" />
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-brand-rosa/60" />
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-brand-rosa" />
          </div>
          <p className="font-sans text-sm sm:text-base text-white/60 leading-relaxed font-light max-w-lg mx-auto">
            Cada relato é uma história de coragem. Conheça o que as pacientes dizem sobre sua jornada terapêutica.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-14 sm:mb-18 max-w-3xl mx-auto"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08, type: 'spring', stiffness: 200 }}
              className="flex flex-col items-center gap-2 bg-white/8 border border-white/12
                         rounded-2xl py-5 px-3 backdrop-blur-sm hover:bg-white/12 transition-colors duration-300"
            >
              <s.icon size={18} style={{ color: s.color }} />
              <span className="font-serif text-2xl sm:text-3xl font-bold text-rosa-gradient leading-none">
                {s.value}
              </span>
              <span className="font-sans text-[11px] text-white/55 text-center leading-tight">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Marquee row 1 — esquerda */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="overflow-hidden mb-4"
      >
        <div className="flex gap-4 marquee-left" style={{ width: 'max-content' }}>
          {[...row1, ...row1].map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </motion.div>

      {/* Marquee row 2 — direita */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="overflow-hidden"
      >
        <div className="flex gap-4 marquee-right" style={{ width: 'max-content' }}>
          {[...row2, ...row2].map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.55 }}
        className="section-container relative z-10 mt-14 sm:mt-16 text-center"
      >
        <p className="font-script text-lg sm:text-xl text-brand-rosa/80 mb-5">
          a próxima história pode ser a sua.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Ana%20Luiza,%20gostaria%20de%20agendar%20uma%20consulta!`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-brand-vinho font-sans font-semibold
                     rounded-full px-8 py-4 text-sm shadow-button hover:bg-brand-blush
                     transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Quero começar minha jornada
        </a>
      </motion.div>

    </section>
  )
}
