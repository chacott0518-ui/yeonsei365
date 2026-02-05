import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Abortion: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // ... (기존 데이터는 그대로 유지)
  
  const symptoms = [
    { id: 1, title: '무월경', description: '생리 예정일이 1주 이상 지났음에도 생리가 없다면 임신 가능성을 확인해보세요.' },
    { id: 2, title: '입덧 증상', description: '호르몬 변화로 인해 메스꺼움, 구토 등의 입덧 증상이 나타날 수 있습니다.' },
    { id: 3, title: '유방 변화', description: '유방이 부풀고 민감해지며, 유두 색이 진해지는 등의 변화가 있을 수 있습니다.' },
    { id: 4, title: '피로감 증가', description: '평소보다 쉽게 피곤함을 느끼고 수면 시간이 길어질 수 있습니다.' }
  ];

  const diagnosisMethods = [
    {
      id: 1,
      title: '소변 임신테스트',
      description: '관계 후 약 14일 이후부터 확인 가능하며, 아침 첫 소변으로 검사하면 정확도가 높습니다. 약국이나 편의점에서 쉽게 구입할 수 있습니다.',
      image: 'https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?w=800&q=80'
    },
    {
      id: 2,
      title: '혈액 검사',
      description: '관계 후 7~10일 이후부터 임신 확인이 가능합니다. 병원에서 정확한 임신 여부와 임신 주수를 확인할 수 있습니다.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80'
    },
    {
      id: 3,
      title: '초음파 검사',
      description: '임신 5~6주차부터 태낭 확인이 가능하며, 정상 임신 여부와 정확한 임신 주수를 진단할 수 있습니다.',
      image: 'https://images.unsplash.com/photo-1551601651-05e4c45e8a67?w=800&q=80'
    }
  ];

  const procedures = [
    { step: '01', title: '정확한 임신 주수 확인 및 초음파 검사를 통한 정상 임신 여부 진단' },
    { step: '02', title: '개인별 건강 상태 확인 및 낙태수술 전 필수 검사 진행' },
    { step: '03', title: '일회용 멸균 기구 사용으로 감염 위험 최소화' },
    { step: '04', title: '숙련된 산부인과 전문의의 안전한 임신중절수술 진행' },
    { step: '05', title: '수술 후 회복실 케어 및 영양수액 처치로 빠른 회복 지원' }
  ];

  const afterCare = [
    { id: 1, title: '수술 전 최소 6시간 이상 금식이 필요합니다.', image: 'https://images.unsplash.com/photo-1553531889-56cc480ac5cb?w=400&q=80' },
    { id: 2, title: '낙태수술 후 2주간 무리한 운동, 사우나, 성관계를 피해주세요.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
    { id: 3, title: '첫 월경까지 개인차가 있으며 보통 4~6주 소요됩니다.', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80' },
    { id: 4, title: '약물 알레르기나 기저질환은 반드시 의료진에게 알려주세요.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80' },
    { id: 5, title: '수술 후 과다 출혈이나 심한 통증 시 즉시 병원에 연락하세요.', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80' }
  ];

  const faqs = [
    {
      q: 'Q. 낙태비용은 얼마인가요?',
      a: '낙태비용은 임신 주수, 수술 방법, 마취 종류에 따라 달라집니다. 임신 초기(14주 이내)의 경우 낙태비용 부담이 상대적으로 적으며, 임신 주수가 증가할수록 비용이 높아질 수 있습니다. 연세365산부인과는 합리적인 낙태비용으로 투명하게 안내해드리고 있습니다. 정확한 낙태수술 비용은 초음파 검사 후 1:1 상담을 통해 확인하실 수 있습니다.'
    },
    {
      q: 'Q. 낙태비용 가격은 임신 주수에 따라 어떻게 다른가요?',
      a: '낙태비용 가격은 임신 주수가 증가할수록 높아집니다. 임신 6주 이내 초기의 경우 가장 낮은 낙태비용 가격대이며, 10주 이후부터는 수술 난이도가 높아져 비용이 증가합니다. 연세365산부인과는 주수별 낙태비용 가격을 투명하게 안내드리며, 추가 비용 없이 명확한 가격으로 진료합니다.'
    },
    {
      q: 'Q. 낙태수술 후 회복 기간은 얼마나 걸리나요?',
      a: '대부분 낙태수술 당일 귀가가 가능하며, 다음 날부터 일상생활이 가능합니다. 개인차가 있으나 1~2주 정도 가벼운 출혈이 있을 수 있으며, 이는 정상적인 회복 과정입니다. 무리한 활동은 2주간 피하시고 충분한 휴식을 취하시면 빠른 회복이 가능합니다.'
    },
    {
      q: 'Q. 낙태수술은 당일 진행이 가능한가요?',
      a: '네, 가능합니다. 연세365산부인과는 당일 검사, 당일 상담, 당일 낙태수술 시스템을 운영하고 있습니다. 다만 수술 전 6시간 이상 금식이 필요하므로, 아침 일찍 방문하시거나 전날 저녁부터 금식 후 방문하시는 것을 권장합니다. 사전 예약 시 더욱 원활한 당일 수술 진행이 가능합니다.'
    },
    {
      q: 'Q. 임신중절수술 후 임신에 영향이 있나요?',
      a: '연세365산부인과는 자궁 내막 손상을 최소화하는 안전한 임신중절수술 방법을 사용합니다. 수술 후 적절한 회복 기간을 거치면 향후 임신 및 출산에 큰 영향을 미치지 않습니다. 다만, 수술 후 최소 3개월은 피임을 권장드리며, 자궁 회복을 위해 정기적인 검진을 받으시는 것이 좋습니다.'
    },
    {
      q: 'Q. 미성년자도 낙태수술이 가능한가요?',
      a: '만 19세 미만의 경우 법정대리인(부모님)의 동의가 필요합니다. 다만, 특별한 사유가 있는 경우 개별 상담을 통해 진행 가능 여부를 안내해 드립니다. 연세365산부인과는 모든 상담 내용을 철저히 비밀 보장하며, 프라이빗한 환경에서 상담이 이루어집니다.'
    },
    {
      q: 'Q. 수술 기록이 남거나 타인에게 알려질까요?',
      a: '의료법에 따라 환자의 진료 기록은 절대적으로 비밀이 보장되며, 본인 외에는 어떠한 경우에도 열람이 불가능합니다. 연세365산부인과는 프라이빗한 진료 환경에서 1:1 맞춤 상담을 진행하고 있어 안심하고 방문하실 수 있습니다.'
    },
    {
      q: 'Q. 임신중절수술 방법은 어떻게 되나요?',
      a: '임신 주수에 따라 적합한 수술 방법이 다릅니다. 임신 초기(7주 이내)에는 흡입소파술을, 그 이후에는 경관확장 후 소파술을 진행합니다. 연세365산부인과는 일회용 멸균 기구를 사용하며, 숙련된 산부인과 전문의가 안전하게 수술을 진행합니다.'
    },
    {
      q: 'Q. 낙태수술 전 준비사항은 무엇인가요?',
      a: '낙태수술 전 최소 6시간 이상 금식이 필요하며, 물도 마시지 않으셔야 합니다. 당일 보호자 동반을 권장하며, 편안한 옷차림으로 방문해 주세요. 약물 알레르기나 기저질환이 있는 경우 반드시 사전에 알려주셔야 하며, 생리대를 준비해 오시면 좋습니다.'
    },
    {
      q: 'Q. 수술 후 언제부터 성관계가 가능한가요?',
      a: '임신중절수술 후 최소 2주간은 성관계를 피하셔야 합니다. 자궁 내막이 완전히 회복되지 않은 상태에서 성관계를 할 경우 감염 위험이 높아질 수 있습니다. 첫 월경 이후 정상적인 성생활이 가능하며, 수술 후에도 반드시 피임을 실천하시기 바랍니다.'
    }
  ];

  return (
    <section id="abortion-clinic" className="relative py-20 md:py-32 bg-white z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* 섹션 타이틀 */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-primary text-sm font-bold tracking-widest block mb-4 uppercase">
            Safe Abortion Clinic
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif mb-6">
            임신중절 클리닉
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            연세365산부인과는 여성의 건강과 안전을 최우선으로 생각합니다.<br />
            숙련된 산부인과 전문의가 안전하고 세심한 낙태수술을 진행하며,<br />
            합리적인 낙태비용과 철저한 사후 관리를 통해 빠른 회복을 돕고 있습니다.
          </p>
        </div>

        {/* 플로팅 카카오톡 상담 버튼 */}
        <div className="flex justify-center mb-12">
          <a 
            href="http://pf.kakao.com/_TpaBj/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
            <span className="text-lg">카카오톡 빠른 상담</span>
          </a>
        </div>

        {/* 임신중절수술 법적 정보 */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">⚖️</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">안전한 임신중절수술</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  2021년 1월부터 모자보건법 개정에 따라 임신 14주 이내의 낙태수술은 본인의 결정으로 가능하며,<br />
                  임신 15주~24주의 경우 아래 사유에 해당될 시 진행할 수 있습니다.<br />
                  연세365산부인과는 의료법을 준수하며 투명한 낙태비용 가격으로 안전하게 진료하고 있습니다.
                </p>
                
                <div className="bg-white/80 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-bold text-primary mb-3 text-lg">[모자보건법 제14조 - 인공임신중절 허용 사유]</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 font-bold">1.</span>
                      <span>본인 또는 배우자가 우생학적·유전학적 정신장애나 신체질환이 있는 경우</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 font-bold">2.</span>
                      <span>본인 또는 배우자가 전염성 질환이 있는 경우</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 font-bold">3.</span>
                      <span>강간 또는 준강간에 의해 임신된 경우</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 font-bold">4.</span>
                      <span>법률상 혼인할 수 없는 혈족 또는 인척 간에 임신인 경우</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 font-bold">5.</span>
                      <span>임신의 지속이 보건의학적 이유로 모체의 건강을 심각하게 해치고 있거나 해칠 우려가 있는 경우</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 임신초기증상 */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">임신 초기 증상</h3>
          <p className="text-center text-gray-600 mb-12 text-sm">다음과 같은 증상이 있다면 임신 가능성을 확인해보세요</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {symptoms.map((symptom, idx) => (
              <motion.div
                key={symptom.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-purple-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                  <span className="text-4xl md:text-5xl font-bold text-primary/80">0{symptom.id}</span>
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">{symptom.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{symptom.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 임신 확인 방법 */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">임신 확인 방법</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {diagnosisMethods.map((method, idx) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-primary/10 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <img src={method.image} alt={method.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/20" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-xl text-gray-800 mb-3">{method.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            {['당일 검사', '당일 상담', '당일 수술'].map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary/30 bg-white flex items-center justify-center shadow-lg">
                    <span className="font-bold text-sm md:text-lg text-gray-800 text-center px-2">{step}</span>
                  </div>
                </div>
                {idx < 2 && (
                  <div className="text-primary text-2xl md:text-3xl font-bold">▶</div>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            ※ 당일 낙태수술 가능 여부는 검사 결과에 따라 달라질 수 있으며, 낙태비용은 상담 시 안내드립니다
          </p>
        </div>

        {/* 안전한 수술 진행 절차 */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">안전한 임신중절 수술 절차</h3>
          <p className="text-center text-gray-600 mb-12 text-sm">연세365산부인과는 체계적인 낙태수술 프로세스로 안전을 지킵니다</p>
          <div className="space-y-4">
            {procedures.map((proc, idx) => (
              <motion.div
                key={proc.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-primary flex items-center gap-6 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{proc.step}</span>
                </div>
                <p className="text-gray-700 font-medium">{proc.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 수술 후 주의사항 */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">수술 전후 주의사항</h3>
          <p className="text-center text-gray-600 mb-12 text-sm">빠른 회복을 위해 아래 사항을 꼭 지켜주세요</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {afterCare.map((care, idx) => (
              <motion.div
                key={care.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg">
                  <img src={care.image} alt={care.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed px-2">{care.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 자주 묻는 질문 */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">자주 묻는 질문</h3>
          <p className="text-center text-gray-600 mb-12 text-sm">낙태비용, 낙태수술 절차 등 궁금하신 내용을 확인하세요</p>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-surface transition-colors"
                >
                  <span className="font-bold text-base md:text-lg text-gray-800 pr-4">{faq.q}</span>
                  <span className="text-primary text-2xl flex-shrink-0">{expandedFaq === idx ? '−' : '+'}</span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 진료 예약 안내 */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-purple-50 rounded-2xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">진료 예약 및 상담</h3>
            <p className="text-center text-gray-600 mb-8">
              임신중절수술 및 낙태비용 상담은 사전 예약제로 운영됩니다.<br />
              프라이빗한 1:1 상담을 원하시는 분은 아래 방법으로 예약해주세요.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a 
                href="tel:02-547-2876"
                className="group bg-primary hover:bg-primary/90 text-white font-bold py-6 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-center flex items-center justify-center text-lg transform hover:scale-105"
              >
                <span>전화 상담</span>
              </a>
              <a 
                href="http://pf.kakao.com/_TpaBj/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-6 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-center flex items-center justify-center text-lg transform hover:scale-105"
              >
                <span>카카오톡 상담</span>
              </a>
            </div>

            <div className="bg-white/80 rounded-xl p-6 backdrop-blur-sm">
              <p className="font-bold text-primary text-sm mb-3">💡 상담 시 안내사항</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>마지막 생리 시작일을 알려주시면 정확한 임신 주수 확인이 가능합니다</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>모든 상담 내용은 철저히 비밀이 보장됩니다</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>낙태비용 가격은 임신 주수와 수술 방법에 따라 상이하며, 상담 시 정확히 안내드립니다</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>당일 낙태수술 진행 시 금식이 필요하므로 사전 안내를 꼭 확인해주세요</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Abortion;