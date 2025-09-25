'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="header" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'header-sticky' : ''
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white tracking-wider">
          IKIGAI<span className="text-[#A62639]">.</span>
        </a>
        <div className="hidden md:flex items-center space-x-8 font-semibold">
          <a href="#sobre" className="text-gray-300 hover:text-white transition">
            A Jornada
          </a>
          <a href="#pilares" className="text-gray-300 hover:text-white transition">
            Pilares
          </a>
          <a href="#onis" className="text-gray-300 hover:text-white transition">
            A Ameaça
          </a>
          <a href="#lore" className="text-gray-300 hover:text-white transition">
            Nossa Lenda
          </a>
        </div>
        <a 
          href="#" 
          className="hidden md:inline-block sword-btn py-2 px-5 text-sm font-bold uppercase tracking-widest"
        >
          Junte-se
        </a>
      </nav>
    </header>
  );
}