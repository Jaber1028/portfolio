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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="text-blue-400 text-xl md:text-2xl mb-4 block font-light">Welcome to my portfolio</span>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                Hi, I&apos;m Jacob Aberasturi
              </h1>
              <p className="text-2xl md:text-3xl text-blue-100 font-light mb-4">
                Computer Science Student | Full Stack Developer
              </p>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Passionate about creating innovative solutions through code. 
                Specializing in full-stack development and software engineering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-12 mb-12"
            >
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a
                href="#contact"
                className="bg-blue-500/80 hover:bg-blue-500 text-white px-12 py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-lg font-semibold backdrop-blur-sm"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="bg-transparent hover:bg-blue-500/10 text-white px-12 py-4 rounded-lg transition-all transform hover:scale-105 border-2 border-blue-500/50 hover:border-blue-500 text-lg font-semibold"
              >
                View Projects
              </a>
            </motion.div>

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

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 text-center space-y-8 leading-relaxed"
          >
            <p>
              I&apos;m a Computer Science student at Northeastern University with a passion for full-stack development and software engineering.
              My experience spans across web development, mobile applications, and infrastructure testing.
            </p>
            <p>
              Currently pursuing my Bachelor&apos;s degree with a 3.5/4.0 GPA, I&apos;m set to graduate in May 2025 and available for opportunities starting June 2025.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
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
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{job.title}</h3>
                    <p className="text-blue-400/80">{job.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="text-gray-300">{job.period}</p>
                    <p className="text-gray-400">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start group-hover:text-gray-200 transition-colors">
                      <span className="text-blue-400/80 mr-2">•</span>
                      <span>{achievement}</span>
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:bg-gray-800/40"
              >
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-blue-400/80 mb-2">{project.tech}</p>
                <p className="text-gray-400 mb-4">{project.period}</p>
                <ul className="space-y-3">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start group-hover:text-gray-200 transition-colors">
                      <span className="text-blue-400/80 mr-2">•</span>
                      <span>{achievement}</span>
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
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
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:bg-gray-800/40">
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">Languages</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">JavaScript, HTML/CSS, TypeScript, Swift, Python, C#, C++, C, Java</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:bg-gray-800/40">
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">Frameworks</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">React, Redux, Jest, Bootstrap, Node.js, UIKit, SwiftUI, pytest, JUnit, Processing</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:bg-gray-800/40">
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">Technologies & Tools</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">MongoDB, Firebase, Netlify, Postman, TCP/IP, Git, P4V, Xlinix, Jira, FPGA</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
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
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              I&apos;m currently looking for new opportunities. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="mailto:aberasturi.j@northeastern.edu"
                className="bg-blue-500/80 hover:bg-blue-500 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-semibold backdrop-blur-sm"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/jabercodes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500/80 hover:bg-blue-500 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-semibold backdrop-blur-sm"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
