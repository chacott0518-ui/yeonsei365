import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, ArrowUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 5, FAQS.length));
  };

  const handleShowAll = () => {
    setVisibleCount(FAQS.length);
  };

  const handleCollapse = () => {
    setVisibleCount(5);
    setActiveIndex(null);
    // 섹션 최상단으로 부드럽게 스크롤
    setTimeout(() => {
      document.getElementById('faq')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  const visibleFAQs = FAQS.slice(0, visibleCount);
  const remainingCount = FAQS.length - visibleCount;

  return (
    <section id="faq" className="relative py-20 md:py-32 bg-surface z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-primary text-sm font-bold tracking-widest block mb-4 uppercase">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif">자주 묻는 질문</h2>
          <p className="mt-4 text-gray-600">궁금하신 점을 빠르게 확인하세요</p>
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="lg:hidden">
            <AnimatePresence mode="wait">
                {!isExpanded ? (
                    <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsExpanded(true)}
                        className="relative w-full h-[250px] rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop"
                            alt="FAQ Cover"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">질문과 답변</h3>
                            <p className="text-white/80 text-sm mb-6">진료 관련 궁금한 점을 확인하세요</p>
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white animate-bounce">
                                <ChevronDown size={24} />
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-white rounded-2xl shadow-lg border border-primary/10 overflow-hidden"
                    >
                        <div 
                            onClick={() => setIsExpanded(false)}
                            className="bg-primary p-4 flex items-center justify-between cursor-pointer sticky top-0 z-20"
                        >
                             <span className="text-white font-bold text-sm">자주 묻는 질문</span>
                             <div className="flex items-center gap-2 text-white/90 text-xs">
                                닫기 <ChevronUp size={16} />
                             </div>
                        </div>

                        <div className="divide-y divide-gray-100 max-h-[60vh] overflow-y-auto">
                            {visibleFAQs.map((faq, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className="bg-white"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.02 }}
                                >
                                    <button
                                        onClick={() => toggleFAQ(idx)}
                                        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                                    >
                                        <div className="flex items-center gap-3 w-[90%]">
                                            <span className={`text-base font-bold flex-shrink-0 ${activeIndex === idx ? 'text-primary' : 'text-gray-400'}`}>Q.</span>
                                            <span className={`text-sm font-bold truncate ${activeIndex === idx ? 'text-primary' : 'text-gray-700'}`}>
                                                {faq.question}
                                            </span>
                                        </div>
                                        <ChevronDown 
                                            size={18}
                                            className={`transition-transform duration-300 flex-shrink-0 ${activeIndex === idx ? 'rotate-180 text-primary' : 'text-gray-400'}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-background"
                                            >
                                                <div className="p-5 pt-2 pl-10 text-sm text-gray-600 leading-relaxed border-t border-dashed border-gray-200">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        {/* 더보기/접기 버튼 (모바일) */}
                        <div className="p-4 bg-white border-t border-primary/10 space-y-2">
                            {visibleCount < FAQS.length && (
                                <>
                                    <button 
                                        onClick={handleLoadMore}
                                        className="w-full py-3 bg-primary/10 text-primary font-bold text-sm rounded-lg hover:bg-primary/20 transition-colors flex items-center justify-center gap-2"
                                    >
                                        더보기 5개 ({remainingCount}개 남음) <ChevronDown size={16} />
                                    </button>
                                    <button 
                                        onClick={handleShowAll}
                                        className="w-full py-3 bg-primary text-white font-bold text-sm rounded-lg hover:bg-primary/90 transition-colors"
                                    >
                                        전체보기 ({FAQS.length}개)
                                    </button>
                                </>
                            )}
                            {visibleCount >= FAQS.length && (
                                <button 
                                    onClick={handleCollapse}
                                    className="w-full py-3 bg-primary text-white font-bold text-sm rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    처음으로 돌아가기 <ArrowUp size={16} />
                                </button>
                            )}
                        </div>

                        <button 
                            onClick={() => setIsExpanded(false)}
                            className="w-full py-4 bg-background text-primary font-bold text-sm hover:bg-surface transition-colors border-t border-primary/10"
                        >
                            닫기
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden lg:block">
          <div className="space-y-4">
            {visibleFAQs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                className={`border rounded-xl transition-all duration-300 ${
                  activeIndex === idx ? 'border-primary shadow-md bg-white' : 'border-primary/10 bg-white hover:border-primary/50'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03 }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xl font-bold ${activeIndex === idx ? 'text-primary' : 'text-gray-400'}`}>Q.</span>
                    <span className={`font-bold text-lg ${activeIndex === idx ? 'text-primary' : 'text-gray-700'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${activeIndex === idx ? 'rotate-180 text-primary' : 'text-gray-400'}`}
                  />
                </button>
                
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 pl-14 border-t border-dashed border-primary/10 bg-surface/50 rounded-b-xl">
                        <div className="flex gap-4">
                           <span className="text-xl font-bold text-primary/60">A.</span>
                           <p className="text-gray-600 leading-relaxed pt-1">
                             {faq.answer}
                           </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* 더보기/접기 버튼 (데스크톱) */}
          <div className="mt-8 flex justify-center gap-4">
            {visibleCount < FAQS.length && (
              <>
                <button 
                  onClick={handleLoadMore}
                  className="px-8 py-4 bg-white border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors flex items-center gap-2"
                >
                  더보기 5개 ({remainingCount}개 남음) <ChevronDown size={20} />
                </button>
                <button 
                  onClick={handleShowAll}
                  className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors"
                >
                  전체보기 ({FAQS.length}개)
                </button>
              </>
            )}
            {visibleCount >= FAQS.length && (
              <button 
                onClick={handleCollapse}
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                처음으로 돌아가기 <ArrowUp size={20} />
              </button>
            )}
          </div>
        </div>

        {/* 우측 하단 플로팅 버튼 (50개 이상 표시 시) */}
        {visibleCount >= 50 && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleCollapse}
            className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center z-50 hover:scale-110"
            title="맨 위로"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}

      </div>
    </section>
  );
};

export default FAQ;
