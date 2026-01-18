
import React from 'react';
import { Clock, Fan, Tv, Star } from 'lucide-react';
import { FeatureItemProps } from '../types';
import { Reveal } from './Reveal';

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, iconColorClass }) => (
  <div className="flex items-start gap-4">
    <div className={`w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center shrink-0 border border-white/5 ${iconColorClass}`}>
      {icon}
    </div>
    <div>
      <h4 className="text-white font-medium font-jakarta text-lg">{title}</h4>
      <p className="text-stone-500 text-sm">{description}</p>
    </div>
  </div>
);

export const LoungeSection: React.FC = () => {
  return (
    <section id="lounge-section" className="bg-stone-900 w-full px-6 md:px-12 lg:px-20 py-24 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <Reveal>
          <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-4 block">Shisha Lounge & Bar</span>
          <h2 className="text-4xl lg:text-5xl font-medium text-white font-jakarta tracking-tight mb-6">
            Der Place-to-be <br /> <span className="text-stone-500">am Wochenende.</span>
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed mb-8">
            Volto Larva verbindet stilvolles Ambiente mit entspannten Vibes. Unsere Lounge bietet den perfekten Rückzugsort für Gespräche, Genuss und unvergessliche Abende.
          </p>
          
          <div className="space-y-6">
            <FeatureItem 
              icon={<Clock size={20} />} 
              title="Lange Öffnungszeiten" 
              description="Freitag & Samstag bis 04:00 Uhr morgens." 
              iconColorClass="text-amber-500"
            />
            <FeatureItem 
              icon={<Fan size={20} />} 
              title="Top Belüftung" 
              description="Modernste Anlage für angenehme Luftqualität, auch bei vollem Haus." 
              iconColorClass="text-white"
            />
            <FeatureItem 
              icon={<Tv size={20} />} 
              title="Live Sports" 
              description="Alle wichtigen Spiele live auf mehreren HD-Screens." 
              iconColorClass="text-brand-light"
            />
          </div>
        </Reveal>

        <Reveal className="relative h-[600px] rounded-[3rem] overflow-hidden group" delay={200}>
          <img 
            src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1200&q=80" 
            alt="Interior Design" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Floating Stats Card */}
          <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl max-w-xs text-white pointer-events-none">
            <div className="flex items-center gap-2 mb-2">
               <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-stone-900" src="https://i.pravatar.cc/100?img=1" alt="Avatar" />
                  <img className="w-8 h-8 rounded-full border-2 border-stone-900" src="https://i.pravatar.cc/100?img=2" alt="Avatar" />
                  <img className="w-8 h-8 rounded-full border-2 border-stone-900" src="https://i.pravatar.cc/100?img=3" alt="Avatar" />
               </div>
               <span className="text-xs font-semibold">+2k Besucher</span>
            </div>
            <p className="text-sm text-stone-200">"Beste Shisha Bar in Dortmund! Service top, Ambiente 10/10."</p>
            <div className="flex gap-1 mt-3 text-orange-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
