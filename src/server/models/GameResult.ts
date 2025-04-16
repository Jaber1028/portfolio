import { ObjectId } from 'mongodb';

export interface GameResult {
  _id?: ObjectId;
  gameType: string;
  score: number;
  attempts: number;
  difficulty: string;
  timestamp: Date;
}

export const gameResultSchema = {
  gameType: { type: 'string', required: true },
  score: { type: 'number', required: true },
  attempts: { type: 'number', required: true },
  difficulty: { type: 'string', required: true },
  timestamp: { type: 'date', required: true }
}; 