import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  let decodedPathname = pathname

  try {
    decodedPathname = decodeURIComponent(pathname)
  } catch {
    decodedPathname = pathname
  }

  if (decodedPathname === '/임신주수계산기') {
    const url = request.nextUrl.clone()
    url.pathname = '/pregnancy-calculator'
    return NextResponse.redirect(url, 301)
  }

  if (decodedPathname === '/배란일계산기') {
    const url = request.nextUrl.clone()
    url.pathname = '/ovulation-calculator'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml|.*\\..*).*)',
  ],
}
