'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

/* ================================================================
   Static Data — 컴포넌트 밖에 선언하여 JSON-LD useEffect 등에서 안정적 참조
   ================================================================ */

const DESKTOP_SECTION_IDS = ['ab-cost', 'ab-diagnosis', 'ab-procedure', 'ab-faq'];

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
    image: 'https://i.pinimg.com/1200x/ef/80/99/ef809902e5fc6d44e0b5b4b0b275637f.jpg',
    alt: '소변 임신테스트기를 이용한 자가 임신 확인 방법 안내 - 연세365산부인과의원'
  },
  {
    id: 2,
    title: '혈액 검사',
    description: '관계 후 7~10일 이후부터 임신 확인이 가능합니다. 병원에서 정확한 임신 여부와 임신 주수를 확인할 수 있습니다.',
    image: 'https://i.pinimg.com/1200x/d9/79/9c/d9799ca7fb1b102d65b04d71a62ce2f7.jpg',
    alt: '산부인과 혈액 검사를 통한 정밀 임신 확인 및 주수 판정 - 연세365산부인과의원'
  },
  {
    id: 3,
    title: '초음파 검사',
    description: '임신 5~6주차부터 태낭 확인이 가능하며, 정상 임신 여부와 정확한 임신 주수를 진단할 수 있습니다.',
    image: 'https://i.pinimg.com/736x/40/26/25/4026252f60569cf83bd9ebb54da678fe.jpg',
    alt: '초음파 검사로 정확한 임신 주수 확인 및 정상 임신 진단 - 연세365산부인과의원'
  }
];

const procedures = [
  { step: '01', title: '초음파 검사를 통한 정확한 임신 주수 확인 및 정상 임신 여부 진단 — 임신중절수술 방법과 비용을 결정하는 핵심 단계' },
  { step: '02', title: '혈액검사 등 개인별 건강 상태 정밀 확인 및 낙태수술 전 필수 사전 검사 진행' },
  { step: '03', title: '감염 예방 원칙에 따라 멸균 기구를 사용하고 수술 환경을 관리' },
  { step: '04', title: '풍부한 임상 경험을 갖춘 산부인과 전문의가 자궁 내막 손상을 최소화하는 안전한 임신중절수술 직접 시행' },
  { step: '05', title: '수술 후 전용 회복실에서 1:1 케어 및 영양수액 처치를 통한 빠르고 안정적인 회복 지원' }
];

