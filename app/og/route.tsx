import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #FF6B00 0%, #FF1493 45%, #CC0066 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 60px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* 배지 */}
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          border: '1px solid rgba(255,255,255,0.4)',
          borderRadius: '100px',
          padding: '10px 28px',
          fontSize: '22px',
          color: '#fff',
          fontWeight: 700,
          marginBottom: '24px',
        }}>
          사당역 4번출구 연세365산부인과
        </div>

        {/* 제목 */}
        <div style={{
          fontSize: '56px',
          fontWeight: 900,
          color: '#fff',
          textAlign: 'center',
          lineHeight: 1.2,
          marginBottom: '36px',
        }}>
          임신중절수술 비용 안내
        </div>

        {/* 가격 4개 */}
        <div style={{
          display: 'flex',
          gap: '16px',
          width: '100%',
          marginBottom: '24px',
        }}>
          {[
            { week: '8주 미만', price: '45' },
            { week: '8주', price: '60' },
            { week: '9주', price: '70' },
            { week: '10주', price: '80' },
          ].map(({ week, price }) => (
            <div key={week} style={{
              flex: 1,
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '12px',
              padding: '20px 12px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <div style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)', fontWeight: 700, marginBottom: '8px' }}>{week}</div>
              <div style={{ fontSize: '52px', fontWeight: 900, color: '#FFFF00', lineHeight: 1 }}>{price}</div>
              <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', fontWeight: 500, marginTop: '4px' }}>만원</div>
            </div>
          ))}
        </div>

        {/* 포함사항 */}
        <div style={{
          fontSize: '18px',
          color: 'rgba(255,255,255,0.85)',
          marginBottom: '20px',
        }}>
          영양제 · 1인 회복실 포함 · 현금/카드 동일가 · 부가세 포함
        </div>

        {/* 하단 바 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          background: 'rgba(0,0,0,0.2)',
          borderRadius: '12px',
          padding: '16px 32px',
        }}>
          <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)' }}>📍 사당역 4번출구</div>
          <div style={{ fontSize: '26px', fontWeight: 900, color: '#fff' }}>연세365산부인과</div>
          <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)' }}>📞 02-585-3650</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}