import { useState, useRef } from "react";

export default function MagneticButton({ 
  children, 
  className = "", 
  onClick, 
  pullFactor = 0.25,
  ...props 
}) {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current || window.innerWidth < 1024) return;
    
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * pullFactor;
    const deltaY = (e.clientY - centerY) * pullFactor;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={btnRef}
      className={`magnetic-btn-wrap ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x.toFixed(1)}px, ${position.y.toFixed(1)}px, 0)`,
        transition: position.x === 0 && position.y === 0 
          ? "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease" 
          : "transform 0.1s ease-out"
      }}
      {...props}
    >
      {children}
    </button>
  );
}
