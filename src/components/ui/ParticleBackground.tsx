import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticleBackground() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  if (!ready) return null

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: { value: 80 },
            color: { value: ['#a78bfa', '#38bdf8'] },
            links: {
              enable: true,
              color: '#a78bfa',
              opacity: 0.08,
              distance: 120,
            },
            move: { enable: true, speed: 0.4 },
            size: { value: { min: 0.5, max: 1.5 } },
            opacity: { value: { min: 0.1, max: 0.4 } },
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
