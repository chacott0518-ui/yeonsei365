'use client'
import { useState } from 'react'
import { FAQS } from '../constants'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(6)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)
  const visible = FAQS.slice(0, visibleCount)
  const remaining = FAQS.length - visibleCount

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-white">

      <div className="container mx-auto px-5 md:px-10 max-w-5xl">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#fff0f4] text-[#D6336C] text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-[28px] md:text-[38px] font-black text-gray-900 mb-3 leading-tight">
            임신중절수술 자주 묻는 질문
          </h2>
          <p className="text-[14px] md:text-[16px] text-gray-500">
            낙태 비용 가격·합법 기간·수술 방법·후관리까지 — 연세365산부인과가 직접 답변합니다
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {['임신중절수술금액', '낙태비용가격', '낙태합법기간', '흡입술소파술', '임신중절수술후관리'].map(kw => (
              <span key={kw} className="bg-[#fff5f7] border border-[#f0d0dc] text-[#993556] text-[11px] px-3 py-1 rounded-full">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* PC: 2컬럼 그리드 */}
        <div className="hidden lg:grid grid-cols-2 gap-4 mb-6">
          {visible.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                openIndex === i
                  ? 'border-[#D6336C] shadow-sm'
                  : 'border-[#f0d0dc] hover:border-[#D6336C]/50'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between p-5 text-left bg-white"
              >
                <div className="flex gap-3 items-start flex-1 pr-2">
                  <span className={`text-[13px] font-black flex-shrink-0 mt-0.5 ${openIndex === i ? 'text-[#D6336C]' : 'text-gray-300'}`}>
                    Q.
                  </span>
                  <span className={`text-[13px] font-semibold leading-snug ${openIndex === i ? 'text-[#D6336C]' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                </div>
                {openIndex === i
                  ? <ChevronUp size={16} className="text-[#D6336C] flex-shrink-0 mt-0.5" />
                  : <ChevronDown size={16} className="text-gray-300 flex-shrink-0 mt-0.5" />}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 pt-0 bg-[#fff8fa] border-t border-dashed border-[#f0d0dc]">
                  <div className="flex gap-3 pt-3">
                    <span className="text-[13px] font-black text-[#D6336C]/50 flex-shrink-0">A.</span>
                    <p className="text-[13px] text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 모바일: 1컬럼 아코디언 */}
        <div className="lg:hidden space-y-3 mb-6">
          {visible.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden ${
                openIndex === i ? 'border-[#D6336C]' : 'border-[#f0d0dc]'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between p-4 text-left bg-white"
              >
                <div className="flex gap-2 items-start flex-1 pr-2">
                  <span className={`text-[12px] font-black flex-shrink-0 mt-0.5 ${openIndex === i ? 'text-[#D6336C]' : 'text-gray-300'}`}>
                    Q.
                  </span>
                  <span className={`text-[13px] font-semibold leading-snug ${openIndex === i ? 'text-[#D6336C]' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                </div>
                {openIndex === i
                  ? <ChevronUp size={15} className="text-[#D6336C] flex-shrink-0 mt-0.5" />
                  : <ChevronDown size={15} className="text-gray-300 flex-shrink-0 mt-0.5" />}
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 bg-[#fff8fa] border-t border-dashed border-[#f0d0dc]">
                  <div className="flex gap-2 pt-3">
                    <span className="text-[12px] font-black text-[#D6336C]/50 flex-shrink-0">A.</span>
                    <p className="text-[13px] text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 더보기 / 접기 버튼 */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          {remaining > 0 && (
            <>
              <button
                onClick={() => setVisibleCount(v => Math.min(v + 3, FAQS.length))}
                className="px-6 py-3 border border-[#f0d0dc] rounded-full text-[13px] font-bold text-[#D6336C] bg-white hover:bg-[#fff5f7] transition-colors flex items-center justify-center gap-1"
              >
                더보기 ({remaining}개 남음) <ChevronDown size={15} />
              </button>
              <button
                onClick={() => setVisibleCount(FAQS.length)}
                className="px-6 py-3 bg-[#D6336C] rounded-full text-[13px] font-bold text-white hover:bg-[#993556] transition-colors"
              >
                전체 {FAQS.length}개 보기
              </button>
            </>
          )}
          {remaining === 0 && visibleCount > 6 && (
            <button
              onClick={() => { setVisibleCount(6); setOpenIndex(null) }}
              className="px-6 py-3 bg-[#D6336C] rounded-full text-[13px] font-bold text-white flex items-center justify-center gap-1"
            >
              접기 <ChevronUp size={15} />
            </button>
          )}
        </div>

        {/* 전체 70가지 FAQ 링크 */}
        <div className="text-center">
          <Link
            href="/abortion/faq"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5c0e20] to-[#D6336C] text-white font-bold text-[14px] px-10 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            전체 70가지 FAQ 보기 →
          </Link>
          <p className="text-[11px] text-gray-400 mt-2">
            비용·방법·주수·준비·후관리·법적기준·병원예약 총 70가지
          </p>
        </div>
      </div>
    </section>
  )
}