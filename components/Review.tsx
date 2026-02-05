import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronDown, ChevronUp } from 'lucide-react';

// ✅ 새로운 10개 후기 데이터
const ABORTION_REVIEWS = [
  {
    id: 1,
    name: '김OO',
    treatment: '임신초기낙태',
    content: '처음 임신 사실을 알았을 때부터 수술을 결정하기까지 정말 많은 고민을 했어요. 비용도 걱정됐고, 수술 자체보다 이후 몸 상태가 더 불안했습니다. 상담에서 제 주수에 맞는 방법과 회복 과정을 자세히 설명해줘서 마음이 조금 놓였어요. 수술 후에는 생각보다 통증이 심하지 않았고, 안내받은 대로 쉬면서 회복했습니다.'
  },
  {
    id: 2,
    name: '최OO',
    treatment: '임신중절',
    content: '인터넷에 정보가 너무 많아서 오히려 더 혼란스러웠어요. 병원에서는 과장 없이 가능한 부분과 어려운 부분을 솔직하게 설명해줬습니다. 수술은 짧게 끝났고, 회복실에서 충분히 쉬게 해줘서 안심됐어요. 집에 돌아간 뒤에도 큰 문제 없이 회복했습니다.'
  },
  {
    id: 3,
    name: '박OO',
    treatment: '낙태수술',
    content: '혼자 방문해서 많이 긴장했는데, 의료진이 불필요한 질문 없이 존중해줘서 좋았습니다. 비용도 처음 상담받은 금액 그대로 진행됐어요. 수술 후 출혈이나 통증도 미리 안내받은 범위 안이었습니다. 정서적으로도 배려받는 느낌이 들어 감사했습니다.'
  },
  {
    id: 4,
    name: '이OO',
    treatment: '낙태비용',
    content: '회복이 얼마나 걸릴지가 가장 걱정이었어요. 언제부터 샤워가 가능한지, 일상생활은 언제부터 되는지 구체적으로 알려줬습니다. 수술 후 이틀 정도는 몸이 좀 무거웠지만 점점 괜찮아졌어요. 안내받은 관리 방법이 많이 도움이 됐습니다.'
  },
  {
    id: 5,
    name: '정OO',
    treatment: '임신중절수술',
    content: '비용 문의부터 상담까지 응대가 차분해서 신뢰가 갔어요. 수술 전 검사 과정도 빠르고 깔끔했습니다. 마취에서 깼을 때 간호사분이 계속 상태를 확인해줬어요. 전체 과정이 생각보다 덜 힘들었습니다.'
  },
  {
    id: 6,
    name: '강OO',
    treatment: '낙태시기',
    content: '결정 자체가 힘든 일이었는데 병원 분위기가 부담스럽지 않아 좋았습니다. 수술 시간은 짧았고, 회복실에서 충분히 쉬고 나왔어요. 통증은 생리통 정도였고 약으로 조절 가능했습니다. 혼자 감당해야 할 것 같았던 마음이 조금은 가벼워졌습니다.'
  },
  {
    id: 7,
    name: '조OO',
    treatment: '중절수술',
    content: '다른 병원과 비교하다가 여기로 오게 됐어요. 비용 설명이 가장 명확했고 추가 비용 이야기가 없었습니다. 회복 후 주의사항도 종이에 적어줘서 집에 가서 참고하기 좋았어요. 전반적으로 체계적이라는 느낌을 받았습니다.'
  },
  {
    id: 8,
    name: '윤OO',
    treatment: '낙태비용가격',
    content: '임신 주수가 애매해서 가능한지부터 걱정했어요. 검사 후 정확한 설명을 듣고 결정할 수 있었습니다. 수술 후 출혈 양도 정상 범위라고 설명해줘서 불안하지 않았어요. 경과가 괜찮아 마음이 놓였습니다.'
  },
  {
    id: 9,
    name: '장OO',
    treatment: '인공중절수술',
    content: '감정적으로 가장 힘들었는데, 의료진이 말을 아껴줘서 좋았습니다. 괜히 죄책감을 느끼게 하는 분위기가 아니라 안심됐어요. 몸 회복도 생각보다 빨랐고 일상으로 돌아갈 수 있었습니다. 조용히 마무리하고 싶은 분들에게 괜찮은 병원이라고 느꼈어요.'
  },
  {
    id: 10,
    name: '한OO',
    treatment: '임신중절수술비용금액',
    content: '결정을 내린 후에도 계속 마음이 복잡했어요. 상담 과정에서 충분히 설명을 듣고 선택할 수 있어서 후회는 덜했습니다. 수술 후 관리 방법을 잘 지켜서 큰 문제 없이 회복했어요. 지금은 몸 상태도 안정되고 일상으로 돌아왔습니다.'
  }
];

