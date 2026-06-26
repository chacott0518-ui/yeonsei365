import { NextRequest, NextResponse } from 'next/server'
import {
  LEGACY_HOSTS,
  SITE_ORIGIN,
  isLegacyPath,
  normalizeLegacyPathname,
  resolveLegacyPath,
} from '@/lib/legacyRedirects'

function buildRedirectUrl(request: NextRequest, destinationPath: string) {
  const [pathnamePart, hashPart] = destinationPath.split('#')
  const url = request.nextUrl.clone()
  url.pathname = pathnamePart || '/'
  url.hash = hashPart ? `#${hashPart}` : ''
  url.search = ''
  return url
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = request.headers.get('host')?.split(':')[0] ?? ''

  let decodedPathname = pathname
  try {
    decodedPathname = decodeURIComponent(pathname)
  } catch {
    decodedPathname = pathname
  }

  if (decodedPathname === '/임신주수계산기') {
    const url = request.nextUrl.clone()
    url.pathname = '/pregnancy-calculator'
    url.search = ''
    return NextResponse.redirect(url, 301)
  }

  if (decodedPathname === '/배란일계산기') {
    const url = request.nextUrl.clone()
    url.pathname = '/ovulation-calculator'
    url.search = ''
    return NextResponse.redirect(url, 301)
  }

  const normalized = normalizeLegacyPathname(pathname)

  if (LEGACY_HOSTS.includes(host)) {
    const destinationPath = isLegacyPath(normalized) ? resolveLegacyPath(normalized) : '/'
    return NextResponse.redirect(`${SITE_ORIGIN}${destinationPath}`, 301)
  }

  if (isLegacyPath(normalized)) {
    const destinationPath = resolveLegacyPath(normalized)
    return NextResponse.redirect(buildRedirectUrl(request, destinationPath), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml|.*\\.(?:js|css|png|jpg|jpeg|gif|webp|svg|ico|woff2?|ttf|eot|map)).*)',
  ],
}
