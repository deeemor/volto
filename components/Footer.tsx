
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-10 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        
        {/* Brand Column */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-light rounded-full flex items-center justify-center text-brand-dark font-bold font-jakarta">V</div>
            <span className="text-xl font-bold text-brand-light font-jakarta">Volto Larva</span>
          </div>
          <p className="text-brand-light/50 text-sm leading-relaxed mb-6 max-w-sm">
            Bar, Restaurant & Lounge im Herzen von Dortmund. 
            Premium Qualität, erstklassiger Service und eine unvergessliche Atmosphäre.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, idx) => (
              <a key={idx} href="https://www.instagram.com/volto.larva/" className="w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-brand-light/50 hover:text-brand-DEFAULT hover:border-brand-DEFAULT/50 transition">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Links 1 */}
        <div className="lg:col-span-2">
          <h4 className="text-brand-light font-medium font-jakarta mb-6">Navigation</h4>
          <ul className="space-y-3 text-sm text-brand-light/50">
            <li><a href="#" className="hover:text-brand-DEFAULT transition">Home</a></li>
            <li><a href="#menu-section" className="hover:text-brand-DEFAULT transition">Speisekarte</a></li>
            <li><a href="#lounge-section" className="hover:text-brand-DEFAULT transition">Lounge</a></li>
            <li><a href="#contact-section" className="hover:text-brand-DEFAULT transition">Reservierung</a></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div className="lg:col-span-3">
          <h4 className="text-brand-light font-medium font-jakarta mb-6">Rechtliches</h4>
          <ul className="space-y-3 text-sm text-brand-light/50">
            <li><a href="#" className="hover:text-brand-DEFAULT transition">Impressum</a></li>
            <li><a href="#" className="hover:text-brand-DEFAULT transition">Datenschutz</a></li>
            <li><a href="#" className="hover:text-brand-DEFAULT transition">AGB</a></li>
            <li><a href="#" className="hover:text-brand-DEFAULT transition">Cookie Einstellungen</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-3">
          <h4 className="text-brand-light font-medium font-jakarta mb-6">Newsletter</h4>
          <p className="text-brand-light/50 text-xs mb-4">Erhalten Sie Infos zu Events & Special Deals.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Ihre Email" 
              className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm text-brand-light w-full focus:outline-none focus:border-brand-DEFAULT/50 transition placeholder:text-brand-light/20" 
            />
            <button className="bg-brand-light text-brand-dark px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-DEFAULT hover:text-white transition">Go</button>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-brand-light/30 text-xs">© 2024 Volto Larva. Alle Rechte vorbehalten.</p>
        <div className="flex gap-2 items-center">
          <span className="w-2 h-2 rounded-full bg-brand-vivid animate-pulse"></span>
          <span className="text-brand-light/30 text-xs">System Operational</span>
        </div>
      </div>
    </footer>
  );
};
