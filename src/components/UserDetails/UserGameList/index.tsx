import React, { useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import NotFoundList from '@/components/Lotties/User/NotFoundList';
import { GameListState } from '@/models/GameList/types';
import type { GameList } from '@/models/GameList/types';
import { getUserCookie } from '@/utils/login';
import {
  Container, GameListEmpty,
} from './styles';
import UserGameCard from './UserGameCard';

const API_URL = 'https://gametrail-backend-production-8fc0.up.railway.app/api';

export type Props = {
  userId: number;
};

const UserGameList: FC<Props> = ({ userId }) => {
  const [gameList, setGameList] = useState<GameList[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const user = getUserCookie();

  const fetchGameListItem = useCallback(async () => {
    setError(false);
    setLoading(true);
    try {
      const url = `${API_URL}/user/${userId}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        setError(true);
        return;
      }
      setGameList(data.games);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const checkGameListStatus = (status: GameListState) => {
    if (status === GameListState.PENDING) {
      return GameListState.PLAYING;
    } if (status === GameListState.PLAYING) {
      return GameListState.FINISHED;
    }
    return GameListState.PENDING;
  };

  const onUpdateGameStatus = async (gameListItem: GameList) => {
    if (!user) return;
    try {
      const { game, status } = gameListItem;
      const requestData = {
        user: user.id.toString(),
        game: game.id.toString(),
        status: checkGameListStatus(status),
      };
      const res = await fetch(`${API_URL}/gameList/game`, {
        method: 'PUT',
        body: JSON.stringify(requestData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${user.token}`,
        },
      });
      if (!res.ok) {
        setError(true);
        return;
      }
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      fetchGameListItem();
    }
  };

  const handleRenderGames = () => {
    if (!gameList || gameList?.length === 0) {
      return (
        <GameListEmpty>
          <p>Aún no hay listas de juegos creadas</p>
          <NotFoundList />
        </GameListEmpty>
      );
    }
    return (gameList.map((gameListItem) => <UserGameCard gameListItem={gameListItem} onUpdateGameStatus={onUpdateGameStatus} />));
  };

  useEffect(() => {
    fetchGameListItem();
  }, [fetchGameListItem]);

  if (loading) return <LoadingSpinner />;
  if (error) return <Error />;
  return (
    <Container>
      {handleRenderGames()}
    </Container>
  );
};

export default UserGameList;
