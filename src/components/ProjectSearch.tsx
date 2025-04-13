'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface ProjectSearchProps {
  onSearch: (searchTerm: string) => void;
}

export default function ProjectSearch({ onSearch }: ProjectSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search projects by title or technology..."
          className="w-full px-4 py-2 pl-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm 
                     border border-gray-200 dark:border-gray-700 rounded-lg
                     text-gray-700 dark:text-gray-200 
                     placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                     transition-all duration-300"
          aria-label="Search projects"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
      </div>
    </div>
  );
} 