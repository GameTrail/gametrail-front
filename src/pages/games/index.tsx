import type { ChangeEvent } from 'react';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import { GameList } from '@/containers';
import type { Game } from '@/models/Game/types';

const GAMES_URL = 'https://gametrail-backend-s4-production.up.railway.app/api/game/';

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pages, setPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleUpdateSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSetPages = (gamesCount: number) => {
    setPages(Math.ceil(gamesCount / 16));
  };

  const handlePagination = async (page: number) => {
    setLoading(true);
    try {
      const searchUrl = `${GAMES_URL}?page=${page}&search=${searchQuery}`;
      const response = await fetch(searchUrl);
      const data = await response.json();

      setGames(data.results);
      handleSetPages(data.count);
      setCurrentPage(page);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const debounceSearch = useDebouncedCallback(async (searchTerm: string) => {
    setLoading(true);
    try {
      const searchUrl = searchTerm.length > 2 ? `${GAMES_URL}?search=${searchTerm}` : GAMES_URL;
      const response = await fetch(searchUrl);
      const data = await response.json();
      setGames(data.results);
      handleSetPages(data.count);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, 750);

  useEffect(() => {
    debounceSearch(searchQuery);
  }, [debounceSearch, searchQuery]);

  if (loading) return <LoadingSpinner />;
  if (error) return <Error />;

  return (
    <GameList
      games={games}
      pages={pages}
      currentPage={currentPage}
      searchQuery={searchQuery}
      handleUpdateSearchQuery={handleUpdateSearchQuery}
      handlePagination={handlePagination}
    />
  );
};

export default Games;
