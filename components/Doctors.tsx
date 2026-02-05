import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOCTORS } from '../constants';

const Doctors: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(0);

  return (
    <section id="doctors" className="relative py-20 md:py-32 bg-surface z-10">
      <div className="container mx-auto px-6 md:px-12">

        {/* 섹션 타이틀 */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-primary text-sm font-bold tracking-widest block mb-4 uppercase">
            Medical Director
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif">
            의료진 소개
          </h2>
        </div>

        {/* 데스크탑 레이아웃: 왼쪽 4등분 버튼 + 우측 약력 */}
        <div className="hidden lg:grid grid-cols-12 gap-8 max-w-7xl mx-auto">

          {/* 왼쪽: 4등분 의료진 버튼 - 깔끔한 리스트 스타일 */}
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
                {/* 컨텐츠 */}
                <div className="relative h-full flex items-center justify-between px-8">
                  {/* 왼쪽: 번호 + 텍스트 */}
                  <div className="flex items-center gap-6">
                    {/* 번호 동그라미 */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${selectedDoctor === index
                        ? 'bg-white/20 text-white'
                        : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                      }`}>
                      {index + 1}
                    </div>

                    {/* 텍스트 */}
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

                  {/* 오른쪽: 화살표 */}
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

          {/* 우측: 선택된 의료진 약력 - 정확히 703px */}
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
                {/* 헤더 */}
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

                {/* 인사말 - 고정 높이 */}
                <div className="relative pl-6 border-l-4 border-primary/20 py-3 mb-6 flex-shrink-0 h-32 flex items-center">
                  <p className="text-base text-gray-600 leading-relaxed italic">
                    "{DOCTORS[selectedDoctor].greeting.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}"
                  </p>
                </div>

                {/* 주요 약력 - 스크롤 가능 */}
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

        {/* 모바일 레이아웃: 기존 모바일 디자인 유지 */}
        <div className="lg:hidden space-y-6">
          {DOCTORS.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              {/* 의료진 이미지 */}
              <div className="relative h-64 bg-gray-200">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-widest mb-2">
                    {doctor.role}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {doctor.name} <span className="text-lg font-normal">{doctor.title}</span>
                  </h3>
                  <p className="text-white/90 text-sm">
                    {doctor.specialty}
                  </p>
                </div>
              </div>

              {/* 약력 */}
              <div className="p-6">
                <div className="relative pl-4 border-l-2 border-primary py-2 mb-6">
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    "{doctor.greeting.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}"
                  </p>
                </div>

                <div className="bg-background p-5 rounded-xl border border-primary/10">
                  <h4 className="text-base font-bold text-primary border-b border-primary/10 pb-2 mb-3 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    주요 약력
                  </h4>
                  <ul className="space-y-2">
                    {doctor.history.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-primary/40 mr-2 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
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