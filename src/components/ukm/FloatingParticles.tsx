'use client';

import { useMemo } from 'react';

interface Particle {
  left: string;
  delay: string;
  duration: string;
  size: string;
}

/** Mulberry32 — fast deterministic PRNG for consistent SSR/CSR output */
function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateParticles(): Particle[] {
  const rand = mulberry32(42);
  return Array.from({ length: 25 }).map(() => {
    const size = rand() * 4 + 2;
    return {
      left: `${rand() * 100}%`,
      delay: `${rand() * 8}s`,
      duration: `${6 + rand() * 8}s`,
      size: `${size}px`,
    };
  });
}

export default function FloatingParticles() {
  const particles = useMemo(() => generateParticles(), []);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
