import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
  onClick?: () => void;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(6, 182, 212, 0.15)',
  enableTilt = true,
  onClick,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (y - centerY) / 25;
      const tiltY = (centerX - x) / 25;

      setTilt({ x: tiltX, y: tiltY });
    }
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    if (enableTilt) {
      setTilt({ x: 0, y: 0 });
    }
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 450,
        damping: 25,
      }}
      className={`relative overflow-hidden rounded-2xl glass-panel p-6 transition-colors duration-200 ${className}`}
    >
      {/* Spotlight Radial Background Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-150 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Spotlight Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-150 z-10 border border-cyan-500/30"
        style={{
          opacity,
          maskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
};
