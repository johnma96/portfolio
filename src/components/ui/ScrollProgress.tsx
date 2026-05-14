import { useScroll, motion } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left"
      style={{ scaleX: scrollYProgress, background: 'var(--gradient-main)' }}
    />
  )
}
