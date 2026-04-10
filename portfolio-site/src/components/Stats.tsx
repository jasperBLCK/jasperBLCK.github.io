import { motion } from 'framer-motion'

const stats = [
  { value: '10+', label: 'Технологий в стеке' },
  { value: '4+', label: 'Проектов реализовано' },
  { value: '3', label: 'Хакатона пройдено' },
]

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24 border-t border-b border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)', scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-display italic bg-gradient-to-r from-[#89AACC] to-[#4E85BF] bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <p className="text-sm text-muted uppercase tracking-[0.15em] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
