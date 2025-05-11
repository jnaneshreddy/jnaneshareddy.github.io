
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
  const [isMoving, setIsMoving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const moveTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
        
        setIsMoving(true);
        
        if (moveTimeout.current) {
          clearTimeout(moveTimeout.current);
        }
        
        moveTimeout.current = setTimeout(() => {
          setIsMoving(false);
        }, 300);
      }
    };

    const handleMouseEnter = () => {
      setIsMouseInside(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
      setIsMoving(false);
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
        if (moveTimeout.current) {
          clearTimeout(moveTimeout.current);
        }
      };
    }
  }, []);

  const spotlightStyle = isMouseInside ? {
    background: `radial-gradient(circle ${spotlightSize}px at ${position.x}px ${position.y}px, 
                rgba(${color}, ${isMoving ? 0.25 : 0.15}), 
                rgba(${color}, ${isMoving ? 0.15 : 0.1}) 20%, 
                rgba(${color}, ${isMoving ? 0.08 : 0.05}) 40%, 
                rgba(${color}, 0) 80%)`,
    mixBlendMode: 'overlay' as const,
    transition: isMoving ? 'none' : 'all 0.3s ease-out',
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
