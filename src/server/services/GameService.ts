import { ObjectId } from 'mongodb';
import { connectToDatabase } from '@/server/db/mongodb';

export interface GameState {
  secretCode: number[];
  attempts: number;
  maxAttempts: number;
  isGameOver: boolean;
  isGameWon: boolean;
}

export class GameService {
  private readonly gamesCollection = 'games';

  generateSecretCode(length: number): number[] {
    const code: number[] = [];
    while (code.length < length) {
      const digit = Math.floor(Math.random() * 10);
      if (!code.includes(digit)) {
        code.push(digit);
      }
    }
    return code;
  }

  evaluateGuess(secret: number[], guess: number[]): { correctPosition: number; correctNumbers: number } {
    let correctPosition = 0;
    let correctNumbers = 0;

    for (let i = 0; i < secret.length; i++) {
      if (guess[i] === secret[i]) {
        correctPosition++;
      } else if (secret.includes(guess[i])) {
        correctNumbers++;
      }
    }

    return { correctPosition, correctNumbers };
  }

  async createGame(length: number = 4, maxAttempts: number = 10): Promise<GameState> {
    const { db } = await connectToDatabase();
    const gameState: GameState = {
      secretCode: this.generateSecretCode(length),
      attempts: 0,
      maxAttempts,
      isGameOver: false,
      isGameWon: false
    };

    await db.collection(this.gamesCollection).insertOne({
      ...gameState,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return gameState;
  }

  async makeGuess(gameId: string, guess: number[]): Promise<{
    correctPosition: number;
    correctNumbers: number;
    isGameOver: boolean;
    isGameWon: boolean;
  }> {
    const { db } = await connectToDatabase();
    const game = await db.collection(this.gamesCollection).findOne({ _id: new ObjectId(gameId) });
    
    if (!game) {
      throw new Error('Game not found');
    }

    const result = this.evaluateGuess(game.secretCode, guess);
    const isGameWon = result.correctPosition === game.secretCode.length;
    const isGameOver = isGameWon || game.attempts + 1 >= game.maxAttempts;

    await db.collection(this.gamesCollection).updateOne(
      { _id: new ObjectId(gameId) },
      {
        $set: {
          attempts: game.attempts + 1,
          isGameOver,
          isGameWon,
          updatedAt: new Date()
        }
      }
    );

    return {
      ...result,
      isGameOver,
      isGameWon
    };
  }
} 