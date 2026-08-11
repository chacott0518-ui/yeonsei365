'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../constants'
import { X, Menu, ChevronDown, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'

const MEDICAL_SEARCH_HREF = '/#medical-search'
const MEDICAL_SEARCH_ID = 'medical-search'
const MEDICAL_SEARCH_INPUT_ID = 'medical-search-input'

function MedicalSearchIcon({
  size = 16,
  strokeWidth = 1.9,
}: {
  size?: number
  strokeWidth?: number
}) {
  return <Search size={size} strokeWidth={strokeWidth} aria-hidden="true" />
}

const SUB_MENUS: Record<string, { label: string; href: string }[]> = {
  'abortion-clinic': [
    { label: '임신중절수술', href: '/abortion' },
    { label: '임신중절수술 방법·종류', href: '/abortion/method' },
    { label: '임신중절수술 절차·안전성', href: '/abortion/surgery' },
    { label: '임신중절수술 주수별 비용', href: '/abortion/cost' },
    { label: '임신중절수술 준비·보호자 안내', href: '/abortion/info' },
    { label: '임신중절수술 합법·법률 안내', href: '/abortion/legal' },
    { label: '임신중절수술 후 관리', href: '/abortion/recovery' },
    { label: '임신중절수술 후기 안내', href: '/abortion/review' },
    { label: '임신중절수술 병원 안내', href: '/abortion/hospital' },
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
  'about': [
    { label: '의료진 소개', href: '/about' },
    { label: '병원 둘러보기', href: '/about/tour' },
    { label: '진료시간 안내', href: '/about/hours' },
    { label: '찾아오시는길', href: '/about/location' },
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

const pathMatches = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`)

/** 현재 경로에 해당하는 상위 메뉴 id는 최대 1개만 반환 (route active ≠ dropdown open) */
const findActiveNavId = (pathname: string, activeSection: string): string | null => {
  // 전용 상위 href 정확 일치 우선 (예: /abortion/review → 수술후기·사례)
  for (const link of NAV_LINKS) {
    if (link.href && pathname === link.href) return link.id
  }

  let best: { id: string; len: number } | null = null
  for (const [id, items] of Object.entries(SUB_MENUS)) {
    for (const s of items) {
      if (pathMatches(pathname, s.href)) {
        if (!best || s.href.length > best.len) best = { id, len: s.href.length }
      }
    }
  }
  if (best) return best.id

  if (pathname.startsWith('/abortion')) return 'abortion-clinic'

  if (pathname === '/' && activeSection) {
    if (NAV_LINKS.some((l) => l.id === activeSection)) return activeSection
  }
  return null
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
  const rootRef = useRef<HTMLDivElement>(null)

  const closeAllMenus = useCallback(() => {
    setOpenDropdown(null)
    setMobileExpanded(null)
    setIsMobileMenuOpen(false)
  }, [])

  useEffect(() => {
    setOpenDropdown(null)
    setMobileExpanded(null)
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAllMenus()
    }
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node
      if (rootRef.current && !rootRef.current.contains(target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown, { passive: true })
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
    }
  }, [closeAllMenus])

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
      setMobileExpanded(null)
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

  const activeNavId = findActiveNavId(pathname, activeSection)
  const isLinkActive = (link: typeof NAV_LINKS[0]) => activeNavId === link.id
  const headerNavLinks = NAV_LINKS.filter((link) => link.id !== 'location')

  const openConsultModal = () => {
    setIsMobileMenuOpen(false)
    setMobileExpanded(null)
    setOpenDropdown(null)
    window.dispatchEvent(new Event('open-consult-modal'))
  }

  const getLinkClass = (link: typeof NAV_LINKS[0]) => {
    const active = isLinkActive(link)
    const base = 'relative text-[11px] font-semibold tracking-tight transition-all duration-200 whitespace-nowrap px-2 py-1 rounded-full flex items-center gap-0.5 focus:outline-none focus-visible:outline-none'
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

  const blurIfFocused = (e: React.MouseEvent | React.FocusEvent) => {
    const el = e.currentTarget as HTMLElement
    if (document.activeElement === el) el.blur()
  }

  const focusMedicalSearchInput = useCallback(() => {
    window.setTimeout(() => {
      document.getElementById(MEDICAL_SEARCH_INPUT_ID)?.focus({ preventScroll: true })
    }, 420)
  }, [])

  const goToMedicalSearch = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname !== '/') return
      e.preventDefault()
      setIsMobileMenuOpen(false)
      setMobileExpanded(null)
      setOpenDropdown(null)
      const section = document.getElementById(MEDICAL_SEARCH_ID)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        focusMedicalSearchInput()
      } else {
        window.location.href = MEDICAL_SEARCH_HREF
      }
    },
    [pathname, focusMedicalSearchInput]
  )

  const searchLinkClass =
    'inline-flex shrink-0 items-center justify-center self-center rounded-full leading-none text-primary transition-colors hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

  return (
    <div ref={rootRef}>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.15, ease: 'circOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-primary/10 py-3 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="container mx-auto grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 px-10">
          <div
            className="z-50 min-w-0 flex-shrink-0 cursor-pointer"
            onClick={() => { setActiveSection(''); if (pathname === '/') { window.scrollTo({ top: 0, behavior: 'smooth' }) } else { window.location.href = '/' } }}
          >
            <Image
              src="https://i.imgur.com/f7h5DY0.png"
              alt="연세365산부인과의원 로고"
              width={120}
              height={40}
              className="h-9 w-auto object-contain md:h-10"
              unoptimized
            />
          </div>

          <div className="flex min-w-0 items-center justify-self-end">
          <nav className="hidden h-full items-center gap-2 lg:flex min-[1440px]:gap-2.5">
            {headerNavLinks.map((link) => {
              const hasSub = !!SUB_MENUS[link.id]
              const isOpen = openDropdown === link.id
              return (
                <div
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      className={getLinkClass(link)}
                      aria-expanded={hasSub ? isOpen : undefined}
                      onMouseLeave={blurIfFocused}
                      onClick={(e) => {
                        blurIfFocused(e)
                        setOpenDropdown(null)
                      }}
                    >
                      {link.label}
                      {hasSub && <ChevronDown size={10} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />}
                    </a>
                  ) : (
                    <button
                      onClick={() => { scrollToSection(link.id); setOpenDropdown(null) }}
                      className={getLinkClass(link)}
                      aria-expanded={hasSub ? isOpen : undefined}
                      onMouseLeave={blurIfFocused}
                    >
                      {link.label}
                      {hasSub && <ChevronDown size={10} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />}
                    </button>
                  )}
                  <AnimatePresence>
                    {hasSub && isOpen && (
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
                              className={`block px-4 py-2.5 text-[12px] font-semibold transition-all duration-150 focus:outline-none ${
                                pathname === sub.href
                                  ? 'bg-primary/10 text-primary'
                                  : 'text-gray-700 hover:bg-pink-50 hover:text-primary'
                              }`}
                              onClick={() => setOpenDropdown(null)}
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
            <button
              type="button"
              onClick={openConsultModal}
              className="relative whitespace-nowrap rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold tracking-tight text-white transition-all duration-200 hover:bg-primary-dark focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              간편예약
            </button>
            <a
              href={MEDICAL_SEARCH_HREF}
              onClick={goToMedicalSearch}
              aria-label="의료정보 검색으로 이동"
              title="의료정보 검색"
              className={`${searchLinkClass} h-8 w-8`}
            >
              <MedicalSearchIcon size={15} strokeWidth={1.9} />
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={openConsultModal}
              className="whitespace-nowrap rounded-full bg-primary px-2 py-1 text-[10px] font-bold leading-none tracking-tight text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              간편예약
            </button>
            <a
              href={MEDICAL_SEARCH_HREF}
              onClick={goToMedicalSearch}
              aria-label="의료정보 검색으로 이동"
              title="의료정보 검색"
              className={`${searchLinkClass} h-10 w-10`}
            >
              <MedicalSearchIcon size={16} strokeWidth={1.9} />
            </a>
            <button
              type="button"
              className="z-50 p-1.5 text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="메뉴 열기"
            >
              <Menu size={24} />
            </button>
          </div>
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
              <div className="flex items-center justify-between px-4 py-3 border-b border-primary/10">
                <span className="text-[13px] font-extrabold text-primary">메뉴</span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="메뉴 닫기"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="flex flex-col px-4 pt-2 pb-[max(16px,env(safe-area-inset-bottom))] overflow-y-auto flex-grow">
                {headerNavLinks.map((link) => {
                  const hasSub = !!SUB_MENUS[link.id]
                  const isExpanded = mobileExpanded === link.id
                  const active = isLinkActive(link)
                  return (
                    <div key={link.id}>
                      <div className={`flex items-center justify-between py-3 px-3 rounded-xl mb-0.5 text-[14.5px] font-semibold leading-[1.4] tracking-tight border-b border-gray-50 whitespace-nowrap ${
                        active
                          ? 'text-primary font-bold bg-primary/10'
                          : link.highlight
                            ? 'text-primary font-bold'
                            : 'text-gray-700 hover:bg-gray-50'
                      }`}>
                        {link.href ? (
                          <a
                            href={link.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setMobileExpanded(null)
                            }}
                            className="flex-1 min-w-0"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <button onClick={() => scrollToSection(link.id)} className="flex-1 text-left min-w-0">{link.label}</button>
                        )}
                        {hasSub && (
                          <button
                            onClick={() => setMobileExpanded(isExpanded ? null : link.id)}
                            className="p-1 shrink-0"
                            aria-expanded={isExpanded}
                            aria-label={`${link.label} 하위 메뉴`}
                          >
                            <ChevronDown size={13} className={`text-primary transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
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
                            <div className="pl-3 pb-1.5 flex flex-col gap-0.5">
                              {SUB_MENUS[link.id].map((sub) => (
                                <a key={sub.href} href={sub.href} onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null) }}
                                  className={`flex items-center gap-2 py-2 px-3 rounded-lg text-[13.5px] font-semibold leading-[1.45] transition-all focus:outline-none ${pathname === sub.href ? 'text-primary bg-primary/10' : 'text-gray-600 hover:text-primary hover:bg-pink-50'}`}>
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header
