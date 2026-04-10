import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Repo {
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  updated_at: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 40, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: '-80px' },
}

const spanPattern = [
  'md:col-span-7',
  'md:col-span-5',
  'md:col-span-5',
  'md:col-span-7',
]

const colorPattern = [
  'from-[#89AACC]/20 to-[#4E85BF]/10',
  'from-[#4E85BF]/20 to-[#89AACC]/10',
  'from-[#89AACC]/15 to-transparent',
  'from-[#4E85BF]/15 to-transparent',
]

const aspectPattern = [
  'aspect-[16/10]',
  'aspect-[4/5] md:aspect-[4/5]',
  'aspect-[4/5] md:aspect-[4/5]',
  'aspect-[16/10]',
]

export default function Works() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/jasperBLCK/repos?sort=updated&per_page=20')
      .then((res) => res.json())
      .then((data: Repo[]) => {
        const filtered = data
          .filter((r) => r.name !== 'jasperBLCK' && r.name !== 'jasperBLCK.github.io')
          .slice(0, 4)
        setRepos(filtered)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
          </div>
          <div className="flex items-end justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-body font-light text-text-primary mb-3">
                Мои <span className="font-display italic">проекты</span>
              </h2>
              <p className="text-sm md:text-base text-muted max-w-md">
                Реальные проекты, загруженные напрямую из моего GitHub.
              </p>
            </div>
            <a
              href="https://github.com/jasperBLCK?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full text-sm px-6 py-3 border border-stroke text-text-primary hover:border-transparent transition-all duration-300 group relative overflow-visible"
            >
              <span className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="relative z-10">Все проекты</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-stroke border-t-[#89AACC] rounded-full animate-spin" />
          </div>
        )}

        {/* Bento Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)', scale: 0.93 }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: '-50px' }}
                className={`${spanPattern[i % 4]} group cursor-pointer block`}
              >
                <div className={`relative ${aspectPattern[i % 4]} bg-surface border border-stroke rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-[#89AACC]/30`}>
                  {/* Background Image */}
                  <img
                    src={`/images/project-${(i % 4) + 1}.png`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                  />
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/30" />
                  {/* Gradient accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorPattern[i % 4]} mix-blend-overlay`} />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-muted uppercase tracking-[0.2em]">
                          {repo.language || 'Project'}
                        </span>
                        {repo.stargazers_count > 0 && (
                          <span className="text-xs text-muted flex items-center gap-1">
                            ★ {repo.stargazers_count}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-body font-semibold text-text-primary mt-2">
                        {repo.name.replace(/-/g, ' ')}
                      </h3>
                    </div>
                    <div>
                      <p className="text-sm text-muted mb-4 max-w-sm">
                        {repo.description || 'Проект без описания — загляни на GitHub, чтобы узнать больше.'}
                      </p>
                      <div className="flex flex-wrap gap-2 items-center">
                        {repo.language && (
                          <span className="text-[11px] font-medium px-3 py-1 rounded-full border border-stroke text-muted bg-bg/50">
                            {repo.language}
                          </span>
                        )}
                        <span className="text-[11px] font-medium px-3 py-1 rounded-full border border-stroke text-muted bg-bg/50">
                          {new Date(repo.updated_at).getFullYear()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="relative rounded-full overflow-visible">
                      <span className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
                      <span className="relative bg-bg text-text-primary rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-2">
                        Открыть — <span className="font-display italic">{repo.name.replace(/-/g, ' ')}</span>
                      </span>
                    </div>
                  </div>

                  {/* Halftone overlay */}
                  <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--muted)) 1px, transparent 1px)', backgroundSize: '4px 4px' }}
                  />
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
