import { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({ 
  target, 
  suffix = "", 
  prefix = "", 
  duration = 1600,
  className = "" 
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // If target is 0 or NaN, handle directly
    const numericTarget = typeof target === "number" ? target : parseFloat(target);
    if (isNaN(numericTarget) || numericTarget === 0) {
      setCount(0);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const startTime = performance.now();

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(numericTarget * easeOut);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(numericTarget);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
