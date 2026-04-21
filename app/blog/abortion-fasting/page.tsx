import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '임신중절수술 금식 | 수술 전 준비사항 완벽 안내 2026 | 연세365산부인과',
  description: '임신중절수술 금식 기준을 완벽하게 안내합니다. 6시간 금식 이유, 금식 안 했을 때 위험성, 당일 준비물 체크리스트, 수술 당일 타임라인까지. 사당역 4번출구 연세365산부인과.',
  keywords: [
    '임신중절수술금식', '임신중절수술 금식', '낙태수술금식', '임신중절금식',
    '중절수술금식', '낙태금식', '임신중절수술전준비', '낙태수술전준비',
    '임신중절수술준비물', '임신중절수술당일', '낙태수술당일준비',
    '임신중절수술몇시간금식', '낙태수술금식시간', '수면마취금식',
    '임신중절수술비용', '임신중절수술금액', '낙태비용', '사당역산부인과',
    '임신중절수술당일준비물', '임신중절수술당일주의사항', '낙태수술준비물',
    '임신중절수술전날', '낙태수술전날', '임신중절수술복장',
  ],
  openGraph: {
    title: '임신중절수술 금식 | 수술 전 준비사항 완벽 안내 2026 | 연세365산부인과',
    description: '임신중절수술 금식 기준·당일 준비사항 완벽 안내. 사당역 4번출구.',
    url: 'https://www.yeonsei365.com/blog/abortion-fasting',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 금식 연세365산부인과' }],
  },
  alternates: { canonical: 'https://www.yeonsei365.com/blog/abortion-fasting' },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 금식 | 수술 전 준비사항 완벽 안내 2026 | 연세365산부인과',
    description: '임신중절수술 금식 기준을 완벽하게 안내합니다. 6시간 금식 이유, 금식 안 했을 때 위험성, 당일 준비물 체크리스트, 수술 당일 타임라인까지. 사당역 4번출구 연세365산부인과.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '임신중절수술 전 금식은 몇 시간 해야 하나요?', acceptedAnswer: { '@type': 'Answer', text: '수면마취를 위해 시술 최소 6시간 전부터 물을 포함하여 아무것도 드시면 안 됩니다. 금식을 지키지 않으면 마취 시 기도로 음식물이 흡입될 위험이 있어 시술이 연기될 수 있습니다.' } },
    { '@type': 'Question', name: '금식 중 약은 먹어도 되나요?', acceptedAnswer: { '@type': 'Answer', text: '평소 복용 중인 약이 있다면 반드시 사전에 의료진에게 알려야 합니다. 혈압약 등 특정 약물은 소량의 물로 복용 가능할 수 있으나 반드시 의사 지시에 따르세요.' } },
    { '@type': 'Question', name: '수술 당일 무엇을 준비해야 하나요?', acceptedAnswer: { '@type': 'Answer', text: '신분증, 편안한 복장, 안경(렌즈 대신), 생리대, 처방약 수령을 위한 약국 방문 준비가 필요합니다. 수술 후 운전이 불가하므로 대중교통 또는 동행인 준비도 필수입니다.' } },
    { '@type': 'Question', name: '금식을 지키지 않았을 때 어떻게 되나요?', acceptedAnswer: { '@type': 'Answer', text: '금식을 지키지 않으면 수술이 당일 연기됩니다. 마취 중 위 내용물이 역류하여 기도로 흡입될 경우 흡인성 폐렴 등 심각한 합병증이 발생할 수 있습니다. 반드시 의료진에게 정직하게 알려주세요.' } },
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

