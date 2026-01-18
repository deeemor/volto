
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, MessageCircle } from 'lucide-react';

interface Message {
  role: 'assistant' | 'user';
  text: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Willkommen im Volto Larva. Ich bin Ihr digitaler Concierge. Wie kann ich Ihren Abend heute veredeln?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', text: userMsg }],
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const aiText = data.text || "Ich konnte keine Antwort finden. Bitte kontaktieren Sie uns per WhatsApp.";
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Entschuldigung, unser System ist gerade ausgelastet. Bitte nutzen Sie unser WhatsApp." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end pointer-events-none">
      <div 
        className={`bg-stone-950 border border-white/10 rounded-[2.5rem] shadow-2xl w-[380px] mb-6 overflow-hidden transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right pointer-events-auto touch-manipulation ${
          isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <div className="bg-stone-900 p-6 flex justify-between items-center border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
              <Bot size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-sm font-jakarta">Volto Concierge</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">Online</p>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div ref={scrollRef} className="h-[420px] overflow-y-auto p-6 flex flex-col gap-5 scroll-smooth bg-stone-950">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-5 py-4 rounded-3xl text-[13px] leading-relaxed shadow-sm border ${
                msg.role === 'user' 
                  ? 'bg-white text-stone-950 border-white/20 rounded-tr-none' 
                  : 'bg-stone-900 text-stone-300 border-white/5 rounded-tl-none font-light'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-stone-900 p-4 rounded-3xl rounded-tl-none border border-white/5 flex gap-1.5">
                <span className="w-1 h-1 bg-amber-500 rounded-full animate-bounce" />
                <span className="w-1 h-1 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1 h-1 bg-amber-500 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-white/5 bg-stone-900/40 backdrop-blur-2xl">
          <div className="relative flex items-center gap-3">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Wie kann ich helfen?"
              className="w-full bg-stone-800/50 border border-white/5 rounded-2xl px-5 py-4 text-[13px] text-white focus:outline-none focus:border-amber-500/40 transition-all placeholder:text-stone-600"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-white hover:bg-amber-500 text-stone-950 p-4 rounded-2xl transition-all duration-300 disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
          <a href="https://wa.me/4915758349402" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-green-500 hover:text-white transition-all duration-500">
            <MessageCircle size={14} />
            WhatsApp Reservierung
          </a>
        </div>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-16 h-16 bg-white text-stone-950 rounded-[2rem] shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-500 relative group pointer-events-auto touch-manipulation"
      >
        <div className="absolute inset-0 bg-white/20 rounded-[2rem] animate-ping group-hover:animate-none -z-10" />
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};
