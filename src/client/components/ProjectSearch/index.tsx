'use client';

import { ChangeEvent } from 'react';

interface ProjectSearchProps {
  onSearch: (term: string) => void;
}

export default function ProjectSearch({ onSearch }: ProjectSearchProps) {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search projects by title, technology, or description..."
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      />
    </div>
  );
} 