'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const getLinkClass = (path: string) => {
    const baseClass = "text-gray-300 hover:text-white transition-all duration-300 relative";
    const activeClass = "text-white after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#A62639] after:transition-all after:duration-300";
    
    return isActive(path) ? `${baseClass} ${activeClass}` : baseClass;
  };

  return (
    <header 
      id="header" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'header-sticky' : ''
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white tracking-wider hover:text-[#A62639] transition-colors">
          IKIGAI<span className="text-[#A62639]">.</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 font-semibold">
          <Link href="/jornada" className={getLinkClass('/jornada')}>
            A Jornada
          </Link>
          <Link href="/pilares" className={getLinkClass('/pilares')}>
            Pilares
          </Link>
          <Link href="/onis" className={getLinkClass('/onis')}>
            A Ameaça
          </Link>
          <Link href="/lore" className={getLinkClass('/lore')}>
            Nossa Lenda
          </Link>
        </div>
        
        <Link 
          href="/pilares" 
          className="hidden md:inline-block sword-btn py-2 px-5 text-sm font-bold uppercase tracking-widest"
        >
          Junte-se
        </Link>
      </nav>
    </header>
  );
}