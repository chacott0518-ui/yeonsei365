const HEALTH_ARTICLE_DATE_PATTERN =
  /^(\d{4}-\d{2}-\d{2})(?:-(AM|PM|오전|오후)\s+(\d{1,2}):(\d{2}))?$/

function isValidCalendarDate(date: string): boolean {
  const [yearText, monthText, dayText] = date.split('-')
  const year = Number(yearText)
  const month = Number(monthText)
  const day = Number(dayText)
  if (!year || !month || !day) return false

  const parsed = new Date(Date.UTC(year, month - 1, day))
  return (
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day
  )
}

/**
 * Converts legacy health-hub timestamps to a machine-readable ISO 8601 value.
 * The source string remains unchanged so the date shown to visitors is preserved.
 */
export function normalizeHealthArticleDate(value?: string): string | undefined {
  if (!value) return undefined

  const match = HEALTH_ARTICLE_DATE_PATTERN.exec(value.trim())
  if (match) {
    const [, date, period, rawHour, minute] = match
    if (!isValidCalendarDate(date)) return undefined
    if (!period) return date

    const hour = Number(rawHour)
    const minuteNumber = Number(minute)
    if (hour < 1 || hour > 12 || minuteNumber < 0 || minuteNumber > 59) return undefined

    const isAfternoon = period === 'PM' || period === '오후'
    const hour24 = isAfternoon ? (hour % 12) + 12 : hour % 12
    return `${date}T${String(hour24).padStart(2, '0')}:${minute}:00+09:00`
  }

  const timestamp = Date.parse(value)
  return Number.isNaN(timestamp) ? undefined : new Date(timestamp).toISOString()
}
