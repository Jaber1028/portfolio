'use client';

import TechBadge from './TechBadge';
import { getTechIcon } from '@/app/utils/techIcons';

export interface SkillSectionProps {
  /** Section title */
  title: string;
  /** List of technologies */
  technologies: string[];
  /** Optional className for custom styling */
  className?: string;
}

export default function SkillSection({
  title,
  technologies,
  className = ''
}: SkillSectionProps) {
  return (
    <div className={className}>
      <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {technologies.map((tech, i) => {
          const Icon = getTechIcon(tech);
          return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
        })}
      </div>
    </div>
  );
} 