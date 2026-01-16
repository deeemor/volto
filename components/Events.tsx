
import React from 'react';
import { Sparkles, Music, Martini } from 'lucide-react';
import { Reveal } from './Reveal';

export const Events: React.FC = () => {
  const events = [
    { title: "Ladies Night", day: "Jeden Donnerstag", icon: <Sparkles />, desc: "First Drink on us für alle Ladies. Beste Vibes garantiert." },
    { title: "Volto Beats", day: "Freitag & Samstag", icon: <Music />, desc: "Live DJ Sets mit feinstem RnB, House & Classics." },
    { title: "Cocktail Special", day: "Jeden Sonntag", icon: <Martini />, desc: "Alle Signature Cocktails den ganzen Abend für nur 8,50€." },
  ];

  return (
    <section className="bg-stone-950 py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {events.map((ev, i) => (
            <Reveal key={i} delay={i * 150} className="group glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-amber-500/30 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-stone-800 text-amber-500 flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors duration-500">
                {ev.icon}
              </div>
              <p className="text-amber-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">{ev.day}</p>
              <h3 className="text-2xl font-bold text-white font-jakarta mb-4">{ev.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{ev.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
