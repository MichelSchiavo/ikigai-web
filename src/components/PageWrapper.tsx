'use client';

import { useEffect, ReactNode } from 'react';
import AOS from 'aos';

interface PageWrapperProps {
  children: ReactNode;
  hasParticleEffect?: boolean;
  isFullScreen?: boolean;
  className?: string;
}

export default function PageWrapper({ 
  children, 
  hasParticleEffect = false, 
  isFullScreen = false,
  className = ''
}: PageWrapperProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
    });
  }, []);

  const wrapperClasses = isFullScreen 
    ? "min-h-screen flex flex-col justify-center"
    : "pt-20";

  return (
    <div className={`${wrapperClasses} ${className}`}>
      {hasParticleEffect && (
        <div className="particle-bg"></div>
      )}
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </div>
  );
}