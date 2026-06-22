'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const HIDE_ON = ['/pregnancy-calculator', '/ovulation-calculator']

function getDefaultLmp() {
  const d = new Date()
  d.setDate(d.getDate() - 42)
  return d.toISOString().split('T')[0]
}

function getDefaultOvLmp() {
  const d = new Date()
  d.setDate(d.getDate() - 14)
  return d.toISOString().split('T')[0]
}

interface WeekResult { weeks: number; days: number; eddStr: string }
interface OvResult { ovStr: string; diff: number }

function calcWeek(lmp: string): WeekResult | null {
  const lmpD = new Date(lmp)
  const today = new Date(); today.setHours(0,0,0,0)
  const total = Math.floor((today.getTime() - lmpD.getTime()) / 86400000)
  if (total < 0) return null
  const edd = new Date(lmpD); edd.setDate(edd.getDate() + 280)
  return {
    weeks: Math.floor(total / 7),
    days: total % 7,
    eddStr: `${edd.getFullYear()}년 ${edd.getMonth()+1}월 ${edd.getDate()}일`
  }
}

function calcOv(lmp: string, cycle: number): OvResult | null {
  const lmpD = new Date(lmp)
  const ov = new Date(lmpD); ov.setDate(ov.getDate() + cycle - 14)
  const today = new Date(); today.setHours(0,0,0,0)
  const diff = Math.round((ov.getTime() - today.getTime()) / 86400000)
  return {
    ovStr: `${ov.getMonth()+1}월 ${ov.getDate()}일`,
    diff
  }
}

