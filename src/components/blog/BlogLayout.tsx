import type { PostMeta } from '../../data/posts-meta'
import { Badge } from '../ui/Badge'

interface BlogLayoutProps {
  children: React.ReactNode
  meta: PostMeta
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function BlogLayout({ children, meta }: BlogLayoutProps) {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {meta.tags.map((tag) => (
              <Badge key={tag} variant="purple">{tag}</Badge>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-text-primary leading-tight mb-4">
            {meta.title}
          </h1>

          <p className="text-text-secondary mb-4">{meta.excerpt}</p>

          <div className="flex items-center gap-4 text-sm text-text-muted">
            <span>{formatDate(meta.date)}</span>
            <span className="w-px h-4 inline-block" style={{ backgroundColor: 'rgba(255,255,255,0.10)' }} />
            <span>{meta.readTime} de lectura</span>
          </div>
        </header>

        <hr style={{ borderColor: 'rgba(255,255,255,0.06)' }} className="mb-10" />

        <article className="prose prose-invert prose-lg max-w-none">
          {children}
        </article>
      </div>
    </main>
  )
}
