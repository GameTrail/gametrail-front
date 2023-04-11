import type { ChangeEvent, FC } from 'react';
import { Games } from '@/components/GameList';
import type { Game } from '@/models/Game/types';

export type Props = {
  games: Game[];
  pages: number;
  searchQuery: string;
  handleUpdateSearchQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePagination: (page: number) => void;
};

const GameList:FC<Props> = ({
  games, pages, searchQuery, handleUpdateSearchQuery, handlePagination,
}) => (
  <Games
    games={games}
    pages={pages}
    searchQuery={searchQuery}
    handleUpdateSearchQuery={handleUpdateSearchQuery}
    handlePagination={handlePagination}
  />
);

export default GameList;
