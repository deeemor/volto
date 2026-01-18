"use client";

import React, { useState, useRef } from 'react';
import { Calendar, Clock, MapPin, ArrowUpRight, Play } from 'lucide-react';

const EventCard = ({ 
  title, 
  date, 
  time, 
  description, 
  videoSrc, 
  isLarge = false 
}: { 
  title: string; 
  date: string; 
  time: string; 
  description: string; 
  videoSrc: string;
  isLarge?: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className={`relative group overflow-hidden rounded-3xl border border-white/5 bg-stone-900/50 ${
        isLarge ? 'col-span-1 md:col-span-2 row-span-2 aspect-[4/3] md:aspect-auto' : 'col-span-1 aspect-[3/4]'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100 transition-transform"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
          <div className="flex gap-2">
             <span className="bg-amber-500/90 text-stone-950 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
              Event
            </span>
            {isLarge && (
              <span className="bg-white/10 text-brand-light text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm flex items-center gap-1">
                <Play size={10} className="fill-brand-light" /> Featured
              </span>
            )}
          </div>
          <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-light group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-300 transform rotate-0 group-hover:rotate-45">
            <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-4 text-brand-light/70 text-xs font-medium mb-3 tracking-wide">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} className="text-amber-500" /> {date}
            </span>
            <span className="w-1 h-1 rounded-full bg-brand-muted" />
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-amber-500" /> {time}
            </span>
          </div>

          <h3 className={`font-jakarta font-bold text-white mb-3 leading-tight ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
            {title}
          </h3>

          <p className={`text-stone-400 font-light leading-relaxed mb-6 line-clamp-2 ${isLarge ? 'text-base max-w-lg' : 'text-sm'}`}>
            {description}
          </p>

          <div className={`overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
             <button className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500 border-b border-amber-500/30 pb-1 hover:text-brand-light hover:border-brand-light transition-colors">
              Details & Reservierung
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Mask Element (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-colors duration-700" />
    </div>
  );
};

export const EventsSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-stone-950" id="events-section">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-dark/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
          <div>
            <span className="text-amber-500 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-2 md:mb-3 block">
              Erleben Sie Volto
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-jakarta">
              Events & <span className="text-amber-500 font-serif italic">Atmosphäre</span>
            </h2>
          </div>
          <p className="text-stone-400 max-w-sm text-sm leading-relaxed">
            Tauchen Sie ein in unsere Welt aus exklusiven Events, Live-DJs und unvergesslichen Nächten. Hinter jeder Maske steckt eine Geschichte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px] md:auto-rows-[400px]">
          {/* Main Featured Event */}
          <EventCard
            title="Golden Mask Night"
            date="Jeden Samstag"
            time="Ab 22:00 Uhr"
            description="Unsere Signature-Nacht. Deep House Vibes, Premium Cocktails und eine Atmosphäre voller Geheimnisse."
            videoSrc="/v11.mp4"
            isLarge={true}
          />

          {/* Secondary Events */}
          <EventCard
            title="Afterwork Lounge"
            date="Donnerstags"
            time="18:00 - 00:00"
            description="Der perfekte Ausklang. Entspannte Beats und Special Deals auf unsere Cocktail-Karte."
            videoSrc="/vid.mp4"
          />

          <EventCard
            title="Ladies Night"
            date="Freitags"
            time="Ab 21:00 Uhr"
            description="Welcome Drink für Ladies bis 23 Uhr. R&B Classics und modern Beats."
            videoSrc="/vid0.mp4"
          />
        </div>
        
        <div className="mt-16 flex justify-center">
            <a href="https://www.instagram.com/volto.larva/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-amber-500 hover:border-amber-500 transition-all duration-300">
                <span className="text-white text-sm font-bold tracking-wide group-hover:text-stone-950">Mehr auf Instagram</span>
                <ArrowUpRight size={16} className="text-amber-500 group-hover:text-stone-950" />
            </a>
        </div>
      </div>
    </section>
  );
};