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
import { Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="bg-background text-gray-dark min-h-screen pb-16 md:pb-0 font-sans">
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

      <div className="fixed bottom-0 left-0 right-0 h-16 bg-primary border-t border-white/20 z-50 md:hidden flex items-center justify-around shadow-[0_-4px_10px_rgba(214,51,108,0.2)]">
        <a href="tel:0507-1423-6302" className="flex items-center justify-center gap-2 w-full h-full active:bg-white/10 transition-colors">
          <Phone size={18} className="text-white" />
          <span className="text-sm font-bold text-white">전화문의</span>
        </a>

        <div className="w-[1px] h-6 bg-white/20"></div>

        <a href="#location" onClick={(e) => {
          e.preventDefault();
          document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
        }} className="flex items-center justify-center gap-2 w-full h-full active:bg-white/10 transition-colors">
          <MapPin size={18} className="text-white" />
          <span className="text-sm font-bold text-white">오시는길</span>
        </a>
      </div>
    </div>
  );
}

export default App;