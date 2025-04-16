'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface GameCardProps {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  isNew?: boolean;
}

export default function GameCard({ title, description, path, icon, isNew }: GameCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/30 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 hover:shadow-lg transition-all"
    >
      <Link href={path} className="block">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 text-blue-500">{icon}</div>
          {isNew && (
            <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
              New
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </Link>
    </motion.div>
  );
} 