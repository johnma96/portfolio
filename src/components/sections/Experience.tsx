import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import { EXPERIENCE } from '../../data/experience'
import { useLanguage } from '../../contexts/LanguageContext'
import { Badge } from '../ui/Badge'

export function Experience() {
  const { lang, t } = useLanguage()

  return (
    <motion.section
      id="experience"
      className="py-20"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="mb-12">
          <p className="text-accent-purple font-mono text-sm mb-2">{t.experience.label}</p>
          <h2 className="text-3xl font-bold text-text-primary mb-2">{t.experience.heading}</h2>
          <p className="text-text-secondary">{t.experience.subtitle}</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line — desktop only */}
          <div
            className="absolute left-3 top-2 bottom-2 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #a78bfa44, #38bdf822)' }}
          />

          <div className="flex flex-col gap-10">
            {EXPERIENCE.map((entry) => {
              const role = lang === 'en' ? entry.roleEn : entry.role
              const period = lang === 'en' ? entry.periodEn : entry.period
              const bullets = lang === 'en' ? entry.bulletsEn : entry.bullets

              return (
                <motion.div
                  key={entry.id}
                  variants={fadeInUp}
                  className="md:pl-12 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 hidden md:flex items-center justify-center">
                    {entry.current ? (
                      <span className="w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse" />
                      </span>
                    ) : (
                      <span className="w-6 h-6 rounded-full bg-background-secondary flex items-center justify-center"
                        style={{ border: '1px solid rgba(167,139,250,0.3)' }}>
                        <span className="w-2 h-2 rounded-full bg-accent-purple/60" />
                      </span>
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-xl p-6"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: entry.current
                        ? '1px solid rgba(52,211,153,0.20)'
                        : '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold text-text-primary">{entry.company}</h3>
                          {entry.current && (
                            <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                              style={{ background: 'rgba(52,211,153,0.15)', color: '#34d399' }}>
                              {t.experience.present}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-accent-purple mt-0.5">{role}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                        <span className="text-xs text-text-muted font-mono">{period}</span>
                        <span className="flex items-center gap-1 text-xs text-text-dim">
                          <MapPin size={11} />
                          {entry.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="flex flex-col gap-1.5 mb-4">
                      {bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2 text-sm text-text-secondary">
                          <span className="text-accent-purple/60 shrink-0 mt-0.5">›</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {entry.tags.map((tag) => (
                        <Badge key={tag} variant="default">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
