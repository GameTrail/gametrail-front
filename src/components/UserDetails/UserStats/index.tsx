import React from 'react';
import type { FC } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { Rating } from '@/models/Rating/type';
import { Container } from './styles';

export type Props = {
  userRating: Rating[];
};

const COLORS = [{
  ratingType: 'Kindness',
  color: '#ff9b05',
},
{
  ratingType: 'Ability',
  color: '#ebcb8b',
},
{
  ratingType: 'Availability',
  color: '#a3be8c',
},
{
  ratingType: 'Funny',
  color: '#b48ead',
},
{
  ratingType: 'Teamwork',
  color: '#bf616a',
},
];

const UserStats:FC<Props> = ({ userRating }) => (
  <Container>

    {userRating.map((rating) => (
      <div key={rating.ratingType}>
        <span>
          <FontAwesomeIcon icon={faCircle as IconProp} color={COLORS.filter((item) => item?.ratingType === rating?.ratingType).at(0).color} />
        </span>
        {rating.rating}
        {' '}
        {rating.ratingType}
      </div>
    ))}
  </Container>
);

export default UserStats;
