import {
  getAttributionSnapshot,
  getReferrerDomain,
} from './attribution'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const PII_KEYS = new Set([
  'name',
  'phone',
  'memo',
  'email',
  'message',
  'content',
  'birthday',
  'birth',
  'ssn',
  '주민번호',
  '생년월일',
  '진료내용',
  '상담내용',
])

export type GaEventName =
  | 'booking_open'
  | 'booking_submit'
  | 'tel_click'
  | 'kakao_click'
  | 'location_click'

function sanitizeParams(
  params: Record<string, string | undefined>,
): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [key, value] of Object.entries(params)) {
    if (PII_KEYS.has(key.toLowerCase())) continue
    if (value === undefined || value === null) continue
    out[key] = String(value)
  }
  return out
}

export function pushGaEvent(
  event: GaEventName,
  params: Record<string, string | undefined> = {},
): void {
  if (typeof window === 'undefined') return

  const payload = {
    event,
    ...sanitizeParams(params),
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

export function trackBookingOpen(): void {
  const a = getAttributionSnapshot()
  pushGaEvent('booking_open', {
    current_page: a.current_page,
    landing_page: a.landing_page,
    traffic_source: a.traffic_source,
    traffic_medium: a.traffic_medium,
    utm_campaign: a.utm_campaign,
  })
}

export function trackBookingSubmit(): void {
  const a = getAttributionSnapshot()
  pushGaEvent('booking_submit', {
    current_page: a.current_page,
    landing_page: a.landing_page,
    traffic_source: a.traffic_source,
    traffic_medium: a.traffic_medium,
    utm_campaign: a.utm_campaign,
    referrer_domain: a.referrer_domain || getReferrerDomain(a.referrer),
  })
}

export function trackTelClick(): void {
  const a = getAttributionSnapshot()
  pushGaEvent('tel_click', {
    current_page: a.current_page,
    landing_page: a.landing_page,
    traffic_source: a.traffic_source,
    traffic_medium: a.traffic_medium,
  })
}

export function trackKakaoClick(): void {
  const a = getAttributionSnapshot()
  pushGaEvent('kakao_click', {
    current_page: a.current_page,
    landing_page: a.landing_page,
    traffic_source: a.traffic_source,
    traffic_medium: a.traffic_medium,
  })
}

export function trackLocationClick(): void {
  const a = getAttributionSnapshot()
  pushGaEvent('location_click', {
    current_page: a.current_page,
    landing_page: a.landing_page,
    traffic_source: a.traffic_source,
    traffic_medium: a.traffic_medium,
  })
}
