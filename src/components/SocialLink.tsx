'use client';

import { IconType } from 'react-icons';

export interface SocialLinkProps {
  /** The URL to link to */
  href: string;
  /** The icon component to display */
  icon: IconType;
  /** Optional aria label for accessibility */
  ariaLabel?: string;
}

export default function SocialLink({
  href,
  icon: Icon,
  ariaLabel
}: SocialLinkProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-[4rem] p-6 text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
    >
      <Icon />
    </a>
  );
} 