'use client';

import GameLayout from '@/client/components/GameLayout';
import MemoryGridGame from '@/client/components/MemoryGridGame';

export default function MemoryGridPage() {
  return (
    <GameLayout title="Memory Grid" description="Match all pairs before you run out of moves!">
      <MemoryGridGame />
    </GameLayout>
  );
} 