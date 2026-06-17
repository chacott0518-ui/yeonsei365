'use client'
import { useState } from 'react'
import Link from 'next/link'
import { CATEGORIES } from '@/lib/healthHub'

const C = { p: '#D6336C', pd: '#993556', pp: '#5c0e20', pb: '#FFF5F7', pbd: '#f0d0dc', tm: '#1a1a1a', tg: '#888' }

export default function AskPage() {
  const [form, setForm] = useState({ category: 'pregnancy', question: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async () => {
    if (form.question.trim().length < 10) { alert('질문을 10자 이상 입력해주세요.'); return }
    setStatus('loading')
    try {
      const res = await fetch('/api/health-hub/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setStatus(res.ok ? 'success' : 'error')
    } catch { setStatus('error') }
  }

  if (status === 'success') return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <div style={{ fontSize: '56px', marginBottom: '20px' }}>✅</div>
      <h2 style={{ fontSize: '22px', fontWeight: 900, color: C.tm, marginBottom: '10px' }}>
        질문이 접수되었습니다
      </h2>
      <p style={{ fontSize: '14px', color: C.tg, lineHeight: 1.8, marginBottom: '24px' }}>
        전문의 검토 후 AI 답변이 자동으로 생성됩니다.<br />
        보통 <strong style={{ color: C.p }}>수분 이내</strong> 게시됩니다.
      </p>
      <Link href="/health-hub" style={{ display: 'inline-block', background: C.p, color: '#fff', fontSize: '14px', fontWeight: 700, padding: '12px 28px', borderRadius: '20px', textDecoration: 'none' }}>
        실시간 답변 확인하기 →
      </Link>
    </div>
  )

  return (
    <>
      <h1 style={{ fontSize: '24px', fontWeight: 900, color: C.tm, marginBottom: '8px' }}>질문 남기기</h1>
      <p style={{ fontSize: '14px', color: C.tg, marginBottom: '32px', lineHeight: 1.7 }}>산부인과 관련 질문을 남겨주시면 전문의가 검토 후 Q&A 페이지에 답변을 게시합니다.<br /><strong style={{ color: C.pd }}>긴급한 증상은 전화(02-585-3650)로 문의하세요.</strong></p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>카테고리 *</label>
          <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))} style={{ width: '100%', padding: '12px 14px', border: `0.5px solid ${C.pbd}`, borderRadius: '10px', fontSize: '14px', background: '#fff', color: C.tm, appearance: 'none', WebkitAppearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23D6336C' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', cursor: 'pointer' }}>
            {Object.entries(CATEGORIES).map(([key, cat]) => <option key={key} value={key}>{cat.icon} {cat.label}</option>)}
          </select>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: C.tm, marginBottom: '8px' }}>질문 내용 * <span style={{ fontWeight: 400, color: C.tg }}>(최소 10자)</span></label>
          <textarea value={form.question} onChange={e => setForm(p => ({ ...p, question: e.target.value }))} placeholder="산부인과 관련 궁금한 점을 자유롭게 작성해주세요." rows={6} style={{ width: '100%', padding: '12px 14px', border: `0.5px solid ${C.pbd}`, borderRadius: '10px', fontSize: '14px', resize: 'vertical', fontFamily: 'inherit', color: C.tm, boxSizing: 'border-box' as const }} />
          <div style={{ fontSize: '12px', color: form.question.length < 10 ? '#c0392b' : C.tg, marginTop: '4px', textAlign: 'right' }}>{form.question.length}자</div>
        </div>
        <div style={{ background: C.pb, border: `0.5px solid ${C.pbd}`, borderRadius: '10px', padding: '14px 16px', fontSize: '13px', color: C.pd, lineHeight: 1.8 }}>
          📌 게시 시 익명으로 처리됩니다.<br />
          📌 긴급한 증상은 반드시 전화(02-585-3650) 또는 직접 내원하세요.
        </div>
        <button onClick={handleSubmit} disabled={status === 'loading'} style={{ background: status === 'loading' ? '#ccc' : C.p, color: '#fff', fontSize: '16px', fontWeight: 700, padding: '14px', borderRadius: '12px', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
          {status === 'loading' ? '제출 중...' : '질문 제출하기'}
        </button>
        {status === 'error' && <div style={{ color: '#c0392b', fontSize: '14px', textAlign: 'center', padding: '12px', background: '#fff5f5', borderRadius: '10px' }}>오류가 발생했습니다. 전화(02-585-3650)로 문의해주세요.</div>}
      </div>
    </>
  )
}
