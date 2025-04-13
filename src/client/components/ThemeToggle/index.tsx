'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check system preference first
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Use saved theme if exists, otherwise use system preference
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 2147483647
      }}
    >
      <motion.button
        onClick={toggleTheme}
        className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg backdrop-blur-3xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? 'dark' : 'light'}
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? (
              <FaMoon className="w-5 h-5 text-blue-500" />
            ) : (
              <FaSun className="w-5 h-5 text-yellow-500" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
} 