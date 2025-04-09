'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent animate-pulse" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.15, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          />
        </div>

        {/* Main content */}
 <div id="webcrumbs" className="min-h-screen bg-neutral-100 py-8 px-4 font-body">
      <div className="w-[1200px] mx-auto bg-white shadow-lg rounded-lg min-h-[800px]">

        {/* About Section */}
        <section className="w-full py-8 px-10 rounded-lg transition-colors duration-300">
          <h2 className="text-3xl font-bold font-title">Hi! I&apos;m Jacob Aberasturi.</h2>
          <div className="flex mt-4">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-neutral-300">
              <img
                src="/profile.jpg"
                className="object-cover w-[200px] h-[200px]"
                alt="Profile"
              />
            </div>
            <p className="text-lg max-w-[800px] ml-6">
              I&apos;m a passionate software engineer with expertise in full-stack development.
              I specialize in creating modern web applications using cutting-edge technologies.
              My work spans from frontend development with React and TypeScript to backend systems with Node.js and Python.
              I collaborate with teams to build scalable and maintainable solutions.
              I&apos;m always learning and staying up-to-date with the latest technologies and best practices.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-16 text-center text-white"
            >
              Education
            </motion.h2>
            <div className="space-y-8">
              {[
                {
                  school: "Northeastern University",
                  degree: "Bachelor of Science in Computer Science",
                  period: "Sept. 2021 - May 2025",
                  location: "Boston, MA",
                  gpa: "3.5/4.0",
                  relevantCourses: [
                    "Web Development",
                    "Mobile Development",
                    "Object-Oriented Design",
                    "Software Engineering",
                    "Algorithms",
                    "Networks and Distributed Systems",
                    "Computer Systems"
                  ]
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative bg-gradient-to-br from-gray-800/30 via-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:bg-gray-800/40 hover:shadow-[0_0_25px_-5px] hover:shadow-blue-500/20 transform hover:-translate-y-1 hover:scale-[1.02] motion-safe:hover:animate-pulse overflow-hidden"
                >
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-32 -right-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500 group-hover:scale-150" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative">
                    <div className="w-full md:w-[70%] pr-4">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 relative">
                        <span className="relative inline-block max-w-full overflow-hidden">
                          <span className="block truncate">{edu.school}</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500" />
                        </span>
                      </h3>
                      <p className="text-blue-400/80 text-lg group-hover:text-blue-300 transition-colors duration-300 flex items-center">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                        <span className="truncate">{edu.degree}</span>
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right md:w-[30%]">
                      <p className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">{edu.period}</p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex items-center justify-end">
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                        {edu.location}
                      </p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">
                        GPA: {edu.gpa}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Relevant Coursework</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {edu.relevantCourses.map((course, i) => (
                        <div key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                          <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-blue-400/50 rounded-full mt-2" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-16 text-center text-white"
          >
            Experience
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                title: "Infrastructure SQA Engineer Co-op",
                company: "Cisco/Acacia Communications",
                period: "July 2024 - Dec. 2024",
                location: "Maynard, MA",
                achievements: [
                  "Developed automated tests suites in C# for Acacia&apos;s next-generation Pluggable Coherent Optical Module products",
                  "Optimized boot processes over an active network, resulting in reduced downtime and improved system performance",
                  "Configured and validated optical test environments, including fiber connectivity setup and test instrument calibration"
                ]
              },
              {
                title: "Software Engineer Co-op",
                company: "Mercury Systems",
                period: "July 2023 - Dec. 2023",
                location: "Andover, MA",
                achievements: [
                  "Developed Python automation scripts for FPGAs to streamline codebase migration from ClearCase to BitBucket",
                  "Improved package compilation time from 40 to 6 minutes, saving approximately 100 engineering hours monthly",
                  "Managed RPM repositories to maintain and optimize software packages, improving package stability and performance by 25%"
                ]
              },
              {
                title: "iOS Software Developer",
                company: "Oasis",
                period: "Jan. 2023 - May 2023",
                location: "Boston, MA",
                achievements: [
                  "Developed a hybrid iOS application leveraging SwiftUI for modern UI components while maintaining legacy UIKit backend functionality",
                  "Implemented multilingual support through third-party APIs for lyrics translation and content localization"
                ]
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-gray-800/30 via-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:bg-gray-800/40 hover:shadow-[0_0_25px_-5px] hover:shadow-blue-500/20 transform hover:-translate-y-1 hover:scale-[1.02] motion-safe:hover:animate-pulse overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-32 -right-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500 group-hover:scale-150" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative">
                  <div className="w-full md:w-[70%] pr-4">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 relative">
                      <span className="relative inline-block max-w-full overflow-hidden">
                        <span className="block truncate">{job.title}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500" />
                      </span>
                    </h3>
                    <p className="text-blue-400/80 text-lg group-hover:text-blue-300 transition-colors duration-300 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                      <span className="truncate">{job.company}</span>
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right md:w-[30%]">
                    <p className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">{job.period}</p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex items-center justify-end">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                      {job.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-4 relative">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 text-lg group-hover:text-gray-200 transition-all duration-300 relative hover:text-white">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-6">
                          <span className="block w-2 h-2 mt-[0.6rem] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block break-words">
                            {achievement}
                          </span>
                          <span className="absolute bottom-0 left-6 right-0 h-px bg-gradient-to-r from-blue-400/50 to-purple-400/50 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-16 text-center text-white"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fake Stack Overflow",
                period: "Jan. 2025 - Apr. 2025",
                tech: "TypeScript, React, Express, MongoDB, Socket.io",
                achievements: [
                  "Built a comprehensive Q&A platform with authentication, direct messaging, and interactive games using TypeScript and the MERN stack",
                  "Architected a Daily Puzzles feature with automated generation algorithms that create unique logic challenges daily through cron scheduling",
                  "Implemented real-time data synchronization across components using Socket.io for chat systems, game state updates, and leaderboard visualization"
                ]
              },
              {
                title: "Parasite",
                period: "May 2024 - June 2024",
                tech: "WebGL, C#, Unity Game Engine",
                achievements: [
                  "Implemented efficient pathfinding algorithms using A* search in C#",
                  "Designed responsive UI system interfaces",
                  "Collaborated with a team of four using Git version control"
                ]
              },
              {
                title: "RISC-V Processor Design",
                period: "May 2024 - June 2024",
                tech: "SystemVerilog, Vivado, FPGA",
                achievements: [
                  "Architected and implemented a pipelined RISC-V processor supporting arithmetic, branching, and memory operations, synthesized on TUL FPGA",
                  "Designed control path using finite state machines and combinational logic for multi-cycle instruction execution",
                  "Validated processor functionality through comprehensive testbenches and timing analysis using Vivado simulation"
                ]
              },
              {
                title: "Kanbas",
                period: "Jan. 2024 - May 2024",
                tech: "JavaScript, React, Node.js, MongoDB",
                achievements: [
                  "Developed a full-stack learning management system",
                  "Architected a Single Page Application using React and Redux",
                  "Built a scalable backend using Node.js and MongoDB"
                ]
              },
              {
                title: "FitLink",
                period: "April 2023 - May 2023",
                tech: "Swift, UIKit, Firebase, Core Data",
                achievements: [
                  "Led development of social fitness application's profile and friend system features in a team of four, implementing UI layouts with UIKit and managing user relationships with Firebase",
                  "Architected real-time data synchronization for workout posts and friend requests using Firebase Authentication and Cloud Storage",
                  "Implemented image handling system for profile pictures and posts, including camera integration and efficient caching mechanisms"
                ]
              },
              {
                title: "FUSE File System",
                period: "Mar. 2023 - May 2023",
                tech: "C, FUSE, Linux",
                achievements: [
                  "Implemented a custom file system supporting file operations, directory hierarchies, and large file handling up to 500KB",
                  "Designed block allocation and inode management systems for efficient disk space utilization",
                  "Developed file system driver interfacing with Linux kernel through FUSE, supporting core operations like create, read, write, and delete"
                ]
              },
              {
                title: "Unix Shell Implementation",
                period: "Jan. 2023 - Feb. 2023",
                tech: "C, Linux",
                achievements: [
                  "Designed and implemented a Unix shell supporting process management, I/O redirection, and pipe operations using C",
                  "Built custom tokenizer and parser for shell commands, handling nested operations and file descriptors",
                  "Developed system call wrappers managing child processes, signal handling, and file operations"
                ]
              },
              {
                title: "Moonshot",
                period: "Jan. 2023 - Feb. 2023",
                tech: "Swift, SwiftUI",
                achievements: [
                  "Developed an interactive educational app about NASA space missions using SwiftUI's latest features and animations",
                  "Implemented complex navigation hierarchies and custom transitions using NavigationView and GeometryReader",
                  "Utilized JSON decoding and asset management for efficient data handling and image caching"
                ]
              },
              {
                title: "Raft Consensus Algorithm",
                period: "November 2022 - December 2022",
                tech: "Python, JSON, Sockets",
                achievements: [
                  "Implemented distributed consensus using the Raft protocol",
                  "Built a fault-tolerant key-value store",
                  "Engineered network communication layer"
                ]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-gray-800/30 via-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:bg-gray-800/40 hover:shadow-[0_0_25px_-5px] hover:shadow-blue-500/20 transform hover:-translate-y-1 hover:scale-[1.02] motion-safe:hover:animate-pulse overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-32 -right-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500 group-hover:scale-150" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 relative">
                  <span className="relative inline-block max-w-full overflow-hidden">
                    <span className="block truncate">{project.title}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500" />
                  </span>
                </h3>
                <p className="text-blue-400/80 text-lg mb-2 group-hover:text-blue-300 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                  <span className="truncate">{project.tech}</span>
                </p>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                  {project.period}
                </p>
                <ul className="space-y-4 relative">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 text-lg group-hover:text-gray-200 transition-all duration-300 relative hover:text-white">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-6">
                          <span className="block w-2 h-2 mt-[0.6rem] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block break-words">
                            {achievement}
                          </span>
                          <span className="absolute bottom-0 left-6 right-0 h-px bg-gradient-to-r from-blue-400/50 to-purple-400/50 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-16 text-center text-white"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group hover:bg-gray-800/40 hover:shadow-lg hover:shadow-blue-500/10 relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300 relative">
                <span className="relative z-10">Languages</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500" />
              </h3>
              <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors duration-300 relative">Swift, Objective-C, C, C++, C#, Python, JavaScript, TypeScript, X86 & RISC-V Assembly, SystemVerilog</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group hover:bg-gray-800/40 hover:shadow-lg hover:shadow-blue-500/10 relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300 relative">
                <span className="relative z-10">Frameworks</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500" />
              </h3>
              <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors duration-300 relative">SwiftUI, UIKit, CoreData, Core Animation, React, Redux, Jest, Node.js, Express, gdb, valgrind, pytest</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group hover:bg-gray-800/40 hover:shadow-lg hover:shadow-blue-500/10 relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300 relative">
                <span className="relative z-10">Technologies & Tools</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500" />
              </h3>
              <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors duration-300 relative">Xcode, Git, CocoaPods, REST APIs, MongoDB, Firebase, TCP/IP, FPGA, Linux (Ubuntu & RedHat), FUSE, Vivado Xilinx, Postman</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-16 text-center text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              I&apos;m currently looking for new opportunities. Feel free to reach out!
            </p>
            <a 
                href="https://github.com/Jaber1028" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-6xl text-gray-300 hover:text-blue-400 transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/jabercodes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-6xl text-gray-300 hover:text-blue-400 transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:aberasturi.j@northeastern.edu" 
                className="text-6xl text-gray-300 hover:text-blue-400 transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <FaEnvelope />
              </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
