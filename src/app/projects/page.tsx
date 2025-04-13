'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import TechBadge from '@/components/TechBadge';
import { getTechIcon } from '@/app/utils/techIcons';

interface Project {
  title: string;
  tech: string[];
  description: string;
  achievements: string[];
  period: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Portfolio",
      tech: ["Next.js", "Tailwind", "React", "TypeScript", "Framer Motion", "CI/CD"],
      description: "A modern, responsive portfolio website with dark mode support and interactive animations",
      achievements: [
        "Developed a responsive portfolio website using Next.js 13 with App Router and TypeScript for type safety",
        "Implemented dynamic dark mode theming with smooth transitions and persistent user preferences",
        "Created reusable components with Tailwind CSS for consistent styling and Framer Motion for engaging animations",
        "Designed a modular education section showcasing coursework with interactive tech badges and clean layout"
      ],
      period: "Apr. 2025 - Present"
    },
    {
      title: "Fake Stack Overflow",
      tech: ["TypeScript", "React", "REST APIs", "Express", "MongoDB", "Socket.io", "CI/CD"],
      description: "A comprehensive Q&A platform with authentication, direct messaging, and interactive games using TypeScript and the MERN stack",
      achievements: [
        "Built a comprehensive Q&A platform with authentication, direct messaging, and interactive games using TypeScript and the MERN stack",
        "Architected a Daily Puzzles feature with automated generation algorithms that create unique logic challenges daily through cron scheduling",
        "Implemented real-time data synchronization across components using Socket.io for chat systems, game state updates, and leaderboard visualization"
      ],
      period: "Jan. 2025 - Apr. 2025"
    },
    {
      title: "Parasite",
      tech: ["WebGL", "C#", "Unity"],
      description: "A WebGL game with efficient pathfinding algorithms and responsive UI",
      achievements: [
        "Implemented efficient pathfinding algorithms using A* search in C#",
        "Designed responsive UI system interfaces",
        "Collaborated with a team of four using Git version control"
      ],
      period: "May 2024 - June 2024"
    },
    {
      title: "Kanbas",
      tech: ["JavaScript", "React", "HTML", "CSS", "Node.js", "MongoDB", "Redux"],
      description: "A full-stack learning management system inspired by Canvas, featuring course creation, assignment management, and grading",
      achievements: [
        "Developed a full-stack learning management system inspired by Canvas, featuring course creation, assignment management, and grading",
        "Architected a Single Page Application (SPA) using React and Redux for state management, enabling seamless user experience",
        "Built a scalable backend using Node.js and MongoDB, implementing RESTful API endpoints for efficient data operations"
      ],
      period: "Jan. 2024 - May 2024"
    },
    {
      title: "RISC-V Processor Design",
      tech: ["SystemVerilog", "Vivado", "FPGA", "Linux"],
      description: "A pipelined RISC-V processor supporting arithmetic, branching, and memory operations",
      achievements: [
        "Architected and implemented a pipelined RISC-V processor supporting arithmetic, branching, and memory operations, synthesized on TUL FPGA",
        "Designed control path using finite state machines and combinational logic for multi-cycle instruction execution",
        "Validated processor functionality through comprehensive testbenches and timing analysis using Vivado simulation"
      ],
      period: "May 2024 - June 2024"
    },
    {
      title: "FUSE File System",
      tech: ["C", "Linux", "FUSE"],
      description: "A custom file system implementation supporting file operations and directory hierarchies",
      achievements: [
        "Implemented a custom file system supporting file operations, directory hierarchies, and large file handling up to 500KB",
        "Designed block allocation and inode management systems for efficient disk space utilization",
        "Developed file system driver interfacing with Linux kernel through FUSE, supporting core operations like create, read, write, and delete"
      ],
      period: "Mar. 2023 - May 2023"
    },
    {
      title: "Unix Shell Implementation",
      tech: ["C", "Linux"],
      description: "A Unix shell implementation supporting process management and I/O operations",
      achievements: [
        "Designed and implemented a Unix shell supporting process management, I/O redirection, and pipe operations using C",
        "Built custom tokenizer and parser for shell commands, handling nested operations and file descriptors",
        "Developed system call wrappers managing child processes, signal handling, and file operations"
      ],
      period: "Jan. 2023 - Feb. 2023"
    },
    {
      title: "Raft Consensus Algorithm",
      tech: ["Python", "JSON"],
      description: "A distributed consensus implementation using the Raft protocol",
      achievements: [
        "Implemented distributed consensus using the Raft protocol, achieving strong consistency across replicated nodes despite network failures",
        "Built a fault-tolerant key-value store supporting concurrent client operations with a focus on data consistency during leader elections",
        "Engineered network communication layer handling message serialization, log replication, and node failure recovery"
      ],
      period: "November 2022 - December 2022"
    },
    {
      title: "FitLink",
      tech: ["Swift", "Firebase", "CocoaPods", "Core Data", "UIKit"],
      description: "A social fitness application with real-time features and data synchronization",
      achievements: [
        "Led development of social fitness application's profile and friend system features in a team of four, implementing UI layouts with UIKit and managing user relationships with Firebase",
        "Architected real-time data synchronization for workout posts and friend requests using Firebase Authentication and Cloud Storage",
        "Implemented image handling system for profile pictures and posts, including camera integration and efficient caching mechanisms"
      ],
      period: "April 2023 - May 2023"
    },
    {
      title: "Moonshot",
      tech: ["Swift", "SwiftUI", "UserDefaults"],
      description: "An interactive educational app about NASA space missions",
      achievements: [
        "Developed an interactive educational app about NASA space missions using SwiftUI's latest features and animations",
        "Implemented complex navigation hierarchies and custom transitions using NavigationView and GeometryReader",
        "Utilized JSON decoding and asset management for efficient data handling and image caching"
      ],
      period: "Jan. 2023 - Feb. 2023"
    },
    {
      title: "IExpense",
      tech: ["Swift", "SwiftUI"],
      description: "An expense tracking application with data persistence",
      achievements: [
        "Developed expense tracking application implementing CRUD operations and data persistence using UserDefaults",
        "Created reusable view components and custom modifiers for consistent UI/UX across the application",
        "Implemented form validation and error handling using SwiftUI's state management and custom binding wrappers"
      ],
      period: "Dec. 2022 - Jan. 2023"
    }
  ];

  return (
      <div className="max-w-[1061px] mx-auto">
        <div className="bg-white/30 dark:bg-gray-800/80 backdrop-blur-md rounded-t-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-4">All Projects</h1>
          <p className="text-center text-gray-600 dark:text-blue-200">
            Explore my portfolio of web applications, mobile apps, and other digital creations that showcase my skills and expertise.
          </p>
        </div>

        <div className="bg-white/30 dark:bg-gray-800/80 backdrop-blur-md rounded-b-xl">
          <div className="space-y-6 p-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-md rounded-xl p-8">
                <div className="flex justify-between items-start mb-1">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h2>
                  <a
                    href={`https://github.com/Jaber1028/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 dark:text-blue-200 dark:hover:text-white transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {project.tech.map((tech, i) => {
                    const Icon = getTechIcon(tech);
                    return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                  })}
                </div>
                <div className="mb-8">
                  <p className="text-xl font-extrabold text-gray-800 dark:text-blue-100 leading-relaxed underline decoration-blue-700/30 underline-offset-8">{project.description}</p>
                </div>
                <div className="space-y-3">
                  {project.achievements.map((achievement, i) => (
                    <p key={i} className="flex items-start text-gray-700 dark:text-blue-200">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </p>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-blue-300 text-sm mt-4 text-right">{project.period}</p>
              </div>
            ))}
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