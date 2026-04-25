import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { GradientText } from '../ui/GradientText'
import { useLanguage, type Lang } from '../../contexts/LanguageContext'

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { lang, setLang, t } = useLanguage()

  const navLinks = [
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.certifications, href: '#certifications' },
    { label: t.nav.blog, href: '#blog' },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(10,10,15,0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold">
          <GradientText>jmario.dev</GradientText>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <div className="flex items-center gap-1 text-xs font-semibold">
            {(['es', 'en'] as Lang[]).map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && <span className="text-text-dim">|</span>}
                <button
                  onClick={() => setLang(l)}
                  className={`px-1 py-0.5 rounded transition-colors duration-200 ${
                    lang === l
                      ? 'text-accent-purple'
                      : 'text-text-muted hover:text-text-secondary'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border border-accent-purple/40 text-accent-purple hover:bg-accent-purple/10 transition-colors duration-200"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
