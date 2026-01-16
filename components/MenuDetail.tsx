
"use client";

import React, { useEffect } from 'react';
import { X, ArrowLeft, Star, Clock } from 'lucide-react';
import { MenuItem } from '@/types';

interface MenuDetailProps {
  category: string;
  image: string;
  data: Record<string, MenuItem[]>;
  onClose: () => void;
}

export const MenuDetail: React.FC<MenuDetailProps> = ({ category, image, data, onClose }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[110] bg-stone-950 overflow-y-auto animate-fade-in-up flex flex-col">
      {/* Header Banner */}
      <div className="relative h-[40vh] md:h-[50vh] shrink-0 overflow-hidden">
        <img src={image} className="w-full h-full object-cover scale-105" alt={category} />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/20" />
        
        {/* Navigation Buttons */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-white bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-500 font-bold text-sm group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Zurück
          </button>
          <button 
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Title Area */}
        <div className="absolute bottom-12 left-8 md:left-20">
          <span className="text-amber-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Premium Selection</span>
          <h2 className="text-6xl md:text-8xl font-bold text-white font-jakarta tracking-tighter leading-none">
            {category}
          </h2>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow bg-stone-950 px-8 md:px-20 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
          {/* Explicitly casting Object.entries to avoid 'unknown' type inference which causes .map to fail */}
          {(Object.entries(data) as [string, MenuItem[]][]).map(([subCat, items]) => (
            <div key={subCat} className="space-y-10">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold text-white font-jakarta">{subCat}</h3>
                <div className="h-px flex-grow bg-white/5" />
              </div>
              
              <div className="space-y-8">
                {items.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline gap-4 mb-2">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xl font-medium text-stone-200 group-hover:text-amber-500 transition-colors duration-300">
                          {item.name}
                        </h4>
                        {item.tag && (
                          <span className="text-[9px] px-2 py-0.5 bg-amber-500 text-stone-950 rounded-full uppercase font-bold tracking-widest">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <span className="text-lg font-bold text-white font-jakarta whitespace-nowrap">{item.price}</span>
                    </div>
                    {item.desc && <p className="text-stone-500 text-sm font-light leading-relaxed max-w-md">{item.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Informative Footer for details */}
        <div className="mt-32 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex gap-12">
            <div>
              <p className="text-stone-600 uppercase tracking-widest text-[10px] font-bold mb-2">Service</p>
              <p className="text-white text-sm">Am Tisch serviert</p>
            </div>
            <div>
              <p className="text-stone-600 uppercase tracking-widest text-[10px] font-bold mb-2">Allergene</p>
              <p className="text-white text-sm">In der Karte markiert</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-stone-500 text-xs italic mb-4 max-w-sm">Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer und Servicegebühren.</p>
            <a href="https://wa.me/4915758349402" className="inline-flex items-center gap-3 text-amber-500 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
              Jetzt Tisch reservieren <Star size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
