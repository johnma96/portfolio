import { lazy, Suspense } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { BlogLayout } from '../components/blog/BlogLayout'
import { mdxComponents } from '../components/blog/MDXComponents'
import { POSTS_META } from '../data/posts-meta'

const postModules = import.meta.glob('../content/posts/*.mdx')

function buildKey(slug: string) {
  return `../content/posts/${slug}.mdx`
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  const meta = POSTS_META.find((p) => p.slug === slug)
  if (!slug || !meta) return <Navigate to="/blog" replace />

  const key = buildKey(slug)
  const loader = postModules[key]
  if (!loader) return <Navigate to="/blog" replace />

  const PostContent = lazy(loader as () => Promise<{ default: React.ComponentType<{ components?: Record<string, React.ComponentType> }> }>)

  return (
    <BlogLayout meta={meta}>
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-6 h-6 rounded-full border-2 border-accent-purple border-t-transparent animate-spin" />
          </div>
        }
      >
        <PostContent components={mdxComponents as Record<string, React.ComponentType>} />
      </Suspense>

      <div className="mt-16 pt-8 border-t border-border-subtle">
        <Link
          to="/blog"
          className="text-accent-blue hover:underline text-sm font-medium"
        >
          ← Volver al blog
        </Link>
      </div>
    </BlogLayout>
  )
}
