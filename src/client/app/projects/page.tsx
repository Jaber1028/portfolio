'use client';

import Link from 'next/link';
import { useState } from 'react';
import ProjectCard from '@/client/components/ProjectCard';
import ProjectSearch from '@/client/components/ProjectSearch';
import { ProjectCategory } from '@/types/project';
import { projects } from '@/data/projects';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  
  const categories: ProjectCategory[] = ['All', 'Web', 'Mobile', 'Systems', 'Misc'];

  const filteredProjects = projects.filter(project => {
    const searchTermLower = searchTerm.toLowerCase();
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTermLower) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchTermLower)) ||
      project.description.toLowerCase().includes(searchTermLower) ||
      project.achievements.some(achievement => achievement.toLowerCase().includes(searchTermLower));
    
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-[1061px] mx-auto">
      <div className="bg-white/30 dark:bg-gray-800/80 backdrop-blur-md rounded-t-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-4">All Projects</h1>
        <p className="text-center text-gray-600 dark:text-blue-200 mb-6">
          Explore my portfolio of web applications, mobile apps, and other digital creations that showcase my skills and expertise.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white/30 dark:bg-gray-800/80 backdrop-blur-md">
        <div className="p-8">
          <ProjectSearch onSearch={setSearchTerm} />
          <div className="space-y-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  index={index}
                />
              ))
            ) : (
              <p className="text-center text-gray-600 dark:text-blue-200 py-8">
                No projects found matching your search criteria.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="text-center mt-12 mb-12">
        <Link
          href="/"
          className="button-primary"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
} 