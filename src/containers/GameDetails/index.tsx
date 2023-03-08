import type { FC } from 'react';
import React from 'react';
import CommentsSection from '@/components/Comments/CommentsSection';
import type { Game } from '@/models/Game/types';

export type Props = {
  game: Game
};

const GameDetails: FC<Props> = ({ game }) => (
  <CommentsSection comments={game.comments} />
);
export default GameDetails;
