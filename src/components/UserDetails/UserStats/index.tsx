import React from 'react';
import type { FC } from 'react';
import type { Rating, RatingType } from '@/models/Rating/types';
import { Container } from './styles';

export type Props = {
  userRating: Rating;
};

const UserStats:FC<Props> = ({ userRating }) => {
  const handleRenderStats = () => {
    if (!userRating) return <h1>No hay estadísticas disponibles...</h1>;
    return Object.keys(userRating).map((type) => {
      const rating = userRating[type as RatingType];
      return (
        <div key={type}>
          <h3>{rating}</h3>
        </div>
      );
    });
  };

  return (
    <Container>
      {handleRenderStats()}
    </Container>
  );
};

export default UserStats;
