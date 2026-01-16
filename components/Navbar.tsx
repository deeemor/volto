"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled (for background change)
      setIsScrolled(currentScrollY > 20);

      // Hide/Show logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      lastScrollY.current = currentScrollY;

      // Active section detection
      const sections = ['menu-section', 'lounge-section', 'contact-section'];
      let current = '';
      
      // Check if we are at the top
      if (currentScrollY < 100) {
        current = '';
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = section;
            }
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu-section', id: 'menu-section' },
    { name: 'Lounge', href: '#lounge-section', id: 'lounge-section' },
    { name: 'Kontakt', href: '#contact-section', id: 'contact-section' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? 'py-4' : 'py-6'
        } ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}`}
      >
        <div 
          className={`
            relative rounded-full px-2 py-2 flex items-center justify-between gap-8 
            transition-all duration-500 w-[95%] max-w-4xl
            ${isScrolled 
              ? 'bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-xl shadow-black/10' 
              : 'bg-white/40 backdrop-blur-md border border-white/20 shadow-lg'
            }
          `}
        >
          {/* Logo Area */}
          <a href="#" className="pl-4 md:pl-6 flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center text-white group-hover:scale-110 transition duration-300 shadow-lg ring-2 ring-white/20">
              <span className="font-bold font-jakarta text-sm md:text-base">V</span>
            </div>
            <span className="font-jakarta font-bold text-lg md:text-xl tracking-tight text-stone-900">Volto Larva</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center bg-stone-100/80 backdrop-blur-sm rounded-full px-1.5 p-1.5 border border-stone-200/50 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id || (link.name === 'Home' && activeSection === '');
              return (
                <a 
                  key={link.name}
                  href={link.href} 
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-500 relative ${
                    isActive 
                      ? 'text-stone-950 bg-white shadow-md' 
                      : 'text-stone-500 hover:text-stone-900 hover:bg-white/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 pr-2">
            <div className="hidden sm:flex items-center gap-1 bg-stone-200/50 rounded-full px-3 py-2 text-xs font-bold border border-stone-300/30">
              <span className="text-stone-900 cursor-pointer hover:bg-white px-2 py-1 rounded-full transition-all">DE</span>
              <span className="text-stone-300">/</span>
              <span className="text-stone-400 hover:text-stone-900 cursor-pointer hover:bg-white px-2 py-1 rounded-full transition-all">EN</span>
            </div>

            <a href="https://wa.me/4915758349402" className="hidden sm:flex bg-stone-950 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-stone-800 transition shadow-xl shadow-stone-950/20 items-center gap-2 group whitespace-nowrap hover:scale-105 duration-300">
              <span>Reservieren</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-lg text-stone-950 active:scale-90 transition-all border border-stone-100"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-stone-950/90 backdrop-blur-[20px] transition-all duration-700 md:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-10'
        }`}
      >
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link, i) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-bold text-white font-jakarta hover:text-amber-500 transition-colors transform hover:scale-110 duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <a 
              href="https://wa.me/4915758349402"
              onClick={() => setIsMobileMenuOpen(false)} 
              className="bg-white text-stone-950 px-10 py-5 rounded-full text-lg font-bold hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-2xl inline-flex items-center gap-3 transform hover:-translate-y-1"
            >
              Tisch reservieren <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
