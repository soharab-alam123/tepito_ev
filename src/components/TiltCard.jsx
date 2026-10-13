import { useState, useRef } from "react";

export default function TiltCard({ children, className = "", maxTilt = 7, ...props }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)"
  });
  const [glare, setGlare] = useState({ opacity: 0, x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out"
    });

    setGlare({
      opacity: 0.22,
      x: ((x / rect.width) * 100).toFixed(1),
      y: ((y / rect.height) * 100).toFixed(1)
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
    });
    setGlare({ opacity: 0, x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      style={{ ...style, position: "relative", overflow: "hidden" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Dynamic Glass Glare Sheen */}
      <div
        className="tilt-card-glare"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 3,
          opacity: glare.opacity,
          background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.75), transparent 80%)`,
          transition: "opacity 0.3s ease"
        }}
      />
      {children}
    </div>
  );
}
