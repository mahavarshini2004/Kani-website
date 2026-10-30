
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches === false || reduceMotion) {
      return
    }

    let animationFrame

    const handlePointerMove = (event) => {
      if (animationFrame) cancelAnimationFrame(animationFrame)

      animationFrame = requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY })
        setVisible(true)
      })
    }

    const handlePointerOver = (event) => {
      if (!(event.target instanceof Element)) return

      setHovering(
        Boolean(
          event.target.closest(
            'a, button, input, textarea, select, [role="button"]',
          ),
        ),
      )
    }

    const handlePointerLeave = () => setVisible(false)
    const handlePointerEnter = () => setVisible(true)

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    })
    document.addEventListener('pointerover', handlePointerOver)
    document.addEventListener('pointerleave', handlePointerLeave)
    document.addEventListener('pointerenter', handlePointerEnter)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerleave', handlePointerLeave)
      document.removeEventListener('pointerenter', handlePointerEnter)

      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] hidden overflow-hidden md:block"
    >
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-[#d8a52b]"
        animate={{
          x: position.x - (hovering ? 22 : 17),
          y: position.y - (hovering ? 22 : 17),
          width: hovering ? 44 : 34,
          height: hovering ? 44 : 34,
          opacity: visible ? 0.85 : 0,
        }}
        transition={{
          x: { type: 'spring', stiffness: 180, damping: 24 },
          y: { type: 'spring', stiffness: 180, damping: 24 },
          width: { duration: 0.2 },
          height: { duration: 0.2 },
          opacity: { duration: 0.18 },
        }}
      />

      <motion.div
        className="fixed left-0 top-0 h-2.5 w-2.5 rounded-full bg-[#18823b]"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          x: { duration: 0 },
          y: { duration: 0 },
          opacity: { duration: 0.15 },
        }}
      />
    </div>
  )
}
