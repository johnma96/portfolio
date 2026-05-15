import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'

export function CustomCursor() {
  const [visible, setVisible]   = useState(false)
  const [hovering, setHovering] = useState(false)
  const { theme } = useTheme()

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const ringX  = useSpring(mouseX, { damping: 28, stiffness: 260 })
  const ringY  = useSpring(mouseY, { damping: 28, stiffness: 260 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
      const target = e.target as Element
      setHovering(!!target.closest('a, button, [role="button"], input, textarea'))
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [mouseX, mouseY])

  const isDark   = theme === 'dark'
  const dotColor = isDark ? '#a78bfa' : '#f97316'

  if (!visible) return null

  return (
    <>
      {/* Ring — spring follow, grows on hover */}
      <motion.div
        className="fixed pointer-events-none rounded-full"
        animate={{ width: hovering ? 44 : 28, height: hovering ? 44 : 28 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{
          zIndex: 9998,
          left: ringX,
          top: ringY,
          x: '-50%',
          y: '-50%',
          border: `1.5px solid ${dotColor}66`,
          backgroundColor: hovering ? `${dotColor}0D` : 'transparent',
        }}
      />

      {/* Dot — exact position */}
      <motion.div
        className="fixed pointer-events-none rounded-full"
        animate={{ width: hovering ? 5 : 7, height: hovering ? 5 : 7 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        style={{
          zIndex: 9999,
          left: mouseX,
          top: mouseY,
          x: '-50%',
          y: '-50%',
          backgroundColor: dotColor,
          opacity: 0.9,
        }}
      />
    </>
  )
}
