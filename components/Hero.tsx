
import React from 'react';
import { Play, MoveRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[100vh] bg-stone-950 overflow-hidden shrink-0 flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 animate-fade-in-up duration-1000">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Luxury Overlay: Black with ~35-45% opacity */}
        <div className="absolute inset-0 bg-black/40 z-[2]"></div>
        {/* Subtle gradient to blend bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-950/90 z-[3]"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-8 flex flex-col items-center text-center">
        <div className="animate-fade-in-up mb-6 md:mb-8" style={{ animationDelay: '100ms' }}>
          <span className="px-4 py-2 md:px-5 md:py-2 rounded-full border border-brand-light/10 text-amber-500 bg-brand-dark/40 backdrop-blur-xl text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase shadow-lg shadow-black/20">
            Est. 2024 • Premium Lounge
          </span>
        </div>
        
        <h1 className="text-[14vw] md:text-[9vw] lg:text-[8vw] font-bold text-brand-light tracking-[-0.05em] font-jakarta mb-8 md:mb-10 leading-[0.9] md:leading-[0.85] drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Volto <br /> 
          <span className="text-amber-500 font-light font-serif italic pr-2 md:pr-4">Larva</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl items-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="text-center md:text-left order-2 md:order-1">
             <p className="text-brand-light/90 text-base md:text-lg font-light leading-relaxed max-w-sm mx-auto md:mx-0">
              Wo Dortmunder Exzellenz auf <br className="hidden md:block" /> cosmopolitischen Flair trifft. Exquisite Cocktails & Premium Shisha.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 md:gap-5 order-1 md:order-2 w-full">
            <a href="#booking-section" className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-brand-light text-brand-dark rounded-xl md:rounded-2xl font-bold text-sm tracking-wide hover:bg-amber-500 hover:text-white transition-all hover:scale-105 duration-500 font-jakarta shadow-2xl shadow-brand-light/10 flex items-center justify-center gap-3">
              Tisch buchen
              <MoveRight size={18} />
            </a>
            <button className="w-full sm:w-auto px-8 py-4 md:px-8 md:py-5 glass-card text-brand-light rounded-xl md:rounded-2xl font-medium text-sm tracking-wide hover:bg-brand-light/10 transition-all border border-brand-light/10 font-jakarta flex items-center justify-center gap-3 group">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-light/10 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                <Play size={12} className="fill-brand-light group-hover:fill-white transition-colors" />
              </div>
              The Vibe
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 animate-pulse z-20">
        <span className="text-[10px] uppercase tracking-[0.5em] text-brand-light/70">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </div>
    </div>
  );
};
