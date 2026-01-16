
"use client";

import React, { useState } from 'react';
import { Utensils, Beer, Wind, Pizza, Martini, Sparkles, Coffee, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { MenuDetail } from './MenuDetail';

const CATEGORIES = [
  { 
    id: 'speisen',
    title: 'Speisen', 
    desc: 'Von handgemachten Burgern bis zu Steinofen-Pizza.', 
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80',
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
    <section id="menu-section" className="bg-stone-950 py-32 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-20">
          <span className="text-amber-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Gourmet Explorer</span>
          <h2 className="text-5xl md:text-8xl font-bold text-white font-jakarta tracking-tighter leading-none mb-12">
            The <span className="text-stone-500 italic font-serif font-light">Experience.</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-xl font-light">
            Klicken Sie auf eine Kategorie, um in unsere kulinarische Welt einzutauchen. Jede Auswahl wurde für höchste Ansprüche kuratiert.
          </p>
        </Reveal>

        {/* Visual Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 100}>
              <button 
                onClick={() => setSelectedCategory(cat)}
                className="group relative w-full h-[500px] rounded-[3rem] overflow-hidden text-left hover-lift"
              >
                <img 
                  src={cat.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                  alt={cat.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                
                <div className="absolute top-8 right-8">
                   <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-500">
                      {cat.icon}
                   </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-3xl font-bold text-white font-jakarta mb-3">{cat.title}</h3>
                  <p className="text-stone-400 text-sm font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {cat.desc}
                  </p>
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em]">
                    Karte entdecken <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
          
          {/* Custom Info Card */}
          <Reveal delay={500} className="lg:col-span-1">
             <div className="h-full bg-stone-900/50 border border-white/5 rounded-[3rem] p-12 flex flex-col justify-center text-center">
                <p className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-6">Take-Away</p>
                <h3 className="text-2xl font-bold text-white mb-6">Hunger auf mehr?</h3>
                <p className="text-stone-500 text-sm font-light leading-relaxed mb-8">Alle unsere Gerichte können Sie auch telefonisch zur Abholung bestellen.</p>
                <a href="tel:+4915758349402" className="text-white border-b border-white/20 pb-1 hover:border-amber-500 transition-colors inline-block mx-auto font-bold">01575 8349402</a>
             </div>
          </Reveal>
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
