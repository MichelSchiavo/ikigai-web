'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const hoverables = document.querySelectorAll('a, button, .swiper-slide, .oni-card');

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        (cursor as HTMLElement).style.left = e.clientX + 'px';
        (cursor as HTMLElement).style.top = e.clientY + 'px';
      }
    };

    const handleMouseOver = () => {
      cursor?.classList.add('hovered');
    };

    const handleMouseLeave = () => {
      cursor?.classList.remove('hovered');
    };

    document.addEventListener('mousemove', handleMouseMove);

    hoverables.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      hoverables.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div className="custom-cursor"></div>;
}