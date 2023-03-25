import type { Rating } from './types';
import { RatingType } from './types';

export const MOCK_USER_RATING: Rating[] = [
  {
    type: RatingType.KINDNESS,
    rating: 3,
    ratedUser: 'MOCK_USERS[0]',
    userWhoRate: 'MOCK_USERS[1]',

  },
  {
    type: RatingType.ABILITY,
    rating: 3,
    ratedUser: 'MOCK_USERS[1]',
    userWhoRate: 'MOCK_USERS[0]',
  },
  {
    type: RatingType.AVAILABILITY,
    rating: 3,
    ratedUser: 'MOCK_USERS[0]',
    userWhoRate: 'MOCK_USERS[1]',
  },
  {
    type: RatingType.FUNNY,
    rating: 3,
    ratedUser: 'MOCK_USERS[0]',
    userWhoRate: 'MOCK_USERS[1]',
  },
  {
    type: RatingType.TEAMWORK,
    rating: 3,
    ratedUser: 'MOCK_USERS[1]',
    userWhoRate: 'MOCK_USERS[0]',
  },
];
