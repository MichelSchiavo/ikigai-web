'use client';

import { useRef } from 'react';
import { breathingTechniques } from '@/data';
import { Swiper as SwiperType } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Pilares() {
  const swiperRef = useRef<SwiperType | null>(null);

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
    <section id="pilares" className="py-20 md:py-32">
      <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
        Os Pilares e suas <span className="text-[#A62639]">Respirações</span>
        </h2>
        
        <div className="relative">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-6">
              <button 
                className="swiper-button-prev premium-nav-button group"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <i className="fas fa-chevron-left text-[#A62639] group-hover:text-white transition-colors"></i>
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
              
              <button 
                className="swiper-button-next premium-nav-button group"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <i className="fas fa-chevron-right text-[#A62639] group-hover:text-white transition-colors"></i>
              </button>
            </div>
          </div>
          
          <div data-aos="zoom-in" data-aos-duration="1000">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination]}
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              className="hashiras-swiper"
            >
              {breathingTechniques.map((technique) => {
                const colorClasses = getColorClasses(technique.color);
                return (
                  <SwiperSlide key={technique.id}>
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
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="swiper-pagination mt-8 !relative"></div>
          </div>
        </div>
    </section>
  );
}