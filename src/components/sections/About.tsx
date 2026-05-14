import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import { useLanguage } from '../../contexts/LanguageContext'
import { EDUCATION } from '../../data/education'

export function About() {
  const { lang, t } = useLanguage()

  return (
    <motion.section
      id="about"
      className="py-20"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="mb-12">
          <p className="text-accent-purple font-mono text-sm mb-2">{t.about.label}</p>
          <h2 className="text-3xl font-bold text-text-primary">{t.about.heading}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-5">
            <p className="text-text-primary text-lg font-medium leading-snug">
              {t.about.greeting}
            </p>
            <p className="text-text-secondary leading-relaxed">{t.about.bio1}</p>
            <p className="text-text-secondary leading-relaxed">{t.about.bio2}</p>
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap size={16} className="text-accent-purple" />
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                {t.about.educationHeading}
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {EDUCATION.map((item) => (
                <div
                  key={item.period}
                  className="flex items-start justify-between gap-4 py-3 border-b"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <div>
                    <p className="text-sm text-text-primary font-medium">
                      {lang === 'en' ? item.degreeEn : item.degree}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">{item.institution}</p>
                  </div>
                  <span className="text-xs text-text-dim font-mono shrink-0">{item.period}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
