'use client'

import { useEffect } from 'react'
import { captureFirstTouchOnce } from '@/lib/analytics/attribution'
import {
  trackKakaoClick,
  trackLocationClick,
  trackTelClick,
} from '@/lib/analytics/track'

function isTelHref(href: string): boolean {
  return href.trim().toLowerCase().startsWith('tel:')
}

function isKakaoHref(href: string): boolean {
  const value = href.trim().toLowerCase()
  return value.includes('pf.kakao.com/_tpabj') || value.includes('pf.kakao.com')
}

function isLocationHref(href: string): boolean {
  const value = href.trim().toLowerCase()
  if (!value) return false
  if (value === '#location' || value.endsWith('#location')) return true
  if (value.includes('map.naver.com') && value.includes('36298054')) return true
  return false
}

/**
 * Site-wide first-touch capture + conversion click tracking.
 * Uses document capture so /abortion/* and other pages need no edits.
 */
export default function AnalyticsBootstrap() {
  useEffect(() => {
    captureFirstTouchOnce()

    let lastLocationAt = 0
    const trackLocationOnce = () => {
      const now = Date.now()
      if (now - lastLocationAt < 600) return
      lastLocationAt = now
      trackLocationClick()
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href') || ''
      if (isTelHref(href)) {
        trackTelClick()
        return
      }
      if (isKakaoHref(href)) {
        trackKakaoClick()
        return
      }
      if (isLocationHref(href)) {
        trackLocationOnce()
      }
    }

    const onLocationEvent = () => {
      trackLocationOnce()
    }

    document.addEventListener('click', onClick, true)
    window.addEventListener('open-location-directions', onLocationEvent)

    return () => {
      document.removeEventListener('click', onClick, true)
      window.removeEventListener('open-location-directions', onLocationEvent)
    }
  }, [])

  return null
}
