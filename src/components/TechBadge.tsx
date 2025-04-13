'use client';

import { IconType } from 'react-icons';

export interface TechBadgeProps {
  /** The icon component to display */
  icon?: IconType;
  /** The text to display next to the icon */
  text: string;
  /** Optional className to override styles */
  className?: string;
  /** Optional size variant */
  size?: 'sm' | 'md' | 'lg';
}

export default function TechBadge({ 
  icon: Icon, 
  text, 
  className = '',
  size = 'md' 
}: TechBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs py-1 px-3',
    md: 'text-sm py-1.5 px-4',
    lg: 'text-base py-2 px-5'
  };

  return (
    <div 
      role="listitem"
      aria-label={`Technology: ${text}`}
      className={`
        inline-flex items-center 
        bg-gray-100 dark:bg-gray-800/50 
        border border-gray-200 dark:border-gray-700 
        rounded-full
        text-gray-700 dark:text-gray-200
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {Icon && (
        <span className="tech-icon" aria-hidden="true">
          <Icon className={`${size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} mr-2`} />
        </span>
      )}
      <span className="tech-name">{text}</span>
    </div>
  );
} 