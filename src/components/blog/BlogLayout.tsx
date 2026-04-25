import { Badge } from '../ui/Badge'

interface BlogLayoutProps {
  children: React.ReactNode
  title?: string
  date?: string
  readTime?: string
  tags?: string[]
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function BlogLayout({ children, title, date, readTime, tags }: BlogLayoutProps) {
  // TODO: implement Table of Contents (TOC) sidebar for long posts

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Post header */}
        {(title || date || readTime || tags) && (
          <header className="mb-10">
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <Badge key={tag} variant="purple">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {title && (
              <h1 className="text-4xl font-bold text-text-primary leading-tight mb-4">{title}</h1>
            )}

            {(date || readTime) && (
              <div className="flex items-center gap-4 text-sm text-text-muted">
                {date && <span>{formatDate(date)}</span>}
                {date && readTime && (
                  <span
                    className="w-px h-4 inline-block"
                    style={{ backgroundColor: 'rgba(255,255,255,0.10)' }}
                  />
                )}
                {readTime && <span>{readTime} de lectura</span>}
              </div>
            )}
          </header>
        )}

        {/* Divider */}
        {(title || date || readTime || tags) && (
          <hr style={{ borderColor: 'rgba(255,255,255,0.06)' }} className="mb-10" />
        )}

        {/* Article body */}
        <article className="prose prose-invert prose-lg max-w-none mt-10">{children}</article>
      </div>
    </main>
  )
}
