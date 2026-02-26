import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, MessageCircle, Send } from 'lucide-react';

const Booking: React.FC = () => {
  const [mobileTab, setMobileTab] = useState(0);
  const tabLabels = ['산부인과', '오시는길'];

  return (
    <section id="location" className="relative py-20 md:py-32 pb-28 md:pb-32 bg-background z-10">
      <div className="container mx-auto px-5 md:px-12">

        {/* Section Header — 공통 */}
        <div className="text-center mb-8 md:mb-20">
          <span className="text-primary text-sm font-bold tracking-widest block mb-3 uppercase">Booking</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif">
            상담 <span className="font-sans text-2xl md:text-4xl">/</span> 오시는길
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            <span className="md:hidden">편안한 상담을 위해<br />예약해주세요</span>
            <span className="hidden md:inline">편안한 상담을 위해 예약해주세요</span>
          </p>
        </div>


        {/* ===== MOBILE — 3-Tab System ===== */}
        <div className="md:hidden">
          {/* 탭 바 */}
          <div className="flex border-b-2 border-primary/10 mb-6">
            {tabLabels.map((label, idx) => (
              <button
                key={idx}
                onClick={() => setMobileTab(idx)}
                className={`flex-1 py-3 text-sm font-bold transition-all duration-200 relative ${
                  mobileTab === idx ? 'text-primary' : 'text-gray-400'
                }`}
              >
                {label}
                {mobileTab === idx && (
                  <motion.div
                    layoutId="booking-tab"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
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
              {/* ── Tab 0: 산부인과 ── */}
              {mobileTab === 0 && (
                <div className="bg-white rounded-2xl shadow-md p-6 border border-primary/10">
                  <h3 className="text-xl font-bold text-primary mb-5 text-center">산부인과</h3>
                  <table className="w-full text-sm border-collapse overflow-hidden rounded-xl">
                    <tbody>
                      <tr>
                        <td className="bg-primary/10 text-gray-800 font-bold py-3 px-4 border-b border-white/60 w-28">월 - 금</td>
                        <td className="bg-white text-gray-700 py-3 px-4 border-b border-primary/5">오전 09:00 - 오후 18:00</td>
                      </tr>
                      <tr>
                        <td className="bg-primary/10 text-gray-800 font-bold py-3 px-4 border-b border-white/60">토요일</td>
                        <td className="bg-white text-gray-700 py-3 px-4 border-b border-primary/5">오전 09:00 - 오후 18:00</td>
                      </tr>
                      <tr>
                        <td className="bg-primary/10 text-gray-800 font-bold py-3 px-4">일·공휴일</td>
                        <td className="bg-white text-gray-700 py-3 px-4">오전 10:00 - 오후 14:00</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-5 text-primary font-bold text-center text-sm">
                    연중무휴 365일 일요일 수술가능
                  </p>
                  <div className="mt-5 pt-5 border-t border-primary/10 text-center">
                    <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                      <MapPin size={12} className="text-primary flex-shrink-0" />
                      서울시 관악구 과천대로 939, 3층
                    </p>
                  </div>
                </div>
              )}

              {/* ── Tab 1: 오시는길 ── */}
              {mobileTab === 1 && (
                <div className="space-y-4">
                  {/* 지도 + 오버레이 버튼 */}
                  <div className="relative rounded-2xl overflow-hidden shadow-md">
                    <img
                      src="https://i.imgur.com/E5YzhoJ.png"
                      alt="연세365산부인과 지도"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <a
                      href="https://map.naver.com/p/entry/place/36298054?lng=126.9814415&lat=37.4743873&placePath=/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/20 active:bg-black/30 transition-colors"
                    >
                      <span className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-full shadow-lg text-sm">
                        <MapPin size={16} />
                        네이버 지도 보기
                      </span>
                    </a>
                  </div>

                  {/* 주소만 표시 */}
                  <div className="bg-white rounded-2xl shadow-md p-5 border border-primary/10 text-center">
                    <p className="text-sm text-gray-700 flex items-center justify-center gap-2 font-medium">
                      <MapPin size={14} className="text-primary flex-shrink-0" />
                      서울시 관악구 과천대로 939, 3층
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>


        {/* ===== DESKTOP — 기존 2-Column Grid 그대로 유지 ===== */}
        <div className="hidden md:block">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

            {/* ===== LEFT: 진료 시간 안내 ===== */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

              {/* 산부인과 시간표 */}
              <div className="relative p-8 pb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-surface/80 to-white/60 pointer-events-none rounded-t-2xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-primary mb-6">산부인과</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      <span>
                        <strong className="inline-block w-28">월 - 금</strong>
                        <span className="text-gray-500">:</span>&nbsp; 오전 09:00 - 오후 18:00
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      <span>
                        <strong className="inline-block w-28">토요일</strong>
                        <span className="text-gray-500">:</span>&nbsp; 오전 09:00 - 오후 18:00
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      <span>
                        <strong className="inline-block w-28">일·공휴일</strong>
                        <span className="text-gray-500">:</span>&nbsp; 오전 10:00 - 오후 14:00
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-primary font-bold text-center text-sm md:text-base">
                    연중무휴 365일 일요일 수술가능
                  </p>
                </div>
              </div>

              {/* 하단 버튼 3개 */}
              <div className="px-8 pb-8 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:02-585-3650"
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-4 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    <Phone size={16} />
                    <span>전화 상담</span>
                  </a>
                  <a
                    href="http://pf.kakao.com/_TpaBj/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-pink-500 hover:from-primary-dark hover:to-primary text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    <MessageCircle size={16} />
                    <span>카카오톡 상담</span>
                  </a>
                </div>
                <button
                  onClick={() => window.dispatchEvent(new Event('open-consult-modal'))}
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-surface text-primary font-bold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border-2 border-primary/20 text-sm"
                >
                  <Send size={16} />
                  <span>간편 상담예약</span>
                </button>
              </div>
            </div>

            {/* ===== RIGHT: 지도 및 정보 ===== */}
            <div className="flex flex-col gap-5">

              {/* 정보 박스 */}
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-shrink-0 bg-primary text-white px-5 py-3 rounded-lg text-center leading-tight">
                  <p className="font-bold text-sm">연세365산부인과</p>
                  <p className="font-bold text-xs mt-0.5">Information</p>
                </div>
                <div className="text-gray-700 text-sm leading-relaxed space-y-1">
                  <p className="flex items-start gap-2">
                    <MapPin size={15} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>서울시 관악구 과천대로 939, 3층</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Phone size={15} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>일반진료상담 : <strong>02.585.3650</strong></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Phone size={15} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>여성성형진료상담 : <strong>02.547.2876</strong></span>
                  </p>
                </div>
              </div>

              {/* 지도 이미지 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex-1 min-h-[300px] lg:min-h-0">
                <img
                  src="https://i.imgur.com/E5YzhoJ.png"
                  alt="연세365산부인과 지도"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 네이버 지도 보기 버튼 */}
              <a
                href="https://map.naver.com/p/entry/place/36298054?lng=126.9814415&lat=37.4743873&placePath=/home"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg w-full"
              >
                <MapPin size={18} />
                <span>네이버 지도 보기</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Booking;
