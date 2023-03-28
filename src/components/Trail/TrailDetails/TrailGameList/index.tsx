import React from 'react';
import type { FC } from 'react';
import type { TrailGame } from '@/models/Trail/types';
import { normalizeImage } from '@/utils/normalizeImage';
import {
  Container, Game, GameImage, LastModified, Name, State,
} from './styles';

export type Props = {
  games: TrailGame[];
};

const TrailGameList:FC<Props> = ({ games }) => {
  const handleRenderGames = () => games.map((game) => (
    <Game href={`/game/${game.id}`}>
      <div>
        <GameImage src={normalizeImage(game.image)} alt="image" width={160} height={160} />
      </div>
      <div>
        <Name>{game.name}</Name>
        <LastModified>{game.releaseDate}</LastModified>
        <State state={game.status}>{game.status}</State>
      </div>
    </Game>
  ));
  return (
    <Container>
      {handleRenderGames()}
    </Container>
  );
};

export default TrailGameList;
