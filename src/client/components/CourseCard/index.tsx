'use client';

import TechBadge from '../TechBadge';
import { getTechIcon } from '@/client/utils/techIcons';

interface CourseCardProps {
  course: string;
  tech: string[];
}

export default function CourseCard({ course, tech }: CourseCardProps) {
  return (
    <div className="flex flex-col">
      <p className="flex items-start text-gray-700 dark:text-blue-200 mb-2">
        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
        <span>{course}</span>
      </p>
      <div className="flex flex-wrap gap-2 ml-4">
        {tech.map((techItem, i) => {
          const Icon = getTechIcon(techItem);
          return Icon && <TechBadge key={i} icon={Icon} text={techItem} size="sm" />;
        })}
      </div>
    </div>
  );
} 