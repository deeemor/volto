
"use client";

import React, { useEffect, useState } from 'react';
import { X, ArrowLeft, Star, Clock, ChefHat, Info } from 'lucide-react';
import { MenuItem } from '@/types';

interface MenuDetailProps {
  category: string;
  image: string;
  data: Record<string, MenuItem[]>;
  onClose: () => void;
}

export const MenuDetail: React.FC<MenuDetailProps> = ({ category, image, data, onClose }) => {
  const [activeSub, setActiveSub] = useState<string>(Object.keys(data)[0]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[110] bg-stone-950 animate-fade-in-up flex flex-col lg:flex-row font-jakarta">
      
      {/* Left Split: Visuals (Hidden on small mobile to save space, or scaled down) */}
      <div className="relative w-full lg:w-[40%] h-[30vh] lg:h-full shrink-0 overflow-hidden bg-stone-900">
        <img 
          src={image} 
          className="w-full h-full object-cover scale-105 opacity-80" 
          alt={category} 
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-stone-950 via-stone-950/40 to-transparent" />
        
        {/* Mobile Close Button (Top Left) */}
        <div className="absolute top-6 left-6 lg:hidden z-50">
           <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full text-white border border-white/10 active:scale-95 transition-transform"
          >
            <ArrowLeft size={20} />
          </button>
        </div>

        {/* Content Overlay (Desktop) */}
        <div className="absolute bottom-12 left-12 right-12 hidden lg:block">
          <span className="text-amber-500 font-bold tracking-[0.4em] text-xs uppercase mb-6 block animate-fade-in-up">Premium Selection</span>
          <h2 className="text-7xl font-bold text-white tracking-tighter leading-[0.9] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {category}
          </h2>
          <div className="mt-8 flex gap-6 text-stone-400 text-sm animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-2">
                <Clock size={16} className="text-amber-500" />
                <span>Zubereitung ca. 20 min</span>
            </div>
            <div className="flex items-center gap-2">
                <ChefHat size={16} className="text-amber-500" />
                <span>Handcrafted</span>
            </div>
          </div>
        </div>
        
        {/* Content Overlay (Mobile - simplified) */}
        <div className="absolute bottom-6 left-6 right-6 lg:hidden">
          <h2 className="text-4xl font-bold text-white tracking-tighter leading-none shadow-black drop-shadow-lg">
            {category}
          </h2>
        </div>
      </div>

      {/* Right Split: Content */}
      <div className="flex-grow bg-stone-950 h-[70vh] lg:h-full relative flex flex-col">
        
        {/* Desktop Header / Close Button */}
        <div className="absolute top-8 right-8 z-50 hidden lg:flex items-center gap-4">
             <button 
            onClick={onClose}
            className="flex items-center gap-2 text-stone-500 hover:text-white transition-colors px-4 py-2 font-bold text-xs uppercase tracking-widest group"
          >
            Schließen <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Sub-Category Navigation (Sticky) */}
        <div className="px-6 lg:px-16 pt-6 lg:pt-20 pb-4 overflow-x-auto hide-scrollbar shrink-0 border-b border-white/5 bg-stone-950 sticky top-0 z-40">
            <div className="flex gap-8 min-w-max">
                {Object.keys(data).map((subCat) => (
                    <button
                        key={subCat}
                        onClick={() => setActiveSub(subCat)}
                        className={`text-xs lg:text-sm font-bold uppercase tracking-widest pb-3 border-b-2 transition-all duration-300 ${
                            activeSub === subCat 
                            ? 'text-amber-500 border-amber-500' 
                            : 'text-stone-500 border-transparent hover:text-stone-300'
                        }`}
                    >
                        {subCat}
                    </button>
                ))}
            </div>
        </div>

        {/* Scrollable List */}
        <div className="flex-grow overflow-y-auto px-6 lg:px-16 py-8 custom-scrollbar">
          <div className="max-w-3xl space-y-10 animate-fade-in-up" key={activeSub}>
              <div className="space-y-6">
                {data[activeSub]?.map((item, i) => (
                  <div key={i} className="group relative pl-0 lg:pl-6 border-l-0 lg:border-l border-white/5 hover:border-amber-500/50 transition-colors duration-300 py-2">
                    <div className="flex justify-between items-baseline gap-4 mb-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="text-lg lg:text-xl font-medium text-stone-200 group-hover:text-amber-500 transition-colors duration-300">
                          {item.name}
                        </h4>
                        {item.tag && (
                          <span className="text-[9px] px-2 py-0.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full uppercase font-bold tracking-widest whitespace-nowrap">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <span className="text-base lg:text-lg font-bold text-white whitespace-nowrap">{item.price}</span>
                    </div>
                    {item.desc && <p className="text-stone-500 text-xs lg:text-sm font-light leading-relaxed max-w-lg group-hover:text-stone-400 transition-colors">{item.desc}</p>}
                  </div>
                ))}
              </div>
          </div>

          {/* Footer Info */}
          <div className="mt-16 pt-8 border-t border-white/5 pb-20 lg:pb-10">
            <div className="flex items-start gap-4 text-stone-600 text-xs leading-relaxed max-w-xl">
                <Info size={16} className="mt-0.5 text-amber-500/50 shrink-0" />
                <p>
                    Preise inkl. MwSt. Haben Sie Allergien? Unser Service-Team berät Sie gerne zu Inhaltsstoffen und möglichen Anpassungen.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
