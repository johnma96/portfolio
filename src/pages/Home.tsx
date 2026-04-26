import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../components/sections/Hero'
import { Projects } from '../components/sections/Projects'
import { Experience } from '../components/sections/Experience'
import { Skills } from '../components/sections/Skills'
import { Certifications } from '../components/sections/Certifications'
import { BlogPreview } from '../components/sections/BlogPreview'
import { Contact } from '../components/sections/Contact'

export function Home() {
  const location = useLocation()

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (!target) return
    const el = document.getElementById(target)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      // sections render async — retry once after paint
      const id = requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      })
      return () => cancelAnimationFrame(id)
    }
  }, [location.state])

  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <BlogPreview />
      <Contact />
    </main>
  )
}
