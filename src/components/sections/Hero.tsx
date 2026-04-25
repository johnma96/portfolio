import { motion } from 'framer-motion'
import { GradientText } from '../ui/GradientText'
import ParticleBackground from '../ui/ParticleBackground'
import TechOrbit from '../ui/TechOrbit'
import { fadeInUp, staggerContainer } from '../../lib/motion'

const stats = [
  { value: '3+', label: 'Años de experiencia' },
  { value: '10+', label: 'Proyectos en producción' },
  { value: '5+', label: 'Tecnologías cloud' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      <ParticleBackground />

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span className="text-sm text-text-secondary">
                Disponible para proyectos freelance
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="text-text-primary block">Data Scientist →</span>
              <GradientText>AI Engineer</GradientText>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-text-secondary text-lg">
              Especialista en sistemas ML end-to-end · Medellín, Colombia
            </motion.p>

            <motion.p variants={fadeInUp} className="text-text-muted max-w-lg">
              Construyo sistemas ML production-ready: desde pipelines de datos hasta APIs de
              inferencia. Especializado en GCP, Airflow, Vertex AI y LLMs aplicados a problemas
              reales de negocio.
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
                Ver proyectos →
              </motion.button>

              <a href="/cv.pdf" download>
                <motion.span
                  whileHover={{ backgroundColor: 'rgba(167,139,250,0.1)' }}
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-accent-purple/40 text-accent-purple cursor-pointer"
                  style={{ display: 'inline-flex' }}
                >
                  Descargar CV
                </motion.span>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4 flex-wrap">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-text-primary">{stat.value}</span>
                    <span className="text-xs text-text-muted">{stat.label}</span>
                  </div>
                  {i < stats.length - 1 && (
                    <div
                      className="w-px h-8"
                      style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="hidden md:flex items-center justify-center">
            <TechOrbit />
          </div>
        </div>
      </div>
    </section>
  )
}
