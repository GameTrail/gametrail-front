import type { ChangeEvent, FC } from 'react';
import { Games } from '@/components/GameList';
import type { Game } from '@/models/Game/types';

export type Props = {
  games: Game[];
  searchQuery: string;
  handleUpdateSearchQuery: (e: ChangeEvent<HTMLInputElement>) => void;
};

const GameList:FC<Props> = ({ games, searchQuery, handleUpdateSearchQuery }) => (
  <Games games={games} searchQuery={searchQuery} handleUpdateSearchQuery={handleUpdateSearchQuery} />
);

export default GameList;
