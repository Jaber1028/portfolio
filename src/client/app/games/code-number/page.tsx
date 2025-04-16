'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GameLayout from '@/client/components/GameLayout';

interface GameState {
  _id: string;
  secretCode: string;
  attempts: number;
  maxAttempts: number;
  isGameOver: boolean;
  isGameWon: boolean;
}

interface Guess {
  numbers: string;
  correctPositions: number;
  correctNumbers: number;
}

export default function CodeNumberGame() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const startNewGame = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/games/code-number', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ maxAttempts: 10 }),
      });

      if (!response.ok) {
        throw new Error('Failed to start game');
      }

      const data = await response.json();
      setGameState(data);
      setGuesses([]);
      setCurrentGuess('');
      setError('');
    } catch (error) {
      setError('Failed to start a new game. Please try again.');
      console.error('Error starting game:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNumberInput = (num: string) => {
    if (currentGuess.length < 4) {
      setCurrentGuess(prev => prev + num);
    }
  };

  const handleSubmit = async () => {
    if (!gameState || currentGuess.length !== 4) return;

    try {
      setIsLoading(true);
      const response = await fetch(`/games/code-number?gameId=${gameState._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guess: currentGuess }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit guess');
      }

      const data = await response.json();
      setGameState(data);
      setGuesses(prev => [...prev, {
        numbers: currentGuess,
        correctPositions: data.correctPositions,
        correctNumbers: data.correctNumbers
      }]);
      setCurrentGuess('');
      setError('');
    } catch (error) {
      setError('Failed to submit guess. Please try again.');
      console.error('Error submitting guess:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setCurrentGuess('');
  };

  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <GameLayout title="Code Number" description="Guess the secret 4-digit code!">
      <div className="max-w-md mx-auto">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {gameState && (
          <>
            <div className="mb-8">
              <div className="text-center mb-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Attempts: {gameState.attempts}/{gameState.maxAttempts}
                </p>
              </div>

              <div className="flex justify-center gap-2 mb-4">
                {Array(4).fill(0).map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 border-2 border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center text-2xl font-bold bg-white dark:bg-gray-800"
                  >
                    {currentGuess[i] || '_'}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
                  <button
                    key={num}
                    onClick={() => handleNumberInput(num.toString())}
                    className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-xl font-bold hover:bg-gray-100 dark:hover:bg-gray-700"
                    disabled={isLoading || gameState.isGameOver}
                  >
                    {num}
                  </button>
                ))}
              </div>

              <div className="flex justify-center gap-2">
                <button
                  onClick={handleSubmit}
                  disabled={currentGuess.length !== 4 || isLoading || gameState.isGameOver}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  Submit
                </button>
                <button
                  onClick={handleClear}
                  disabled={isLoading || gameState.isGameOver}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50"
                >
                  Clear
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {guesses.map((guess, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex gap-2">
                    {guess.numbers.split('').map((num, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 border-2 border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center font-bold"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {guess.correctPositions} correct position{guess.correctPositions !== 1 ? 's' : ''}
                    <br />
                    {guess.correctNumbers} correct number{guess.correctNumbers !== 1 ? 's' : ''}
                  </div>
                </motion.div>
              ))}
            </div>

            {gameState.isGameOver && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center"
              >
                <p className="text-xl font-bold mb-2">
                  {gameState.isGameWon ? 'Congratulations! You won!' : 'Game Over!'}
                </p>
                <p className="mb-4">The code was: {gameState.secretCode}</p>
                <button
                  onClick={startNewGame}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Play Again
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </GameLayout>
  );
} 