import { Hero } from '../components/sections/Hero'
import { Projects } from '../components/sections/Projects'
import { Skills } from '../components/sections/Skills'
import { BlogPreview } from '../components/sections/BlogPreview'
import { Contact } from '../components/sections/Contact'

export function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <BlogPreview />
      <Contact />
    </main>
  )
}
