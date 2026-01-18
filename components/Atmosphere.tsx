
import React from 'react';
import { Reveal } from './Reveal';

export const Atmosphere: React.FC = () => {
  const items = [
    { type: 'image', url: "v1.jpg", span: "row-span-2 col-span-2" },
    { type: 'video', url: "/vid.mp4", span: "row-span-1 col-span-1" },
    { type: 'image', url: "v3.jpg", span: "row-span-1 col-span-1" },
    { type: 'video', url: "/v11.mp4", span: "row-span-2 col-span-2" },
  ];

  return (
    <section className="bg-brand-dark py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-10 md:mb-20">
          <span className="text-brand-muted font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Impressionen</span>
          <h2 className="text-4xl md:text-6xl font-medium text-brand-light font-jakarta">Atmosphäre <span className="text-brand-DEFAULT font-serif italic">genießen.</span></h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[800px]">
          {items.map((item, i) => (
            <Reveal key={i} className={`${item.span} md:${item.span} relative rounded-[2rem] overflow-hidden group border border-white/5 ${i === 1 || i === 2 ? 'row-span-1 col-span-1' : 'row-span-1 col-span-1 md:row-span-2 md:col-span-2'}`} delay={i * 100}>
              {item.type === 'video' ? (
                 <video 
                  muted 
                  loop 
                  autoPlay
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                >
                  <source src={item.url} type="video/mp4" />
                </video>
              ) : (
                <img 
                  src={item.url} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                  alt="Volto Lounge" 
                />
              )}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
