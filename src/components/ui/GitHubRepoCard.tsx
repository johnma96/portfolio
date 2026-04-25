import { useState } from 'react'
import { motion } from 'framer-motion'
import { GitFork, Star } from 'lucide-react'
import { Badge } from './Badge'
import type { GitHubRepo } from '../../hooks/useGitHubRepos'

interface GitHubRepoCardProps {
  repo: GitHubRepo
}

function formatRepoName(name: string): string {
  return name
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function getLanguageVariant(language: string | null): 'blue' | 'yellow' | 'default' {
  if (language === 'Python') return 'blue'
  if (language === 'JavaScript' || language === 'TypeScript') return 'yellow'
  return 'default'
}

export function GitHubRepoCard({ repo }: GitHubRepoCardProps) {
  const [hovered, setHovered] = useState(false)

  const visibleTopics = repo.topics.slice(0, 4)

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
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-text-primary font-semibold text-sm leading-snug">
          {formatRepoName(repo.name)}
        </h3>
        {repo.fork && (
          <GitFork size={14} className="text-text-muted shrink-0 mt-0.5" />
        )}
      </div>

      {/* Description */}
      <p
        className={`text-sm mb-3 flex-1 ${
          repo.description
            ? 'text-text-secondary'
            : 'text-text-muted italic'
        }`}
      >
        {repo.description ?? 'Sin descripción'}
      </p>

      {/* Topics */}
      {visibleTopics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {visibleTopics.map((topic) => (
            <span
              key={topic}
              className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-text-muted"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer row */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5 mb-3">
        <div className="flex items-center gap-2">
          {repo.language && (
            <Badge variant={getLanguageVariant(repo.language)}>
              {repo.language}
            </Badge>
          )}
        </div>
        {repo.stargazers_count > 0 && (
          <span className="flex items-center gap-1 text-text-muted text-xs">
            <Star size={12} />
            {repo.stargazers_count}
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-xs py-1.5 px-3 rounded-lg border border-border-default text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
        >
          GitHub →
        </a>
        {repo.homepage && repo.homepage !== '' && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs py-1.5 px-3 rounded-lg border border-border-default text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
          >
            Demo →
          </a>
        )}
      </div>
    </motion.div>
  )
}
