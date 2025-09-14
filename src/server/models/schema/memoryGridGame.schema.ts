import { Schema } from 'mongoose';

/**
 * Mongoose schema for the Memory Grid game session collection.
 * This schema defines the structure for storing per-session state of the Memory Grid game.
 */
const memoryGridGameSchema = new Schema({
  grid: {
    type: [[Schema.Types.Mixed]], // 2D array of numbers or strings
    required: true
  },
  flipped: {
    type: [[Number]], // Array of [row, col] pairs
    default: []
  },
  matched: {
    type: [[Number]], // Array of [row, col] pairs
    default: []
  },
  moves: {
    type: Number,
    default: 0
  },
  maxMoves: {
    type: Number,
    default: 20
  },
  isGameOver: {
    type: Boolean,
    default: false
  },
  isGameWon: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'memory_grid_games',
  timestamps: true
});

export default memoryGridGameSchema; 