/**
 * ipgyn 구사이트 → yeonsei365.com 영구 리다이렉트 규칙 (단일 소스)
 * middleware(구도메인 + 쿼리 제거)와 next.config(신규도메인 내부 구경로)에서 공유
 */

const SITE_ORIGIN = 'https://www.yeonsei365.com'

const LEGACY_HOSTS = [
  'www.ipgyn.com',
  'ipgyn.com',
  'www.ipgyn.co.kr',
  'ipgyn.co.kr',
  'www.ipgyn.net',
  'ipgyn.net',
]

/** @type {[string, string][]} 정확 경로 → 목적지 (우선순위 최상) */
const EXACT_MAPPINGS = [
  ['/01_intro/intro2', '/about/tour'],
  ['/01_intro/intro3', '/about/hours'],
  ['/01_intro/intro4', '/about/location'],
  ['/05_examination/examination3', '/womens-clinic/sadang'],
  ['/06_contraception/contraception2', '/ovulation-calculator'],
  ['/02_vaginoplasty/vaginoplasty1', '/#clinics'],
  ['/02_vaginoplasty/vaginoplasty2', '/#clinics'],
  ['/02_vaginoplasty/vaginoplasty3', '/#clinics'],
  ['/02_vaginoplasty/vaginoplasty5', '/#clinics'],
  ['/03_incontinence/incontinence1', '/#clinics'],
  ['/03_incontinence/incontinence2', '/#clinics'],
  ['/03_incontinence/incontinence3', '/#clinics'],
  ['/07_skin/skin2', '/legal/non-covered'],
  ['/05_customer/customer1', '/#clinics'],
  ['/08_customer/customer1', '/#clinics'],
  ['/05_customer/customer2', '/#location'],
  ['/08_customer/customer2', '/#location'],
  ['/05_customer/customer3', '/#location'],
  ['/08_customer/customer3', '/#location'],
  ['/05_customer/customer4', '/health-magazine/column'],
  ['/08_customer/customer4', '/health-magazine/column'],
  ['/05_customer/customer5', '/'],
  ['/08_customer/customer5', '/'],
]

/** @type {[string, string][]} 카테고리 prefix → 목적지 (정확 규칙 다음) */
const PREFIX_MAPPINGS = [
  ['/01_intro', '/about'],
  ['/05_examination', '/womens-clinic/sadang'],
  ['/06_contraception', '/health-magazine/column/contraceptive-pills-guide'],
  ['/02_vaginoplasty', '/#clinics'],
  ['/03_incontinence', '/#clinics'],
  ['/03_abortion', '/abortion'],
  ['/07_skin', '/'],
]

/** @type {string[]} 그 외 구 카테고리 → 메인 */
const LEGACY_MAIN_PREFIXES = [
  '/04_illness',
  '/04_skin',
  '/06_segingplasty',
  '/09_community',
  '/member',
]

/**
 * @param {string} pathname
 * @returns {string}
 */
function normalizeLegacyPathname(pathname) {
  let p = pathname
  try {
    p = decodeURIComponent(pathname)
  } catch {
    p = pathname
  }
  if (p.startsWith('/m/')) {
    p = p.slice(2)
  } else if (p === '/m') {
    p = '/'
  }
  if (p.endsWith('.php')) {
    p = p.slice(0, -4)
  }
  if (p.length > 1 && p.endsWith('/')) {
    p = p.slice(0, -1)
  }
  return p
}

/**
 * @param {string} normalizedPath
 * @returns {boolean}
 */
