import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const slices = Array.from({ length: 8 }, (_, i) => i);

  return (
    <>
      {/* Fixed Background Container */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-background">
        
        {/* Full Image Background - Soft Mother & Child or Flower */}
        <motion.div 
           className="absolute inset-0 bg-cover bg-center"
           style={{ 
             // Updated to a soft pink/floral/woman themed image
             backgroundImage: 'url(https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=3870&auto=format&fit=crop)',
             filter: 'brightness(0.9)'
           }}
           initial={{ opacity: 1, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 2.0, ease: "easeOut" }}
        />
        
        {/* Gradient Overlay for Text Readability - Pink Tint */}
        <div className="absolute inset-0 bg-primary/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />

        {/* Slice Transition Effect - Pink Theme */}
        <div className="absolute inset-0 flex w-full h-full z-10 pointer-events-none">
          {slices.map((i) => (
            <motion.div
              key={i}
              className="relative h-full bg-surface"
              style={{ width: '12.5%' }}
              initial={{ height: '100%' }}
              animate={{ height: '0%' }}
              transition={{ 
                duration: 1.0, 
                ease: [0.22, 1, 0.36, 1], 
                delay: 0.2 + (i * 0.05) 
              }}
            />
          ))}
        </div>

        {/* Hero Text Content */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-8 md:w-12 bg-white"></div>
              <p className="text-white tracking-[0.2em] text-xs md:text-sm font-bold uppercase drop-shadow-md">
                WOMEN'S HEALTHCARE
              </p>
              <div className="h-[1px] w-8 md:w-12 bg-white"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight font-serif drop-shadow-lg">
              여성의 건강,<br/>
              <span className="text-white italic">
                아름다운 삶의 시작
              </span>
            </h1>
            
            <p className="text-white font-medium text-base md:text-xl max-w-2xl mx-auto leading-loose drop-shadow-md">
              세심한 배려와 따뜻한 진료로<br className="block"/>
              당신의 평생 주치의가 되겠습니다.
            </p>
          <div className="mt-10 flex justify-center pointer-events-auto relative z-50">
            <a
              href="http://pf.kakao.com/_TpaBj/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-[#D1366F] hover:bg-[#AD2A5A] rounded-full shadow-lg shadow-[#D1366F]/30"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.707 4.8 4.315 6.124l-1.091 3.993 4.38-2.92c.451.077.917.118 1.396.118 4.97 0 9-3.185 9-7.115S16.97 3 12 3z"/>
              </svg>
              <span className="text-lg">카카오톡 무료상담</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
      </div>
      
      {/* Spacer to allow scrolling over the fixed hero */}
      <div className="h-screen w-full relative pointer-events-none" />
    </>
  );
};

export default Hero;