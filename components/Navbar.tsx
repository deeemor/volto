"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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
              ? 'bg-black/50 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-xl shadow-black/10' 
              : 'bg-transparent backdrop-blur-none border border-transparent shadow-none'
            }
          `}
        >
          {/* Logo Area */}
          <a href="#" className="pl-4 md:pl-6 flex items-center gap-2 group">
            <div className="relative w-12 h-12 md:w-16 md:h-16 group-hover:scale-110 transition duration-300">
              <Image 
                src="/l1.png" 
                alt="Volto Larva Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center bg-transparent backdrop-blur-sm rounded-full px-1.5 p-1.5 border border-transparent shadow-none">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id || (link.name === 'Home' && activeSection === '');
              return (
                <a 
                  key={link.name}
                  href={link.href} 
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-500 relative tracking-wide ${
                    isActive 
                      ? 'text-brand-dark bg-brand-light shadow-lg shadow-amber-500/20' 
                      : 'text-brand-light hover:text-amber-500 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 pr-2">
            <div className="hidden sm:flex items-center gap-1 bg-black/20 backdrop-blur-md rounded-full px-3 py-2 text-xs font-bold border border-white/5">
              <span className="text-brand-dark cursor-pointer bg-brand-light px-3 py-1.5 rounded-full transition-all shadow-sm">DE</span>
              <span className="text-brand-light/70 hover:text-amber-500 cursor-pointer hover:bg-white/5 px-3 py-1.5 rounded-full transition-all">EN</span>
            </div>

            <a href="https://wa.me/4915758349402" className="hidden sm:flex bg-brand-DEFAULT text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-brand-500 transition shadow-xl shadow-brand-DEFAULT/20 items-center gap-2 group whitespace-nowrap hover:scale-105 duration-300 border border-brand-400/50">
              <span>Reservieren</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-brand-dark text-brand-light shadow-lg active:scale-90 transition-all border border-brand-muted/50 z-[60] relative cursor-pointer pointer-events-auto"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[55] bg-brand-dark/98 backdrop-blur-[30px] transition-all duration-700 md:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-10'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-DEFAULT/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="flex flex-col gap-8 text-center relative z-10 w-full px-6">
          {navLinks.map((link, i) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-bold text-brand-light font-jakarta hover:text-amber-500 transition-colors transform hover:scale-110 duration-300 tracking-tight"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Language Selector */}
          <div className="flex items-center justify-center gap-4 mt-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
             <span className="text-brand-dark cursor-pointer bg-brand-light px-4 py-2 rounded-full font-bold shadow-lg shadow-brand-light/20">DE</span>
             <span className="text-brand-light/70 hover:text-amber-500 cursor-pointer border border-white/10 px-4 py-2 rounded-full font-bold transition-all">EN</span>
          </div>

          <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <a 
              href="https://wa.me/4915758349402"
              onClick={() => setIsMobileMenuOpen(false)} 
              className="w-full max-w-xs mx-auto bg-brand-DEFAULT text-white px-8 py-5 rounded-full text-lg font-bold hover:bg-brand-500 hover:text-white transition-all duration-300 shadow-2xl inline-flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              Tisch reservieren <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
