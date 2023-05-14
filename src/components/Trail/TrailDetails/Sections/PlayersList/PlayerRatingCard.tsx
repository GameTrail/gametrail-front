import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import type { Rating } from '@/models/Rating/types';
import type { TrailMember } from '@/models/TrailUser/types';
import { calculateAverageRating } from '@/utils/calculateAverageRating';
import { normalizeUserRating } from '@/utils/normalizeUserRating';

const API_URL = 'https://gametrail-backend-s4-production.up.railway.app/api';

interface Props {
  trailMember: TrailMember;
}
const PlayerRating: FC<Props> = ({ trailMember }) => {
  const [userRating, setUserRating] = useState<Rating>(null);
  const averageRating = calculateAverageRating(userRating);

  useEffect(() => {
    const fetchUserRating = async () => {
      const response = await fetch(`${API_URL}/user/${trailMember.id}`);
      const data = await response.json();

      const normalizedData = normalizeUserRating(data.average_ratings);
      setUserRating(normalizedData);
    };

    fetchUserRating();
  }, [trailMember.id]);

  if (averageRating === -1) {
    return (
      <span>
        No 🙈
      </span>
    );
  }

  return (
    <span>
      {averageRating}
      {' '}
      ⭐
    </span>
  );
};

export default PlayerRating;
