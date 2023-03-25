import React from 'react';
import type { FC } from 'react';
import NotFoundList from '@/components/Lotties/User/NotFoundList';
import type { GameList } from '@/models/GameList/types';
import {
  Container, Game, GameImage, LastModified, Name, State, GameListEmpty,
} from './styles';

export type Props = {
  gameList: GameList[];
};

const UserGameList:FC<Props> = ({ gameList }) => {
  const handleRenderGames = () => {
    if (gameList !== null) {
      gameList.map((game) => (
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
    }
    return (
      <GameListEmpty>
        <p>Aún no hay listas de juegos creadas</p>
        <NotFoundList />
      </GameListEmpty>
    );
  };
  return (
    <Container>
      {handleRenderGames()}
    </Container>
  );
};

export default UserGameList;
