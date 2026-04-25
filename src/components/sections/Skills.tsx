import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import { SKILL_GROUPS, type SkillGroup } from '../../data/skills'
import SkillBar from '../ui/SkillBar'

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 max-w-6xl mx-auto px-6"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
    >
      <p className="text-accent-purple font-mono text-sm mb-3">// Stack técnico</p>
      <h2 className="text-3xl font-bold text-text-primary mb-2">Stack técnico</h2>
      <p className="text-text-secondary mb-12">
        Tecnologías con las que construyo sistemas ML en producción.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group: SkillGroup) => (
          <motion.div
            key={group.label}
            variants={fadeInUp}
            className="rounded-xl p-6 transition-colors duration-300"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
            whileHover={{
              borderColor: 'rgba(167,139,250,0.30)',
            }}
          >
            <h3 className="text-base font-semibold text-text-primary mb-5">{group.label}</h3>
            <div className="flex flex-col gap-4">
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
