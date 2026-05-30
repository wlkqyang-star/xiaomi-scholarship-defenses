import React, { useEffect, useRef, useState } from 'react';

const NumberTicker: React.FC<{ value: string; className?: string }> = ({ value, className }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const numericValue = Number.parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        const duration = 1600;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 4);
          setDisplayValue(Math.floor(numericValue * ease));

          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <span ref={elementRef} className={`font-mono ${className || ''}`}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

export default NumberTicker;
