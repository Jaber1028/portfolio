'use client';

import { motion } from 'framer-motion';
import TechBadge from '../TechBadge';
import { getTechIcon } from '@/client/utils/techIcons';

export interface JobCardProps {
  /** Job title */
  title: string;
  /** Company name */
  company: string;
  /** Employment period */
  period: string;
  /** Job location */
  location: string;
  /** Technologies used */
  tech: string[];
  /** List of achievements */
  achievements: string[];
  /** Animation delay for staggered appearance */
  index?: number;
}

export default function JobCard({
  title,
  company,
  period,
  location,
  tech,
  achievements,
  index = 0
}: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white/30 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 min-w-[300px] w-full h-full"
    >
      <div className="flex flex-col mb-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-700 dark:text-blue-400 text-base">{company}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 dark:text-blue-200 text-sm whitespace-nowrap mb-1">{period}</p>
          <p className="text-gray-600 dark:text-blue-200 text-sm">{location}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((tech, i) => {
          const Icon = getTechIcon(tech);
          return Icon && <TechBadge key={i} icon={Icon} text={tech} size="sm" />;
        })}
      </div>
      <div className="space-y-3">
        {achievements.map((achievement, i) => (
          <p key={i} className="flex items-start text-gray-700 dark:text-blue-200 text-sm">
            <span className="bullet-point" />
            <span>{achievement}</span>
          </p>
        ))}
      </div>
    </motion.div>
  );
} 