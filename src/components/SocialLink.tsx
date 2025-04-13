'use client';

import { IconType } from 'react-icons';

export interface SocialLinkProps {
  /** The URL to link to */
  href: string;
  /** The icon component to display */
  icon: IconType;
  /** Grid column start position */
  colStart: number;
  /** Optional aria label for accessibility */
  ariaLabel?: string;
}

export default function SocialLink({
  href,
  icon: Icon,
  colStart,
  ariaLabel
}: SocialLinkProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      style={{ fontSize: '4rem' }}
      className={`col-start-${colStart} col-span-2 flex justify-center p-6 text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 relative z-50`}
    >
      <Icon />
    </a>
  );
} 