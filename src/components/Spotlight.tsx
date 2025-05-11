
import React, { useEffect, useState, useRef } from 'react';

interface SpotlightProps {
  children: React.ReactNode;
  spotlightSize?: number;
  color?: string;
}

const Spotlight = ({ 
  children, 
  spotlightSize = 150, 
  color = "255, 255, 255" 
}: SpotlightProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseEnter = () => {
      setIsMouseInside(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const spotlightStyle = isMouseInside ? {
    background: `radial-gradient(circle ${spotlightSize}px at ${position.x}px ${position.y}px, 
                rgba(${color}, 0.15), 
                rgba(${color}, 0.1) 20%, 
                rgba(${color}, 0.05) 40%, 
                rgba(${color}, 0) 80%)`,
    mixBlendMode: 'overlay' as const,
  } : {};

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={spotlightStyle}
      />
      {children}
    </div>
  );
};

export default Spotlight;
