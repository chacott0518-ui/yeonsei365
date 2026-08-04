import { NextResponse } from 'next/server'
import { isQueryTooShort, searchSite } from '@/lib/siteSearch'

export const runtime = 'nodejs'

type Body = {
  query?: unknown
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body
    const query = typeof body.query === 'string' ? body.query : ''

    if (!query.trim()) {
      return NextResponse.json(
        { results: [], status: 'error', message: '검색어를 입력해 주세요.' },
        { status: 400 }
      )
    }

    if (isQueryTooShort(query)) {
      return NextResponse.json({
        results: [],
        status: 'empty',
        message: '두 글자 이상 입력해 주세요.',
      })
    }

    const results = searchSite(query)
    return NextResponse.json({
      results,
      status: results.length > 0 ? 'success' : 'empty',
    })
  } catch {
    return NextResponse.json(
      {
        results: [],
        status: 'error',
        message: '검색 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
      },
      { status: 500 }
    )
  }
}
