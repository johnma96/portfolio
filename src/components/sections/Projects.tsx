import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import { CURATED_PROJECTS } from '../../data/projects'
import { SITE_CONFIG } from '../../data/config'
import { useGitHubRepos } from '../../hooks/useGitHubRepos'
import { ProjectCard } from '../ui/ProjectCard'
import { GitHubRepoCard } from '../ui/GitHubRepoCard'
import { RepoCardSkeleton } from '../ui/RepoCardSkeleton'
import { useLanguage } from '../../contexts/LanguageContext'

export function Projects() {
  const { repos, loading, error } = useGitHubRepos()
  const { t } = useLanguage()

  const curatedRepoNames = new Set(
    CURATED_PROJECTS
      .filter((p) => p.github)
      .map((p) => p.github!.split('/').pop()!)
  )

  const displayedRepos = repos
    .filter((r) => !curatedRepoNames.has(r.name))
    .slice(0, SITE_CONFIG.github.maxReposDisplayed)

  const hasRepos = !loading && !error && displayedRepos.length > 0

  return (
    <motion.section
      id="projects"
      className="py-20"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Curated projects */}
        <motion.div variants={fadeInUp} className="mb-12">
          <p className="text-accent-purple font-mono text-sm mb-2">{t.projects.label}</p>
          <h2 className="text-3xl font-bold text-text-primary">{t.projects.heading}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-0">
          {CURATED_PROJECTS.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-16" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

        {/* GitHub repos section */}
        <motion.div variants={fadeInUp} className="mb-12">
          <p className="text-accent-purple font-mono text-sm mb-2">{t.projects.openSourceLabel}</p>
          <h2 className="text-3xl font-bold text-text-primary">{t.projects.openSourceHeading}</h2>
        </motion.div>

        {/* Loading state */}
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <RepoCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error state */}
        {error && (
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <p className="text-text-secondary mb-4">{t.projects.errorMsg}</p>
            <a
              href={SITE_CONFIG.github.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-border-default text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
            >
              {t.projects.viewOnGitHub}
              <ExternalLink size={14} />
            </a>
          </motion.div>
        )}

        {/* Repos grid */}
        {hasRepos && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedRepos.map((repo) => (
                <motion.div key={repo.id} variants={fadeInUp}>
                  <GitHubRepoCard repo={repo} />
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="flex justify-center">
              <a
                href={SITE_CONFIG.github.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm px-5 py-2.5 rounded-lg border border-border-default text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
              >
                {t.projects.viewAllGitHub}
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </>
        )}
      </div>
    </motion.section>
  )
}
