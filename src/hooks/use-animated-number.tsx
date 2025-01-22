import { useEffect, useState } from 'react';

export const useAnimatedNumber = (value: number) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let animationFrame: number;
    const duration = 500;
    const startValue = displayValue;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const interpolatedValue = startValue + (value - startValue) * progress;
      setDisplayValue(interpolatedValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return Math.round(displayValue);
};
