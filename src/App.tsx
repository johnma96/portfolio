import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { NotFound } from './pages/NotFound'
import TechOrbit from './components/ui/TechOrbit'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        {/* TechOrbit fijo en el fondo — visible en toda la página */}
        <div
          className="fixed hidden lg:flex items-center justify-center pointer-events-none"
          style={{ right: '-60px', top: '50%', transform: 'translateY(-50%)', opacity: 0.07, zIndex: 0 }}
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
    </LanguageProvider>
  )
}
