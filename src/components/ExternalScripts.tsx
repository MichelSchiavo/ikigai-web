'use client';

import Script from 'next/script';

export default function ExternalScripts() {
  return (
    <>
      {/* Font Awesome */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      
      {/* Swiper CSS */}
      <link 
        rel="stylesheet" 
        href="https://unpkg.com/swiper/swiper-bundle.min.css" 
      />
      
      {/* AOS CSS */}
      <link 
        rel="stylesheet" 
        href="https://unpkg.com/aos@next/dist/aos.css" 
      />

      {/* GSAP */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="beforeInteractive"
      />
      
      {/* Swiper JS */}
      <Script
        src="https://unpkg.com/swiper/swiper-bundle.min.js"
        strategy="beforeInteractive"
      />
      
      {/* AOS JS */}
      <Script
        src="https://unpkg.com/aos@next/dist/aos.js"
        strategy="beforeInteractive"
      />
      
      {/* Typed.js */}
      <Script
        src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"
        strategy="beforeInteractive"
      />
    </>
  );
}