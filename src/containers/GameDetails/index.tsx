import type { FC } from 'react';
import React from 'react';
import { GameData, GameImages } from '@/components/GameDetails';
import type { Game } from '@/models/Game/types';
import { Container } from './style';

export type Props = {
  gameDetails: Game
};
const GameDetails:FC<Props> = ({ gameDetails }) => (
  <Container>
    <GameData gameDetails={gameDetails} />
    <GameImages gameDetails={gameDetails} />
  </Container>
);

export default GameDetails;
