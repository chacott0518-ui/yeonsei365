import { notifyIndexNow } from '@/lib/indexnow'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { urls } = await req.json()
    await notifyIndexNow(urls)
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ success: false, error: String(e) }, { status: 500 })
  }
}