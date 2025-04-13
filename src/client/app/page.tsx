'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Layout from '@/client/components/Layout';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/client/components/Section';
import CourseCard from '@/client/components/CourseCard';
import SkillSection from '@/client/components/SkillSection';
import SocialLink from '@/client/components/SocialLink';
import ContactForm from '@/client/components/ContactForm';
import ProjectCard from '@/client/components/ProjectCard';
import { projects } from '@/data/projects';

// Lazy load interactive components
const ThemeToggle = dynamic(() => import('@/client/components/ThemeToggle'));
const BackToTop = dynamic(() => import('@/client/components/BackToTop'));

// Lazy load components with heavy dependencies
const JobCard = dynamic(() => import('@/client/components/JobCard'));

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get featured projects (first 3 web projects)
  const featuredProjects = projects
    .filter(project => project.category === 'Web')
    .slice(0, 3);

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
                  priority
                  quality={90}
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
          <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 dark:bg-gray-800 rounded-xl"></div>}>
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
                <JobCard key={index} {...job} index={index} />
              ))}
            </div>
          </Suspense>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Featured Projects" className="py-20">
          <p className="text-center text-gray-600 dark:text-blue-200 max-w-2xl mx-auto mb-12">
            Here are some of my recent web development projects. Visit my projects page to see more.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
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
          <div className="max-w-4xl mx-auto space-y-12">
            <SkillSection
              title="Languages"
              technologies={["Swift", "Objective-C", "C", "C++", "C#", "Python", "JavaScript", "TypeScript", "Assembly", "Java", "HTML", "CSS"]}
            />
            <SkillSection
              title="Frameworks"
              technologies={["SwiftUI", "UIKit", "CoreData", "React", "Redux", "Jest", "Node.js", "Express", "pytest", "Next.js", "Tailwind CSS", "Server Components", "Edge Runtime", "Framer Motion"]}
            />
            <SkillSection
              title="Technologies & Tools"
              technologies={["Xcode", "Git", "CocoaPods", "REST APIs", "MongoDB", "Firebase", "Linux", "Postman", "ESLint", "Vercel", "Cron", "JUnit"]}
            />
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get In Touch" className="mt-12">
          <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 dark:bg-gray-800 rounded-xl"></div>}>
            <ContactForm />
          </Suspense>
          <div className="flex justify-center items-center gap-8 mt-12">
            <SocialLink
              href="https://github.com/Jaber1028"
              icon={FaGithub}
              ariaLabel="GitHub Profile"
            />
            <SocialLink
              href="https://linkedin.com/in/jabercodes"
              icon={FaLinkedin}
              ariaLabel="LinkedIn Profile"
            />
            <SocialLink
              href="mailto:aberasturi.j@northeastern.edu"
              icon={FaEnvelope}
              ariaLabel="Email Contact"
            />
          </div>
        </Section>
      </div>
      <ThemeToggle />
      <BackToTop />
    </Layout>
  );
} 