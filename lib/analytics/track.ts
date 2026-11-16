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

export type AnalyticsPayload = {
  current_page?: string
  landing_page?: string
  traffic_source?: string
  traffic_medium?: string
  utm_campaign?: string
  referrer_domain?: string
}

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

/** 4개 전환 이벤트 공통 context (PII 없음) */
export function getAnalyticsContext(): Required<AnalyticsPayload> {
  const a = getAttributionSnapshot()
  return {
    current_page: a.current_page,
    landing_page: a.landing_page,
    traffic_source: a.traffic_source,
    traffic_medium: a.traffic_medium,
    utm_campaign: a.utm_campaign,
    referrer_domain: a.referrer_domain || getReferrerDomain(a.referrer),
  }
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

export function trackAnalyticsEvent(
  eventName: Exclude<GaEventName, 'location_click'>,
  payload: AnalyticsPayload = {},
): void {
  pushGaEvent(eventName, {
    ...getAnalyticsContext(),
    ...payload,
  })
}

// Strict Mode remount / 동일 클릭 버블 대비: 짧은 창에서 동일 event 중복 push 차단
const lastPushAt: Record<Exclude<GaEventName, 'location_click'>, number> = {
  booking_open: 0,
  booking_submit: 0,
  tel_click: 0,
  kakao_click: 0,
}

function trackOnce(
  eventName: Exclude<GaEventName, 'location_click'>,
  windowMs = 400,
): void {
  const now = Date.now()
  if (now - lastPushAt[eventName] < windowMs) return
  lastPushAt[eventName] = now
  trackAnalyticsEvent(eventName)
}

export function trackBookingOpen(): void {
  trackOnce('booking_open')
}

export function trackBookingSubmit(): void {
  trackOnce('booking_submit')
}

export function trackTelClick(): void {
  trackOnce('tel_click')
}

export function trackKakaoClick(): void {
  trackOnce('kakao_click')
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
