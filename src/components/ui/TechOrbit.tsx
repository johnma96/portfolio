import { motion } from 'framer-motion'

interface Ring {
  radius: number
  duration: number
  techs: string[]
}

const rings: Ring[] = [
  { radius: 140, duration: 20, techs: ['Python', 'SQL'] },
  { radius: 230, duration: 30, techs: ['GCP', 'BigQuery', 'Airflow'] },
  { radius: 320, duration: 45, techs: ['Kubernetes', 'MLflow', 'LLMs', 'Docker'] },
]

function TechNode({ label }: { label: string }) {
  return (
    <motion.span
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      className="font-mono text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-text-secondary whitespace-nowrap select-none"
    >
      {label}
    </motion.span>
  )
}

function OrbitRing({ ring }: { ring: Ring }) {
  const size = ring.radius * 2
  const nodeCount = ring.techs.length

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: ring.duration, ease: 'linear' }}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        border: '1px solid rgba(167,139,250,0.15)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {ring.techs.map((tech, i) => {
        const angleDeg = (360 / nodeCount) * i - 90
        const angleRad = (angleDeg * Math.PI) / 180
        const x = ring.radius * Math.cos(angleRad)
        const y = ring.radius * Math.sin(angleRad)

        return (
          <div
            key={tech}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: ring.duration, ease: 'linear' }}
            >
              <TechNode label={tech} />
            </motion.div>
          </div>
        )
      })}
    </motion.div>
  )
}

export default function TechOrbit() {
  return (
    <div className="hidden md:block" style={{ width: 700, height: 700, position: 'relative' }}>
      {rings.map((ring) => (
        <OrbitRing key={ring.radius} ring={ring} />
      ))}

    </div>
  )
}
