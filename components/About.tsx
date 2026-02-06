import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const STORY_CARDS = [
  {
    title: '편안하고 따뜻한 공간',
    body: '연세365산부인과는\n여성의 건강을 지켜드리는 것을\n최우선으로 생각합니다.',
    stat: '10,000+',
    statLabel: '수술 경험',
  },
  {
    title: '여성 중심의 병원',
    body: '미혼 여성부터 임신, 출산,\n그리고 갱년기까지 여성의\n생애 주기별 맞춤형 의료 서비스를\n제공합니다.',
    stat: '99%',
    statLabel: '재방문 의사',
  },
  {
    title: '세심한 진료 약속',
    body: '프라이빗하고 안전한 환경에서\n여성 전문 의료진이\n세심하게 케어드립니다.',
    stat: '365일',
    statLabel: '연중무휴 진료',
  },
  {
    title: '평생 주치의',
    body: '세심한 배려와 따뜻한 진료로\n당신의 평생 주치의가\n되겠습니다.',
    stat: '1:1',
    statLabel: '맞춤 상담',
  },
];

const About: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const children = el.children;
    if (children.length === 0) return;

    const centerX = el.scrollLeft + el.clientWidth / 2;
    let closestIdx = 0;
    let closestDist = Infinity;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(centerX - childCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = i;
      }
    }
    setActiveIndex(closestIdx);
  }, []);

  const scrollToCard = (idx: number) => {
    if (!scrollRef.current) return;
    const children = scrollRef.current.children;
    if (idx < children.length) {
      const child = children[idx] as HTMLElement;
      const scrollLeft = child.offsetLeft - (scrollRef.current.clientWidth - child.offsetWidth) / 2;
      scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden z-10 bg-pink-50 md:bg-background">

      {/* ===== MOBILE VIEW — Horizontal Snap Swipe ===== */}
      <div className="md:hidden">
        {/* 헤더 */}
        <div className="px-5 text-center mb-8">
          <span className="text-primary text-sm font-bold tracking-widest block mb-3 uppercase">
            Hospital Introduction
          </span>
          <h2 className="text-2xl font-bold text-gray-900 leading-tight font-serif">
            마음을 담은 진료,<br/>
            <span className="text-primary">여성 중심의 병원</span>
          </h2>
        </div>

        {/* 가로 스냅 스와이프 카드 */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pl-5 pr-5 pb-4 scrollbar-hide"
        >
          {STORY_CARDS.map((card, idx) => (
            <div 
              key={idx}
              className="snap-center flex-shrink-0"
              style={{ width: '85%' }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-md border border-primary/10 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line mb-5">
                  {card.body}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                  <span className="text-2xl font-bold text-primary">{card.stat}</span>
                  <span className="text-xs text-gray-500">{card.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 인디케이터 (점) */}
        <div className="flex justify-center gap-2 mt-4 px-5">
          {STORY_CARDS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'bg-primary w-6' : 'bg-primary/20 w-2'
              }`}
              aria-label={`카드 ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ===== DESKTOP VIEW — 기존 그대로 유지 ===== */}
      <div className="hidden md:block">
        <div className="container mx-auto px-5 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              
              {/* Text Side */}
              <div className="space-y-8 text-center md:text-left">
                <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
                >
                  <span className="text-primary text-sm font-bold tracking-widest block mb-4 uppercase">
                    Hospital Introduction
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight font-serif">
                    마음을 담은 진료,<br/>
                    <span className="text-primary">여성 중심의 병원</span>
                  </h2>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2, duration: 0.6 }}
                   className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg"
                >
                  <p>
                    연세365산부인과는 <strong className="text-primary font-bold">'편안하고 따뜻한 공간'</strong>에서 여성의<br/>
                    건강을 지켜드리는 것을 최우선으로 생각합니다.
                  </p>
                  <p>
                    미혼 여성부터 임신, 출산, 그리고 갱년기까지 여성의<br/>
                    생애 주기별 맞춤형 의료 서비스를 제공합니다.
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-primary/10 max-w-sm mx-auto md:mx-0">
                  <div className="border-l-4 border-primary pl-4 text-left">
                    <h4 className="text-xl font-bold text-gray-900">10,000+</h4>
                    <p className="text-gray-500 text-sm">수술 경험</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4 text-left">
                    <h4 className="text-xl font-bold text-gray-900">99%</h4>
                    <p className="text-gray-500 text-sm">재방문 의사</p>
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
      </div>
    </section>
  );
};

export default About;
