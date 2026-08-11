import Image from 'next/image'
import ConsultButton from './ConsultButton'

const Hero = () => (
  <>
    {/* Fixed Background Container */}
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-background">

      {/* Full Image Background */}
      <div className="absolute inset-0" style={{ filter: 'brightness(0.9)' }}>
        <Image
          src="/hero.jpg"
          alt="연세365산부인과의원 배경"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: '54% center' }}
        />
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-primary/30 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />

      {/* Hero Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-5 md:px-6">
        <div className="space-y-4 md:space-y-8 -mt-14 md:-mt-6 hero-fade-in-up">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-8 md:w-12 bg-white"></div>
            <p className="text-white tracking-[0.2em] text-[10px] md:text-sm font-bold uppercase drop-shadow-md">
              WOMEN'S HEALTHCARE
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-white"></div>
          </div>

          <h1 className="text-[1.65rem] md:text-7xl font-bold text-white tracking-tighter leading-tight font-serif drop-shadow-lg">
            여성의 건강,<br/>
            <span className="text-white italic">
              아름다운 삶의 시작
            </span>
          </h1>

          <p className="text-white font-medium text-sm md:text-xl max-w-2xl mx-auto leading-relaxed md:leading-loose drop-shadow-md">
            세심한 배려와 따뜻한 진료로<br className="block"/>
            당신의 평생 주치의가 되겠습니다.
          </p>

          {/* 버튼 — 모바일: 간편예약만 / PC: 두 개 모두 */}
          <div className="mt-5 md:mt-10 inline-grid grid-cols-1 justify-items-center gap-3 md:gap-4 pointer-events-auto relative z-50 px-2 md:px-0">
            <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
              <a
                href="http://pf.kakao.com/_TpaBj/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex group relative items-center justify-center whitespace-nowrap h-[56px] px-8 font-bold text-white text-lg transition-all duration-300 bg-[#D1366F] hover:bg-[#AD2A5A] rounded-full shadow-lg shadow-[#D1366F]/30"
              >
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.707 4.8 4.315 6.124l-1.091 3.993 4.38-2.92c.451.077.917.118 1.396.118 4.97 0 9-3.185 9-7.115S16.97 3 12 3z"/>
                </svg>
                카카오톡 무료상담
              </a>
              <ConsultButton />
            </div>

            {/* 검색 섹션(#medical-search) 내부 이동 anchor — 새 페이지/모달 없음, JS 없이도 동작 */}
            <a
              href="#medical-search"
              className="group relative inline-flex h-[40px] w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full border-2 border-white/60 bg-white/25 px-5 text-[13px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/35 shadow-lg shadow-black/20 md:h-[56px] md:text-base md:shadow-[#D1366F]/30"
            >
              <svg className="h-3.5 w-3.5 flex-shrink-0 md:h-[18px] md:w-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              무엇이 궁금하신가요?
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Spacer to allow scrolling over the fixed hero */}
    <div className="h-screen w-full relative pointer-events-none" />
  </>
)

export default Hero
