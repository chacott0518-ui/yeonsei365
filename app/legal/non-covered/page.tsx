import type { Metadata } from 'next'
import Link from 'next/link'
import { PRICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: '비급여 진료비 안내 | 연세365산부인과',
  description: '연세365산부인과 비급여 진료비 항목 안내. 처치·수술비, 검사료, 제증명 수수료 전체 공개.',
  alternates: { canonical: 'https://www.yeonsei365.com/legal/non-covered' },
}

const CATEGORIES = ['제증명 수수료', '처치 및 수술', '검사료']

export default function NonCoveredPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(80px,12vw,110px) clamp(16px,5vw,24px) 80px', fontFamily: 'Pretendard, sans-serif', color: '#1A0A10', lineHeight: 1.8 }}>
      <nav style={{ fontSize: '13px', color: '#AA5566', marginBottom: '20px' }}>
        <Link href="/" style={{ color: '#AA5566', textDecoration: 'none' }}>홈</Link>{' > '}<span>비급여 진료비 안내</span>
      </nav>
      <h1 style={{ fontSize: 'clamp(22px,5vw,28px)', fontWeight: 900, color: '#1A0A10', marginBottom: '8px' }}>비급여 진료비 안내</h1>
      <p style={{ fontSize: '13px', color: '#999', marginBottom: '16px' }}>연세365산부인과 · 기준일: 2026년 1월 1일</p>

      <div style={{ background: '#FFF5F7', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px', border: '1px solid #FFE0E8' }}>
        <p style={{ fontSize: '13px', color: '#554455', lineHeight: 1.85 }}>
          본 비급여 진료비는 의료법 제45조 및 동법 시행규칙 제42조의2에 의거하여 공개합니다. 실제 진료비는 환자 상태, 시술 난이도, 소요 시간에 따라 달라질 수 있습니다. 자세한 사항은 내원 상담 또는 <strong>02-585-3650</strong>으로 문의하세요.
        </p>
      </div>

      {CATEGORIES.map((category) => {
        const items = PRICES.filter((p) => p.category === category)
        return (
          <div key={category} style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 800, borderLeft: '4px solid #E8305A', paddingLeft: '14px', marginBottom: '16px', color: '#1A0A10' }}>
              {category}
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr style={{ background: '#E8305A' }}>
                    <th style={{ padding: '10px 14px', color: '#fff', fontWeight: 700, textAlign: 'left', width: '40%' }}>항목명</th>
                    <th style={{ padding: '10px 14px', color: '#fff', fontWeight: 700, textAlign: 'right', width: '25%' }}>비용 (원)</th>
                    <th style={{ padding: '10px 14px', color: '#fff', fontWeight: 700, textAlign: 'left', width: '35%' }}>비고</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <tr key={item.name} style={{ background: i % 2 === 0 ? '#FFF5F7' : '#fff', borderBottom: '1px solid #FFE0E8' }}>
                      <td style={{ padding: '10px 14px', color: '#1A0A10', fontWeight: 600 }}>{item.name}</td>
                      <td style={{ padding: '10px 14px', color: '#E8305A', fontWeight: 700, textAlign: 'right', whiteSpace: 'pre-line' }}>{item.price}</td>
                      <td style={{ padding: '10px 14px', color: '#888', fontSize: '12px' }}>{item.note || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      })}

      <div style={{ background: '#FFF5F7', borderRadius: '10px', padding: '16px 18px', marginBottom: '32px', border: '1px solid #FFE0E8' }}>
        <p style={{ fontSize: '13px', color: '#554455', lineHeight: 1.85 }}>
          ※ 위 비급여 진료비는 부가세 별도 표시 항목을 제외하고 VAT 포함 금액입니다.<br />
          ※ 실제 진료비는 환자 상태에 따라 달라질 수 있으며, 정확한 비용은 내원 상담 후 안내드립니다.<br />
          ※ 기준일: 2026년 1월 1일
        </p>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)', borderRadius: '20px', padding: 'clamp(20px,5vw,28px)', textAlign: 'center' }}>
        <p style={{ color: '#fff', fontSize: '18px', fontWeight: 900, marginBottom: '6px' }}>비용 관련 자세한 상담</p>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', marginBottom: '18px' }}>내원 전 전화 또는 카카오톡으로 문의하세요</p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
            style={{ background: '#FEE500', color: '#3B1B1B', padding: '10px 18px', borderRadius: '50px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', minWidth: '140px', textAlign: 'center' }}>
            💬 카카오톡 상담
          </a>
          <a href="tel:02-585-3650"
            style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '10px 18px', borderRadius: '50px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', minWidth: '140px', textAlign: 'center', border: '2px solid rgba(255,255,255,0.5)' }}>
            📞 02-585-3650
          </a>
        </div>
      </div>
    </div>
  )
}