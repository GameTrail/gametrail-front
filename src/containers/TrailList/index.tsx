import type { ChangeEvent } from 'react';
import React, { useEffect, useState, memo } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import PaginationCard from '@/components/PaginationCard';
import type { Trail } from '@/models/Trail/types';
import {
  Container, Input, Title, TrailListContainer,
} from './styles';
import TrailCard from './TrailCard';

const API_URL = 'https://gametrail-backend-production-8fc0.up.railway.app/api/getTrail/';
const TrailList = () => {
  const [trails, setTrails] = useState<Trail[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleRenderTrails = () => {
    if (!trails) return null;
    return trails.map((trail) => (
      <TrailCard key={trail.id} trail={trail} />
    ));
  };

  const handleUpdateSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSetPages = (trailsCount: number) => {
    setPages(Math.ceil(trailsCount / 16));
  };

  const handlePagination = async (page: number) => {
    setLoading(true);
    try {
      const searchUrl = `${API_URL}?page=${page}`;
      const response = await fetch(searchUrl);
      const data = await response.json();

      setTrails(data.results);
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
      const searchUrl = searchTerm.length > 2 ? `${API_URL}?search=${searchTerm}` : API_URL;
      const response = await fetch(searchUrl);
      const data = await response.json();
      setTrails(data.results);
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
    <Container>
      <Title>Listado de Trails</Title>
      <Input type="text" value={searchQuery} onChange={handleUpdateSearchQuery} placeholder="Buscar..." />
      <TrailListContainer>
        {handleRenderTrails()}
      </TrailListContainer>
      <PaginationCard
        pages={pages}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />
    </Container>
  );
};

export default memo(TrailList);
