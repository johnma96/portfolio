import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { useTheme } from './contexts/ThemeContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { NotFound } from './pages/NotFound'
import TechOrbit from './components/ui/TechOrbit'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { BackToTop } from './components/ui/BackToTop'
import { CustomCursor } from './components/ui/CustomCursor'

function AppContent() {
  const { theme } = useTheme()

  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />

      {/* TechOrbit fijo en el fondo — opacidad según tema */}
      <div
        className="fixed hidden lg:flex items-center justify-center pointer-events-none"
        style={{
          right: '-60px',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: theme === 'light' ? 0.2 : 0.07,
          zIndex: 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <TechOrbit />
      </div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}
