'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../constants'
import { X, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isClickScrolling = useRef(false)
  const pathname = usePathname()

  useEffect(() => {
    let lastScrollY = window.scrollY
    let stopTimer: ReturnType<typeof setTimeout>
    const handleAction = () => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY
      if (isScrollingDown && currentScrollY > 50) {
        setIsVisible(false)
        clearTimeout(stopTimer)
      } else {
        setIsVisible(true)
      }
      if (!isScrollingDown || currentScrollY <= 50) {
        clearTimeout(stopTimer)
        stopTimer = setTimeout(() => setIsVisible(true), 500)
      }
      lastScrollY = currentScrollY
      setIsScrolled(currentScrollY > 50)
    }
    window.addEventListener('scroll', handleAction, { passive: true })
    window.addEventListener('mousemove', handleAction, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleAction)
      window.removeEventListener('mousemove', handleAction)
      clearTimeout(stopTimer)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      setActiveSection(id)
      isClickScrolling.current = true
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      setTimeout(() => { isClickScrolling.current = false }, 1000)
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const updateActiveSection = () => {
      if (isClickScrolling.current) return
      const scrollPos = window.scrollY + 150
      if (window.scrollY < 100) { setActiveSection(''); return }
      const sections = [
        { id: 'location', el: document.getElementById('location') },
        { id: 'faq', el: document.getElementById('faq') },
        { id: 'review', el: document.getElementById('review') },
        { id: 'abortion-clinic', el: document.getElementById('abortion-clinic') },
        { id: 'clinics', el: document.getElementById('clinics') },
        { id: 'doctors', el: document.getElementById('doctors') },
        { id: 'about', el: document.getElementById('about') },
      ]
      for (const section of sections) {
        if (section.el && scrollPos >= section.el.offsetTop) {
          setActiveSection(section.id)
          return
        }
      }
    }
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { updateActiveSection(); ticking = false })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    updateActiveSection()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  const isLinkActive = (link: typeof NAV_LINKS[0]) => {
    if (link.href) return pathname === link.href
    return activeSection === link.id
  }

  const getLinkClass = (link: typeof NAV_LINKS[0]) => {
    const active = isLinkActive(link)
    const base = 'relative text-[11px] font-semibold tracking-tight transition-all duration-200 whitespace-nowrap px-2 py-1 rounded-full'
    if (active) return `${base} bg-primary text-white font-bold`
    if (link.highlight) return `${base} text-primary font-bold hover:bg-primary/10`
    return `${base} text-primary hover:bg-primary/10`
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.15, ease: 'circOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2 shadow-sm border-b border-primary/10'
            : 'bg-transparent py-3'
        }`}
      >
        <div className="container mx-auto px-10 flex items-center justify-between">

          {/* 로고 */}
          <div
            className="cursor-pointer z-50 flex-shrink-0"
            onClick={() => { setActiveSection(''); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <img
              src="https://i.imgur.com/f7h5DY0.png"
              alt="연세365 로고"
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-8' : 'h-9 md:h-10'}`}
            />
          </div>

          {/* PC 네비 */}
          <nav className="hidden lg:flex items-center justify-center gap-3 flex-1 mx-10">
            {NAV_LINKS.map((link) => (
              link.href ? (
                <a key={link.id} href={link.href} className={getLinkClass(link)}>
                  {link.label}
                </a>
              ) : (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className={getLinkClass(link)}>
                  {link.label}
                </button>
              )
            ))}
          </nav>

          {/* 모바일 오른쪽 */}
          <div className="lg:hidden flex items-center gap-2">
            
            <button className="z-50 p-1.5 text-primary" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>

        </div>
      </motion.header>

      {/* 모바일 슬라이드 메뉴 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 z-[60] lg:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[240px] bg-white z-[61] lg:hidden flex flex-col shadow-2xl border-l border-primary/10"
            >
              <div className="flex items-center justify-between p-4 border-b border-primary/10">
                <span className="text-sm font-bold text-primary">메뉴</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 text-primary">
                  <X size={22} />
                </button>
              </div>

              <div className="flex flex-col px-4 py-3 overflow-y-auto flex-grow">
                {NAV_LINKS.map((link) => (
                  link.href ? (
                    
                      <a key={link.id}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-3 px-3 rounded-xl mb-1 text-[13px] font-semibold tracking-tight border-b border-gray-50 ${
                        link.highlight ? 'text-primary font-bold bg-primary/5' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.highlight && (
                        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">핵심</span>
                      )}
                    </a>
                  ) : (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`flex items-center justify-between py-3 px-3 rounded-xl mb-1 text-left text-[13px] font-semibold tracking-tight border-b border-gray-50 ${
                        activeSection === link.id ? 'text-primary font-bold bg-primary/5' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{link.label}</span>
                    </button>
                  )
                ))}
              </div>

              <div className="p-4 bg-primary/5 border-t border-primary/10 space-y-2">
                
                  <a href="http://pf.kakao.com/_TpaBj/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#FEE500] text-[#3B1B1B] text-[13px] font-bold py-3 rounded-xl"
                >
                  💬 카카오톡 상담
                </a>
                
                  <a href="tel:02-585-3650"
                  className="block text-center bg-primary text-white text-[13px] font-bold py-3 rounded-xl"
                >
                  📞 02-585-3650
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header