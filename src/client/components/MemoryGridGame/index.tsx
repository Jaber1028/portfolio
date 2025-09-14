import React, { useEffect, useState } from 'react';

interface MemoryGridGameState {
  _id: string;
  grid: (string | number)[][];
  flipped: [number, number][];
  matched: [number, number][];
  moves: number;
  maxMoves?: number;
  isGameOver: boolean;
  isGameWon: boolean;
  createdAt: string;
  updatedAt: string;
}

const fetchNewGame = async (): Promise<MemoryGridGameState> => {
  const res = await fetch('/api/games/memory-grid', { method: 'POST' });
  if (!res.ok) throw new Error('Failed to start new game');
  return res.json();
};

const fetchGame = async (gameId: string): Promise<MemoryGridGameState> => {
  const res = await fetch(`/api/games/memory-grid?gameId=${gameId}`);
  if (!res.ok) throw new Error('Failed to fetch game');
  return res.json();
};

const flipCard = async (gameId: string, row: number, col: number): Promise<MemoryGridGameState> => {
  const res = await fetch('/api/games/memory-grid', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ gameId, row, col }),
  });
  if (!res.ok) throw new Error('Failed to flip card');
  return res.json();
};

const clearFlippedCards = async (gameId: string): Promise<MemoryGridGameState> => {
  const res = await fetch('/api/games/memory-grid', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ gameId }),
  });
  if (!res.ok) throw new Error('Failed to clear flipped cards');
  return res.json();
};

const MemoryGridGame: React.FC = () => {
  const [game, setGame] = useState<MemoryGridGameState | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    startNewGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startNewGame = async () => {
    setLoading(true);
    setError(null);
    try {
      const newGame = await fetchNewGame();
      setGame(newGame);
    } catch {
      setError('Failed to start new game');
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = async (row: number, col: number) => {
    if (!game || flipping || game.isGameOver) return;
    // Prevent flipping already matched or already flipped cards
    if (
      game.matched.some(([r, c]) => r === row && c === col) ||
      game.flipped.some(([r, c]) => r === row && c === col)
    ) {
      return;
    }
    setFlipping(true);
    try {
      const updatedGame = await flipCard(game._id, row, col);
      setGame(updatedGame);
      
      // Check if this was the second card of a pair and they don't match
      if (updatedGame.flipped.length === 2 && !updatedGame.isGameOver) {
        // This was a wrong match - show both cards briefly before hiding them
        setTimeout(async () => {
          const clearedGame = await clearFlippedCards(game._id);
          setGame(clearedGame);
          setFlipping(false);
        }, 500); // Show for 0.5 seconds
      } else {
        setFlipping(false);
      }
    } catch {
      setError('Failed to flip card');
      setFlipping(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <span className="text-gray-700 dark:text-gray-200">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <span className="text-red-600 dark:text-red-400">{error}</span>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300"
          onClick={startNewGame}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!game) return null;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <div className="mb-4 flex items-center justify-between w-full">
        <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">Moves: {game.moves} / {game.maxMoves}</div>
        <button
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300"
          onClick={startNewGame}
        >
          New Game
        </button>
      </div>
      <div
        className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto overflow-x-auto"
      >
        <div
          className="grid gap-2 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
          style={{ gridTemplateColumns: `repeat(${game.grid.length}, minmax(2.5rem, 1fr))` }}
        >
          {game.grid.map((row, rowIdx) =>
            row.map((card, colIdx) => {
              const isFlipped = game.flipped.some(([r, c]) => r === rowIdx && c === colIdx);
              const isMatched = game.matched.some(([r, c]) => r === rowIdx && c === colIdx);
              return (
                <button
                  key={`${rowIdx}-${colIdx}`}
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 rounded-lg text-base sm:text-lg font-bold transition-colors duration-200
                    ${isMatched
                      ? 'bg-green-400 dark:bg-green-600 border-green-500 dark:border-green-400 text-white shadow'
                      : isFlipped
                        ? 'bg-blue-200 dark:bg-blue-700 border-blue-400 dark:border-blue-500 text-blue-900 dark:text-blue-100'
                        : 'bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'}
                    focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300
                  `}
                  onClick={() => handleCardClick(rowIdx, colIdx)}
                  disabled={isFlipped || isMatched || flipping || game.isGameOver}
                  aria-label={isMatched || isFlipped ? `Card: ${card}` : 'Hidden card'}
                >
                  {isMatched || isFlipped ? card : ''}
                </button>
              );
            })
          )}
        </div>
      </div>
      <div className="mt-6 w-full text-center">
        {game.isGameOver && (
          <div className="p-4 rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 font-semibold">
            Game Over! <button className="ml-2 underline text-blue-600 dark:text-blue-400" onClick={startNewGame}>Play Again</button>
          </div>
        )}
        {game.isGameWon && (
          <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-semibold">
            Congratulations! You won! <button className="ml-2 underline text-blue-600 dark:text-blue-400" onClick={startNewGame}>Play Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoryGridGame; 