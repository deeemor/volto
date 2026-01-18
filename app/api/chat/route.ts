// app/api/chat/route.ts
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: messages.map((m: any) => ({
        parts: [{ text: m.text }],
        role: m.role === 'assistant' ? 'model' : 'user'
      })),
      config: {
        systemInstruction: `You are the premium AI Concierge for 'Volto Larva', a high-end Bar & Lounge in Dortmund.
        
        PRICES & DATA:
        - Burger: Cheeseburger (15.90€), Avocado-Burger (17.90€). Includes fries.
        - Pizza: Margherita (11.90€), Diavolo (14.90€), Hollandaise (15.90€).
        - Shisha: All Standard (16.90€), Volto Special (29.90€).
        - Cocktails: Classic/Exotic (11.80€-12.80€), Volto Spezial Cocktail (22.80€).
        - Happy Hour: 14:00-18:00 (Mocktails 50% cheaper).
        - Hours: Fri-Sat until 4 AM.
        
        TONE: Elegant, professional, and slightly exclusive.
        GOAL: Answer questions precisely. If they want to book, push them to the WhatsApp button.`,
      },
    });

    return new Response(JSON.stringify({ text: response.text }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
