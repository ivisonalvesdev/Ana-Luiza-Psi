import { useEffect, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck } from 'lucide-react'
import { EMAIL } from '../assets'

const PHONE = '(81) 98519-2492'

function Section({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section className="mb-5 last:mb-0">
      <h3 className="font-serif text-base text-brand-vinho mb-1.5 flex items-baseline gap-2">
        <span className="font-sans text-xs font-semibold text-brand-rosa">{n}</span>
        {title}
      </h3>
      <div className="font-sans text-sm text-brand-muted leading-relaxed font-light space-y-2">
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPolicy({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          {/* Painel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Política de Privacidade"
            className="relative w-full max-w-2xl max-h-[88vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-6 sm:px-8 py-5 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #7B1C42 0%, #9B2855 100%)' }}
            >
              <ShieldCheck size={22} className="text-white/90 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h2 className="font-serif text-lg sm:text-xl text-white leading-tight">Política de Privacidade</h2>
                <p className="font-sans text-[11px] text-white/60">
                  Lei Geral de Proteção de Dados — LGPD (Lei nº 13.709/2018)
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Fechar"
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:bg-white/15 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Conteúdo */}
            <div className="overflow-y-auto px-6 sm:px-8 py-6">
              <p className="font-sans text-sm text-brand-muted leading-relaxed font-light mb-6">
                Esta Política descreve como seus dados pessoais são coletados, utilizados, armazenados e
                protegidos ao utilizar este site ou ao entrar em contato com a psicóloga Ana Luiza Vieira,
                em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
              </p>

              <Section n="01" title="Controladora dos dados">
                <p>
                  A controladora dos dados é <strong className="text-brand-charcoal font-medium">Ana Luiza Vieira</strong>,
                  psicóloga clínica inscrita no CRP 02/12731, responsável pelas decisões referentes ao tratamento
                  dos seus dados pessoais. Contato: {EMAIL} · WhatsApp {PHONE} · Rua Arnóbio Marques, 253 — Sala 1903,
                  Santo Amaro, Recife/PE.
                </p>
              </Section>

              <Section n="02" title="Dados que coletamos">
                <p>
                  Coletamos apenas os dados que você fornece voluntariamente ao entrar em contato pelos canais
                  disponíveis (WhatsApp, e-mail ou Instagram), como nome, telefone, e-mail e o conteúdo da mensagem
                  enviada. Este site não possui formulários que armazenem dados em banco de dados próprio.
                </p>
              </Section>

              <Section n="03" title="Finalidade do tratamento">
                <p>
                  Os dados são utilizados exclusivamente para responder às suas mensagens, agendar e gerenciar
                  consultas e manter a comunicação necessária ao atendimento psicológico. Não utilizamos seus dados
                  para envio de publicidade sem o seu consentimento.
                </p>
              </Section>

              <Section n="04" title="Base legal">
                <p>
                  O tratamento fundamenta-se no consentimento do titular, na execução de procedimentos preliminares
                  e do contrato de prestação de serviços psicológicos e no cumprimento de obrigações legais e
                  regulatórias, nos termos do Art. 7º da LGPD.
                </p>
              </Section>

              <Section n="05" title="Compartilhamento de dados">
                <p>
                  Seus dados não são vendidos, alugados ou compartilhados com terceiros para fins comerciais.
                  O compartilhamento ocorrerá apenas quando necessário ao cumprimento de obrigação legal ou por
                  determinação de autoridade competente.
                </p>
              </Section>

              <Section n="06" title="Sigilo profissional">
                <p>
                  Todas as informações compartilhadas durante o atendimento psicológico são protegidas pelo sigilo
                  profissional, conforme o Código de Ética Profissional do Psicólogo, garantindo confidencialidade total.
                </p>
              </Section>

              <Section n="07" title="Armazenamento e segurança">
                <p>
                  Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso não
                  autorizado, perda, alteração ou divulgação indevida. Registros e conversas são mantidos em ambiente
                  protegido por senha e com acesso restrito.
                </p>
              </Section>

              <Section n="08" title="Cookies e serviços de terceiros">
                <p>
                  Este site não utiliza cookies de rastreamento para fins publicitários. Para seu funcionamento,
                  são carregados recursos de terceiros — Google Fonts (fontes) e Google Maps (mapa de localização) —
                  que podem coletar dados técnicos (como endereço IP) conforme suas próprias políticas de privacidade.
                </p>
              </Section>

              <Section n="09" title="Direitos do titular (Art. 18)">
                <p>A qualquer momento, você pode solicitar:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>confirmação da existência de tratamento;</li>
                  <li>acesso aos dados;</li>
                  <li>correção de dados incompletos, inexatos ou desatualizados;</li>
                  <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                  <li>portabilidade dos dados;</li>
                  <li>eliminação dos dados tratados com base no consentimento;</li>
                  <li>informação sobre o compartilhamento dos dados;</li>
                  <li>revogação do consentimento a qualquer momento.</li>
                </ul>
              </Section>

              <Section n="10" title="Retenção e exclusão">
                <p>
                  Os dados são mantidos apenas pelo tempo necessário às finalidades descritas ou ao cumprimento de
                  obrigações legais — incluindo a guarda de prontuários psicológicos exigida pelo Conselho Federal de
                  Psicologia. Após esse período, são eliminados de forma segura.
                </p>
              </Section>

              <Section n="11" title="Alterações desta política">
                <p>
                  Esta Política poderá ser atualizada periodicamente. A versão vigente estará sempre disponível neste
                  site, com a respectiva data de atualização.
                </p>
              </Section>

              <Section n="12" title="Contato">
                <p>
                  Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento dos seus dados, entre em contato
                  pelo e-mail {EMAIL} ou pelo WhatsApp {PHONE}.
                </p>
              </Section>

              <p className="mt-6 pt-4 border-t border-brand-blush/60 font-sans text-xs text-brand-muted/70">
                Última atualização: junho de 2026.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
