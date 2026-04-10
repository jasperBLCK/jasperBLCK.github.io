import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  onComplete: () => void
}

const words = ['Архитектура', 'Backend', 'Системы']

export default function LoadingScreen({ onComplete }: Props) {
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const startTime = useRef(0)
  const framerId = useRef(0)

  useEffect(() => {
    startTime.current = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime.current
      const progress = Math.min(Math.floor((elapsed / 2700) * 100), 100)
      setCount(progress)

      if (progress < 100) {
        framerId.current = requestAnimationFrame(tick)
      } else {
        setTimeout(onComplete, 400)
      }
    }

    framerId.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(framerId.current)
  }, [onComplete])

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length)
    }, 900)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top-left label */}
      <motion.div
        className="p-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs text-muted uppercase tracking-[0.3em]">Portfolio</span>
      </motion.div>

      {/* Center rotating words */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom */}
      <div className="p-8 flex justify-end items-end">
        <span className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none">
          {String(count).padStart(3, '0')}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-[3px] bg-stroke/50">
        <div
          className="h-full accent-gradient transition-transform duration-75"
          style={{
            transform: `scaleX(${count / 100})`,
            transformOrigin: 'left',
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
          }}
        />
      </div>
    </motion.div>
  )
}
