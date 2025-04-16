'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GameState {
  _id?: string;
  word: string;
  attempts: number;
  maxAttempts: number;
  guessedLetters: string[];
  isGameOver: boolean;
  isGameWon: boolean;
}

export default function WordGuessGame() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const mountedRef = useRef(true);

  // Track mounted state
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const startNewGame = async () => {
    if (!mountedRef.current) return;

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('/api/games/word-guess', {
        method: 'POST'
      });

      if (!response.ok) {
        throw new Error('Failed to start new game');
      }

      const data = await response.json();
      if (mountedRef.current) {
        setGameState(data);
      }
    } catch (err) {
      if (mountedRef.current && err instanceof Error) {
        setError(err.message || 'Failed to start game');
      }
    } finally {
      if (mountedRef.current) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    startNewGame();
    return () => {
      if (gameState?._id) {
        deleteGame(gameState._id);
      }
    };
  }, []);

  const deleteGame = async (id: string) => {
    try {
      const response = await fetch(`/api/games/word-guess?gameId=${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete game');
      }
    } catch (error) {
      console.warn('Error deleting game:', error);
    }
  };

  const handlePlayAgain = async () => {
    if (gameState?._id) {
      await deleteGame(gameState._id);
    }
    await startNewGame();
  };

  const handleRetry = () => {
    setError(null);
    startNewGame();
  };

  const makeGuess = async (letter: string) => {
    if (!mountedRef.current || !gameState?._id || gameState.isGameOver || gameState.guessedLetters.includes(letter)) {
      return;
    }

    try {
      const response = await fetch('/api/games/word-guess', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gameId: gameState._id,
          letter,
        })
      });

      if (!response.ok) {
        throw new Error('Failed to make guess');
      }

      const data = await response.json();
      if (mountedRef.current) {
        setGameState(data);
      }
    } catch (error) {
      if (mountedRef.current && error instanceof Error) {
        setError(error.message);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        {error}
        <button 
          onClick={handleRetry}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full max-w-2xl mx-auto p-4">
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Attempts: {gameState?.attempts} / {gameState?.maxAttempts}
        </p>
      </div>

      {/* Word Display */}
      <div className="flex justify-center gap-2 mb-8">
        {gameState?.word.split('').map((letter, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-12 h-12 border-2 border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center text-2xl font-bold"
          >
            {gameState.guessedLetters.includes(letter) ? letter : '_'}
          </motion.div>
        ))}
      </div>

      {/* Game Over State */}
      {gameState?.isGameOver && (
        <div className="text-center mb-8">
          {gameState?.isGameWon ? (
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              Congratulations! You won!
            </p>
          ) : (
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">
              Game Over! The word was: {gameState?.word}
            </p>
          )}
          <button
            onClick={handlePlayAgain}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Play Again
          </button>
        </div>
      )}

      {/* Keyboard */}
      {!gameState?.isGameOver && gameState && (
        <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
          {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => {
            const isGuessed = gameState.guessedLetters.includes(letter.toUpperCase());
            return (
              <motion.button
                key={letter}
                whileHover={{ scale: isGuessed ? 1 : 1.1 }}
                whileTap={{ scale: isGuessed ? 1 : 0.9 }}
                onClick={() => !isGuessed && makeGuess(letter)}
                disabled={isGuessed}
                className={`p-3 rounded-lg font-semibold text-lg transition-colors duration-200 ${
                  isGuessed 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {letter}
              </motion.button>
            );
          })}
        </div>
      )}
    </div>
  );
} 