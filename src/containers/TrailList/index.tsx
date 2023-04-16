import React, { useEffect, useState, memo } from 'react';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import PaginationCard from '@/components/PaginationCard';
import useLanguage from '@/i18n/hooks';
import type { Trail } from '@/models/Trail/types';
import { Container, Title, TrailListContainer } from './styles';
import TrailCard from './TrailCard';

const API_URL = 'https://gametrail-backend-production-8fc0.up.railway.app/api/getTrail/';
const TrailList = () => {
  const { t } = useLanguage();
  const [trails, setTrails] = useState<Trail[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleRenderTrails = () => {
    if (!trails) return null;
    return trails.map((trail) => (
      <TrailCard key={trail.id} trail={trail} />
    ));
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
    <Container>
      <Title>{t('list_trails')}</Title>
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
