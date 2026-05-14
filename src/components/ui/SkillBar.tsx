import { motion } from 'framer-motion'

interface SkillBarProps {
  name: string
  level: number
}

export default function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-text-secondary">{name}</span>
        <span className="text-xs text-text-muted">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
          className="h-full rounded-full"
          style={{ background: 'var(--gradient-main)' }}
        />
      </div>
    </div>
  )
}
