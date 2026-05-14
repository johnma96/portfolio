import { motion } from 'framer-motion'
import { GradientText } from '../ui/GradientText'
import ParticleBackground from '../ui/ParticleBackground'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import { useLanguage } from '../../contexts/LanguageContext'

export function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      <ParticleBackground />

      <div className="relative flex items-center min-h-screen" style={{ zIndex: 2 }}>
        <div className="w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span className="text-sm text-text-secondary">{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="text-text-primary block">Data Scientist →</span>
              <GradientText>AI Engineer</GradientText>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-text-secondary text-lg">
              {t.hero.subtitle}
            </motion.p>

            <motion.p variants={fadeInUp} className="text-text-muted max-w-lg">
              {t.hero.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-row gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-lg font-medium text-white"
                style={{ background: 'linear-gradient(135deg, #a78bfa, #38bdf8)' }}
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t.hero.viewProjects}
              </motion.button>

              <a href={lang === 'es' ? '/cv-es.pdf' : '/cv-en.pdf'} download>
                <motion.span
                  whileHover={{ backgroundColor: 'rgba(167,139,250,0.1)' }}
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-accent-purple/40 text-accent-purple cursor-pointer"
                  style={{ display: 'inline-flex' }}
                >
                  {t.hero.downloadCV}
                </motion.span>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4 flex-wrap">
              {t.hero.stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-text-primary">{stat.value}</span>
                    <span className="text-xs text-text-muted">{stat.label}</span>
                  </div>
                  {i < t.hero.stats.length - 1 && (
                    <div className="w-px h-8" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-25"
                style={{ background: 'linear-gradient(135deg, #a78bfa, #38bdf8)' }}
              />
              {/* Photo */}
              <div
                className="relative w-80 h-80 rounded-full overflow-hidden"
                style={{
                  border: '2px solid rgba(167,139,250,0.35)',
                  boxShadow: '0 0 60px rgba(167,139,250,0.12)',
                }}
              >
                <img
                  src="/profile.png"
                  alt="John Mario Montoya"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
