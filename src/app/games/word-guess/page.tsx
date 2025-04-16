'use client';

import GameLayout from '@/client/components/GameLayout';
import WordGuessGame from '@/client/components/WordGuessGame';

export default function WordGuessPage() {
  return (
    <GameLayout
      title="Word Guess"
      description="Guess the tech-related word before running out of attempts!"
    >
      <WordGuessGame />
    </GameLayout>
  );
} 