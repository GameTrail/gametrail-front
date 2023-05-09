import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import TrailDetails from '@/containers/Trail/TrailDetails';
import type { Trail as TrailData } from '@/models/Trail/types';

const Trail = () => {
  const router = useRouter();
  const [trailData, setTrailData] = useState<TrailData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    const fetchTrail = async () => {
      setLoading(true);
      try {
        const response = await fetch(`gametrail-backend-s4-production.up.railway.app/api/getTrail/${id}`);
        const data = await response.json();
        setTrailData(data);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTrail();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <Error />;
  return <TrailDetails trailData={trailData} />;
};

export default Trail;
