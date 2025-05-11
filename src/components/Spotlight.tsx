
import React, { useEffect, useState, useRef } from 'react';

interface SpotlightProps {
  children: React.ReactNode;
  spotlightSize?: number;
  color?: string;
  nameHighlight?: string;
}

const Spotlight = ({ 
  children, 
  spotlightSize = 250, 
  color = "86, 156, 214", 
  nameHighlight = "Your Name"
}: SpotlightProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const moveTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newPosition = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
        
        setPosition(newPosition);
        setIsMoving(true);
        
        if (moveTimeout.current) {
          clearTimeout(moveTimeout.current);
        }
        
        moveTimeout.current = setTimeout(() => {
          setIsMoving(false);
        }, 150);

        // Highlight the name element when mouse is close to it
        if (nameRef.current) {
          const nameRect = nameRef.current.getBoundingClientRect();
          const nameCenterX = nameRect.left + nameRect.width / 2 - rect.left;
          const nameCenterY = nameRect.top + nameRect.height / 2 - rect.top;
          
          const distance = Math.sqrt(
            Math.pow(newPosition.x - nameCenterX, 2) + 
            Math.pow(newPosition.y - nameCenterY, 2)
          );
          
          if (distance < 120) {
            nameRef.current.classList.add('text-primary', 'scale-110');
            nameRef.current.style.textShadow = '0 0 15px rgba(86, 156, 214, 0.8)';
          } else {
            nameRef.current.classList.remove('text-primary', 'scale-110');
            nameRef.current.style.textShadow = 'none';
          }
        }
      }
    };

    const handleMouseEnter = () => {
      setIsMouseInside(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
      setIsMoving(false);
      
      // Reset name highlight when mouse leaves
      if (nameRef.current) {
        nameRef.current.classList.remove('text-primary', 'scale-110');
        nameRef.current.style.textShadow = 'none';
      }
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
                rgba(${color}, ${isMoving ? 0.35 : 0.25}), 
                rgba(${color}, ${isMoving ? 0.2 : 0.15}) 20%, 
                rgba(${color}, ${isMoving ? 0.1 : 0.08}) 40%, 
                rgba(${color}, 0) 80%)`,
    mixBlendMode: 'overlay' as const,
    transition: isMoving ? 'none' : 'all 0.4s ease-out',
  } : {};

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={spotlightStyle}
      />
      <div ref={nameRef} className="absolute top-4 right-8 px-6 py-3 text-xl font-bold transition-all duration-300 rounded-lg text-code-blue">
        {nameHighlight}
      </div>
      {children}
    </div>
  );
};

export default Spotlight;
