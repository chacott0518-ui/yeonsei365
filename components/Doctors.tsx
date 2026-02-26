import React from 'react';
import { motion } from 'framer-motion';
import { DOCTORS } from '../constants';

const Doctors: React.FC = () => {
  const doctor = DOCTORS[0];

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

        {/* 이진우 원장 상세카드 — 중앙 배치 */}
        <div className="max-w-[800px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-primary/10 flex flex-col"
          >
            <div className="mb-6 flex-shrink-0">
              <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold tracking-widest mb-4">
                {doctor.role}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 font-serif">
                {doctor.name}{' '}
                <span className="text-lg md:text-2xl font-normal text-gray-500">
                  {doctor.title}
                </span>
              </h2>
              <p className="text-sm md:text-lg text-primary font-medium">
                {doctor.specialty}
              </p>
            </div>

            <div className="relative pl-4 md:pl-6 border-l-2 md:border-l-4 border-primary/20 py-2 md:py-3 mb-6 flex-shrink-0">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed italic">
                "{doctor.greeting.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}"
              </p>
            </div>

            <div className="bg-gradient-to-br from-background to-white p-4 md:p-6 rounded-xl border border-primary/10 flex-1 flex flex-col">
              <h3 className="text-base md:text-xl font-bold text-primary border-b border-primary/10 pb-2 md:pb-3 mb-3 md:mb-4 flex items-center gap-2 flex-shrink-0">
                <div className="w-4 md:w-6 h-0.5 md:h-1 bg-primary" />
                주요 약력
              </h3>
              <ul className="space-y-1.5 md:space-y-2.5 overflow-y-auto pr-2 custom-scrollbar flex-1">
                {doctor.history.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start text-xs md:text-sm text-gray-700 hover:text-primary transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0 group-hover:bg-primary transition-colors" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
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
