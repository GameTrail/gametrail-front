import type { FC } from 'react';
import React from 'react';
import CommentsContainer from '@/containers/CommentsContainer';
import type { Game } from '@/models/Game/types';

export type Props = {
  game: Game
};

const GameDetails: FC<Props> = ({ game }) => (
  <CommentsContainer game={game} />
);
export default GameDetails;
