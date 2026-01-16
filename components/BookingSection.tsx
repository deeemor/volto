
import React from 'react';
import { Calendar, Users, Clock, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

export const BookingSection: React.FC = () => {
  return (
    <section id="booking-section" className="bg-stone-950 py-32 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-amber-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Reservation Concierge</span>
            <h2 className="text-5xl lg:text-8xl font-semibold text-white font-jakarta tracking-tighter mb-10 leading-[0.9]">
              Zeit für <br /> <span className="text-stone-500 italic font-serif font-light pr-2">Exzellenz.</span>
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-12 max-w-md font-light">
              Gönnen Sie sich einen Abend, der im Gedächtnis bleibt. Wir reservieren Ihren Tisch für bis zu 15 Minuten nach der vereinbarten Zeit.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <Calendar size={22} />, label: "Flexibilität", detail: "Täglich ab 14:00 Uhr geöffnet" },
                { icon: <Users size={22} />, label: "Exklusivität", detail: "Private VIP-Lounges für Gruppen" },
                { icon: <ShieldCheck size={22} />, label: "Sicherheit", detail: "Sofortige Bestätigung via WhatsApp" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-3xl bg-stone-900 border border-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-700">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold font-jakarta text-lg mb-0.5">{item.label}</p>
                    <p className="text-stone-500 text-sm font-light">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={200}>
            <div className="glass-card rounded-[3.5rem] p-8 md:p-16 relative border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]">
              <div className="absolute -top-8 -right-8 bg-amber-500 text-stone-950 font-bold py-4 px-8 rounded-3xl shadow-2xl transform rotate-6 animate-pulse">
                Hot Spot
              </div>
              
              <div className="space-y-8 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 ml-4">Gäste Name</label>
                    <input type="text" placeholder="Ihren Namen" className="w-full bg-stone-900/80 border border-white/5 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none focus:border-amber-500/30 focus:ring-1 focus:ring-amber-500/20 transition-all placeholder:text-stone-700" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 ml-4">Personenanzahl</label>
                    <select className="w-full bg-stone-900/80 border border-white/5 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none focus:border-amber-500/30 transition-all appearance-none cursor-pointer">
                      <option>2 Personen</option>
                      <option>4 Personen</option>
                      <option>6 Personen</option>
                      <option>VIP Lounge (8+)</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 ml-4">Datum & Zeit</label>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="date" className="bg-stone-900/80 border border-white/5 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none" />
                        <input type="time" className="bg-stone-900/80 border border-white/5 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none" />
                    </div>
                </div>
              </div>
              
              <div className="bg-stone-900/50 rounded-[2rem] p-8 border border-white/5 mb-10 flex items-center justify-between group hover:border-amber-500/20 transition-all">
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                        <Star size={20} fill="currentColor" />
                    </div>
                    <div>
                        <p className="text-white font-bold font-jakarta">Prime Time Special</p>
                        <p className="text-xs text-stone-500 font-light">Happy Hour gilt auch bei Reservierung</p>
                    </div>
                </div>
                <div className="text-right">
                  <p className="text-green-500 font-bold text-sm tracking-widest uppercase animate-pulse">Live</p>
                </div>
              </div>

              <a 
                href="https://wa.me/4915758349402"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-6 bg-white text-stone-950 rounded-[1.5rem] font-bold font-jakarta text-lg flex items-center justify-center gap-4 hover:bg-amber-500 transition-all duration-500 group shadow-2xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                Verbindlich reservieren
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
              </a>
              
              <p className="text-center mt-8 text-stone-600 text-[9px] uppercase tracking-[0.4em] font-bold">
                Exklusive Bestätigung via WhatsApp Concierge
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
