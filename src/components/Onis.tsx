'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { onis } from '@/data';
import { gsap } from 'gsap';

export default function Onis() {
  useEffect(() => {
    const initializeOniCards = () => {
      const oniCardWrappers = document.querySelectorAll('.oni-card-wrapper');
      
      oniCardWrappers.forEach((wrapper) => {
        const card = wrapper.querySelector('.oni-card');
        const glow = card?.querySelector('.oni-card-glow') as HTMLElement;

        wrapper.addEventListener('mousemove', (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const rect = wrapper.getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left;
          const y = mouseEvent.clientY - rect.top;
          const width = rect.width;
          const height = rect.height;

          const rotateX = gsap.utils.mapRange(0, height, 15, -15, y);
          const rotateY = gsap.utils.mapRange(0, width, -15, 15, x);

          if (glow) {
            glow.style.setProperty('--x', `${(x / width) * 100}%`);
            glow.style.setProperty('--y', `${(y / height) * 100}%`);
          }

          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            ease: 'power1.out',
            duration: 0.5
          });
        });

        wrapper.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            ease: 'power1.out',
            duration: 1
          });
        });
      });
    };

    // Aguarda a renderização dos elementos
    const timer = setTimeout(initializeOniCards, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="onis" className="py-20 md:py-32">
      <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
        A Ameaça que Emerge da <span className="text-[#A62639]">Noite</span>
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {onis.map((oni, index) => (
            <div 
              key={oni.id} 
              className="oni-card-wrapper" 
              data-aos="fade-up" 
              data-aos-delay={index * 200}
            >
              <div className="oni-card">
                <div className="oni-card-inner">
                  <Image
                    src={oni.image}
                    alt={`Oni ${oni.name}`}
                    fill
                    className="oni-card-bg"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="oni-card-glow"></div>
                  <div className="oni-card-title">
                    <h3 className="text-2xl font-bold">{oni.name}</h3>
                    <p className="text-sm text-gray-400">{oni.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}