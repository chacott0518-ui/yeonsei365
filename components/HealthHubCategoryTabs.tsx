'use client'

import type { CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CATEGORIES, HEALTH_ARTICLES } from '@/lib/healthHub'
import type { CategoryKey } from '@/lib/healthHub'

const C = { p: '#D6336C', pd: '#993556', pb: '#FFF5F7', pbd: '#f0d0dc', tm: '#1a1a1a', tg: '#888' }

export default function HealthHubCategoryTabs({ activeCategory }: { activeCategory?: CategoryKey | null }) {
  const pathname = usePathname()
  const isAll = pathname === '/health-hub' || pathname === '/health-hub/ask'

  const tabStyle = (active: boolean): CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '8px 14px',
    fontSize: '13px',
    fontWeight: active ? 700 : 500,
    color: active ? '#fff' : C.tm,
    background: active ? C.p : '#fff',
    border: `1px solid ${active ? C.p : C.pbd}`,
    borderRadius: '20px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  })

  return (
    <div
      className="hh-category-tabs scrollbar-hide"
      style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        flexWrap: 'nowrap',
        paddingBottom: '4px',
        marginBottom: '20px',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <Link href="/health-hub" style={tabStyle(isAll && !activeCategory)}>
        전체
        <span style={{ fontSize: '11px', opacity: 0.85 }}>{HEALTH_ARTICLES.length}</span>
      </Link>
      {Object.entries(CATEGORIES).map(([key, cat]) => {
        const active = activeCategory === key || pathname === `/health-hub/${key}`
        const count = HEALTH_ARTICLES.filter(a => a.category === key).length
        return (
          <Link key={key} href={`/health-hub/${key}`} style={tabStyle(active)}>
            {cat.icon} {cat.label}
            <span style={{ fontSize: '11px', opacity: 0.85 }}>{count}</span>
          </Link>
        )
      })}
    </div>
  )
}
