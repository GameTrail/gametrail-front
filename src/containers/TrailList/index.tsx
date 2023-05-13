import type { ChangeEvent } from 'react';
import React, { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { useDebouncedCallback } from 'use-debounce';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import PaginationCard from '@/components/PaginationCard';
import useLanguage from '@/i18n/hooks';
import type { Trail } from '@/models/Trail/types';
import {
  Container, Title, TrailListContainer, Input,
} from './styles';
import TrailCard from './TrailCard';

const API_URL = 'https://gametrail-backend-s4-production.up.railway.app/api/getTrail/';
const TrailList = () => {
  const { t } = useLanguage();
  const [trails, setTrails] = useState<Trail[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pages, setPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleRenderTrails = () => {
    if (!trails) return null;
    return trails.map((trail) => (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TrailCard key={trail.id} trail={trail} />
      </motion.div>
    ));
  };

  const handleSetPages = (trailsCount: number) => {
    setPages(Math.ceil(trailsCount / 16));
  };

  const handleUpdateSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
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

  useEffect(() => {
    const fetchTrails = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (!response.ok) {
          setError(true);
          return;
        }
        setTrails(data.results);
        handleSetPages(data.count);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTrails();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <Error />;

  return (
    <motion.div layout>
      <Container>
        <Title>{t('list_trails')}</Title>
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
    </motion.div>
  );
};

export default memo(TrailList);
