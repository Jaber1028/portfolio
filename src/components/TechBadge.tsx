import React, { useEffect, useRef } from 'react';
import { IconType } from 'react-icons';

interface TechBadgeProps {
  icon?: IconType;
  text: string;
}

const TechBadge = ({ icon: Icon, text }: TechBadgeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  // Apply styles after component mounts to ensure they override everything
  useEffect(() => {
    if (containerRef.current) {
      Object.assign(containerRef.current.style, {
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '9999px',
        padding: '8px 16px',
        margin: '4px',
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      });
    }

    if (iconRef.current) {
      Object.assign(iconRef.current.style, {
        display: 'inline-flex',
        marginRight: '8px',
        color: 'black',
      });
    }

    if (textRef.current) {
      Object.assign(textRef.current.style, {
        color: 'black',
      });
    }
  }, []);

  return (
    <div ref={containerRef}>
      {Icon && (
        <span ref={iconRef}>
          <Icon color="black" style={{ color: 'black', fill: 'black', width: '20px', height: '20px' }} />
        </span>
      )}
      <span ref={textRef}>{text}</span>
    </div>
  );
};

export default TechBadge; 