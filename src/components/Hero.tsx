'use client';

import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Verificar se as bibliotecas foram carregadas
    const initializeAnimations = () => {
      if (typeof window !== 'undefined' && window.gsap && window.Typed) {
        // Typed.js para o título da Hero Section
        const typed = new window.Typed('#hero-typed-text', {
          strings: ['Ikigai.', 'Propósito.', 'Destino.'],
          typeSpeed: 70,
          backSpeed: 50,
          loop: true,
          cursorChar: '❚',
        });

        // GSAP animations
        const tl = window.gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.to('#hero-title', { opacity: 1, y: -20, duration: 1, delay: 0.5 });
        tl.to('#hero-subtitle', { opacity: 1, y: -20, duration: 1 }, "-=0.7");
        tl.to('#hero-btn', { opacity: 1, y: -20, duration: 1 }, "-=0.7");

        return () => {
          typed.destroy();
        };
      }
    };

    const timer = setTimeout(initializeAnimations, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden"
      style={{ 
        backgroundImage: "url('https://placehold.co/1920x1080/100a0a/333333?text=Cena+de+Batalha')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 px-4">
        <h1 
          id="hero-title" 
          className="text-4xl md:text-7xl font-extrabold uppercase tracking-wider opacity-0"
        >
          Forje seu <span id="hero-typed-text" className="text-[#A62639]"></span>
        </h1>
        <p 
          id="hero-subtitle" 
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-300 opacity-0"
        >
          Em um mundo de exilados, encontre sua razão para lutar. Domine sua respiração e lute pela sua sobrevivência.
        </p>
        <a 
          href="#pilares" 
          id="hero-btn" 
          className="sword-btn inline-block mt-10 py-3 px-8 text-xl font-bold uppercase tracking-widest opacity-0"
        >
          Descubra seu poder
        </a>
      </div>
    </section>
  );
}