import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '임신중절수술 부작용 | 위험성·합병증 완벽 안내 2026 | 연세365산부인과',
  description: '임신중절수술 부작용과 합병증을 완벽하게 안내합니다. 출혈·감염·자궁손상 등 부작용 종류, 예방법, 즉시 내원 증상까지. 사당역 4번출구 연세365산부인과.',
  keywords: ['임신중절수술부작용','임신중절수술 부작용','낙태부작용','낙태수술부작용','임신중절후유증','낙태후유증','중절수술부작용','임신중절합병증','낙태합병증','임신중절수술위험','낙태수술위험','임신중절수술감염','임신중절수술출혈','임신중절수술자궁손상','사당역산부인과','임신중절수술비용','낙태비용'],
  openGraph: { title: '임신중절수술 부작용 | 연세365산부인과', description: '임신중절수술 부작용·합병증 완벽 안내. 사당역 4번출구.', url: 'https://www.yeonsei365.com/blog/abortion-side', images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: 'https://www.yeonsei365.com/blog/abortion-side' },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 부작용 | 위험성·합병증 완벽 안내 2026 | 연세365산부인과',
    description: '임신중절수술 부작용과 합병증을 완벽하게 안내합니다. 출혈·감염·자궁손상 등 부작용 종류, 예방법, 즉시 내원 증상까지. 사당역 4번출구 연세365산부인과.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '임신중절수술 부작용이 있나요?', acceptedAnswer: { '@type': 'Answer', text: '전문의가 안전하게 시행할 경우 부작용이 드뭅니다. 출혈·감염·자궁경부 손상·불완전 수술 등의 위험이 있으나 적절한 사후관리로 예방 가능합니다.' } },
    { '@type': 'Question', name: '임신중절수술 후 즉시 병원에 가야 하는 증상은?', acceptedAnswer: { '@type': 'Answer', text: '38도 이상 고열 지속, 과다출혈, 악취 분비물, 심한 복통이 지속되는 경우 즉시 내원하세요.' } },
    { '@type': 'Question', name: '임신중절수술 후 임신이 어려워지나요?', acceptedAnswer: { '@type': 'Answer', text: '전문의가 안전하게 시행한 경우 향후 임신에 영향이 거의 없습니다. 반복 시술은 자궁 내막에 영향을 줄 수 있으므로 피임 상담을 권장합니다.' } },
  ],
}