function isLegacyPath(normalizedPath) {
  if (normalizedPath === '/') return false
  const prefixes = [
    ...EXACT_MAPPINGS.map(([src]) => src),
    ...PREFIX_MAPPINGS.map(([prefix]) => prefix),
    ...LEGACY_MAIN_PREFIXES,
    '/05_customer',
    '/08_customer',
  ]
  return prefixes.some(
    (prefix) => normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`),
  )
}

/**
 * @param {string} normalizedPath
 * @returns {string}
 */
function resolveLegacyPath(normalizedPath) {
  for (const [src, dest] of EXACT_MAPPINGS) {
    if (normalizedPath === src) return dest
  }
  for (const [prefix, dest] of PREFIX_MAPPINGS) {
    if (normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`)) {
      return dest
    }
  }
  for (const prefix of LEGACY_MAIN_PREFIXES) {
    if (normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`)) {
      return '/'
    }
  }
  // customer1~5는 EXACT로 처리, 그 외 /05_customer/* /08_customer/* → 메인
  if (
    normalizedPath === '/05_customer' ||
    normalizedPath.startsWith('/05_customer/') ||
    normalizedPath === '/08_customer' ||
    normalizedPath.startsWith('/08_customer/')
  ) {
    return '/'
  }
  return '/'
}

/**
 * @param {string} basePath
 * @returns {string[]}
 */
function pathVariants(basePath) {
  return [basePath, `${basePath}.php`, `/m${basePath}`, `/m${basePath}.php`]
}

/**
 * @param {string} dest
 * @param {boolean} absolute
 * @returns {{ source: string, destination: string, permanent: boolean }[]}
 */
function buildExactRedirectRules(absolute = false) {
  /** @type {{ source: string, destination: string, permanent: boolean }[]} */
  const rules = []
  for (const [src, dest] of EXACT_MAPPINGS) {
    const destination = absolute ? `${SITE_ORIGIN}${dest}` : dest
    for (const source of pathVariants(src)) {
      rules.push({ source, destination, permanent: true })
    }
  }
  return rules
}

/**
 * @param {boolean} absolute
 * @returns {{ source: string, destination: string, permanent: boolean }[]}
 */
function buildPrefixRedirectRules(absolute = false) {
  /** @type {{ source: string, destination: string, permanent: boolean }[]} */
  const rules = []
  for (const [prefix, dest] of PREFIX_MAPPINGS) {
    const destination = absolute ? `${SITE_ORIGIN}${dest}` : dest
    rules.push(
      { source: `${prefix}/:path*`, destination, permanent: true },
      { source: prefix, destination, permanent: true },
      { source: `/m${prefix}/:path*`, destination, permanent: true },
      { source: `/m${prefix}`, destination, permanent: true },
    )
  }
  for (const prefix of LEGACY_MAIN_PREFIXES) {
    const destination = absolute ? SITE_ORIGIN : '/'
    rules.push(
      { source: `${prefix}/:path*`, destination, permanent: true },
      { source: prefix, destination, permanent: true },
      { source: `/m${prefix}/:path*`, destination, permanent: true },
      { source: `/m${prefix}`, destination, permanent: true },
    )
  }
  const mainDest = absolute ? SITE_ORIGIN : '/'
  rules.push(
    { source: '/05_customer/:path*', destination: mainDest, permanent: true },
    { source: '/05_customer', destination: mainDest, permanent: true },
    { source: '/m/05_customer/:path*', destination: mainDest, permanent: true },
    { source: '/m/05_customer', destination: mainDest, permanent: true },
    { source: '/08_customer/:path*', destination: mainDest, permanent: true },
    { source: '/08_customer', destination: mainDest, permanent: true },
    { source: '/m/08_customer/:path*', destination: mainDest, permanent: true },
    { source: '/m/08_customer', destination: mainDest, permanent: true },
  )
  return rules
}

/**
 * yeonsei365.com 내부 구경로 리다이렉트 (상대 경로)
 * @returns {{ source: string, destination: string, permanent: boolean }[]}
 */
function buildInternalLegacyRedirects() {
  return [...buildExactRedirectRules(false), ...buildPrefixRedirectRules(false)]
}

/**
 * @param {string} normalizedPath
 * @returns {string}
 */
function toAbsoluteLegacyDestination(normalizedPath) {
  return `${SITE_ORIGIN}${resolveLegacyPath(normalizedPath)}`
}

module.exports = {
  SITE_ORIGIN,
  LEGACY_HOSTS,
  EXACT_MAPPINGS,
  PREFIX_MAPPINGS,
  normalizeLegacyPathname,
  isLegacyPath,
  resolveLegacyPath,
  toAbsoluteLegacyDestination,
  buildInternalLegacyRedirects,
}