const Review: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="review" className="relative py-20 md:py-32 bg-background z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 md:mb-20 text-center">
        <span className="text-primary text-sm font-bold tracking-widest block mb-3 uppercase">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif">수술 후기</h2>
        <p className="mt-4 text-gray-600">환자분들이 직접 남겨주신 소중한 이야기입니다.</p>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="lg:hidden px-6">
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
                        src="https://images.unsplash.com/photo-1543332143-651859920567?q=80&w=2070&auto=format&fit=crop"
                        alt="Reviews Cover" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">수술 후기 전체보기</h3>
                        <p className="text-white/80 text-sm mb-6">진심이 담긴 회복 스토리</p>
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
                         <span className="text-white font-bold text-sm">수술 후기</span>
                         <div className="flex items-center gap-2 text-white/90 text-xs">
                            닫기 <ChevronUp size={16} />
                         </div>
                    </div>

                    <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-primary/20 [&::-webkit-scrollbar-thumb]:rounded-full">
                        {ABORTION_REVIEWS.map((review, idx) => (
                            <div key={`mobile-list-${idx}`} className="bg-surface p-5 rounded-xl border border-primary/5">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-2 py-1 bg-white text-primary text-[10px] font-bold rounded border border-primary/10">
                                        {review.treatment}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                                        </div>
                                        <span className="text-xs font-bold text-gray-700">{review.name}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    "{review.content}"
                                </p>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={() => setIsExpanded(false)}
                        className="w-full py-4 bg-background text-primary font-bold text-sm hover:bg-surface transition-colors border-t border-primary/10"
                    >
                        접기
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block relative w-full mt-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20" />
        
        <div className="flex overflow-hidden py-8">
          <motion.div 
            className="flex gap-8 px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 60 
            }}
          >
            {[...ABORTION_REVIEWS, ...ABORTION_REVIEWS, ...ABORTION_REVIEWS].map((review, idx) => (
              <ReviewCard key={`desktop-${review.id}-${idx}`} review={review} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ✅ 우측 하단 SEO 키워드 */}
      <div className="absolute bottom-4 right-4 text-[10px] text-gray-300 leading-relaxed opacity-30 pointer-events-none select-none">
        임신초기낙태, 임신중절, 낙태수술, 낙태비용, 임신중절수술, 임신초기낙태, 중절수술, 낙태비용가격, 임신중절수술금액, 중절수술비용
      </div>
    </section>
  );
};

const ReviewCard: React.FC<{ review: typeof ABORTION_REVIEWS[0] }> = ({ review }) => (
  <div 
    className="w-[480px] bg-white p-10 rounded-2xl shadow-sm border border-primary/10 flex flex-col relative group h-full"
  >
    <div className="absolute top-8 left-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
      <Quote size={40} fill="currentColor" />
    </div>

    <div className="mt-10 mb-8 relative z-10 flex-grow">
       <p className="text-gray-600 text-lg leading-relaxed font-medium line-clamp-6">
          "{review.content}"
       </p>
    </div>
    
    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50 w-full">
       <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
          </div>
          <div>
             <p className="font-bold text-gray-800 text-base">{review.name}</p>
          </div>
       </div>
       <span className="px-3 py-1 bg-surface text-primary text-xs font-bold rounded-full whitespace-nowrap">
          {review.treatment}
       </span>
    </div>
  </div>
);

export default Review;