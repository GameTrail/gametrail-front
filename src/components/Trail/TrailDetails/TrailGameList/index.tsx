import React from 'react';
import type { FC } from 'react';
import type { GameList } from '@/models/GameList/types';
import {
  Container, Game, GameImage, LastModified, Name, State,
} from './styles';

export type Props = {
  games: GameList[];
};

const TrailGameList:FC<Props> = ({ games }) => {
  const handleRenderGames = () => games.map((game) => (
    <Game>
      <div>
        <GameImage src={game.game.image} alt="image" width={160} height={160} />
      </div>
      <div>
        <Name>{game.game.name}</Name>
        <LastModified>{game.lastModified}</LastModified>
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
