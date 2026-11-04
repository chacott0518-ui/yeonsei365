'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import styles from './PcFloatingRail.module.css'

/**
 * PC 전용 우측 Floating Rail.
 * abortioninfo 링크 없음. HEAD exact는 /abortion만.
 * 모바일 하단 FloatingBar와 분리.
 */
export default function PcFloatingRail() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = useCallback(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }, [])

  const openLocation = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.dispatchEvent(new Event('open-location-directions'))
    document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <nav
      className={styles.rail}
      aria-label="빠른 이동"
      data-visible={visible ? 'true' : 'false'}
    >
      <Link href="/abortion" className={styles.item} aria-label="임신중절수술">
        임신중절수술
      </Link>
      <a
        href="#location"
        className={styles.item}
        onClick={openLocation}
        aria-label="오시는길"
      >
        오시는길
      </a>
      <a
        href="http://pf.kakao.com/_TpaBj/chat"
        className={`${styles.item} ${styles.kakao}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="24시간 카톡상담"
      >
        24시간 카톡상담
      </a>
      <a
        href="tel:025853650"
        className={`${styles.item} ${styles.phone}`}
        aria-label="전화상담 02-585-3650"
      >
        <span className={styles.phoneDefault}>전화상담</span>
        <span className={styles.phoneHover}>02-585-3650</span>
      </a>
      <button type="button" className={styles.item} onClick={scrollTop} aria-label="맨 위로">
        TOP
      </button>
    </nav>
  )
}
