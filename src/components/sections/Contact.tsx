import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Github, Linkedin, Mail, Check } from 'lucide-react'
import { fadeInUp, staggerContainer, scaleIn } from '../../lib/motion'
import { GradientText } from '../ui/GradientText'
import { SITE_CONFIG } from '../../data/config'

interface ContactForm {
  name: string
  email: string
  message: string
}

export function Contact() {
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

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
      setSubmitError(
        'Hubo un error al enviar. Escríbeme directamente a ' + SITE_CONFIG.contact.email
      )
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
        {/* Label */}
        <motion.div variants={fadeInUp}>
          <span className="text-sm font-medium tracking-widest uppercase text-accent-purple">
            // Contacto
          </span>
        </motion.div>

        {/* Título */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3">
            ¿Tienes un <GradientText>proyecto en mente</GradientText>?
          </h2>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          variants={fadeInUp}
          className="text-text-secondary mt-4 mb-10"
        >
          Estoy disponible para proyectos freelance de MLOps, pipelines de datos y sistemas LLM en
          producción.
        </motion.p>

        {/* Card */}
        <motion.div
          variants={fadeInUp}
          className="rounded-2xl p-8 mt-10"
          style={{
            background:
              'radial-gradient(ellipse at 50% -20%, rgba(167,139,250,0.12), transparent 60%), rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
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
              <h3 className="text-xl font-semibold text-text-primary mb-2">¡Mensaje enviado!</h3>
              <p className="text-text-secondary">Te responderé en menos de 24 horas.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Nombre + Email — 2 columnas en desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Nombre */}
                <div className="text-left">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent-purple/50 transition"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    {...register('name', { required: 'El nombre es obligatorio' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="text-left">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="w-full px-4 py-3 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent-purple/50 transition"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    {...register('email', {
                      required: 'El email es obligatorio',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Email inválido',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Mensaje */}
              <div className="mb-4 text-left">
                <textarea
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full px-4 py-3 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent-purple/50 transition resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  {...register('message', {
                    required: 'El mensaje es obligatorio',
                    minLength: { value: 20, message: 'Mínimo 20 caracteres' },
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* Error de envío */}
              {submitError && (
                <p className="mb-4 text-sm text-red-400 text-left">{submitError}</p>
              )}

              {/* Botón submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg font-medium text-white transition-opacity disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #a78bfa, #38bdf8)' }}
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
                    Enviando...
                  </span>
                ) : (
                  'Enviar mensaje →'
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <span className="text-text-muted text-sm">O encuéntrame en:</span>
          <a
            href={SITE_CONFIG.github.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={SITE_CONFIG.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <Linkedin size={20} />
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
