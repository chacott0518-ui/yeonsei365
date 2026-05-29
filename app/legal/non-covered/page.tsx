import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '비급여 진료비 안내 | 연세365산부인과',
  description: '연세365산부인과 비급여 진료비 항목 안내. 처치·수술비, 검사료, 제증명 수수료 전체 공개.',
  alternates: { canonical: 'https://www.yeonsei365.com/legal/non-covered' },
}

const PRICE_DATA = [
  { category: '제증명 수수료', name: '일반진단서', price: '20,000', note: '' },
  { category: '제증명 수수료', name: '영문 일반진단서', price: '20,000', note: '' },
  { category: '제증명 수수료', name: '입퇴원확인서', price: '3,000', note: '' },
  { category: '제증명 수수료', name: '통원확인서', price: '3,000', note: '' },
  { category: '제증명 수수료', name: '진료확인서', price: '3,000', note: '' },
  { category: '제증명 수수료', name: '진료기록사본 (1~5매)', price: '1,000', note: '' },
  { category: '제증명 수수료', name: '진료기록사본 (6매이상/1매당)', price: '100', note: '' },
  { category: '제증명 수수료', name: '제증명서 사본', price: '1,000', note: '' },
  { category: '제증명 수수료', name: '진료기록영상 (CD)', price: '10,000', note: '' },
  { category: '제증명 수수료', name: '슬라이드/블록 (대출)', price: '10,000', note: '' },
  { category: '제증명 수수료', name: '출생증명서', price: '3,000', note: '' },
  { category: '제증명 수수료', name: '영문출생증명서', price: '20,000', note: '' },
  { category: '제증명 수수료', name: 'CCTV 영상 수수료(열람,시청)', price: '1,500', note: '1편 기준 30분 초과시 10분마다 500원' },
  { category: '제증명 수수료', name: 'CCTV 영상 수수료 사본', price: '800', note: '1GB 마다 ※ 매체비용은 별도' },
  { category: '처치 및 수술', name: '하이푸(HIFU)', price: '3,000,000 ~ 12,000,000', note: '자궁근종, 선근종 사이즈, 위치, 개수에 따라 상이' },
  { category: '처치 및 수술', name: '고주파자궁근종용해술', price: '1,000,000 ~ 15,000,000', note: '사이즈, 위치, 개수따라 상이' },
  { category: '처치 및 수술', name: '트위스트 듀얼 웨이브', price: '3,100,000', note: '-' },
  { category: '처치 및 수술', name: '소음순성형술 (양쪽)', price: '1,500,000', note: '-' },
  { category: '처치 및 수술', name: '소음순 성형술 (한쪽)', price: '1,100,000', note: '-' },
  { category: '처치 및 수술', name: '음핵수술', price: '1,100,000', note: '-' },
  { category: '처치 및 수술', name: '지방흡입', price: '1,800,000 ~ 4,000,000', note: '사이즈, 위치, 개수따라 상이' },
  { category: '처치 및 수술', name: '성형 실밥 제거', price: '20,000', note: '' },
  { category: '처치 및 수술', name: '줄기세포', price: '1,000,000 ~ 8,800,000', note: '1회당, 부위별 상이' },
  { category: '처치 및 수술', name: '난관결찰 (불임수술)', price: '700,000', note: '-' },
  { category: '처치 및 수술', name: '일반루프 (피임)', price: '120,000', note: '-' },
  { category: '처치 및 수술', name: '미레나, 임플라논 (피임)', price: '350,000', note: '카일리나 : 380,000' },
  { category: '처치 및 수술', name: '레이저를 이용한 진균증치료', price: '30,000 ~ 200,000', note: '부위별 상이' },
  { category: '처치 및 수술', name: 'VABE 유방양성병변절제술', price: '550,000', note: '맘모톰(절제) / 종양 1개당' },
  { category: '처치 및 수술', name: '보톡스 (사각턱)', price: '70,000', note: 'VAT 10% 별도' },
  { category: '처치 및 수술', name: '보톡스 (주름)', price: '50,000', note: 'VAT 10% 별도' },
  { category: '처치 및 수술', name: '필러', price: '150,000', note: 'VAT 10% 별도' },
  { category: '처치 및 수술', name: '삭센다펜주(비만주사)', price: '120,000', note: '개당' },
  { category: '처치 및 수술', name: '위고비프리필드펜', price: '280,000 ~ 500,000', note: '용량별 상이' },
  { category: '처치 및 수술', name: '마운자로프리필드펜주', price: '385,000 ~ 600,000', note: '용량별 상이' },
  { category: '처치 및 수술', name: '토닝레이저', price: '100,000', note: 'VAT 10% 별도' },
  { category: '처치 및 수술', name: '슈링크 100샷 (리프팅)', price: '70,000', note: 'VAT 10% 별도' },
  { category: '검사료', name: '수술중 초음파(비급여)', price: '50,000 ~ 5,000,000', note: '수술 사이즈, 시간 등에 따라 상이' },
  { category: '검사료', name: '산과초음파(제1삼분기~ 일반)', price: '33,000', note: '급여횟수 이상 실시시' },
  { category: '검사료', name: '산과 초음파 (제2,3삼분기~ 일반)', price: '50,000', note: '급여횟수 이상 실시시' },
  { category: '검사료', name: '유방초음파 (액와부 포함)', price: '100,000', note: '대상자는 급여' },
  { category: '검사료', name: '갑상선 초음파(경부 림프절 포함)', price: '90,000', note: 'Thyroid US' },
  { category: '검사료', name: '하지정맥초음파', price: '140,000', note: '양측' },
  { category: '검사료', name: '골밀도검사', price: '70,000 ~', note: '골다공증검사 / 대상자는 급여' },
  { category: '검사료', name: '임신확인을 위한 혈액검사', price: '25,000', note: 'B-HCG' },
  { category: '검사료', name: '정액검사', price: '50,000', note: '-' },
  { category: '검사료', name: '기형아검사(1차)', price: '60,000', note: '-' },
  { category: '검사료', name: 'G-NIPT (지-니프트)', price: '650,000', note: '-' },
  { category: '검사료', name: '양수검사', price: '650,000 ~ 1,300,000', note: '단태아/다태아' },
  { category: '검사료', name: 'AMH 항뮬러관호르몬', price: '50,000', note: '대상자는 급여' },
  { category: '검사료', name: 'HPV 인유두종바이러스 검사', price: '70,000', note: '대상자는 급여' },
  { category: '검사료', name: '미혼여성 검진', price: '200,000', note: '-' },
  { category: '검사료', name: '임신준비 검진', price: '300,000', note: '-' },
  { category: '검사료', name: '여성맞춤 검진', price: '300,000', note: '-' },
  { category: '검사료', name: '갱년기여성 검진', price: '390,000', note: '-' },
  { category: '검사료', name: '알러지검사', price: '150,000', note: '대상자는 급여' },
]

