import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const DESKTOP_SECTION_IDS = ['ab-diagnosis', 'ab-cost', 'ab-procedure', 'ab-faq'];

const Abortion: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileTab, setMobileTab] = useState(0);
  const [activeDesktopTab, setActiveDesktopTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isScrollingToRef = useRef(false);

  const symptoms = [
    { id: 1, title: '무월경', description: '생리 예정일이 1주 이상 지났음에도 생리가 없다면 임신 가능성을 확인해보세요. 무월경은 임신의 가장 대표적인 초기 신호이며, 빠른 산부인과 방문이 중요합니다.' },
    { id: 2, title: '입덧 증상', description: '호르몬 변화로 인해 메스꺼움, 구토 등의 입덧 증상이 나타날 수 있습니다. 특히 아침에 심해지며, 특정 음식 냄새에 민감해질 수 있습니다.' },
    { id: 3, title: '유방 변화', description: '유방이 부풀고 민감해지며, 유두 색이 진해지는 등의 변화가 나타납니다. 임신 초기 호르몬 변화로 인한 자연스러운 신체 반응입니다.' },
    { id: 4, title: '피로감 증가', description: '평소보다 쉽게 피곤함을 느끼고 수면 시간이 길어질 수 있습니다. 프로게스테론 수치 상승에 따른 증상으로, 충분한 휴식이 필요합니다.' }
  ];

  const diagnosisMethods = [
    {
      id: 1,
      title: '소변 임신테스트',
      description: '관계 후 약 14일 이후부터 확인 가능하며, 아침 첫 소변으로 검사하면 정확도가 높습니다. 약국이나 편의점에서 쉽게 구입할 수 있습니다.',
      image: 'https://i.pinimg.com/1200x/ef/80/99/ef809902e5fc6d44e0b5b4b0b275637f.jpg'
    },
    {
      id: 2,
      title: '혈액 검사',
      description: '관계 후 7~10일 이후부터 임신 확인이 가능합니다. 병원에서 정확한 임신 여부와 임신 주수를 확인할 수 있습니다.',
      image: 'https://i.pinimg.com/1200x/d9/79/9c/d9799ca7fb1b102d65b04d71a62ce2f7.jpg'
    },
    {
      id: 3,
      title: '초음파 검사',
      description: '임신 5~6주차부터 태낭 확인이 가능하며, 정상 임신 여부와 정확한 임신 주수를 진단할 수 있습니다.',
      image: 'https://i.pinimg.com/736x/40/26/25/4026252f60569cf83bd9ebb54da678fe.jpg'
    }
  ];

  const procedures = [
    { step: '01', title: '초음파 검사를 통한 정확한 임신 주수 확인 및 정상 임신 여부 진단 — 임신중절수술 방법과 비용을 결정하는 핵심 단계' },
    { step: '02', title: '혈액검사·심전도 등 개인별 건강 상태 정밀 확인 및 낙태수술 전 필수 사전 검사 진행' },
    { step: '03', title: '일회용 멸균 기구만을 사용하여 감염 위험을 원천 차단하고, 무균 수술 환경을 철저히 관리' },
    { step: '04', title: '풍부한 임상 경험을 갖춘 산부인과 전문의가 자궁 내막 손상을 최소화하는 안전한 임신중절수술 직접 시행' },
    { step: '05', title: '수술 후 전용 회복실에서 1:1 케어 및 영양수액 처치를 통한 빠르고 안정적인 회복 지원' }
  ];

  const afterCare = [
    { id: 1, title: '임신중절수술 전 최소 6시간 이상 금식(물 포함)이 필수이며, 마취 안전을 위해 반드시 지켜주세요.', image: 'https://images.unsplash.com/photo-1553531889-56cc480ac5cb?w=400&q=80' },
    { id: 2, title: '낙태수술 후 최소 2주간 무리한 운동, 사우나, 성관계를 삼가고 충분한 안정을 취해주세요.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
    { id: 3, title: '수술 후 첫 월경까지 개인차가 있으며 보통 4~6주 소요됩니다. 이상 증상 시 즉시 내원해주세요.', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80' },
    { id: 4, title: '약물 알레르기·고혈압·당뇨 등 기저질환은 낙태수술 전 반드시 담당 의료진에게 알려주세요.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80' },
    { id: 5, title: '수술 후 과다 출혈이나 심한 복통 시 즉시 연락해주세요. 1:1 사후 케어로 회복까지 함께합니다.', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80' }
  ];

  const faqs = [
    {
      q: 'Q. 낙태비용은 얼마인가요?',
      a: '낙태비용은 임신 주수, 수술 방법, 마취 종류 등 여러 요인에 따라 달라집니다. 일반적으로 임신 초기(8주 미만)의 경우 임신중절수술비용 부담이 상대적으로 적으며, 주수가 증가할수록 수술 난이도와 소요 시간이 늘어나 낙태비용가격이 높아질 수 있습니다. 연세365산부인과는 초음파 검사를 통해 정확한 임신 주수를 확인한 뒤, 추가 비용 없이 투명한 중절수술가격을 1:1 상담에서 안내해드리고 있습니다. 현금과 카드 가격이 동일하며, 합리적인 낙태비용으로 경제적 부담을 최소화하기 위해 노력합니다.'
    },
    {
      q: 'Q. 낙태비용 가격은 임신 주수에 따라 어떻게 달라지나요?',
      a: '낙태비용가격은 임신 주수가 가장 큰 결정 요인입니다. 임신 8주 미만의 초기에는 중절수술가격이 45만원 수준으로 가장 낮은 가격대이며, 8주·9주·10주로 주수가 증가할수록 수술의 복잡도와 마취 시간이 늘어나 임신중절수술비용이 점진적으로 높아집니다. 이는 태아의 크기와 자궁 상태 변화에 따라 보다 정밀한 시술이 요구되기 때문입니다. 연세365산부인과는 주수별 낙태비용가격을 사전에 명확히 안내드리며, 상담 후 추가 비용이 발생하지 않는 투명한 가격 정책을 시행하고 있습니다.'
    },
    {
      q: 'Q. 낙태수술 후 회복 기간은 얼마나 걸리나요?',
      a: '대부분의 환자분들은 낙태수술 당일 귀가가 가능하며, 다음 날부터 가벼운 일상생활을 시작하실 수 있습니다. 수술 후 1~2주 정도 소량의 출혈이 있을 수 있으며, 이는 자궁이 정상적으로 회복되는 과정에서 나타나는 자연스러운 현상입니다. 연세365산부인과에서는 임신중절수술 후 1:1 사후 케어 시스템을 운영하여 회복 경과를 꼼꼼히 확인하고, 이상 증상 발생 시 신속하게 대응합니다. 무리한 활동과 음주는 최소 2주간 피하시고, 충분한 휴식과 영양 섭취를 통해 빠른 회복을 도모하시기 바랍니다.'
    },
    {
      q: 'Q. 낙태수술은 당일 진행이 가능한가요?',
      a: '네, 연세365산부인과는 당일 검사·당일 상담·당일 낙태수술이 가능한 원스톱 시스템을 운영하고 있습니다. 내원 후 초음파 검사와 혈액 검사를 통해 정확한 임신 주수와 건강 상태를 확인한 뒤, 풍부한 임상 경험을 가진 산부인과 전문의와의 1:1 상담을 거쳐 바로 수술을 진행할 수 있습니다. 다만, 수술 전 최소 6시간 이상 금식이 필수이므로 아침 일찍 방문하시거나 전날 저녁부터 금식 후 내원해주시기 바랍니다. 사전 예약 시 대기 시간 없이 보다 원활한 당일 임신중절수술 진행이 가능합니다.'
    },
    {
      q: 'Q. 임신중절수술 후 향후 임신에 영향이 있나요?',
      a: '연세365산부인과는 자궁 내막 손상을 최소화하는 최신 수술 기법을 적용하여 안전한 임신중절수술을 시행하고 있습니다. 풍부한 임상 경험을 가진 산부인과 전문의가 직접 수술을 집도하며, 수술 후 적절한 회복 기간을 거치면 향후 임신과 출산에 큰 영향을 미치지 않습니다. 수술 후에는 최소 3개월간 피임을 권장드리며, 자궁의 완전한 회복 상태를 확인하기 위해 정기 검진을 받으시는 것이 좋습니다. 임신중절수술 후 재임신 계획이 있으시다면 담당 의료진과 충분히 상담해주세요.'
    },
    {
      q: 'Q. 미성년자도 낙태수술이 가능한가요?',
      a: '만 19세 미만 미성년자의 경우, 법정대리인(부모님 또는 법적 보호자)의 동의서가 필요합니다. 다만, 성폭력 피해 등 특별한 사유가 있는 경우에는 개별 상담을 통해 진행 가능 여부를 안내해드립니다. 연세365산부인과는 모든 상담 내용과 진료 기록을 철저히 비밀 보장하며, 프라이빗한 독립 상담실에서 1:1 맞춤 상담을 진행하고 있습니다. 미성년자 환자분도 심리적 부담 없이 편안하게 상담받으실 수 있도록 세심하게 배려합니다.'
    },
    {
      q: 'Q. 낙태수술 기록이 남거나 타인에게 알려질 수 있나요?',
      a: '의료법에 따라 환자의 모든 진료 기록은 절대적으로 비밀이 보장됩니다. 낙태수술 기록은 본인의 동의 없이는 가족, 직장, 보험사 등 어떠한 제3자에게도 열람이 불가능합니다. 연세365산부인과는 독립된 프라이빗 진료 공간에서 1:1 상담과 수술을 진행하며, 접수부터 퇴원까지 타 환자와의 동선이 겹치지 않도록 철저히 관리합니다. 임신중절수술과 관련된 모든 과정에서 환자분의 프라이버시를 최우선으로 보호하오니, 안심하고 내원해주시기 바랍니다.'
    },
    {
      q: 'Q. 임신중절수술 방법은 어떻게 되나요?',
      a: '임신중절수술 방법은 임신 주수에 따라 가장 안전한 방식이 달라집니다. 임신 초기(7주 이내)에는 흡입소파술을 주로 시행하며, 그 이후에는 경관확장 후 소파술을 진행합니다. 연세365산부인과는 모든 수술에 일회용 멸균 기구만을 사용하여 감염 위험을 원천 차단하고, 풍부한 임상 경험을 가진 산부인과 전문의가 자궁 내막 손상을 최소화하는 정밀한 수술을 직접 시행합니다. 수술 전 충분한 설명과 동의 과정을 거치며, 환자분의 건강 상태에 따라 최적의 낙태수술 방법을 제안해드립니다.'
    },
    {
      q: 'Q. 낙태수술 전 준비사항은 무엇인가요?',
      a: '낙태수술 전 가장 중요한 준비사항은 최소 6시간 이상의 금식입니다. 물을 포함한 모든 음식과 음료 섭취를 중단해야 하며, 이는 마취 과정에서의 안전을 위해 반드시 지켜야 합니다. 내원 시 편안한 옷차림을 권장드리며, 수술 후 귀가 시 보호자 동반을 추천합니다. 약물 알레르기나 고혈압·당뇨 등 기저질환이 있는 경우 반드시 사전에 담당 의료진에게 알려주셔야 합니다. 생리대를 준비해 오시면 좋으며, 사전 전화 또는 카카오톡 상담을 통해 임신중절수술 당일 절차를 미리 안내받으실 수 있습니다.'
    },
    {
      q: 'Q. 임신중절수술 후 언제부터 성관계가 가능한가요?',
      a: '임신중절수술 후 최소 2주간은 성관계를 피하셔야 합니다. 자궁 내막이 완전히 회복되기 전 성관계를 하면 세균 감염 위험이 크게 높아지며, 자궁 회복에도 악영향을 줄 수 있습니다. 일반적으로 수술 후 첫 월경이 돌아온 이후(약 4~6주)부터 정상적인 성생활이 가능하며, 이후에도 반드시 피임을 실천하시기 바랍니다. 연세365산부인과에서는 낙태수술 후 경과 확인을 위한 후속 진료를 안내드리고 있으니, 회복 상태에 대해 궁금하신 점이 있으시면 언제든 연락해주세요.'
    },
    {
      q: 'Q. 임신중절수술비용에 포함되는 항목은 무엇인가요?',
      a: '연세365산부인과의 임신중절수술비용에는 수술비, 마취비, 수술 후 영양수액 처치비가 모두 포함되어 있습니다. 현금과 카드 가격이 동일하며, 상담 시 안내받은 중절수술가격 외에 추가 비용은 발생하지 않습니다. 선택 항목으로 유착방지제(5만원)가 있으며, 이는 수술 후 자궁 내 유착을 예방하여 향후 임신 가능성을 보호하는 데 도움이 됩니다. 낙태비용 부담을 최소화하기 위해 불필요한 검사나 추가 시술을 권하지 않으며, 환자분이 납득하신 범위 내에서만 진행합니다.'
    },
    {
      q: 'Q. 임신 몇 주까지 낙태수술이 가능한가요?',
      a: '임신중절수술은 임신 주수가 적을수록 수술이 간단하고 회복이 빠르며, 낙태비용가격 부담도 적습니다. 일반적으로 임신 14주 이내가 가장 안전한 시기이며, 모자보건법에 따라 14주 이내에는 본인의 결정으로 수술이 가능합니다. 임신 15주 이후에는 법적 허용 사유에 해당하는 경우에만 시행할 수 있으며, 수술 방법과 위험도가 달라집니다. 결정을 내리셨다면 가능한 한 빨리 내원하시는 것이 안전하며, 정확한 임신 주수는 초음파 검사를 통해서만 확인이 가능합니다.'
    },
    {
      q: 'Q. 낙태수술 시 통증이 심한가요?',
      a: '연세365산부인과에서는 수면마취(정맥마취) 하에 낙태수술을 진행하므로, 수술 중 통증을 거의 느끼지 않습니다. 수면마취는 전신마취와 달리 마취 깊이가 얕아 회복이 빠르며, 수술 후 30분~1시간 내에 의식이 완전히 회복됩니다. 수술 후에는 경미한 하복부 통증이 있을 수 있으나, 처방된 진통제로 충분히 관리 가능한 수준입니다. 풍부한 임상 경험을 가진 산부인과 전문의가 숙련된 기술로 수술 시간을 최소화하여 신체적 부담을 줄이고 있습니다.'
    },
    {
      q: 'Q. 낙태와 임신중절의 차이점은 무엇인가요?',
      a: '의학적으로 낙태와 임신중절은 동일한 의미를 가지며, 공식 의학 용어로는 "인공임신중절"이라고 합니다. 낙태는 일반적으로 널리 사용되는 표현이고, 임신중절은 의료 현장에서 사용하는 중립적이고 정확한 용어입니다. 연세365산부인과에서 시행하는 임신중절수술은 모자보건법에 따라 합법적으로 시행되며, 풍부한 임상 경험을 가진 산부인과 전문의가 최신 의료 장비를 활용하여 안전하게 수술을 진행합니다. 낙태수술의 방법, 낙태비용, 회복 과정 등에 대해 궁금하신 점은 1:1 상담을 통해 자세히 안내받으실 수 있습니다.'
    },
    {
      q: 'Q. 임신중절수술 후 사후관리는 어떻게 이루어지나요?',
      a: '연세365산부인과는 임신중절수술 후 체계적인 1:1 사후 케어 시스템을 운영하고 있습니다. 수술 직후 전용 회복실에서 활력 징후를 모니터링하며, 영양수액 처치를 통해 체력 회복을 돕습니다. 퇴원 시에는 회복 기간 동안의 주의사항과 복용 약물에 대해 상세히 안내드리며, 수술 후 이상 증상 발생 시 전화 상담이 가능합니다. 또한 수술 1~2주 후 경과 확인을 위한 후속 진료를 권장드리고 있어, 낙태수술 후에도 자궁이 완전히 회복될 때까지 지속적으로 관리해드립니다. 모든 사후 관리 과정에서도 철저한 비밀 보장이 이루어집니다.'
    },
    {
      q: 'Q. 중절수술가격이 병원마다 다른 이유는 무엇인가요?',
      a: '중절수술가격은 병원의 의료진 경력, 시설 수준, 마취 방법, 사용 기구(일회용 여부), 사후 관리 범위에 따라 차이가 날 수 있습니다. 극단적으로 저렴한 낙태비용가격을 내세우는 곳은 재사용 기구 사용, 사후 관리 부재, 비전문의 시술 등의 위험이 있을 수 있으므로 주의가 필요합니다. 연세365산부인과는 일회용 멸균 기구만 사용하고, 풍부한 임상 경험을 가진 산부인과 전문의가 직접 수술을 시행하며, 수술 후 1:1 사후 케어를 포함한 합리적인 임신중절수술비용을 제공합니다. 안전과 합리적 가격, 두 가지를 모두 갖춘 신뢰할 수 있는 병원을 선택하시기 바랍니다.'
    }
  ];

  const costData = [
    { weeks: '8주미만', price: '45', note: '수술비+영양제' },
    { weeks: '8주', price: '60', note: '수술비+영양제' },
    { weeks: '9주', price: '70', note: '수술비+영양제' },
    { weeks: '10주', price: '80', note: '수술비+영양제' },
  ];

  const tabLabels = ['확인방법', '비용안내', '수술안내', 'FAQ'];

  const desktopTabs = [
    { label: '확인방법', sectionId: 'ab-diagnosis' },
    { label: '비용안내', sectionId: 'ab-cost' },
    { label: '수술안내', sectionId: 'ab-procedure' },
    { label: 'FAQ', sectionId: 'ab-faq' },
  ];

  // Desktop scroll spy — tracks which sub-section is in view
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingToRef.current) return;

      // Only run when inside the abortion section
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) return;
      }

      const offset = 120;
      for (let i = DESKTOP_SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(DESKTOP_SECTION_IDS[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveDesktopTab(i);
            return;
          }
        }
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smooth scroll to desktop sub-section on tab click
  const scrollToDesktopSection = useCallback((idx: number) => {
    const el = document.getElementById(DESKTOP_SECTION_IDS[idx]);
    if (el) {
      setActiveDesktopTab(idx);
      isScrollingToRef.current = true;
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
      setTimeout(() => { isScrollingToRef.current = false; }, 1000);
    }
  }, []);

  return (
    <section id="abortion-clinic" ref={sectionRef} className="relative py-20 md:py-32 bg-white z-10">
      <div className="container mx-auto px-5 md:px-12">
        
        {/* 섹션 타이틀 — 공통 */}
        <div className="text-center mb-8 md:mb-20">
          <span className="text-primary text-sm font-bold tracking-widest block mb-4 uppercase">
            Safe Abortion Clinic
          </span>
          <h2 className="text-2xl md:text-5xl font-bold text-primary font-serif mb-4 md:mb-6">
            임신중절 클리닉
          </h2>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
            <span className="md:hidden">
              연세365산부인과는<br />여성의 건강과 안전을<br />최우선으로 생각합니다.<br />
              <strong className="text-gray-700">안전한 낙태수술</strong>,<br />
              합리적인 <strong className="text-gray-700">낙태비용</strong>,<br />
              철저한 비밀 보장까지.
            </span>
            <span className="hidden md:inline">
              연세365산부인과는 여성의 건강과 안전을 최우선으로 생각합니다.<br />
              풍부한 임상 경험을 가진 산부인과 전문의가 <strong>안전한 임신중절수술</strong>을 직접 시행하며,<br />
              합리적인 <strong>낙태비용</strong>과 투명한 <strong>중절수술가격</strong> 안내, 철저한 비밀 보장과 1:1 사후 케어를 통해<br />
              환자분의 신체적·심리적 부담을 최소화하고 빠른 회복을 돕고 있습니다.
            </span>
          </p>
        </div>

        {/* 상담 버튼 — 모바일: 간편예약만 / PC: 두 개 모두 */}
        <div className="flex flex-row items-center justify-center gap-2 md:gap-4 mb-8 md:mb-16">
          <a 
            href="http://pf.kakao.com/_TpaBj/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex group items-center justify-center whitespace-nowrap h-[56px] gap-2 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-600 text-white font-bold text-lg px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0 group-hover:rotate-12 transition-transform" />
            카카오톡 빠른 상담
          </a>
          <button
            onClick={() => window.dispatchEvent(new Event('open-consult-modal'))}
            className="group inline-flex items-center justify-center whitespace-nowrap h-[40px] md:h-[56px] gap-1.5 md:gap-2 bg-white/50 hover:bg-white/70 backdrop-blur-sm text-primary font-bold text-xs md:text-lg px-5 md:px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg border-2 border-primary/30"
          >
            <svg className="w-3.5 h-3.5 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
            </svg>
            <span className="md:hidden">간편 예약</span>
            <span className="hidden md:inline">간편 상담예약</span>
          </button>
        </div>


        {/* =============================================================== */}
        {/* ===== MOBILE — 통합 탭 시스템 ===== */}
        {/* =============================================================== */}
        <div className="md:hidden">
          {/* 탭 바 — Hybrid Sticky Glass Tab */}
          <div className="sticky top-0 z-40 -mx-5 px-3 pt-2 pb-2 mb-4 pointer-events-none">
            <div className="bg-white/70 backdrop-blur-2xl rounded-full border border-primary/10 shadow-lg shadow-primary/5 p-1 flex pointer-events-auto">
              {tabLabels.map((label, idx) => (
                <button
                  key={idx}
                  onClick={() => { setMobileTab(idx); setExpandedFaq(null); }}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-full transition-colors duration-300 relative ${
                    mobileTab === idx ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  <span className="relative z-10">{label}</span>
                  {mobileTab === idx && (
                    <motion.div
                      layoutId="abortion-tab"
                      className="absolute inset-0 bg-primary rounded-full shadow-md shadow-primary/25"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 탭 컨텐츠 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {/* ── Tab 0: 확인방법 ── */}
              {mobileTab === 0 && (
                <>
                  {/* 임신 초기 증상 */}
                  <div className="mb-10">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">임신 초기 증상</h3>
                    <p className="text-center text-gray-500 mb-6 text-xs">
                      다음 증상이 있다면<br />임신 가능성을 확인해보세요
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {symptoms.map((s) => (
                        <div key={s.id} className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-purple-100 flex items-center justify-center mb-2 border-2 border-white shadow">
                            <span className="text-xl font-bold text-primary/80">0{s.id}</span>
                          </div>
                          <h4 className="font-bold text-sm text-gray-800 mb-1">{s.title}</h4>
                          <p className="text-[11px] text-gray-600 leading-relaxed">{s.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 임신 확인 방법 — 가로 카드 */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">임신 확인 방법</h3>
                    <div className="space-y-3">
                      {diagnosisMethods.map((m) => (
                        <div key={m.id} className="bg-white rounded-xl overflow-hidden shadow border border-primary/10 flex">
                          <div className="w-24 flex-shrink-0">
                            <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-3 flex-1 min-w-0">
                            <h4 className="font-bold text-sm text-gray-800 mb-1">{m.title}</h4>
                            <p className="text-[11px] text-gray-600 leading-relaxed">{m.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 당일 타임라인 — 콤팩트 가로 */}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {['당일 검사', '당일 상담', '당일 수술'].map((step, idx) => (
                      <React.Fragment key={step}>
                        <div className="w-16 h-16 rounded-full border-[3px] border-primary/30 bg-white flex items-center justify-center shadow">
                          <span className="font-bold text-[10px] text-gray-800 text-center leading-tight">{step}</span>
                        </div>
                        {idx < 2 && <span className="text-primary text-base font-bold">▶</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <p className="text-center text-gray-400 text-[10px] mt-2 mb-4">
                    ※ 당일 수술 가능 여부는 검사 결과에 따라 달라질 수 있습니다
                  </p>
                </>
              )}

              {/* ── Tab 1: 비용안내 ── */}
              {mobileTab === 1 && (
                <>
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden border border-primary/10">
                  <div className="pt-8 pb-4 px-5 text-center">
                    <span className="inline-block bg-primary text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full shadow-md mb-4 uppercase">
                      사당역 4번출구 연세365산부인과
                    </span>
                    <h3 className="text-2xl font-bold leading-tight font-serif">
                      <span className="text-primary">임신</span>
                      <span className="text-gray-800">중절 비용안내</span>
                    </h3>
                  </div>
                  <div className="px-6 pb-3">
                    {costData.map((item, idx) => (
                      <div key={idx} className={`flex items-center justify-between py-4 ${idx !== 3 ? 'border-b border-primary/10' : ''}`}>
                        <div>
                          <span className="text-base font-bold text-gray-800">{item.weeks}</span>
                          <span className="block text-primary text-[10px] font-semibold mt-0.5">{item.note}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-primary">{item.price}</span>
                          <span className="text-sm font-bold text-gray-700 ml-0.5">만원</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm px-5 py-3 flex flex-col items-center gap-1 text-[10px] text-gray-600 font-medium">
                    <span className="flex items-center gap-1"><span className="text-primary font-bold">•</span>현금 카드 가격 통일</span>
                    <span className="flex items-center gap-1"><span className="text-primary font-bold">•</span>선택사항 : 유착방지제 5만원</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white/80 rounded-xl border border-primary/5">
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    <strong className="text-gray-700">낙태비용</strong>은 임신 주수에 따라 달라지며, 주수가 적을수록 <strong className="text-gray-700">임신중절수술비용</strong> 부담이 낮아집니다. 연세365산부인과는 초음파 검사 후 정확한 주수를 확인하여 추가 비용 없이 투명한 <strong className="text-gray-700">중절수술가격</strong>을 안내합니다. 풍부한 임상 경험을 가진 산부인과 전문의의 숙련된 수술과 합리적인 <strong className="text-gray-700">낙태비용가격</strong>으로 경제적·신체적 부담을 최소화합니다.
                  </p>
                </div>
                </>
              )}

              {/* ── Tab 2: 수술안내 ── */}
              {mobileTab === 2 && (
                <>
                  <div className="mb-10">
                    <h3 className="text-lg font-bold text-center text-gray-800 mb-2">안전한 <strong>임신중절수술</strong> 절차</h3>
                    <p className="text-center text-gray-500 mb-6 text-[11px]">
                      풍부한 임상 경험의<br />산부인과 전문의가 직접 시행
                    </p>
                    <div className="space-y-3">
                      {procedures.map((proc) => (
                        <div key={proc.step} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-l-4 border-primary flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-primary">{proc.step}</span>
                          </div>
                          <p className="text-gray-700 text-sm font-medium leading-relaxed pt-2">{proc.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-center text-gray-800 mb-2"><strong>낙태수술</strong> 전후 주의사항</h3>
                    <p className="text-center text-gray-500 mb-6 text-[11px]">빠른 회복을 위해 꼭 지켜주세요</p>
                    <div className="space-y-3">
                      {afterCare.map((care) => (
                        <div key={care.id} className="flex items-start gap-3 bg-white rounded-xl p-3 shadow-sm border border-primary/5">
                          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                            <img src={care.image} alt={care.title} className="w-full h-full object-cover" />
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed pt-1 flex-1">{care.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-purple-50 rounded-xl border border-primary/10">
                    <h4 className="font-bold text-sm text-gray-800 mb-2">🔒 철저한 비밀 보장 & 1:1 사후 케어</h4>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      연세365산부인과는 <strong className="text-gray-700">낙태수술</strong> 후 전용 회복실에서 1:1 케어를 제공하며, 퇴원 후에도 전화 상담과 후속 진료를 통해 완전한 회복을 돕습니다. 접수부터 퇴원까지 모든 과정에서 <strong className="text-gray-700">철저한 비밀 보장</strong>이 이루어지며, 풍부한 임상 경험을 가진 산부인과 전문의가 <strong className="text-gray-700">임신중절수술</strong>을 직접 시행합니다.
                    </p>
                  </div>
                </>
              )}

              {/* ── Tab 3: FAQ (아코디언 + framer-motion) ── */}
              {mobileTab === 3 && (
                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between"
                      >
                        <span className="font-bold text-sm text-gray-800 pr-3 leading-snug">{faq.q}</span>
                        <motion.span
                          animate={{ rotate: expandedFaq === idx ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-primary text-xl flex-shrink-0 font-bold leading-none"
                        >+</motion.span>
                      </button>
                      <AnimatePresence>
                        {expandedFaq === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 pt-1">
                              <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* 법적 정보 — 모바일 콤팩트 */}
          <div className="mt-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-5 border border-primary/10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">⚖️</span>
              <h3 className="text-base font-bold text-gray-800">안전한 <strong>임신중절수술</strong> 안내</h3>
            </div>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-3">
              2021년 1월부터 모자보건법 개정에 따라 임신 14주 이내의 <strong>낙태수술</strong>은 본인의 결정으로 가능합니다. 연세365산부인과는 의료법을 준수하며 풍부한 임상 경험을 가진 산부인과 전문의가 안전하게 <strong>임신중절</strong> 수술을 시행합니다.
            </p>
            <div className="bg-white/80 rounded-lg p-3">
              <h4 className="font-bold text-primary text-[11px] mb-2">[모자보건법 제14조]</h4>
              <ul className="space-y-1 text-[10px] text-gray-600">
                <li>1. 우생학적·유전학적 질환이 있는 경우</li>
                <li>2. 전염성 질환이 있는 경우</li>
                <li>3. 강간·준강간에 의한 임신</li>
                <li>4. 혼인할 수 없는 혈족간 임신</li>
                <li>5. 모체 건강을 심각하게 해칠 우려</li>
              </ul>
            </div>
          </div>

          {/* 진료 예약 — 모바일 콤팩트 (간편예약 버튼 하나로 통합) */}
          <div className="mt-6 bg-gradient-to-br from-primary/5 to-purple-50 rounded-xl p-5 border border-primary/10">
            <h3 className="text-base font-bold text-center text-gray-800 mb-2"><strong>임신중절수술</strong> 예약 및 상담</h3>
            <p className="text-center text-gray-500 text-[11px] mb-4">사전 예약제 · 모든 상담 내용 철저히 비밀 보장</p>
            <button
              onClick={() => window.dispatchEvent(new Event('open-consult-modal'))}
              className="w-full inline-flex items-center justify-center gap-1.5 h-[40px] bg-white/50 hover:bg-white/70 backdrop-blur-sm text-primary font-bold text-xs rounded-full border-2 border-primary/30 shadow-sm active:scale-95 transition-all mb-4"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
              </svg>
              간편 예약
            </button>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="font-bold text-primary text-[10px] mb-2">💡 상담 시 안내사항</p>
              <ul className="space-y-1 text-[10px] text-gray-600">
                <li>• 마지막 생리 시작일을 알려주세요</li>
                <li>• 모든 상담 내용은 철저히 비밀 보장됩니다</li>
                <li>• <strong>낙태비용</strong>은 주수 확인 후 정확히 안내드립니다</li>
                <li>• 당일 <strong>낙태수술</strong> 시 6시간 금식 필요</li>
                <li>• 풍부한 임상 경험의 산부인과 전문의 직접 상담</li>
              </ul>
            </div>
          </div>
        </div>


        {/* =============================================================== */}
        {/* ===== DESKTOP — 기존 모든 섹션 그대로 유지 ===== */}
        {/* =============================================================== */}
        <div className="hidden md:block">

          {/* Desktop Hybrid Sticky Tab Bar */}
          <div className="sticky top-0 z-40 py-3 pointer-events-none">
            <div className="max-w-lg mx-auto bg-white/70 backdrop-blur-2xl rounded-full border border-primary/10 shadow-lg shadow-primary/5 p-1.5 pointer-events-auto">
              <div className="flex items-center justify-center">
                {desktopTabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToDesktopSection(idx)}
                    className={`relative flex-1 px-6 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 ${
                      activeDesktopTab === idx ? 'text-white' : 'text-gray-500 hover:text-primary'
                    }`}
                  >
                    <span className="relative z-10">{tab.label}</span>
                    {activeDesktopTab === idx && (
                      <motion.div
                        layoutId="desktopAbTab"
                        className="absolute inset-0 bg-primary rounded-full shadow-md shadow-primary/25"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 임신중절수술 법적 정보 */}
          <div id="ab-diagnosis" className="max-w-5xl mx-auto mb-16 scroll-mt-20">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-primary/10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">⚖️</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">안전한 <strong>임신중절수술</strong> 안내</h3>
              <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                2021년 1월부터 모자보건법 개정에 따라 임신 14주 이내의 <strong>낙태수술</strong>은 본인의 결정으로 가능하며,<br />
                임신 15주~24주의 경우 아래 사유에 해당될 시 진행할 수 있습니다.<br />
                연세365산부인과는 의료법을 철저히 준수하며, 풍부한 임상 경험을 가진 산부인과 전문의가<br />
                투명한 <strong>낙태비용가격</strong> 안내와 함께 안전하고 세심한 <strong>임신중절</strong> 진료를 시행하고 있습니다.
              </p>
              
              <div className="bg-white/80 rounded-xl p-6 backdrop-blur-sm max-w-3xl mx-auto text-left">
                <h4 className="font-bold text-primary mb-3 text-lg text-center">[모자보건법 제14조 - 인공임신중절 허용 사유]</h4>
                <ul className="space-y-2 text-sm text-gray-700 inline-block">
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

          {/* 임신초기증상 */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4"><strong>임신</strong> 초기 증상 체크리스트</h3>
            <p className="text-center text-gray-600 mb-12 text-sm">다음과 같은 증상이 있다면 임신 가능성을 확인해보세요. 빠른 확인이 안전한 <strong>임신중절</strong> 결정에 중요합니다.</p>
            <div className="grid grid-cols-4 gap-8">
              {symptoms.map((symptom, idx) => (
                <motion.div
                  key={symptom.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-purple-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                    <span className="text-5xl font-bold text-primary/80">0{symptom.id}</span>
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{symptom.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{symptom.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 임신 확인 방법 */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">임신 확인 방법</h3>
            <p className="text-center text-gray-600 mb-12 text-sm">정확한 임신 주수 확인은 안전한 <strong>임신중절수술</strong>과 합리적인 <strong>낙태비용</strong> 산정의 첫 단계입니다</p>
            
            <div className="grid grid-cols-3 gap-6 mb-12">
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
                  <div className="p-6 text-center">
                    <h4 className="font-bold text-xl text-gray-800 mb-3">{method.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-8 flex-wrap">
              {['당일 검사', '당일 상담', '당일 수술'].map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full border-4 border-primary/30 bg-white flex items-center justify-center shadow-lg">
                      <span className="font-bold text-lg text-gray-800 text-center px-2">{step}</span>
                    </div>
                  </div>
                  {idx < 2 && (
                    <div className="text-primary text-3xl font-bold">▶</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              ※ 당일 <strong>낙태수술</strong> 가능 여부는 검사 결과에 따라 달라질 수 있으며, <strong>낙태비용</strong>은 1:1 상담 시 투명하게 안내드립니다
            </p>
          </div>

          {/* ========== 임신중절 비용안내 ========== */}
          <div id="ab-cost" className="max-w-xl mx-auto mb-16 scroll-mt-20">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden border border-primary/10">

              {/* 상단 타이틀 영역 */}
              <div className="pt-10 pb-6 px-6 md:px-10 text-center">
                <span className="inline-block bg-primary text-white text-xs md:text-sm font-bold tracking-widest px-6 py-2 rounded-full shadow-md mb-6 uppercase">
                  사당역 4번출구 연세365산부인과
                </span>
                <h3 className="text-3xl md:text-5xl font-bold leading-tight font-serif">
                  <span className="text-primary">임신</span>
                  <span className="text-gray-800">중절 비용안내</span>
                </h3>
              </div>

              {/* 비용 리스트 */}
              <div className="px-8 md:px-12 pb-4">
                {costData.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between py-5 md:py-6 ${
                      idx !== 3 ? 'border-b border-primary/10' : ''
                    }`}
                  >
                    <div>
                      <span className="text-lg md:text-xl font-bold text-gray-800">{item.weeks}</span>
                      <span className="block text-primary text-xs font-semibold mt-0.5">{item.note}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl md:text-3xl font-bold text-primary">{item.price}</span>
                      <span className="text-sm md:text-base font-bold text-gray-700 ml-1">만원</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 하단 유의사항 */}
              <div className="bg-white/60 backdrop-blur-sm px-6 md:px-10 py-4 flex flex-row items-center justify-center gap-6 text-xs md:text-sm text-gray-600 font-medium">
                <span className="flex items-center gap-1">
                  <span className="text-primary font-bold">•</span>현금 카드 가격 통일
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-primary font-bold">•</span>선택사항 : 유착방지제 5만원
                </span>
              </div>
            </div>
            {/* 비용 상세 안내 */}
            <div className="mt-8 bg-white rounded-xl p-6 md:p-8 border border-primary/10 shadow-sm">
              <h4 className="font-bold text-lg text-gray-800 mb-4 text-center">💡 <strong>임신중절수술비용</strong> 결정 요인 안내</h4>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-800">낙태비용</strong>은 임신 주수가 가장 큰 결정 요인입니다. 임신 초기에는 태아의 크기가 작아 수술 시간이 짧고 시술이 비교적 간단하므로 <strong>중절수술가격</strong> 부담이 낮지만, 주수가 증가할수록 수술 난이도와 마취 시간이 늘어나 <strong>낙태비용가격</strong>이 높아지게 됩니다.
                </p>
                <p>
                  연세365산부인과는 <strong className="text-gray-800">합리적인 임신중절수술비용</strong>을 통해 환자분의 경제적 부담을 최소화하는 데 최선을 다하고 있습니다. 불필요한 추가 검사나 시술을 권하지 않으며, 상담 시 안내받은 <strong>낙태비용</strong> 외에 숨겨진 비용은 일절 없습니다. 현금과 카드 가격이 동일하며, 풍부한 임상 경험을 가진 산부인과 전문의가 직접 수술을 시행합니다.
                </p>
                <p className="text-primary font-semibold text-xs">
                  ※ 정확한 <strong>낙태비용가격</strong>은 초음파 검사를 통해 임신 주수를 확인한 후 1:1 상담에서 안내드립니다.
                </p>
              </div>
            </div>
          </div>

          {/* 안전한 수술 진행 절차 */}
          <div id="ab-procedure" className="max-w-5xl mx-auto mb-16 scroll-mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">안전한 <strong>임신중절수술</strong> 절차</h3>
            <p className="text-center text-gray-600 mb-6 text-sm">연세365산부인과는 체계적인 <strong>낙태수술</strong> 프로세스로 환자 안전을 최우선으로 지킵니다</p>
            <p className="text-center text-gray-500 mb-12 text-sm max-w-3xl mx-auto leading-relaxed">
              풍부한 임상 경험을 가진 산부인과 전문의가 모든 <strong>임신중절수술</strong>을 직접 집도하며,<br />
              일회용 멸균 기구만을 사용한 무균 환경과 정밀한 수술 기법으로 자궁 내막 손상을 최소화합니다.
            </p>
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
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4"><strong>낙태수술</strong> 전후 주의사항</h3>
            <p className="text-center text-gray-600 mb-6 text-sm">빠른 회복을 위해 아래 사항을 꼭 지켜주세요</p>
            <p className="text-center text-gray-500 mb-12 text-sm max-w-3xl mx-auto leading-relaxed">
              연세365산부인과는 <strong>임신중절수술</strong> 후 체계적인 <strong>1:1 사후 케어 시스템</strong>을 운영합니다.<br />
              수술 직후 전용 회복실에서 활력 징후를 모니터링하고, 퇴원 후에도 전화 상담과 후속 진료를 통해<br />
              자궁이 완전히 회복될 때까지 지속적으로 관리합니다. 모든 과정에서 <strong>철저한 비밀 보장</strong>이 이루어집니다.
            </p>
            <div className="grid grid-cols-5 gap-8">
              {afterCare.map((care, idx) => (
                <motion.div
                  key={care.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg">
                    <img src={care.image} alt={care.title} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed px-2">{care.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 자주 묻는 질문 */}
          <div id="ab-faq" className="max-w-4xl mx-auto mb-16 scroll-mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4"><strong>낙태수술</strong>·<strong>낙태비용</strong> 자주 묻는 질문</h3>
            <p className="text-center text-gray-600 mb-12 text-sm"><strong>임신중절수술비용</strong>, <strong>중절수술가격</strong>, 수술 방법, 회복 과정 등 환자분들이 가장 궁금해하시는 질문을 모았습니다</p>
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
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4"><strong>임신중절수술</strong> 진료 예약 및 상담</h3>
              <p className="text-center text-gray-600 mb-8">
                <strong>임신중절수술</strong> 및 <strong>낙태비용</strong> 상담은 사전 예약제로 운영됩니다.<br />
                풍부한 임상 경험을 가진 산부인과 전문의와의 프라이빗한 1:1 상담을 원하시는 분은 아래 방법으로 예약해주세요.<br />
                모든 상담 내용과 진료 기록은 철저히 비밀 보장됩니다.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
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
                    <span>모든 상담 내용과 <strong>낙태수술</strong> 기록은 철저히 비밀이 보장됩니다</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>낙태비용가격</strong>은 임신 주수와 수술 방법에 따라 상이하며, 추가 비용 없이 상담 시 정확히 안내드립니다</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>당일 <strong>임신중절수술</strong> 진행 시 최소 6시간 금식이 필요하므로 사전 안내를 꼭 확인해주세요</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>풍부한 임상 경험을 가진 산부인과 전문의가 직접 1:1 상담과 수술을 진행합니다</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Abortion;
