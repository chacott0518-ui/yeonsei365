import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Doctors from './components/Doctors';
import Center from './components/Center';
import Abortion from './components/Abortion';
import Review from './components/Review';
import FAQ from './components/FAQ';
import Consultation from './components/Booking';
import Footer from './components/Footer';
import ConsultModal from './components/ConsultModal';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="relative bg-background text-gray-dark min-h-screen pb-0 font-sans">
      <Header />
      <main>
        <Hero />
        <div className="relative z-10 bg-white shadow-2xl">
          <About />
          <Doctors />
          <Center />
          <Abortion />
          <Review />
          <FAQ />
          <Consultation />
        </div>
      </main>
      <Footer />
      <ConsultModal />

      {/* 모바일 하단 고정 플로팅 바 — 3단 레이아웃 */}
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-primary border-t border-white/20 z-50 md:hidden flex items-center shadow-[0_-4px_10px_rgba(214,51,108,0.2)]">
        <a href="tel:02-585-3650" className="flex items-center justify-center gap-1.5 flex-1 h-full active:bg-white/10 transition-colors">
          <Phone size={16} className="text-white" />
          <span className="text-xs font-bold text-white">전화문의</span>
        </a>

        <div className="w-[1px] h-5 bg-white/20"></div>

        <a 
          href="http://pf.kakao.com/_TpaBj/chat" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 flex-1 h-full active:bg-white/10 transition-colors"
        >
          <MessageCircle size={16} className="text-white" />
          <span className="text-xs font-bold text-white">카톡상담</span>
        </a>

        <div className="w-[1px] h-5 bg-white/20"></div>

        <a href="#location" onClick={(e) => {
          e.preventDefault();
          document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
        }} className="flex items-center justify-center gap-1.5 flex-1 h-full active:bg-white/10 transition-colors">
          <MapPin size={16} className="text-white" />
          <span className="text-xs font-bold text-white">오시는길</span>
        </a>
      </div>
    </div>
  );
}

export default App;