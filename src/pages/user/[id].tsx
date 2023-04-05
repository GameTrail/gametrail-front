import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import { UserDetails } from '@/containers';
import type { User as UserDetailsProps } from '@/models/User/types';

const User = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserDetailsProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { id } = router.query;

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://gametrail-backend-production-8fc0.up.railway.app/api/user/${id}/`);
        const data = await response.json();
        setUserData(data);
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
