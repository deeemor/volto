
"use client";

import React, { useState } from 'react';
import { Utensils, Beer, Wind, Pizza, Martini, Sparkles, Coffee, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { MenuDetail } from './MenuDetail';
import { MenuItem } from '@/types';

interface CategoryData {
  id: string;
  title: string;
  desc: string;
  image: string;
  video: string;
  icon: React.ReactNode;
  data: Record<string, MenuItem[]>;
}

const CATEGORIES: CategoryData[] = [
  { 
    id: 'speisen',
    title: 'Speisen', 
    desc: 'Von handgemachten Burgern bis zu Steinofen-Pizza.', 
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80',
    video: '/v11.mp4',
    icon: <Utensils size={24} />,
    data: {
      'Finger Food': [
        { name: 'Chicken Wings', price: '5,90 €', desc: 'Knusprig mit Dip nach Wahl' },
        { name: 'Mozzarella-Sticks', price: '5,90 €' },
        { name: 'Calamari', price: '5,90 €' },
        { name: 'Pommes frites', price: '5,90 €', desc: 'Für 2 Personen' },
        { name: 'Finger Food Dips', price: '1,20 €', desc: 'Salsa, Guacamole, Aioli, uvm.' }
      ],
      'Burger (inkl. Pommes)': [
        { name: 'Cheeseburger', price: '15,90 €', tag: 'Classic' },
        { name: 'Chicken-Caesar-Burger', price: '16,90 €' },
        { name: 'Avocado-Burger', price: '17,90 €', tag: 'Premium' }
      ],
      'Pizza Selection': [
        { name: 'Pizza Margherita', price: '11,90 €' },
        { name: 'Pizza Toskana', price: '14,90 €', desc: 'Salami, Schinken, Pilze, Zwiebeln' },
        { name: 'Pizza Diavolo', price: '14,90 €', tag: 'Scharf' },
        { name: 'Pizza Gamberetti', price: '15,90 €', desc: 'Garnelen, Knoblauch, Cherrytomaten' }
      ],
      'Salate & Mehr': [
        { name: 'Fitness-Salat', price: '12,90 €', desc: 'Hähnchen, Obst, Basilikum-Dressing' },
        { name: 'Mexico-Salat', price: '11,90 €' },
        { name: 'Schnitzel Wiener Art', price: '13,90 €' },
        { name: 'Shish Taouk', price: '14,90 €', desc: 'Marinierte Hähnchenspieße' }
      ]
    }
  },
  { 
    id: 'shisha',
    title: 'Shisha', 
    desc: 'Premium Tabak & exklusive Shisha-Köpfe.', 
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=1200&q=80',
    video: '/vid0.mp4',
    icon: <Wind size={24} />,
    data: {
      'Best Seller': [
        { name: 'Volto Signature', price: '16,90 €', tag: 'Must Try' },
        { name: 'African Queen', price: '16,90 €' },
        { name: 'Love 66', price: '16,90 €' },
        { name: 'Pistachio Breeze', price: '16,90 €' }
      ],
      'Cold Selection': [
        { name: 'Cold Melon', price: '16,90 €' },
        { name: 'Watermelon Chill', price: '16,90 €' },
        { name: 'Lemon Chill', price: '16,90 €' }
      ],
      'Upgrades': [
        { name: 'Volto Shisha Spezial', price: '29,90 €', tag: 'Elite' },
        { name: 'Eis-Schlauch', price: '3,00 €' },
        { name: 'Neuer Kopf', price: '10,90 €' }
      ]
    }
  },
  { 
    id: 'cocktails',
    title: 'Cocktails', 
    desc: 'Signature Drinks & zeitlose Klassiker.', 
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80',
    video: '/vid.mp4',
    icon: <Martini size={24} />,
    data: {
      'Signature Drinks': [
        { name: 'Volto Spezial', price: '22,80 €', tag: 'Exklusiv' },
        { name: 'Gin Basil Smash', price: '12,80 €' },
        { name: 'Moscow Mule', price: '11,80 €' },
        { name: 'Paloma', price: '12,80 €' }
      ],
      'Classic Mix': [
        { name: 'Mojito', price: '12,80 €' },
        { name: 'Caipirinha', price: '11,80 €' },
        { name: 'Sex on the Beach', price: '12,80 €' },
        { name: 'Long Island Iced Tea', price: '12,80 €' }
      ],
      'Mocktails (0% Alc)': [
        { name: 'Virgin Mojito', price: '9,40 €', tag: 'Happy Hour' },
        { name: 'Ipanema', price: '9,40 €' },
        { name: 'Cinderella', price: '9,40 €' }
      ]
    }
  },
  { 
    id: 'drinks',
    title: 'Drinks', 
    desc: 'Softdrinks, Weine & Heißgetränke.', 
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80',
    video: '/vi3.mp4',
    icon: <Coffee size={24} />,
    data: {
      'Heißgetränke': [
        { name: 'Espresso', price: '2,90 €' },
        { name: 'Cappuccino', price: '3,80 €' },
        { name: 'Latte Macchiato', price: '4,50 €' },
        { name: 'Frischer Minztee', price: '4,40 €' }
      ],
      'Hausgemacht': [
        { name: 'Homemade Limonade', price: '6,90 €', desc: 'Verschiedene Sorten' },
        { name: 'Hausgemachter Ice Tea', price: '4,80 €' }
      ],
      'Softdrinks': [
        { name: 'Coca Cola / Zero', price: '3,90 €' },
        { name: 'Moloko', price: '4,90 €' },
        { name: 'Red Bull Edition', price: '4,90 €' }
      ]
    }
  },
  { 
    id: 'nightlife',
    title: 'Nightlife', 
    desc: 'Bottles, Longdrinks & Champagner.', 
    image: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=1200&q=80',
    video: '/v11.mp4',
    icon: <Sparkles size={24} />,
    data: {
      'Bottles 0.75l': [
        { name: 'Belvedere Vodka', price: '145,00 €', tag: 'Inc. 4 Mix' },
        { name: 'Moët Chandon', price: '120,00 €' },
        { name: 'Jack Daniels', price: '120,00 €' }
      ],
      'Long Drinks': [
        { name: 'Hennessy Red Bull', price: '10,90 €' },
        { name: 'Vodka Red Bull', price: '9,90 €' },
        { name: 'Bacardi Cola', price: '7,90 €' }
      ],
      'Shooters': [
        { name: 'B52', price: '4,90 €' },
        { name: 'Tequila Rose', price: '3,90 €' },
        { name: 'Mexikaner', price: '3,90 €' }
      ]
    }
  }
];

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[0] | null>(null);

  return (
    <section id="menu-section" className="bg-stone-950 py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-DEFAULT/5 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-light/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <Reveal className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
          <div>
            <span className="text-amber-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 md:mb-6 block">Culinary Journey</span>
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white font-jakarta tracking-tighter leading-[0.9]">
              The <span className="text-brand-muted italic font-serif font-light">Taste</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-DEFAULT/50">Collection.</span>
            </h2>
          </div>
          <p className="text-stone-400 text-base md:text-lg max-w-md font-light leading-relaxed pb-2">
            Entdecken Sie eine kuratierte Auswahl an erstklassigen Speisen und Getränken. Jede Kategorie ein eigenes Erlebnis.
          </p>
        </Reveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 100}>
              <button 
                onClick={() => setSelectedCategory(cat)}
                className="group relative w-full h-[400px] md:h-[500px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden text-left transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(198,142,77,0.15)] border border-white/5 hover:border-brand-DEFAULT/30 z-20 pointer-events-auto touch-manipulation"
              >
                <img 
                  src={cat.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 z-0 grayscale-[20%] group-hover:grayscale-0" 
                  alt={cat.title} 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/90 z-10 pointer-events-none" />
                
                {/* Top Number */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 font-serif italic text-3xl md:text-4xl text-white/20 group-hover:text-amber-500/50 transition-colors duration-500 pointer-events-none">
                  0{i + 1}
                </div>

                {/* Icon */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 pointer-events-none">
                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-DEFAULT group-hover:text-stone-950 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      {cat.icon}
                   </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
                  <h3 className="text-3xl md:text-4xl font-bold text-white font-jakarta mb-3 md:mb-4 leading-none">{cat.title}</h3>
                  <div className="h-px w-12 bg-brand-DEFAULT mb-3 md:mb-4 transition-all duration-500 group-hover:w-full" />
                  <p className="text-stone-300 text-xs md:text-sm font-light leading-relaxed mb-4 md:mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {cat.desc}
                  </p>
                  <div className="flex items-center gap-3 text-amber-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] group/btn">
                    Details ansehen 
                    <div className="w-8 h-8 rounded-full border border-amber-500/30 flex items-center justify-center group-hover/btn:bg-amber-500 group-hover/btn:text-stone-950 transition-all duration-300">
                      <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Fullscreen Sub-Page Overlay */}
      {selectedCategory && (
        <MenuDetail 
          category={selectedCategory.title}
          image={selectedCategory.image}
          data={selectedCategory.data}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </section>
  );
};
