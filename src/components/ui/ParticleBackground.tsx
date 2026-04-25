import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlimAsync } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

export default function ParticleBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlimAsync(engine)
  }, [])

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
        init={init}
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
