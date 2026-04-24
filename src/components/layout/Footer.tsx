import { Github, Linkedin, Mail } from 'lucide-react'
import { GradientText } from '../ui/GradientText'
import { SITE_CONFIG } from '../../data/config'

export function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-semibold">
          <GradientText>jmario.dev</GradientText>
        </p>

        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} Mario Montoya. Hecho con React + Vite.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={SITE_CONFIG.github.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={SITE_CONFIG.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