export default function FloatingChip() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'week' | 'ov'>('week')
  const [lmp, setLmp] = useState(getDefaultLmp)
  const [weekResult, setWeekResult] = useState<WeekResult | null>(null)
  const [ovLmp, setOvLmp] = useState(getDefaultOvLmp)
  const [ovCycle, setOvCycle] = useState(28)
  const [ovResult, setOvResult] = useState<OvResult | null>(null)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null
  if (HIDE_ON.includes(pathname)) return null

  const tabStyle = (active: boolean): React.CSSProperties => ({
    flex: 1, padding: '8px', border: 'none', cursor: 'pointer',
    borderRadius: '8px', fontSize: '12px', fontWeight: 700,
    background: active ? '#fff' : 'transparent',
    color: active ? '#d63870' : 'rgba(255,255,255,0.8)',
    fontFamily: 'inherit',
  })

  const panelStyle: React.CSSProperties = {
    position: 'fixed',
    top: 'calc(50% - 28px)',
    right: isOpen ? '0px' : '-320px',
    transform: 'translateY(-50%)',
    zIndex: 9999,
    width: '90vw',
maxWidth: '300px',
    background: 'linear-gradient(135deg, #d63870 0%, #b02255 100%)',
    borderRadius: '16px 0 0 16px',
    padding: '20px',
    boxShadow: '-4px 0 24px rgba(0,0,0,0.3)',
    transition: 'right 0.3s ease',
  }

  return (
    <>
      {/* 패널 */}
      <div style={panelStyle}>
        {/* 헤더 */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'14px' }}>
          <span style={{ fontSize:'14px', fontWeight:800, color:'#fff' }}>🩺 계산기</span>
          <button type="button" onClick={() => setIsOpen(false)}
            style={{ background:'rgba(255,255,255,0.2)', border:'none', borderRadius:'50%', width:'28px', height:'28px', color:'#fff', fontSize:'16px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'inherit' }}>
            ✕
          </button>
        </div>

        {/* 탭 */}
        <div style={{ display:'flex', background:'rgba(0,0,0,0.2)', borderRadius:'10px', padding:'3px', marginBottom:'16px' }}>
          <button type="button" onClick={() => setActiveTab('week')} style={tabStyle(activeTab === 'week')}>📅 임신주수</button>
          <button type="button" onClick={() => setActiveTab('ov')} style={tabStyle(activeTab === 'ov')}>🌸 배란일</button>
        </div>

        {/* 주수 */}
        {activeTab === 'week' && (
          <div>
            <label style={{ display:'block', fontSize:'11px', fontWeight:700, color:'rgba(255,255,255,0.85)', marginBottom:'6px' }}>마지막 생리 시작일</label>
            <input type="date" value={lmp} max={new Date().toISOString().split('T')[0]} onChange={e => setLmp(e.target.value)}
              style={{ width:'100%', boxSizing:'border-box', borderRadius:'10px', border:'none', padding:'10px 12px', fontSize:'14px', marginBottom:'10px', fontFamily:'inherit' }} />
            <button type="button" onClick={() => setWeekResult(calcWeek(lmp))}
              style={{ width:'100%', background:'#fff', color:'#d63870', border:'none', borderRadius:'10px', padding:'11px', fontSize:'14px', fontWeight:800, cursor:'pointer', fontFamily:'inherit' }}>
              계산하기
            </button>
            {weekResult && (
              <div style={{ marginTop:'12px', background:'rgba(255,255,255,0.15)', borderRadius:'12px', padding:'14px' }}>
                <div style={{ fontSize:'26px', fontWeight:900, color:'#fff' }}>{weekResult.weeks}주 {weekResult.days}일</div>
                <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.8)', marginTop:'4px' }}>현재 임신 주수</div>
                <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.9)', marginTop:'8px', fontWeight:600 }}>출산예정일: {weekResult.eddStr}</div>
              </div>
            )}
          </div>
        )}

        {/* 배란일 */}
        {activeTab === 'ov' && (
          <div>
            <label style={{ display:'block', fontSize:'11px', fontWeight:700, color:'rgba(255,255,255,0.85)', marginBottom:'6px' }}>마지막 생리 시작일</label>
            <input type="date" value={ovLmp} max={new Date().toISOString().split('T')[0]} onChange={e => setOvLmp(e.target.value)}
              style={{ width:'100%', boxSizing:'border-box', borderRadius:'10px', border:'none', padding:'10px 12px', fontSize:'14px', marginBottom:'10px', fontFamily:'inherit' }} />
            <label style={{ display:'block', fontSize:'11px', fontWeight:700, color:'rgba(255,255,255,0.85)', marginBottom:'6px' }}>생리 주기 (일)</label>
            <input type="number" value={ovCycle} min={21} max={45} onChange={e => setOvCycle(Number(e.target.value))}
              style={{ width:'100%', boxSizing:'border-box', borderRadius:'10px', border:'none', padding:'10px 12px', fontSize:'14px', marginBottom:'10px', fontFamily:'inherit' }} />
            <button type="button" onClick={() => setOvResult(calcOv(ovLmp, ovCycle))}
              style={{ width:'100%', background:'#fff', color:'#d63870', border:'none', borderRadius:'10px', padding:'11px', fontSize:'14px', fontWeight:800, cursor:'pointer', fontFamily:'inherit' }}>
              계산하기
            </button>
            {ovResult && (
              <div style={{ marginTop:'12px', background:'rgba(255,255,255,0.15)', borderRadius:'12px', padding:'14px' }}>
                <div style={{ fontSize:'22px', fontWeight:900, color:'#fff' }}>🌸 {ovResult.ovStr}</div>
                <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.8)', marginTop:'4px' }}>예상 배란일</div>
                <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.9)', marginTop:'8px', fontWeight:600 }}>
                  {ovResult.diff === 0 ? '오늘이 배란일입니다' : ovResult.diff > 0 ? `배란일까지 D-${ovResult.diff}` : `배란일 ${Math.abs(ovResult.diff)}일 경과`}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 탭 버튼 2개 — 패널 왼쪽에 붙음 */}
      {!isOpen && (
        <div style={{
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%) translateY(-56px)',
          zIndex: 9998,
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          <button type="button"
            onClick={() => { setActiveTab('week'); setIsOpen(true) }}
            style={{
              background: '#D1366F', color: '#fff',
              border: 'none',
              borderRadius: '10px 0 0 10px',
              padding: '12px 8px',
              fontSize: '11px', fontWeight: 800,
              cursor: 'pointer', fontFamily: 'inherit',
              boxShadow: '-2px 0 10px rgba(209,54,111,0.4)',
              touchAction: 'manipulation',
              writingMode: 'vertical-rl',
              letterSpacing: '0.1em',
            }}>
            📅임신주수
          </button>
          <button type="button"
            onClick={() => { setActiveTab('ov'); setIsOpen(true) }}
            style={{
              background: '#b02255', color: '#fff',
              border: 'none',
              borderRadius: '10px 0 0 10px',
              padding: '12px 8px',
              fontSize: '11px', fontWeight: 800,
              cursor: 'pointer', fontFamily: 'inherit',
              boxShadow: '-2px 0 10px rgba(176,34,85,0.4)',
              touchAction: 'manipulation',
              writingMode: 'vertical-rl',
              letterSpacing: '0.1em',
            }}>
            🌸배란일
          </button>
        </div>
      )}
    </>
  )
}