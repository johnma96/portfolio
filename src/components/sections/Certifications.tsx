import { motion } from 'framer-motion'
import { ExternalLink, Download } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import { CERTIFICATIONS } from '../../data/certifications'
import { useLanguage } from '../../contexts/LanguageContext'

function formatDate(iso: string, locale: string): string {
  return new Date(iso).toLocaleDateString(locale, { month: 'short', year: 'numeric' })
}

export function Certifications() {
  const { lang, t } = useLanguage()

  return (
    <motion.section
      id="certifications"
      className="py-20"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="mb-12">
          <p className="text-accent-purple font-mono text-sm mb-2">{t.certifications.label}</p>
          <h2 className="text-3xl font-bold text-text-primary mb-2">{t.certifications.heading}</h2>
          <p className="text-text-secondary">{t.certifications.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert) => {
            const name = lang === 'en' ? cert.nameEn : cert.name

            return (
              <motion.div
                key={cert.id}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="rounded-xl p-5 border flex flex-col gap-3 transition-colors duration-200"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${cert.color}55`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                }}
              >
                {/* Issuer row */}
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: cert.color }}
                  />
                  <span className="text-xs font-medium text-text-muted">{cert.issuer}</span>
                </div>

                {/* Name */}
                <p className="text-sm font-semibold text-text-primary leading-snug flex-1">
                  {name}
                </p>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-0.5 rounded-full text-text-muted"
                      style={{
                        background: `${cert.color}18`,
                        border: `1px solid ${cert.color}33`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Date + links */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-xs text-text-dim">
                    {formatDate(cert.date, t.blog.locale)}
                  </span>

                  <div className="flex items-center gap-3">
                    {cert.pdfFile && (
                      <a
                        href={cert.pdfFile}
                        download
                        className="flex items-center gap-1 text-xs text-text-dim hover:text-text-muted transition-colors"
                        title="Descargar PDF"
                      >
                        <Download size={11} />
                      </a>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-text-muted hover:text-text-primary transition-colors"
                      >
                        {t.certifications.viewCredential}
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
