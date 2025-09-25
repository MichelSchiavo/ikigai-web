'use client';

import { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Pilares from './Pilares';
import Onis from './Onis';
import Lore from './Lore';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

export default function ClientComponents() {
  useEffect(() => {
    const initializeAOS = () => {
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.init({
          once: true,
          offset: 50,
        });
      }
    };

    const timer = setTimeout(initializeAOS, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="particle-bg"></div>
      <CustomCursor />
      <Header />
      <Hero />
      <About />
      <Pilares />
      <Onis />
      <Lore />
      <Footer />
    </>
  );
}