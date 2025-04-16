import mongoose, { Model } from 'mongoose';
import gameSchema from './schema/game.schema';
import { Game } from '@/shared/types/game.types';

/**
 * Mongoose model for the Game collection.
 * 
 * This model provides an interface for interacting with games in the database.
 * It uses the Game interface and gameSchema for type safety and data structure.
 * 
 * @type {Model<Game>}
 */
const GameModel: Model<Game> = mongoose.model<Game>('Game', gameSchema);

export default GameModel; 