'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TechBadge from '@/components/TechBadge';
import { getTechIcon } from '@/app/utils/techIcons';
import Section from '@/components/Section';
import CourseCard from '@/components/CourseCard';

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
      <div className="w-full bg-gray-50/50 dark:bg-gray-900/95 font-sans">
        {/* Header */}
        <header className="flex justify-between items-center py-6 px-12">
          <div className="flex items-center space-x-2">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-800 dark:text-white" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-gray-800 dark:text-white text-xl font-bold">Jacob Aberasturi</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">
              Projects
            </a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">
              Experience
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">
              Contact
            </a>
          </nav>
        </header>

        {/* About Section */}
        <Section id="about" title="About">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="w-48 h-48 overflow-hidden relative mb-8">
              <div className="absolute inset-0" style={{
                clipPath: "circle(50% at 50% 50%)",
              }}>
                <Image
                  src="/profile.jpeg"
                  width={250}
                  height={250}
                  className="object-cover w-full h-full"
                  alt="Jacob Aberasturi in a blue polo shirt"
                />
              </div>
            </div>
            <div className="bg-white/30 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 shadow-xl">
              <p className="text-gray-600 dark:text-gray-200">
                I&apos;m a passionate software engineer with expertise in full-stack development.
                I specialize in creating modern web applications using cutting-edge technologies.
                My work spans from frontend development with React and TypeScript to backend systems with Node.js and Python.
                I collaborate with teams to build scalable and maintainable solutions.
                I&apos;m always learning and staying up-to-date with the latest technologies and best practices.
              </p>
            </div>
          </motion.div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/30 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Northeastern University</h3>
                  <p className="text-gray-700 dark:text-blue-400 text-lg">Bachelor of Science in Computer Science</p>
                  <p className="text-gray-600 dark:text-blue-200">Khoury College of Computer Sciences</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-blue-200 text-sm mb-1">Sept. 2021 - May 2025</p>
                  <p className="text-gray-600 dark:text-blue-200 text-sm">Boston, MA</p>
                  <p className="text-gray-600 dark:text-blue-200 text-sm mt-2">GPA: 3.5/4.0</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Relevant Coursework</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      course: "Object-Oriented Design",
                      tech: ["Java", "JSwing", "JUnit"]
                    },
                    {
                      course: "Mobile Development",
                      tech: ["Swift", "UIKit"]
                    },
                    {
                      course: "Web Development",
                      tech: ["JavaScript", "React", "HTML", "CSS", "Node.js", "MongoDB"]
                    },
                    {
                      course: "Software Engineering",
                      tech: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Jest"]
                    },
                    {
                      course: "Algorithms",
                      tech: ["Python"]
                    },
                    {
                      course: "Networks and Distributed Systems",
                      tech: ["Python", "Sockets"]
                    },
                    {
                      course: "Computer Systems",
                      tech: ["C", "Assembly"]
                    },
                    {
                      course: "C++ Programming",
                      tech: ["C++", "STL"]
                    }
                  ].map((item, index) => (
                    <CourseCard key={index} course={item.course} tech={item.tech} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Experience">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Infrastructure SQA Engineer Co-op",
                company: "Cisco/Acacia Communications",
                period: "July 2024 - Dec. 2024",
                location: "Maynard, MA",
                tech: ["C#", "Git"],
                achievements: [
                  "Developed automated tests suites in C# for Acacia's next-generation Pluggable Coherent Optical Module products",
                  "Optimized boot processes over an active network, resulting in reduced downtime and improved system performance",
                  "Configured and validated optical test environments, including fiber connectivity setup and test instrument calibration"
                ]
              },
              {
                title: "Software Engineer Co-op",
                company: "Mercury Systems",
                period: "July 2023 - Dec. 2023",
                location: "Andover, MA",
                tech: ["Python", "Linux", "Git"],
                achievements: [
                  "Developed Python automation scripts for FPGAs to streamline codebase migration from ClearCase to BitBucket, reducing manual migration time significantly",
                  "Improved package compilation time from 40 to 6 minutes, saving approximately 100 engineering hours monthly",
                  "Managed RPM repositories to maintain and optimize software packages, improving package stability and performance by 25%"
                ]
              },
              {
                title: "iOS Software Developer",
                company: "Oasis",
                period: "Jan. 2023 - May 2023",
                location: "Boston, MA",
                tech: ["Swift", "UIKit", "Firebase"],
                achievements: [
                  "Architected and developed a hybrid iOS application using SwiftUI for modern interface design while maintaining UIKit compatibility",
                  "Implemented comprehensive localization system supporting multiple languages through third-party translation APIs",
                  "Built reusable UI components and custom animations enhancing user experience and interface responsiveness"
                ]
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/30 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 min-w-[300px] w-full h-full"
              >
                <div className="flex flex-col mb-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{job.title}</h3>
                    <p className="text-gray-700 dark:text-blue-400 text-base">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-blue-200 text-sm whitespace-nowrap mb-1">{job.period}</p>
                    <p className="text-gray-600 dark:text-blue-200 text-sm">{job.location}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tech.map((tech, i) => {
                    const Icon = getTechIcon(tech);
                    return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                  })}
                </div>
                <div className="space-y-3">
                  {job.achievements.map((achievement, i) => (
                    <p key={i} className="flex items-start text-gray-700 dark:text-blue-200 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="My Projects" className="py-20">
          <p className="text-center text-gray-600 dark:text-blue-200 max-w-2xl mx-auto mb-12">
            Explore my portfolio of web applications, mobile apps, and other digital creations that showcase my skills and expertise.
          </p>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-white/30 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Fake Stack Overflow</h3>
                <p className="text-gray-600 dark:text-blue-200">Jan. 2025 - Apr. 2025</p>
              </div>
              <div className="flex flex-wrap mb-4">
                {["TypeScript", "React", "REST APIs", "Express", "MongoDB", "Socket.io"].map((tech, i) => {
                  const Icon = getTechIcon(tech);
                  return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                })}
              </div>
              <div className="space-y-2">
                <p className="flex items-start text-gray-700 dark:text-blue-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>Built a comprehensive Q&A platform with authentication, direct messaging, and interactive games using TypeScript and the MERN stack</span>
                </p>
                <p className="flex items-start text-gray-700 dark:text-blue-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>Architected a Daily Puzzles feature with automated generation algorithms that create unique logic challenges daily through cron scheduling</span>
                </p>
                <p className="flex items-start text-gray-700 dark:text-blue-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>Implemented real-time data synchronization across components using Socket.io for chat systems, game state updates, and leaderboard visualization</span>
                </p>
              </div>
            </div>

            <div className="bg-white/30 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Kanbas</h3>
                <p className="text-gray-600 dark:text-blue-200">Jan. 2024 - May 2024</p>
              </div>
              <div className="flex flex-wrap mb-4">
                {["JavaScript", "React", "HTML", "CSS", "Redux", "Node.js", "MongoDB"].map((tech, i) => {
                  const Icon = getTechIcon(tech);
                  return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                })}
              </div>
              <div className="space-y-2">
                <p className="flex items-start text-gray-700 dark:text-blue-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>Developed a full-stack learning management system inspired by Canvas, featuring course creation, assignment management, and grading</span>
                </p>
                <p className="flex items-start text-gray-700 dark:text-blue-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>Architected a Single Page Application (SPA) using React and Redux for state management, enabling seamless user experience</span>
                </p>
                <p className="flex items-start text-gray-700 dark:text-blue-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                  <span>Built a scalable backend using Node.js and MongoDB, implementing RESTful API endpoints for efficient data operations</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="button-primary"
            >
              View All Projects
            </Link>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills">
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Languages</h3>
              <div className="flex flex-wrap gap-4">
                {["Swift", "Objective-C", "C", "C++", "C#", "Python", "JavaScript", "TypeScript", "Assembly", "Java", "HTML", "CSS"].map((tech, i) => {
                  const Icon = getTechIcon(tech);
                  return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                })}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Frameworks</h3>
              <div className="flex flex-wrap gap-4">
                {["SwiftUI", "UIKit", "CoreData", "React", "Redux", "Jest", "Node.js", "Express", "pytest", "Next.js", "Tailwind"].map((tech, i) => {
                  const Icon = getTechIcon(tech);
                  return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                })}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-4">
                {["Xcode", "Git", "CocoaPods", "REST APIs", "MongoDB", "Firebase", "Linux", "Postman", "Framer Motion", "CI/CD", "JUnit"].map((tech, i) => {
                  const Icon = getTechIcon(tech);
                  return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                })}
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get In Touch" className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl text-gray-600 dark:text-blue-200 mb-6">
              I&apos;m currently looking for new opportunities. Feel free to reach out!
            </p>
            <div className="grid grid-cols-10 items-center relative z-50">
              <a 
                href="https://github.com/Jaber1028" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ fontSize: '4rem' }}
                className="col-start-3 col-span-2 flex justify-center p-6 text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 relative z-50"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/jabercodes" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ fontSize: '4rem' }}
                className="col-start-5 col-span-2 flex justify-center p-6 text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 relative z-50"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:aberasturi.j@northeastern.edu"
                style={{ fontSize: '4rem' }}
                className="col-start-7 col-span-2 flex justify-center p-6 text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 relative z-50"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </Section>
      </div>
    </Layout>
  );
}
