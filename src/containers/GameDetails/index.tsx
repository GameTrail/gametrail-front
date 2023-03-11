import type { FC } from 'react';
import React from 'react';
import { GameData, GameImages, GameTrailList } from '@/components/GameDetails';
import GameListsButtons from '@/components/GameDetails/GameListsButtons';
import type { Game } from '@/models/Game/types';
import { Container, ListsDetails } from './style';

export type Props = {
  gameDetails: Game
};
const GameDetails:FC<Props> = ({ gameDetails }) => (
  <Container>
    <GameData gameDetails={gameDetails} />
    <GameListsButtons />
    <ListsDetails>
      <GameTrailList trailList={gameDetails.trailList} />
    </ListsDetails>
    <GameImages gameDetails={gameDetails} />
  </Container>
);

export default GameDetails;
