'use client';

import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import TechBadge from '../TechBadge';
import { getTechIcon } from '@/client/utils/techIcons';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
  /** Index of the card in the list */
  index?: number;
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
  className = '',
  index = 0
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const githubLink = githubUrl || `https://github.com/Jaber1028/${githubRepo || title.toLowerCase().replace(/\s+/g, '-')}`;

  // Determine if this is one of the first visible cards
  const isInitiallyVisible = index < 3;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInitiallyVisible || isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.5,
        delay: isInitiallyVisible ? index * 0.1 : 0 
      }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`bg-white/20 dark:bg-gray-900/20 backdrop-blur-md rounded-xl p-8 ${className} transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10`}
    >
      {image && (
        <motion.div 
          className="relative w-full h-48 mb-4 rounded-lg overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={image}
            alt={`${title} project screenshot`}
            fill
            className="object-cover transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </motion.div>
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
            <span className="bullet-point" />
            <span>{achievement}</span>
          </p>
        ))}
      </div>
      <p className="text-gray-600 dark:text-blue-300 text-sm mt-4 text-right">{period}</p>
    </motion.div>
  );
} 