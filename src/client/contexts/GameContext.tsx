'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { GameState, Config } from '@/shared/types/game.types';

interface GameContextType {
  gameState: GameState;
  gameConfig: Config;
  updateGameState: (newState: Partial<GameState>) => void;
  updateGameConfig: (newConfig: Partial<Config>) => void;
  resetGame: () => void;
}

const defaultGameState: GameState = {
  score: 0,
  highScore: 0,
  isGameOver: false,
  isGameWon: false,
  attempts: 0,
  maxAttempts: 6,
};


const defaultGameConfig: Config = {
  difficulty: 'medium',
  soundEnabled: true,
  animationsEnabled: true,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [gameState, setGameState] = useState<GameState>(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('gameState');
      return savedState ? JSON.parse(savedState) : defaultGameState;
    }
    return defaultGameState;
  });

  const [gameConfig, setGameConfig] = useState<Config>(() => {
    if (typeof window !== 'undefined') {
      const savedConfig = localStorage.getItem('gameConfig');
      return savedConfig ? JSON.parse(savedConfig) : defaultGameConfig;
    }
    return defaultGameConfig;
  });

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }, [gameState]);

  useEffect(() => {
    localStorage.setItem('gameConfig', JSON.stringify(gameConfig));
  }, [gameConfig]);

  const updateGameState = (newState: Partial<GameState>) => {
    setGameState(prev => ({ ...prev, ...newState }));
  };


  const updateGameConfig = (newConfig: Partial<Config>) => {
    setGameConfig(prev => ({ ...prev, ...newConfig }));
  };

  const resetGame = () => {
    setGameState(defaultGameState);
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        gameConfig,
        updateGameState,
        updateGameConfig,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
} 