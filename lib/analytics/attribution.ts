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
  source_group: string
}

export type TrafficClassification = {
  traffic_source: string
  traffic_medium: string
  source_group: string
}

export function getReferrerDomain(referrer: string): string {
  if (!referrer) return ''
  try {
    return new URL(referrer).hostname.toLowerCase()
  } catch {
    return ''
  }
}

function parseReferrer(referrer: string): { hostname: string; pathname: string } | null {
  if (!referrer) return null
  try {
    const url = new URL(referrer)
    return {
      hostname: url.hostname.toLowerCase(),
      pathname: url.pathname.toLowerCase(),
    }
  } catch {
    return null
  }
}

function hostEqualsOrSubdomain(hostname: string, root: string): boolean {
  return hostname === root || hostname.endsWith(`.${root}`)
}

function hostIn(hostname: string, roots: string[]): boolean {
  return roots.some((root) => hostEqualsOrSubdomain(hostname, root))
}

/** UTM 우선 → referrer hostname 분류 → direct */
export function classifyTraffic(
  params: URLSearchParams,
  referrer: string,
): TrafficClassification {
  const utmSource = (params.get('utm_source') || '').trim()
  const utmMedium = (params.get('utm_medium') || '').trim()

  if (utmSource) {
    return {
      traffic_source: utmSource.toLowerCase(),
      traffic_medium: (utmMedium || 'campaign').toLowerCase(),
      source_group: 'campaign',
    }
  }

  const parsed = parseReferrer(referrer)
  if (!parsed) {
    return {
      traffic_source: 'direct',
      traffic_medium: 'none',
      source_group: 'direct',
    }
  }

  const { hostname, pathname } = parsed

  // AI platforms (gemini.google.com 등 search보다 먼저)
  if (hostIn(hostname, ['chatgpt.com', 'chat.openai.com', 'openai.com'])) {
    return { traffic_source: 'chatgpt', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (hostIn(hostname, ['claude.ai'])) {
    return { traffic_source: 'claude', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (hostIn(hostname, ['perplexity.ai'])) {
    return { traffic_source: 'perplexity', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (hostname === 'gemini.google.com') {
    return { traffic_source: 'gemini', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (hostIn(hostname, ['copilot.microsoft.com'])) {
    return { traffic_source: 'copilot', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (
    hostIn(hostname, ['grok.com']) ||
    (hostIn(hostname, ['x.com', 'twitter.com']) && pathname.includes('/i/grok'))
  ) {
    return { traffic_source: 'grok', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (hostIn(hostname, ['manus.im'])) {
    return { traffic_source: 'manus', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (hostIn(hostname, ['genspark.ai'])) {
    return { traffic_source: 'genspark', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (hostIn(hostname, ['chat.mistral.ai', 'mistral.ai'])) {
    return { traffic_source: 'mistral', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (hostIn(hostname, ['chat.deepseek.com', 'deepseek.com'])) {
    return { traffic_source: 'deepseek', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (hostIn(hostname, ['you.com'])) {
    return { traffic_source: 'you', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (hostIn(hostname, ['meta.ai'])) {
    return { traffic_source: 'meta-ai', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (hostIn(hostname, ['poe.com'])) {
    return { traffic_source: 'poe', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (hostIn(hostname, ['phind.com'])) {
    return { traffic_source: 'phind', traffic_medium: 'referral', source_group: 'ai' }
  }
  if (hostname === 'search.brave.com' || hostIn(hostname, ['brave.com'])) {
    return { traffic_source: 'brave', traffic_medium: 'referral', source_group: 'ai' }
  }

  // Search engines
  if (
    hostname === 'www.google.com' ||
    hostname === 'google.com' ||
    /^([a-z0-9-]+\.)*google\.[a-z.]+$/.test(hostname)
  ) {
    // gemini.google.com already handled above
    return { traffic_source: 'google', traffic_medium: 'organic', source_group: 'search' }
  }
  if (hostIn(hostname, ['naver.com'])) {
    return { traffic_source: 'naver', traffic_medium: 'organic', source_group: 'search' }
  }
  if (hostIn(hostname, ['bing.com'])) {
    return { traffic_source: 'bing', traffic_medium: 'organic', source_group: 'search' }
  }
  if (hostIn(hostname, ['daum.net'])) {
    return { traffic_source: 'daum', traffic_medium: 'organic', source_group: 'search' }
  }
  if (hostIn(hostname, ['zum.com'])) {
    return { traffic_source: 'zum', traffic_medium: 'organic', source_group: 'search' }
  }

  // Social / messenger
  if (
    hostIn(hostname, ['kakao.com']) ||
    hostname === 'pf.kakao.com' ||
    hostname === 'talk-pilsner.kakao.com'
  ) {
    return { traffic_source: 'kakao', traffic_medium: 'referral', source_group: 'social' }
  }
  if (hostIn(hostname, ['instagram.com'])) {
    return { traffic_source: 'instagram', traffic_medium: 'referral', source_group: 'social' }
  }
  if (hostIn(hostname, ['facebook.com', 'fb.com'])) {
    return { traffic_source: 'facebook', traffic_medium: 'referral', source_group: 'social' }
  }
  if (hostIn(hostname, ['youtube.com', 'youtu.be'])) {
    return { traffic_source: 'youtube', traffic_medium: 'referral', source_group: 'social' }
  }

  // Unknown external referral
  return {
    traffic_source: hostname,
    traffic_medium: 'referral',
    source_group: 'referral',
  }
}

/** 기존 API 호환 wrapper */
export function classifyTrafficSource(
  referrer: string,
  utmSource: string,
  utmMedium: string,
): TrafficClassification {
  const params = new URLSearchParams()
  if (utmSource) params.set('utm_source', utmSource)
  if (utmMedium) params.set('utm_medium', utmMedium)
  return classifyTraffic(params, referrer)
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

  const classified = classifyTraffic(params, referrer)

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
    source_group: classified.source_group,
  }
}

export function captureFirstTouchOnce(): FirstTouchAttribution | null {
  if (typeof window === 'undefined') return null

  try {
    const existing = sessionStorage.getItem(FIRST_TOUCH_STORAGE_KEY)
    if (existing) {
      return normalizeFirstTouch(JSON.parse(existing) as FirstTouchAttribution)
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
      return normalizeFirstTouch(JSON.parse(existing) as FirstTouchAttribution)
    }
  } catch {
    return null
  }

  return captureFirstTouchOnce()
}

/** 구버전 first-touch(source_group 없음)도 덮어쓰지 않고 읽기 시 보강 */
function normalizeFirstTouch(first: FirstTouchAttribution): FirstTouchAttribution {
  if (first.source_group && first.traffic_source && first.traffic_medium) {
    return first
  }

  const params = new URLSearchParams()
  if (first.utm_source) params.set('utm_source', first.utm_source)
  if (first.utm_medium) params.set('utm_medium', first.utm_medium)
  const classified = classifyTraffic(params, first.referrer || '')

  return {
    ...first,
    traffic_source: first.traffic_source || classified.traffic_source,
    traffic_medium: first.traffic_medium || classified.traffic_medium,
    source_group: first.source_group || classified.source_group,
  }
}

export function getCurrentPagePath(): string {
  if (typeof window === 'undefined') return ''
  return window.location.pathname + window.location.search + window.location.hash
}

/** Sheets/GA용 attribution 스냅샷 (PII 없음). UTM은 raw, traffic_*는 분류값. */
export function getAttributionSnapshot() {
  const first = getFirstTouch()
  const current_page = getCurrentPagePath()
  const landing_page = first?.landing_page || current_page
  const referrer = first?.referrer || ''
  const traffic_source = first?.traffic_source || 'direct'
  const traffic_medium = first?.traffic_medium || 'none'
  const source_group = first?.source_group || 'direct'

  return {
    current_page,
    landing_page,
    referrer,
    referrer_domain: getReferrerDomain(referrer),
    traffic_source,
    traffic_medium,
    source_group,
    utm_source: first?.utm_source || '',
    utm_medium: first?.utm_medium || '',
    utm_campaign: first?.utm_campaign || '',
    utm_term: first?.utm_term || '',
    utm_content: first?.utm_content || '',
    gclid: first?.gclid || '',
    msclkid: first?.msclkid || '',
  }
}
