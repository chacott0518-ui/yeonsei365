import type { Metadata } from 'next'
import Link from 'next/link'
import { clinicSchema } from '@/lib/schemas'
import ViewCounter from '@/components/ViewCounter'

const PAGE_URL = 'https://www.yeonsei365.com/blog/abortion-after'
const PAGE_DATE = '2026-04-10'

const medicalWebPageSchema = {
  '@context': 'https://schema.org', '@type': 'MedicalWebPage',
  name: '임신중절수술 후 관리 | 회복 방법·주의사항 완벽 안내 2026',
  url: PAGE_URL,
  specialty: { '@type': 'MedicalSpecialty', name: '산부인과' },
  medicalAudience: { '@type': 'MedicalAudience', audienceType: '여성 환자' },
  about: { '@type': 'MedicalCondition', name: '임신중절수술 후 관리' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: '임신중절수술 후 관리 방법',
  description: '임신중절수술 후 안전하게 회복하는 단계별 안내',
  step: [
    { '@type': 'HowToStep', position: 1, name: '당일 안정', text: '수술 당일 무리한 활동을 피하고 충분히 안정을 취합니다.' },
    { '@type': 'HowToStep', position: 2, name: '처방약 복용', text: '처방받은 항생제와 지혈제를 빠짐없이 복용합니다.' },
    { '@type': 'HowToStep', position: 3, name: '이상 증상 확인', text: '고열, 심한 복통, 과다출혈 시 즉시 내원합니다.' },
    { '@type': 'HowToStep', position: 4, name: '정기 검진', text: '2주 후 추적 초음파 검사를 받아 회복 상태를 확인합니다.' },
  ],
  tool: { '@type': 'HowToTool', name: '연세365산부인과의원' },
}
const speakableSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: '임신중절수술 후 관리 | 회복 방법·주의사항 완벽 안내 2026',
  url: PAGE_URL,
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
}
const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.yeonsei365.com' },
    { '@type': 'ListItem', position: 2, name: '임신중절수술정보', item: 'https://www.yeonsei365.com/blog' },
    { '@type': 'ListItem', position: 3, name: '임신중절수술 후 관리', item: PAGE_URL },
  ],
}

