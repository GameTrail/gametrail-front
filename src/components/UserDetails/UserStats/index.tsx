import React from 'react';
import type { FC } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Rating, RatingType } from '@/models/Rating/types';
import { COLOR_MAP } from './constants';
import { Container } from './styles';

export type Props = {
  userRating: Rating;
};

const UserStats:FC<Props> = ({ userRating }) => {
  const handleRenderStats = () => {
    if (!userRating) return <h1>No hay estadísticas disponibles...</h1>;
    return Object.keys(userRating).map((type) => {
      const rating = userRating[type as RatingType];
      const ratingFixed = Number.isInteger(rating) ? rating : rating.toFixed(1);
      return (
        <div key={type}>
          <h3>
            <span>
              <FontAwesomeIcon icon={faCircle as IconProp} color={COLOR_MAP[type as RatingType]} />
            </span>
            {' '}
            {ratingFixed}
            {' '}
            -
            {' '}
            {type.toUpperCase()}
          </h3>
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
