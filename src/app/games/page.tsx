'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaGamepad, FaTrophy, FaUsers, FaBrain } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import GameCard from '@/client/components/GameCard';
import BackButton from '@/client/components/BackButton';
import Layout from '@/client/components/Layout';

interface Game {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  features: string[];
  isNew?: boolean;
}

const games: Game[] = [
  {
    id: 'word-guess',
    title: 'Word Guess',
    description: 'Guess the tech-related word before running out of attempts!',
    icon: <FaBrain className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    path: '/games/word-guess',
    features: ['Tech-themed words', 'Score tracking', 'Multiple difficulty levels'],
    isNew: true,
  },
  {
    id: 'code-number',
    title: 'Code Number',
    description: 'Break the secret code by guessing the right numbers!',
    icon: <FaGamepad className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    path: '/games/code-number',
    features: ['Number sequence', 'Feedback system', 'Limited attempts'],
  },
  // More games can be added here
];



export default function GamesHub() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Layout>
      <div className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto relative flex flex-col min-h-[calc(100vh-6rem)]">
          <div className="mb-8">
            <BackButton />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaGamepad className="w-12 h-12 text-blue-500 dark:text-blue-400" />
            </motion.div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Game Hub
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto mb-12">
              Challenge yourself with our collection of brain-teasing games designed to test your skills and knowledge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <AnimatePresence>
              {games.map((game, index) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GameCard
                    title={game.title}
                    description={game.description}
                    path={game.path}
                    icon={game.icon}
                    isNew={game.isNew}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative bg-gray-100 dark:bg-[#1e2330] rounded-2xl p-8 text-center mt-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              We&apos;re working on exciting new games to challenge your mind and test your skills. Stay tuned for updates!
            </p>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white dark:bg-[#1e2330] rounded-full flex items-center justify-center mb-2">
                  <FaTrophy className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-200">Leaderboards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white dark:bg-[#1e2330] rounded-full flex items-center justify-center mb-2">
                  <FaUsers className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-200">Multiplayer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
} 