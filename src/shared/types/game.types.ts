export type GameType = 'WordGuess' | 'TruthTable' | 'CodeNumber';

export interface Game {
  _id?: string;
  type: GameType;
  title: string;
  description: string;
  rules: string[];
  features: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isActive: boolean;
  isNew?: boolean;
  maxAttempts?: number;
  timeLimit?: number; // in seconds
  createdAt: Date;
  updatedAt: Date;
}

export interface GameState {
  score: number;
  highScore: number;
  isGameOver: boolean;
  isGameWon: boolean;
  attempts: number;
  maxAttempts: number;
}

export interface Config {
  difficulty: 'easy' | 'medium' | 'hard';
  soundEnabled: boolean;
  animationsEnabled: boolean;
}

export interface GameProgress {
  _id?: string;
  gameId: string;
  score: number;
  timeSpent: number;
  completed: boolean;
  attempts: number;
  createdAt?: Date;
  updatedAt?: Date;
} 