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
      <div className="container mx-auto px-6 md:px-12">
        
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
                 <div className="w-1/2 relative">
                    <img 
                      src={`https://source.unsplash.com/random/800x1000/?woman,pink,flower,${CLINICS[activeTab].id}`} 
                      onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                      }}
                      alt={CLINICS[activeTab].title} 
                      className="w-full h-full object-cover"
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
                        <div className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                           <p className="text-gray-600 text-sm">프라이빗한 1:1 맞춤 진료 공간</p>
                        </div>
                        <div className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                           <p className="text-gray-600 text-sm">여성 전문의의 섬세한 상담</p>
                        </div>
                        <div className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                           <p className="text-gray-600 text-sm">최신 여성 검진 장비 보유</p>
                        </div>
                    </div>
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="lg:hidden flex flex-col gap-4">
          {CLINICS.map((clinic, idx) => (
            <motion.div 
              key={clinic.id} 
              layout
              onClick={() => toggleMobile(idx)}
              className="relative rounded-2xl overflow-hidden shadow-md cursor-pointer group"
            >
               {/* Background Image & Overlay */}
               <div className="absolute inset-0 z-0">
                 <img 
                    src={`https://source.unsplash.com/random/800x600/?flower,pink,${clinic.id}`}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                    }}
                    alt={clinic.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
               </div>

               {/* Content Overlay */}
               <div className="relative z-10 p-6 flex flex-col min-h-[120px] justify-center">
                 <div className="flex items-center justify-between">
                     <div>
                        <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase block mb-1">0{idx + 1} Clinic</span>
                        <h4 className="text-xl font-bold text-white">{clinic.title}</h4>
                     </div>
                     <ChevronDown 
                        size={20} 
                        className={`text-white/80 transition-transform duration-300 ${mobileExpanded === idx ? 'rotate-180' : ''}`}
                     />
                 </div>
                 
                 <AnimatePresence>
                   {mobileExpanded === idx && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.3 }}
                       className="mt-4"
                     >
                       <p className="text-white/90 text-sm mb-4 leading-relaxed pl-3 border-l-2 border-white/50">
                         {clinic.description}
                       </p>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Center;