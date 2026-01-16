
import React from 'react';
import { Play, ArrowDown, MoveRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[100vh] bg-stone-950 overflow-hidden shrink-0 flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 animate-fade-in-up duration-1000">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=2400&q=90" 
          alt="Dark Bar Atmosphere" 
          className="w-full h-full object-cover object-center opacity-30 scale-100 animate-[pulse_10s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-stone-950/60 to-stone-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0c0a09_100%)]"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center text-center">
        <div className="animate-fade-in-up mb-8" style={{ animationDelay: '100ms' }}>
          <span className="px-5 py-2 rounded-full border border-white/5 text-amber-500 bg-white/5 backdrop-blur-xl text-[10px] font-bold tracking-[0.4em] uppercase">
            Est. 2024 • Premium Lounge
          </span>
        </div>
        
        <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-bold text-white tracking-[-0.05em] font-jakarta mb-10 leading-[0.85] drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Volto <br /> 
          <span className="text-stone-600 font-light font-serif italic pr-4">Larva</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl items-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="text-left">
             <p className="text-stone-400 text-lg font-light leading-relaxed max-w-sm">
              Wo Dortmunder Exzellenz auf <br /> cosmopolitischen Flair trifft. Exquisite Cocktails & Premium Shisha.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-end gap-5">
            <a href="#booking-section" className="px-10 py-5 bg-white text-stone-950 rounded-2xl font-bold text-sm tracking-wide hover:bg-amber-500 transition-all hover:scale-105 duration-500 font-jakarta shadow-2xl flex items-center gap-3">
              Tisch buchen
              <MoveRight size={18} />
            </a>
            <button className="px-8 py-5 glass-card text-white rounded-2xl font-medium text-sm tracking-wide hover:bg-white/10 transition-all border border-white/10 font-jakarta flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Play size={14} className="fill-white" />
              </div>
              The Vibe
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 animate-pulse">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};
