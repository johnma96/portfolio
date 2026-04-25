import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { Badge } from './Badge'
import type { CuratedProject } from '../../data/projects'

interface ProjectCardProps {
  project: CuratedProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderColor: hovered ? 'rgba(167,139,250,0.30)' : 'rgba(255,255,255,0.06)',
        transition: 'border-color 0.2s ease',
      }}
      className="rounded-xl p-5 border flex flex-col h-full"
    >
      {/* Type badge */}
      <div className="mb-3">
        <Badge variant="purple">{project.type}</Badge>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-text-primary mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm mb-4 flex-1">
        {project.description}
      </p>

      {/* Tags */}
      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Metric */}
      {project.metric && (
        <div className="flex items-center gap-1.5 mb-3">
          <TrendingUp size={14} className="text-accent-green shrink-0" />
          <span className="text-accent-green text-sm font-medium">
            {project.metric}
          </span>
        </div>
      )}

      {/* Buttons */}
      {(project.github !== null || project.demo !== null) && (
        <div className="flex gap-2 pt-3 border-t border-white/5">
          {project.github !== null && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs py-1.5 px-3 rounded-lg border border-border-default text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.demo !== null && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs py-1.5 px-3 rounded-lg border border-border-default text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
            >
              Demo →
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}