export const metadata: Metadata = {
  title: '임신중절수술 후 관리 | 회복 방법·주의사항 완벽 안내 2026 | 연세365산부인과',
  description: '임신중절수술 후 관리 방법을 단계별로 안내합니다. 수술 당일·1주일·2~4주 단계별 주의사항, 즉시 내원 증상, 음식·운동·성관계 재개 시기까지. 사당역 4번 출구 연세365산부인과의원.',
  keywords: [
    '임신중절수술후관리', '임신중절수술 후 관리', '낙태수술후관리', '임신중절후관리',
    '중절수술후관리', '임신중절수술회복', '낙태후회복', '임신중절회복',
    '임신중절수술후주의사항', '낙태후주의사항', '임신중절후주의사항',
    '임신중절수술후음식', '임신중절후음식', '낙태후음식',
    '임신중절수술후운동', '임신중절수술후성관계', '임신중절수술후음주',
    '임신중절수술후출혈', '임신중절수술후통증', '임신중절수술후생리',
    '임신중절수술비용', '임신중절수술금액', '낙태비용', '사당역산부인과',
    '임신중절수술후일상복귀', '낙태후일상복귀', '중절수술후음주',
    '임신중절수술후샤워', '임신중절수술후목욕', '임신중절수술후사우나',
  ],
  openGraph: {
    title: '임신중절수술 후 관리 | 회복 방법 완벽 안내 2026 | 연세365산부인과',
    description: '임신중절수술 후 관리 단계별 완벽 안내. 사당역 4번 출구.',
    url: 'https://www.yeonsei365.com/blog/abortion-after',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 후 관리 연세365산부인과' }],
  },
  alternates: { canonical: 'https://www.yeonsei365.com/blog/abortion-after' },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 후 관리 | 회복 방법·주의사항 완벽 안내 2026 | 연세365산부인과',
    description: '임신중절수술 후 관리 방법을 단계별로 안내합니다. 수술 당일·1주일·2~4주 단계별 주의사항, 즉시 내원 증상, 음식·운동·성관계 재개 시기까지. 사당역 4번 출구 연세365산부인과의원.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '임신중절수술 후 관리 | 회복 방법·주의사항 완벽 안내 2026',
  description: '임신중절수술 후 관리 방법을 단계별로 안내합니다.',
  dateModified: '2026-05-22',
  author: { '@type': 'Organization', name: '연세365산부인과의원' },
  publisher: { '@type': 'Organization', name: '연세365산부인과의원' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '임신중절수술 후 관리에서 가장 중요한 것은?', acceptedAnswer: { '@type': 'Answer', text: '처방약 규칙적 복용, 충분한 휴식, 음주·흡연·성관계 금지가 가장 중요합니다. 38도 이상 고열, 과다 출혈, 악취 분비물 발생 시 즉시 내원하세요.' } },
    { '@type': 'Question', name: '임신중절수술 후 언제부터 일상 복귀가 가능한가요?', acceptedAnswer: { '@type': 'Answer', text: '사무직은 2~3일 후 가능합니다. 격렬한 운동이나 무거운 짐은 2주간 금지하며, 성관계는 출혈이 완전히 멈추고 2~4주 후 가능합니다.' } },
    { '@type': 'Question', name: '수술 후 출혈이 얼마나 지속되나요?', acceptedAnswer: { '@type': 'Answer', text: '개인차가 있으나 보통 7~14일간 소량의 출혈이 지속됩니다. 생리대를 1시간에 2개 이상 사용하는 과다 출혈이나 7일 이상 지속되는 출혈은 즉시 내원해야 합니다.' } },
    { '@type': 'Question', name: '임신중절수술 후 음주는 언제부터 가능한가요?', acceptedAnswer: { '@type': 'Answer', text: '최소 1주일간 음주를 삼가야 합니다. 알코올은 출혈을 증가시키고 항생제 효과를 저하시킵니다. 1주일 후에도 소량부터 시작하세요.' } },
    { '@type': 'Question', name: '임신중절수술 후 생리는 언제 시작되나요?', acceptedAnswer: { '@type': 'Answer', text: '보통 수술 후 4~6주 내에 첫 생리가 재개됩니다. 8주 이상 생리가 없다면 내원하여 확인하세요.' } },
  ],
}

const C = {
  p: '#CC2D5E', pd: '#8C1A4A', pp: '#4A0E2E',
  pb: '#FCE8EF', pt: '#B0456E', bd: '#FFE0E8',
  tm: '#1A0A10', ts: '#444455', tm2: '#888',
}