const C = { p: '#CC2D5E', pd: '#8C1A4A', pp: '#4A0E2E', pb: '#FCE8EF', pt: '#B0456E', bd: '#FFE0E8', tm: '#1A0A10', ts: '#444455', tm2: '#888' }
const bt: React.CSSProperties = { fontSize: '15px', color: C.ts, lineHeight: 1.95, marginBottom: '14px' }
function SH({ n, title }: { n: string; title: string }) { return <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}><span style={{ background: C.p, color: '#fff', fontSize: '13px', fontWeight: 700, width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</span><h2 style={{ fontSize: '22px', fontWeight: 700, color: C.tm, margin: 0, lineHeight: 1.3 }}>{title}</h2></div> }
function IBox({ children }: { children: React.ReactNode }) { return <div style={{ borderLeft: `4px solid ${C.p}`, background: C.pb, borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#7A2040', lineHeight: 1.85, margin: 0 }}>{children}</p></div> }
function WBox({ children }: { children: React.ReactNode }) { return <div style={{ borderLeft: '4px solid #E29000', background: '#FEF5E0', borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#7A5500', lineHeight: 1.85, margin: 0 }}>{children}</p></div> }
function DangerBox({ children }: { children: React.ReactNode }) { return <div style={{ borderLeft: '4px solid #C0392B', background: '#FFF0F0', borderRadius: '0 14px 14px 0', padding: '16px 20px', margin: '16px 0' }}><p style={{ fontSize: '14px', color: '#AA2222', lineHeight: 1.85, margin: 0 }}>{children}</p></div> }
function Divider() { return <hr style={{ border: 'none', borderTop: `1px solid ${C.bd}`, margin: '36px 0' }} /> }

export default function AbortionSidePage() {
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
        <div style={{ margin: '28px 0 0' }}><img src="/og-image.jpg" alt="임신중절수술 부작용 합병증 연세365산부인과" width="780" height="410" style={{ width: '100%', borderRadius: '18px', display: 'block' }} /></div>
        <div style={{ background: `linear-gradient(160deg, ${C.pp} 0%, ${C.pd} 40%, ${C.p} 100%)`, borderRadius: '20px', padding: 'clamp(24px,5vw,40px) clamp(20px,5vw,36px)', margin: '20px 0 28px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>{['부작용안내','합병증','예방법','즉시내원증상'].map(t => <span key={t} style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '11px', padding: '3px 12px', borderRadius: '20px' }}>{t}</span>)}</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '180px' }}>
              <h1 style={{ color: '#fff', fontSize: 'clamp(20px,4vw,26px)', fontWeight: 900, lineHeight: 1.45, margin: '0 0 12px' }}>임신중절수술 부작용<br />위험성·예방법 완벽 안내</h1>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(12px,3vw,14px)', lineHeight: 1.8, margin: 0 }}>부작용 종류, 위험도, 예방법, 즉시 내원 증상까지 전문의가 투명하게 안내합니다.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '16px', padding: '18px 22px', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', marginBottom: '4px' }}>8주 미만 기준</div>
              <div style={{ color: '#FFD700', fontSize: 'clamp(40px,8vw,52px)', fontWeight: 900, lineHeight: 1 }}>45</div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', marginTop: '4px' }}>만원 (영양제 포함)</div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '20px', fontSize: '12px', color: C.tm2 }}>
          <Link href="/" style={{ color: C.tm2, textDecoration: 'none' }}>홈</Link>{' > '}<Link href="/blog" style={{ color: C.tm2, textDecoration: 'none' }}>임신중절수술정보</Link>{' > '}<span style={{ color: C.p }}>임신중절수술 부작용</span>
        </div>
        <section style={{ marginBottom: '36px' }}>
          <SH n="1" title="임신중절수술 부작용이란?" />
          <p style={bt}>임신중절수술은 산부인과 전문의가 올바른 의료 환경에서 시행할 경우 안전한 시술입니다. 그러나 모든 수술과 마찬가지로 일정 수준의 부작용 가능성이 있으며, 이를 미리 알고 예방하는 것이 중요합니다. 부작용은 대부분 적절한 사후 관리와 처방약 복용으로 예방 가능합니다.</p>
          <p style={bt}>임신중절수술 부작용의 주요 원인은 비전문가에 의한 불법 시술, 비위생적인 환경에서의 시술, 수술 후 부적절한 관리입니다. 반드시 합법적인 의료기관에서 산부인과 전문의에게 시술받고 처방에 따라 관리하시면 부작용 위험을 크게 줄일 수 있습니다.</p>
          <IBox>연세365산부인과는 산부인과 전문의가 직접 시술하며, 멸균 처리된 수술 기구와 위생적인 환경에서 시술이 진행됩니다. 수술 전후 충분한 상담과 처방으로 부작용을 최소화합니다.</IBox>
        </section>
        <Divider />
        <section style={{ marginBottom: '36px' }}>
          <SH n="2" title="임신중절수술 부작용 종류" />
          <p style={bt}>임신중절수술 후 발생할 수 있는 부작용은 발생 시기와 종류에 따라 다릅니다. 아래 표를 통해 부작용 종류와 위험도, 예방법을 확인하세요.</p>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div style={{ border: `1px solid ${C.bd}`, borderRadius: '12px', overflow: 'hidden', minWidth: '380px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead><tr style={{ background: '#F8E8EF' }}>{['부작용 종류', '발생 시기', '위험도', '예방법'].map(h => <th key={h} style={{ padding: '12px 14px', color: C.pd, fontWeight: 700, textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['출혈', '수술 직후~2주', '낮음', '처방약 복용, 안정'],
                    ['감염', '수술 후 1~7일', '낮음', '항생제 복용, 위생 관리'],
                    ['자궁경부 손상', '수술 중', '매우 낮음', '전문의 시술'],
                    ['불완전 수술', '수술 직후', '낮음', '수술 후 초음파 확인'],
                    ['자궁 천공', '수술 중', '매우 드묾', '전문의 시술'],
                    ['자궁 유착', '수술 후 수주', '드묾', '자궁유착방지제 사용'],
                    ['마취 부작용', '수술 중~직후', '매우 낮음', '금식 준수, 전문 마취'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: `1px solid ${C.bd}`, background: i % 2 === 0 ? '#FFFAFB' : '#fff' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600, color: C.tm }}>{row[0]}</td>
                      <td style={{ padding: '10px 14px', color: C.ts, fontSize: '13px' }}>{row[1]}</td>
                      <td style={{ padding: '10px 14px', color: row[2] === '매우 낮음' || row[2] === '매우 드묾' || row[2] === '드묾' ? '#27ae60' : '#E29000', fontWeight: 600 }}>{row[2]}</td>
                      <td style={{ padding: '10px 14px', color: C.ts, fontSize: '13px' }}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Divider />
        <section style={{ marginBottom: '36px' }}>
          <SH n="3" title="즉시 내원해야 하는 증상" />
          <DangerBox>
            <strong>⚠ 즉시 내원이 필요한 증상:</strong><br /><br />
            · <strong>38도 이상 고열</strong>이 2시간 이상 지속되는 경우<br />
            · 생리대를 <strong>1시간에 2개 이상</strong> 사용하는 과다 출혈<br />
            · <strong>7일 이상</strong> 지속되는 출혈<br />
            · 진통제로 조절되지 않는 <strong>심한 복통</strong><br />
            · <strong>악취</strong>가 나는 분비물<br />
            · 출혈이 멈춘 후 <strong>갑자기 재출혈</strong>
          </DangerBox>
        </section>
        <Divider />
        <section style={{ marginBottom: '36px' }}>
          <SH n="4" title="부작용 예방법" />
          <p style={bt}>임신중절수술 부작용을 예방하는 가장 확실한 방법은 합법적인 의료기관에서 전문의에게 시술받고, 처방에 따라 약물을 복용하며, 사후 관리를 철저히 하는 것입니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
            {[
              { t: '전문의 직접 시술', d: '산부인과 전문의가 직접 시술하는지 확인하세요. 경험이 부족한 의사의 시술은 합병증 위험을 높입니다.' },
              { t: '항생제 완전 복용', d: '처방된 항생제는 임의로 중단하지 말고 처방 기간 동안 완전히 복용하세요.' },
              { t: '충분한 휴식', d: '수술 후 무리한 활동을 삼가고 충분한 휴식을 취하세요. 2주간 격렬한 운동 금지.' },
              { t: '자궁유착방지제', d: '자궁 내 유착을 예방하는 자궁유착방지제 시술을 선택하시면 향후 임신 가능성을 높일 수 있습니다.' },
            ].map(c => (
              <div key={c.t} style={{ background: '#fff', border: `1px solid ${C.bd}`, borderRadius: '14px', padding: '16px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.p, marginBottom: '8px' }}>✓ {c.t}</div>
                <div style={{ fontSize: '13px', color: C.ts, lineHeight: 1.7 }}>{c.d}</div>
              </div>
            ))}
          </div>
          <WBox>⚠ 인터넷에서 구매한 약물이나 불법 시술은 생명을 위협하는 심각한 부작용을 초래할 수 있습니다. 반드시 합법적인 의료기관을 이용하세요.</WBox>
        </section>
        <Divider />
        <section style={{ marginBottom: '36px' }}>
          <SH n="5" title="자주 묻는 질문" />
          {[
            { q: '임신중절수술 후 불임이 될 수 있나요?', a: '전문의가 안전하게 시행한 경우 불임으로 이어지는 경우는 매우 드뭅니다. 반복적인 임신중절수술은 자궁 내막에 영향을 줄 수 있으므로, 향후 임신 계획이 있다면 피임 방법에 대해 전문의와 상담하시기 바랍니다.' },
            { q: '임신중절수술 부작용으로 자궁이 손상될 수 있나요?', a: '자궁 손상은 경험 풍부한 전문의가 시술할 경우 매우 드뭅니다. 연세365산부인과는 산부인과 전문의가 직접 시술하며 최신 의료 장비를 갖추고 있어 자궁 손상 위험을 최소화합니다.' },
            { q: '임신중절수술 후 정서적 부작용도 있나요?', a: '일부 여성은 수술 후 슬픔, 죄책감, 우울감 등 정서적 어려움을 경험할 수 있습니다. 이는 정상적인 반응이며 개인차가 큽니다. 심리적 어려움이 지속된다면 전문 상담을 받으시기를 권장합니다.' },
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
            {[{href:'/abortion/surgery',label:'임신중절수술 금액·방법'},{href:'/blog/abortion-after',label:'임신중절수술 후 관리'},{href:'/blog/abortion-period',label:'임신중절수술 기간'},{href:'/blog/abortion-fasting',label:'임신중절수술 금식'},{href:'/blog/abortion-cost',label:'임신중절수술 비용'},{href:'/blog',label:'전체 수술정보 보기'}].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', background: C.pb, border: `1px solid ${C.bd}`, borderRadius: '10px', padding: '12px 16px', textDecoration: 'none', fontSize: '13px', color: C.p, fontWeight: 700 }}>→ {l.label}</Link>
            ))}
          </div>
        </div>
        <div style={{ background: `linear-gradient(135deg, ${C.pp}, ${C.p})`, borderRadius: '20px', padding: 'clamp(24px,5vw,36px)', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: 'clamp(18px,4vw,22px)', fontWeight: 900, marginBottom: '8px' }}>연세365산부인과</div>
          <div style={{ fontSize: '14px', opacity: 0.85, marginBottom: '24px', lineHeight: 1.8 }}>사당역 4번출구 도보 2분 · 당일예약·당일시술<br />모든 상담은 철저히 비밀이 보장됩니다</div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" style={{ background: '#FEE500', color: '#3B1B1B', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>💬 카카오톡 상담</a>
            <a href="tel:02-585-3650" style={{ background: 'transparent', color: '#fff', fontSize: '15px', border: '1px solid rgba(255,255,255,0.5)', padding: '14px 28px', borderRadius: '24px', textDecoration: 'none' }}>📞 02-585-3650</a>
          </div>
        </div>
      </div>
    </>
  )
}