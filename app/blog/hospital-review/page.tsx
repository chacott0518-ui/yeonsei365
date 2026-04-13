import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '사당역 산부인과 솔직 후기 2026 | 연세365산부인과의원 직접 다녀왔어요',
  description: '사당역 연세365산부인과의원 처음 방문 후기. 대기시간, 진료 분위기, 비용까지 꾸밈없이 적었습니다.',
  keywords: ['사당역산부인과', '사당역산부인과후기', '연세365산부인과후기', '동작구산부인과'],
  alternates: { canonical: 'https://yeonsei365.vercel.app/blog/hospital-review' },
  openGraph: {
    title: '사당역 산부인과 솔직 후기 | 연세365산부인과',
    description: '처음 방문이라 긴장했는데 생각보다 편안했어요.',
    url: 'https://yeonsei365.vercel.app/blog/hospital-review',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }],
  },
}

const faqData = [
  {
    q: '사당역 산부인과 예약 없이 방문해도 되나요?',
    a: '예약 없이도 방문 가능하지만 대기 시간이 길어질 수 있습니다. 전화 또는 네이버로 사전 예약을 권장합니다.',
  },
  {
    q: '연세365산부인과 사당역에서 얼마나 걸리나요?',
    a: '사당역 4번 출구에서 도보로 이동 가능한 거리에 위치합니다.',
  },
  {
    q: '미혼 여성도 산부인과 방문 괜찮나요?',
    a: '네, 결혼 여부와 관계없이 누구든 방문 가능합니다.',
  },
  {
    q: '처음 방문하면 무엇을 준비해야 하나요?',
    a: '신분증과 마지막 생리 시작일만 알고 가면 됩니다.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function HospitalReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: 'clamp(80px,12vw,110px) clamp(16px,5vw,24px) 80px',
        fontFamily: 'Pretendard, -apple-system, sans-serif',
        color: '#1A0A10',
        lineHeight: 1.85,
      }}>

        {/* 브레드크럼 */}
        <nav style={{ fontSize: 'clamp(11px,2.5vw,13px)', color: '#AA5566', marginBottom: '20px' }}>
          <a href="/" style={{ color: '#AA5566', textDecoration: 'none' }}>홈</a>
          {' > '}
          <a href="/#review" style={{ color: '#AA5566', textDecoration: 'none' }}>수술후기·사례</a>
          {' > '}
          <span>병원 방문 후기</span>
        </nav>

        {/* 제목 */}
        <h1 style={{
          fontSize: 'clamp(22px,5vw,30px)',
          fontWeight: 900,
          lineHeight: 1.35,
          marginBottom: '10px',
          wordBreak: 'keep-all',
        }}>
          사당역 산부인과,<br />
          연세365 직접 다녀온 솔직 후기
        </h1>
        <p style={{ fontSize: 'clamp(11px,2.5vw,13px)', color: '#999', marginBottom: '28px' }}>
          2026년 4월 · 사당역 여성검진 방문 후기
        </p>

        {/* 대표 이미지 자리 */}
        <div style={{
          marginBottom: '32px',
          borderRadius: '14px',
          overflow: 'hidden',
          background: '#FFF5F7',
          height: '240px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #FFE0E8',
        }}>
          <p style={{ color: '#E8305A', fontWeight: 700, fontSize: '14px' }}>
            📍 연세365산부인과의원 · 사당역 4번출구
          </p>
        </div>

        {/* 도입부 */}
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          솔직히 말하면 예약 잡아놓고도 취소할까 세 번은 고민했어요. 산부인과는 왠지 문턱이 높게 느껴지잖아요. 아프지 않으면 안 가도 되는 곳 같은 느낌? 근데 생리 불순이 두 달째 이어지면서 더 이상 미루는 게 맞지 않겠다 싶었어요.
        </p>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '36px', wordBreak: 'keep-all' }}>
          사당역 근처라는 이유가 컸고, 지인이 한 번 다녀왔다고 해서 연세365산부인과의원으로 결정했어요. 제 기준에서 느낀 점 그대로 적어볼게요.
        </p>

        {/* 섹션1 — 위치 */}
        <h2 style={{
          fontSize: 'clamp(17px,4vw,22px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          위치 — 사당역에서 얼마나 걸리나요?
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '36px', wordBreak: 'keep-all' }}>
          사당역 4번 출구로 나와서 걸어갔어요. 생각보다 금방 도착했고 건물 찾는 게 어렵지 않았어요. 주차 공간은 따로 없어서 지하철 타고 갔는데, 대중교통 이용하는 분들한테는 접근성이 진짜 좋아요.
        </p>

        {/* 섹션2 — 분위기 */}
        <h2 style={{
          fontSize: 'clamp(17px,4vw,22px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          처음 들어갔을 때 분위기
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          들어갔을 때 첫인상은 생각보다 아늑하다는 거였어요. 전형적인 병원 느낌보다 훨씬 편안했어요. 대기실 좌석이 다른 환자분들과 시선이 많이 겹치지 않게 배치돼 있던 게 은근 포인트였어요. 혼자 오는 분들한테는 그런 게 생각보다 중요하거든요.
        </p>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '36px', wordBreak: 'keep-all' }}>
          접수하고 나서 문진표 작성했는데 복잡하지 않아요. 지금 어떤 증상이 있는지 적는 정도라 부담 없었어요.
        </p>

        {/* 섹션3 — 대기시간 */}
        <h2 style={{
          fontSize: 'clamp(17px,4vw,22px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          대기 시간은요?
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          예약 안 하고 갔더니 대기가 20분 정도 됐어요. 사람이 꽤 있었는데, 예약하고 가면 훨씬 빠르다고 직원분이 알려주셨어요.
        </p>
        <div style={{
          background: '#FFF5F7',
          borderRadius: '12px',
          padding: 'clamp(12px,3vw,16px) clamp(14px,4vw,20px)',
          marginBottom: '36px',
          border: '1px solid #FFE0E8',
          fontSize: 'clamp(12px,2.8vw,14px)',
          color: '#994466',
          wordBreak: 'keep-all',
        }}>
          💡 예약 팁 — 네이버에서 <strong>"연세365산부인과의원"</strong> 검색 후 예약 또는 전화 <strong>02-585-3650</strong>
        </div>

        {/* 섹션4 — 진료실 */}
        <h2 style={{
          fontSize: 'clamp(17px,4vw,22px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          진료실 안에서
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          진료실에 들어가면 의사 선생님이 먼저 "어떻게 오셨어요?" 하고 물어보세요. 처음엔 뭘 어떻게 말해야 하나 머릿속이 정리가 안 됐는데, 증상 이야기 꺼내니까 알아서 물어봐주시면서 진행이 됐어요.
        </p>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '14px', wordBreak: 'keep-all' }}>
          눈치 받는 느낌이 전혀 없었어요. 말꺼내기 좀 부끄러운 내용도 그냥 편하게 들어주셔서 오히려 제가 더 많이 이야기한 것 같아요.
        </p>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '36px', wordBreak: 'keep-all' }}>
          초음파 검사랑 기본 검진 받았는데, 결과도 당일에 바로 설명해주셔서 따로 기다릴 필요 없었어요.
        </p>

        {/* 섹션5 — 비용 */}
        <h2 style={{
          fontSize: 'clamp(17px,4vw,22px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          비용은 어떻게 됐나요?
        </h2>
        <p style={{ fontSize: 'clamp(14px,3vw,16px)', marginBottom: '36px', wordBreak: 'keep-all' }}>
          저는 국가건강검진 대상이어서 자궁경부암 검사는 무료로 받았어요. 추가 초음파는 별도 비용이 있었는데, 접수할 때 미리 항목별 비용을 안내해줘서 당황하지 않았어요. 모르는 게 있으면 그냥 물어보면 친절하게 설명해줘요.
        </p>

        {/* 총평 */}
        <div style={{
          background: '#FFF5F7',
          borderRadius: '16px',
          padding: 'clamp(18px,4vw,24px) clamp(18px,5vw,28px)',
          marginBottom: '36px',
          border: '1px solid #FFE0E8',
          wordBreak: 'keep-all',
        }}>
          <p style={{ fontSize: 'clamp(14px,3.5vw,17px)', fontWeight: 800, color: '#E8305A', marginBottom: '10px' }}>
            총평
          </p>
          <p style={{ fontSize: 'clamp(13px,2.8vw,15px)', color: '#554455', lineHeight: 1.85, margin: 0 }}>
            산부인과가 낯설고 혼자 가기 불안한 분들한테 잘 맞는 곳이라고 생각해요. 사당역에서 가깝고 분위기가 과하게 병원 같지 않아서 긴장이 덜했어요. 다음번 정기 검진도 여기서 할 것 같아요.
          </p>
        </div>

        {/* FAQ */}
        <h2 style={{
          fontSize: 'clamp(17px,4vw,22px)',
          fontWeight: 800,
          borderLeft: '4px solid #E8305A',
          paddingLeft: '14px',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}>
          자주 묻는 질문
        </h2>
        {faqData.map((item, i) => (
          <div key={i} style={{
            marginBottom: '10px',
            border: '1px solid #FFE0E8',
            borderRadius: '12px',
            overflow: 'hidden',
          }}>
            <div style={{
              background: '#FFF5F7',
              padding: 'clamp(10px,3vw,14px) clamp(14px,4vw,18px)',
              fontWeight: 700,
              fontSize: 'clamp(12px,2.8vw,14px)',
              color: '#E8305A',
              wordBreak: 'keep-all',
            }}>
              Q. {item.q}
            </div>
            <div style={{
              padding: 'clamp(10px,3vw,14px) clamp(14px,4vw,18px)',
              fontSize: 'clamp(12px,2.8vw,14px)',
              color: '#554455',
              lineHeight: 1.75,
              wordBreak: 'keep-all',
            }}>
              A. {item.a}
            </div>
          </div>
        ))}

        {/* 관련 글 */}
        <div style={{
          marginTop: '36px',
          padding: 'clamp(14px,4vw,20px)',
          background: '#FFFAFB',
          borderRadius: '12px',
          border: '1px solid #FFE0E8',
        }}>
          <p style={{ fontSize: 'clamp(12px,2.8vw,14px)', fontWeight: 700, color: '#994466', marginBottom: '10px' }}>
            함께 읽으면 좋은 글
          </p>
          <a href="/womens-clinic/first-visit" style={{ display: 'block', color: '#E8305A', fontSize: 'clamp(12px,2.8vw,14px)', textDecoration: 'none', marginBottom: '8px' }}>
            → 산부인과 처음 가는 법 완전 가이드
          </a>
          <a href="/womens-clinic/menstrual-pain" style={{ display: 'block', color: '#E8305A', fontSize: 'clamp(12px,2.8vw,14px)', textDecoration: 'none' }}>
            → 생리통 참으면 안 되는 이유 5가지
          </a>
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '36px',
          background: 'linear-gradient(135deg, #FF8FAB 0%, #E8305A 100%)',
          borderRadius: '20px',
          padding: 'clamp(20px,5vw,32px) clamp(16px,5vw,28px)',
          textAlign: 'center',
        }}>
          <p style={{ color: '#fff', fontSize: 'clamp(16px,4vw,20px)', fontWeight: 900, marginBottom: '6px', wordBreak: 'keep-all' }}>
            사당역 연세365산부인과의원
          </p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(11px,2.5vw,13px)', marginBottom: '20px' }}>
            📍 사당역 4번출구 · 1:1 비밀보장
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            
              <a
              href="http://pf.kakao.com/_TpaBj/chat"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#FEE500',
                color: '#3B1B1B',
                padding: 'clamp(10px,2.5vw,13px) clamp(18px,5vw,26px)',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: 'clamp(12px,3vw,14px)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              💬 카카오톡 상담
            </a>
            
              <a 
              href="tel:02-585-3650"
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: '#fff',
                padding: 'clamp(10px,2.5vw,13px) clamp(18px,5vw,26px)',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: 'clamp(12px,3vw,14px)',
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.4)',
                whiteSpace: 'nowrap',
              }}
            >
              📞 02-585-3650
            </a>
          </div>
        </div>

      </div>
    </>
  )
}