const afterCare = [
  { id: 1, title: '임신중절수술 전 최소 6시간 이상 금식(물 포함)이 필수이며, 마취 안전을 위해 반드시 지켜주세요.', image: 'https://images.unsplash.com/photo-1553531889-56cc480ac5cb?w=400&q=80', alt: '임신중절수술 전 금식 안내 - 안전한 마취를 위한 필수 준비사항' },
  { id: 2, title: '낙태수술 후 최소 2주간 무리한 운동, 사우나를 삼가고 충분한 안정을 취해주세요.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', alt: '낙태수술 후 회복 기간 안내 - 최소 2주간 안정 권고' },
  { id: 3, title: '수술 후 첫 월경까지 개인차가 있으며 보통 4~6주 소요됩니다. 이상 증상 시 즉시 내원해주세요.', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80', alt: '임신중절수술 후 월경 회복 안내 - 이상 증상 시 즉시 내원 안내' },
  { id: 4, title: '약물 알레르기·고혈압·당뇨 등 기저질환은 낙태수술 전 반드시 담당 의료진에게 알려주세요.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80', alt: '낙태수술 전 기저질환 고지 안내 - 환자 안전을 위한 필수 확인사항' },
  { id: 5, title: '수술 후 과다 출혈이나 심한 복통 시 즉시 연락해주세요. 1:1 사후 케어로 회복까지 함께합니다.', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80', alt: '임신중절수술 후 응급 상황 대처 안내 - 1:1 사후 케어 시스템 운영' }
];

const faqs = [
  {
    q: 'Q. 임신중절수술 금액은 얼마인가요?',
    a: '임신중절수술 안내 금액은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 정확한 주수와 필요한 검사·마취·처치에 따라 최종 금액과 포함 항목이 달라질 수 있으므로 초음파 확인 후 상담에서 안내드립니다.'
  },
  {
    q: 'Q. 낙태비용 가격은 임신 주수에 따라 어떻게 달라지나요?',
    a: '낙태비용가격과 임신중절수술비용은 초음파로 확인한 임신 주수, 수술 방법과 필요한 검사·처치에 따라 달라질 수 있습니다. 기본 안내 금액과 포함 항목은 상담 전에 설명드리며, 최종 중절수술가격은 검사 결과를 확인한 뒤 안내합니다.'
  },
  {
    q: 'Q. 낙태수술 후 회복 기간은 얼마나 걸리나요?',
    a: '낙태수술 후 귀가 시점, 출혈·통증과 일상 복귀 시점에는 개인차가 있습니다. 활동 제한과 약 복용은 진료 후 안내를 따르고, 고열·심한 복통·어지럼증이나 과다출혈 등 이상 증상이 있으면 즉시 의료기관에 연락하거나 진료를 받아야 합니다.'
  },
  {
    q: 'Q. 낙태수술은 당일 진행이 가능한가요?',
    a: '당일 상담은 예약 상황에 따라 가능할 수 있습니다. 당일 낙태수술 가능 여부는 초음파와 필요한 검사, 임신 주수, 건강 상태, 금식 여부와 의료진 판단에 따라 결정됩니다. 방문 전에 진료시간, 예약 가능 여부와 금식 등 준비사항을 확인하시기 바랍니다.'
  },
  {
    q: 'Q. 임신중절수술 후 향후 임신에 영향이 있나요?',
    a: '임신중절수술 후 향후 임신에 미치는 영향은 수술 방법, 임신 주수, 합병증 여부와 개인 건강 상태에 따라 달라질 수 있습니다. 재임신 계획과 피임 기간은 사후 진료에서 회복 상태를 확인한 뒤 담당 의료진과 상담하시기 바랍니다.'
  },
  {
    q: 'Q. 미성년자도 낙태수술이 가능한가요?',
    a: '미성년자는 본인만으로도 상담을 요청할 수 있습니다. 실제 진료·수술에 필요한 동의와 서류는 연령, 의료행위와 개별 상황에 따라 달라질 수 있으므로 예약 상담에서 확인해야 합니다. 성폭력·가정폭력 등 안전 문제가 있다면 의료기관과 관계 전문기관에 상황을 알려 필요한 보호와 절차를 안내받으시기 바랍니다.'
  },
  {
    q: 'Q. 낙태수술 기록이 남거나 타인에게 알려질 수 있나요?',
    a: '진료 기록과 개인정보는 의료법 등 관계 법령과 의료기관의 개인정보 처리 기준에 따라 보호됩니다. 다만 환자 동의, 법령상 제출 의무 등 예외가 있을 수 있습니다. 기록 열람·발급과 개인정보 처리 방법은 상담 전에 의료기관에 확인하시기 바랍니다.'
  },
  {
    q: 'Q. 임신중절수술 방법은 어떻게 되나요?',
    a: '임신중절수술 방법은 초음파로 확인한 임신 주수, 자궁 상태, 기저질환과 검사 결과를 종합해 의료진이 결정합니다. 특정 방법을 일률적으로 가장 안전하다고 단정할 수 없으며, 상담 시 예상 과정, 대안, 부작용과 주의사항을 함께 확인해야 합니다.'
  },
  {
    q: 'Q. 낙태수술 전 준비사항은 무엇인가요?',
    a: '금식 시간과 준비물은 예정된 마취 방법, 건강 상태와 복용 약물에 따라 달라질 수 있으므로 예약 시 받은 안내를 우선 따라야 합니다. 약물 알레르기, 기저질환과 복용 중인 약을 의료진에게 알리고 수면마취가 예정된 경우 안전한 귀가 방법도 준비하시기 바랍니다.'
  },
  {
    q: 'Q. 임신중절수술 후 언제부터 성관계가 가능한가요?',
    a: '성관계 재개 시점은 수술 방법, 출혈 여부와 회복 상태에 따라 달라질 수 있습니다. 임의로 기간을 정하기보다 사후 진료에서 의료진에게 확인하고, 피임 계획도 함께 상담하시기 바랍니다.'
  },
  {
    q: 'Q. 임신중절수술비용에 포함되는 항목은 무엇인가요?',
    a: '임신중절수술비용의 포함 항목은 주수, 검사 결과와 선택한 처치에 따라 달라질 수 있습니다. 현금과 카드의 기본 안내 금액은 동일하며, 수술비·마취비·검사비·약제비와 선택 항목의 포함 여부는 진료 전 상담에서 확인하시기 바랍니다.'
  },
  {
    q: 'Q. 임신 몇 주까지 낙태수술이 가능한가요?',
    a: '임신중절수술 가능 여부와 방법은 초음파로 확인한 임신 주수, 건강 상태, 의료기관의 진료 범위와 최신 법률 기준을 함께 확인해야 합니다. 14주를 일률적인 합법 기준으로 단정하지 않으며, 임신이 확인되면 의료진 상담을 통해 주수와 선택 가능한 진료 범위를 확인하시기 바랍니다.'
  },
  {
    q: 'Q. 낙태수술 시 통증이 심한가요?',
    a: '낙태수술 중·후 통증과 마취 회복 정도에는 개인차가 있습니다. 마취 방법은 건강 상태와 검사 결과를 바탕으로 결정하며, 수술 후 통증·출혈이 예상 범위를 벗어나거나 고열·어지럼증이 동반되면 즉시 의료기관에 연락해야 합니다.'
  },
  {
    q: 'Q. 낙태와 임신중절의 차이점은 무엇인가요?',
    a: '낙태는 일상적으로 사용되는 표현이고, 법령과 의료 현장에서는 인공임신중절이라는 용어를 사용합니다. 임신중절수술의 방법, 낙태비용과 회복 과정은 주수와 건강 상태에 따라 달라지므로 초음파와 진료 상담을 통해 확인해야 합니다.'
  },
  {
    q: 'Q. 임신중절수술 후 사후관리는 어떻게 이루어지나요?',
    a: '임신중절수술 후에는 회복 상태를 확인하고 약 복용, 활동 제한과 이상 증상 대처 방법을 안내합니다. 후속 진료 시점은 개인 상태에 따라 달라질 수 있으며, 고열·심한 복통·어지럼증이나 과다출혈이 있으면 예약일을 기다리지 말고 즉시 의료기관에 연락하거나 진료를 받아야 합니다.'
  },
  {
    q: 'Q. 중절수술가격이 병원마다 다른 이유는 무엇인가요?',
    a: '중절수술가격은 임신 주수, 검사·마취·처치 범위와 의료기관별 진료 기준에 따라 달라질 수 있습니다. 가격만 비교하기보다 의료기관의 면허·전문의 여부, 설명과 동의 절차, 응급 대응과 사후 진료 기준을 함께 확인하시기 바랍니다.'
  },
  {
    q: 'Q. 약물중절(미프진)은 어떤 방법인가요?',
    a: '약물중절은 약물을 이용해 임신을 종료하는 방법입니다. 허가 여부와 사용 기준은 변경될 수 있으므로 온라인 판매처나 비공식 경로의 정보만 믿고 임의로 복용해서는 안 됩니다. 임신 주수와 건강 상태를 확인한 뒤 허가된 의약품과 의료기관의 진료 기준을 의료진에게 확인하시기 바랍니다.'
  },
  {
    q: 'Q. 임신중절수술은 합법인가요? 낙태합법화 이후 달라진 점은 무엇인가요?',
    a: '형법상 자기낙태죄와 의사낙태죄 조항은 2021년 1월 1일부터 효력을 상실했습니다. 그러나 이를 임신 14주 이내의 모든 임신중절수술이 별도 조건 없이 합법이라는 뜻으로 단정해서는 안 됩니다. 모자보건법 제14조와 시행령, 개별 주수와 건강 상태를 함께 확인해야 하며 법률 판단이 필요한 경우 전문가 상담을 병행하시기 바랍니다.'
  },
  {
    q: 'Q. 당일 수술 및 퇴원이 가능한가요?',
    a: '당일 수술과 귀가 가능 여부는 초음파와 필요한 검사, 임신 주수, 건강 상태, 금식 여부와 회복 상태를 확인한 뒤 결정합니다. 당일 진행을 보장할 수 없으므로 방문 전에 예약 가능 시간과 준비사항을 확인하고, 퇴원 후 이상 증상이 있으면 안내받은 연락처나 가까운 의료기관을 이용하시기 바랍니다.'
  },
  {
    q: 'Q. 연세365산부인과의원은 어디에 있으며, 어떤 지역에서 많이 내원하시나요?',
    a: '연세365산부인과의원은 사당역 4번출구 바로 앞에 위치하여 대중교통 접근성이 매우 뛰어납니다. 지하철 2호선과 4호선이 교차하는 사당역 특성상 관악구 산부인과, 신림동 산부인과, 과천 산부인과를 찾으시는 분들은 물론, 강남역 산부인과·신논현역 산부인과·서초동 산부인과를 찾으시는 분들도 편리하게 내원하실 수 있어 강남 임신중절수술을 고려하시는 분들께서도 많이 찾아주고 계십니다. 연중무휴 산부인과로 운영되며, 주말과 공휴일에도 진료가 가능합니다. 임신중절가격과 낙태수술가격은 임신 주수에 따라 달라지며, 낙태비용금액에 대한 정확한 안내는 초음파 검사 후 1:1 상담에서 투명하게 제공됩니다. 임신중절수술후기가 궁금하시다면, 상담 시 수술 과정과 회복에 대해 경험 많은 전문의가 상세히 설명드립니다.'
  },
  {
    q: 'Q. 낙태수술 후 빈혈이 올 수 있나요?',
    a: '수술 과정에서 발생하는 불가피한 출혈이나 체력 소모로 인해 일시적인 어지럼증이나 빈혈 증상이 나타날 수 있습니다. 특히 평소 빈혈 수치가 낮았던 분들은 수술 후 철분 수치가 급격히 떨어질 수 있어 각별한 주의가 필요합니다. 연세365산부인과의원에서는 수술 전후 혈액 검사를 통해 환자분의 상태를 면밀히 파악하며, 필요한 경우 고농축 철분 주사나 맞춤형 영양 수액을 처방하여 신속한 회복을 돕고 있습니다. 수술 후 약 2주간은 균형 잡힌 식단과 함께 철분 섭취에 신경 써주시는 것이 일상 복귀에 큰 도움이 됩니다.'
  },
];

const costData = [
  { weeks: '8주미만', price: '45', note: '수술비+영양제' },
  { weeks: '8주', price: '60', note: '수술비+영양제' },
  { weeks: '9주', price: '70', note: '수술비+영양제' },
  { weeks: '10주', price: '80', note: '수술비+영양제' },
];

const tabLabels = ['비용안내', '확인방법', '수술안내', 'FAQ'];

const desktopTabs = [
  { label: '비용안내', sectionId: 'ab-cost' },
  { label: '확인방법', sectionId: 'ab-diagnosis' },
  { label: '수술안내', sectionId: 'ab-procedure' },
  { label: 'FAQ', sectionId: 'ab-faq' },
];


/* ================================================================
   Component
   ================================================================ */
const Abortion: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileTab, setMobileTab] = useState(0);
  const [activeDesktopTab, setActiveDesktopTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isScrollingToRef = useRef(false);

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
          임신중절 클리닉 · 임신중절수술 금액 안내
          </h2>
          <p className="text-gray-600 text-[13px] md:text-lg leading-[1.8] md:leading-relaxed max-w-3xl mx-auto px-1 md:px-0">
            연세365산부인과의원은 여성의 건강과 안전을 최우선으로 생각합니다.
            <br className="hidden md:block" />
            {' '}풍부한 임상 경험을 가진 산부인과 전문의가 <strong className="text-gray-700">안전한 임신중절수술</strong>을 직접 시행하며,
            <br className="hidden md:block" />
            {' '}합리적인 <strong className="text-gray-700">임신중절수술 금액</strong>·<strong className="text-gray-700">낙태비용</strong>과 투명한 <strong className="text-gray-700">중절수술가격</strong> 안내, 관계 법령에 따른 <strong className="text-gray-700">개인정보·진료기록 보호</strong>와 사후 안내를 통해
            <br className="hidden md:block" />
            {' '}환자분의 신체적·심리적 부담을 최소화하고 빠른 회복을 돕고 있습니다.
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
              {/* ── Tab 0: 비용안내 ── */}
              {mobileTab === 0 && (
                <>
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden border border-primary/10">
                  <div className="pt-8 pb-4 px-5 text-center">
                    <span className="inline-block bg-primary text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full shadow-md mb-4 uppercase">
                      사당역 4번출구 연세365산부인과의원
                    </span>
                    <h3 className="text-2xl font-bold leading-tight font-serif">
                    <span className="text-primary">임신중절수술</span>
                    <span className="text-gray-800"> 금액·비용 안내</span>
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
                    <span className="flex items-center gap-1"><span className="text-primary font-bold">•</span>선택사항 : 자궁유착방지제 5만원</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white/80 rounded-xl border border-primary/5">
                  <p className="text-[11px] text-gray-600 leading-[1.8]">
                    <strong className="text-gray-700">임신중절수술 금액</strong>은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. <strong className="text-gray-700">낙태비용</strong>은 임신 주수에 따라 달라지며, 주수가 적을수록 <strong className="text-gray-700">임신중절수술비용</strong> 부담이 낮아집니다. 연세365산부인과의원은 초음파 검사 후 정확한 주수를 확인하여 추가 비용 없이 투명한 <strong className="text-gray-700">중절수술가격</strong>을 안내합니다. <strong className="text-gray-700">낙태비용얼마</strong>인지 궁금하시다면 1:1 상담에서 <strong className="text-gray-700">임신중절수술가격</strong>과 <strong className="text-gray-700">임신중절수술금액</strong>을 명확히 확인하실 수 있습니다. 풍부한 임상 경험을 가진 산부인과 전문의의 숙련된 수술과 합리적인 <strong className="text-gray-700">낙태비용</strong>으로 경제적·신체적 부담을 최소화합니다.
                  </p>
                </div>
                </>
              )}

              {/* ── Tab 1: 확인방법 ── */}
              {mobileTab === 1 && (
                <>
                  {/* 임신 초기 증상 */}
                  <div className="mb-10">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">임신 초기 증상</h3>
                    <p className="text-center text-gray-500 mb-6 text-xs leading-relaxed">
                      다음 증상이 있다면<br />임신 가능성을 확인해보세요
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {symptoms.map((s) => (
                        <div key={s.id} className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-purple-100 flex items-center justify-center mb-2 border-2 border-white shadow">
                            <span className="text-xl font-bold text-primary/80">0{s.id}</span>
                          </div>
                          <h4 className="font-bold text-sm text-gray-800 mb-1">{s.title}</h4>
                          <p className="text-[11px] text-gray-600 leading-[1.7]">{s.description}</p>
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
                          <div className="w-24 flex-shrink-0 relative h-24">
                            <Image src={m.image} alt={m.alt} fill className="object-cover" sizes="96px" loading="lazy" unoptimized />
                          </div>
                          <div className="p-3 flex-1 min-w-0">
                            <h4 className="font-bold text-sm text-gray-800 mb-1">{m.title}</h4>
                            <p className="text-[11px] text-gray-600 leading-[1.7]">{m.description}</p>
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

              {/* ── Tab 2: 수술안내 ── */}
              {mobileTab === 2 && (
                <>
                  <div className="mb-10">
                    <h3 className="text-lg font-bold text-center text-gray-800 mb-2">안전한 <strong>임신중절수술</strong> 절차</h3>
                    <p className="text-center text-gray-500 mb-6 text-[11px] leading-relaxed">
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
                          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20 relative">
                            <Image src={care.image} alt={care.alt} fill className="object-cover" sizes="48px" loading="lazy" unoptimized />
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed pt-1 flex-1">{care.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-purple-50 rounded-xl border border-primary/10">
                    <h4 className="font-bold text-sm text-gray-800 mb-2">🔒 개인정보 보호 & 사후 안내</h4>
                    <p className="text-[11px] text-gray-600 leading-[1.8]">
                      연세365산부인과의원은 <strong className="text-gray-700">낙태수술</strong> 후 회복 상태에 따른 주의사항과 후속 진료 일정을 안내합니다. 진료 기록과 개인정보는 관계 법령과 개인정보 처리 기준에 따라 보호되며, 산부인과 전문의가 검사 결과와 건강 상태를 바탕으로 <strong className="text-gray-700">임신중절수술</strong> 방법과 사후 관리 계획을 설명합니다.
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

          {/* 법적 정보 — 모바일 (확장) */}
          <div className="mt-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-5 border border-primary/10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">⚖️</span>
              <h3 className="text-base font-bold text-gray-800">안전한 <strong>임신중절수술</strong> 안내</h3>
            </div>
            <p className="text-[11px] text-gray-600 leading-[1.8] mb-3">
              <strong className="text-gray-700">인공임신중절</strong>(<strong className="text-gray-700">낙태</strong>)은 임신을 인위적으로 종료하는 의료 행위를 말합니다. 형법상 자기낙태죄와 의사낙태죄 조항은 2021년 1월 1일부터 효력을 상실했지만, 진료 가능 범위는 모자보건법과 시행령, 임신 주수·건강 상태와 개별 사정을 함께 확인해야 합니다.
            </p>
            <p className="text-[11px] text-gray-600 leading-[1.8] mb-3">
              연세365산부인과의원은 관련 법령을 준수하며, 산부인과 전문의가 초음파와 필요한 검사 결과를 확인한 뒤 <strong className="text-gray-700">임신중절수술</strong> 가능 여부와 방법을 안내합니다. <strong className="text-gray-700">낙태수술시기</strong>와 수술 방법은 개인별로 다르므로 특정 주수나 방법을 일률적으로 권장하지 않습니다.
            </p>
            <div className="bg-white/80 rounded-lg p-3 mb-3">
              <h4 className="font-bold text-primary text-[11px] mb-2">[모자보건법 제14조 - 인공임신중절 허용 사유]</h4>
              <ul className="space-y-1.5 text-[10px] text-gray-600 leading-[1.7]">
                <li><span className="text-primary font-bold">1.</span> 본인 또는 배우자가 우생학적·유전학적 정신장애나 신체질환이 있는 경우 — 유전성 질환으로 태아에게 심각한 장애가 발생할 가능성이 높은 경우</li>
                <li><span className="text-primary font-bold">2.</span> 본인 또는 배우자가 전염성 질환이 있는 경우 — 풍진, HIV 등 태아에게 수직 감염될 수 있는 질환</li>
                <li><span className="text-primary font-bold">3.</span> 강간 또는 준강간에 의해 임신된 경우 — 성폭력 피해로 인한 임신은 피해자의 동의만으로 진행 가능</li>
                <li><span className="text-primary font-bold">4.</span> 법률상 혼인할 수 없는 혈족 또는 인척 간에 임신인 경우</li>
                <li><span className="text-primary font-bold">5.</span> 임신의 지속이 보건의학적 이유로 모체의 건강을 심각하게 해치고 있거나 해칠 우려가 있는 경우</li>
              </ul>
            </div>
            <p className="text-[10px] text-gray-500 leading-[1.7]">
              ※ <strong className="text-gray-600">임신중절수술</strong>의 법률·의료 기준과 진료 가능 여부는 주수와 개인 상태에 따라 달라질 수 있습니다. 진료시간과 상담 가능 여부를 확인한 뒤 의료진에게 필요한 검사와 방법을 안내받으시기 바랍니다.
            </p>
          </div>

          {/* 진료 예약 — 모바일 콤팩트 (간편예약 버튼 하나로 통합) */}
          <div className="mt-6 bg-gradient-to-br from-primary/5 to-purple-50 rounded-xl p-5 border border-primary/10">
            <h3 className="text-base font-bold text-center text-gray-800 mb-2"><strong>임신중절수술</strong> 예약 및 상담</h3>
            <p className="text-center text-gray-500 text-[11px] mb-4">사전 예약제 · 관계 법령에 따른 개인정보 보호</p>
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

          {/* 의료법 제56조 준수 및 부작용 안내 — 모바일 */}
          <div className="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-200">
            <p className="text-[10px] text-gray-500 leading-[1.7] mb-2">
              <strong className="text-gray-600">[의료법 제56조 제1항 준수]</strong> 본 페이지의 내용은 의료법 제56조(의료광고의 금지 등) 제1항에 따라 환자에게 의료 정보를 제공하기 위한 목적으로 작성되었으며, 특정 의료 행위를 보장하거나 효과를 과대 광고하는 것이 아닙니다.
            </p>
            <p className="text-[10px] text-gray-500 leading-[1.7]">
              <strong className="text-gray-600">[부작용 및 주의사항]</strong> 임신중절수술은 개인의 건강 상태에 따라 출혈, 감염, 자궁 천공, 자궁경부 손상, 마취 관련 부작용 등이 발생할 수 있습니다. 모든 수술에는 부작용의 가능성이 있으므로, 반드시 전문의와 충분한 상담 후 신중하게 결정하시기 바랍니다. 수술 후 과다 출혈, 고열, 심한 복통 등 이상 증상이 나타나면 즉시 의료기관에 내원하셔야 합니다.
            </p>
          </div>
        </div>


        {/* =============================================================== */}
        {/* ===== DESKTOP — 기존 모든 섹션 그대로 유지 (탭 순서 변경) ===== */}
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

          {/* ========== 임신중절 비용안내 (탭 1 → 탭 순서상 첫 번째로 이동) ========== */}
          <div id="ab-cost" className="max-w-xl mx-auto mb-16 scroll-mt-20">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden border border-primary/10">

              {/* 상단 타이틀 영역 */}
              <div className="pt-10 pb-6 px-6 md:px-10 text-center">
                <span className="inline-block bg-primary text-white text-xs md:text-sm font-bold tracking-widest px-6 py-2 rounded-full shadow-md mb-6 uppercase">
                  사당역 4번출구 연세365산부인과의원
                </span>
                <h3 className="text-3xl md:text-5xl font-bold leading-tight font-serif">
                <span className="text-primary">임신중절수술</span>
                <span className="text-gray-800"> 금액·비용 안내</span>
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
                  <span className="text-primary font-bold">•</span>선택사항 : 자궁유착방지제 5만원
                </span>
              </div>
            </div>
            {/* 비용 상세 안내 */}
            <div className="mt-8 bg-white rounded-xl p-6 md:p-8 border border-primary/10 shadow-sm">
              <h4 className="font-bold text-lg text-gray-800 mb-4 text-center">💡 <strong>임신중절수술 금액</strong>·<strong>비용</strong> 결정 요인 안내</h4>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-800">낙태비용</strong>은 임신 주수가 가장 큰 결정 요인입니다. 임신 초기에는 태아의 크기가 작아 수술 시간이 짧고 시술이 비교적 간단하므로 <strong>중절수술가격</strong> 부담이 낮지만, 주수가 증가할수록 수술 난이도와 마취 시간이 늘어나 <strong>낙태비용가격</strong>이 높아지게 됩니다.
                </p>
                <p>
                  연세365산부인과의원은 주수별 기본 <strong className="text-gray-800">임신중절수술비용</strong>과 포함 항목을 상담에서 안내합니다. 정확한 <strong>낙태비용</strong>은 초음파와 필요한 검사·마취·처치 범위에 따라 달라질 수 있으며, 추가 항목이 필요한 경우 진행 전에 설명합니다. 현금과 카드의 기본 안내 금액은 동일합니다.
                </p>
                <p>
                  <strong className="text-gray-800">임신중절수술가격</strong>과 <strong className="text-gray-800">임신중절수술금액</strong>은 수술 방법과 마취·검사 범위에 따라서도 달라질 수 있습니다. <strong>낙태수술가격</strong>, <strong>낙태비용금액</strong>, <strong>낙태금액</strong>이 궁금하시다면 진료 전에 <strong>임신중절비용</strong>, <strong>임신중절금액</strong>, <strong>임신중절가격</strong>과 <strong>중절수술금액</strong>의 포함 항목을 확인하시기 바랍니다.
                </p>
                <p className="text-primary font-semibold text-xs">
                  ※ 정확한 <strong>낙태비용가격</strong>은 초음파 검사를 통해 임신 주수를 확인한 후 1:1 상담에서 안내드립니다. <strong>낙태비용얼마</strong>인지 궁금하시다면 카카오톡 또는 전화로 언제든 문의 가능합니다.
                </p>
              </div>
            </div>
          </div>

          {/* ========== 임신중절수술 법적 정보 (확장 — 2배 이상) ========== */}
          <div id="ab-diagnosis" className="max-w-5xl mx-auto mb-16 scroll-mt-20">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-primary/10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">⚖️</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">안전한 <strong>임신중절수술</strong> 안내</h3>

              <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
                <strong>인공임신중절</strong>(<strong>낙태</strong>)이란 태아가 모체 밖에서 생존할 수 없는 시기에 인위적으로 임신을 종료하는 의료 행위를 말합니다.
                <br />
                형법상 자기낙태죄와 의사낙태죄 조항은 2021년 1월 1일부터 효력을 상실했습니다.
                <br />
                다만 이를 임신 14주 이내의 모든 <strong>임신중절수술</strong>이 별도 조건 없이 합법이라는 뜻으로 단정해서는 안 되며,
                <br />
                모자보건법 제14조와 시행령, 초음파로 확인한 주수·건강 상태와 개별 사정을 함께 확인해야 합니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
                연세365산부인과의원은 의료법과 모자보건법을 철저히 준수하며, 풍부한 임상 경험을 가진 산부인과 전문의가
                <br />
                투명한 <strong>낙태비용가격</strong> 안내와 함께 안전하고 세심한 <strong>임신중절</strong> 진료를 시행하고 있습니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
                <strong>낙태수술시기</strong>와 방법은 초음파로 확인한 주수와 건강 상태에 따라 달라지므로 의료진 상담이 필요합니다.
                <br />
                <strong>임신초기중절</strong>을 포함한 수술 방법은 특정 주수만으로 정하지 않고 검사 결과와 개인 상태를 바탕으로 결정하며,
                <br />
                수술 후에는 회복 상태에 따른 주의사항과 후속 진료 일정을 안내합니다.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto text-sm">
                사당역에 위치한 연세365산부인과의원은 <strong>관악구 산부인과</strong>, <strong>신림동 산부인과</strong>, <strong>과천 산부인과</strong>를 찾으시는 분들은 물론,
                <br />
                <strong>강남역 산부인과</strong>, <strong>신논현역 산부인과</strong>, <strong>서초동 산부인과</strong> 등 서울 전역에서 내원하시는 환자분들에게
                <br />
                안전하고 신뢰할 수 있는 <strong>강남 임신중절수술</strong>을 제공하고 있습니다.
                <br />
                진료시간과 주말·공휴일 상담 가능 여부는 방문 전에 전화 또는 카카오톡으로 확인하시기 바랍니다.
              </p>

              <div className="bg-white/80 rounded-xl p-6 backdrop-blur-sm max-w-3xl mx-auto text-left">
                <h4 className="font-bold text-primary mb-4 text-lg text-center">[모자보건법 제14조 - 인공임신중절 허용 사유]</h4>
                <ul className="space-y-3 text-sm text-gray-700 inline-block">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">1.</span>
                    <span>본인 또는 배우자가 대통령령으로 정하는 우생학적 또는 유전학적 정신장애나 신체질환이 있는 경우 — 유전성 질환으로 태아에게 심각한 장애가 발생할 가능성이 높은 경우에 해당합니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">2.</span>
                    <span>본인 또는 배우자가 대통령령으로 정하는 전염성 질환이 있는 경우 — 풍진, HIV 등 태아에게 수직 감염될 수 있는 전염성 질환이 이에 해당합니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">3.</span>
                    <span>강간 또는 준강간(형법 제297조, 제299조)에 의하여 임신된 경우 — 성폭력 피해로 인한 임신의 경우 피해자의 동의만으로 진행 가능합니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">4.</span>
                    <span>법률상 혼인할 수 없는 혈족 또는 인척 간에 임신인 경우 — 민법에서 금지하는 근친 간의 임신이 이에 해당합니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">5.</span>
                    <span>임신의 지속이 보건의학적 이유로 모체의 건강을 심각하게 해치고 있거나 해칠 우려가 있는 경우 — 산모의 생명이나 건강에 중대한 위험이 예상되는 경우 의사의 판단에 따라 시행됩니다.</span>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-gray-500 text-center leading-relaxed">
                  ※ <strong>임신중절수술</strong>의 법률·의료 기준은 진료 시점의 법령과 개인 상태를 함께 확인해야 합니다.
                  <br />
                  당일 수술·퇴원 가능 여부는 검사와 회복 상태에 따라 결정되며, 진료 기록과 개인정보는 관계 법령에 따라 보호됩니다.
                </p>
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
                    <Image src={method.image} alt={method.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" loading="lazy" unoptimized />
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

          {/* 안전한 수술 진행 절차 */}
          <div id="ab-procedure" className="max-w-5xl mx-auto mb-16 scroll-mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">안전한 <strong>임신중절수술</strong> 절차</h3>
            <p className="text-center text-gray-600 mb-6 text-sm">연세365산부인과의원은 체계적인 <strong>낙태수술</strong> 프로세스로 환자 안전을 최우선으로 지킵니다</p>
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
              연세365산부인과의원은 <strong>임신중절수술</strong> 후 체계적인 <strong>1:1 사후 케어 시스템</strong>을 운영합니다.<br />
              수술 직후 전용 회복실에서 활력 징후를 모니터링하고, 퇴원 후에도 전화 상담과 후속 진료를 통해<br />
              개인 상태에 맞는 회복 경과와 후속 진료 일정을 안내합니다. 진료 기록과 개인정보는 관계 법령에 따라 보호됩니다.
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
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/20 shadow-lg relative">
                    <Image src={care.image} alt={care.alt} fill className="object-cover" sizes="160px" loading="lazy" unoptimized />
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
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-primary/5 to-purple-50 rounded-2xl p-8 md:p-12 border border-primary/10">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4"><strong>임신중절수술</strong> 진료 예약 및 상담</h3>
              <p className="text-center text-gray-600 mb-8">
                <strong>임신중절수술</strong> 및 <strong>낙태비용</strong> 상담은 사전 예약제로 운영됩니다.<br />
                풍부한 임상 경험을 가진 산부인과 전문의와의 프라이빗한 1:1 상담을 원하시는 분은 아래 방법으로 예약해주세요.<br />
                상담 내용과 진료 기록은 관계 법령과 개인정보 처리 기준에 따라 보호됩니다.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <a
                  href="tel:02-585-3650"
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

          {/* 의료법 제56조 준수 및 부작용 안내 — 데스크톱 */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="space-y-3 text-sm text-gray-500 leading-relaxed">
                <p>
                  <strong className="text-gray-600">[의료법 제56조 제1항 준수]</strong> 본 페이지의 내용은 의료법 제56조(의료광고의 금지 등) 제1항에 따라 환자에게 의료 정보를 제공하기 위한 목적으로 작성되었으며, 특정 의료 행위를 보장하거나 효과를 과대 광고하는 것이 아닙니다.
                </p>
                <p>
                  <strong className="text-gray-600">[부작용 및 주의사항 안내]</strong> 임신중절수술은 개인의 건강 상태에 따라 출혈, 감염, 자궁 천공, 자궁경부 손상, 마취 관련 부작용 등이 발생할 수 있습니다. 모든 수술에는 부작용의 가능성이 있으므로, 반드시 전문의와 충분한 상담 후 신중하게 결정하시기 바랍니다. 수술 후 과다 출혈, 고열, 심한 복통 등 이상 증상이 나타나면 즉시 의료기관에 내원하셔야 합니다.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Abortion;
