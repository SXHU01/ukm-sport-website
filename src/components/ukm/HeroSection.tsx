'use client';

import { useEffect, useState } from 'react';
import FloatingParticles from './FloatingParticles';

const GOOGLE_FORMS_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfBEFcJY4K4aEn1UbHPDl9KF-PzTmI9ti8KXtysFdy-eaTV1Q/viewform';

export function HeroSection() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setOffset({
        x: (e.clientX - window.innerWidth / 2) / 80,
        y: (e.clientY - window.innerHeight / 2) / 80,
      });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background Layer + Parallax Wrapper */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(1.1)` }}
        >
          <div className="absolute inset-0 animate-heroZoom">
            <div
              className="absolute inset-0 bg-cover bg-center brightness-50"
              style={{ backgroundImage: "url('/images/heroSection/hero-bg.png')" }}
            />
          </div>
        </div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-primary/80 via-primary/40 to-black/60" />

        {/* Blur Glow Effects */}
        <div className="absolute left-20 top-32 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[180px]"></div>
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-primary/40 blur-[160px]"></div>
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 w-full">
        <div className="max-w-3xl">
          
          {/* Skewed badge */}
          <div 
            className="animate-fadeUp inline-block bg-secondary px-4 py-1 -skew-x-12 mb-6"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="skew-x-12 block text-white font-semibold uppercase tracking-widest text-xs">
              Be a Campus Legend
            </span>
          </div>

          {/* Heading */}
          <h1 
            className="animate-fadeUp font-display text-3xl md:text-[48px] md:leading-[56px] font-extrabold text-white mb-6 tracking-tight drop-shadow-lg"
            style={{ animationDelay: '0.3s' }}
          >
            Asah Bakat, Raih Prestasi Bersama{' '}
            <span className="text-primary-fixed">
              UKM SPORT!
            </span>
          </h1>

          {/* Paragraph */}
          <p 
            className="animate-fadeUp text-lg leading-relaxed text-white/80 mb-10 max-w-2xl drop-shadow-md"
            style={{ animationDelay: '0.5s' }}
          >
            Wadah resmi pengembangan 8 cabang olahraga kampus. Bergabunglah
            bersama kami dalam ekosistem latihan terstruktur, turnamen bergengsi,
            dan pembinaan atlet berprestasi.
          </p>

          {/* CTA Buttons */}
          <div 
            className="animate-fadeUp flex flex-col sm:flex-row gap-4"
            style={{ animationDelay: '0.7s' }}
          >
            <a
              href={GOOGLE_FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-semibold uppercase hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(254,95,0,0.4)] transition-all duration-300 shadow-card text-lg text-center"
            >
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">Gabung Open Recruitment</span>
            </a>
            <a
              href="#sports"
              className="inline-block border-2 border-white/60 text-white px-8 py-4 rounded-lg font-semibold uppercase backdrop-blur-md hover:bg-white hover:text-primary hover:border-white transition-all duration-300 text-lg text-center"
            >
              Jelajahi Cabang Olahraga
            </a>
          </div>

          {/* Statistik */}
          <div 
            className="animate-fadeUp mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-md"
            style={{ animationDelay: '0.9s' }}
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">350+</h2>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-widest mt-1">Anggota</p>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-secondary-container drop-shadow-lg">8</h2>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-widest mt-1">Cabang</p>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">40+</h2>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-widest mt-1">Prestasi</p>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator Glow */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 text-white scroll-glow opacity-70 hover:opacity-100 transition-opacity duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6" />
          <path d="m18 19-6-6-6 6" />
        </svg>
      </div>
    </section>
  );
}