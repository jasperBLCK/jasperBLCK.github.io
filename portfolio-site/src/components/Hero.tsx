import { useEffect, useRef, useState } from 'react'
import { useGSAP } from './useGSAP'
import Hls from 'hls.js'
const navLinks = ['Home', 'Work', 'Resume']

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [activeNav, setActiveNav] = useState('Home')
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

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



  // Scroll listener
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // GSAP entrance
  useGSAP(sectionRef)

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
        <div className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${scrolled ? 'shadow-md shadow-black/10' : ''}`}>
          {/* Logo */}
          <div className="group cursor-pointer mx-1">
            <div className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-r from-[#89AACC] to-[#4E85BF] group-hover:from-[#4E85BF] group-hover:to-[#89AACC] transition-all duration-500 hover:scale-110">
              <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
                <span className="font-display italic text-[13px] text-text-primary">AK</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

          {/* Nav Links */}
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActiveNav(link)}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 hidden sm:block ${
                activeNav === link
                  ? 'text-text-primary bg-stroke/50'
                  : 'text-muted hover:text-text-primary hover:bg-stroke/50'
              }`}
            >
              {link}
            </a>
          ))}

          {/* Divider */}
          <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

          {/* Say hi button */}
          <a
            href="https://t.me/reversoqzzM"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary group overflow-visible"
          >
            <span className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative bg-surface rounded-full backdrop-blur-md px-3 py-1.5 flex items-center gap-1">
              Say hi <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </span>
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Eyebrow */}
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          Portfolio '26
        </p>

        {/* Name */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Ansar Karimov
        </h1>

        {/* Role Line */}
        <p className="blur-in text-base md:text-lg text-muted mb-4">
          Я{' '}
          <span className="font-display italic text-text-primary inline-block">
            Разработчик
          </span>{' '}
          из Грозного.
        </p>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-12">
          Проектирую надёжную микросервисную архитектуру и пишу чистый асинхронный код на Python,
          который выдерживает реальную нагрузку.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex gap-4 flex-wrap justify-center">
          <a
            href="#work"
            className="relative rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg font-medium hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105 group overflow-visible"
          >
            <span className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            Смотреть проекты
          </a>
          <a
            href="https://t.me/reversoqzzM"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary font-medium hover:border-transparent transition-all duration-300 hover:scale-105 group overflow-visible"
          >
            <span className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            Написать мне
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="w-full h-3 accent-gradient animate-scroll-down absolute" />
        </div>
      </div>
    </section>
  )
}
