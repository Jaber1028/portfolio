import { Schema } from 'mongoose';

/**
 * Mongoose schema for the GameProgress collection.
 * 
 * This schema tracks individual user progress and performance in games.
 * It includes fields for scoring, timing, and completion status.
 */
const gameProgressSchema = new Schema({
  gameId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Game',
    required: true 
  },
  score: { type: Number, default: 0 },
  timeSpent: { type: Number, default: 0 }, // in seconds
  completed: { type: Boolean, default: false },
  attempts: { type: Number, default: 0 },
}, {
  collection: 'gameProgress',
  timestamps: true
});

// Indexes for efficient queries
gameProgressSchema.index({ gameId: 1, userId: 1 });
gameProgressSchema.index({ userId: 1, completed: 1 });
gameProgressSchema.index({ gameId: 1, score: -1 }); // For leaderboards

// Compound index for finding user's latest games
gameProgressSchema.index({ userId: 1, lastAttemptAt: -1 });

export default gameProgressSchema; 