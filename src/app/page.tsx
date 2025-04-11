'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TechBadge from '@/components/TechBadge';
import { getTechIcon } from '@/app/utils/techIcons';

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
      <div className="w-full bg-gradient-to-br from-blue-800 to-indigo-900 font-sans">
        {/* Header */}
        <header className="flex justify-between items-center py-6 px-12">
          <div className="flex items-center space-x-2">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-white text-xl font-bold">Jacob Aberasturi</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-blue-200 transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="text-white hover:text-blue-200 transition-colors duration-300">
              Projects
            </a>
            <a href="#experience" className="text-white hover:text-blue-200 transition-colors duration-300">
              Experience
            </a>
            <a href="#contact" className="text-white hover:text-blue-200 transition-colors duration-300">
              Contact
            </a>
          </nav>
        </header>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="section-title">About</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-blue-500/20">
                  <Image
                    src="/profile.jpeg"
                    width={200}
                    height={200}
                    className="object-cover"
                    alt="Jacob Aberasturi in a blue polo shirt"
                  />
                </div>
                <p className="text-lg text-blue-200">
                  I&apos;m a passionate software engineer with expertise in full-stack development.
                  I specialize in creating modern web applications using cutting-edge technologies.
                  My work spans from frontend development with React and TypeScript to backend systems with Node.js and Python.
                  I collaborate with teams to build scalable and maintainable solutions.
                  I&apos;m always learning and staying up-to-date with the latest technologies and best practices.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Education</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8"
            >
              <div className="grid grid-cols-10 gap-4">
                <div className="col-start-1 col-span-4">
                  <h3 className="text-2xl font-bold text-white mb-8">Northeastern University</h3>
                  <div className="space-y-6">
                    <p className="text-blue-200 text-xl">Bachelor of Science in Computer Science</p>
                    <p className="text-blue-200 text-xl">Khoury College of Computer Sciences</p>
                    <p className="text-blue-200 text-xl">Sept. 2021 - May 2025</p>
                    <p className="text-blue-200 text-xl">GPA: 3.5/4.0</p>
                    <p className="text-blue-200 text-xl">Boston, MA</p>
                  </div>
                </div>

                <div className="col-start-6 col-span-5">
                  <h3 className="text-2xl font-bold text-white mb-8">Relevant Coursework</h3>
                  <div className="space-y-4">
                    {[
                      "Web Development",
                      "Mobile Development",
                      "Object-Oriented Design",
                      "Software Engineering",
                      "Algorithms",
                      "Networks and Distributed Systems",
                      "Computer Systems"
                    ].map((course, index) => (
                      <p key={index} className="text-blue-200 text-lg">{course}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Experience</h2>
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
                  className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-blue-400 mb-2">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-200 mb-2">{job.period}</p>
                      <p className="text-blue-200">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4 mt-4">
                    {job.tech.map((tech, i) => {
                      const Icon = getTechIcon(tech);
                      return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                    })}
                  </div>
                  <div className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <p key={i} className="flex items-center text-blue-200">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                        {achievement}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="section-title">My Projects</h2>
            <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
              Explore my portfolio of web applications, mobile apps, and other digital creations that showcase my skills and expertise.
            </p>

            <div className="max-w-4xl mx-auto space-y-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">Fake Stack Overflow</h3>
                  <p className="text-blue-200">Jan. 2025 - Apr. 2025</p>
                </div>
                <div className="flex flex-wrap mb-4">
                  {["TypeScript", "React", "Express", "MongoDB", "Socket.io"].map((tech, i) => {
                    const Icon = getTechIcon(tech);
                    return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                  })}
                </div>
                <div className="space-y-2">
                  <p className="flex items-start text-blue-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span>Built a comprehensive Q&A platform with authentication, direct messaging, and interactive games using TypeScript and the MERN stack</span>
                  </p>
                  <p className="flex items-start text-blue-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span>Architected a Daily Puzzles feature with automated generation algorithms that create unique logic challenges daily through cron scheduling</span>
                  </p>
                  <p className="flex items-start text-blue-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span>Implemented real-time data synchronization across components using Socket.io for chat systems, game state updates, and leaderboard visualization</span>
                  </p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">Kanbas</h3>
                  <p className="text-blue-200">Jan. 2024 - May 2024</p>
                </div>
                <div className="flex flex-wrap mb-4">
                  {["JavaScript", "React", "Node.js", "MongoDB"].map((tech, i) => {
                    const Icon = getTechIcon(tech);
                    return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                  })}
                </div>
                <div className="space-y-2">
                  <p className="flex items-start text-blue-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span>Developed a full-stack learning management system inspired by Canvas, featuring course creation, assignment management, and grading</span>
                  </p>
                  <p className="flex items-start text-blue-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span>Architected a Single Page Application (SPA) using React and Redux for state management, enabling seamless user experience</span>
                  </p>
                  <p className="flex items-start text-blue-200">
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
          </div>
        </section>

       {/* Skills Section */}
       <section id="skills" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Skills</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Languages</h3>
                <div className="flex flex-wrap gap-4">
                  {["Swift", "Objective-C", "C", "C++", "C#", "Python", "JavaScript", "TypeScript", "Assembly"].map((tech, i) => {
                    const Icon = getTechIcon(tech);
                    return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Frameworks</h3>
                <div className="flex flex-wrap gap-4">
                  {["SwiftUI", "UIKit", "CoreData", "React", "Redux", "Jest", "Node.js", "Express", "pytest"].map((tech, i) => {
                    const Icon = getTechIcon(tech);
                    return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-4">
                  {["Xcode", "Git", "CocoaPods", "REST APIs", "MongoDB", "Firebase", "Linux", "Postman"].map((tech, i) => {
                    const Icon = getTechIcon(tech);
                    return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Get In Touch</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-xl text-blue-200 mb-12">
                I&apos;m currently looking for new opportunities. Feel free to reach out!
              </p>
              <div className="grid grid-cols-10 items-center relative z-50">
                <a 
                  href="https://github.com/Jaber1028" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ fontSize: '4rem' }}
                  className="col-start-3 col-span-2 flex justify-center p-6 text-white hover:text-blue-400 transition-all duration-300 hover:scale-110 relative z-50"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/jabercodes" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ fontSize: '4rem' }}
                  className="col-start-5 col-span-2 flex justify-center p-6 text-white hover:text-blue-400 transition-all duration-300 hover:scale-110 relative z-50"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="mailto:aberasturi.j@northeastern.edu"
                  style={{ fontSize: '4rem' }}
                  className="col-start-7 col-span-2 flex justify-center p-6 text-white hover:text-blue-400 transition-all duration-300 hover:scale-110 relative z-50"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="w-full h-24 bg-gradient-to-b from-transparent to-indigo-900/50 mt-12"></div>
      </div>
    </Layout>
  );
}
