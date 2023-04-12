import React from 'react';
import type { FC } from 'react';
import NotFoundList from '@/components/Lotties/User/NotFoundList';
import type { GameList } from '@/models/GameList/types';
import {
  Container, GameListEmpty,
} from './styles';
import UserGameCard from './UserGameCard';

export type Props = {
  gameList: GameList[];
};

const UserGameList:FC<Props> = ({ gameList }) => {
  const handleRenderUserGames = () => gameList.map((game) => (
    <UserGameCard game={game} />
  ));
  return (
    <Container>
      {gameList && gameList.length > 0 ? (
        handleRenderUserGames()
      ) : (
        <GameListEmpty>
          <p>Aún no hay listas de juegos creadas</p>
          <NotFoundList />
        </GameListEmpty>
      )}

    </Container>
  );
};

export default UserGameList;
