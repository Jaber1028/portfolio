import { NextResponse } from 'next/server';
import { z } from 'zod';
import MemoryGridGameModel from '@/server/models/memoryGridGame.model';
import { connectMongoose } from '@/server/db/mongoose';

// Helper to generate a shuffled grid (4x4 for easy, can be parameterized)
function generateShuffledGrid(size = 4): (string | number)[][] {
  const totalCards = size * size;
  const pairs = Array.from({ length: totalCards / 2 }, (_, i) => i + 1);
  const cards = [...pairs, ...pairs];
  // Shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  // Convert to 2D grid
  const grid: (string | number)[][] = [];
  for (let i = 0; i < size; i++) {
    grid.push(cards.slice(i * size, (i + 1) * size));
  }
  return grid;
}

const FlipSchema = z.object({
  gameId: z.string(),
  row: z.number().int().min(0),
  col: z.number().int().min(0),
});

/**
 * Formats a Mongoose document for API response.
 * @param game - Mongoose document for a Memory Grid game session
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function formatGameResponse(game: any) {
  return {
    ...game.toObject(),
    _id: game._id.toString(),
  };
}

export async function POST() {
  try {
    await connectMongoose();
    const grid = generateShuffledGrid();
    const gameState = await MemoryGridGameModel.create({
      grid,
      flipped: [],
      matched: [],
      moves: 0,
      maxMoves: 40,
      isGameOver: false,
      isGameWon: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return NextResponse.json(formatGameResponse(gameState));
  } catch (error) {
    console.error('Error starting new Memory Grid game:', error);
    return NextResponse.json(
      { error: 'Failed to start new game. Please try again.' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    await connectMongoose();
    const body = await request.json();
    const { gameId, row, col } = FlipSchema.parse(body);
    const game = await MemoryGridGameModel.findById(gameId);
    if (!game) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }
    if (game.isGameOver) {
      return NextResponse.json(formatGameResponse(game));
    }
    // If already matched or already flipped, ignore
    if (
      (game.matched as [number, number][]).some(([r, c]) => r === row && c === col) ||
      (game.flipped as [number, number][]).some(([r, c]) => r === row && c === col)
    ) {
      return NextResponse.json(formatGameResponse(game));
    }
    const flipped: [number, number][] = [...(game.flipped as [number, number][]), [row, col]];
    let matched: [number, number][] = [...(game.matched as [number, number][])];
    let moves = game.moves;
    let isGameWon = false;
    let isGameOver = false;
    // If two cards are flipped, check for match
    if (flipped.length === 2) {
      moves += 1;
      const [[r1, c1], [r2, c2]] = flipped;
      if (game.grid[r1][c1] === game.grid[r2][c2]) {
        matched = [...matched, [r1, c1], [r2, c2]];
      }
      game.flipped = [];
    } else {
      game.flipped = flipped;
    }
    if (matched.length === game.grid.length * game.grid.length) {
      isGameWon = true;
      isGameOver = true;
    } else if (game.maxMoves && moves >= game.maxMoves) {
      isGameOver = true;
    }
    game.matched = matched;
    game.moves = moves;
    game.isGameWon = isGameWon;
    game.isGameOver = isGameOver;
    game.updatedAt = new Date();
    await game.save();
    return NextResponse.json(formatGameResponse(game));
  } catch (error) {
    console.error('Error processing flip:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data. Please check your input.' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to process flip. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    await connectMongoose();
    const { searchParams } = new URL(request.url);
    const gameId = searchParams.get('gameId');
    if (gameId) {
      const game = await MemoryGridGameModel.findById(gameId);
      if (!game) {
        return NextResponse.json({ error: 'Game not found' }, { status: 404 });
      }
      return NextResponse.json(formatGameResponse(game));
    }
    const activeGames = await MemoryGridGameModel.find({ isGameOver: false })
      .sort({ createdAt: -1 })
      .limit(10)
      .exec();
    return NextResponse.json(activeGames.map(formatGameResponse));
  } catch (error) {
    console.error('Error fetching Memory Grid game:', error);
    return NextResponse.json(
      { error: 'Failed to fetch game' },
      { status: 500 }
    );
  }
} 