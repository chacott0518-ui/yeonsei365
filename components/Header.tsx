import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { X, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let stopTimer: ReturnType<typeof setTimeout>;

    const handleAction = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      
      if (isScrollingDown && currentScrollY > 50) {
        setIsVisible(false);
        clearTimeout(stopTimer); 
      } else {
        setIsVisible(true);
      }

      if (!isScrollingDown || currentScrollY <= 50) {
        clearTimeout(stopTimer);
        stopTimer = setTimeout(() => {
          setIsVisible(true);
        }, 500); 
      }

      lastScrollY = currentScrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleAction, { passive: true });
    window.addEventListener('mousemove', handleAction, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleAction);
      window.removeEventListener('mousemove', handleAction);
      clearTimeout(stopTimer);
    };
  }, []);

  // ✅ 완전히 새로운 방식: 클릭 시 직접 activeSection 설정
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 즉시 activeSection 설정
      setActiveSection(id);
      
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  // ✅ 스크롤 감지는 보조용으로만 사용
  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPos = window.scrollY + 150;
      
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      // 역순으로 체크 (아래에서 위로)
      const sections = [
        { id: 'location', el: document.getElementById('location') },
        { id: 'faq', el: document.getElementById('faq') },
        { id: 'review', el: document.getElementById('review') },
        { id: 'abortion-clinic', el: document.getElementById('abortion-clinic') },
        { id: 'clinics', el: document.getElementById('clinics') },
        { id: 'doctors', el: document.getElementById('doctors') },
        { id: 'about', el: document.getElementById('about') }
      ];

      for (const section of sections) {
        if (section.el && scrollPos >= section.el.offsetTop) {
          setActiveSection(section.id);
          return;
        }
      }
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActiveSection();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.15, ease: "circOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding] duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-primary/10' 
            : 'bg-transparent py-6 border-b border-transparent' 
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          <div 
            className="flex items-center cursor-pointer z-50 relative" 
            onClick={() => {
              setActiveSection('');
              window.scrollTo({ top: 0, behavior: 'smooth'});
            }}
          >
            <img 
              src="https://i.imgur.com/f7h5DY0.png" 
              alt="연세365 로고" 
              className="h-9 md:h-11 w-auto object-contain" 
            />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.id 
                    ? (isScrolled ? 'text-primary font-bold' : 'text-white font-bold') 
                    : (isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white')
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeGlow"
                    className={`absolute -bottom-2 left-0 right-0 h-[2px] ${isScrolled ? 'bg-primary' : 'bg-white'}`}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <button 
            className={`lg:hidden z-50 relative p-2 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
             <Menu size={28} />
          </button>

        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 z-[60] lg:hidden backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[200px] bg-background z-[61] lg:hidden flex flex-col shadow-2xl border-l border-primary/10"
            >
              <div className="flex items-center justify-end p-4">
                 <button 
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="p-1 text-primary hover:text-primary-dark transition-colors"
                 >
                   <X size={24} />
                 </button>
              </div>
              
              <div className="flex flex-col px-6 py-4 overflow-y-auto flex-grow space-y-1">
                 {NAV_LINKS.map((link) => (
                   <button
                     key={link.id}
                     onClick={() => scrollToSection(link.id)}
                     className="text-left text-sm font-medium text-gray-600 hover:text-primary hover:bg-surface transition-all py-3 px-2 rounded-lg"
                   >
                     {link.label}
                   </button>
                 ))}
              </div>
              
              <div className="p-6 bg-primary/5 border-t border-primary/10 mt-auto">
                 <p className="text-[10px] text-primary/70 mb-2 font-bold tracking-wider">예약문의</p>
                 <a href="tel:02-547-2876" className="text-sm font-bold text-primary block mb-1">
                   02-547-2876
                 </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;