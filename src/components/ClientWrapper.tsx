'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initializeAOS = () => {
      AOS.init({
        once: true,
        offset: 50,
      });
    };

    const timer = setTimeout(initializeAOS, 100);
    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
}