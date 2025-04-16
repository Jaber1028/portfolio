import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/server/db/mongodb';
import { z } from 'zod';
import { ObjectId, WithId } from 'mongodb';

const words = [
  // Programming Languages
  'REACT', 'NEXT', 'TYPESCRIPT', 'JAVASCRIPT', 'PYTHON', 'SWIFT', 'KOTLIN', 'RUST', 'GOLANG', 'JAVA',
  // Web Technologies
  'HTML', 'CSS', 'SASS', 'REDUX', 'GRAPHQL', 'WEBPACK', 'VITE', 'DOCKER', 'NGINX', 'REDIS',
  // Frameworks & Libraries
  'ANGULAR', 'SVELTE', 'JQUERY', 'DJANGO', 'FLASK', 'SPRING', 'RAILS', 'LARAVEL', 'EXPRESS', 'NUXT',
  // Cloud & DevOps
  'AWS', 'AZURE', 'DOCKER', 'KUBERNETES', 'JENKINS', 'GITLAB', 'GITHUB', 'VERCEL', 'NETLIFY', 'HEROKU',
  // Database
  'MONGODB', 'POSTGRES', 'MYSQL', 'REDIS', 'SQLITE', 'PRISMA', 'SEQUELIZE', 'FAUNA', 'SUPABASE', 'ORACLE',
  // Tools & Concepts
  'GIT', 'NPM', 'YARN', 'BABEL', 'ESLINT', 'JEST', 'CYPRESS', 'DOCKER', 'LINUX', 'AGILE',
  // Mobile Development
  'ANDROID', 'IOS', 'FLUTTER', 'XAMARIN', 'IONIC', 'REACT', 'NATIVE', 'CORDOVA', 'KOTLIN', 'SWIFT',
  // AI & ML
  'PYTORCH', 'TENSORFLOW', 'KERAS', 'NUMPY', 'PANDAS', 'SCIKIT', 'OPENCV', 'HUGGING', 'FACE', 'BERT'
];

interface GameState {
  _id?: string | ObjectId;
  word: string;
  attempts: number;
  maxAttempts: number;
  guessedLetters: string[];
  isGameOver: boolean;
  isGameWon: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const GuessSchema = z.object({
  gameId: z.string(),
  letter: z.string().length(1),
});

function formatGameResponse(game: WithId<GameState>) {
  return {
    ...game,
    _id: game._id.toString()
  };
}

export async function POST() {
  try {
    const { db } = await connectToDatabase();
    
    const gameState = {
      word: words[Math.floor(Math.random() * words.length)],
      attempts: 0,
      maxAttempts: 6,
      guessedLetters: [],
      isGameOver: false,
      isGameWon: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection('word_guess_games').insertOne(gameState);
    
    return NextResponse.json({
      ...gameState,
      _id: result.insertedId.toString()
    });
  } catch (error) {
    console.error('Error starting new game:', error);
    return NextResponse.json(
      { error: 'Failed to start new game. Please try again.' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { gameId, letter } = GuessSchema.parse(body);

    const { db } = await connectToDatabase();
    
    let query;
    try {
      query = { _id: new ObjectId(gameId) };
    } catch {
      return NextResponse.json(
        { error: 'Invalid game ID format' },
        { status: 400 }
      );
    }
    
    const game = await db.collection<GameState>('word_guess_games').findOne(query);
    
    if (!game) {
      return NextResponse.json(
        { error: 'Game not found' },
        { status: 404 }
      );
    }

    if (game.isGameOver) {
      return NextResponse.json(formatGameResponse(game));
    }

    // Convert letter to uppercase for comparison
    const upperLetter = letter.toUpperCase();
    
    // If letter was already guessed, return current game state without counting as an attempt
    if (game.guessedLetters.includes(upperLetter)) {
      return NextResponse.json(formatGameResponse(game));
    }

    // Check if the letter exists in the word
    const isCorrectGuess = game.word.includes(upperLetter);

    const updatedGame: GameState = {
      ...game,
      // Only increment attempts for incorrect guesses
      attempts: isCorrectGuess ? game.attempts : game.attempts + 1,
      guessedLetters: [...game.guessedLetters, upperLetter],
      updatedAt: new Date()
    };
    
    const isWordGuessed = game.word.split('').every((char: string) => 
      updatedGame.guessedLetters.includes(char)
    );
    
    updatedGame.isGameWon = isWordGuessed;
    updatedGame.isGameOver = isWordGuessed || updatedGame.attempts >= game.maxAttempts;

    const result = await db.collection<GameState>('word_guess_games').findOneAndUpdate(
      { _id: game._id },
      { $set: updatedGame },
      { returnDocument: 'after' }
    );

    if (!result) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json(formatGameResponse(result));
  } catch (error) {
    console.error('Error processing guess:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data. Please check your input.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process guess. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { db } = await connectToDatabase();
    const { searchParams } = new URL(request.url);
    const gameId = searchParams.get('gameId');
    
    if (gameId) {
      const game = await db.collection<GameState>('word_guess_games').findOne({ 
        _id: new ObjectId(gameId)
      });
      
      if (!game) {
        return NextResponse.json(
          { error: 'Game not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(formatGameResponse(game));
    }

    const activeGames = await db.collection<GameState>('word_guess_games')
      .find({ isGameOver: false })
      .sort({ createdAt: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(activeGames.map(formatGameResponse));
  } catch (error) {
    console.error('Error fetching game:', error);
    return NextResponse.json(
      { error: 'Failed to fetch game' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const gameId = searchParams.get('gameId');

    if (!gameId) {
      return NextResponse.json({ error: 'Game ID is required' }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    
    try {
      const result = await db.collection('word_guess_games').deleteOne({ 
        _id: new ObjectId(gameId) 
      });

      if (result.deletedCount === 0) {
        return NextResponse.json({ error: 'Game not found' }, { status: 404 });
      }

      return NextResponse.json({ message: 'Game deleted successfully' });
    } catch (error) {
      if (error instanceof Error && error.message.includes('ObjectId')) {
        return NextResponse.json({ error: 'Invalid game ID format' }, { status: 400 });
      }
      throw error;
    }
  } catch (error) {
    console.error('Failed to delete game:', error);
    return NextResponse.json(
      { error: 'Failed to delete game' },
      { status: 500 }
    );
  }
} 