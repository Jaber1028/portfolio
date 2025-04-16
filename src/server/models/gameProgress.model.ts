import mongoose, { Model } from 'mongoose';
import gameProgressSchema from './schema/gameProgress.schema';
import { GameProgress } from '@/shared/types/game.types';

/**
 * Mongoose model for the GameProgress collection.
 * 
 * This model provides an interface for tracking user progress in games.
 * It uses the GameProgress interface and gameProgressSchema for type safety and data structure.
 * 
 * @type {Model<GameProgress>}
 */
const GameProgressModel: Model<GameProgress> = mongoose.model<GameProgress>('GameProgress', gameProgressSchema);

export default GameProgressModel; 