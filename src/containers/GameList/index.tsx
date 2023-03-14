import type { FC } from 'react';
import { Games } from '@/components/GameList';
import type { Game } from '@/models/Game/types';

export type Props = {
  games: Game[];
};

const GameList:FC<Props> = ({ games }) => (

  <Games games={games} />
);

export default GameList;
