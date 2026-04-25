import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BlogCard } from '../ui/BlogCard'
import { POSTS_META } from '../../data/posts-meta'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import { useLanguage } from '../../contexts/LanguageContext'

export function BlogPreview() {
  const { t } = useLanguage()
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
        <motion.p variants={fadeInUp} className="text-accent-purple font-mono text-sm mb-3">
          {t.blog.label}
        </motion.p>

        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-text-primary mb-2">
          {t.blog.heading}
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-text-secondary mb-12">
          {t.blog.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewPosts.map((post) => (
            <motion.div key={post.slug} variants={fadeInUp}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-10 flex justify-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-accent-blue/40 text-accent-blue font-medium hover:bg-accent-blue/10 transition-colors"
          >
            {t.blog.viewAll}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
