import React, { useEffect, useState } from 'react';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import { GameList } from '@/containers';
import type { Game } from '@/models/Game/types';

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchGames = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/game/');
      const data = await response.json();
      setGames(data);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <Error />;

  return <GameList games={games} />;
};

export default Games;
