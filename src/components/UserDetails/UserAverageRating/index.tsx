import React from 'react';
import type { FC } from 'react';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Rating } from '@/models/Rating/types';
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
    {' '}
    <FontAwesomeIcon icon={faMeteor} color="#31A4F1" size="lg" />
  </Container>
);

export default UserAverageRating;
