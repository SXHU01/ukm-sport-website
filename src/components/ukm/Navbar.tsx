'use client';

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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
        <div className="flex items-center gap-3">
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
        </div>

        {/* Center: Nav links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '') || 'home';

            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-1 py-2 transition-all duration-300 ${
                  activeSection === id
                    ? 'text-secondary font-bold'
                    : scrolled
                    ? 'text-gray-700 hover:text-secondary'
                    : 'text-white hover:text-secondary'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-secondary transition-all duration-300 ${
                    activeSection === id ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            );
          })}
        </div>

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

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden z-50 ${scrolled ? 'text-primary' : 'text-white'}`}
            aria-label="Toggle menu"
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

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.label}
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
          ))}
          <a
            href={GOOGLE_FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block text-center mx-6 my-5 bg-primary text-white px-6 py-3 rounded-full font-semibold uppercase"
          >
            JOIN NOW
          </a>
        </div>
      )}
    </nav>
  );
}
