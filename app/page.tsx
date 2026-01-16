import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MenuSection } from '@/components/MenuSection';
import { Atmosphere } from '@/components/Atmosphere';
import { LoungeSection } from '@/components/LoungeSection';
import { Events } from '@/components/Events';
import { BookingSection } from '@/components/BookingSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 flex flex-col overflow-x-hidden">
      
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <MenuSection />
        <Atmosphere />
        <LoungeSection />
        <Events />
        <BookingSection />
        <CTASection />
      </main>
      
      <Footer />
      
      <ChatWidget />
      
    </div>
  );
}