import React from 'react';
import type { FC } from 'react';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Rating } from '@/models/Rating/types';
import { calculateAverageRating } from '@/utils/calculateAverageRating';
import { Container } from './styles';

export type Props = {
  userRating: Rating;
};
const UserAverageRating:FC<Props> = ({ userRating }) => {
  const averageRating = calculateAverageRating(userRating);
  const averageRatingFixed = Number.isInteger(averageRating) ? averageRating : averageRating.toFixed(1);
  return (
    <Container>
      {averageRatingFixed}
      <FontAwesomeIcon icon={faMeteor} data-testid="rating-icon" color="#31A4F1" size="lg" />
    </Container>
  );
};

export default UserAverageRating;
