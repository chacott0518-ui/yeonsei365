import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINICS } from '../constants';
import { ChevronRight, ChevronDown } from 'lucide-react';

const Center: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

  const toggleMobile = (idx: number) => {
    setMobileExpanded(mobileExpanded === idx ? null : idx);
  }

  return (
    <section id="clinics" className="relative py-20 md:py-32 bg-background z-10 border-t border-white" style={{ scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-5 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
           <span className="text-primary text-sm font-bold tracking-widest block mb-4 uppercase">Specialized Centers</span>
           <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif">
             분야별 전문 클리닉
           </h2>
           <p className="mt-4 text-gray-600 text-sm md:text-base">
             여성의 생애 주기별 맞춤형 진료를 약속합니다.
           </p>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden lg:grid grid-cols-12 gap-16">
          
          {/* Navigation List */}
          <div className="col-span-4 flex flex-col gap-3">
             {CLINICS.map((clinic, idx) => (
               <button
                 key={clinic.id}
                 onClick={() => setActiveTab(idx)}
                 className={`w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${
                   activeTab === idx 
                     ? 'bg-primary text-white shadow-lg border-primary' 
                     : 'bg-white text-gray-500 hover:bg-surface hover:border-primary/20 border-transparent'
                 }`}
               >
                 <div className="flex items-center gap-4">
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      activeTab === idx ? 'bg-white/20 text-white' : 'bg-background text-primary/60'
                   }`}>
                      {idx + 1}
                   </div>
                   <span className="font-bold text-lg">{clinic.title}</span>
                 </div>
                 <ChevronRight 
                   className={`transition-transform duration-300 ${
                     activeTab === idx ? 'text-white translate-x-1' : 'text-gray-300 group-hover:text-primary'
                   }`} 
                   size={20} 
                 />
               </button>
             ))}
          </div>

          {/* Content Area */}
          <div className="col-span-8 relative min-h-[500px]">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.4 }}
                 className="h-full bg-white rounded-3xl overflow-hidden shadow-xl border border-primary/10 flex flex-row"
               >
                 <div className="w-1/2 relative" style={{ aspectRatio: '16/9' }}>
                    <img 
                      src={CLINICS[activeTab].image} 
                      alt={CLINICS[activeTab].title} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                 </div>
                 
                 <div className="w-1/2 p-10 flex flex-col justify-center bg-white relative z-10">
                    <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mb-8 text-primary">
                       <span className="text-3xl font-serif font-bold">{activeTab + 1}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{CLINICS[activeTab].title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {CLINICS[activeTab].description}
                    </p>

                    <div className="space-y-4">
                        {CLINICS[activeTab].details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                             <p className="text-gray-600 text-sm">{detail}</p>
                          </div>
                        ))}
                    </div>
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>

        {/* --- MOBILE VIEW — 이미지 썸네일 + 아코디언 --- */}
        <div className="lg:hidden flex flex-col gap-3">
          {CLINICS.map((clinic, idx) => (
            <div key={clinic.id} className="rounded-2xl overflow-hidden shadow-md bg-white border border-primary/10">
              {/* 헤더 (항상 보임): 썸네일 + 제목 */}
              <button
                onClick={() => toggleMobile(idx)}
                className="w-full flex items-center gap-3 p-3 pr-4 text-left focus:outline-none active:bg-surface transition-colors"
              >
                {/* 썸네일 이미지 */}
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={clinic.image} 
                    alt={clinic.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* 텍스트 */}
                <div className="flex-1 min-w-0">
                  <span className="text-primary/50 text-[10px] font-bold tracking-widest uppercase block">0{idx + 1} Clinic</span>
                  <h4 className="text-base font-bold text-gray-800 truncate">{clinic.title}</h4>
                  <p className="text-xs text-gray-500 truncate">{clinic.description}</p>
                </div>
                {/* 화살표 */}
                <ChevronDown 
                  size={18} 
                  className={`text-primary/40 transition-transform duration-300 flex-shrink-0 ${mobileExpanded === idx ? 'rotate-180 text-primary' : ''}`}
                />
              </button>

              {/* 확장 영역: 큰 이미지 + 상세 설명 + 디테일 리스트 */}
              <AnimatePresence>
                {mobileExpanded === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    {/* 이미지 영역 */}
                    <div className="relative aspect-[4/3] mx-3">
                      <img 
                        src={clinic.image} 
                        alt={clinic.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply rounded-xl" />
                    </div>

                    {/* 텍스트 영역 */}
                    <div className="p-4 pt-4">
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 pl-3 border-l-2 border-primary/30">
                        {clinic.description}
                      </p>
                      <div className="space-y-2.5 bg-surface/50 rounded-xl p-4">
                        {clinic.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <p className="text-sm text-gray-700">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Center;