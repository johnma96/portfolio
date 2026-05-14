import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useLanguage, type Lang } from '../../contexts/LanguageContext'
import { useTheme } from '../../contexts/ThemeContext'

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { lang, setLang, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.certifications, href: '#certifications' },
    { label: t.nav.blog, href: '#blog' },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const id = href.replace('#', '')
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" style={{ fontFamily: "'Courier New', monospace", lineHeight: '1.3' }}>
            <div>
              <span style={{ color: 'var(--terminal-color)', opacity: 0.7 }}>~ </span>
              <span style={{ color: 'var(--text-dim)' }}>❯ </span>
              <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>jmz</span>
            </div>
            <div style={{ fontSize: '0.75em' }}>
              <span style={{ color: 'var(--terminal-color)' }}>--mode production</span>
              <span className="cursor-blink" style={{ color: 'var(--terminal-color)' }}>█</span>
            </div>
          </a>

          {/* Desktop links */}
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

          {/* Right side */}
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

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Desktop CTA */}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border border-accent-purple/40 text-accent-purple hover:bg-accent-purple/10 transition-colors duration-200"
            >
              {t.nav.cta}
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-1.5 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: 'var(--bg-primary)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="py-3 text-sm text-text-secondary hover:text-text-primary transition-colors border-b border-white/5 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="mt-3 text-center py-3 rounded-lg border border-accent-purple/40 text-accent-purple text-sm font-medium hover:bg-accent-purple/10 transition-colors"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
