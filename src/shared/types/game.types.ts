export type GameType = 'WordGuess' | 'TruthTable' | 'CodeNumber' | 'MemoryGrid';

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

/**
 * State for the Memory Grid (Bitburner-style) mini-game
 */
export interface MemoryGridGameState {
  /** Unique game ID (if persisted) */
  _id?: string;
  /** 2D array representing the grid of cards (each card is a string or number) */
  grid: (string | number)[][];
  /** Array of coordinates for currently flipped cards */
  flipped: [number, number][];
  /** Array of coordinates for matched cards */
  matched: [number, number][];
  /** Number of moves made by the player */
  moves: number;
  /** Maximum allowed moves (optional, for difficulty) */
  maxMoves?: number;
  /** Whether the game is over */
  isGameOver: boolean;
  /** Whether the player has won */
  isGameWon: boolean;
  /** Timestamp for game creation */
  createdAt: Date;
  /** Timestamp for last update */
  updatedAt: Date;
} 