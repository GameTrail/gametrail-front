import React from 'react';
import type { FC } from 'react';
import type { Rating } from '@/models/Rating/types';
import { calculateAverageRating } from '@/utils/calculateAverageRating';
import { Container } from './styles';

export type Props = {
  userRating: Rating;
};
const UserAverageRating:FC<Props> = ({ userRating }) => {
  const avergareRating = calculateAverageRating(userRating);
  return (
    <Container>
      {avergareRating}
    </Container>
  );
};

export default UserAverageRating;
