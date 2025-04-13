'use client';

import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import TechBadge from '../TechBadge';
import { getTechIcon } from '@/client/utils/techIcons';

export interface ProjectCardProps {
  /** Project title */
  title: string;
  /** Project description */
  description: string;
  /** List of technologies used */
  tech: string[];
  /** List of project achievements/features */
  achievements: string[];
  /** Project timeline */
  period: string;
  /** Optional GitHub repository name (will be prefixed with username) */
  githubRepo?: string;
  /** Optional custom GitHub URL */
  githubUrl?: string;
  /** Optional project image */
  image?: string;
  /** Optional className for custom styling */
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  achievements,
  period,
  githubRepo,
  githubUrl,
  image,
  className = ''
}: ProjectCardProps) {
  const githubLink = githubUrl || `https://github.com/Jaber1028/${githubRepo || title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={`bg-white/20 dark:bg-gray-900/20 backdrop-blur-md rounded-xl p-8 ${className}`}>
      {image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={`${title} project screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex justify-between items-start mb-1">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 dark:text-blue-200 dark:hover:text-white transition-colors"
        >
          <FaGithub className="text-xl" />
        </a>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {tech.map((tech, i) => {
          const Icon = getTechIcon(tech);
          return Icon && <TechBadge key={i} icon={Icon} text={tech} size="sm" />;
        })}
      </div>
      <div className="mb-8">
        <p className="text-xl font-extrabold text-gray-800 dark:text-blue-100 leading-relaxed underline decoration-blue-700/30 underline-offset-8">
          {description}
        </p>
      </div>
      <div className="space-y-3">
        {achievements.map((achievement, i) => (
          <p key={i} className="flex items-start text-gray-700 dark:text-blue-200">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
            <span>{achievement}</span>
          </p>
        ))}
      </div>
      <p className="text-gray-600 dark:text-blue-300 text-sm mt-4 text-right">{period}</p>
    </div>
  );
} 