function SH({ n, title }: { n: string; title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
      <span style={{ background: C.p, color: '#fff', fontSize: '13px', fontWeight: 700, width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span>
      <h2 style={{ fontSize: '22px', fontWeight: 700, color: C.tm, margin: 0, lineHeight: 1.3 }}>{title}</h2>
    </div>
  )
}

function IBox({ children }: { children: React.ReactNode }) {
  return <div style={{ borderLeft: `4px solid ${C.p}`, background: C.pb, borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#7A2040', lineHeight: 1.85, margin: 0 }}>{children}</p></div>
}

function WBox({ children }: { children: React.ReactNode }) {
  return <div style={{ borderLeft: '4px solid #E29000', background: '#FEF5E0', borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#7A5500', lineHeight: 1.85, margin: 0 }}>{children}</p></div>
}

function DangerBox({ children }: { children: React.ReactNode }) {
  return <div style={{ borderLeft: '4px solid #C0392B', background: '#FFF0F0', borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#AA2222', lineHeight: 1.85, margin: 0 }}>{children}</p></div>
}

function Divider() {
  return <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '36px 0' }} />
}

const bt: React.CSSProperties = { fontSize: '15px', color: C.ts, lineHeight: 1.95, marginBottom: '14px' }

export default function AbortionAfterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)', borderBottom: `2px solid ${C.bd}`, padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" aria-label="홈으로" style={{ textDecoration: 'none' }}><img src="https://i.imgur.com/f7h5DY0.png" alt="연세365 로고" style={{ height: '32px', width: 'auto' }} /></a>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="/abortion/surgery" style={{ fontSize: '12px', color: '#555', textDecoration: 'none', fontWeight: 600, padding: '4px 8px' }}>임신중절수술</a>
          <a href="/blog" style={{ fontSize: '12px', color: '#555', textDecoration: 'none', fontWeight: 600, padding: '4px 8px' }}>수술정보</a>
          <a href="/" style={{ fontSize: '12px', color: '#888', textDecoration: 'none', padding: '4px 8px' }}>홈으로</a>
          <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>💬 카톡상담</a>
        </div>
      </header>
      <div style={{ height: '60px' }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 20px 100px', fontFamily: '"Pretendard", -apple-system, sans-serif' }}>
        <div style={{ margin: '28px 0 0' }}>
          <img src="/og-image.jpg" alt="임신중절수술 후 관리 회복 방법 주의사항 연세365산부인과의원 낙태후관리" width="780" height="410" style={{ width: '100%', borderRadius: '18px', display: 'block' }} />
        </div>

        <div style={{ background: `linear-gradient(160deg, ${C.pp} 0%, ${C.pd} 40%, ${C.p} 100%)`, borderRadius: '20px', padding: 'clamp(24px,5vw,40px) clamp(20px,5vw,36px)', margin: '20px 0 28px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {['후관리안내', '회복방법', '주의사항', '단계별안내'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '180px' }}>
              <h1 style={{ color: '#fff', fontSize: 'clamp(20px,4vw,26px)', fontWeight: 900, lineHeight: 1.45, margin: '0 0 12px' }}>임신중절수술 후 관리<br />단계별 완벽 안내</h1>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(12px,3vw,14px)', lineHeight: 1.8, margin: '0 0 16px' }}>수술 당일부터 4주까지 단계별 주의사항, 즉시 내원 증상, 음식·운동·성관계 재개 시기까지 전문의가 투명하게 안내합니다. · <ViewCounter slug="blog-abortion-after" /></p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {['당일예약 가능', '당일시술 가능', '1인 회복실', '비밀보장'].map(b => (
                  <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: '11px', padding: '4px 12px', borderRadius: '20px' }}>{b}</span>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '16px', padding: '18px 22px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', marginBottom: '4px' }}>8주 미만 기준</div>
              <div style={{ color: '#FFD700', fontSize: 'clamp(40px,8vw,52px)', fontWeight: 900, lineHeight: 1 }}>45</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', marginTop: '4px' }}>만원 (영양제 포함)</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px', fontSize: '12px', color: C.tm2 }}>
          <Link href="/" style={{ color: C.tm2, textDecoration: 'none' }}>홈</Link>{' > '}
          <Link href="/blog" style={{ color: C.tm2, textDecoration: 'none' }}>임신중절수술정보</Link>{' > '}
          <span style={{ color: C.p }}>임신중절수술 후 관리</span>
        </div>

        <div style={{ background: '#FFF8FA', border: `1px solid ${C.bd}`, borderRadius: '16px', padding: '20px 24px', marginBottom: '36px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: C.p, marginBottom: '14px' }}>📋 목차</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px' }}>
            {[['1','수술 직후 회복실에서'],['2','수술 당일 주의사항'],['3','수술 후 1주일 관리'],['4','수술 후 2~4주 관리'],['5','즉시 내원해야 하는 증상'],['6','음식·운동·성관계 재개'],['7','정상 회복 체크리스트'],['8','자주 묻는 질문']].map(([n,t]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: C.p }}>
                <span style={{ background: C.pb, color: C.pt, fontSize: '10px', fontWeight: 700, width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span>{t}
              </div>
            ))}
          </div>
        </div>

        <section style={{ marginBottom: '36px' }}>
          <SH n="1" title="수술 직후 회복실에서" />
          <p style={bt}>임신중절수술이 완료되면 1인 프라이빗 회복실로 이동하여 안정을 취합니다. 수면마취에서 깨어나는 데 보통 20~30분이 소요되며, 마취에서 완전히 깨어난 후 전문의 또는 간호사가 회복 상태를 확인합니다. 혈압, 출혈량, 복통 여부를 점검하고 이상이 없으면 처방약과 귀가 후 주의사항을 안내받고 퇴원합니다.</p>
          <p style={bt}>회복실에서는 1~2시간 동안 안정을 취합니다. 마취에서 깨어난 직후에는 어지러움이나 구역질이 느껴질 수 있으나 이는 정상적인 반응입니다. 충분히 안정을 취한 후 의료진의 확인을 받고 귀가하시기 바랍니다. 수면마취로 인해 당일 운전은 절대 불가합니다.</p>
          <p style={bt}>연세365산부인과의원은 1인 프라이빗 회복실을 운영하여 다른 환자와 분리된 공간에서 안정을 취하실 수 있습니다. 회복 과정에서 프라이버시가 완벽하게 보호됩니다.</p>
          <IBox>수면마취 후 완전히 의식이 회복되어도 판단력이 저하된 상태가 수 시간 지속될 수 있습니다. 당일은 반드시 대중교통 또는 동행인과 함께 귀가하시기 바랍니다. 당일 중요한 의사결정이나 업무는 피하세요.</IBox>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="2" title="수술 당일 주의사항" />
          <p style={bt}>수술 당일은 충분한 휴식이 가장 중요합니다. 귀가 후 몸의 회복에 집중하고, 처방받은 약물을 지시에 따라 규칙적으로 복용하세요. 소화에 부담을 주지 않는 가벼운 음식부터 시작하여 점차 일반식으로 돌아가시기 바랍니다. 수술 당일 하루만 충분히 쉬어도 다음날 훨씬 빠른 회복을 경험하실 수 있습니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '16px' }}>
            <div style={{ background: '#F0FFF4', border: '1px solid #C8E6C9', borderRadius: '14px', padding: '16px 18px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#2E7D32', marginBottom: '12px' }}>✅ 해도 되는 것</div>
              {['충분한 휴식·수면', '가벼운 식사 (죽·미음부터)', '처방약 규칙적 복용', '가벼운 샤워', '가벼운 보행', '따뜻한 보리차·물 (소량)'].map(i => (
                <div key={i} style={{ display: 'flex', gap: '8px', padding: '6px 0', borderBottom: '1px solid #C8E6C9', fontSize: '13px', color: C.ts }}>
                  <span style={{ color: '#27ae60', flexShrink: 0 }}>●</span>{i}
                </div>
              ))}
            </div>
            <div style={{ background: '#FFF0F0', border: '1px solid #FFCDD2', borderRadius: '14px', padding: '16px 18px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#C62828', marginBottom: '12px' }}>⛔ 하면 안 되는 것</div>
              {['운전 및 기계 조작 (절대 금지)', '음주·흡연', '격렬한 활동·운동', '탕목욕·사우나·수영', '성관계', '무거운 짐 들기'].map(i => (
                <div key={i} style={{ display: 'flex', gap: '8px', padding: '6px 0', borderBottom: '1px solid #FFCDD2', fontSize: '13px', color: C.ts }}>
                  <span style={{ color: '#C62828', flexShrink: 0 }}>●</span>{i}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="3" title="수술 후 1주일 관리" />
          <p style={bt}>수술 후 1주일은 자궁이 회복되는 가장 중요한 시기입니다. 이 기간 동안 자궁은 원래 크기로 수축하며 수술로 인한 내막이 회복됩니다. 적절한 관리를 통해 감염과 합병증을 예방하는 것이 핵심입니다. 처방받은 항생제와 자궁 수축제를 반드시 처방 기간 동안 복용 완료하세요.</p>
          <p style={bt}>처방받은 항생제는 중간에 임의로 중단하지 마시고 처방 기간 동안 반드시 복용을 완료하세요. 항생제를 도중에 중단하면 내성균이 생길 수 있으며 감염 예방 효과가 떨어집니다. 자궁 수축을 돕는 약물도 처방 지시에 따라 복용하시기 바랍니다.</p>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div style={{ border: `1px solid ${C.bd}`, borderRadius: '14px', overflow: 'hidden', minWidth: '360px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr style={{ background: '#F8E8EF' }}>
                    {['항목', '1주일 기준', '이유'].map(h => (
                      <th key={h} style={{ padding: '12px 14px', color: C.pd, fontWeight: 700, textAlign: 'left' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['음주', '금지', '출혈 증가·항생제 효과 저하'],
                    ['흡연', '금지', '혈액 순환 저하·회복 지연'],
                    ['성관계', '금지', '자궁 감염 위험'],
                    ['탕목욕', '금지 (샤워만 가능)', '세균 감염 예방'],
                    ['수영·사우나', '금지', '감염 및 과열 위험'],
                    ['무거운 짐 (5kg 이상)', '금지', '자궁 출혈 유발 가능'],
                    ['격렬한 운동', '금지', '복압 상승으로 출혈 위험'],
                    ['가벼운 산책', '가능', '혈액 순환 도움'],
                    ['일반 식사', '가능', '소화 잘 되는 것부터'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: `1px solid ${C.bd}`, background: i % 2 === 0 ? '#FFFAFB' : '#fff' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600, color: C.tm }}>{row[0]}</td>
                      <td style={{ padding: '10px 14px', color: row[1] === '가능' ? '#27ae60' : '#C62828', fontWeight: 600 }}>{row[1]}</td>
                      <td style={{ padding: '10px 14px', color: C.ts }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="4" title="수술 후 2~4주 관리" />
          <p style={bt}>수술 후 2주가 지나면 대부분의 경우 출혈이 멈추고 자궁이 정상적으로 회복됩니다. 그러나 완전한 회복을 위해 여전히 몇 가지 주의사항을 지켜야 합니다. 이 시기에 다음 생리까지 피임이 반드시 필요하며, 원치 않는 재임신을 방지하기 위해 피임 방법에 대해 전문의와 상담하시기 바랍니다.</p>
          <p style={bt}>수술 후 첫 생리는 보통 4~6주 내에 재개됩니다. 생리량이나 주기가 평소와 다소 달라질 수 있으나 보통 2~3회 생리 후 정상으로 돌아옵니다. 수술 후 8주 이상 생리가 없다면 내원하여 자궁 상태를 확인하시기 바랍니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {[
              { t: '피임 시작', d: '수술 후 첫 생리가 시작되기 전에도 임신이 가능합니다. 다음 생리까지 반드시 피임하세요. 피임 방법은 전문의와 상담하세요.', c: '#27ae60' },
              { t: '성관계 재개', d: '출혈이 완전히 멈추고 복통이 없어진 후 의사 확인 후 재개 가능합니다. 보통 2~4주 후이며 반드시 피임이 필요합니다.', c: '#E29000' },
              { t: '운동 재개', d: '가벼운 운동은 2주 후 가능합니다. 격렬한 운동이나 복근 운동은 4주 후부터 서서히 시작하세요.', c: '#3498DB' },
              { t: '정기 검진', d: '수술 1~2주 후 회복 상태 확인을 위한 재방문을 권장합니다. 이상이 없어도 확인 방문이 도움이 됩니다.', c: C.p },
            ].map(c => (
              <div key={c.t} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px', borderTop: `3px solid ${c.c}` }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: c.c, marginBottom: '8px' }}>{c.t}</div>
                <div style={{ fontSize: '13px', color: C.ts, lineHeight: 1.7 }}>{c.d}</div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="5" title="즉시 내원해야 하는 증상" />
          <p style={bt}>다음 증상이 나타나면 지체 없이 내원하시거나 병원에 연락하세요. 이러한 증상은 감염, 불완전 수술, 자궁 손상 등의 합병증 신호일 수 있습니다. 빠른 대처가 합병증을 예방하고 완전한 회복을 앞당깁니다.</p>
          <DangerBox>
            <strong>⚠ 즉시 내원이 필요한 증상:</strong><br /><br />
            · <strong>38도 이상 고열</strong>이 2시간 이상 지속되는 경우<br />
            · 생리대를 <strong>1시간에 2개 이상</strong> 사용할 정도의 과다 출혈<br />
            · <strong>7일 이상</strong> 지속되는 출혈<br />
            · 진통제로 조절되지 않는 <strong>심한 복통</strong> 또는 골반 통증<br />
            · <strong>악취</strong>가 나는 분비물이 나오는 경우<br />
            · 구역·구토·발열이 <strong>동시에</strong> 나타나는 경우<br />
            · 출혈이 완전히 멈춘 후 <strong>갑자기 다시 시작</strong>되는 경우
          </DangerBox>
          <p style={bt}>위 증상은 드물게 발생하지만 조기에 발견하고 치료하면 대부분 완전히 회복됩니다. 이상 증상이 있을 때 연락을 망설이지 마시고 병원에 즉시 문의하시기 바랍니다. 연세365산부인과의원은 수술 후 이상 증상 발생 시 신속하게 대응하는 시스템을 갖추고 있습니다.</p>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="6" title="음식·운동·성관계 재개 시기" />
          <p style={bt}>수술 후 언제부터 일상을 재개할 수 있는지 가장 많이 문의주시는 항목들입니다. 개인 회복 상태에 따라 차이가 있으므로 아래는 일반적인 기준이며, 컨디션이 좋지 않다면 더 보수적으로 접근하시기 바랍니다.</p>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div style={{ border: `1px solid ${C.bd}`, borderRadius: '12px', overflow: 'hidden', minWidth: '400px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: '#F8E8EF' }}>
                    {['항목', '재개 가능 시기', '주의사항'].map(h => (
                      <th key={h} style={{ padding: '12px 14px', color: C.pd, fontWeight: 700, textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['음식', '당일 (귀가 후)', '소화 잘 되는 음식부터 시작. 자극적인 음식·음주 1주일 금지'],
                    ['샤워', '다음날', '탕목욕은 출혈 멈춘 후 (약 2주 후)'],
                    ['가벼운 산책', '다음날', '무리하지 않는 선에서 가능'],
                    ['사무직 복귀', '2~3일 후', '컨디션에 따라 조정 가능'],
                    ['일반 운동', '2주 후', '격렬한 운동은 4주 후부터'],
                    ['성관계', '출혈 멈춘 후 2~4주', '반드시 피임 필요, 의사 확인 권장'],
                    ['수영·사우나', '출혈 멈춘 후', '최소 2주 이상 후 가능'],
                    ['음주', '1주일 후', '소량부터 시작 권장'],
                    ['흡연', '최대한 자제', '회복에 악영향, 금연 권장'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: `1px solid ${C.bd}`, background: i % 2 === 0 ? '#FFFAFB' : '#fff' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600, color: C.tm }}>{row[0]}</td>
                      <td style={{ padding: '10px 14px', color: C.p, fontWeight: 600 }}>{row[1]}</td>
                      <td style={{ padding: '10px 14px', color: C.ts, fontSize: '13px' }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="7" title="정상 회복 체크리스트" />
          <p style={bt}>아래 항목들은 정상적으로 회복되고 있는 경우 나타나는 증상과 상태입니다. 이 기준을 참고하여 본인의 회복 상태를 체크하세요. 아래 기준에서 크게 벗어나는 경우 즉시 내원하여 확인하세요.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            {[
              { period: '수술 당일~3일', items: ['소량의 출혈 또는 갈색 분비물', '약한 생리통 수준의 복통', '가벼운 피로감·졸음', '처방약 복용 후 호전'] },
              { period: '4일~1주일', items: ['출혈량 점차 감소', '복통 거의 없어짐', '일상 가벼운 활동 가능', '식욕 정상 회복'] },
              { period: '1~4주', items: ['출혈 완전 소실', '4~6주 내 첫 생리 시작', '전반적 컨디션 회복', '정상 일상 복귀 가능'] },
            ].map(c => (
              <div key={c.period} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', overflow: 'hidden' }}>
                <div style={{ background: C.pb, padding: '10px 16px', fontSize: '13px', fontWeight: 700, color: C.p }}>{c.period}</div>
                <div style={{ padding: '12px 16px' }}>
                  {c.items.map(item => (
                    <div key={item} style={{ display: 'flex', gap: '8px', padding: '5px 0', fontSize: '13px', color: C.ts }}>
                      <span style={{ color: '#27ae60', flexShrink: 0 }}>✓</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <WBox>⚠ 위 증상과 다르거나 이상이 느껴진다면 망설이지 말고 연락하세요. 빠른 대처가 합병증을 예방합니다. 연세365산부인과의원 02-585-3650으로 언제든지 문의 가능합니다.</WBox>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="8" title="자주 묻는 질문" />
          {[
            { q: '임신중절수술 후 관리에서 가장 중요한 것은 무엇인가요?', a: '처방약 규칙적 복용, 충분한 휴식, 음주·흡연·성관계 금지가 가장 중요합니다. 감염 예방을 위해 탕목욕·수영·사우나도 출혈이 완전히 멈출 때까지 삼가주세요. 이상 증상 발생 시 즉시 내원하는 것이 가장 중요합니다.' },
            { q: '수술 후 출혈이 얼마나 지속되나요?', a: '개인차가 있으나 보통 7~14일간 소량의 출혈이 지속됩니다. 생리대를 1시간에 2개 이상 사용하는 과다 출혈이나 7일 이상 지속되는 다량의 출혈은 즉시 내원이 필요합니다.' },
            { q: '수술 후 통증이 얼마나 심한가요?', a: '수술 후 생리통과 비슷한 수준의 복통이 1~3일간 있을 수 있습니다. 처방받은 진통제로 조절 가능한 수준이며, 극심한 통증이나 진통제로 조절되지 않는 통증은 즉시 내원하세요.' },
            { q: '수술 후 언제부터 운동이 가능한가요?', a: '가벼운 산책은 다음날부터 가능합니다. 격렬한 운동이나 무거운 짐 들기는 2주간 금지하며, 일반 운동은 2주 후 컨디션에 따라 서서히 재개하세요. 복근 운동은 4주 후부터 권장합니다.' },
            { q: '수술 후 언제부터 성관계가 가능한가요?', a: '출혈이 완전히 멈추고 복통이 없어진 후 의사 확인을 받은 뒤 재개하시기 바랍니다. 일반적으로 2~4주 후이며, 반드시 피임이 필요합니다. 수술 후 첫 생리 전에도 임신이 가능하므로 피임을 반드시 하세요.' },
            { q: '임신중절수술 후 생리는 언제 시작되나요?', a: '보통 수술 후 4~6주 내에 첫 생리가 재개됩니다. 처음 1~2번은 생리량이나 주기가 평소와 다를 수 있으나 이는 정상입니다. 8주 이상 생리가 없다면 내원하여 확인하세요.' },
          ].map((f, i) => (
            <div key={i} style={{ border: `1px solid ${C.bd}`, borderRadius: '14px', overflow: 'hidden', marginBottom: '10px', background: '#fff' }}>
              <div style={{ background: '#FFF8FA', padding: '14px 18px', fontSize: '14px', fontWeight: 700, color: C.tm, borderBottom: `1px solid ${C.bd}` }}>Q. {f.q}</div>
              <div style={{ padding: '14px 18px', fontSize: '14px', color: C.ts, lineHeight: 1.85 }}>{f.a}</div>
            </div>
          ))}
        </section>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: C.tm, marginBottom: '14px' }}>관련 정보 더 보기</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
            {[
              { href: '/abortion/surgery', label: '임신중절수술 금액·방법 안내' },
              { href: '/blog/abortion-period', label: '임신중절수술 기간' },
              { href: '/blog/abortion-fasting', label: '임신중절수술 금식 안내' },
              { href: '/blog/abortion-cost', label: '임신중절수술 비용' },
              { href: '/blog/abortion-legal', label: '낙태합법화 안내' },
              { href: '/blog', label: '전체 수술정보 보기' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', background: C.pb, border: `1px solid ${C.bd}`, borderRadius: '10px', padding: '12px 16px', textDecoration: 'none', fontSize: '13px', color: C.p, fontWeight: 700 }}>→ {l.label}</Link>
            ))}
          </div>
        </div>

        <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: 'clamp(24px,5vw,36px)', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: 'clamp(18px,4vw,22px)', fontWeight: 900, marginBottom: '8px' }}>연세365산부인과의원</div>
          <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '6px' }}>사당역 4번 출구 도보 3분</div>
          <div style={{ fontSize: '14px', opacity: 0.85, marginBottom: '24px', lineHeight: 1.8 }}>당일예약·당일시술·1인 회복실 운영<br />모든 상담은 철저히 비밀이 보장됩니다</div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
            <a href="tel:02-585-3650" style={{ background: 'transparent', color: '#fff', fontSize: '15px', border: '1px solid rgba(255,255,255,0.5)', padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
          </div>
        </div>
      </div>
    </>
  )
}