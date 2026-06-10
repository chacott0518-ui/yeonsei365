'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

const HIDE_ON = ['/pregnancy-calculator', '/ovulation-calculator']

function getDefaultLmp() {
  const d = new Date()
  d.setDate(d.getDate() - 42)
  return d.toISOString().split('T')[0]
}

interface CalcResult {
  weeks: number
  days: number
  eddStr: string
}

function calculate(lmp: string): CalcResult | null {
  const lmpD = new Date(lmp)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const total = Math.floor((today.getTime() - lmpD.getTime()) / 86400000)
  if (total < 0) return null
  const weeks = Math.floor(total / 7)
  const days = total % 7
  const edd = new Date(lmpD)
  edd.setDate(edd.getDate() + 280)
  const eddStr = `${edd.getFullYear()}년 ${edd.getMonth() + 1}월 ${edd.getDate()}일`
  return { weeks, days, eddStr }
}

export default function FloatingChip() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [lmp, setLmp] = useState(getDefaultLmp)
  const [result, setResult] = useState<CalcResult | null>(null)

  if (HIDE_ON.includes(pathname)) return null

  const handleCalc = () => {
    setResult(calculate(lmp))
  }

  return (
    <>
      {/* 열림 패널 */}
      <div
        className="floating-week-calc-panel"
        style={{
          position: 'fixed',
          transform: isOpen ? 'translateX(0)' : 'translateX(120%)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        role="dialog"
        aria-label="주수 계산기"
        aria-hidden={!isOpen}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '13px', fontWeight: 800, color: '#fff' }}>📅 주수 계산기</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="계산기 최소화"
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              color: '#fff',
              fontSize: '14px',
              cursor: 'pointer',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>

        <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', marginBottom: '6px' }}>
          마지막 생리 시작일
        </label>
        <input
          type="date"
          value={lmp}
          max={new Date().toISOString().split('T')[0]}
          onChange={e => setLmp(e.target.value)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: '8px',
            border: 'none',
            padding: '8px 10px',
            fontSize: '12px',
            marginBottom: '10px',
            fontFamily: 'inherit',
          }}
        />
        <button
          type="button"
          onClick={handleCalc}
          style={{
            width: '100%',
            background: '#fff',
            color: '#D1366F',
            border: 'none',
            borderRadius: '8px',
            padding: '9px',
            fontSize: '12px',
            fontWeight: 800,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          계산하기
        </button>

        {result && (
          <div style={{ marginTop: '12px', background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '10px' }}>
            <div style={{ fontSize: '20px', fontWeight: 900, color: '#fff', lineHeight: 1.2 }}>
              {result.weeks}주 {result.days}일
            </div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', marginTop: '4px' }}>현재 임신 주수</div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.9)', marginTop: '8px', fontWeight: 600 }}>
              출산예정일: {result.eddStr}
            </div>
          </div>
        )}
      </div>

      {/* 최소화 탭 */}
      <button
        type="button"
        className={`floating-week-calc-tab${isOpen ? ' floating-week-calc-tab-hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="주수 계산기 열기"
        aria-hidden={isOpen}
        tabIndex={isOpen ? -1 : 0}
        style={{ position: 'fixed' }}
      >
        📅주수
      </button>
    </>
  )
}
