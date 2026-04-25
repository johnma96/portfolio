import { motion } from 'framer-motion'
import { BlogCard } from '../components/ui/BlogCard'
import { POSTS_META } from '../data/posts-meta'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { useLanguage } from '../contexts/LanguageContext'

export function Blog() {
  const { t } = useLanguage()

  return (
    <main className="pt-28 pb-20">
      <motion.div
        className="max-w-4xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeInUp} className="text-accent-purple font-mono text-sm mb-3">
          {t.blog.label}
        </motion.p>
        <motion.h1 variants={fadeInUp} className="text-4xl font-bold text-text-primary mb-2">
          {t.blog.heading}
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-text-secondary mb-2">
          {t.blog.subtitle}
        </motion.p>
        <motion.p variants={fadeInUp} className="text-text-muted text-sm mb-12">
          {POSTS_META.length} {t.blog.articlesPublished}
        </motion.p>

        <motion.div variants={staggerContainer} className="flex flex-col gap-6">
          {POSTS_META.map((post) => (
            <motion.div key={post.slug} variants={fadeInUp}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}
