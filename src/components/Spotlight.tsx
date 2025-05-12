
import React, { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SpotlightProps {
  children: React.ReactNode;
  spotlightSize?: number;
  color?: string;
}

const Spotlight = ({ 
  children, 
  spotlightSize = 250, 
  color = "86, 156, 214"
}: SpotlightProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const moveTimeout = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  
  // Adjust spotlight size for mobile
  const actualSpotlightSize = isMobile ? spotlightSize * 0.6 : spotlightSize;

  useEffect(() => {
    if (isMobile) return; // Don't track mouse movement on mobile
    
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
  }, [isMobile]);

  // For mobile, create a gentle ambient glow effect
  const mobileGlowStyle = {
    background: `radial-gradient(circle 120px at 50% 30%, 
                rgba(${color}, 0.2), 
                rgba(${color}, 0.1) 40%, 
                rgba(${color}, 0.05) 60%, 
                rgba(${color}, 0) 80%)`,
    mixBlendMode: 'overlay' as const,
  };

  // Desktop spotlight effect
  const spotlightStyle = isMouseInside && !isMobile ? {
    background: `radial-gradient(circle ${actualSpotlightSize}px at ${position.x}px ${position.y}px, 
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
        style={isMobile ? mobileGlowStyle : spotlightStyle}
      />
      {children}
    </div>
  );
};

export default Spotlight;
