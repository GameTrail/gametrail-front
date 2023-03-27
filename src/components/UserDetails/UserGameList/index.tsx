import React from 'react';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import NotFoundList from '@/components/Lotties/User/NotFoundList';
import type { GameList } from '@/models/GameList/types';
import {
  Container, Game, GameImage, LastModified, Name, State, GameListEmpty, Added,
} from './styles';

export type Props = {
  gameList: GameList[];
};

const UserGameList:FC<Props> = ({ gameList }) => {
  const router = useRouter();

  const parseDate = (date: string) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const handleClick = (game:number) => {
    router.push('/game/[id]', `/game/${game}`);
  };
  const handleRenderGames = () => {
    if (gameList && gameList.length > 0) {
      return (gameList.map((game) => (
        <Game onClick={() => handleClick(game.id)}>
          <div>
            <GameImage src={`https://${game.game.image}`} alt="image" width={120} height={120} />
          </div>
          <div>
            <Name>
              {game.game.name}
            </Name>
            <Added>
              <h4>Añadido</h4>
              {parseDate(game.creationMoment)}
            </Added>
            <LastModified>
              <h4>Última vez modificado</h4>
              {parseDate(game.lastModified)}
            </LastModified>
            <State state={game.status}>{game.status}</State>
          </div>
        </Game>
      ))
      );
    } if (gameList === null) {
      return (
        <GameListEmpty>
          <p>Aún no hay listas de juegos creadas</p>
          <NotFoundList />
        </GameListEmpty>
      );
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
