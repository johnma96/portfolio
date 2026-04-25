import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BlogCard } from '../ui/BlogCard'
import { POSTS_META } from '../../data/posts-meta'
import { fadeInUp, staggerContainer } from '../../lib/motion'

export function BlogPreview() {
  const previewPosts = POSTS_META.slice(0, 3)

  return (
    <motion.section
      id="blog"
      className="py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.p variants={fadeInUp} className="text-accent-purple font-mono text-sm mb-3">
          // Blog
        </motion.p>

        {/* Title */}
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-text-primary mb-2">
          Artículos técnicos
        </motion.h2>

        {/* Subtitle */}
        <motion.p variants={fadeInUp} className="text-text-secondary mb-12">
          Escribo sobre MLOps, sistemas de producción y el camino de DS a AI Engineer.
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewPosts.map((post) => (
            <motion.div key={post.slug} variants={fadeInUp}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.div variants={fadeInUp} className="mt-10 flex justify-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-accent-blue/40 text-accent-blue font-medium hover:bg-accent-blue/10 transition-colors"
          >
            Ver todos los posts →
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
