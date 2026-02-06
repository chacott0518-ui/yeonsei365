import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-12 md:pt-16 pb-24 md:pb-0 text-sm relative z-20 bg-surface">
      
      {/* 메인 푸터 영역 */}
      <div className="container mx-auto px-5 md:px-12 pb-6 md:pb-16">
        <div className="flex flex-row justify-between items-start gap-4 lg:gap-12">
          
          {/* 좌측: 로고 및 정보 */}
          <div className="flex flex-col gap-2 md:gap-6">
            <img 
              src="https://i.imgur.com/f7h5DY0.png" 
              alt="연세365 로고" 
              className="h-10 md:h-20 w-auto object-contain self-start" 
            />
            <div className="text-[10px] md:text-xs text-gray-600 leading-relaxed space-y-0.5 md:space-y-1 text-left">
              <p className="font-bold text-sm text-gray-800 mb-2 hidden md:block">연세365산부인과의원</p>
              <p>서울시 관악구 과천대로 939, 3층</p>
              <p className="hidden md:block">대표 : 이진우 | 사업자등록번호 : 719-20-00835</p>
              <p className="md:hidden">대표 : 이진우</p>
              <p className="md:hidden">사업자번호 : 719-20-00835</p>
              <p>고객센터 : 02-547-2876</p>
            </div>
          </div>

          {/* 우측: SNS 아이콘 */}
          <div className="flex gap-3 md:gap-4 flex-shrink-0">
            <a 
              href="https://blog.naver.com/angelljk42" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold shadow-sm bg-white text-[#D14D72] hover:opacity-80 transition-all text-sm md:text-base"
            >
              B
            </a>
            <a 
              href="http://pf.kakao.com/_TpaBj/chat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-sm bg-white text-[#D14D72] hover:opacity-80 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor">
                <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.707 4.8 4.315 6.124l-1.091 3.993 4.38-2.92c.451.077.917.118 1.396.118 4.97 0 9-3.185 9-7.115S16.97 3 12 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* 하단 카피라이트 영역 */}
      <div className="py-5 md:py-8 bg-surface border-t border-primary/5">
        <div className="container mx-auto px-5 md:px-12 flex flex-row justify-between items-center gap-2 md:gap-4 text-gray-500">
          <p className="text-[9px] md:text-xs whitespace-nowrap">
            <span className="md:hidden">&copy; 2026 YONSEI 365</span>
            <span className="hidden md:inline">&copy; 2026 YONSEI 365 OBGYN. ALL RIGHTS RESERVED.</span>
          </p>
          <div className="flex gap-2 md:gap-6 text-[9px] md:text-xs whitespace-nowrap">
            <a href="#" className="hover:text-[#D14D72]">이용약관</a>
            <a href="#" className="hover:text-[#D14D72] font-bold">개인정보처리방침</a>
            <a href="#" className="hover:text-[#D14D72]">비급여진료비</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
