import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import { GameDetails } from '@/containers';
import type { Game as GameProps } from '@/models/Game/types';
import type { Trail } from '@/models/Trail/types';

const Game = () => {
  const [gameDetails, setGameDetails] = useState<GameProps | null>(null);
  const [trailData, setTrailData] = useState<Trail[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchGameDetails = async () => {
      setLoading(true);
      try {
        const [gameDetailsResponse, trailDataResponse] = await Promise.all([
          fetch(`https://gametrail-backend-production-8fc0.up.railway.app/api/game/${id}/`),
          fetch(`https://gametrail-backend-production-8fc0.up.railway.app/api/getTrail/?games__game=${id}`),
        ]);
        const gameDetailsData = await gameDetailsResponse.json();
        const trailDataData = await trailDataResponse.json();
        setGameDetails(gameDetailsData);
        setTrailData(trailDataData.results);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchGameDetails();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error || !gameDetails || !trailData) return <Error />;
  return <GameDetails gameDetails={gameDetails} trailData={trailData} />;
};

export default Game;
