export const FIRST_TOUCH_STORAGE_KEY = 'yeonsei365_first_touch_v1'

export type FirstTouchAttribution = {
  landing_page: string
  referrer: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
  gclid: string
  msclkid: string
  traffic_source: string
  traffic_medium: string
}

function hostIncludes(referrer: string, needle: string): boolean {
  try {
    if (!referrer) return false
    return new URL(referrer).hostname.toLowerCase().includes(needle)
  } catch {
    return referrer.toLowerCase().includes(needle)
  }
}

export function classifyTrafficSource(
  referrer: string,
  utmSource: string,
  utmMedium: string,
): { traffic_source: string; traffic_medium: string } {
  if (utmSource) {
    return {
      traffic_source: utmSource,
      traffic_medium: utmMedium || 'none',
    }
  }

  if (!referrer) {
    return { traffic_source: 'direct', traffic_medium: 'none' }
  }

  if (hostIncludes(referrer, 'google')) {
    return { traffic_source: 'google', traffic_medium: 'organic' }
  }
  if (hostIncludes(referrer, 'naver')) {
    return { traffic_source: 'naver', traffic_medium: 'organic' }
  }
  if (hostIncludes(referrer, 'bing')) {
    return { traffic_source: 'bing', traffic_medium: 'organic' }
  }
  if (hostIncludes(referrer, 'kakao')) {
    return { traffic_source: 'kakao', traffic_medium: 'referral' }
  }

  return { traffic_source: 'referral', traffic_medium: 'referral' }
}

export function buildFirstTouchFromWindow(): FirstTouchAttribution {
  const params = new URLSearchParams(window.location.search)
  const utm_source = (params.get('utm_source') || '').trim()
  const utm_medium = (params.get('utm_medium') || '').trim()
  const utm_campaign = (params.get('utm_campaign') || '').trim()
  const utm_term = (params.get('utm_term') || '').trim()
  const utm_content = (params.get('utm_content') || '').trim()
  const gclid = (params.get('gclid') || '').trim()
  const msclkid = (params.get('msclkid') || '').trim()
  const referrer = document.referrer || ''
  const landing_page =
    window.location.pathname + window.location.search + window.location.hash

  const classified = classifyTrafficSource(referrer, utm_source, utm_medium)

  return {
    landing_page,
    referrer,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    gclid,
    msclkid,
    traffic_source: classified.traffic_source,
    traffic_medium: classified.traffic_medium,
  }
}

export function captureFirstTouchOnce(): FirstTouchAttribution | null {
  if (typeof window === 'undefined') return null

  try {
    const existing = sessionStorage.getItem(FIRST_TOUCH_STORAGE_KEY)
    if (existing) {
      return JSON.parse(existing) as FirstTouchAttribution
    }

    const firstTouch = buildFirstTouchFromWindow()
    sessionStorage.setItem(FIRST_TOUCH_STORAGE_KEY, JSON.stringify(firstTouch))
    return firstTouch
  } catch {
    return null
  }
}

export function getFirstTouch(): FirstTouchAttribution | null {
  if (typeof window === 'undefined') return null

  try {
    const existing = sessionStorage.getItem(FIRST_TOUCH_STORAGE_KEY)
    if (existing) {
      return JSON.parse(existing) as FirstTouchAttribution
    }
  } catch {
    return null
  }

  return captureFirstTouchOnce()
}

export function getReferrerDomain(referrer: string): string {
  if (!referrer) return ''
  try {
    return new URL(referrer).hostname
  } catch {
    return ''
  }
}

export function getCurrentPagePath(): string {
  if (typeof window === 'undefined') return ''
  return window.location.pathname + window.location.search + window.location.hash
}

/** Sheets/GA용 attribution 스냅샷 (PII 없음) */
export function getAttributionSnapshot() {
  const first = getFirstTouch()
  const current_page = getCurrentPagePath()
  const landing_page = first?.landing_page || current_page
  const referrer = first?.referrer || ''
  const traffic_source = first?.traffic_source || 'direct'
  const traffic_medium = first?.traffic_medium || 'none'
  const utm_campaign = first?.utm_campaign || ''
  const utm_source = first?.utm_source || traffic_source
  const utm_medium = first?.utm_medium || traffic_medium

  return {
    current_page,
    landing_page,
    referrer,
    referrer_domain: getReferrerDomain(referrer),
    traffic_source,
    traffic_medium,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term: first?.utm_term || '',
    utm_content: first?.utm_content || '',
    gclid: first?.gclid || '',
    msclkid: first?.msclkid || '',
  }
}
