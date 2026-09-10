'use client'

import { useState, useEffect } from 'react'

const START_AT = '2026-09-17T00:00:00+09:00'
const END_AT = '2026-09-28T00:00:00+09:00'
const STORAGE_KEY = 'chuseok_popup_dismissed'

function isHolidayPopupActive(now = new Date()): boolean {
  const start = new Date(START_AT)
  const end = new Date(END_AT)
  return now >= start && now < end
}

export default function HolidayPopup() {
  const [visible, setVisible] = useState(false)
  const [animIn, setAnimIn] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [dontShowToday, setDontShowToday] = useState(false)

  useEffect(() => {
    if (!isHolidayPopupActive()) return

    setIsMobile(window.innerWidth < 768)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)

    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw && new Date(raw) > new Date()) {
      return () => window.removeEventListener('resize', onResize)
    }

    const t = setTimeout(() => {
      setVisible(true)
      setTimeout(() => setAnimIn(true), 50)
    }, 900)

    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    if (!visible) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (dontShowToday) {
        const end = new Date()
        end.setHours(23, 59, 59, 0)
        localStorage.setItem(STORAGE_KEY, end.toISOString())
      }
      setAnimIn(false)
      setTimeout(() => setVisible(false), 280)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [visible, dontShowToday])

  const close = () => {
    if (dontShowToday) {
      const end = new Date()
      end.setHours(23, 59, 59, 0)
      localStorage.setItem(STORAGE_KEY, end.toISOString())
    }
    setAnimIn(false)
    setTimeout(() => setVisible(false), 280)
  }

  const openConsult = () => {
    window.dispatchEvent(new Event('open-consult-modal'))
    close()
  }

  if (!isHolidayPopupActive()) return null
  if (!visible) return null

  return (
    <div>
      {/* 모바일만 오버레이 — PC는 비용 팝업과 동시 노출을 위해 오버레이 없음 */}
      {isMobile && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(40, 18, 28, 0.42)',
            opacity: animIn ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}

      <div
        role="dialog"
        aria-modal="true"
        aria-label="2026 추석 진료안내"
        style={{
          position: 'fixed',
          zIndex: 10001,
          top: '50%',
          ...(isMobile
            ? {
                left: '50%',
                width: 'calc(100vw - 32px)',
                maxWidth: '360px',
                transform: animIn
                  ? 'translate(-50%, -50%) scale(1)'
                  : 'translate(-50%, -46%) scale(0.96)',
              }
            : {
                // 좌측 PricePopup(left:48px, width:260)과 겹치지 않도록 중앙보다 약간 우측
                left: 'calc(50% + 90px)',
                width: '520px',
                maxWidth: 'calc(100vw - 32px)',
                transform: animIn
                  ? 'translate(-50%, -50%) scale(1)'
                  : 'translate(-50%, -46%) scale(0.96)',
              }),
          opacity: animIn ? 1 : 0,
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          background: 'linear-gradient(165deg, #FFF8F2 0%, #FFF0F4 48%, #FFE8DC 100%)',
          borderRadius: '24px',
          boxShadow: '0 16px 48px rgba(180, 60, 90, 0.22), 0 4px 12px rgba(0,0,0,0.06)',
          border: '1px solid rgba(232, 160, 140, 0.45)',
          overflow: 'hidden',
        }}
      >
        {/* 장식: 보름달 / 억새 / 감 / 한옥 실루엣 */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '14px',
            left: '18px',
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #FFF6D8 0%, #F5D98A 55%, #E8C56A 100%)',
            boxShadow: '0 0 24px rgba(245, 210, 120, 0.55)',
            opacity: 0.95,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '22px',
            right: '52px',
            fontSize: '18px',
            lineHeight: 1,
            opacity: 0.55,
            letterSpacing: '2px',
            color: '#C4785A',
            userSelect: 'none',
          }}
        >
          🌾🍂
        </div>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '72px',
            right: '16px',
            fontSize: '22px',
            opacity: 0.4,
            color: '#B85A4A',
            userSelect: 'none',
          }}
        >
          🏠
        </div>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '78px',
            left: '16px',
            fontSize: '16px',
            opacity: 0.45,
            userSelect: 'none',
          }}
        >
          🍊
        </div>

        <button
          type="button"
          onClick={close}
          aria-label="닫기"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 2,
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(255,255,255,0.7)',
            color: '#994466',
            cursor: 'pointer',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
          }}
        >
          ✕
        </button>

        <div style={{ position: 'relative', zIndex: 1, padding: isMobile ? '28px 22px 18px' : '36px 40px 22px' }}>
          <p
            style={{
              margin: 0,
              textAlign: 'center',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              color: '#C45A6E',
            }}
          >
            2026 추석 진료안내
          </p>

          <h2
            style={{
              margin: isMobile ? '14px 0 0' : '18px 0 0',
              textAlign: 'center',
              fontSize: isMobile ? '22px' : '28px',
              fontWeight: 900,
              lineHeight: 1.35,
              color: '#2A1018',
              letterSpacing: '-0.02em',
            }}
          >
            추석 연휴에도
            <br />
            연세365산부인과의원은
            <br />
            정상 진료합니다
          </h2>

          <p
            style={{
              margin: isMobile ? '14px 0 0' : '16px 0 0',
              textAlign: 'center',
              fontSize: isMobile ? '13px' : '14px',
              lineHeight: 1.7,
              color: '#7A4A55',
            }}
          >
            추석 명절 연휴에도 쉬지 않고 진료합니다.
            <br />
            내원 전 진료시간을 확인해 주세요.
          </p>

          <div
            style={{
              margin: isMobile ? '18px auto 0' : '22px auto 0',
              maxWidth: '280px',
              padding: '12px 14px',
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(232, 160, 150, 0.35)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 900, color: '#D6336C' }}>
              02-585-3650
            </div>
            <div style={{ marginTop: '4px', fontSize: '12px', color: '#996070' }}>
              사당역 4번 출구 인근
            </div>
          </div>

          <div
            style={{
              marginTop: isMobile ? '16px' : '20px',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '10px',
            }}
          >
            <a
              href="http://pf.kakao.com/_TpaBj/chat"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '44px',
                borderRadius: '12px',
                background: '#D6336C',
                color: '#fff',
                fontWeight: 800,
                fontSize: '14px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(214, 51, 108, 0.28)',
              }}
            >
              카카오톡 문의하기
            </a>
            <button
              type="button"
              onClick={openConsult}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '44px',
                borderRadius: '12px',
                background: '#fff',
                color: '#D6336C',
                fontWeight: 800,
                fontSize: '14px',
                border: '2px solid #D6336C',
                cursor: 'pointer',
              }}
            >
              진료 예약하기
            </button>
          </div>

          <p
            style={{
              margin: isMobile ? '16px 0 0' : '18px 0 0',
              textAlign: 'center',
              fontSize: '12px',
              lineHeight: 1.6,
              color: '#A06070',
            }}
          >
            항상 여성의 건강을 생각하는
            <br />
            <strong style={{ color: '#8A4058' }}>연세365산부인과의원</strong>
          </p>

          <label
            style={{
              marginTop: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <input
              type="checkbox"
              checked={dontShowToday}
              onChange={(e) => setDontShowToday(e.target.checked)}
              style={{ width: '14px', height: '14px', accentColor: '#D6336C' }}
            />
            <span style={{ fontSize: '12px', color: '#996070' }}>오늘 하루 보지 않기</span>
          </label>
        </div>
      </div>
    </div>
  )
}
