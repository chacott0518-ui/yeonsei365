import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(160deg, #9B00FF 0%, #CC0077 50%, #DD0000 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '40px 60px 30px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: '58px', fontWeight: 800, color: '#ffffff', letterSpacing: '-1px' }}>
          8주 미만 · 영양제 포함
        </div>
        <div style={{ fontSize: '480px', fontWeight: 900, color: '#FFD700', lineHeight: 1 }}>
          45
        </div>
        <div style={{ fontSize: '52px', fontWeight: 700, color: '#ffffff', letterSpacing: '2px' }}>
          연세365산부인과의원
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}