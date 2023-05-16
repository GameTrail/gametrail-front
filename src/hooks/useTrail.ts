import { useState, useEffect } from 'react';
import type { SearchProps } from '@/components/Trail/TrailSearchForm/types';
import { DEFAULT_TRAIL_SEARCH_FORM } from '@/components/Trail/TrailSearchForm/types';
import type { Trail } from '@/models/Trail/types';

const TRAIL_SEARCH_QUERY = 'https://gametrail-backend-s4-production.up.railway.app/api/getTrail/';

const useTrail = () => {
  const [searchFormQuery, setSearchFormQuery] = useState<SearchProps>(DEFAULT_TRAIL_SEARCH_FORM);
  const [result, setResult] = useState<Trail[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleUpdateSearchForm = (payload : SearchProps) => {
    setSearchFormQuery(payload);
  };

  const handleSearch = async (payload : SearchProps) => {
    setLoading(true);
    setError(false);

    const userName = `user_name=${payload.username}`;
    const platform = `platform=${payload.platform}`;
    const startDate = `started_after=${payload.startDate}`;
    const game = `game_name=${payload.game}`;

    const query = `${TRAIL_SEARCH_QUERY}?${userName}&${platform}&${game}&${startDate}`;
    try {
      const response = await fetch(query);
      const data = await response.json();
      setResult(data.results);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    setLoading(true);
    setError(false);

    const query = `${TRAIL_SEARCH_QUERY}`;
    try {
      const response = await fetch(query);
      const data = await response.json();
      setResult(data.results);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(result);
  }, [result]);
  return {
    result,
    loading,
    error,
    handleSearch,
    handleReset,
    handleUpdateSearchForm,
    searchFormQuery,
  };
};

export default useTrail;
