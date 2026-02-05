import React from 'react';

const Footer: React.FC = () => {
  return (
    /* FAQ 섹션과 동일한 'bg-surface'를 사용하여 색상을 완벽히 일치시킴 */
    /* 경계선(border)을 모두 제거하여 하나의 판처럼 보이게 수정 */
    <footer id="location" className="pt-16 pb-0 text-sm relative z-20 bg-surface">
      
      {/* 1. 메인 푸터 영역 (라인 없음) */}
      <div className="container mx-auto px-6 md:px-12 pb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* 왼쪽: 로고 및 정보 */}
          <div className="flex flex-col gap-6">
            <img 
              src="https://i.imgur.com/f7h5DY0.png" 
              alt="연세365 로고" 
              className="h-16 md:h-20 w-auto object-contain self-start" 
            />
            <div className="text-xs text-gray-600 leading-relaxed space-y-1">
              <p className="font-bold text-sm text-gray-800 mb-2">연세365산부인과의원</p>
              <p>서울시 관악구 과천대로 939, 3층</p>
              <p>대표 : 이진우 | 사업자등록번호 : 719-20-00835</p>
              <p>고객센터 : 02-547-2876 | 팩스 : 02-547-2872</p>
            </div>
          </div>

          {/* 오른쪽: SNS 아이콘 */}
          <div className="flex gap-4 lg:self-end">
            <a 
              href="#" 
              target="_blank" 
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-sm bg-white text-[#D14D72] hover:opacity-80 transition-all"
            >
              B
            </a>
            <a 
              href="#" 
              target="_blank" 
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm bg-white text-[#D14D72] hover:opacity-80 transition-all"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.707 4.8 4.315 6.124l-1.091 3.993 4.38-2.92c.451.077.917.118 1.396.118 4.97 0 9-3.185 9-7.115S16.97 3 12 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* 2. 하단 카피라이트 영역 (별도 배경색/라인 없이 bg-surface 유지) */}
      <div className="py-8 bg-surface">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p className="text-xs">
            &copy; 2026 YONSEI 365 OBGYN. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-xs">
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