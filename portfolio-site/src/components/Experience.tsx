import { motion } from 'framer-motion'

const experience = [
  {
    role: 'Backend-разработчик',
    company: 'SMART HELPDESK',
    period: 'Стажировка · 3 месяца',
    items: [
      'Спроектировал микросервисную архитектуру с нуля (10+ сервисов)',
      'REST API (FastAPI) для клиентов, операторов и администраторов',
      'Асинхронная работа с PostgreSQL через SQLAlchemy + asyncpg',
      'S3-хранилище (MinIO), аутентификация (Keycloak), Docker Compose',
      'Успешная защита проекта в составе команды',
    ],
  },
]

const education = [
  {
    title: 'Кибербезопасность',
    place: 'Школа 21 (Сбер)',
    detail: 'Peer-to-peer обучение: системное администрирование, сети, безопасность',
  },
  {
    title: 'Сети и телекоммуникации',
    place: 'ГГНТУ им. М.Д. Миллионщикова',
    detail: 'Высшее образование (в процессе)',
  },
]

const skills = [
  { category: 'Backend', items: ['Python 3.13', 'FastAPI', 'asyncio', 'SQLAlchemy', 'Pydantic'] },
  { category: 'Инфраструктура', items: ['PostgreSQL', 'Redis', 'Docker', 'Keycloak', 'S3 / MinIO', 'Linux'] },
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML / CSS'] },
]

const hackathons = [
  { place: '#1', name: 'Региональный хакатон', label: 'Победитель' },
  { place: '#2', name: 'IT Ansar Хакатон', label: 'Призёр' },
  { place: 'TOP', name: 'VTB API Хакатон', label: 'Полуфиналист' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: '-60px' },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.92, y: 20 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: '-60px' },
}

export default function Experience() {
  return (
    <section id="resume" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Resume</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-body font-light text-text-primary">
            Опыт и <span className="font-display italic">навыки</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Experience + Education */}
          <div className="space-y-12">
            {/* Experience */}
            {experience.map((exp) => (
              <motion.div key={exp.role} {...fadeInUp} className="border-l-2 border-gradient-to-b from-[#89AACC] to-[#4E85BF] pl-6 relative">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full accent-gradient" />
                <span className="inline-block text-[11px] tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-[#89AACC]/30 text-[#89AACC] mb-3 font-medium">
                  Работа
                </span>
                <h3 className="text-xl font-semibold text-text-primary mb-1">{exp.role}</h3>
                <p className="text-sm text-[#89AACC] font-medium mb-1">{exp.company}</p>
                <p className="text-xs text-muted font-mono mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-[#89AACC] mt-1 flex-shrink-0">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div {...fadeInUp}>
              <span className="inline-block text-[11px] tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-[#89AACC]/30 text-[#89AACC] mb-6 font-medium">
                Образование
              </span>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.title} className="border-l border-stroke pl-5">
                    <h4 className="text-base font-semibold text-text-primary mb-0.5">{edu.title}</h4>
                    <p className="text-sm text-[#89AACC] font-medium mb-1">{edu.place}</p>
                    <p className="text-xs text-muted">{edu.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hackathons */}
            <motion.div {...fadeInUp}>
              <span className="inline-block text-[11px] tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-[#89AACC]/30 text-[#89AACC] mb-6 font-medium">
                Хакатоны
              </span>
              <div className="grid grid-cols-3 gap-3">
                {hackathons.map((h, i) => (
                  <motion.div
                    key={h.name}
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true, margin: '-40px' }}
                    className="bg-surface border border-stroke rounded-2xl p-4 text-center hover:border-[#89AACC]/40 hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#89AACC] to-[#4E85BF] bg-clip-text text-transparent mb-1">
                      {h.place}
                    </div>
                    <p className="text-xs font-medium text-text-primary mb-0.5 leading-tight">{h.name}</p>
                    <p className="text-[10px] text-muted">{h.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills */}
          <div className="space-y-6">
            {skills.map((skillGroup, i) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30, filter: 'blur(6px)', scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: '-60px' }}
                className="bg-surface border border-stroke rounded-2xl p-6 hover:border-stroke/60 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg accent-gradient flex items-center justify-center">
                    {skillGroup.category === 'Backend' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                    )}
                    {skillGroup.category === 'Инфраструктура' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                    )}
                    {skillGroup.category === 'Frontend' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, j) => (
                    <span
                      key={item}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                        j < 2
                          ? 'bg-[#89AACC]/10 text-[#89AACC] border border-[#89AACC]/20'
                          : 'bg-surface border border-stroke text-muted'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* About card */}
            <motion.div {...fadeInUp} className="bg-surface border border-stroke rounded-2xl p-6">
              <h3 className="text-base font-semibold text-text-primary mb-3">Обо мне</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">
                19 лет, Грозный. Понимаю системы на уровне сетей (HTTP, DNS, TCP/IP).
                Проектирую архитектуру, которая выдержит рост проекта.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Изучаю кибербезопасность в <span className="text-text-primary font-medium">Школе 21</span>.
                Умею работать в команде, аргументировать решения и доводить задачи до конца.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
