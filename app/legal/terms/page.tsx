import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '이용약관 | 연세365산부인과',
  description: '연세365산부인과 홈페이지 이용약관입니다.',
  alternates: { canonical: 'https://www.yeonsei365.com/legal/terms' },
}

export default function TermsPage() {
  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(80px,12vw,110px) clamp(16px,5vw,24px) 80px', fontFamily: 'Pretendard, sans-serif', color: '#1A0A10', lineHeight: 1.8 }}>

      <nav style={{ fontSize: '13px', color: '#AA5566', marginBottom: '20px' }}>
        <Link href="/" style={{ color: '#AA5566', textDecoration: 'none' }}>홈</Link>{' > '}
        <span>이용약관</span>
      </nav>

      <h1 style={{ fontSize: 'clamp(22px,5vw,28px)', fontWeight: 900, color: '#1A0A10', marginBottom: '8px' }}>
        이용약관
      </h1>
      <p style={{ fontSize: '13px', color: '#999', marginBottom: '16px' }}>
        연세365산부인과 · 시행일자: 2026년 1월 1일
      </p>

      <div style={{ background: '#FFF5F7', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px', border: '1px solid #FFE0E8' }}>
        <p style={{ fontSize: '13px', color: '#554455', lineHeight: 1.85 }}>
          본 약관은 연세365산부인과(이하 "병원")가 운영하는 <strong>www.yeonsei365.com</strong>에서 제공하는 인터넷 관련 서비스 이용조건 및 절차에 관한 사항을 규정합니다.
        </p>
      </div>

      {[
        {
          title: '제1조 (목적)',
          content: '본 약관은 이용자가 연세365산부인과에서 제공하는 온라인 서비스를 이용함에 있어 병원과 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.',
        },
        {
          title: '제2조 (회원의 정의)',
          content: '"회원"이란 www.yeonsei365.com에 접속하여 본 약관에 따라 온라인 회원으로 가입하여 병원이 제공하는 서비스를 이용하는 자를 말합니다.',
        },
        {
          title: '제3조 (회원 가입)',
          content: `① 회원이 되고자 하는 자는 병원이 정한 가입 양식에 따라 회원정보를 기입하고 가입 신청을 합니다.
② 다음 각 호에 해당하는 경우 가입을 거절할 수 있습니다:
- 허위 내용 등록
- 타인 정보 도용
- 기타 병원이 부적절하다고 판단하는 경우
③ 회원은 정보 변경 시 즉시 수정하여야 합니다.`,
        },
        {
          title: '제4조 (서비스의 제공)',
          content: `병원은 다음 서비스를 제공합니다:
1. 온라인 상담 및 예약 서비스
2. 진료 정보 및 의료 콘텐츠 제공
3. 카카오톡 상담 연결 서비스
4. AI 건강 Q&A 서비스
5. 기타 병원이 제공하는 각종 서비스`,
        },
        {
          title: '제5조 (서비스 중단)',
          content: '병원은 시스템 점검, 교체, 고장 등의 사유 발생 시 서비스 제공을 일시 중단할 수 있습니다. 사전 통지가 불가능한 경우를 제외하고 서비스 중단 시 공지합니다.',
        },
        {
          title: '제6조 (회원 탈퇴 및 자격 상실)',
          content: `① 회원은 언제든지 탈퇴를 요청할 수 있으며 병원은 즉시 처리합니다.
② 다음의 경우 자격을 제한·정지·상실시킬 수 있습니다:
- 가입 시 허위 정보 등록
- 타인의 서비스 이용 방해
- 법령 및 본 약관 위반`,
        },
        {
          title: '제7조 (개인정보 보호)',
          content: '병원은 관련법령에 따라 회원의 개인정보를 보호합니다. 자세한 사항은 개인정보처리방침을 따릅니다.',
        },
        {
          title: '제8조 (회원의 의무)',
          content: `회원은 다음 행위를 하여서는 안 됩니다:
1. 가입 신청 시 허위 내용 등록
2. 타인의 정보 도용
3. 병원 및 제3자의 지적재산권 침해
4. 스팸·음란·폭력성 내용 게시
5. 병원 서비스를 이용한 영리 목적 활동
6. 기타 법령 및 본 약관 위반`,
        },
        {
          title: '제9조 (저작권)',
          content: `① 병원이 작성한 저작물에 대한 저작권은 병원에 귀속됩니다.
② 회원은 병원의 사전 승낙 없이 정보를 영리 목적으로 이용하거나 제3자에게 제공해서는 안 됩니다.`,
        },
        {
          title: '제10조 (약관의 개정)',
          content: '병원은 관련 법령을 위배하지 않는 범위 내에서 약관을 개정할 수 있습니다. 개정 시 적용일자 7일 전부터 사이트에 공지합니다.',
        },
        {
          title: '제11조 (재판관할)',
          content: '본 약관과 관련된 분쟁은 대한민국의 법원에 제기합니다. 서울중앙지방법원을 제1심 관할 법원으로 합니다.',
        },
      ].map(({ title, content }) => (
        <div key={title} style={{ marginBottom: '24px', borderBottom: '1px solid #FFE0E8', paddingBottom: '20px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#E8305A', marginBottom: '10px' }}>{title}</h2>
          <p style={{ fontSize: '14px', color: '#554455', lineHeight: 1.85, whiteSpace: 'pre-line' }}>{content}</p>
        </div>
      ))}

      <div style={{ background: '#FFF5F7', borderRadius: '10px', padding: '14px 18px', fontSize: '12px', color: '#AA5566' }}>
        시행일자: 2026년 1월 1일 · 연세365산부인과의원 · 서울 관악구 과천대로 939 3층
      </div>

    </div>
  )
}