import React from 'react';
import type { FC } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Rating } from '@/models/Rating/types';
import { MOCK_USER_RATING } from '../../../models/Rating/mock';
import { COLOR_MAP } from './constants';
import { Container } from './styles';

export type Props = {
  userRating: Rating[];
};

const UserStats:FC<Props> = ({ userRating }) => {
  const handleRenderStats = () => {
    if (userRating.length !== 0) {
      userRating.map((rating) => (
        <div key={rating.ratingType}>
          <span>
            <FontAwesomeIcon icon={faCircle as IconProp} color={COLOR_MAP[rating.ratingType]} />
          </span>
          {rating.rating}
          {' '}
          {rating.ratingType}
        </div>
      ));
    }
    return (
      MOCK_USER_RATING.map((rating) => (
        <div key={rating.ratingType}>
          <span>
            <FontAwesomeIcon icon={faCircle as IconProp} color={COLOR_MAP[rating.ratingType]} />
          </span>
          {rating.rating}
          {' '}
          {rating.ratingType}
        </div>
      ))
    );
  };

  return (
    <Container>
      {handleRenderStats()}
    </Container>
  );
};

export default UserStats;
