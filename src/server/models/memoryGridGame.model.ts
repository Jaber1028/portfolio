import mongoose, { Model } from 'mongoose';
import memoryGridGameSchema from './schema/memoryGridGame.schema';
import { MemoryGridGameState } from '@/shared/types/game.types';

/**
 * Mongoose model for the Memory Grid game session collection.
 * Provides an interface for interacting with memory_grid_games in the database.
 *
 * @type {Model<MemoryGridGameState>}
 */
const MemoryGridGameModel: Model<MemoryGridGameState> = mongoose.models.MemoryGridGame || mongoose.model<MemoryGridGameState>('MemoryGridGame', memoryGridGameSchema);

export default MemoryGridGameModel; 