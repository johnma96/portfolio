import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Badge } from './Badge'
import type { PostMeta } from '../../data/posts-meta'
import { useLanguage } from '../../contexts/LanguageContext'

interface BlogCardProps {
  post: PostMeta
}

function formatDate(iso: string, locale: string): string {
  return new Date(iso).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function BlogCard({ post }: BlogCardProps) {
  const { lang, t } = useLanguage()
  const title = lang === 'en' && post.titleEn ? post.titleEn : post.title
  const excerpt = lang === 'en' && post.excerptEn ? post.excerptEn : post.excerpt

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      className="rounded-xl p-6 flex flex-col h-full cursor-pointer"
      onMouseEnter={(e) => {
        e.currentTarget.style.border = '1px solid rgba(56,189,248,0.30)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
      }}
    >
      <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">{formatDate(post.date, t.blog.locale)}</span>
          <span className="text-xs text-text-muted">{post.readTime}</span>
        </div>

        <h2 className="text-lg font-semibold text-text-primary mt-3 mb-2 hover:text-accent-blue transition-colors">
          {title}
        </h2>

        <p
          className="text-text-secondary text-sm leading-relaxed flex-1"
          style={{
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
            overflow: 'hidden',
          }}
        >
          {excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-4">
          <span className="text-accent-blue text-sm font-medium">{t.blog.readMore}</span>
        </div>
      </Link>
    </motion.div>
  )
}