const CATEGORIES = ['제증명 수수료', '처치 및 수술', '검사료']

export default function NonCoveredPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(80px,12vw,110px) clamp(16px,5vw,24px) 80px', fontFamily: 'Pretendard, sans-serif', color: '#1A0A10', lineHeight: 1.8 }}>

      <nav style={{ fontSize: '13px', color: '#AA5566', marginBottom: '20px' }}>
        <Link href="/" style={{ color: '#AA5566', textDecoration: 'none' }}>홈</Link>{' > '}
        <span>비급여 진료비 안내</span>
      </nav>

      <h1 style={{ fontSize: 'clamp(22px,5vw,28px)', fontWeight: 900, color: '#1A0A10', marginBottom: '8px' }}>
        비급여 진료비 안내
      </h1>
      <p style={{ fontSize: '13px', color: '#999', marginBottom: '16px' }}>
        연세365산부인과 · 기준일: 2026년 1월 1일
      </p>

      <div style={{ background: '#FFF5F7', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px', border: '1px solid #FFE0E8' }}>
        <p style={{ fontSize: '13px', color: '#554455', lineHeight: 1.85 }}>
          본 비급여 진료비는 의료법 제45조 및 동법 시행규칙 제42조의2에 의거하여 공개합니다.
          실제 진료비는 환자 상태, 시술 난이도, 소요 시간에 따라 달라질 수 있습니다.
          자세한 사항은 내원 상담 또는 <strong>02-585-3650</strong>으로 문의하세요.
        </p>
      </div>

      {CATEGORIES.map((category) => {
        const items = PRICE_DATA.filter((p) => p.category === category)
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
                    <tr key={`${category}-${i}`} style={{ background: i % 2 === 0 ? '#FFF5F7' : '#fff', borderBottom: '1px solid #FFE0E8' }}>
                      <td style={{ padding: '10px 14px', color: '#1A0A10', fontWeight: 600 }}>{item.name}</td>
                      <td style={{ padding: '10px 14px', color: '#E8305A', fontWeight: 700, textAlign: 'right' }}>{item.price}</td>
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