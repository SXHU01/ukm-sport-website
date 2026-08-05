'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const GOOGLE_FORMS_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfBEFcJY4K4aEn1UbHPDl9KF-PzTmI9ti8KXtysFdy-eaTV1Q/viewform';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SPORTS', href: '#sports' },
  { label: 'AGENDA', href: '#agenda' },
  { label: 'FACILITIES', href: '#facilities' },
];

// Tetap memakai Named Export agar tidak error di page.tsx Anda
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  // 1. Scroll Listener dengan requestAnimationFrame (Agar scroll halus)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 2. IntersectionObserver dengan rootMargin (Agar active menu lebih natural)
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // 3. Lock Body Scroll saat Drawer terbuka
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // 4. Escape Key untuk menutup Drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-xl h-20'
          : 'bg-transparent h-24'
      }`}
    >
      <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop">
        {/* Left: Logo area */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer"
          aria-label="Kembali ke atas"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo/uin-gusdur.webp"
              alt="UIN Gusdur Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/images/logo/ukm-sport.webp"
              alt="UKM Sport Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
            <span
              className={`font-display text-xl md:text-2xl font-extrabold tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              UKM SPORT
            </span>
            <span
              className={`text-sm md:text-base font-medium tracking-widest uppercase transition-colors duration-500 ${
                scrolled ? 'text-on-surface-variant' : 'text-white/80'
              }`}
            >
              UIN GUSDUR
            </span>
          </div>
        </button>

        {/* Center: Nav links (Desktop) - Diperbaiki ke <ul> dan <li> */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '') || 'home';

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative px-1 py-2 transition-all duration-300 group ${
                    activeSection === id
                      ? 'text-secondary font-bold'
                      : scrolled
                      ? 'text-gray-700 hover:text-secondary'
                      : 'text-white hover:text-secondary'
                  }`}
                >
                  {link.label}
                  {/* Hover & Active Underline */}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-secondary transition-all duration-300 ${
                      activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: CTA Button & Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href={GOOGLE_FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:block px-6 py-2 rounded-full font-semibold uppercase active:scale-95 transition-all duration-500 ${
              scrolled
                ? 'bg-primary text-white'
                : 'bg-secondary text-white'
            }`}
          >
            JOIN NOW
          </a>

          {/* Hamburger Menu (Mobile) + ARIA */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden z-50 ${scrolled ? 'text-primary' : 'text-white'}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Backdrop / Klik di luar untuk menutup */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer dengan Animasi */}
        <div
          id="mobile-menu"
          className={`absolute top-full left-0 right-0 z-50 bg-white shadow-xl md:hidden border-t border-gray-100 transition-all duration-300 ease-out ${
            mobileOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-8 py-5 border-b border-gray-100 transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-secondary font-bold bg-gray-50'
                    : 'text-gray-800 hover:text-secondary'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={GOOGLE_FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block text-center mx-6 my-5 bg-primary text-white px-6 py-3 rounded-full font-semibold uppercase"
            >
              JOIN NOW
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}