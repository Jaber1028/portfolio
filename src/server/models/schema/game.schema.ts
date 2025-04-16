import { Schema } from 'mongoose';

/**
 * Mongoose schema for the Game collection.
 * 
 * This schema defines the structure for storing games in the database.
 * It includes fields for game configuration, statistics, and metadata.
 */
const gameSchema = new Schema({
  type: { 
    type: String, 
    required: true,
    enum: ['WordGuess', 'TruthTable', 'CodeNumber']
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  rules: [{ type: String }],
  features: [{ type: String }],
  difficulty: { 
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  isActive: { type: Boolean, default: true },
  isNew: { type: Boolean, default: false },
  maxAttempts: { type: Number },
  timeLimit: { type: Number }, // in secondsstats: { type: gameStatsSchema, default: () => ({}) },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  collection: 'games',
  timestamps: true
});

// Index for efficient queries
gameSchema.index({ type: 1, isActive: 1 });
gameSchema.index({ difficulty: 1 });

export default gameSchema; 