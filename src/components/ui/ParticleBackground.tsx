import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useTheme } from '../../contexts/ThemeContext'

export default function ParticleBackground() {
  const [ready, setReady] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  if (!ready) return null

  const isDark = theme === 'dark'

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Particles
        key={theme}
        id="tsparticles"
        options={{
          particles: {
            number: { value: 80 },
            color: { value: isDark ? ['#a78bfa', '#38bdf8'] : ['#f97316', '#eab308'] },
            links: {
              enable: true,
              color: isDark ? '#a78bfa' : '#f97316',
              opacity: isDark ? 0.08 : 0.2,
              distance: 120,
            },
            move: { enable: true, speed: 0.4 },
            size: { value: { min: 0.5, max: 1.5 } },
            opacity: { value: isDark ? { min: 0.1, max: 0.4 } : { min: 0.25, max: 0.6 } },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' } },
            modes: { repulse: { distance: 80, duration: 0.4 } },
          },
          background: { color: 'transparent' },
        }}
      />
    </div>
  )
}
