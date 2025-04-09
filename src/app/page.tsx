'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
        {/* Animated background element */}
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
          <div className="w-[1200px] mx-auto bg-white shadow-lg rounded-lg min-h-[800px] p-10">
            {/* About Section */}
            <section className="w-full py-8 px-10 rounded-lg transition-colors duration-300">
              <h2 className="text-3xl font-bold font-title">Hi! I&apos;m Jacob Aberasturi.</h2>
              <div className="flex mt-4">
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-neutral-300">
                  <Image
                    src="/profile.jpeg"
                    width={200}
                    height={200}
                    className="object-cover"
                    alt="Jacob Aberasturi in a blue polo shirt"
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
            <section className="w-full py-8">
              <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
              <div className="flex flex-wrap gap-8 justify-center">
                <div className="w-[350px] h-[400px] bg-neutral-200 rounded-md p-4 transition-transform duration-300 hover:scale-105 hover:bg-neutral-300 flex flex-col">
                  <div className="w-[350px] h-[200px] bg-white rounded-md flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-primary">NEU</h3>
                  </div>
                  <h3 className="text-xl mt-4">Northeastern University</h3>
                  <p className="mt-2">Bachelor of Science in Computer Science</p>
                  <p className="mt-2">Sept. 2021 - May 2025</p>
                  <p className="mt-2">GPA: 3.5/4.0</p>
                  <p className="mt-2">Boston, MA</p>
                </div>

                <div className="w-[350px] h-[400px] bg-neutral-200 rounded-md p-4 transition-transform duration-300 hover:scale-105 hover:bg-neutral-300 flex flex-col">
                  <div className="w-[350px] h-[200px] bg-white rounded-md flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-primary">Courses</h3>
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      "Web Development",
                      "Mobile Development",
                      "Object-Oriented Design",
                      "Software Engineering",
                      "Algorithms",
                      "Networks and Distributed Systems",
                      "Computer Systems"
                    ].map((course, index) => (
                      <p key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {course}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="w-full py-8">
              <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
              <div className="flex flex-wrap gap-8 justify-center">
                {[
                  {
                    title: "Infrastructure SQA Engineer Co-op",
                    company: "Cisco/Acacia Communications",
                    period: "July 2024 - Dec. 2024",
                    location: "Maynard, MA",
                    achievements: [
                      "Developed automated tests suites in C#",
                      "Optimized boot processes over an active network",
                      "Configured and validated optical test environments"
                    ]
                  },
                  {
                    title: "Software Engineer Co-op",
                    company: "Mercury Systems",
                    period: "July 2023 - Dec. 2023",
                    location: "Andover, MA",
                    achievements: [
                      "Developed Python automation scripts for FPGAs",
                      "Improved package compilation time from 40 to 6 minutes",
                      "Managed RPM repositories"
                    ]
                  },
                  {
                    title: "iOS Software Developer",
                    company: "Oasis",
                    period: "Jan. 2023 - May 2023",
                    location: "Boston, MA",
                    achievements: [
                      "Developed a hybrid iOS application",
                      "Implemented multilingual support"
                    ]
                  }
                ].map((job, index) => (
                  <div key={index} className="w-[350px] h-[400px] bg-neutral-200 rounded-md p-4 transition-transform duration-300 hover:scale-105 hover:bg-neutral-300 flex flex-col">
                    <div className="w-[350px] h-[200px] bg-white rounded-md flex items-center justify-center">
                      <h3 className="text-3xl font-bold text-primary">{job.company.split(' ')[0]}</h3>
                    </div>
                    <h3 className="text-xl mt-4">{job.title}</h3>
                    <p className="mt-2">{job.period}</p>
                    <p className="mt-2">{job.location}</p>
                    <div className="mt-4 space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <p key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                          {achievement}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="w-full py-8">
              <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
              <div className="flex flex-wrap gap-8 justify-center">
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
                  <div key={index} className="w-[350px] bg-neutral-200 rounded-md p-4 transition-transform duration-300 hover:scale-105 hover:bg-neutral-300 flex flex-col">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-lg text-primary mb-2">{project.tech}</p>
                      <p className="text-lg mb-2">{project.period}</p>
                    </div>
                    <div className="space-y-1 overflow-y-auto">
                      {project.achievements.map((achievement, i) => (
                        <p key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section className="w-full py-8">
              <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
              <div className="flex flex-wrap gap-8 justify-center mb-16">
                {[
                  {
                    category: "Languages",
                    skills: "Swift, Objective-C, C, C++, C#, Python, JavaScript, TypeScript, X86 & RISC-V Assembly, SystemVerilog"
                  },
                  {
                    category: "Frameworks",
                    skills: "SwiftUI, UIKit, CoreData, Core Animation, React, Redux, Jest, Node.js, Express, gdb, valgrind, pytest"
                  },
                  {
                    category: "Technologies & Tools",
                    skills: "Xcode, Git, CocoaPods, REST APIs, MongoDB, Firebase, TCP/IP, FPGA, Linux (Ubuntu & RedHat), FUSE, Vivado Xilinx, Postman"
                  }
                ].map((skill, index) => (
                  <div key={index} className="w-[350px] bg-neutral-200 rounded-md p-4 transition-transform duration-300 hover:scale-105 hover:bg-neutral-300">
                    <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                    <div className="space-y-2">
                      {skill.skills.split(', ').map((item, i) => (
                        <p key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section className="w-full py-16">
              <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
              <p className="text-xl md:text-2xl text-center mb-16">
                I&apos;m currently looking for new opportunities. Feel free to reach out!
              </p>
              <div className="grid grid-cols-10 items-center">
                <a 
                  href="https://github.com/Jaber1028" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ fontSize: '4rem' }}
                  className="col-start-3 col-span-2 flex justify-center p-6 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/jabercodes" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ fontSize: '4rem' }}
                  className="col-start-5 col-span-2 flex justify-center p-6 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="mailto:aberasturi.j@northeastern.edu"
                  style={{ fontSize: '4rem' }}
                  className="col-start-7 col-span-2 flex justify-center p-6 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <FaEnvelope />
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