export default function AbortionFastingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)', borderBottom: `2px solid ${C.bd}`, padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none' }}><img src="https://i.imgur.com/f7h5DY0.png" alt="연세365 로고" style={{ height: '32px', width: 'auto' }} /></a>
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
          <img src="/og-image.jpg" alt="임신중절수술 금식 수술전준비 당일준비물 연세365산부인과" width="780" height="410" style={{ width: '100%', borderRadius: '18px', display: 'block' }} />
        </div>

        <div style={{ background: `linear-gradient(160deg, ${C.pp} 0%, ${C.pd} 40%, ${C.p} 100%)`, borderRadius: '20px', padding: 'clamp(24px,5vw,40px) clamp(20px,5vw,36px)', margin: '20px 0 28px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {['금식안내', '수술전준비', '당일준비물', '타임라인'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '180px' }}>
              <h1 style={{ color: '#fff', fontSize: 'clamp(20px,4vw,26px)', fontWeight: 900, lineHeight: 1.45, margin: '0 0 12px' }}>임신중절수술 금식<br />수술 전 준비사항 완벽 안내</h1>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(12px,3vw,14px)', lineHeight: 1.8, margin: '0 0 16px' }}>금식 기준, 금식 이유, 금식 안 지켰을 때 위험성, 당일 준비물, 수술 당일 타임라인까지 전문의가 투명하게 안내합니다.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {['당일예약 가능', '당일시술 가능', '1인 회복실', '비밀보장'].map(b => (
                  <span key={b} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: '11px', padding: '4px 12px', borderRadius: '20px' }}>{b}</span>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '16px', padding: '18px 22px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', marginBottom: '4px' }}>금식 기준</div>
              <div style={{ color: '#FFD700', fontSize: 'clamp(36px,8vw,48px)', fontWeight: 900, lineHeight: 1 }}>6시간</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', marginTop: '4px' }}>물 포함 완전 금식</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px', fontSize: '12px', color: C.tm2 }}>
          <Link href="/" style={{ color: C.tm2, textDecoration: 'none' }}>홈</Link>{' > '}
          <Link href="/blog" style={{ color: C.tm2, textDecoration: 'none' }}>임신중절수술정보</Link>{' > '}
          <span style={{ color: C.p }}>임신중절수술 금식</span>
        </div>

        <div style={{ background: '#FFF8FA', border: `1px solid ${C.bd}`, borderRadius: '16px', padding: '20px 24px', marginBottom: '36px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: C.p, marginBottom: '14px' }}>📋 목차</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px' }}>
            {[['1','임신중절수술 금식이란?'],['2','금식이 필요한 이유'],['3','금식 기준 상세 안내'],['4','금식 안 지켰을 때 위험성'],['5','금식 중 약 복용 가능 여부'],['6','수술 당일 전체 준비물'],['7','수술 당일 타임라인'],['8','자주 묻는 질문']].map(([n,t]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: C.p }}>
                <span style={{ background: C.pb, color: C.pt, fontSize: '10px', fontWeight: 700, width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span>{t}
              </div>
            ))}
          </div>
        </div>

        <section style={{ marginBottom: '36px' }}>
          <SH n="1" title="임신중절수술 금식이란?" />
          <p style={bt}>임신중절수술 금식이란 수면마취를 안전하게 시행하기 위해 수술 전 일정 시간 동안 음식과 음료 섭취를 중단하는 것입니다. 연세365산부인과의 임신중절수술은 수면마취(정맥 마취)로 진행되므로, 금식은 반드시 지켜야 하는 가장 중요한 수술 전 준비사항입니다.</p>
          <p style={bt}>금식을 지키지 않으면 마취 중 위장 내 내용물이 역류하여 기도로 흡입될 수 있으며, 이는 흡인성 폐렴 등 심각한 합병증을 유발할 수 있습니다. 이 경우 수술이 즉시 중단되거나 연기될 수 있습니다. 따라서 금식은 환자 안전을 위한 가장 기본적인 규칙입니다.</p>
          <p style={bt}>금식 지침은 단순히 병원의 규칙이 아니라 마취과학적 근거에 기반한 안전 기준입니다. 전 세계 모든 의료기관에서 수면마취 전 금식을 요구하며, 이를 지키지 않으면 수술 자체가 불가능합니다.</p>
          <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '16px', padding: '24px', textAlign: 'center', margin: '20px 0' }}>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', marginBottom: '8px' }}>임신중절수술 금식 핵심 기준</div>
            <div style={{ color: '#FFD700', fontSize: 'clamp(36px,8vw,52px)', fontWeight: 900, lineHeight: 1 }}>6시간</div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', marginTop: '8px' }}>수술 전 최소 6시간 — 물 포함 아무것도 금지</div>
          </div>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="2" title="금식이 필요한 이유" />
          <p style={bt}>수면마취(전신마취)를 시행하면 기도 보호 반사가 억제됩니다. 평소에는 위 내용물이 역류하더라도 기침이나 삼키기 반사가 자동으로 기도를 보호하지만, 마취 상태에서는 이 반사가 작동하지 않습니다.</p>
          <p style={bt}>따라서 위에 음식물이 남아있는 상태에서 마취를 시행하면, 위 내용물이 역류하여 폐로 흡입될 위험이 있습니다. 이를 흡인(Aspiration)이라고 하며, 흡인성 폐렴으로 이어질 경우 생명에 위협이 될 수 있는 심각한 합병증입니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '16px' }}>
            {[
              { t: '기도 보호 반사 억제', d: '수면마취 상태에서는 삼키기·기침 반사가 작동하지 않아 역류 시 기도 흡입 위험이 있습니다.' },
              { t: '흡인성 폐렴 위험', d: '위 내용물이 폐로 흡입되면 흡인성 폐렴이 발생할 수 있으며 치료가 복잡해집니다.' },
              { t: '수술 안전 확보', d: '금식을 통해 위를 비워 마취 합병증 위험을 최소화하고 안전한 수술 환경을 확보합니다.' },
              { t: '마취 회복 최적화', d: '공복 상태에서 마취 유도 효율이 높아지고 마취 후 회복도 더 빠르고 깨끗합니다.' },
            ].map(c => (
              <div key={c.t} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C.p, marginBottom: '8px' }}>✓ {c.t}</div>
                <div style={{ fontSize: '13px', color: C.ts, lineHeight: 1.7 }}>{c.d}</div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="3" title="금식 기준 상세 안내" />
          <p style={bt}>임신중절수술 금식 기준은 음식의 종류에 따라 다소 다를 수 있습니다. 아래 기준을 반드시 확인하고 지켜주세요. 가장 안전한 방법은 수술 예약 시간 6시간 전부터 물을 포함한 모든 음식과 음료를 완전히 끊는 것입니다.</p>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div style={{ border: `1px solid ${C.bd}`, borderRadius: '12px', overflow: 'hidden', minWidth: '360px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: '#F8E8EF' }}>
                    {['종류', '금식 기준', '허용 여부', '비고'].map(h => (
                      <th key={h} style={{ padding: '12px 14px', color: C.pd, fontWeight: 700, textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['물', '수술 6시간 전부터 금지', '❌ 금지', '소량도 금지'],
                    ['음료 (주스·커피·우유)', '수술 6시간 전부터 금지', '❌ 금지', '모든 음료 금지'],
                    ['가벼운 식사 (죽)', '수술 6시간 전까지 가능', '✅ 가능', '6시간 이전에만'],
                    ['일반 식사', '수술 6시간 전까지 가능', '✅ 가능', '6시간 이전에만'],
                    ['껌·사탕·젤리', '수술 6시간 전부터 금지', '❌ 금지', '삼킬 수 있어 금지'],
                    ['담배', '수술 전날부터 금지 권장', '⚠️ 자제', '호흡기·마취에 영향'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: `1px solid ${C.bd}`, background: i % 2 === 0 ? '#FFFAFB' : '#fff' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600, color: C.tm }}>{row[0]}</td>
                      <td style={{ padding: '10px 14px', color: C.ts, fontSize: '13px' }}>{row[1]}</td>
                      <td style={{ padding: '10px 14px', color: row[2].includes('❌') ? '#C62828' : row[2].includes('✅') ? '#27ae60' : '#E29000', fontWeight: 700 }}>{row[2]}</td>
                      <td style={{ padding: '10px 14px', color: C.ts, fontSize: '13px' }}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <IBox><strong>실제 예시:</strong> 오전 10시 수술이라면 오전 4시 이전에 식사를 마쳐야 합니다. 오후 2시 수술이라면 오전 8시 이전에 식사를 마쳐야 합니다. 헷갈린다면 전날 자정 이후 아무것도 드시지 않는 것이 가장 안전합니다.</IBox>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="4" title="금식을 지키지 않았을 때 위험성" />
          <p style={bt}>금식 지침을 지키지 않은 경우 다음과 같은 문제가 발생할 수 있습니다. 환자의 안전을 위해 금식 여부는 반드시 의료진에게 정직하게 알려야 합니다. 숨기는 것이 오히려 더 큰 위험을 초래합니다.</p>
          <DangerBox>
            <strong>⚠ 금식 미준수 시 발생 가능한 문제:</strong><br /><br />
            · <strong>수술 연기 또는 취소:</strong> 금식을 지키지 않은 경우 수술 당일 시술이 불가하여 다른 날로 연기됩니다<br />
            · <strong>흡인성 폐렴 위험:</strong> 마취 중 위 내용물이 폐로 흡입되어 심각한 폐렴이 발생할 수 있습니다<br />
            · <strong>마취 합병증:</strong> 역류된 위산이 기도와 폐를 손상시켜 응급 처치가 필요할 수 있습니다<br />
            · <strong>수술 중 각성:</strong> 음식물 역류로 인해 마취 중 각성이 발생할 위험이 증가합니다<br />
            · <strong>회복 지연:</strong> 마취 후 구역질과 구토가 심해져 회복실 체류 시간이 길어집니다
          </DangerBox>
          <p style={bt}>금식을 지키지 못했거나 실수로 음식을 먹은 경우에는 절대 숨기지 말고 내원 시 의료진에게 즉시 알려주세요. 먹은 시간과 음식 종류를 알려주시면 의료진이 안전하게 판단합니다. 수술이 연기되더라도 이는 환자의 안전을 위한 올바른 결정입니다.</p>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="5" title="금식 중 약 복용 가능 여부" />
          <p style={bt}>평소 복용 중인 약물이 있는 경우 수술 전 반드시 의료진에게 알려야 합니다. 약물에 따라 수술 당일 복용 여부와 방법이 달라지기 때문입니다. 약을 숨기면 마취 및 수술 중 예상치 못한 상호작용이 발생할 수 있습니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '16px' }}>
            {[
              { t: '혈압약', d: '수술 당일 아침 소량의 물(30ml 이내)과 함께 복용 가능합니다. 반드시 사전에 의사에게 알려주세요.', c: '#27ae60' },
              { t: '당뇨약·인슐린', d: '수술 당일 복용 여부를 반드시 사전에 의사와 상의해야 합니다. 저혈당 위험이 있어 용량 조정이 필요합니다.', c: '#E29000' },
              { t: '혈액 희석제·아스피린', d: '수술 출혈을 증가시킵니다. 수술 3~5일 전부터 중단이 필요할 수 있으니 반드시 사전 상담이 필요합니다.', c: '#C62828' },
              { t: '일반 진통제·감기약', d: '수술 당일에는 복용을 중단하세요. 특히 아스피린 계열 진통제는 출혈 시간을 연장시킬 수 있습니다.', c: '#E29000' },
            ].map(c => (
              <div key={c.t} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px', borderTop: `3px solid ${c.c}` }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: c.c, marginBottom: '8px' }}>{c.t}</div>
                <div style={{ fontSize: '13px', color: C.ts, lineHeight: 1.7 }}>{c.d}</div>
              </div>
            ))}
          </div>
          <WBox>⚠ 평소 복용 중인 약이 있다면 예약 시 또는 내원 전 반드시 알려주세요. 약물 정보를 숨기면 마취 및 수술 중 예상치 못한 위험이 발생할 수 있습니다.</WBox>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="6" title="수술 당일 전체 준비물" />
          <p style={bt}>수술 당일 내원 시 아래 준비물을 챙겨오시면 수술이 더욱 원활하게 진행됩니다. 빠진 항목이 없도록 전날 미리 확인하고 준비해두세요.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
            {[
              { icon: '🪪', t: '신분증 (필수)', d: '주민등록증 또는 여권. 본인 확인을 위해 반드시 필요합니다. 없으면 수술 불가합니다.' },
              { icon: '👗', t: '편안한 복장', d: '타이트하거나 조이는 옷은 피하고 느슨하고 편안한 복장으로 오세요.' },
              { icon: '👓', t: '안경 착용', d: '렌즈는 마취 중 안압 상승으로 위험합니다. 반드시 안경으로 오세요.' },
              { icon: '🩹', t: '생리대', d: '수술 후 출혈이 있을 수 있으므로 두꺼운 생리대를 착용하고 여분도 준비하세요.' },
              { icon: '🚌', t: '대중교통 준비', d: '수술 후 운전 절대 금지. 대중교통 또는 동행인과의 귀가를 미리 준비하세요.' },
              { icon: '💊', t: '복용약 목록', d: '평소 복용 중인 약이 있다면 약 이름이나 약물 목록을 가져오거나 미리 알려주세요.' },
            ].map(c => (
              <div key={c.t} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{c.icon}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '6px' }}>{c.t}</div>
                <div style={{ fontSize: '12px', color: C.ts, lineHeight: 1.6 }}>{c.d}</div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="7" title="수술 당일 타임라인" />
          <p style={bt}>수술 당일 어떻게 진행되는지 미리 알아두시면 마음의 준비를 하는 데 도움이 됩니다. 전체 내원 시간은 약 2~3시간 내외입니다. 수술 자체는 10~30분이지만 검사·상담·회복 시간이 포함됩니다.</p>
          <div style={{ position: 'relative', paddingLeft: '32px' }}>
            <div style={{ position: 'absolute', left: '12px', top: 0, bottom: 0, width: '2px', background: `linear-gradient(180deg, ${C.p}, ${C.pd})`, borderRadius: '2px' }} />
            {[
              { time: '수술 6시간 전', title: '금식 시작', desc: '물 포함 모든 음식·음료 섭취 중단. 예) 오전 10시 수술 → 오전 4시부터 금식.' },
              { time: '내원 후 접수', title: '신분증 확인 및 동의서 작성', desc: '신분증 지참 필수. 수술 동의서 작성. 1:1 프라이빗 상담실에서 진행됩니다.' },
              { time: '검사', title: '초음파·혈액 검사', desc: '초음파로 정확한 임신 주수 확인. 혈액형·혈액검사. 약 15~20분 소요됩니다.' },
              { time: '상담', title: '전문의 최종 상담', desc: '시술 방법·비용 최종 안내. 궁금한 사항 질문 가능. 모든 내용은 비밀 보장됩니다.' },
              { time: '수술 준비', title: '수면마취 준비', desc: '정맥 라인 확보 후 수면마취 약물 투여. 서서히 잠들게 됩니다.' },
              { time: '수술', title: '임신중절수술 시행', desc: '10~30분 내외 (주수에 따라 상이). 시술 중 통증·기억 없음.' },
              { time: '수술 후', title: '1인 회복실 안정', desc: '프라이빗 1인 회복실에서 1~2시간 안정. 혈압·출혈량·통증 확인.' },
              { time: '퇴원', title: '처방약 안내 후 귀가', desc: '처방약·주의사항 상세 안내 후 당일 퇴원. 대중교통 또는 동행인과 귀가.' },
            ].map((s, i, arr) => (
              <div key={s.time}>
                <div style={{ display: 'flex', gap: '14px', marginBottom: '4px' }}>
                  <div style={{ position: 'absolute', left: '7px', width: '12px', height: '12px', borderRadius: '50%', background: C.p, border: '2px solid white', marginTop: '4px' }} />
                  <div style={{ flex: 1, background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '12px', padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                      <span style={{ background: C.pb, color: C.p, fontSize: '11px', fontWeight: 700, padding: '2px 10px', borderRadius: '20px' }}>{s.time}</span>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: C.tm }}>{s.title}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: C.ts, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
                {i < arr.length - 1 && <div style={{ width: '1px', height: '12px', background: C.bd, marginLeft: '16px', marginBottom: '4px' }} />}
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section style={{ marginBottom: '36px' }}>
          <SH n="8" title="자주 묻는 질문" />
          {[
            { q: '임신중절수술 전 금식은 몇 시간 해야 하나요?', a: '수면마취를 위해 시술 최소 6시간 전부터 물을 포함하여 아무것도 드시면 안 됩니다. 금식을 지키지 않으면 마취 시 위 내용물이 기도로 흡입될 위험이 있어 수술이 연기될 수 있습니다.' },
            { q: '금식 중 물도 마시면 안 되나요?', a: '네, 수술 6시간 전부터는 물도 마시면 안 됩니다. 소량의 물이라도 위를 자극하여 마취 중 역류 위험을 높일 수 있습니다. 헷갈리신다면 전날 자정 이후 아무것도 드시지 않는 것이 가장 안전합니다.' },
            { q: '실수로 음식을 먹었는데 어떻게 하나요?', a: '절대 숨기지 말고 내원 시 즉시 의료진에게 알려주세요. 먹은 시간과 음식 종류를 알려주시면 의료진이 안전하게 판단합니다. 수술이 연기될 수 있지만 이는 안전을 위한 올바른 결정입니다.' },
            { q: '혈압약을 매일 복용 중인데 수술 당일에도 먹어야 하나요?', a: '혈압약은 보통 소량의 물(30ml 이내)과 함께 복용 가능하나, 반드시 사전에 의료진에게 알려 지시에 따르세요. 혈압을 조절하지 않으면 수술 중 위험할 수 있습니다.' },
            { q: '수술 당일 화장을 해도 되나요?', a: '화장은 피하는 것이 좋습니다. 특히 손발톱 매니큐어는 혈중 산소 포화도 측정을 방해할 수 있으므로 지워오세요. 렌즈 착용도 금지이므로 반드시 안경을 착용하고 오시기 바랍니다.' },
            { q: '수술 전날 술을 마셨는데 괜찮나요?', a: '음주는 마취 효과와 출혈에 영향을 줄 수 있습니다. 수술 전날 음주 사실을 반드시 의료진에게 알려주세요. 음주량에 따라 수술 가능 여부를 판단합니다. 수술 전 최소 24시간 전부터는 음주를 삼가세요.' },
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
              { href: '/blog/abortion-after', label: '임신중절수술 후 관리' },
              { href: '/blog/abortion-cost', label: '임신중절수술 비용' },
              { href: '/blog/abortion-legal', label: '낙태합법화 안내' },
              { href: '/blog', label: '전체 수술정보 보기' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', background: C.pb, border: `1px solid ${C.bd}`, borderRadius: '10px', padding: '12px 16px', textDecoration: 'none', fontSize: '13px', color: C.p, fontWeight: 700 }}>→ {l.label}</Link>
            ))}
          </div>
        </div>

        <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: 'clamp(24px,5vw,36px)', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: 'clamp(18px,4vw,22px)', fontWeight: 900, marginBottom: '8px' }}>연세365산부인과</div>
          <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '6px' }}>사당역 4번출구 도보 2분</div>
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