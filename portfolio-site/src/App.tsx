import { useState } from 'react'
import { motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import Works from './components/Works'
import Experience from './components/Experience'
import Stats from './components/Stats'
import Contact from './components/Contact'

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="bg-bg text-text-primary font-body">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <Hero />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={sectionVariants}
      >
        <Works />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={sectionVariants}
      >
        <Experience />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <Stats />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.div>
    </div>
  )
}
