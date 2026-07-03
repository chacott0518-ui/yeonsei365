import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '개인정보처리방침 | 연세365산부인과',
  description: '연세365산부인과의원 개인정보처리방침입니다. 수집 항목, 이용 목적, 보유 기간을 안내합니다.',
  alternates: { canonical: 'https://www.yeonsei365.com/legal/privacy' },
}

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(80px,12vw,110px) clamp(16px,5vw,24px) 80px', fontFamily: 'Pretendard, sans-serif', color: '#1A0A10', lineHeight: 1.8 }}>

      <nav style={{ fontSize: '13px', color: '#AA5566', marginBottom: '20px' }}>
        <Link href="/" style={{ color: '#AA5566', textDecoration: 'none' }}>홈</Link>{' > '}
        <span>개인정보처리방침</span>
      </nav>

      <h1 style={{ fontSize: 'clamp(22px,5vw,28px)', fontWeight: 900, color: '#1A0A10', marginBottom: '8px' }}>
        개인정보처리방침
      </h1>
      <p style={{ fontSize: '13px', color: '#999', marginBottom: '16px' }}>
        연세365산부인과의원 · 시행일자: 2026년 1월 1일
      </p>

      <div style={{ background: '#FFF5F7', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px', border: '1px solid #FFE0E8' }}>
        <p style={{ fontSize: '13px', color: '#554455', lineHeight: 1.85 }}>
          연세365산부인과의원(이하 "본원")는 개인정보 보호를 매우 중요하게 생각합니다. 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 등에 관한 법률, 개인정보보호법을 준수합니다.
        </p>
      </div>

      {[
        {
          title: '1. 수집하는 개인정보 항목 및 수집 방법',
          content: `가. 진료 시 수집항목
- 필수항목: 성명(한글), 주소, 연락처
- 건강정보: 병력, 가족력 등 진료서비스 제공을 위해 필요한 개인건강정보
※ 의료법에 의해 고유식별정보 및 진료정보를 의무 보유합니다.

나. 홈페이지 상담·예약 시 수집항목
- 필수항목: 성명, 연락처(휴대폰번호)
- 선택항목: 이메일, 상담 내용
- 자동 수집: 서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보

다. 수집 방법
- 홈페이지(카카오톡 상담, 온라인 예약, 온라인 상담, 수술후기), 전화, 이메일`,
        },
        {
          title: '2. 개인정보 수집 및 이용 목적',
          content: `본원은 수집한 개인정보를 다음 목적으로 활용합니다:
- 진료·검사·예약조회 및 본인확인
- 진단 및 치료를 위한 서비스
- 진료비 청구·수납·환급 등 원무 서비스
- 온라인 상담 답변 처리
- 새로운 서비스 및 행사 정보 안내
- 의료의 질 관리 및 병원 운영`,
        },
        {
          title: '3. 개인정보 제공 및 공유',
          content: `본원은 귀하의 동의 또는 관련법령에 의한 경우를 제외하고 개인정보를 제3자에게 제공하지 않습니다.

예외:
- 이용자가 사전 동의한 경우
- 법령에 따른 수사기관 요구가 있는 경우
- 특정 개인을 식별할 수 없는 형태로 가공한 경우`,
        },
        {
          title: '4. 개인정보 보유 및 이용기간',
          content: `• 홈페이지 회원정보: 회원 탈퇴 시까지
- 진료기록: 의료법에 따라 10년 보존 (환자명부 5년, 진료기록부 10년)
- 소비자 불만·분쟁처리 기록: 3년 (전자상거래소비자보호법)
- 본인확인 기록: 6개월 (정보통신망법)
- 방문 기록: 3개월 (통신비밀보호법)`,
        },
        {
          title: '5. 개인정보 파기절차 및 방법',
          content: `목적 달성 후 5일 이내 파기합니다.
- 전자파일: 복구 불가한 기술적 방법으로 삭제
- 출력물: 분쇄 또는 소각`,
        },
        {
          title: '6. 이용자 권리 및 행사방법',
          content: `귀하는 언제든지 개인정보 열람·정정·삭제를 요구할 수 있습니다.
- 방문 신청: 신분증 지참 후 본원 방문
- 대리인 신청: 위임장 및 대리인 신분증 제출
※ 법에 의해 보관이 의무화된 정보는 보관기간 내 삭제 불가합니다.`,
        },
        {
          title: '7. 개인정보 자동 수집 장치 (쿠키)',
          content: `본원은 맞춤서비스 제공을 위해 쿠키를 사용합니다.
- Chrome 쿠키 거부: 설정 > 고급 설정 > 개인정보 > 콘텐츠 설정 > 쿠키
※ 쿠키 거부 시 일부 서비스 이용에 제한이 있을 수 있습니다.`,
        },
        {
          title: '8. 영상정보처리기기 (CCTV)',
          content: `• 설치 목적: 환자 및 시설 안전, 화재·범죄 예방
- 촬영 시간: 24시간
- 설치 위치: 로비, 복도, 상담실, 치료실, 회복실 등
- 관리책임자: 대표원장
- 보관기간 만료 시 복원 불가한 방법으로 영구 삭제`,
        },
        {
          title: '9. 개인정보 안전성 확보 조치',
          content: `• 개인정보 취급자 최소화 및 정기 교육
- 연 1회 이상 자체 점검 실시
- 비밀번호 암호화 저장
- 해킹 등 대비 보안프로그램 설치·운영
- 데이터베이스 접근권한 통제`,
        },
        {
          title: '10. 개인정보관리책임자',
          content: `관리책임자: 대표원장 이진우
소속: 연세365산부인과의원
주소: 서울특별시 관악구 과천대로 939, 3층
전화: 02-585-3650

개인정보 침해 신고 기관:
- 개인정보분쟁조정위원회: 1833-6972
- 대검찰청 사이버수사과: 1301
- 경찰청 사이버수사국: 182`,
        },
      ].map(({ title, content }) => (
        <div key={title} style={{ marginBottom: '24px', borderBottom: '1px solid #FFE0E8', paddingBottom: '20px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#E8305A', marginBottom: '10px' }}>{title}</h2>
          <p style={{ fontSize: '14px', color: '#554455', lineHeight: 1.85, whiteSpace: 'pre-line' }}>{content}</p>
        </div>
      ))}

      <div style={{ background: '#FFF5F7', borderRadius: '10px', padding: '14px 18px', fontSize: '12px', color: '#AA5566' }}>
        공고일자: 2025년 12월 25일 · 시행일자: 2026년 1월 1일 · 연세365산부인과의원
      </div>

    </div>
  )
}