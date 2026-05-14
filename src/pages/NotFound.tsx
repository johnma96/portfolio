import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { useLanguage } from '../contexts/LanguageContext'

export function NotFound() {
  const navigate = useNavigate()
  const { lang } = useLanguage()

  const lines = lang === 'es'
    ? ['$ cd /pagina-que-buscas', 'bash: cd: /pagina-que-buscas: No such file or directory', '$ _']
    : ['$ cd /page-you-were-looking-for', 'bash: cd: /page-you-were-looking-for: No such file or directory', '$ _']

  return (
    <main className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#0a0a0f' }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center max-w-lg"
      >
        {/* 404 */}
        <motion.p
          variants={fadeInUp}
          className="text-8xl md:text-9xl font-bold mb-4"
          style={{
            background: 'var(--gradient-main)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          404
        </motion.p>

        {/* Terminal block */}
        <motion.div
          variants={fadeInUp}
          className="rounded-lg p-4 mb-8 text-left"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            fontFamily: "'Courier New', monospace",
            fontSize: '13px',
          }}
        >
          {lines.map((line, i) => (
            <p
              key={i}
              className={i === 1 ? 'text-red-400' : 'text-text-secondary'}
            >
              {line}
            </p>
          ))}
        </motion.div>

        {/* Message */}
        <motion.p variants={fadeInUp} className="text-text-secondary mb-8">
          {lang === 'es'
            ? 'Esta página no existe. Volvamos al inicio.'
            : "This page doesn't exist. Let's go back home."}
        </motion.p>

        {/* CTA */}
        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/')}
          className="px-8 py-3 rounded-lg font-medium text-white"
          style={{ background: 'linear-gradient(135deg, #a78bfa, #38bdf8)' }}
        >
          {lang === 'es' ? '← Volver al inicio' : '← Back to home'}
        </motion.button>
      </motion.div>
    </main>
  )
}
