'use client'

import type { CSSProperties } from 'react'

interface Props {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

type PageItem = number | 'ellipsis'

function getPageItems(current: number, total: number): PageItem[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const last = total

  if (current <= 3) {
    return [1, 2, 3, 'ellipsis', last - 1, last]
  }

  if (current >= last - 2) {
    return [1, 2, 'ellipsis', last - 2, last - 1, last]
  }

  return [1, 'ellipsis', current - 1, current, current + 1, 'ellipsis', last]
}

const btnBase: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  minWidth: '28px',
  maxWidth: '28px',
  minHeight: '28px',
  maxHeight: '28px',
  flexShrink: 0,
  borderRadius: '50%',
  border: '1px solid #FFE0E8',
  fontSize: '12px',
  fontWeight: 700,
  cursor: 'pointer',
  padding: 0,
  lineHeight: 1,
  boxSizing: 'border-box',
  background: '#fff',
  color: '#888',
  transition: 'background 0.15s ease',
}

export default function HealthHubPagination({ page, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null

  const go = (p: number) => {
    onPageChange(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const items = getPageItems(page, totalPages)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        marginBottom: '32px',
        width: '100%',
      }}
    >
      <button
        type="button"
        aria-label="이전 페이지"
        disabled={page <= 1}
        onClick={() => go(page - 1)}
        style={{
          ...btnBase,
          color: page <= 1 ? '#ddd' : '#888',
          cursor: page <= 1 ? 'not-allowed' : 'pointer',
        }}
        onMouseEnter={e => { if (page > 1) e.currentTarget.style.background = '#FFF0F5' }}
        onMouseLeave={e => { if (page > 1) e.currentTarget.style.background = '#fff' }}
      >
        &lt;
      </button>

      {items.map((item, i) =>
        item === 'ellipsis' ? (
          <span key={`ellipsis-${i}`} style={{ color: '#ccc', fontSize: '12px', padding: '0 2px', userSelect: 'none' }}>
            ···
          </span>
        ) : (
          <button
            key={item}
            type="button"
            onClick={() => go(item)}
            style={{
              ...btnBase,
              background: item === page ? '#D1366F' : '#fff',
              color: item === page ? '#fff' : '#888',
              border: item === page ? '1px solid #D1366F' : '1px solid #FFE0E8',
            }}
            onMouseEnter={e => { if (item !== page) e.currentTarget.style.background = '#FFF0F5' }}
            onMouseLeave={e => { if (item !== page) e.currentTarget.style.background = '#fff' }}
          >
            {item}
          </button>
        )
      )}

      <button
        type="button"
        aria-label="다음 페이지"
        disabled={page >= totalPages}
        onClick={() => go(page + 1)}
        style={{
          ...btnBase,
          color: page >= totalPages ? '#ddd' : '#888',
          cursor: page >= totalPages ? 'not-allowed' : 'pointer',
        }}
        onMouseEnter={e => { if (page < totalPages) e.currentTarget.style.background = '#FFF0F5' }}
        onMouseLeave={e => { if (page < totalPages) e.currentTarget.style.background = '#fff' }}
      >
        &gt;
      </button>
    </div>
  )
}
