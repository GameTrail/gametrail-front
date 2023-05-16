import React, {
  useEffect, useState,
} from 'react';
import { motion } from 'framer-motion';
import { t } from 'i18next';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import PaginationCard from '@/components/PaginationCard';
import useTrail from '@/hooks/useTrail';
import type { Trail } from '@/models/Trail/types';
import { getUserCookie } from '@/utils/login';
import TrailSearchForm from '../../components/Trail/TrailSearchForm/TrailSearchForm';
import {
  Container, TrailListContainer, Content, Title,
} from './styles';
import TrailCard from './TrailCard';

const API_URL = 'https://gametrail-backend-s4-production.up.railway.app/api/getTrail/';

const TrailList = () => {
  const {
    result,
    handleUpdateSearchForm,
    handleSearch,
    handleReset,
    searchFormQuery,
  } = useTrail();

  const [trails, setTrails] = useState<Trail[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const user = getUserCookie();

  const handleRenderTrails = () => {
    if (result.length > 0) {
      return result.map((trail) => <TrailCard key={trail.id} trail={trail} />);
    }
    if (!trails) return null;

    return trails?.map((trail) => (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={trail.id}
      >
        <TrailCard key={trail.id} trail={trail} />
      </motion.div>
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
    <motion.div layout>
      <Container>
        <Title>{t('list_trails')}</Title>
        <Content>
          {
            user?.plan === 'Premium' && (
            <TrailSearchForm
              handleSearch={handleSearch}
              handleUpdateSearchForm={handleUpdateSearchForm}
              searchFormQuery={searchFormQuery}
              handleReset={handleReset}
            />
            )
          }
          <TrailListContainer>
            {handleRenderTrails()}
          </TrailListContainer>
        </Content>
        <PaginationCard
          pages={pages}
          currentPage={currentPage}
          handlePagination={handlePagination}
        />
      </Container>
    </motion.div>
  );
};

export default TrailList;
