
import React from 'react';
import { Reveal } from './Reveal';

export const Atmosphere: React.FC = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80", span: "row-span-2 col-span-2" },
    { url: "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=800&q=80", span: "row-span-1 col-span-1" },
    { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", span: "row-span-1 col-span-1" },
    { url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80", span: "row-span-2 col-span-2" },
  ];

  return (
    <section className="bg-stone-900 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-20">
          <span className="text-stone-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Impressionen</span>
          <h2 className="text-4xl md:text-6xl font-medium text-white font-jakarta">Atmosphäre genießen.</h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
          {images.map((img, i) => (
            <Reveal key={i} className={`${img.span} relative rounded-[2rem] overflow-hidden group`} delay={i * 100}>
              <img 
                src={img.url} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                alt="Volto Lounge" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
