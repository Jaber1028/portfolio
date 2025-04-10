'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaGit, FaJs, FaLinux, FaNode, FaPython, FaReact, FaSwift } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiNodedotjs, SiMongodb, SiSocketdotio, SiReact, SiWebgl, SiSharp, SiUnity, 
         SiVuedotjs, SiTailwindcss, SiHtml5, SiCss3, SiSwift, SiFirebase, SiLinux, SiPython, SiC, SiCplusplus,
         SiRedux, SiJest, SiPostman, SiGit, SiXcode, SiUbuntu, SiRedhat, SiApple, SiAssemblyscript, SiCocoapods } from 'react-icons/si';
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface TechBadgeProps {
  icon?: IconType;
  text: string;
}

const TechBadge = ({ icon: Icon, text }: TechBadgeProps) => (
  <div style={{ 
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: '9999px',
    padding: '0.375rem 0.75rem',
    marginRight: '1.5rem',
    marginBottom: '0.5rem'
  }}>
    {Icon && <Icon style={{ 
      width: '1.25rem',
      height: '1.25rem',
      marginRight: '0.5rem'
    }} />}
    <span style={{
      fontSize: '0.875rem',
      fontWeight: 500
    }}>{text}</span>
  </div>
);

const getTechIcon = (tech: string): IconType | null => {
  const iconMap: Record<string, IconType> = {
    'TypeScript': SiTypescript,
    'Express': SiExpress,
    'Node.js': SiNodedotjs,
    'MongoDB': SiMongodb,
    'Socket.io': SiSocketdotio,
    'React': SiReact,
    'WebGL': SiWebgl,
    'C#': SiSharp,
    'Unity': SiUnity,
    'Vue.js': SiVuedotjs,
    'Tailwind': SiTailwindcss,
    'HTML': SiHtml5,
    'CSS': SiCss3,
    'Swift': SiSwift,
    'Firebase': SiFirebase,
    'Linux': SiLinux,
    'Python': SiPython,
    'C': SiC,
    'C++': SiCplusplus,
    'Redux': SiRedux,
    'Jest': SiJest,
    'Postman': SiPostman,
    'Git': SiGit,
    'Xcode': SiXcode,
    'Ubuntu': SiUbuntu,
    'RedHat': SiRedhat,
    'Apple': SiApple,
    'Csharp': SiSharp,
    'Assemblyscript': SiAssemblyscript,
    'Cocoapods': SiCocoapods,
  };
  return iconMap[tech] || null;
};

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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center text-white"
            >
              Education
            </motion.h2>
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center text-white"
            >
              Experience
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Infrastructure SQA Engineer Co-op",
                  company: "Cisco/Acacia Communications",
                  period: "July 2024 - Dec. 2024",
                  location: "Maynard, MA",
                  tech: ["C#", "Git"],
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
                  tech: ["Python", "Linux", "Git"],
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
                  tech: ["Swift", "UIKit", "Firebase"],
                  achievements: [
                    "Developed a hybrid iOS application",
                    "Implemented multilingual support"
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
                  <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                  <p className="text-blue-400 mb-2">{job.company}</p>
                  <p className="text-blue-200 mb-2">{job.period}</p>
                  <p className="text-blue-200 mb-4">{job.location}</p>
                  <div className="flex flex-wrap mb-4">
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4 text-center text-white"
            >
              My Projects
            </motion.h2>
            <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
              Explore my portfolio of web applications, mobile apps, and other digital creations that showcase my skills and expertise.
            </p>

            <div className="max-w-4xl mx-auto space-y-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">Fake Stack Overflow</h3>
                  <a
                    href="https://github.com/Jaber1028/fake-stack-overflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
                <div className="flex flex-wrap mb-4">
                  {["TypeScript", "React", "Express", "MongoDB", "Socket.io"].map((tech, i) => {
                    const Icon = getTechIcon(tech);
                    return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                  })}
                </div>
                <p className="text-blue-200 mb-6">A comprehensive Q&A platform with authentication, direct messaging, and interactive games using TypeScript and the MERN stack</p>
                <div className="space-y-2">
                  <p className="flex items-start text-blue-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span>Built a comprehensive Q&A platform with authentication, direct messaging, and interactive games</span>
                  </p>
                  <p className="flex items-start text-blue-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span>Architected a Daily Puzzles feature with automated generation algorithms</span>
                  </p>
                  <p className="flex items-start text-blue-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span>Implemented real-time data synchronization using Socket.io</span>
                  </p>
                </div>
                <p className="text-blue-200 text-sm mt-4 text-right">Jan. 2025 - Apr. 2025</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">Kanbas</h3>
                  <a
                    href="https://github.com/Jaber1028/kanbas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
                <div className="flex flex-wrap mb-4">
                  {["JavaScript", "React", "Node.js", "MongoDB"].map((tech, i) => {
                    const Icon = getTechIcon(tech);
                    return Icon && <TechBadge key={i} icon={Icon} text={tech} />;
                  })}
                </div>
                <p className="text-blue-200 mb-6">A full-stack learning management system</p>
                <div className="space-y-2">
                  <p className="flex items-start text-blue-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span>Developed a full-stack learning management system</span>
                  </p>
                  <p className="flex items-start text-blue-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span>Architected a Single Page Application using React and Redux</span>
                  </p>
                  <p className="flex items-start text-blue-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    <span>Built a scalable backend using Node.js and MongoDB</span>
                  </p>
                </div>
                <p className="text-blue-200 text-sm mt-4 text-right">Jan. 2024 - May 2024</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>

       {/* Skills Section */}
       <section id="skills" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-16">Skills</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Languages</h3>
                <div className="flex flex-wrap gap-4">
                  <TechBadge icon={FaSwift} text="Swift" />
                  <TechBadge icon={SiApple} text="Objective-C" />
                  <TechBadge icon={SiC} text="C" />
                  <TechBadge icon={SiCplusplus} text="C++" />
                  <TechBadge icon={SiSharp} text="C#" />
                  <TechBadge icon={FaPython} text="Python" />
                  <TechBadge icon={FaJs} text="JavaScript" />
                  <TechBadge icon={SiTypescript} text="TypeScript" />
                  <TechBadge icon={SiAssemblyscript} text="Assembly" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Frameworks</h3>
                <div className="flex flex-wrap gap-4">
                  <TechBadge icon={SiSwift} text="SwiftUI" />
                  <TechBadge icon={SiApple} text="UIKit" />
                  <TechBadge icon={SiApple} text="CoreData" />
                  <TechBadge icon={FaReact} text="React" />
                  <TechBadge icon={SiRedux} text="Redux" />
                  <TechBadge icon={SiJest} text="Jest" />
                  <TechBadge icon={FaNode} text="Node.js" />
                  <TechBadge icon={SiExpress} text="Express" />
                  <TechBadge icon={SiPython} text="pytest" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-4">
                  <TechBadge icon={SiXcode} text="Xcode" />
                  <TechBadge icon={FaGit} text="Git" />
                  <TechBadge icon={SiCocoapods} text="CocoaPods" />
                  <TechBadge icon={SiPostman} text="REST APIs" />
                  <TechBadge icon={SiMongodb} text="MongoDB" />
                  <TechBadge icon={SiFirebase} text="Firebase" />
                  <TechBadge icon={FaLinux} text="Linux" />
                  <TechBadge icon={SiPostman} text="Postman" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-8 text-white">Get In Touch</h2>
              <p className="text-xl text-blue-200 mb-12">
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
            </motion.div>
          </div>
        </section>

        <div className="w-full h-24 bg-gradient-to-b from-transparent to-indigo-900/50 mt-12"></div>
      </div>
    </Layout>
  );
}
