'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import React from 'react';

interface AnimatedTextProps {
  el?: React.ElementType;
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  el: Wrapper = 'p',
  text,
  className,
  delay = 0,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Wrapper
      ref={ref}
      className={className}
      style={{
        animation: inView ? `fade-in-up 0.8s ${delay}s ease-out forwards` : 'none',
        opacity: 0,
      }}
    >
      {text}
    </Wrapper>
  );
};

export default AnimatedText;
