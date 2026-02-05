import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden z-10 bg-background">
      
      {/* Mobile Background Image & Overlay */}
      <div className="absolute inset-0 md:hidden z-0">
         <img 
           src="https://images.unsplash.com/photo-1516549655169-df83a0674f66?q=80&w=2070&auto=format&fit=crop"
           alt="Background"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Text Side */}
            <div className="space-y-8 text-center md:text-left">
              <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
              >
                <span className="text-gold md:text-primary text-sm font-bold tracking-widest block mb-4 uppercase">
                  Hospital Introduction
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white md:text-gray-900 leading-tight font-serif">
                  마음을 담은 진료,<br/>
                  <span className="text-white md:text-primary">여성 중심의 병원</span>
                </h2>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2, duration: 0.6 }}
                 className="space-y-6 text-gray-100 md:text-gray-600 leading-relaxed text-base md:text-lg"
              >
                <p>
                  연세365산부인과는 <strong className="text-white md:text-primary font-bold">'편안하고 따뜻한 공간'</strong>에서 여성의<br/>
                  건강을 지켜드리는 것을 최우선으로 생각합니다.
                </p>
                <p>
                  미혼 여성부터 임신, 출산, 그리고 갱년기까지 여성의<br/>
                  생애 주기별 맞춤형 의료 서비스를 제공합니다.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20 md:border-primary/10 max-w-sm mx-auto md:mx-0">
                <div className="border-l-4 border-gold md:border-primary pl-4 text-left">
                  <h4 className="text-2xl md:text-xl font-bold text-white md:text-gray-900">10,000+</h4>
                  <p className="text-gray-200 md:text-gray-500 text-sm">수술 경험</p>
                </div>
                <div className="border-l-4 border-gold md:border-primary pl-4 text-left">
                  <h4 className="text-2xl md:text-xl font-bold text-white md:text-gray-900">99%</h4>
                  <p className="text-gray-200 md:text-gray-500 text-sm">재방문 의사</p>
                </div>
              </div>
            </div>

            {/* Image Side - Desktop Only */}
            <div className="relative hidden md:block">
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                    alt="Hospital Interior"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                  />
               </div>
               {/* Accent Box */}
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full z-[-1]" />
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/20 rounded-full z-[-1]" />
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;