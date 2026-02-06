import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOCTORS } from '../constants';
import { ChevronDown } from 'lucide-react';

const Doctors: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

  const toggleMobile = (idx: number) => {
    setMobileExpanded(mobileExpanded === idx ? null : idx);
  };

  return (
    <section id="doctors" className="relative py-20 md:py-32 bg-surface z-10">
      <div className="container mx-auto px-5 md:px-12">

        {/* 섹션 타이틀 */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-primary text-sm font-bold tracking-widest block mb-4 uppercase">
            Medical Director
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif">
            의료진 소개
          </h2>
        </div>

        {/* ===== 데스크탑 레이아웃 (기존 그대로) ===== */}
        <div className="hidden lg:grid grid-cols-12 gap-8 max-w-7xl mx-auto">

          {/* 왼쪽: 4등분 의료진 버튼 */}
          <div className="col-span-5 grid grid-rows-4 gap-3">
            {DOCTORS.map((doctor, index) => (
              <motion.button
                key={doctor.id}
                onClick={() => setSelectedDoctor(index)}
                className={`relative h-[168px] rounded-2xl group transition-all duration-300 focus:outline-none overflow-visible ${selectedDoctor === index
                    ? 'bg-[#D1366F] border-2 border-[#D1366F] shadow-xl'
                    : 'bg-white border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-full flex items-center justify-between px-8">
                  <div className="flex items-center gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${selectedDoctor === index
                        ? 'bg-white/20 text-white'
                        : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                      }`}>
                      {index + 1}
                    </div>
                    <div className="text-left">
                      <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${selectedDoctor === index
                          ? 'text-white'
                          : 'text-gray-800 group-hover:text-primary'
                        }`}>
                        {doctor.name}
                      </h3>
                      <p className={`text-base font-medium transition-colors duration-300 ${selectedDoctor === index
                          ? 'text-white/90'
                          : 'text-gray-500 group-hover:text-primary/80'
                        }`}>
                        {doctor.title}
                      </p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 transition-all duration-300 ${selectedDoctor === index
                        ? 'text-white translate-x-1'
                        : 'text-primary/40 group-hover:text-primary group-hover:translate-x-1'
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>

          {/* 우측: 선택된 의료진 약력 */}
          <div className="col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDoctor}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-2xl p-10 shadow-xl border border-primary/10 h-[703px] flex flex-col"
              >
                <div className="mb-6 flex-shrink-0">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest mb-4">
                    {DOCTORS[selectedDoctor].role}
                  </span>
                  <h2 className="text-4xl font-bold text-gray-800 mb-2 font-serif">
                    {DOCTORS[selectedDoctor].name}{' '}
                    <span className="text-2xl font-normal text-gray-500">
                      {DOCTORS[selectedDoctor].title}
                    </span>
                  </h2>
                  <p className="text-lg text-primary font-medium">
                    {DOCTORS[selectedDoctor].specialty}
                  </p>
                </div>

                <div className="relative pl-6 border-l-4 border-primary/20 py-3 mb-6 flex-shrink-0 h-32 flex items-center">
                  <p className="text-base text-gray-600 leading-relaxed italic">
                    "{DOCTORS[selectedDoctor].greeting.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}"
                  </p>
                </div>

                <div className="bg-gradient-to-br from-background to-white p-6 rounded-xl border border-primary/10 flex-1 overflow-hidden flex flex-col">
                  <h3 className="text-xl font-bold text-primary border-b border-primary/10 pb-3 mb-4 flex items-center gap-2 flex-shrink-0">
                    <div className="w-6 h-1 bg-primary" />
                    주요 약력
                  </h3>
                  <ul className="space-y-2.5 overflow-y-auto pr-2 custom-scrollbar flex-1">
                    {DOCTORS[selectedDoctor].history.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start text-sm text-gray-700 hover:text-primary transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 mr-3 flex-shrink-0 group-hover:bg-primary transition-colors" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ===== 모바일 레이아웃 — 아코디언 ===== */}
        <div className="lg:hidden flex flex-col gap-3">
          {DOCTORS.map((doctor, index) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-primary/10"
            >
              {/* 헤더 (항상 보임): 이름 + 직책 */}
              <button
                onClick={() => toggleMobile(index)}
                className="w-full flex items-center gap-3 p-4 text-left focus:outline-none active:bg-surface transition-colors"
              >
                {/* 번호 원 */}
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                {/* 텍스트 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-gray-800">{doctor.name}</h3>
                    <span className="text-xs text-gray-500 font-medium">{doctor.title}</span>
                  </div>
                  <p className="text-xs text-primary font-medium truncate">{doctor.specialty}</p>
                </div>
                {/* 화살표 */}
                <ChevronDown 
                  size={18} 
                  className={`text-primary/40 transition-transform duration-300 flex-shrink-0 ${mobileExpanded === index ? 'rotate-180 text-primary' : ''}`}
                />
              </button>

              {/* 확장 영역: 이미지 + 인사말 + 약력 */}
              <AnimatePresence>
                {mobileExpanded === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    {/* 역할 뱃지 */}
                    <div className="px-4 pt-3 pb-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest">
                        {doctor.role}
                      </span>
                    </div>

                    {/* 인사말 */}
                    <div className="px-4 pt-2 pb-2">
                      <div className="relative pl-3 border-l-2 border-primary/30 py-1">
                        <p className="text-sm text-gray-600 leading-relaxed italic">
                          "{doctor.greeting.split('\n').map((line, i) => (
                            <span key={i} className="block">{line}</span>
                          ))}"
                        </p>
                      </div>
                    </div>

                    {/* 주요 약력 */}
                    <div className="px-4 pb-4">
                      <div className="bg-surface/70 p-4 rounded-xl border border-primary/5">
                        <h4 className="text-xs font-bold text-primary border-b border-primary/10 pb-2 mb-3 flex items-center gap-1.5">
                          <div className="w-4 h-0.5 bg-primary rounded" />
                          주요 약력
                        </h4>
                        <ul className="space-y-1.5">
                          {doctor.history.map((item, idx) => (
                            <li key={idx} className="flex items-start text-xs text-gray-600">
                              <span className="text-primary/40 mr-1.5 mt-0.5 flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>

      {/* 커스텀 스크롤바 스타일 */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D1366F;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #AD2A5A;
        }
      `}</style>
    </section>
  );
};

export default Doctors;