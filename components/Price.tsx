import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICES } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Price: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="price" className="relative py-20 md:py-32 bg-surface z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-primary text-sm font-bold tracking-widest block mb-4 uppercase">Transparent Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif">비급여 진료비 안내</h2>
          <p className="text-right text-xs text-gray-500 mt-4 max-w-5xl mx-auto">최종변경일 : 2025-06-01</p>
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
                 className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
               >
                 <img
                   src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=2072&auto=format&fit=crop"
                   alt="Pricing Cover"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                 
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">진료비 상세 내역 확인하기</h3>
                    <p className="text-white/80 text-sm mb-6">합리적이고 투명한 비용을 약속드립니다</p>
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
                     <span className="text-white font-bold text-sm">비급여 진료비</span>
                     <div className="flex items-center gap-2 text-white/90 text-xs">
                        닫기 <ChevronUp size={16} />
                     </div>
                  </div>

                  <div className="p-2">
                     <div className="flex bg-surface py-3 px-1 rounded-lg text-[11px] font-bold text-primary border-b border-primary/10">
                        <div className="w-[30%] text-center whitespace-nowrap">명칭</div>
                        <div className="w-[40%] text-center whitespace-nowrap">비용 (최저~최고)</div>
                        <div className="w-[30%] text-center whitespace-nowrap">비고</div>
                     </div>
                     
                     <div className="divide-y divide-gray-100">
                       {PRICES.map((item, idx) => (
                         <div key={idx} className="flex py-4 px-1 items-start text-[11px] text-gray-700 tracking-tight">
                           <div className="w-[30%] text-center font-bold text-gray-900 px-1">{item.name}</div>
                           <div className="w-[40%] text-center font-bold text-primary break-keep">{item.price}</div>
                           <div className="w-[30%] text-center text-gray-500 break-keep px-1">{item.note || '-'}</div>
                         </div>
                       ))}
                     </div>
                  </div>

                  <button 
                    onClick={() => setIsExpanded(false)}
                    className="w-full py-4 bg-background text-primary font-bold text-sm hover:bg-surface transition-colors border-t border-primary/5"
                  >
                    접기
                  </button>
               </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden lg:block">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-primary/10 shadow-lg"
           >
              <div className="flex bg-primary/5 py-5 px-8 border-b border-primary/10 text-sm font-bold text-primary uppercase tracking-wider">
                <div className="w-[40%] text-center">명칭</div>
                <div className="w-[30%] text-center">비용 (최저~최고비용)</div>
                <div className="w-[30%] text-center">비고</div>
              </div>
              
              <div className="divide-y divide-primary/5 bg-white">
                {PRICES.map((item, idx) => (
                  <div key={idx} className="flex py-5 px-8 items-center hover:bg-surface transition-colors text-sm">
                    {/* Only show category if it changes or group visually? For now just flat list as requested by image */}
                    <div className="w-[40%] text-center font-bold text-gray-700">{item.name}</div>
                    <div className="w-[30%] text-center font-bold text-primary">{item.price}</div>
                    <div className="w-[30%] text-center text-gray-500 text-xs whitespace-pre-wrap">{item.note || '-'}</div>
                  </div>
                ))}
              </div>
           </motion.div>
        </div>
        
        {/* Footer Info */}
        <div className="max-w-5xl mx-auto mt-8 p-6 bg-white rounded-xl border border-primary/10 text-sm text-gray-500 space-y-2">
            <p className="font-bold text-primary mb-2">※ 안내 사항</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
              <li>모든 비급여 항목은 부가가치세(VAT)가 포함된 가격입니다. (별도 표기 항목 제외)</li>
              <li>환자분의 상태에 따라 시술 시간 및 비용이 달라질 수 있습니다.</li>
              <li>실손 보험 적용 여부는 가입하신 보험 상품에 따라 다르므로 보험사에 확인 부탁드립니다.</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Price;