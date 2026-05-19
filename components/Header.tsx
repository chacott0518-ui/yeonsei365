'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../constants'
import { X, Menu, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

const SUB_MENUS: Record<string, { label: string; href: string }[]> = {
  'abortion-clinic': [
    { label: '임신중절수술', href: '/abortion' },
    { label: '수술 방법·종류', href: '/abortion/method' },
    { label: '수술 절차·안전성', href: '/abortion/surgery' },
    { label: '주수별 비용 안내', href: '/abortion/cost' },
    { label: '수술 정보·보호자', href: '/abortion/info' },
    { label: '합법화 안내', href: '/abortion/legal' },
    { label: '수술 후 관리', href: '/abortion/recovery' },
    { label: '수술 후기', href: '/abortion/review' },
    { label: '임신중절 병원', href: '/abortion/hospital' },
  ],
  'pregnancy-calc': [
    { label: '임신주수 계산기', href: '/pregnancy-calculator' },
    { label: '배란일·가임기 계산기', href: '/ovulation-calculator' },
  ],
  'abortion-surgery': [
    { label: '임신중절수술 기간', href: '/blog/abortion-period' },
    { label: '임신중절수술 후 관리', href: '/blog/abortion-after' },
    { label: '임신중절수술 금식', href: '/blog/abortion-fasting' },
    { label: '임신중절수술 부작용', href: '/blog/abortion-side' },
    { label: '임신중절수술 후 생리', href: '/blog/abortion-menstruation' },
    { label: '임신중절수술 절차', href: '/blog/abortion-process' },
    { label: '임신중절수술 보험', href: '/blog/abortion-insurance' },
    { label: '임신중절수술 보호자', href: '/blog/abortion-guardian' },
  ],
  'price': [
    { label: '낙태 비용 가격 총정리', href: '/blog/abortion-price' },
    { label: '임신중절수술 비용', href: '/blog/abortion-cost' },
    { label: '임신중절수술 금액', href: '/blog/abortion-amount' },
    { label: '인공임신중절수술 비용', href: '/blog/abortion-info' },
    { label: '임신초기중절수술 안내', href: '/blog/abortion-surgery' },
    { label: '낙태합법화 뜻·시기', href: '/blog/abortion-legal' },
  ],
  'clinics': [
    { label: '사당역 산부인과 연세365', href: '/womens-clinic/sadang' },
    { label: '산부인과 처음 방문 안내', href: '/womens-clinic/first-visit' },
    { label: '생리통 꼭 산부인과 가야 하는 이유', href: '/womens-clinic/menstrual-pain' },
    { label: '임신중절수술 혼자 가도 되나요?', href: '/blog/abortion-alone' },
  ],
  'review': [
    { label: '병원 방문 후기', href: '/blog/hospital-review' },
  ],
  'faq': [
    { label: '자가진단 퀴즈', href: '/health-magazine/quiz' },
    { label: '건강 칼럼', href: '/health-magazine/column' },
    { label: 'FAQ 전체보기', href: '/abortion/faq' },
  ],
  'health-hub': [
    { label: 'Q&A 실시간 답변', href: '/health-hub' },
    { label: '질문 남기기', href: '/health-hub/ask' },
  ],
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const isClickScrolling = useRef(false)
  const pathname = usePathname()
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let stopTimer: ReturnType<typeof setTimeout>
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY
      if (isScrollingDown && currentScrollY > 80) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      clearTimeout(stopTimer)
      stopTimer = setTimeout(() => setIsVisible(true), 300)
      lastScrollY = currentScrollY
      setIsScrolled(currentScrollY > 50)
    }
  
    const handleShow = () => {
      clearTimeout(stopTimer)
      setIsVisible(true)
    }
  
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleShow, { passive: true })
    window.addEventListener('touchstart', handleShow, { passive: true })
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleShow)
      window.removeEventListener('touchstart', handleShow)
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
    if (link.href) {
      if (link.id === 'abortion-clinic') return pathname.startsWith('/abortion')
      if (link.id === 'faq') return pathname.startsWith('/abortion/faq')
      if (link.id === 'price') return pathname.startsWith('/abortion/cost') || pathname.startsWith('/blog/abortion')
      return pathname === link.href || pathname.startsWith('/blog/abortion')
    }
    return activeSection === link.id
  }

  const getLinkClass = (link: typeof NAV_LINKS[0]) => {
    const active = isLinkActive(link)
    const base = 'relative text-[11px] font-semibold tracking-tight transition-all duration-200 whitespace-nowrap px-2 py-1 rounded-full flex items-center gap-0.5'
    if (active) return `${base} bg-primary text-white font-bold`
    if (link.highlight) return `${base} text-primary font-bold hover:bg-primary/10`
    return `${base} text-primary hover:bg-primary/10`
  }

  const handleMouseEnter = (id: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
    if (SUB_MENUS[id]) setOpenDropdown(id)
  }

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 200)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.15, ease: 'circOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-primary/10 ${
          isScrolled ? 'py-2 shadow-sm' : 'py-3'
        }`}
      >
        <div className="container mx-auto px-10 flex items-center justify-between">
          <div
            className="cursor-pointer z-50 flex-shrink-0"
            onClick={() => { setActiveSection(''); if (pathname === '/') { window.scrollTo({ top: 0, behavior: 'smooth' }) } else { window.location.href = '/' } }}
          >
            <img
              src="https://i.imgur.com/f7h5DY0.png"
              alt="연세365 로고"
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-8' : 'h-9 md:h-10'}`}
            />
          </div>

          <nav className="hidden lg:flex items-center justify-center gap-3 flex-1 mx-10">
            {NAV_LINKS.map((link) => {
              const hasSub = !!SUB_MENUS[link.id]
              return (
                <div
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.href ? (
                    <a href={link.href} className={getLinkClass(link)}>
                      {link.label}
                      {hasSub && <ChevronDown size={10} className={`transition-transform duration-200 ${openDropdown === link.id ? 'rotate-180' : ''}`} />}
                    </a>
                  ) : (
                    <button onClick={() => scrollToSection(link.id)} className={getLinkClass(link)}>
                      {link.label}
                      {hasSub && <ChevronDown size={10} />}
                    </button>
                  )}
                  <AnimatePresence>
                    {hasSub && openDropdown === link.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-pink-100 overflow-hidden z-[100]"
                        onMouseEnter={() => { if (dropdownTimer.current) clearTimeout(dropdownTimer.current) }}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-2">
                          {SUB_MENUS[link.id].map((sub) => (
                            <a
                              key={sub.href}
                              href={sub.href}
                              className={`block px-4 py-2.5 text-[12px] font-semibold transition-all duration-150 ${
                                pathname === sub.href
                                  ? 'bg-primary/10 text-primary'
                                  : 'text-gray-700 hover:bg-pink-50 hover:text-primary'
                              }`}
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          <div className="lg:hidden flex items-center gap-2">
            <button className="z-50 p-1.5 text-primary" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 z-[60] lg:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[260px] bg-white z-[61] lg:hidden flex flex-col shadow-2xl border-l border-primary/10"
            >
              <div className="flex items-center justify-between p-4 border-b border-primary/10">
                <span className="text-sm font-bold text-primary">메뉴</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 text-primary"><X size={22} /></button>
              </div>
              <div className="flex flex-col px-4 py-3 overflow-y-auto flex-grow">
                {NAV_LINKS.map((link) => {
                  const hasSub = !!SUB_MENUS[link.id]
                  const isExpanded = mobileExpanded === link.id
                  return (
                    <div key={link.id}>
                      <div className={`flex items-center justify-between py-3 px-3 rounded-xl mb-1 text-[13px] font-semibold tracking-tight border-b border-gray-50 ${link.highlight ? 'text-primary font-bold bg-primary/5' : 'text-gray-700 hover:bg-gray-50'}`}>
                        {link.href ? (
                          <a href={hasSub ? undefined : link.href} onClick={() => hasSub ? setMobileExpanded(isExpanded ? null : link.id) : setIsMobileMenuOpen(false)} className="flex-1">
                            {link.label}
                          </a>
                        ) : (
                          <button onClick={() => scrollToSection(link.id)} className="flex-1 text-left">{link.label}</button>
                        )}
                        {hasSub && (
                          <button onClick={() => setMobileExpanded(isExpanded ? null : link.id)} className="p-1">
                            <ChevronDown size={14} className={`text-primary transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>
                      <AnimatePresence>
                        {hasSub && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 flex flex-col gap-0.5">
                              {SUB_MENUS[link.id].map((sub) => (
                                <a key={sub.href} href={sub.href} onClick={() => setIsMobileMenuOpen(false)}
                                  className={`flex items-center gap-2 py-2 px-3 rounded-lg text-[12px] font-semibold transition-all ${pathname === sub.href ? 'text-primary bg-primary/10' : 'text-gray-600 hover:text-primary hover:bg-pink-50'}`}>
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                                  {sub.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
              <div className="p-4 bg-primary/5 border-t border-primary/10 space-y-2">
                <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" className="block text-center bg-[#FEE500] text-[#3B1B1B] text-[13px] font-bold py-3 rounded-xl">💬 카카오톡 상담</a>
                <a href="tel:02-585-3650" className="block text-center bg-primary text-white text-[13px] font-bold py-3 rounded-xl">📞 02-585-3650</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header