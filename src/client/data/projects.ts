import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: "Portfolio",
    category: "Web",
    tech: ["Next.js", "Tailwind", "React", "TypeScript", "Framer Motion", "CI/CD"],
    description: "A modern, responsive portfolio website with dark mode support and interactive animations",
    achievements: [
      "Developed a responsive portfolio website using Next.js 13 with App Router and TypeScript for type safety",
      "Implemented dynamic dark mode theming with smooth transitions and persistent user preferences",
      "Created reusable components with Tailwind CSS for consistent styling and Framer Motion for engaging animations",
      "Designed a modular education section showcasing coursework with interactive tech badges and clean layout"
    ],
    period: "Apr. 2025 - Present",
    githubRepo: "portfolio"
  },
  {
    title: "Fake Stack Overflow",
    category: "Web",
    tech: ["TypeScript", "React", "REST APIs", "Express", "MongoDB", "Socket.io"],
    description: "A comprehensive Q&A platform with real-time features and interactive elements",
    achievements: [
      "Built a comprehensive Q&A platform with authentication, direct messaging, and interactive games using TypeScript and the MERN stack",
      "Architected a Daily Puzzles feature with automated generation algorithms that create unique logic challenges daily through cron scheduling",
      "Implemented real-time data synchronization across components using Socket.io for chat systems, game state updates, and leaderboard visualization"
    ],
    period: "Jan. 2025 - Apr. 2025",
    githubRepo: "fake-stack-overflow"
  },
  {
    title: "Kanbas",
    category: "Web",
    tech: ["JavaScript", "React", "HTML", "CSS", "Redux", "Node.js", "MongoDB"],
    description: "A full-featured learning management system inspired by Canvas",
    achievements: [
      "Developed a full-stack learning management system inspired by Canvas, featuring course creation, assignment management, and grading",
      "Architected a Single Page Application (SPA) using React and Redux for state management, enabling seamless user experience",
      "Built a scalable backend using Node.js and MongoDB, implementing RESTful API endpoints for efficient data operations"
    ],
    period: "Jan. 2024 - May 2024",
    githubRepo: "kanbas-react-web-app"
  },
  {
    title: "Parasite",
    category: "Systems",
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
      title: "RISC-V Processor Design",
      category: "Systems",
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
      category: "Systems",
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
      category: "Systems",
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
      category: "Systems",
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
      category: "Mobile",
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
      category: "Mobile",
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
      category: "Mobile",
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