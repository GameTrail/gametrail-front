import React, { useEffect, useState, memo } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import type { Trail } from '@/models/Trail/types';
import { Container, Title, TrailListContainer } from './styles';
import TrailCard from './TrailCard';

const TrailList = () => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRenderTrails = () => trails.map((trail) => (
    <TrailCard key={trail.id} trail={trail} />
  ));

  useEffect(() => {
    const fetchTrails = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/getTrail/');
        const data = await response.json();
        setTrails(data);
        setError(null);
      } catch (err) {
        setError('Ops! Ha ocurrido un error inesperado.');
      } finally {
        setLoading(false);
      }
    };
    fetchTrails();
  }, []);
  if (loading) return <LoadingSpinner />;
  if (error) return <p>{error}</p>;
  return (
    <Container>
      <Title>Listado de Trails</Title>
      <TrailListContainer>
        {handleRenderTrails()}
      </TrailListContainer>
    </Container>
  );
};

export default memo(TrailList);
