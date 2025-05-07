'use client';

import Link from 'next/link';

interface GameCardProps {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  isNew?: boolean;
}

export default function GameCard({ title, description, path, icon, isNew }: GameCardProps) {
  return (
    <div className="max-w-sm w-full bg-white dark:bg-[#1e2330] rounded-xl shadow-lg p-6 flex flex-col justify-between transition-all duration-300">
      <Link href={path} className="block">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          {isNew && <span className="ml-auto px-2 py-0.5 text-xs bg-blue-500 text-white rounded-full">New</span>}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{description}</p>
      </Link>
    </div>
  );
} 