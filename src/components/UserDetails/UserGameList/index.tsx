import React from 'react';
import type { FC } from 'react';
import NotFoundList from '@/components/Lotties/User/NotFoundList';
import type { GameList } from '@/models/GameList/types';
import { GameListState } from '@/models/GameList/types';
import { getUserCookie } from '@/utils/login';
import {
  Container, Game, GameImage, LastModified, Name, State, GameListEmpty, Added, GameData, GameInfo,
} from './styles';

export type Props = {
  gameList: GameList[];
};

const UserGameList:FC<Props> = ({ gameList }) => {
  const user = getUserCookie();
  const token = user?.token;

  const handleOnClick = async (game: GameList) => {
    if (user && token) {
      const currentState = game.status;
      let newState = null;
      if (currentState === GameListState.PENDING) {
        newState = GameListState.PLAYING;
      } else if (currentState === GameListState.PLAYING) {
        newState = GameListState.FINISHED;
      } else {
        newState = GameListState.PENDING;
      }
      const requestData = {
        user: user.id.toString(),
        game: game.game.id.toString(),
        status: newState.toString(),
      };
      try {
        const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/gameList/game', {
          method: 'PUT',
          body: JSON.stringify(requestData),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
      } catch (error) {
        throw new Error();
      }
    }
  };

  const parseDate = (date: string) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleRenderGames = () => {
    if (gameList && gameList.length > 0) {
      return (gameList.map((game) => (
        <Game href={`/game/${game.game.id}`}>
          <div>
            <GameImage src={`https://${game.game.image}`} alt="image" />
          </div>
          <GameData>
            <Name>
              {game.game.name}
            </Name>
            <GameInfo>
              <Added>
                <h4>Añadido</h4>
                {parseDate(game.creationMoment)}
              </Added>
              <LastModified>
                <h4>Última vez modificado</h4>
                {parseDate(game.lastModified)}
              </LastModified>
              <State state={game.status} onClick={(event) => { event.preventDefault(); handleOnClick(game); }}>{game.status}</State>
            </GameInfo>
          </GameData>
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
