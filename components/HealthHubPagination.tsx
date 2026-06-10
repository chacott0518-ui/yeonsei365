'use client'

import type { CSSProperties } from 'react'

interface Props {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

const btnBase: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  minWidth: '32px',
  maxWidth: '32px',
  minHeight: '32px',
  maxHeight: '32px',
  flexShrink: 0,
  borderRadius: '50%',
  border: '1px solid #FFE0E8',
  fontSize: '13px',
  fontWeight: 700,
  cursor: 'pointer',
  padding: 0,
  lineHeight: 1,
  boxSizing: 'border-box',
  transition: 'background 0.15s ease',
}

export default function HealthHubPagination({ page, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null

  const go = (p: number) => {
    onPageChange(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
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
          background: page <= 1 ? '#f5f5f5' : '#fff',
          color: page <= 1 ? '#ccc' : '#888',
          cursor: page <= 1 ? 'not-allowed' : 'pointer',
        }}
        onMouseEnter={e => { if (page > 1) e.currentTarget.style.background = '#FFF0F5' }}
        onMouseLeave={e => { if (page > 1) e.currentTarget.style.background = '#fff' }}
      >
        &lt;
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
        <button
          key={p}
          type="button"
          onClick={() => go(p)}
          style={{
            ...btnBase,
            background: p === page ? '#D1366F' : '#fff',
            color: p === page ? '#fff' : '#888',
            border: p === page ? '1px solid #D1366F' : '1px solid #FFE0E8',
          }}
          onMouseEnter={e => { if (p !== page) e.currentTarget.style.background = '#FFF0F5' }}
          onMouseLeave={e => { if (p !== page) e.currentTarget.style.background = '#fff' }}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        aria-label="다음 페이지"
        disabled={page >= totalPages}
        onClick={() => go(page + 1)}
        style={{
          ...btnBase,
          background: page >= totalPages ? '#f5f5f5' : '#fff',
          color: page >= totalPages ? '#ccc' : '#888',
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
