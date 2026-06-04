'use client'
import { useEffect, useState } from 'react'
import { incrementPageView, getPageView } from '@/lib/supabase'

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    incrementPageView(slug)
    getPageView(slug).then(setViews)
  }, [slug])

  if (views === null) return null

  return (
    <span style={{ fontSize: '12px', color: '#888', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      👁 {views.toLocaleString()}
    </span>
  )
}
