'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem('theme') || 'light';
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
    <div 
      style={{ 
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 2147483647,
        boxShadow: 'none'
      }}
    >
      <motion.button
        onClick={toggleTheme}
        className="w-9 h-9 flex items-center justify-center bg-black/80 hover:bg-black/90 text-white rounded-full shadow-lg backdrop-blur-3xl"
        style={{
          boxShadow: '0 0 0 1px #171717, inset 0 0 0 1px hsla(0,0%,100%,0.14)',
          backdropFilter: 'blur(48px)',
          WebkitFontSmoothing: 'antialiased'
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <FaSun className="w-4 h-4" />
        ) : (
          <FaMoon className="w-4 h-4" />
        )}
      </motion.button>
    </div>
  );
} 