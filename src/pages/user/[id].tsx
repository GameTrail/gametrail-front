import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import { UserDetails } from '@/containers';
import type { User as UserProps } from '@/models/User/types';
import { normalizeUserRating } from '@/utils/normalizeUserRating';

const User = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://gametrail-backend-s4-production.up.railway.app/api/user/${id}/`);
        const data = await response.json();

        const normalizedUserData: UserProps = {
          ...data,
          average_ratings: normalizeUserRating(data.average_ratings),
        };
        setUserData(normalizedUserData);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error || !userData) return <Error />;

  return <UserDetails userData={userData} />;
};

export default User;
