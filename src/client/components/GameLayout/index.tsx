'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaCog, FaTrophy } from 'react-icons/fa';
import { createContext, useContext, useState, ReactNode } from 'react';

interface GameState {
  _id?: string;
  word?: string;
  attempts?: number;
  maxAttempts?: number;
  guessedLetters?: string[];
  isGameOver?: boolean;
  isGameWon?: boolean;
}

const GameStateContext = createContext<{
  gameState: GameState | null;
  setGameState: (state: GameState | null) => void;
}>({ gameState: null, setGameState: () => {} });

export const useGameState = () => useContext(GameStateContext);

interface GameLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export default function GameLayout({ children, title, description }: GameLayoutProps) {
  const [gameState, setGameState] = useState<GameState | null>(null);

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/games"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaHome className="mr-2" />
              Back to Games
            </Link>
            <div className="flex items-center space-x-4">
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaCog />
              </button>
              <Link
                href="/games/leaderboard"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaTrophy className="mr-2" />
                Leaderboard
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h1>
            {description && (
              <p className="text-gray-600 dark:text-gray-300">{description}</p>
            )}
          </motion.div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            {children}
          </div>
        </div>
      </div>
    </GameStateContext.Provider>
  );
} 