'use client';

import { useEffect } from 'react';
import { breathingTechniques } from '@/data';
import { Swiper } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Pilares() {
  useEffect(() => {
    const initializeSwiper = () => {
      if (typeof window !== 'undefined') {
        new Swiper('.swiper', {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }
        });
      }
    };

    const timer = setTimeout(initializeSwiper, 100);
    return () => clearTimeout(timer);
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'blue-500': 'border-blue-500 text-blue-500',
      'red-600': 'border-red-600 text-red-600',
      'yellow-400': 'border-yellow-400 text-yellow-400',
      'green-500': 'border-green-500 text-green-500',
      'gray-600': 'border-gray-600 text-gray-600',
    };
    return colorMap[color] || 'border-blue-500 text-blue-500';
  };

  return (
    <section id="pilares" className="py-20 md:py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Os Pilares e suas <span className="text-[#A62639]">Respirações</span>
        </h2>
        
        <div className="relative">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-6">
              <button className="swiper-button-prev premium-nav-button group">
                <i className="fas fa-chevron-left absolute"></i>
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#A62639]"></div>
                <div className="relative">
                  <span className="text-[#A62639] font-bold text-sm tracking-[0.2em] uppercase relative">
                    Hashiras
                    <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#A62639] to-transparent opacity-50"></div>
                  </span>
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#A62639]"></div>
              </div>
              
              <button className="swiper-button-next premium-nav-button group">
                <i className="fas fa-chevron-right absolute"></i>
              </button>
            </div>
          </div>
          
          <div className="swiper" data-aos="zoom-in" data-aos-duration="1000">
            <div className="swiper-wrapper">
              {breathingTechniques.map((technique) => {
                const colorClasses = getColorClasses(technique.color);
                return (
                  <div key={technique.id} className="swiper-slide">
                    <div className={`swiper-slide-content bg-[#1A1A1A] rounded-lg p-8 text-center border-b-4 ${colorClasses.split(' ')[0]}`}>
                      <div className="flex-grow">
                        <i className={`${technique.icon} text-5xl ${colorClasses.split(' ')[1]} mb-4`}></i>
                        <h3 className="text-2xl font-bold mb-2">{technique.name}</h3>
                        <p className="text-gray-400">{technique.description}</p>
                      </div>
                      <p className="font-bold mt-4 text-white">
                        {technique.pillar ? `Pilar: ${technique.pillar}` : `Usuário Notável: ${technique.user}`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="swiper-pagination mt-8 !relative"></div>
          </div>
        </div>
      </div>
    </section>
  );
}