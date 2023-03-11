import React from 'react';
import type { FC } from 'react';
import type { GameList } from '@/models/GameList/types';
import {
  Container, Game, GameImage, LastModified, Name, State,
} from './styles';

export type Props = {
  gameList: GameList[];
};

const UserGameList:FC<Props> = ({ gameList }) => {
  const handleRenderGames = () => gameList.map((game) => (
    <Game>
      <div>
        <GameImage src={game.image} alt="image" width={120} height={120} />
      </div>
      <div>
        <Name>{game.name}</Name>
        <LastModified>{game.lastModified}</LastModified>
        <State state={game.state}>{game.state}</State>
      </div>
    </Game>
  ));
  return (
    <Container>
      {handleRenderGames()}
    </Container>
  );
};

export default UserGameList;
