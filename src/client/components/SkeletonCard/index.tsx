'use client';

export default function SkeletonCard() {
  return (
    <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-md rounded-xl p-8 animate-pulse">
      <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4" />
      <div className="flex justify-between items-start mb-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-8" />
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20" />
        ))}
      </div>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        ))}
      </div>
    </div>
  );
} 