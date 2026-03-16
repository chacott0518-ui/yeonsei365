'use client'

import { useState, useEffect } from 'react'

export default function PricePopup() {
  const [visible, setVisible] = useState<boolean>(false)
  const [animIn, setAnimIn] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const raw = localStorage.getItem('popup_dismissed')
    if (raw && new Date(raw) > new Date()) return
    const t = setTimeout(() => {
      setVisible(true)
      setTimeout(() => setAnimIn(true), 50)
    }, 1000)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    setAnimIn(false)
    setTimeout(() => setVisible(false), 250)
  }

  const dismissToday = () => {
    const end = new Date()
    end.setHours(23, 59, 59, 0)
    localStorage.setItem('popup_dismissed', end.toISOString())
    close()
  }

  if (!visible) return null

  const priceList = [
    { week: '8주 미만', price: '45' },
    { week: '8주', price: '60' },
    { week: '9주', price: '70' },
    { week: '10주', price: '80' },
  ]

  return (
    <div>
      {/* 모바일 오버레이 */}
      {isMobile && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 9998,
            background: 'rgba(0,0,0,0.4)',
            opacity: animIn ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}

      {/* 팝업 카드 */}
      <div style={{
        position: 'fixed',
        zIndex: 9999,
        ...(isMobile ? {
          top: '50%',
          left: '50%',
          transform: animIn
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -46%) scale(0.95)',
          width: '85%',
          maxWidth: '320px',
        } : {
          top: '100px',
          left: '48px',
          transform: animIn
            ? 'translateY(0) scale(1)'
            : 'translateY(-10px) scale(0.97)',
          width: '260px',
        }),
        opacity: animIn ? 1 : 0,
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        background: '#fff',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(232,48,90,0.18), 0 2px 8px rgba(0,0,0,0.06)',
        border: '1px solid #FFD6E4',
        overflow: 'hidden',
      }}>

        {/* 꽃 장식 헤더 */}
        <div style={{
          background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)',
          padding: isMobile ? '20px 18px 16px' : '16px 16px 12px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* 꽃 장식 상단 */}
          <div style={{
            position: 'absolute',
            top: '4px', left: 0, right: 0,
            fontSize: '10px',
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '10px',
            textAlign: 'center',
          }}>❀ ✿ ❀ ✿ ❀</div>

          {/* 꽃 장식 하단 */}
          <div style={{
            position: 'absolute',
            bottom: '4px', left: 0, right: 0,
            fontSize: '10px',
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '10px',
            textAlign: 'center',
          }}>✿ ❀ ✿ ❀ ✿</div>

          {/* 닫기 버튼 */}
          <button onClick={close} style={{
            position: 'absolute', top: '10px', right: '12px',
            width: '24px', height: '24px', borderRadius: '50%',
            border: 'none', background: 'rgba(255,255,255,0.22)',
            color: '#fff', cursor: 'pointer', fontSize: '11px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>✕</button>

          <div style={{
            fontSize: '9px', letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.82)', marginBottom: '5px',
          }}>YEONSEI 365</div>

          <div style={{
            fontSize: isMobile ? '18px' : '16px',
            fontWeight: 900, color: '#fff', lineHeight: 1.2,
          }}>임신중절 비용안내</div>

          <div style={{
            fontSize: '9px',
            color: 'rgba(255,255,255,0.75)', marginTop: '4px',
          }}>흡입식 소파술 · 자궁유착방지제 +5만원</div>
        </div>

        {/* 가격 리스트 */}
        <div style={{ padding: isMobile ? '14px 18px 0' : '12px 16px 0' }}>
          {priceList.map(({ week, price }, i) => (
            <div key={week} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: isMobile ? '9px 0' : '7px 0',
              borderBottom: i < priceList.length - 1 ? '1px dashed #FFE0E8' : 'none',
            }}>
              <span style={{
                fontSize: isMobile ? '13px' : '12px',
                fontWeight: 700, color: '#1A0A10',
              }}>{week}</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                <span style={{
                  fontSize: isMobile ? '22px' : '20px',
                  fontWeight: 900, color: '#E8305A', lineHeight: 1,
                }}>{price}</span>
                <span style={{
                  fontSize: '10px', fontWeight: 500, color: '#CC3366',
                }}>만원</span>
              </div>
            </div>
          ))}
        </div>

        {/* 포함사항 */}
        <div style={{
          margin: isMobile ? '10px 18px' : '8px 16px',
          padding: '8px 10px',
          background: '#FFF5F7',
          borderRadius: '8px',
          textAlign: 'center',
          fontSize: '9.5px',
          color: '#994466',
          lineHeight: 1.6,
        }}>
          영양제 · 1인 회복실 · 현금/카드 동일 · 부가세 포함
        </div>

        {/* 하단 */}
        <div style={{
          padding: isMobile ? '8px 18px 14px' : '6px 16px 12px',
          borderTop: '1px solid #FFF0F4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: '9px', color: '#BB7788' }}>📍 사당역 4번출구</span>
          <div
            onClick={dismissToday}
            style={{
              fontSize: '9px', color: '#CCA0AA',
              cursor: 'pointer', textDecoration: 'underline',
            }}
          >오늘 하루 안보기</div>
        </div>
      </div>
    </div>
  )
}