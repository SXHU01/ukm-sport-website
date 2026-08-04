'use client';

import { useEffect, useRef } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.15, once = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Cek apakah user meminta reduced motion di OS-nya
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) {
              observer.unobserve(entry.target); // Lepas observer agar tidak membebani RAM
            }
          } else if (!once) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, once]);

  return ref;
}