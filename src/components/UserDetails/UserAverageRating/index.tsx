import React from 'react';
import type { FC } from 'react';
import type { Rating } from '@/models/Rating/type';
import { Container } from './styles';

export type Props = {
  userRating: Rating[];
};
const UserAverageRating:FC<Props> = ({ userRating }) => (
  <Container>
    {userRating.map((rating) => rating.rating)
      .reduce((a, b) => a + b, 0) / userRating.length}
    {' '}
    / 5
  </Container>
);

export default UserAverageRating;
