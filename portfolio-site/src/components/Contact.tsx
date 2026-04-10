import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Hls from 'hls.js'

const socials = [
  { name: 'GitHub', href: 'https://github.com/jasperBLCK', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
  )},
  { name: 'Telegram', href: 'https://t.me/reversoqzzM', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
  )},
  { name: 'LinkedIn', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
]

export default function Contact() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // HLS Video
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const src = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
      return () => hls.destroy()
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
    }
  }, [])

  // GSAP Marquee
  useEffect(() => {
    const el = marqueeRef.current
    if (!el) return
    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 40,
      ease: 'none',
      repeat: -1,
    })
    return () => { tween.kill() }
  }, [])

  const marqueeText = 'BUILDING THE FUTURE • '.repeat(10)

  return (
    <section className="bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden relative">
      {/* Background Video (flipped) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden py-8 mb-12">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary/5 select-none"
          style={{ width: 'max-content' }}
        >
          {marqueeText}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6 mb-16"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-body font-light text-text-primary mb-4">
          Давайте <span className="font-display italic">работать</span> вместе
        </h2>
        <p className="text-sm md:text-base text-muted max-w-md mx-auto mb-8">
          Открыт к предложениям о работе, стажировке и интересным проектам.
        </p>
        <a
          href="https://t.me/reversoqzzM"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 rounded-full text-sm px-8 py-4 bg-text-primary text-bg font-medium hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105 group overflow-visible"
        >
          <span className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          Написать в Telegram
          <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </a>
      </motion.div>

      {/* Footer */}
      <div className="relative z-10 border-t border-stroke max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center text-muted hover:text-text-primary hover:border-[#89AACC]/40 transition-all duration-300"
              title={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-full w-full bg-green-500" />
          </span>
          <span className="text-xs text-muted font-medium">Доступен для проектов</span>
        </div>

        <p className="text-xs text-muted">© 2026 Ансар Каримов</p>
      </div>
    </section>
  )
}
