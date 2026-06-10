'use client'

const ConsultButton = () => (
  <button
    type="button"
    onClick={() => window.dispatchEvent(new Event('open-consult-modal'))}
    className="group relative inline-flex items-center justify-center whitespace-nowrap h-[40px] md:h-[56px] px-5 md:px-8 font-bold text-white text-xs md:text-lg transition-all duration-300 bg-white/25 hover:bg-white/35 backdrop-blur-sm border-2 border-white/60 rounded-full shadow-lg shadow-black/20 md:shadow-[#D1366F]/30"
  >
    <svg className="w-3.5 h-3.5 md:w-5 md:h-5 mr-1.5 md:mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
    </svg>
    <span className="md:hidden">간편 예약</span>
    <span className="hidden md:inline">간편 상담예약</span>
  </button>
)

export default ConsultButton
