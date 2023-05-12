import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-named-default
import { default as ErrorComponent } from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import { TrailGameStatus } from '@/models/Trail/types';
import type { Trail, GameInTrail } from '@/models/Trail/types';

import { getUserCookie } from '@/utils/login';
import { normalizeImage } from '@/utils/normalizeImage';
import {
  Container, GameImage, GameInfo, LastModified, MotionGame, MotionGameVariants, Name, State,
} from './styles';

export type Props = {
  trailData: Trail;
};

const TrailGameList:FC<Props> = ({ trailData }) => {
  const user = getUserCookie();
  const token = user?.token;
  const [gameList, setGameList] = useState<GameInTrail[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [putGame, setPutGame] = useState<boolean | null>(null);

  useEffect(() => {
    // gametrail-backend-s4-production.up.railway.app/api/allGamesInTrail/?trail=59
    const fetchTrailGames = async (id: number) => {
      setLoading(true);
      try {
        const response = await fetch(`gametrail-backend-s4-production.up.railway.app/api/allGamesInTrail/?trail=${id}`);
        const data = await response.json();
        setGameList(data);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTrailGames(trailData.id);
  }, [putGame, trailData.id]);

  const handleOnClick = async (game: GameInTrail, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (user && token) {
      const currentState = game.status;
      let newState = null;
      if (currentState === TrailGameStatus.PENDING) {
        newState = TrailGameStatus.PLAYING;
      } else if (currentState === TrailGameStatus.PLAYING) {
        newState = TrailGameStatus.FINISHED;
      } else {
        newState = TrailGameStatus.PENDING;
      }
      const requestData = {
        trail: trailData.id.toString(),
        game: game.games.id.toString(),
        priority: game.priority,
        message: game.message,
        status: newState.toString(),
      };
      try {
        const res = await fetch('gametrail-backend-s4-production.up.railway.app/api/gameInTrail', {
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
      } catch (err) {
        throw new Error();
      }
      setPutGame(!putGame);
    }
  };

  const handleRenderStateButton = (game: GameInTrail) => (trailData.owner.id === user?.id
    ? <State onClick={(event) => handleOnClick(game, event)} state={game.status}>{game.status}</State>
    : <State state={game.status}>{game.status}</State>);

  const handleRenderGames = () => gameList?.map((game: GameInTrail) => (
    <MotionGame
      href={`/game/${game.games.id}`}
      variants={MotionGameVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.1,
        delay: 0.1 * game.priority,
        opacity: { duration: 0.6, delay: 0.1 * game.priority },
      }}
    >
      <GameImage src={normalizeImage(game.games.image)} alt="image" width={160} height={160} />
      <GameInfo>
        <Name>{game.games.name}</Name>
        <LastModified>{game.games.releaseDate}</LastModified>
        {handleRenderStateButton(game)}
      </GameInfo>
    </MotionGame>
  ));

  if (loading) return <LoadingSpinner />;
  if (error || !gameList) return <ErrorComponent />;
  return (
    <Container>
      {handleRenderGames()}
    </Container>
  );
};

export default TrailGameList;
