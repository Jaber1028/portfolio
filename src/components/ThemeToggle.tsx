'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="bg-blue-500/80 hover:bg-blue-500 text-white p-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaSun className="text-xl" />
      ) : (
        <FaMoon className="text-xl" />
      )}
    </motion.button>
  );
} 