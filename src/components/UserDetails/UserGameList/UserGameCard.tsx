import type { FC } from 'react';
import { useState, useEffect, memo } from 'react';

import type { GameList } from '@/models/GameList/types';
import { GameListState } from '@/models/GameList/types';
import { getUserCookie } from '@/utils/login';
import {
  Added, Game, GameData, GameImage, GameInfo, LastModified, Name, State,
} from './styles';

type Props = {
  game: GameList;
};

const UserGameCard: FC<Props> = ({ game }) => {
  const user = getUserCookie();
  const token = user?.token;
  const [gameStatus, setGameStatus] = useState(game.status);

  useEffect(() => {
    setGameStatus(game.status);
  }, [game.status]);

  const parseDate = (date: string) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const updateGameStatus = async (status: GameListState) => {
    if (user && token) {
      const requestData = {
        user: user.id.toString(),
        game: game.game.id.toString(),
        status: status.toString(),
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
        setGameStatus(status);
      } catch (error) {
        throw new Error();
      }
    }
  };

  const handleOnClick = () => {
    const currentState = gameStatus;
    if (currentState === GameListState.PENDING) {
      updateGameStatus(GameListState.PLAYING);
    } else if (currentState === GameListState.PLAYING) {
      updateGameStatus(GameListState.FINISHED);
    } else {
      updateGameStatus(GameListState.PENDING);
    }
  };

  return (
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
          <State state={gameStatus} onClick={(event) => { event.preventDefault(); handleOnClick(); }}>{gameStatus}</State>
        </GameInfo>
      </GameData>
    </Game>
  );
};

export default memo(UserGameCard);
