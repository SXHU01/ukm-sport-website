'use client';

import { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type AnimationType = 
  | 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' 
  | 'zoom-in' | 'zoom-out' | 'scale' | 'blur-fade' | 'fade';

interface ScrollAnimatorProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export function ScrollAnimator({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  threshold = 0.15,
  once = true,
  className = '',
}: ScrollAnimatorProps) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold, once });

  const animationClass = `anim-${animation}`;

  const style = {
    '--delay': `${delay}ms`,
    '--duration': `${duration}ms`,
  } as React.CSSProperties;

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${animationClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}