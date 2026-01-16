
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Reveal } from './Reveal';

export const CTASection: React.FC = () => {
  return (
    <section id="contact-section" className="bg-stone-950 py-20 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Abstract BG */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-800 via-stone-950 to-stone-950 opacity-50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-medium text-white font-jakarta mb-6">Tisch reservieren & genießen</h2>
          <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">Wir empfehlen besonders am Wochenende eine Reservierung. Schreiben Sie uns einfach per WhatsApp.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/4915758349402" className="px-8 py-4 rounded-full bg-green-600 hover:bg-green-500 text-white font-bold transition-all shadow-lg hover:shadow-green-500/20 flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Via WhatsApp reservieren
            </a>
            <a href="tel:+4915758349402" className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/10 text-white font-medium transition-all flex items-center justify-center gap-2">
              <Phone size={20} />
              01575 8349402 anrufen
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
