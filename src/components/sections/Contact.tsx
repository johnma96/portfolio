import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Check } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'
import { fadeInUp, staggerContainer, scaleIn } from '../../lib/motion'
import { GradientText } from '../ui/GradientText'
import { SITE_CONFIG } from '../../data/config'
import { useLanguage } from '../../contexts/LanguageContext'

interface ContactForm {
  name: string
  email: string
  message: string
}

export function Contact() {
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { t } = useLanguage()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm): Promise<void> => {
    setSubmitError(null)
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined
    if (!formspreeId) {
      await new Promise<void>((r) => setTimeout(r, 1000))
      setSubmitted(true)
      return
    }
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      setSubmitted(true)
    } else {
      setSubmitError(t.contact.sendError + SITE_CONFIG.contact.email)
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div variants={fadeInUp}>
          <span className="text-sm font-medium tracking-widest uppercase text-accent-purple">
            {t.contact.label}
          </span>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3">
            {t.contact.headingPre}
            <GradientText>{t.contact.headingGradient}</GradientText>?
          </h2>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-text-secondary mt-4 mb-10">
          {t.contact.subtitle}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="rounded-2xl p-8 mt-10"
          style={{
            background:
              'radial-gradient(ellipse at 50% -20%, rgba(167,139,250,0.12), transparent 60%), var(--bg-card)',
            border: '1px solid var(--border-mid)',
          }}
        >
          {submitted ? (
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-accent-green" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {t.contact.successTitle}
              </h3>
              <p className="text-text-secondary">{t.contact.successBody}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="text-left">
                  <input
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent-purple/50 transition"
                    style={{
                      background: 'var(--input-bg)',
                      border: '1px solid var(--border-mid)',
                    }}
                    {...register('name', { required: t.contact.nameRequired })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div className="text-left">
                  <input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent-purple/50 transition"
                    style={{
                      background: 'var(--input-bg)',
                      border: '1px solid var(--border-mid)',
                    }}
                    {...register('email', {
                      required: t.contact.emailRequired,
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: t.contact.emailInvalid,
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-4 text-left">
                <textarea
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent-purple/50 transition resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  {...register('message', {
                    required: t.contact.messageRequired,
                    minLength: { value: 20, message: t.contact.messageMinLength },
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              {submitError && (
                <p className="mb-4 text-sm text-red-400 text-left">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg font-medium text-white transition-opacity disabled:opacity-60"
                style={{ background: 'var(--gradient-main)' }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    {t.contact.sending}
                  </span>
                ) : (
                  t.contact.sendButton
                )}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <span className="text-text-muted text-sm">{t.contact.findMeOn}</span>
          <a
            href={SITE_CONFIG.github.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={SITE_CONFIG.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
